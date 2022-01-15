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
            <img src={path +"/img/recordplayer.jpg"} alt="" />
          </div>
          <div className="stayConnect">
            <h3>STAY CONNECTED</h3>
            <ul>
              <li>
                <span>Fan S&A on facebook</span>
                <strong><FontAwesomeIcon icon={faFacebookSquare} /></strong>
                </li>
              <li>
                <span>Follow S&A on Twitter</span>
                <strong><FontAwesomeIcon icon={faTwitterSquare} /></strong>
              </li>
              <li>
                <span>Like S&A on instagram</span>
                <strong><FontAwesomeIcon icon={faInstagram} /></strong>
              </li>
              <li>
                <span>Subscribe S&A to RSS fee-ds</span>
                <strong><FontAwesomeIcon icon={faRssSquare} /></strong>
              </li>
              <li>
                <span>Sign up for newsletter</span>
                <strong><FontAwesomeIcon icon={faEnvelopeSquare} /></strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visual;