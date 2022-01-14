//이슈: article의 정보를 json파일로 받아오고 싶은데, useEffect에서 카카오api와 json파일 각각 axios하면 되는건지?? 
import { useEffect, useRef, useState } from "react";

import { faEnvelopeSquare, faFilm, faStreetView  } from "@fortawesome/free-solid-svg-icons";
import { faFileVideo } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const html = document.querySelector("html");
const path = process.env.PUBLIC_URL;

function Contact(){
  //윈도우 전역에 등록되어 있는 kakao 객체를 불러옴
  const {kakao} = window;
  //useRef로 #map 참조
  const container = useRef(null);

  //컴포넌트 생성시
  useEffect(()=>{
    html.style.backgroundColor = "#FFFFEB";
    
    const options = { 
      center: new kakao.maps.LatLng(37.5132313,127.0594368), 
      level: 3
    };
    
    //카카오맵 생성자로부터 인스턴스 복사해서 맵 실행
    const map = new kakao.maps.Map(container.current, options); 


    return ()=>{
      html.style.backgroundColor = "#e6e2dd"
    }
  },[])

  return(
    <>
    {/* title */}
    <section className="contact">
      <div className="inner">
        <div className="title">
          <h1>&#8548;.Contact</h1>
          <p>contact us to get more information about studioalice</p>
        </div>
          <div className="memo">
          <span>Sno.30</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio, excepturi a dolorem.</p>
        </div>
        <div className="numbering">
          <p>Lorem ipsum<br />amet consectetur <br />elit. Ea, illo!</p>
          <strong>#0001</strong>
        </div>
      </div>
    </section>

    {/* loaction - article, map, button */}
    <section className="location">
      <div className="inner">
        <h1>loaction</h1>
        {/* article - info headquater, brnach */}
        <div className="wrap">
          <article>
            <span>Headquarters</span>
            <p>Gangnam</p>
            <ul>
              <li>Address: 396, Gangnam-daero, Gangnam-gu, Seoul, Republic of Korea</li>
              <li>Email : info-gangnam@studioalice.co.kr</li>
              <li>Phone: + (123) 456 7890</li>
              <li>Open Daily 10:30–6:30, Weekends Until 8:00</li>
            </ul>
          </article>
          <article>
            <span>Branch Office</span>
            <p>JeJu</p>
            <ul>
              <li>Address: 396, Gangnam-daero, Gangnam-gu, Seoul, Republic of Korea</li>
              <li>Email : info-gangnam@studioalice.co.kr</li>
              <li>Phone: + (123) 456 7890</li>
              <li>Open Daily 10:30–6:30, Weekends Until 8:00</li>
            </ul>
          </article>
          <article>
            <span>Branch Office</span>
            <p>Busan</p>
            <ul>
              <li>Address: 70-2, Seongsanjungang-ro, Seongsan-eup, Seogwipo-si, Jeju-do, Republic of Korea</li>
              <li>Email : info-jeju@studioalice.co.kr</li>
              <li>Phone: + (123) 456 7890</li>
              <li>Open Daily 10:30–6:30, Weekends Until 8:00</li>
            </ul>
          </article>
        </div>
        {/* kakao-map */}
        <div className="wrap_map">
          <div id="map" ref={container}></div>
        </div>
        {/* button */}
        <ul className="btn_branch">
          <li className="on" data-index="0"><button>Gangnam Headquarters</button></li>
          <li data-index="1"><button >JeJu Branch Office</button></li>
          <li data-index="2"><button>Busan Branch Office</button></li>
        </ul>
      </div>
    </section>

    {/* recruit, support ,get in touch */}
    <section className="message">
      <div className="inner">
        <div className="wrap">
          <article>
            <h1>Recruit</h1>
            <div className="pic">
              <img src={path+"/img/contact1.jpg"} />
            </div>
            <div className="txt">
              <h2>Build an employer brand</h2>
              <ul>
                <li>Find new people to work in a company, join an organization, do a job.</li>
                <li><FontAwesomeIcon icon={faStreetView} /> Position<br/> Producer </li>
                <li><FontAwesomeIcon icon={faFilm} /> Responsibilities<br/> person who supervises recorded performance for exhibition or dissemination to the public</li>
                <li><FontAwesomeIcon icon={faFileVideo} /> Qualification<br/> select scripts, hire and approve of actors and directors, create budgets, secure financing, arrange rehearsals, and settle contracts with other personnel. </li>
                <li> <FontAwesomeIcon icon={faEnvelopeSquare} /> Email<br/> info-recruit@studioalice.co.kr</li>
              </ul>
            </div>
          </article>
          <article>
            <h1>Support</h1>
            <div className="pic">
              <h2>Donate to the World Studio Foundation </h2>
              <img src={path+"/img/contact2.jpg"} />
            </div>
            <div className="txt">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil excepturi eos aspernatur modi quam maxime cumque enim tempore perferendis, tenetur, adipisci reiciendis perspiciatis ipsa minima fuga quisquam porro itaque reprehenderit, corporis nam? Iure incidunt nihil, est quisquam, culpa consequuntur animi veniam impedit quaerat reprehenderit excepturi. <br /><br />Modi necessitatibus placeat ratione corrupti expedita eos magni dolores. Itaque sapiente, eligendi vero explicabo aspernatur eos corrupti eum incidunt soluta dicta ducimus architecto. Rerum. <br /><br /> Iure incidunt nihil, est quisquam, culpa consequuntur animi veniam impedit minima fuga quisquam porro.</p>
              

            </div>
          </article>
          <article>
            <h1>Get In Touch</h1>
            <div className="pic">
              <img src={path+"/img/contact3.png"} />
            </div>
            <div className="txt">
              <h2>we promise you’ll always receive a warm welcome from the team.</h2>

              <select name="familySite" id="familySite">
                <option value="">Family Site</option>
                <option value="https://www.pinterest.co.kr/">pinterest</option>
                <option value="https://fontawesome.com/">fontawesome</option>
                <option value="https://fonts.google.com/">google fonts</option>
              </select>
            </div>
          </article>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact;