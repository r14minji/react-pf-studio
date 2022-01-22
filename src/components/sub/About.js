import { useSelector } from "react-redux";
import { useEffect, useState,useRef} from "react";
import {  faFacebookF, faInstagram, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const html = document.querySelector("html");
const path = process.env.PUBLIC_URL;


function About(){
  const member = useSelector(state=>state);
  const memberData = member.memberReducer.member;
  const story = useSelector(state=>state);
  const storyData = story.storyReducer.story;
  const [index, setIndex] = useState(0);
  const btnMenus = useRef(null);
  const wrap = useRef(null);
  const storyBtns = [
    {title: 'What makes a great Films?', contents: "It's all about the experience. People love films that are fun and simple to feel. We make those films"},
    {title:'The way we work', contents: 'Our creative approach involves rigorous design and usablity testing to create superior films for everyone'},
    {title: 'Meet the makers', contents: 'Our team combine form and function to create visually appealing, easy to watch films people want to use.'}
  ]


  useEffect(()=>{
    html.style.backgroundColor = "#E9B5B5";
    const btns = btnMenus.current.children;
    const vids = wrap.current.children;
    const play = wrap.current.querySelectorAll("video");
    btns[0].classList.add("on");
    vids[0].classList.add("on");
    play[index].load();
    play[index].play();

    for(let vid of vids) vid.classList.remove("mask");


    activation()
    function activation(){
      for(let i=0; i<btns.length; i++){
        btns[i].classList.remove("on");
        if(vids[i].classList.contains("on")){
          vids[i].classList.add("mask");
        }
      }
      btns[index].classList.add("on");
      vids[index].classList.add("lower");
  
      setTimeout(()=>{
        for(let i=0; i<vids.length; i++){
          if(vids[i].classList.contains("on")){
            vids[i].classList.remove("on");
            vids[i].classList.remove("mask");
          }
        }
  
        vids[index].classList.remove("lower");
        vids[index].classList.add("on");
      },1400)
    }

    return()=>{
      html.style.backgroundColor = "#e6e2dd";
      btns[0].classList.remove("on");
      vids[0].classList.remove("on");
    }
  },[index])

  return(
    <>
    {/* title, btnMenu, story-txt,vid  */}
    <section className="about">
      <div className="inner">
        <h1>&#8544;. ABOUT</h1>
        <ul className="btnMenu" ref={btnMenus}>
            {
              storyBtns.map((btn, index)=>{
                return(
                <li key={index} onClick={()=>setIndex(index)}>
                  <p>{btn.title}</p>
                  <span>{btn.contents}</span>
                </li>
                )
              })
            }

        </ul>
        <div className="story">
          <div className="txt">
            <h2>OUR STORY</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, maiores? Cupiditate quos ipsum sapiente obcaecati. Harum laudantium perferendis odit, in saepe animi itaque eos expedita quibusdam ipsam, maiores at rerum.</p>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, eius vero quos fugiat quia repudiandae dolor facilis molestias tenetur saepe deleniti, beatae vitae eos voluptatum! <br/><br/>  A voluptatibus voluptatem aliquid distinctio perspiciatis ducimus beatae commodi atque assumenda, eligendi, nesciunt sint officiis.</span>
          </div>

          <figure>
            <aside>LOADING...</aside>
              <div className="wrap" ref={wrap}>
                {
                  storyData.map((story, index)=>{
                    return(
                      <div key={index} className="vid">
                        <video src= {path + story.src} autoPlay muted loop ></video>
                        <div className="slogan">
                          <h3>
                            <div className="inner">{story.tit}</div>
                          </h3>
                          <div className="p1">
                            <div className="inner">{story.p1}</div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
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
            memberData.map((member, index)=>{
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