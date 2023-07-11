import React, { useState, useEffect } from "react";

function Contact() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);

  /* const timeEffect = () => {
        setTimeout(()=>setCount(count+1), 1000);
    }
    useEffect(timeEffect, []);  -> varijanta sa drugim param i bez drugog paramŁ*/

  const resultCalculation = () => {
    let result = count + 3;
    setResult(result);
  };

  useEffect(resultCalculation, [count]);

  return (
    <>
      <h1>Contact about us....</h1>
      <h3>Brojač odbrojava {count}</h3>
      <button onClick={() => setCount((c) => c + 1)}> + </button>
      <p>Rezultat : {result}</p>
    </>
  );
}

export default Contact;
