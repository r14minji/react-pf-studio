import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-component";

const path = process.env.PUBLIC_URL;
const body = document.querySelector("body");

function Gallery(){
  const baseURL = "https://www.flickr.com/services/rest/?";
  const method1 = "flickr.interestingness.getList";
  const method2 = "flickr.photos.search";
  const key= "e7ed3b39fe112d7e93d03c19325305e0";
  const count = 10;
  const url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1`;  

  let [items, setItem] = useState([]);
  let [loading, setLoading] = useState(true);
  let [enableClick, setEnableClick] = useState(true); 
  let [interest, setInterest] = useState(true);
  let [isPop, setIsPop] = useState(false);
  let [index, setIndex] = useState(0);
  let list = useRef(null);
  let input = useRef(null);

  useEffect(()=>{
    axios
    .get(url)
    .then(data =>{
      setItems(data.data.photos.photo);
    })
  },[])

  return(
    <section className="content gallery">
      <div className="inner">
        <div className="title_wrap">
          <p>Should I take a photo?</p>
          <h1>&#8546;. Gallery</h1>
        </div>

        <article className="searchBox">
          <input type="text"  id="search" placeholder="검색어 입력" ref={input} />
          <button className="btnSearch" >Search</button>
        </article>

        {(loading) ? <img src={path+"/img/loading.gif"} alt="로딩중입니다." className="loading" /> : ""}

        <div className="list" ref={list}>
          <ul className="wrap">
            {
              items.map((item, index) =>{
                const imgSrc =  `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;
                const imgSrcBic =  `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;

                return(
                  <li key={index} className="item">
                    <figure>
                      <div className="pic">
                        <img src={imgSrc} className="thumb" />
                      </div>
                      <figcaption>
                        <p>{item.title}</p>
                        <span>{item.owner}</span>
                        <a href={imgSrcBic}>VIEW MORE</a>
                      </figcaption>
                    </figure>                
                  </li>
                )
              })
            }
            </ul>
        </div>
      </div>

      { isPop ? <Pop /> : ""}
    </section>
  )
}

export default Gallery;