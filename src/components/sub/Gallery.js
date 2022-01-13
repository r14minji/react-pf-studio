import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-component";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const html = document.querySelector("html");
const body = document.querySelector("body");
const path = process.env.PUBLIC_URL;


const masonryOptions ={
  fitWidth: false,
  gutter: 0,
  itemSelector: ".item"
}

function Gallery(){
  let [items, setItems] = useState([]);
  let [index, setIndex] = useState(0);
  let [isPop, setIsPop] = useState(false);
  let [loading, setLoading] = useState(true);
  let [enableClick, setEnableClick] = useState(true);
  let [interest, setInterest] = useState(true);
  let list = useRef(null);
  let input = useRef(null);
  let search = useRef(null);

  useEffect(()=>{
    getFlickr({
      type: "interest",
      count: 30
    });

    body.classList.add("white");
    html.style.backgroundColor = "#303030";
    return()=>{
      body.classList.remove("white");
      html.style.backgroundColor = "#e6e2dd";
    }
  },[])

  return(
    <section className="content gallery">
      <div className="inner">
      <h1 onClick={()=>{
        if(enableClick && !interest){
          setEnableClick(false);
          setLoading(true);
          list.current.classList.remove("on");
          search.current.classList.remove("on");
          getFlickr({
            type: "interest",
            count: 30
          });
        }
      }}>&#8546;. GALLERY</h1>

        {/* Search - input, button */}
        <article className="searchBox" ref={search}>
          <input type="text"  id="search" placeholder="검색어 입력" ref={input} onKeyPress={e=>{
            if(e.key !== "Enter") return;
            if(enableClick){
              setEnableClick(false);
              setInterest(false);
              list.current.classList.remove("on");
              search.current.classList.remove("on");         
              setLoading(true);

              const tags = input.current.value;
              input.current.value = "";

              getFlickr({
                type : "search",
                count: 30,
                tags: tags 
              })
            }
          }}/>
          <button className="btnSearch" onClick={()=>{
            if(enableClick){
              const tags = input.current.value;
              if(tags === "") return;

              setEnableClick(false);
              setInterest(false);
              list.current.classList.remove("on");
              search.current.classList.remove("on");
              setLoading(true);

              input.current.value = "";
              getFlickr({
                type : "search",
                count: 30,
                tags: tags 
              });
            }
          }} >Search</button>
        </article>

        {/* loading */}
        {(loading) ? <img src={path + "/img/loading.png"} className="loading" /> : ""}
        
        {/* flicker list - img, figcaption */}
        <div className="list" ref={list}>
            <Masonry
              className={"wrap"}
              elementType={"ul"}
              disableImagesLoaded={false}
              updateOnEachImageLoad={false}
              options={masonryOptions}
            >
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
          </Masonry>
      </div>
      </div>

      { isPop ? <Pop /> : "" }
    </section>
  )

  async function getFlickr(opt){
    let url = "";

    const baseURL = "https://www.flickr.com/services/rest/?";
    const method1 = "flickr.interestingness.getList";
    const method2 = "flickr.photos.search";
    const key= "e7ed3b39fe112d7e93d03c19325305e0";
    const count =opt.count;

    if(opt.type === "interest"){
      url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1`;
    }
    else if(opt.type === "search"){
      url = `${baseURL}method=${method2}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1&tags=${opt.tags}`;
    }else{
      console.error("api요청 타입을 interest, search중에서 지정하세요.");
    }

    await axios
    .get(url)
    .then(json =>{
      setItems(json.data.photos.photo);
    })
    

    setTimeout(()=>{
      setLoading(false);
      list.current.classList.add("on");    
      search.current.classList.add("on");    
      setTimeout(()=>{
        setEnableClick(true);
      },1000);
    },1000);
  }

  function Pop(){
    const imgSrc= `https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`;

    useEffect(()=>{
      //console.log("갤러리팝생성")
      body.style.overflow = "hidden";

      return ()=>{
        //console.log("갤러리팝제거");
        body.style.overflow = "auto";
      }
    },[])

    return(
      <aside className="pop">
        <img src={imgSrc} />
        <p>{}</p>
        <span onClick={()=>{
          setIsPop(false);
        }}><FontAwesomeIcon icon={faWindowClose} /></span>
      </aside>
    )
  }
}

export default Gallery;



