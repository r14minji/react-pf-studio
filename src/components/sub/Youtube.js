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
          <h1>&#8547;. Youtube | Note</h1>
        </div>

        <section>
          <dl id="tab">
            <dt class="on"><a href="#box1">button1</a></dt>
            <dd class="on">
              <VidList />
            </dd>

            <dt><a href="#box2">button2</a></dt>
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