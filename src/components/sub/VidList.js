import { useEffect, useState } from "react";
import {useSelector} from 'react-redux';
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const body = document.querySelector("body");
const path = process.env.PUBLIC_URL;

function VidList(){
  const youtube = useSelector(state=>state);
  const vidData = youtube.youtubeReducer.youtube;

  let [isPop, setIsPop] = useState(false);
  let [index, setIndex] = useState(0);
  
  return(
    <main className="content vidList">
      <div className="inner">
        {/* section - youtube API vid list */}
        <section className="list">
          <Swiper 
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={'auto'}       
            loop ={true}
            navigation = {true}
            pagination={{clickable: true}}
          >
          {
            vidData.map((item, index)=>{
              let tit = item.snippet.title;
              let tit_len = tit.length;
              let desc = item.snippet.description;
              let desc_len = desc.length;
              let date = item.snippet.publishedAt;

              return(
                <SwiperSlide key={index}>
                <article>
                  {/* pic - youtube image */}
                  <div className="pic" onClick={()=>{
                    setIsPop(true);
                    setIndex(index);
                  }}>
                    <img src ={item.snippet.thumbnails.medium.url} />
                  </div>

                  {/* icon */}
                  <div className="movieIcon">
                    <div className="popcon"></div>
                    <div className="screen"></div>
                    <div className="camera"></div>
                  </div>

                  {/* ticket box - main ticket, side ticket */}
                  <div className="txt">
                    {/* mainTick - youtube api data */}
                    <div className="mainTick container">
                      <div className="icon">
                        <img src={path + "/img/movieIcon.png"} />
                      </div>
                      <div className="tickName">
                        <p>alice Film Festival</p>
                      </div>
                      <div className="descYoutb">
                        <p>{(desc_len > 120) ? desc = desc.substr(0, 120)+"..." : desc}</p>
                      </div>
                      <div className="titleYoutb">
                        <h2>{(tit_len > 40) ? tit = tit.substr(0,40)+"..." : tit}</h2>
                      </div>
                      <div className="star">
                        <span><FontAwesomeIcon icon={faStar}/></span>
                        <span><FontAwesomeIcon icon={faStar}/></span>
                        <span><FontAwesomeIcon icon={faStar}/></span>
                      </div>
                      <div className="date">
                        <p>Date</p>
                        <span>{date.split("T")[0]}</span>
                      </div>
                      <div className="seat">
                        <p>Seat</p>
                        <span>A-0{index+1}</span>
                      </div>
                      <div className="time">
                        <p>Time</p>
                        <span>03:16 PM</span>
                      </div>
                      <div className="price">
                        <span>Price</span>
                        <strong>$14.99</strong>
                        <p>ADMIT ONE</p>
                      </div>
                      <div className="tickNum">
                        <p>Ticket No. ABC-20728-405-00{index}</p>
                      </div>
                    </div>

                    {/* sideTick */}
                    <div className="sideTick">
                      <div className="wrap container">
                        <div className="admit">
                          <p>ADMIT ONE</p>
                        </div>
                        <div className="greatest">
                          <p>The greatest Days of our lives</p>
                        </div>
                        <div className="date">
                          <p>Date</p>
                          <span>{date.split("T")[0]}</span>
                        </div>
                        <div className="seat">
                          <p>Seat</p>
                          <span>A-0{index+1}</span>
                        </div>
                        <div className="time">
                          <p>Time</p>
                          <span>03:16 PM</span>
                        </div>
                        <div className="tickNum">
                          <p>Ticket No. ABC-20728-405-00{index}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                </SwiperSlide>
              )
            })
          }
          </Swiper>
        </section>

        {isPop ? <Pop  /> : null}
      </div>
    </main>
  )

  function Pop(){
    useEffect(()=>{
      //console.log("??????????????????")
      body.style.overflow = "hidden";

      return ()=>{
        //console.log("??????????????????");
        body.style.overflow = "auto";
      }
    },[])

    return(
      <aside className="pop">
        <iframe src={"https://www.youtube.com/embed/" +  vidData[index].snippet.resourceId.videoId }  width='100%' height='100%'></iframe>
        <span className="btnClose" onClick={()=>{
          setIsPop(false);
        }}><FontAwesomeIcon icon={faWindowClose} /></span>
        <p>Loading...</p>
      </aside>
    )
  }
}

export default VidList;