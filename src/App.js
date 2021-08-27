import "./App.css";

import { useState } from "react";

function App() {
  const [quantity, setquantity] = useState(null);
  const handlequantity = () => {
    return setquantity(document.getElementById("quantity").value);
  };
  const [priceofp, setpriceofp] = useState(null);
  const handlepriceofp = () => {
    return setpriceofp(document.getElementById("priceofp").value);
  };
  const [hight, sethight] = useState(null);
  const handlehight = () => {
    return sethight(document.getElementById("hight").value);
  };
  const [price, setprice] = useState(null);
  const handleprice = () => {
    return setprice(document.getElementById("price").value);
  };
  const [width, setwidth] = useState(null);
  const handlewidth = () => {
    return setwidth(document.getElementById("width").value);
  };
  const [length, setlength] = useState(null);
  const handlelength = () => {
    return setlength(document.getElementById("length").value);
  };

  const calccube = () => {
    let results = (hight * width * length * quantity) / 1000000;
    let priceresult = results * price;
    let vary = priceofp * 1;
    let total = priceresult + vary;
    let priceofproducts = vary * quantity;

    setresult(`CBM: ${results} m`);
    setpriceresult(`Price of shipping: ${priceresult} $`);
    setpriceofpro(`Price of products: ${priceofproducts} $`);
    setpricetotal(`Total price: ${total} $`);
  };
  const [priceofpro, setpriceofpro] = useState("Price of products: 0 $");
  const [result, setresult] = useState("CBM: 0 m");
  const [priceresult, setpriceresult] = useState("Price of shipping: 0 $");
  const [pricetotal, setpricetotal] = useState("Total price: 0 $");
  return (
    <>
      <h1>Calculate CBM</h1>
      <section>
        <label htmlFor="hight">Hight:</label>
        <input
          id="hight"
          type="number"
          defaultValue={hight}
          placeholder="cm"
          name="hight"
          onChange={handlehight}
        />
        <label htmlFor="length">Length:</label>
        <input
          id="length"
          type="number"
          defaultValue={length}
          placeholder="cm"
          name="length"
          onChange={handlelength}
        />
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="number"
          defaultValue={width}
          placeholder="cm"
          name="width"
          onChange={handlewidth}
        />
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          defaultValue={quantity}
          placeholder="number of items or boxs"
          name="quantity"
          onChange={handlequantity}
        />
        <label htmlFor="price">Shipping price for one CMB:</label>
        <input
          id="price"
          type="number"
          defaultValue={price}
          placeholder="$"
          name="price"
          onChange={handleprice}
        />{" "}
        <label htmlFor="priceofp">Price of product:</label>
        <input
          id="priceofp"
          type="number"
          defaultValue={priceofp}
          placeholder="$"
          name="priceofp"
          onChange={handlepriceofp}
        />
      </section>
      <button onClick={() => calccube()}>Calculate</button>
      <h2>{result}</h2>
      <h2>{priceresult}</h2>
      <h2>{priceofpro}</h2>
      <h2>{pricetotal}</h2>
    </>
  );
}

export default App;
