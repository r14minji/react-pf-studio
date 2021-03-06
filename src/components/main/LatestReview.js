import { useEffect, useState } from "react";


function LatestReview(){
  const basic = [
    {date: "2022-01-10", title: "Roman Holiday / 1953", director: "William Wyler", genre:"Romantic Comedy, Drama", comments: "With Roman Holiday, Dalton Trumbo urges us to commit to life's simple pleasures, whether an afternoon glass of champagne or dancing to a live band beneath the stars. An enduring populist truth emerges: that money and status alone cannot create meaning and happiness."},
    {date: "2022-01-18", title: "Breakfast at Tiffany's / 1961", director: "Bleak Edwards", genre:"Comedy, Romance", comments: "Breakfast at Tiffany's – the 1961 film based on Truman Capote's 1958 novella – has become more famous for its visual shorthands, its signifiers of New York chic and fashionable femininity, than its actual story or characters."},
    {date: "2022-01-20", title: "The Shawshank Redemption / 1994", director: "Frank Darabont", genre:"Drama, Crime", comments: "The Shawshank Redemption is powerful, as the core spirit of the of the story lies in the fact that it's only during the darkest times of one's life that one realizes the importance of thinking out of the box. And it also teaches some very important life lessons."},
  ];

  const getLocalItems = () => {
    let data = localStorage.getItem('movieNotes');

    if(data){
      return JSON.parse(data);
    }else{
      return basic;
    }
  }

  const [notes] = useState(getLocalItems);

  useEffect(()=>{
    localStorage.setItem('movieNotes', JSON.stringify(notes))
  },[notes])

  return(
    <section className="content latestReviewM myScroll">
      <div className="inner"> 
        <h1>Movie Review</h1>
        <div className="wrap">
        {
          notes.map((note, index)=>{
            if(index < 3){
              return(
                <div className="post" key={index}>
                  <h2>Review</h2>
                  <ul className='written'>
                    <li><strong>Date</strong>{note.date}</li>
                    <li><strong>Title</strong>{note.title}</li>
                    <li><strong>Director</strong>{note.director}</li>
                    <li><strong>Genre</strong>{note.genre}</li>
                    <li><strong>Comments</strong>{note.comments}</li>
                  </ul>
                </div>
              )
            }
          })
        }
        </div>
      </div>
    </section>
  )
}

export default LatestReview;