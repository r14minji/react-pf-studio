//이슈: article의 정보를 json파일로 받아오고 싶은데, useEffect에서 카카오api와 json파일 각각 axios하면 되는건지?? 

function Contact(){

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
        {/* article - info office */}
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
        <div id="map"></div>
        {/* button */}
        <ul className="btn_branch">
          <li class="on" data-index="0"><button>Gangnam Headquarters</button></li>
          <li data-index="1"><button >JeJu Branch Office</button></li>
          <li data-index="2"><button>Busan Branch Office</button></li>
        </ul>
      </div>
    </section>
    </>
  )
}

export default Contact;