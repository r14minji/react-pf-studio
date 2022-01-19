const path = process.env.PUBLIC_URL;

function Partners(){
  return(
    <section className="content partnersM">
      <div className="inner"> 
        <h1>GLOBAL PARTNERS</h1>

        <div className="wrap">
          <div className="logo">
            <img src={path + "/img/partner1.png"} alt="pixar 로고" />
          </div>
          <div className="logo">
            <img src={path + "/img/partner2.png"} alt="netflx 로고" />
          </div>
          <div className="logo">
            <img src={path + "/img/partner3.png"} alt="channel 로고" />
          </div>
          <div className="logo">
            <img src={path + "/img/partner4.png"} alt="apple tv 로고" />
          </div>
          <div className="logo">
            <img src={path + "/img/partner5.png"} alt="universal 로고" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners;