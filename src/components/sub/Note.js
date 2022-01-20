import { useRef, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function Note() {
  const input = useRef(null);
  const textarea = useRef(null);
  const updateInput = useRef(null);
  const updateTextarea = useRef(null);


  const getLocalItems = ()=>{
    let data = localStorage.getItem('movieNotes');
    if(data) {
      return JSON.parse(data);
    }else{
      return [];
    }
  }

  const [posts, setPosts] = useState(getLocalItems)

  /*
  const [posts, setPosts] = useState([
    {title: "Hello moviePosts", content: "Here comes description in detail."}
  ])
  */


  const createPost = () =>{
    if(!input.current.value || !textarea.current.value){
      alert('제목과 본문을 입력하세요.')
      return;
    }
    setPosts([
      {
        title: input.current.value,
        content: textarea.current.value
      }
      ,...posts
    ])

    input.current.value='';
    textarea.current.value='';
  }

  const deletePost = index=>{
    setPosts(posts.filter(
      (_ ,postIndex) => postIndex !== index )
      )
  }

  const enableUpdate = index=>{
    setPosts(
      posts.map((post, postIndex)=>{
        if(postIndex === index) post.enableUpdate = true;
        return post;
      })
    )
  }

  const disableUpdate = index =>{
    setPosts(
      posts.map((post, postIndex)=>{
        if(postIndex === index) post.enableUpdate = false;
        return post;
      })
    )
  }

  const updatePost = index =>{
    if(!updateInput.current.value || !updateTextarea.current.value){
      alert("수정할 제목과 본문을 모두 입력하세요");
      return;
    }
    setPosts(
      posts.map((post, postIndex)=>{
        if(postIndex === index){
          post.title = updateInput.current.value;
          post.content = updateTextarea.current.value;
          post.enableUpdate = false;
        }
        return post;
      })
    )
  }

  useEffect(()=>{
    localStorage.setItem('movieNotes', JSON.stringify(posts))
  },[posts])


  return (
    <main className="content note">
      <div className="inner">
        {/* section - noteTile */}
        <section className="noteTitle">
          <div className="title">
            <h1>Review Note</h1>

            <ul>
              <li>2022 어떤 영화를 관람하셨나요?</li>
              <li>영화리뷰를 기록하고 작성해보세요.</li>
              <li>작성된 리뷰는 저장됩니다.</li>
            </ul>
          </div>
          <div className="year">
            <strong>ISSUE 2022</strong>
          </div>
        </section>

        {/* inputBox */}
        <section className="inputBox" >
          <input type="text" placeholder='제목을 입력하세요' ref={input} /><br/>
          <textarea cols="30" rows="10" placeholder='본문을 입력하세요.'  ref={textarea}></textarea><br/>
          <button onClick={()=>{
            input.current.value='';
            textarea.current.value='';
          }}>취소</button>
          <button onClick={createPost}>생성</button>
        </section>

        {/* showBox */}
        <section className="showBox">
          {
            posts.map((post, index)=>{
              return(
                <article key={index}>
                  {
                    post.enableUpdate
                    ?
                    //수정모드
                    <>
                      <div className="post">
                        <input type="text" defaultValue={post.title} ref={updateInput} /> <br/>
                        <textarea defaultValue={post.content} ref={updateTextarea}></textarea>
                        </div>

                      <ul className="btns">
                        <li onClick={()=>updatePost(index)}>입력</li>
                        <li onClick={()=>disableUpdate(index)}>취소</li>
                      </ul>
                    </>
                    :
                    //출력모드
                    <>
                      <div className="post">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                      </div>

                      <ul className="btns">
                        <li onClick={()=>enableUpdate(index)} >수정</li>
                        <li onClick={()=>deletePost(index)}>삭제</li>
                      </ul>
                    </>
                  }
                </article>
              )
            })
          }
        </section>

        {/* bookmark */}
        <section className="bookmark">
          
        </section>

      </div>
    </main>


  )
}

export default Note;
