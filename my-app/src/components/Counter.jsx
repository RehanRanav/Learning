import  { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [count, setName] = useState(0);
  const [calculation, setCalculation] = useState();
  const renderCount = useRef(0);

  useEffect(()=>{
    renderCount.current = renderCount.current + 1;
  })

  useEffect(()=>{
    setCalculation(()=> count *2)
    console.log("hey");
  },[count])

  return (
    <>
    {count}
      <button onClick={() => setName((count)=>count + 1)}>increment</button>
      <br/>
      {calculation}
      <br/>
      {`page render ${renderCount.current} Times`}
    </>
  );
};
export default Counter;
