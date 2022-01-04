import axios from "axios";
import { useEffect, useState } from "react";
import { faAngleDoubleRight, faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
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
    <section className="content board">
      <div className="inner">
      <h1>&#8545;. BOARD</h1>

      {/* posts */}
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
    
  )
}

export default Board;