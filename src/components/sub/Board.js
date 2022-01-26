import { useSelector, useDispatch } from "react-redux";
import { setNews } from '../../redux/actions';
import { faAngleDoubleRight, faAngleDoubleLeft, faRssSquare, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import {faFacebookSquare, faTwitterSquare, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const path = process.env.PUBLIC_URL;


function Board(){
  const news = useSelector(state=>state);
  const newsData = news.newsReducer.news;
  const notice = useSelector(state=>state);
  const noticeData = notice.noticeReducer.notice;
  let len = noticeData.length;
  const dispatch = useDispatch();


  return(
    <>
    {/* title */}
    <section className="content board">
      <div className="inner">
        <h1>&#8545;. BOARD</h1>
      </div>
    </section>

    {/* magazine - img, content, connect */}
    <section className="magazine">
      <div className="inner">
        <h1>MAGAZINE</h1>
        <div className="wrap">
          <div className="pic">
            <img src={path+"/img/Little Women.png"} alt="Little Women movie poster" />
          </div>
          <div className="txt">
            <h2>ABOUT S&A THE MAGAZINE</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, mollitia facere temporibus, non repellendus aspernatur amet cum et quidem quis sit quisquam, voluptate eius quibusdam vel laborum ullam! Magni tempore facere corrupti dolore laudantium nemo cupiditate alias quas, mollitia natus laborum esse temporibus voluptates inventore ipsa enim numquam dolorum nobis obcaecati nisi? <br/> Reiciendis perferendis nulla fugit doloribus numquam assumenda quisquam? Sed, error nobis animi provident dolorum praesentium adipisci explicabo saepe odio obcaecati dolor ipsa harum eligendi atque, aspernatur, incidunt molestiae a architecto nemo rerum fuga ab. Cupiditate vero ad illum corrupti, tempore cum quia voluptate quod sapiente esse? Ad, aspernatur.</p>
            <span>herald.cotland</span>
          </div>
          <div className="stayConnect">
            <h3>STAY CONNECTED</h3>
            <ul>
              <li>
                <span>Fan S&A on facebook</span>
                <strong><FontAwesomeIcon icon={faFacebookSquare} /></strong>
                </li>
              <li>
                <span>Follow S&A on Twitter</span>
                <strong><FontAwesomeIcon icon={faTwitterSquare} /></strong>
              </li>
              <li>
                <span>Like S&A on instagram</span>
                <strong><FontAwesomeIcon icon={faInstagram} /></strong>
              </li>
              <li>
                <span>Subscribe S&A to RSS fee-ds</span>
                <strong><FontAwesomeIcon icon={faRssSquare} /></strong>
              </li>
              <li>
                <span>Sign up for newsletter</span>
                <strong><FontAwesomeIcon icon={faEnvelopeSquare} /></strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* latest news */}
    <section className="latestNews">
      <div className="inner">
        <h1>LATEST NEWS</h1>
        <div className="wrap">

          {
            newsData.map((data, index)=>{
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
            })
          }
        </div>
      </div>
    </section>

    {/* notice - table, pagination */}
    <section className="notice">
      <div className="inner">
        <h1>NOTICE</h1>

        {/* table */}
        <table>
          <caption className="hidden">notice, news</caption>
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Writer</th>
              <th>Date</th>
              <th><FontAwesomeIcon icon={faThumbsUp}/></th>
            </tr>
          </thead>
          <tbody>
            {
              noticeData.slice(0).reverse().map((data, index)=>{
                return(
                  <tr key={index}>
                    <td>{len - index}</td>
                    <td><a href="#">{data.title}</a></td>
                    <td>{data.writer}</td>
                    <td>{data.date}</td>
                    <td>{data.like}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>        

        {/* paignation */}
        <div className="paignation">
          <a href="#" className="prev">
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </a>

          <p className="numbers">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">7</a>
            <a href="#">8</a>
            <a href="#">9</a>
            <a href="#">10</a>
          </p>

          <a href="#" className="next">
          <FontAwesomeIcon icon={faAngleDoubleRight} />
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Board;