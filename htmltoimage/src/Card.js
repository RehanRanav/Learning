import React, { useContext, useRef } from 'react';
import './App.css';
import { RefContext } from './RefContext';


function Card() {
    const cardRef = useContext(RefContext)

  return (
    <div className='App' style={{display:"none"}}>

      <div ref={cardRef} className="card">
        <div className='Upper-container'>
          <div>
            <h2>Title: Software Developer
            </h2>
          </div>
          <div>
            <h2>Location: Ahmedabad</h2>
          </div>
        </div>
        <h4>Company: iView labs pvt ltd</h4>
        <h4>Salary: 3L</h4>
        <img src="download.jpg" alt="img1" width="50px" height="50px" />
        {/* <button onClick={download}>Download</button> */}
      </div>
    </div>
  )
}

export default Card