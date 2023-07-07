import React from "react";
import { memo } from "react";

const Products = ({ products }) => {
  console.log("Učitava se CHILD komponenta zvana Products");
  return (
    <>
      {products.map((product, index) => (
        <p key={index}>{product}</p>
      ))}
    </>
  );
};

export default memo(Products);
