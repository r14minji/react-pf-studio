import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setYoutube} from '../../redux/actions';
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const body = document.querySelector("body");
const path = process.env.PUBLIC_URL;

function Festival(){
  const youtube = useSelector(state=>state);
  const dispatch = useDispatch();
  const vidData = youtube.youtubeReducer.youtube;
  let [isPop, setIsPop] = useState(false);
  let [index, setIndex] = useState(0);

  //youtube api호출시 url옵션값
  const api_key = "AIzaSyCpNKtPx5E3mMI60UE3hwHpAnBKEKiueuc";
  const playListId = "PL5jd_nA7BbYubv925xZLUtapVQjGoV8Ly";
  const num = 9;
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api_key}&playlistId=${playListId}&maxResults=${num}`; 

  //youtube데이터를 axio로 호출해서 dispatch를 통해 reducer에 전달하는 함수 정의
  const fetchYoutube = async ()=>{
    const response = await axios
    .get(url)
    .catch(err => console.error(err))
    dispatch(setYoutube(response.data.items));
  }

    //컴포넌트 생성시 fetchYoutube를 호출에 reducer에 해당 데이터 전달
    useEffect(()=>{
      fetchYoutube();
    },[]);

  return(
    <section className="content festivalM">
      <div className="inner"> 
        <div className="wrap">
          {/* article1 - posters img */}
          <article>
            <figure>
              <img src={path + "/img/festival1.jpg"} alt="" />
            </figure>
            <figure>
              <img src={path + "/img/festival2.jpg"} alt="" />
            </figure>
            <figure>
              <img src={path + "/img/festival3.jpg"}alt="" />
            </figure>
            <figure>
              <img src={path + "/img/festival4.jpg"} alt="" />
            </figure>
          </article>
          {/* article2 - youtube redux */}
            {
              vidData.map((item, index)=>{
                if(index<1){
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
                        <img src={item.snippet.thumbnails.medium.url}  />
                      </div>
                      <div className="content">
                        <h2>{(tit_len > 40) ? tit = tit.substr(0,40)+"..." : tit}</h2>
                        <p>{(desc_len > 120) ? desc = desc.substr(0, 120)+"..." : desc}</p>
                        <strong>{date.split("T")[0]}</strong>
                        <span>Read More</span>
                      </div>
                    </article>
                  )
                }
              })
            }
          {/* article3 - Movie Festival txt */}
          <article>
            <h1>MOVIE<strong>FESTIVAL</strong></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ratione, est libero consectetur corporis, non fuga quae delectus distinctio nostrum, quos ea soluta facere? Iusto similique facilis cum atque expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis et molestiae labore perferendis placeat non tempora deleniti vero ut amet! Unde libero atque consequuntur sapiente nesciunt doloremque. Aperiam repellat officia placeat eum impedit assumenda excepturi doloribus facilis, provident numquam consectetur. At, cum nulla!</p>
            <span>Read More</span>
          </article>
        </div>

        {isPop ? <Pop  /> : null}
      </div>
    </section>
  )

  function Pop(){
    useEffect(()=>{
      body.style.overflow = "hidden";

      return ()=>{
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

export default Festival;