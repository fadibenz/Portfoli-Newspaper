import React from "react";
import "./intro.css";
function Intro() {
  return (
    <main className='container intropage'>
      <header className='Header'>
        <div className='Header-Logo'>
          <img src='/Prophet-Logo.svg' alt='' />
        </div>
        <section className='Header_main'>
          <div className='Header_lines'>
            <hr className='Header_lines-bold'></hr>
            <div>
              <p>The</p>
            </div>
            <hr></hr>
          </div>
          <section className='Header_content'>
            <h1>
              Daily <span>P</span>rophet
            </h1>
            <div className='Header_content-p'>
              <img src='/star.svg'></img>
              <p>The Wizard world’s beguiling broadsheet of choice</p>
              <img src='/star.svg'></img>
            </div>
          </section>
          <div className='Header_lines'>
            <hr></hr>
            <hr className='Header_lines-bold'></hr>
          </div>
        </section>
        <div className='Header_additional'>
          <p>28 September, 2023</p>
          <p>5 knuts</p>
        </div>
      </header>
      <section className='Words'>
        
      </section>
    </main>
  );
}

export default Intro;
