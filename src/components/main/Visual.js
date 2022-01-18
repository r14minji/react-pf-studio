import { faRssSquare, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare, faTwitterSquare, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const path = process.env.PUBLIC_URL;

function Visual(){
  return(
    <section className="content visualM">
      <div className="inner"> 
        <div className="wrap">
          <div className="banner">
            <ul className="slideshow">
              <li>
                <img src={path + "/img/visual1.jpg"} alt="" />
                <div className="txt">
                  <h1>text</h1>
                </div>
                </li>
                <li>
                <img src={path + "/img/visual1.jpg"} alt="" />
                <div className="txt">
                  <h1>text2</h1>
                </div>
                </li>
                <li>
                <img src={path + "/img/visual1.jpg"} alt="" />
                <div className="txt">
                  <h1>text</h1>
                </div>
                </li>
                <li>
                <img src={path + "/img/visual1.jpg"} alt="" />
                <div className="txt">
                  <h1>text3</h1>
                </div>
                </li>
                <li>
                <img src={path + "/img/visual1.jpg"} alt="" />
                <div className="txt">
                  <h1>text4</h1>
                </div>
                </li>
                <li>
                <img src={path + "/img/visual1.jpg"} alt="" />
                <div className="txt">
                  <h1>text5</h1>
                </div>
                </li>
                <li>
                <img src={path + "/img/visual1.jpg"} alt="" />
                <div className="txt">
                  <h1>text6</h1>
                </div>
                </li>
              </ul>
          </div>

          <div className="stayConnect">
            <h3>STAY CONNECTED</h3>
            <ul>
              <li>
                <span>01</span>
                </li>
              <li>
                <span>02</span>
              </li>
              <li>
                <span>03</span>
              </li>
              <li>
                <span>04</span>
              </li>
              <li>
                <span>05</span>
              </li>
            </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Visual;