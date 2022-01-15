const path = process.env.PUBLIC_URL;

function Partners(){
  return(
    <section className="content partnersM">
      <div className="inner"> 
        <h1>GLOBAL PARTNERS</h1>

        <div className="wrap">
          <div className="logo">
            <img src={path + "/img/partner1.png"} alt="" />
          </div>
          <div className="logo">
            <img src={path + "/img/partner2.png"} alt="" />
          </div>
          <div className="logo">
            <img src={path + "/img/partner3.png"} alt="" />
          </div>
          <div className="logo">
            <img src={path + "/img/partner4.png"} alt="" />
          </div>
          <div className="logo">
            <img src={path + "/img/partner5.png"} alt="" />
          </div>
          <div className="logo">
            <img src={path + "/img/partner6.png"} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners;