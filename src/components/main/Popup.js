function Popup(){
  return(
    <aside id="welcomePop">
      <div className="content">
        <h1>Welcome</h1>
        <ul>
          <li>안녕하세요.</li>
          <li>STUDIOALICE는 react를 기반으로 제작된 포트폴리오 사이트입니다.</li>
          <li>현재 방문하신 사이트는 <strong>크롬</strong> 브라우저를 기반으로 제작되었으므로 <strong>크롬</strong> 브라우저에서 확인해주시면 감사하겠습니다.</li>
          <li>홈페이지에 방문해주셔서 감사합니다.</li>
        </ul>
      </div>
      <div className="wrap">
        <input type="checkbox" name="ck" id="ck" />
        <label for="ck">오늘 하루 그만보기</label>
      </div>
      <a href="#" class="close">CLOSE</a>
    </aside>
  )
}

export default Popup;