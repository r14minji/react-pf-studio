import { useSelector } from "react-redux";


function LatestReview(){
  const review = useSelector(state => state);
  const reviewData = review.reviewReducer.review;
  console.log(reviewData)

  return(
    <section className="content latestReviewM myScroll">
      <div className="inner"> 
        <h1>Movie Review</h1>
        <div className="wrap">
        {
          reviewData.map((note, index)=>{
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