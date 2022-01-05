import axios from "axios";
import { useEffect, useState } from "react";
import { faAngleDoubleRight, faAngleDoubleLeft, faRssSquare } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {faFacebookSquare, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const path = process.env.PUBLIC_URL;
const url = `${path}/dbs/board.json`

function Board(){
  let [posts, setPosts] = useState([]);
  let len = posts.length;

  useEffect(()=>{
    axios
    .get(url)
    .then(json =>{
      //console.log(json.data.data);
      setPosts(json.data.data);
    })
  })

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
        <img src="" alt="" />
        <div className="txt">
          <h2>ABOUT VII THE MAGAZINE</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla quas nemo eius provident qui autem velit ut voluptas maiores explicabo, ducimus alias recusandae harum obcaecati facilis quod aut! Perspiciatis.</p>
          <span>herald.cotland</span>
        </div>
        <div className="stayConnect">
          <h3>STAY CONNECTED</h3>
          <ul>
            <li>
              <span>Fan SA on facebook</span>
              <FontAwesomeIcon icon={faFacebookSquare} />
              </li>
            <li>
              <span>Follow SA on Twitter</span>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </li>
            <li>
              <span>Subscribe SA to RSSS fee-ds</span>
              <FontAwesomeIcon icon={faRssSquare} />
            </li>
            <li>
              <span>Sign up for newsletter</span>
              <FontAwesomeIcon icon={faNewspaper} />
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* latest news */}
    <section className="latestNews">
      <article>
        <div className="pic">
          <img src="" alt="" />
        </div>
        <div className="content">
          <h2>The Republicans</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet id placeat eius omnis vero nisi reiciendis molestias quaerat explicabo impedit.</p>
          <span>Read More</span>
        </div>
      </article>
      <article>
        <div className="pic">
          <img src="" alt="" />
        </div>
        <div className="content">
          <h2>Gray Knight</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet id placeat eius omnis vero nisi reiciendis molestias quaerat explicabo impedit.</p>
          <span>Read More</span>
        </div>
      </article>
      <article>
        <div className="pic">
          <img src="" alt="" />
        </div>
        <div className="content">
          <h2>Browse World Map</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet id placeat eius omnis vero nisi reiciendis molestias quaerat explicabo impedit.</p>
          <span>Read More</span>
        </div>
      </article>
      <article>
        <div className="pic">
          <img src="" alt="" />
        </div>
        <div className="content">
          <h2>Afghanistan Prison</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet id placeat eius omnis vero nisi reiciendis molestias quaerat explicabo impedit.</p>
          <span>Read More</span>
        </div>
      </article>
    </section>

    {/* notice - table, pagination */}
    <section className="notice">
      <div className="inner">
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
              posts.slice(0).reverse().map((data, index)=>{
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