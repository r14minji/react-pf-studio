const path = process.env.PUBLIC_URL;

function Visual(){
  return(
    <section className="content visual">
      <div className="inner"> 
      <img src={path +"/img/recordplayer.jpg"} alt="" />
      </div>
    </section>
  )
}

export default Visual;