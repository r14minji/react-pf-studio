import axios from "axios";
import { useEffect, useState } from "react";

const body = document.querySelector("body");

function Youtube(){
  const key = "AIzaSyCpNKtPx5E3mMI60UE3hwHpAnBKEKiueuc";
  const playListId = "PL5jd_nA7BbYubv925xZLUtapVQjGoV8Ly";
  const num = 7;
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResult=${num}`;

  let [data, setData] = useState([]);
  let [isPop, setIsPop] = useState(false);
  let [index, setIndex] = useState(0);

  useEffect(()=>{
    axios
    .get(url)
    .then(json=>{
      //console.log(json.data.items);
      setData(json.data.items);
    })
  },[])


  return(
    <section className="content youtube">
      <div className="inner">
        <h1>&#8547;. Youtube</h1>

        {/* youtube vid list */}
        <div className="list">
            {
              data.map((item, index)=>{
                let tit = item.snippet.title;
                let tit_len = tit.length;
                let desc = item.snippet.description;
                let desc_len = desc.length;
                let date = item.snippet.publishedAt;

                return(
                  <article key={index}>
                    <div className="pic" onClick={()=>{
                      setIsPop(true);
                      setIndex(index);
                    }}>
                      <img src ={item.snippet.thumbnails.medium.url} />
                    </div>
                    <div className="txt">
                      <div className="mainTick container">
                        <div className="icon"></div>
                        <div className="tickName">tickName</div>
                        <div className="descYoutb">descYoutb</div>
                        <div className="titleYoutb">titleYoutb</div>
                        <div className="star">star</div>
                        <div className="date">date</div>
                        <div className="seat">seat</div>
                        <div className="time">time</div>
                        <div className="price">price</div>
                        <div className="sign">sign</div>
                        <div className="tickNum">tickNum</div>
                      </div>
                      {/* sideTick */}
                      <div className="sideTick">
                        <div className="wrap">

                        </div>
                      </div>
                        {/* <h2>{(tit_len > 30) ? tit = tit.substr(0, 30)+"..." : tit}</h2>
                        <p>{(desc_len > 120) ? desc = desc.substr(0, 250)+"..." : desc}</p>
                        <span>{date.split("T")[0]}</span> */}
                      </div>
                  </article>
                )
              })
            }
          </div>

          {isPop ? <Pop  /> : null}
      </div>
    </section>
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
        }}>close</span>
      </aside>
    )
  }
}

export default Youtube;