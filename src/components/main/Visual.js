import { faChevronRight, faChevronLeft, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import Anime from "../../class/anime";

const path = process.env.PUBLIC_URL;

function Visual(){
  const ul = useRef(null);
  const txt = useRef(null);
  let [index, setIndex] = useState(0);
  //console.log(index)

  const prevSlide = ()=>{
    if(index === 0) return;
    setIndex(--index);
    new Anime(ul.current, {
      prop : "margin-left", 
      value : `-${100*index}%`, 
      duration: 500, 
    })
  }

  const nextSlide = ()=>{
    if(index === 5) return;
    setIndex(++index);
    new Anime(ul.current, {
      prop : "margin-left", 
      value : `-${100 * index}%`, 
      duration: 500, 
    })
  }


  return(
    <section className="content visualM">
      <div className="inner"> 
        <div className="wrap">
          <div className="saying">
            <h1>
              <strong><FontAwesomeIcon icon={faQuoteLeft} /></strong>
              Trust your own instinct. <br/> Your mistakes might as well be your own, <br/> instead of someone else's.
              <strong><FontAwesomeIcon icon={faQuoteRight} /></strong>
            </h1>
            <span>Billy Wilder</span>
          </div>
          <div className="banner">
            <ul ref={ul}>
              <li>
                <div className="pic">
                  <img src={path + "/img/visual6.jpg"} alt="" />
                </div>
                <div className="txt"  ref={txt}>
                  <h1>The Grand Budapest Hotel_2014</h1>
                </div>
              </li>
              <li>
                <div className="pic">
                  <img src={path + "/img/visual5.jpg"} alt="" />
                </div>
                <div className="txt"  ref={txt}>
                  <h1>The Florida Project_2017</h1>
                </div>
              </li>
              <li>
                <div className="pic">
                  <img src={path + "/img/visual4.jpg"} alt="" />
                </div>
                <div className="txt"  ref={txt}>
                  <h1>Paterson_ 2016</h1>
                </div>
              </li>
              <li>
                <div className="pic">
                  <img src={path + "/img/visual3.jpg"} alt="" />
                </div>
                <div className="txt"  ref={txt}>
                  <h1>Moonrise Kingdom_2012</h1>
                </div>
              </li>
              <li>
                <div className="pic">
                  <img src={path + "/img/visual2.jpg"} alt="" />
                </div>
                <div className="txt"  ref={txt}>
                  <h1>Mommy_2014</h1>
                </div>
              </li>
              <li>
                <div className="pic">
                  <img src={path + "/img/visual1.jpg"} alt="" />
                </div>
                <div className="txt" ref={txt}>
                  <h1>Attila Marcel _2013</h1>
                </div>
              </li>
            </ul>

            <span className="prev" onClick={prevSlide}><FontAwesomeIcon icon={faChevronLeft} /></span>
            <span className="next" onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visual;