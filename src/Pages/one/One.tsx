import React, { useEffect } from 'react';
import './One.scss'

function One() {
  function scrollleft() {
    const scrollContainer = document.querySelector('.products') as HTMLElement;
    scrollContainer.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  }
  function scrollright() {
    const scrollContainer = document.querySelector('.products') as HTMLElement;
    scrollContainer.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  }
  return (
    <div className="wrap">
      <div className='products'>  
        <div className="sec flex">
          page1
        </div>
        <div className="sec flex">
          page2
        </div>
        <div className="sec flex">
          page3
        </div>
        <div className="sec flex">
          page4
        </div>
        <div className="sec flex">
          page5
        </div>
      </div>
      <button className="scroll-left" onClick={scrollleft}>{'<'}</button>
      <button className="scroll-right" onClick={scrollright}>{'>'}</button>
    </div>
  );
}

export default One;