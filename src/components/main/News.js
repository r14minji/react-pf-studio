import { useSelector } from "react-redux";

const path = process.env.PUBLIC_URL;

function News(){
  const news = useSelector(state => state.newsReducer.news);
  //console.log(news.newsReducer.news)


  return(
    <section className="content newsM myScroll">
      <div className="inner"> 
      <div className="wrap">
        {/* article1 - txt */}
        <article>
          <h1>LATEST<br/><strong>NEWS</strong></h1>
        </article>
        
        {/* article2 - board 데이터 redux */}
        {
          news.map((data, index)=>{
            if(index < 3){
              return(
                <article key={index}>
                  <div className="content">
                    <strong>{data.date}</strong>
                    <h2>{data.title}</h2>
                    <p>{data.contents}</p>
                  </div>
                  <div className="pic">
                    <img src={path + data.url} />
                  </div>
                </article>
              )
            }
          })
        }
      </div>
      </div>
    </section>
  )
}

export default News;