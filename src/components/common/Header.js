import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props){
  const active = {textDecoration: "line-through"};
  const menuMo = useRef(null);
  const [isOn, setIsOn] = useState(false);
  const toggleNav = () => setIsOn(!isOn);
  const closeNav = () => window.innerWidth > 1200 && setIsOn(false);

  useEffect(()=>{
    window.addEventListener('resize', closeNav);
    return()=> window.removeEventListener('resize', closeNav);
  }, [])

  return(
    <header id="header" className={props.type + ' myScroll'}>
      <div className="inner">
        {/* 웹 메뉴 */}
        <nav className="menu_web">
          <div className="menu_web_main">
            <h1><NavLink exact to='/' onClick={toggleNav}>STUDIOALICE</NavLink></h1>
            <div className="intro">
              <span>No 41 - UI/UX DEVELPOER 2020</span>
              <p>WEBSITE</p>
              <strong>The NEWSPAPER edition</strong>
            </div>
          </div>

          <div className="menu_web_sub">
            <span><FontAwesomeIcon icon={faBarcode} /></span>
            <h1><NavLink exact to='/'>STUDIOALICE</NavLink></h1>
            <p>ISSUE NO.03 14/ 12 14</p>
          </div>

          <div id="gnb_web">
            <ul>
              <li><NavLink activeStyle={active}  to='/about'>ABOUT</NavLink></li>
              <li><NavLink activeStyle={active}  to='/board'>BOARD</NavLink></li>
              <li><NavLink activeStyle={active}  to='/gallery'>GALLERY</NavLink></li>
              <li><NavLink activeStyle={active}  to='/youtube'>YOUTUBE</NavLink></li>
              <li><NavLink activeStyle={active}  to='/contact'>CONTACT</NavLink></li>
              <li><NavLink activeStyle={active}  to='/join'>JOIN</NavLink></li>
            </ul>
          </div>

          <div className="util_web">
            <ul>
              <li><NavLink activeStyle={active}  to='/signin'>Sign In</NavLink></li>
              <li><NavLink activeStyle={active}  to='/join'>Join</NavLink></li>
            </ul>
          </div>
        </nav>

        {/* 반응형 메뉴 호출 */}
        <div className="bg">
          <div id="btnCall" onClick={toggleNav} className={isOn ? 'on' : null}>
            <span>메뉴호출</span>
          </div>
        </div>


        {/* 반응형 메뉴 */}
        <nav id="menu_Mo" ref={menuMo} className={isOn ? 'on' : null} >
          <h1><NavLink exact to='/' onClick={toggleNav}>STUDIOALICE</NavLink></h1>
          <p>THE CHRONICLES OF A CREATIVE STUDIO</p>

          <ul id="gnb_mo" onClick={toggleNav}>
            <li><NavLink activeStyle={active}  to='/about'>ABOUT</NavLink></li>
            <li><NavLink activeStyle={active}  to='/board'>BOARD</NavLink></li>
            <li><NavLink activeStyle={active}  to='/gallery'>GALLERY</NavLink></li>
            <li><NavLink activeStyle={active}  to='/youtube'>YOUTUBE</NavLink></li>
            <li><NavLink activeStyle={active}  to='/contact'>CONTACT</NavLink></li>
            <li><NavLink activeStyle={active}  to='/join'>JOIN</NavLink></li>
            <li><NavLink activeStyle={active}  to='/signin'>Sign In</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header