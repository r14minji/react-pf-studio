function Header(){
  return(
    <header id="header">
      <div className="inner">
        <h1><a href="#">STUDIOALICE</a></h1>
        <p>THE CHRONICLES OF A CREATIVE STUDIO</p>

        <div id="gnb">
          <ul>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">BOARD</a></li>
            <li><a href="#">GALLERY</a></li>
            <li><a href="#">YOUTUBE</a></li>
            <li><a href="#">LOCATION</a></li>
          </ul>
        </div>

        <div className="util">
          <ul>
            <li><a href="#">Sign up</a> </li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </div>

    {/* 반응형 메뉴 호출 */}
    </header>
  )
}

export default Header