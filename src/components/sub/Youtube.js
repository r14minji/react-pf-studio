import { useRef } from 'react';

import VidList from "./VidList";
import Note from "./Note";

function Youtube(){
  const tab = useRef(null);

  const activation = e=>{
    const btn = e.currentTarget;
    //console.log(btn)
    const btns_arr = tab.current.children;
    for( let btns of btns_arr) btns.classList.remove("on")
    btn.closest("dt").classList.add("on");
    btn.closest("dt").nextSibling.classList.add("on");
  }


  return(
    <main className="content youtube">
      <div className="inner">
        {/* title */}
        <section className="title_wrap">
          <h1>&#8547;. Youtube | Note</h1>
        </section>

        {/* tab */}
        <section>
          <dl id="tab" ref={tab}>
            <dt className="on" 
              role="tab" id="tab1" aria-controls="tabpanel1" aria-selected="true" tabIndex="0"
            >
              <span className="btn_tab" onClick={activation}>
                <strong> 01</strong>
                <p>Youtube</p>
                <ul>
                  <li>필름모양 이미지를 클릭하시면, 유튜브 영상으로 연결됩니다.</li>
                  <li>제목, 설명글, 날짜는 해당 동영상 정보를 담고 있습니다.</li>
                </ul>
              </span>
            </dt>
            <dd 
            role="tabpanel" id="tabpanel1" className="on" aria-labelledby="tab1"
            >
              <VidList />
            </dd>

            <dt
              role="tab" id="tab2" aria-controls="tabpanel2" aria-selected="false" tabIndex="0"
            >
              <span  className="btn_tab" onClick={activation}>
                <strong> 02</strong>
                  <p>Review Note</p>
                  <ul>
                    <li>영화리뷰를 작성하고 기록하는 페이지 입니다.</li>
                    <li>CRUD 기능을 구현한 게시판 입니다.</li>
                </ul>
              </span>
            </dt>
            <dd
              role="tabpanel" id="tabpanel2" aria-labelledby="tab2"
            >
              <Note />
            </dd>
        </dl>
        </section>

      </div>
    </main>
  )
}

export default Youtube;