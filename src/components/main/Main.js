import { useEffect, useState, useRef } from 'react';
import Anime from '../../class/anime.js';

import Header from '../common/Header.js';
import Festival from './Festival.js';
import News from './News.js';
import Offer from './Offer.js';
import Partners from './Partners.js';
import Visual from './Visual.js';
import LatestReview from './LatestReview.js';
import Btns from './Btns.js';
import Popup from './Popup.js';

function Main() {
  const main = useRef(null);
  let pos = useRef([]);
  const [index, setIndex] = useState(0);
  let [isPop, setIsPop] = useState(true);

  const getIsPop = val => {
    setIsPop(val);
  }

  const getIndex = index => {
    setIndex(index);
  }

  const handleResize = ()=>{
    const sections = main.current.querySelectorAll(".myScroll");
    let arr = [];
    for(let section of sections) arr.push(section.offsetTop);
    pos.current = arr;
  }

  const handleScroll = ()=>{
    let scroll = window.scrollY;
    const btns = main.current.querySelectorAll("#btns li");

    pos.current.map((pos, index) =>{
      if(scroll>=pos){
        for(const btn of btns) btn.classList.remove('on');
        btns[index].classList.add('on');
      }
    })
  }

  useEffect(()=>{
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    new Anime(window, {
      prop:"scroll",
      value: pos.current[index],
      duration: 500,
    })

    return()=>{
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    }
  },[index])


  return (
    <div id='mainWrap' ref={main}>
      <Header type={'main'} />
      <Visual/>
      <News/>
      <Offer/>
      <Festival />
      <LatestReview />
      <Partners />
      <Btns getIndex={getIndex} />
      {isPop ? <Popup getIsPop={getIsPop} /> : ""}
    </div>
  )
}

export default Main
