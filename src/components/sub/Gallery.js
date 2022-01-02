import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-component";

const path = process.env.PUBLIC_URL;
const body = document.querySelector("body");

function Gallery(){
  let [items, setItems] = useState([]);
  let [index, setIndex] = useState(0);
  let [isPop, setIsPop] = useState(false);


  const baseURL = "https://www.flickr.com/services/rest/?";
  const method1 = "flickr.interestingness.getList";
  const method2 = "flickr.photos.search";
  const key= "e7ed3b39fe112d7e93d03c19325305e0";
  const count =30;
  const url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1`;

  useEffect(()=>{
    axios
    .get(url)
    .then(json =>{
      //console.log(json.data.photos.photo);
      setItems(json.data.photos.photo);
    })
  },[])

  return(
    <section className="content gallery">
      <div className="inner">
        <div className="title_wrap">
          <p>Should I take a photo?</p>
          <h1>&#8546;. GALLERY</h1>
        </div>

        <article className="searchBox">
          <input type="text"  id="search" placeholder="검색어 입력" />
          <button className="btnSearch" >Search</button>
        </article>

        <div className="list">
          <ul className="wrap">
            {
              items.map((item, index)=>{
                const imgSrc =  `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;                
                return(
                  <li key={index} className="item">
                    <figure>
                      <div className="pic">
                        <img src={imgSrc} className="thumb" />
                      </div>
                      <figcaption>
                        <p>{item.title}</p>
                        <span>{item.owner}</span>
                        <div className="btnMore" onClick={()=>{
                          setIsPop(true);
                          setIndex(index);
                        }}>VIEW MORE</div>
                      </figcaption>
                    </figure>                
                  </li>
                )
              })
            }
          </ul>
      </div>
      </div>

      { isPop ? <Pop /> : "" }
    </section>
  )

  function Pop(){
    const imgSrc= `https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`
    return(
      <aside className="pop">
        <img src={imgSrc} />
        <p>{}</p>
        <span onClick={()=>{
          setIsPop(false);
        }}>Close</span>
      </aside>
    )
  }
}

export default Gallery;



