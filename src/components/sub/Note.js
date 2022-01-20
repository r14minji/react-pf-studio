import { useRef, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function Note() {
  const date = useRef(null);
  const title = useRef(null);
  const director = useRef(null);
  const genre = useRef(null);
  const comments = useRef(null);
  const updateDate = useRef(null);
  const updateTitle = useRef(null);
  const updateDirector = useRef(null);
  const updateGenre = useRef(null);
  const updateComments = useRef(null);


  const getLocalItems = ()=>{
    let data = localStorage.getItem('movieNotes');
    if(data) {
      return JSON.parse(data);
    }else{
      return [
        {date: "2022-01-10", title: "Roman Holiday / 1953", director: "William Wyler", genre:"Romantic Comedy, Drama", comments: "With Roman Holiday, Dalton Trumbo urges us to commit to life's simple pleasures, whether an afternoon glass of champagne or dancing to a live band beneath the stars. An enduring populist truth emerges: that money and status alone cannot create meaning and happiness."},
        {date: "2022-01-18", title: "Breakfast at Tiffany's / 1961", director: "Bleak Edwards", genre:"Comedy, Romance", comments: "Breakfast at Tiffany's – the 1961 film based on Truman Capote's 1958 novella – has become more famous for its visual shorthands, its signifiers of New York chic and fashionable femininity, than its actual story or characters."},
        {date: "2022-01-20", title: "The Shawshank Redemption / 1994", director: "Frank Darabont", genre:"Drama, Crime", comments: "The Shawshank Redemption is powerful, as the core spirit of the of the story lies in the fact that it's only during the darkest times of one's life that one realizes the importance of thinking out of the box. And it also teaches some very important life lessons."},
      ];
    }
  }

  const [posts, setPosts] = useState(getLocalItems)

  /*
  const [posts, setPosts] = useState([
    {title: "Hello moviePosts", content: "Here comes description in detail."}
  ])
  */


  const createPost = () =>{
    if(!date.current.value || !title.current.value || !director.current.value || !genre.current.value || !comments.current.value){
      alert('날짜, 제목, 감독, 장르, 리뷰 내용을 모두 입력하세요.')
      return;
    }
    setPosts([
      {
        date: date.current.value,
        title: title.current.value,
        director: director.current.value,
        genre: genre.current.value,
        comments: comments.current.value
      }
      ,...posts
    ])

    date.current.value = '';
    title.current.value = '';
    director.current.value = '';
    genre.current.value = '';
    comments.current.value = '';
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
    if(!updateDate.current.value || !updateTitle.current.value || !updateDirector.current.value || !updateGenre.current.value || !updateComments.current.value){
      alert("수정할 제목과 본문을 모두 입력하세요");
      return;
    }
    setPosts(
      posts.map((post, postIndex)=>{
        if(postIndex === index){
          post.date = updateDate.current.value;
          post.title = updateTitle.current.value;
          post.director = updateDirector.current.value;
          post.genre = updateGenre.current.value;
          post.comments = updateComments.current.value;
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
              <li>작성된 최신 리뷰는 메인페이지에 보여집니다.</li>
              <li>좋아하는 영화 리뷰를 작성하여 사람들에게 공유해보세요.</li>
            </ul>
          </div>
          <div className="year">
            <strong>ISSUE 2022</strong>
          </div>
        </section>

        {/* inputBox */}
        <section className="inputBox" >
          <h1>What is your favorite quotes in the movie?</h1>
          <div className="wrap">
            <h2>Review</h2>
            <input type="text" placeholder="Date" ref={date} /><br/>
            <input type="text" placeholder='Title/Year' ref={title} /><br/>
            <input type="text" placeholder='Director' ref={director} /><br/>
            <input type="text" placeholder='Genre' ref={genre} /><br/>
            <textarea cols="30" rows="10" placeholder='Comments'  ref={comments}></textarea><br/>
            <button onClick={()=>{
              date.current.value = '';
              title.current.value = '';
              director.current.value = '';
              genre.current.value = '';
              comments.current.value = '';
            }}>Delete</button><br/>
            <button onClick={createPost}>Save</button>
          </div>
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
                        <h2>Review</h2>
                        <input type="text" defaultValue={post.date} ref={updateDate} /><br/>
                        <input type="text" defaultValue={post.title} ref={updateTitle} /> <br/>
                        <input type="text" defaultValue={post.director} ref={updateDirector} /><br/>
                        <input type="text" defaultValue={post.genre} ref={updateGenre} />
                        <textarea defaultValue={post.comments} ref={updateComments}></textarea>
                      </div>

                      <ul className="btns">
                        <li onClick={()=>disableUpdate(index)}>Cancle</li>
                        <li onClick={()=>updatePost(index)}>Update</li>
                      </ul>
                    </>
                    :
                    //출력모드
                    <>
                      <div className="post">
                        <h2>Review</h2>
                        <ul className='written'>
                          <li><strong>Date</strong>{post.date}</li>
                          <li><strong>Title</strong>{post.title}</li>
                          <li><strong>Director</strong>{post.director}</li>
                          <li><strong>Genre</strong>{post.genre}</li>
                          <li><strong>Comments</strong>{post.comments}</li>
                        </ul>
                      </div>

                      <ul className="btns">
                        <li onClick={()=>deletePost(index)}>Delete</li>
                        <li onClick={()=>enableUpdate(index)} >Edit</li>
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
          <p>
            My Movie
            <div class="svg_triangle">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
              </svg>
            </div>
          </p>

        </section>

      </div>
    </main>


  )
}

export default Note;
