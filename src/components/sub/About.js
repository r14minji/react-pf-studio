import { useEffect } from "react";
import {  faFacebookF, faInstagram, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const html = document.querySelector("html");

function About(){
  useEffect(()=>{
    html.style.backgroundColor = "#E9B5B5";
    return()=>{
      html.style.backgroundColor = "#e6e2dd";
    }
  })
  return(
    <>
    {/* title, btnMenu, story-txt,vid  */}
    <section className="about">
      <div className="inner">
        <h1>&#8544;. ABOUT</h1>
        {/* ul - btnMenu */}
        <ul className="btnMenu">
          <li className="on">
            <p>What makes a great Films?</p>
            <span>It's all about the experience. People love films that are fun and simple to feel. We make those films</span>
            <strong>View</strong>
            </li>
            <li>
            <p>The way we work</p>
            <span>Our creative approach involves rigorous design and usablity testing to create superior films for everyone</span>
            <strong>View</strong>
            </li>
            <li>
            <p>Meet the makers</p>
            <span>Our team combine form and function to create visually appealing, easy to watch films people want to use.</span>
            <strong>View</strong>
            </li>
        </ul>
        {/* story - txt, vid */}
        <div className="story">
          <div className="txt">
            <h2>OUR STORY</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, maiores? Cupiditate quos ipsum sapiente obcaecati. Harum laudantium perferendis odit, in saepe animi itaque eos expedita quibusdam ipsam, maiores at rerum.</p>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, eius vero quos fugiat quia repudiandae dolor facilis molestias tenetur saepe deleniti, beatae vitae eos voluptatum! <br/><br/>  A voluptatibus voluptatem aliquid distinctio perspiciatis ducimus beatae commodi atque assumenda, eligendi, nesciunt sint officiis.</span>
          </div>
          <div className="vid">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>

    {/* team */}
    <section className="team">
      <div className="inner">
        <h1>TEAM</h1>
        <div className="wrap">
          <article>
            <div className="pic">
              <img src="" alt="" />
            </div>
            <h2>Stephanie Crespin</h2>
            <p>CEO, CO-FOUNDER</p>
            <span>Email: corpda27@studioalice.co.kr</span>
            <ul>
              <li><FontAwesomeIcon icon={faInstagram} /></li>
              <li><FontAwesomeIcon icon={faFacebookF} /></li>
              <li><FontAwesomeIcon icon={faTwitter}/></li>
            </ul>
          </article>
        </div>
      </div>
    </section>
    </>
  )
}

export default About;