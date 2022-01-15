import { useRef } from "react";
import { NavLink } from "react-router-dom";

function Header(){
  const active = {textDecoration: "line-through"};
  const menuMo = useRef(null);
  return(
    <header id="header">
      <div className="inner">
        {/* 웹 메뉴 */}
        <nav className="menu_web">
          <h1><NavLink exact to='/'>STUDIOALICE</NavLink></h1>
          <p>THE CHRONICLES OF A CREATIVE STUDIO</p>

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
          <div className="btnCall" onClick={e=>{
            e.currentTarget.classList.toggle("on");
            menuMo.current.classList.toggle("on");
          }}>
            <span>메뉴호출</span>
          </div>
        </div>


        {/* 반응형 메뉴 */}
        <nav className="menu_Mo" ref={menuMo}>
          <h1><NavLink exact to='/'>STUDIOALICE</NavLink></h1>
          <p>THE CHRONICLES OF A CREATIVE STUDIO</p>

          <ul id="gnb_mo">
            <li><NavLink activeStyle={active}  to='/about'>ABOUT</NavLink></li>
            <li><NavLink activeStyle={active}  to='/board'>BOARD</NavLink></li>
            <li><NavLink activeStyle={active}  to='/gallery'>GALLERY</NavLink></li>
            <li><NavLink activeStyle={active}  to='/youtube'>YOUTUBE</NavLink></li>
            <li><NavLink activeStyle={active}  to='/contact'>CONTACT</NavLink></li>
            <li><NavLink activeStyle={active}  to='/join'>JOIN</NavLink></li>
            <li><NavLink activeStyle={active}  to='/signin'>Sign In</NavLink></li>
            <li><NavLink activeStyle={active}  to='/join'>Join</NavLink></li>
          </ul>
        </nav>


      </div>
    </header>
  )
}

export default Header