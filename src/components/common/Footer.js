// import {  faFacebookF, faInstagram, faTwitter, faYoutube  } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){
  return(
    <footer id="footer">
      <div className="inner">
        <div className="wrap">
          <div className="newsletter">
            <div className="txt_wrap">
              <span>Newsletter</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto delectus impedit? Illo aspernatur, doloremque mollitia quod voluptates officia atque.</p>
            </div>
            <div className="input_wrap">
              <input type="text" id="newsletterInput" placeholder="email address"  />
              <input type="submit" value="join" id="newsletterSubmit" />
            </div>
          </div>
  
          <ul className="sitemap">
            <li>ABOUT</li>
            <li>BOARD</li>
            <li>GALLERY</li>
            <li>YOUTUBE</li>
            <li>LOCATION</li>
            <li>&copy; 2022 STUDIOALICE</li>
          </ul>
  
          <ul className="terms">
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>

          <ul className="sns">
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
  
          {/* <ul className="sns">
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faFacebookF} /></li>
            <li><FontAwesomeIcon icon={faTwitter}/></li>
            <li><FontAwesomeIcon icon={faYoutube}/></li>
          </ul> */}
        </div>

        <p>&copy; 2022 Creative StudioAlice Films</p>
      </div>
    </footer>
  )
}

export default Footer;