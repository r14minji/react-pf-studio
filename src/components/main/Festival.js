const path = process.env.PUBLIC_URL;

function Festival(){
  return(
    <section className="content festivalM">
      <div className="inner"> 
        <div className="wrap">
          <article>
            <figure>
              <img src={path + "/img/festival1.jpg"} alt="" />
            </figure>
            <figure>
              <img src={path + "/img/festival2.jpg"} alt="" />
            </figure>
            <figure>
              <img src={path + "/img/festival3.jpg"}alt="" />
            </figure>
            <figure>
              <img src={path + "/img/festival4.jpg"} alt="" />
            </figure>
          </article>
          <article>
            <div className="pic">
              유튜브 영상
              <img src="" />
            </div>
            <div className="content">
              <h2>Ronan Keating - When You Say Nothing </h2>
              <p>Ronan Keating - When You Say Nothing At All (Notting Hill) This is Notting Hill Music Video to the song When You Say No...</p>
              <strong>2022-01-04</strong>
              <span>Read More</span>
            </div>
          </article>
          <article>
            <h1>MOVIE<strong>FESTIVAL</strong></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ratione, est libero consectetur corporis, non fuga quae delectus distinctio nostrum, quos ea soluta facere? Iusto similique facilis cum atque expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis et molestiae labore perferendis placeat non tempora deleniti vero ut amet! Unde libero atque consequuntur sapiente nesciunt doloremque. Aperiam repellat officia placeat eum impedit assumenda excepturi doloribus facilis, provident numquam consectetur. At, cum nulla!</p>
            <span>Read More</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Festival;