const path = process.env.PUBLIC_URL;

function Visual(){
  return(
    <section className="content newsM">
      <div className="inner"> 
      <div className="wrap">
        <article>
          <h1>LATEST<br/><strong>NEWS</strong></h1>
        </article>

        <article >
          <div className="content">
            <strong>01/06</strong>
            <h2>The Republicans</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet id placeat eius omnis vero nisi reiciendis molestias quaerat explicabo impedit.</p>
            <span>Read More</span>
          </div>
          <div className="pic">
            <img src={path+ "/img/news1.jpg"} />
          </div>
        </article>
        <article >
          <div className="content">
            <strong>01/06</strong>
            <h2>The Republicans</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet id placeat eius omnis vero nisi reiciendis molestias quaerat explicabo impedit.</p>
            <span>Read More</span>
          </div>
          <div className="pic">
            <img src={path+ "/img/news1.jpg"} />
          </div>
        </article>
        <article >
          <div className="content">
            <strong>01/06</strong>
            <h2>The Republicans</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet id placeat eius omnis vero nisi reiciendis molestias quaerat explicabo impedit.</p>
            <span>Read More</span>
          </div>
          <div className="pic">
            <img src={path+ "/img/news1.jpg"} />
          </div>
        </article>

      </div>
      </div>
    </section>
  )
}

export default Visual;