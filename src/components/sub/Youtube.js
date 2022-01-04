import axios from "axios";
import { useEffect, useState } from "react";

function Youtube(){
  const key = "AIzaSyB3Xi97H8RT0bj6sAR6FQRG1TB8ts5Br7k";
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
                    <div className="pic">
                      <img src ={item.snippet.thumbnails.medium.url} />
                    </div>
                    <div className="txt">
                        <h2>{(tit_len > 30) ? tit = tit.substr(0, 30)+"..." : tit}</h2>
                        <p>{(desc_len > 120) ? desc = desc.substr(0, 250)+"..." : desc}</p>
                        <span>{date.split("T")[0]}</span>
                        <div className="btnWatch" onClick={()=>{
                          setIsPop(true);
                          setIndex(index);
                        }}>Watch Video</div>
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