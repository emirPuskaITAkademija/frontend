import React, { useState } from "react";
import Products from "./Products";
//
const Product = () => {
    const [products, setProducts] = useState(["mobitel", "laptop", "centralne jedinice"]);
    const [counter, setCounter] = useState(0);

    const incrementCounter = () =>{
        setCounter(c => c+1);
    }

    const addProduct = () => {
        setProducts([...products, "banana"]);
    }

    return (
        <>
            <h1>Proizvodi koje nudim</h1>
            <Products products={products}/>
            <button onClick={addProduct}>Add product</button>
            <hr></hr>
            <div>
                Count : {counter} 
                <br></br>
                <button onClick={incrementCounter}> Increment counter + </button>
            </div>
        </>
    );
}

export default Product;