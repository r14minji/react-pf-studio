import axios from "axios";
import { useEffect, useState } from "react";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faStar  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector, useDispatch } from "react-redux";
import { setMembers } from '../../redux/actions';


const body = document.querySelector("body");
const path = process.env.PUBLIC_URL;

function VidList(){
  const api_key = "AIzaSyCpNKtPx5E3mMI60UE3hwHpAnBKEKiueuc";
  const playListId = "PL5jd_nA7BbYubv925xZLUtapVQjGoV8Ly";
  const num = 4;
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api_key}&playlistId=${playListId}&maxResults=${num}`; 

  let [data, setData] = useState([]);
  let [isPop, setIsPop] = useState(false);
  let [index, setIndex] = useState(0);


  const members = useSelector(state => state.memberReducer.members);
  const dispatch = useDispatch();
  const newMembers = [
    {name:'Tom', position:'CEO'},
    {name:'Emma', position:'Designer'},
    {name:'Michael', position:'Developer'}
  ]



  useEffect(()=>{
    axios
    .get(url)
    .then(json=>{
      //console.log(json.data.items);
      setData(json.data.items);
    })
  },[])


  return(
    <main className="content vidList">


      

      <div className="inner">
        {/* title */}
        {/* <figure>
          <h1>Youtube</h1>
        </figure> */}

        {/* section - youtube API vid list */}
        <section className="list">
          {
            data.map((item, index)=>{
              let tit = item.snippet.title;
              let tit_len = tit.length;
              let desc = item.snippet.description;
              let desc_len = desc.length;
              let date = item.snippet.publishedAt;

              return(
                <article key={index}>
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
                        <img src={path + "/img/movieIcon2.png"} />
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
              )
            })
          }
        </section>

              {/* 삭제 예정 */}
      <button onClick={()=>{
        dispatch(setMembers(newMembers))
      }}>클릭하세요</button>

        {isPop ? <Pop  /> : null}
      </div>
    </main>
  )

  function Pop(){
    useEffect(()=>{
      //console.log("유튜브팝생성")
      body.style.overflow = "hidden";

      return ()=>{
        //console.log("유뷰브팝제거");
        body.style.overflow = "auto";
      }
    },[])

    return(
      <aside className="pop">
        <iframe src={"https://www.youtube.com/embed/" +  data[index].snippet.resourceId.videoId }  width='100%' height='100%'></iframe>
        <span className="btnClose" onClick={()=>{
          setIsPop(false);
        }}><FontAwesomeIcon icon={faWindowClose} /></span>
        <p>Loading...</p>
      </aside>
    )
  }
}

export default VidList;