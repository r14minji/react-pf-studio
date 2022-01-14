import { NavLink } from "react-router-dom";


function Header_sub(){
  const active = {textDecoration: "line-through"};
  return(
    <header id="header_sub">
      <div className="inner">
        <h1><NavLink exact to='/'>STUDIOALICE</NavLink></h1>
        <p>THE CHRONICLES OF A CREATIVE STUDIO</p>
        

        <div id="gnb">
          <ul>
            <li><NavLink activeStyle={active}  to='/about'>ABOUT</NavLink></li>
            <li><NavLink activeStyle={active}  to='/board'>BOARD</NavLink></li>
            <li><NavLink activeStyle={active}  to='/gallery'>GALLERY</NavLink></li>
            <li><NavLink activeStyle={active}  to='/youtube'>YOUTUBE</NavLink></li>
            <li><NavLink activeStyle={active}  to='/contact'>CONTACT</NavLink></li>
            <li><NavLink activeStyle={active}  to='/join'>JOIN</NavLink></li>
          </ul>
        </div>

        <div className="util">
          <ul>
            <li><NavLink activeStyle={active}  to='/signin'>Sign In</NavLink></li>
            <li><NavLink activeStyle={active}  to='/join'>Join</NavLink></li>
          </ul>
        </div>
      </div>

    {/* 반응형 메뉴 호출 */}
    </header>
  )
}

export default Header_sub;