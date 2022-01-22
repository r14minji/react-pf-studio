import {useSelector} from 'react-redux';

function LatestReview(){
  const members = useSelector(state => state.memberReducer.members);
  //console.log(members)

  return(
    <section className="content latestReviewM">
      <div className="inner"> 
        <h1>Movie Review</h1>

        <h2>Movie Review</h2>
        {
          members.map((member, index)=>{
            return(
              <article>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </article>
            )
          })
        }

  

      </div>
    </section>
  )
}

export default LatestReview;