import React, { useContext, useRef } from 'react';
import './App.css';
import { RefContext } from './RefContext';
// import { data } from './data';
import html2canvas from 'html2canvas'

function App() {

  // const title = data.title;
  // const salary = data.salary;
  // const Company = data.company;
  // const location = data.location;
  const cardRef = useContext(RefContext);
  console.log(cardRef);
  
  const download = () => {
    const element = cardRef.current;

    html2canvas(element, { scale: 1, allowTaint: true })
      .then((dataUrl) => {

        const filename = 'download.jpeg';
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl.toDataURL('image/jpeg');;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
    }
  
  return (
    <div className='App'>
      {/* <Card/> */}
      <button style={{width: "100px", padding:"10px"}} onClick={download}>Download</button>
    </div>

  );
}
export default App;