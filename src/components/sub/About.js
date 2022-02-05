import axios from "axios";
import { useEffect, useState,useRef} from "react";
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const html = document.querySelector("html");
const path = process.env.PUBLIC_URL;
const url = `${path}/dbs/about.json`;

function About(){
  let [members, setMembers] = useState([]);
  const vid = useRef(null);


  useEffect(()=>{
    axios
    .get(url)
    .then(json=>{
      //console.log(json.data.member);
      setMembers(json.data.member);
    })

    html.style.backgroundColor = "#E9B5B5";

    return()=>{
      html.style.backgroundColor = "#e6e2dd";
    }
  },[])

  return(
    <>
    {/* title, btnMenu, story-txt,vid  */}
    <section className="about">
      <div className="inner">
        <h1>&#8544;. ABOUT</h1>
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
          
        <div className="story">
          <div className="txt">
            <h2>OUR STORY</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, maiores? Cupiditate quos ipsum sapiente obcaecati. Harum laudantium perferendis odit, in saepe animi itaque eos expedita quibusdam ipsam, maiores at rerum.</p>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, eius vero quos fugiat quia repudiandae dolor facilis molestias tenetur saepe deleniti, beatae vitae eos voluptatum! <br/><br/>  A voluptatibus voluptatem aliquid distinctio perspiciatis ducimus beatae commodi atque assumenda, eligendi, nesciunt sint officiis.</span>
          </div>

          <figure>
              <div className="wrap" >
                <div className="vid" ref={vid}>
                  <video src= {path+"/img/vid1.mp4"} autoPlay muted loop ></video>
                  <div className="slogan">
                    <h3>
                      <div className="inner">PASSTION</div>
                    </h3>
                    <div className="p1">
                      <div className="inner">Voluptatibus, sunt!</div>
                    </div>
                  </div>
                </div>
            </div>
          </figure>
        </div>
      </div>
    </section>

    {/* team */}
    <section className="team">
      <div className="inner">
        <h1>TEAM</h1>
        <div className="wrap">
          {
            members.map((member, index)=>{
              return(
                <article key={index}>
                  <div className="member">
                    <div className="poster">
                      <img src={path + member.url} />
                    </div>
                    <div className="info">
                      <div className="pic">
                        <img src={path + member.url_pic} />
                      </div>
                      <div className="profile">
                        <h2>{member.name}</h2>
                        <p>{member.position}</p>
                        <span>Email: {member.email}</span>
                        <ul>
                          <li><FontAwesomeIcon icon={faInstagram} /></li>
                          <li><FontAwesomeIcon icon={faFacebookF} /></li>
                          <li><FontAwesomeIcon icon={faTwitter}/></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default About;