import { useState } from "react";

const OrderForm = () => {
  const [product, setProduct] = useState({});

  const handleProductChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: value,
    }));
  };

  const handleProductSubmit = (event) => {
    event.preventDefault();
    let productString = "";
    for (let productProp in product) {
      productString =
        productString + "(" + productProp + ":" + product[productProp] + ")";
    }
    alert(productString);
  };

  return (
    <form onSubmit={handleProductSubmit}>
      <label>
        Ime proizvoda:
        <input name="name" type="text" onChange={handleProductChange} />
      </label>
      <label>
        Cijena proizvoda:
        <input name="price" type="number" onChange={handleProductChange} />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
};

export default OrderForm;
