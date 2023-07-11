import React, { useState } from "react";
//React Hook -> useState
const FavouriteCar = () => {
  const [car, setCar] = useState("Audi");
  const [carLink, setCarLink] = useState("https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
  
  
  const bmwButtonCallback = () =>{
    setCar("BMW");
    setCarLink("https://www.freepnglogos.com/uploads/bmw-png/bmw-reviews-and-rating-motor-trend-29.png");
  }

  const audiButtonCallback = () =>{
    setCar("Audi");
    setCarLink("https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
  }
  
  return (
    <>
      <h1>Omiljene marke automobila</h1>
      <h3>Omiljeni auto je {car}</h3>
      <img src={carLink} />
      <br></br>
      <button onClick={()=>setCar("VW")}>VW</button>
      <button onClick={audiButtonCallback}>Audi</button>
      <button onClick={()=>setCar("Mercedes")}>Mercedes</button>
      <button onClick={bmwButtonCallback}>BMW</button>
      <button onClick={()=>setCar("Peugeot")}>Peugeot</button>
    </>
  );
};

export default FavouriteCar;
