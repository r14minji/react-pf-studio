import { useRef, useState, useEffect } from 'react';

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
      return [];
    }
  }

  const [notes, setNotes] = useState(getLocalItems)

  /*
  const [posts, setPosts] = useState([
    {title: "Hello moviePosts", content: "Here comes description in detail."}
  ])
  */


  const createNote = () =>{
    if(!date.current.value || !title.current.value || !director.current.value || !genre.current.value || !comments.current.value){
      alert('날짜, 제목, 감독, 장르, 리뷰 내용을 모두 입력하세요.')
      return;
    }
    setNotes([
      {
        date: date.current.value,
        title: title.current.value,
        director: director.current.value,
        genre: genre.current.value,
        comments: comments.current.value
      }
      ,...notes
    ])

    date.current.value = '';
    title.current.value = '';
    director.current.value = '';
    genre.current.value = '';
    comments.current.value = '';
  }

  const deleteNote = index=>{
    setNotes(notes.filter(
      (_ ,noteIndex) => noteIndex !== index )
      )
  }

  const enableUpdate = index=>{
    setNotes(
      notes.map((note, noteIndex)=>{
        if(noteIndex === index) note.enableUpdate = true;
        return note;
      })
    )
  }

  const disableUpdate = index =>{
    setNotes(
      notes.map((note, noteIndex)=>{
        if(noteIndex === index) note.enableUpdate = false;
        return note;
      })
    )
  }

  const updatePost = index =>{
    if(!updateDate.current.value || !updateTitle.current.value || !updateDirector.current.value || !updateGenre.current.value || !updateComments.current.value){
      alert("수정할 제목과 본문을 모두 입력하세요");
      return;
    }
    setNotes(
      notes.map((note, noteIndex)=>{
        if(noteIndex === index){
          note.date = updateDate.current.value;
          note.title = updateTitle.current.value;
          note.director = updateDirector.current.value;
          note.genre = updateGenre.current.value;
          note.comments = updateComments.current.value;
          note.enableUpdate = false;
        }
        return note;
      })
    )
  }

  useEffect(()=>{
    localStorage.setItem('movieNotes', JSON.stringify(notes))
  },[notes])


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
            <input type="date" placeholder="Date" ref={date} /><br/>
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
            <button onClick={createNote}>Save</button>
          </div>
        </section>

        {/* showBox */}
        <section className="showBox">
          {
            notes.map((note, index)=>{
              return(
                <article key={index}>
                  {
                    note.enableUpdate
                    ?
                    //수정모드
                    <>
                      <div className="post">
                        <h2>Review</h2>
                        <input type="text" defaultValue={note.date} ref={updateDate} /><br/>
                        <input type="text" defaultValue={note.title} ref={updateTitle} /> <br/>
                        <input type="text" defaultValue={note.director} ref={updateDirector} /><br/>
                        <input type="text" defaultValue={note.genre} ref={updateGenre} />
                        <textarea defaultValue={note.comments} ref={updateComments}></textarea>
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
                          <li><strong>Date</strong>{note.date}</li>
                          <li><strong>Title</strong>{note.title}</li>
                          <li><strong>Director</strong>{note.director}</li>
                          <li><strong>Genre</strong>{note.genre}</li>
                          <li><strong>Comments</strong>{note.comments}</li>
                        </ul>
                      </div>

                      <ul className="btns">
                        <li onClick={()=>deleteNote(index)}>Delete</li>
                        <li onClick={()=>enableUpdate(index)} >Edit</li>
                      </ul>
                    </>
                  }
                </article>
              )
            })
          }
        </section>
      </div>
    </main>
  )
}

export default Note;
