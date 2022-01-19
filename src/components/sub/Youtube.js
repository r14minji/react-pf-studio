import axios from "axios";
import { useEffect, useState } from "react";

import VidList from "./VidList";
import Note from "./Note";

function Youtube(){


  useEffect(()=>{

  },[])


  return(
    <main className="content youtube">
      <div className="inner">
        {/* title */}
        <div className="title_wrap">
          <ul>
            <li>
              <strong>movie</strong>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non totam debitis velit perspiciatis? Eos sequi placeat repellat culpa reprehenderit, blanditiis architecto sapiente. Nam alias inventore aperiam, voluptas sunt quas voluptatum</p>
            </li>
            <li>
              <strong>best scene</strong>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non totam debitis velit perspiciatis? Eos sequi placeat repellat culpa reprehenderit, blanditiis architecto sapiente. Nam alias inventore aperiam, voluptas sunt quas voluptatum</p>
            </li>
            <li>
              <strong>director</strong>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non totam debitis velit perspiciatis? Eos sequi placeat repellat culpa reprehenderit, blanditiis architecto sapiente. Nam alias inventore aperiam, voluptas sunt quas voluptatum</p>
            </li>
            <li>
              <strong>Oscar</strong>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non totam debitis velit perspiciatis? Eos sequi placeat repellat culpa reprehenderit, blanditiis architecto sapiente. Nam alias inventore aperiam, voluptas sunt quas voluptatum</p>
            </li>
            <li>
              <strong>award</strong>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non totam debitis velit perspiciatis? Eos sequi placeat repellat culpa reprehenderit, blanditiis architecto sapiente. Nam alias inventore aperiam, voluptas sunt quas voluptatum</p>
            </li>
            <li>
              <strong>movie</strong>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non totam debitis velit perspiciatis? Eos sequi placeat repellat culpa reprehenderit, blanditiis architecto sapiente. Nam alias inventore aperiam, voluptas sunt quas voluptatum</p>
            </li>
          </ul>
          <h1>&#8547;. Youtube | Note</h1>
        </div>

        {/* tab */}
        <section>
          <dl id="tab">
            <dt class="on">
              <a href="#box1">
                <strong> 01</strong>
                <p>Youtube</p>
                <ul>
                  <li>필름모양 이미지를 클릭하시면, 유튜브 영상으로 연결됩니다.</li>
                  <li>제목, 설명글, 날짜는 Youtube API를 통해 동영상 정보를 담고 있습니다.</li>
                </ul>
              </a>
            </dt>
            <dd class="on">
              <VidList />
            </dd>

            <dt>
              <a href="#box2">
                <strong> 02</strong>
                  <p>Review Note</p>
                  <ul>
                    <li>영화리뷰를 작성하고 기록하는 페이지 입니다.</li>
                    <li>CRUD 기능을 구현한 게시판 입니다.</li>
                </ul>
              </a>
            </dt>
            <dd>
              <Note />
            </dd>
        </dl>
        </section>

      </div>
    </main>
  )
}

export default Youtube;