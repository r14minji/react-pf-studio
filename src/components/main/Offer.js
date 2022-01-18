const path = process.env.PUBLIC_URL;

function Offer(){
  return(
    <section className="content offerM myScroll">
      <div className="inner"> 
        <h1>what we offer</h1>

        <div className="wrap">
          <article>
            <div className="pic">
              <img src={path + "/img/offer1.png"} alt="카메라" />
            </div>
            <div className="txt">
              <h2>world wide movie</h2>
              <p>Ducimus alias aspernatur quidem dolores dolorum et quaerat incidunt voluptatibus pariatur. Iure!</p>
            </div>
          </article>
          <article>
            <div className="pic">
              <img src={path + "/img/offer2.png"} alt="슬레이트와 필름" />
            </div>
            <div className="txt">
              <h2>world wide movie</h2>
              <p>Ducimus alias aspernatur quidem dolores dolorum et quaerat incidunt voluptatibus pariatur. Iure!</p>
            </div>
          </article>
          <article>
            <div className="pic">
              <img src={path + "/img/offer3.png"} alt="촬영용 간의 의자" />
            </div>
            <div className="txt">
              <h2>world wide movie</h2>
              <p>Ducimus alias aspernatur quidem dolores dolorum et quaerat incidunt voluptatibus pariatur. Iure!</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Offer;