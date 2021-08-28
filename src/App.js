import "./index.css";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    length: null,
    width: null,
    hight: null,
    quantity: null,
    shipPrice: null,
    productPrice: null,
    productName: null,
  });

  const [display, setDisplay] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      info.hight &&
      info.length &&
      info.width &&
      info.quantity &&
      info.productPrice
    ) {
      const newinfo = { ...info, id: uuid() };
      setDisplay([...display, newinfo]);
      setInfo({
        length: "",
        width: "",
        hight: "",
        quantity: "",
        shipPrice: "",
        productPrice: "",
        productName: "",
      });
    }
  };

  return (
    <>
      <div className="">
        <h1 className="mx-auto flex justify-center bg-black text-white rounded-md max-w-xs box-border">
          Calculate CBM
        </h1>
        <article className="">
          <form className="bg-white container flex-col flex max-w-md align-middle justify-center mx-auto border-t-2 shadow-md rounded-md px-3 my-2 drop-shadow-md box-border ">
            <label className="" htmlFor="productName">
              product:
            </label>
            <input
              className="bg-gray-700 rounded-sm focus:bg-black  border-transparent text-white"
              id="productName"
              type="text"
              value={info.productName}
              placeholder="name"
              name="productName"
              onChange={handleChange}
            />
            <label htmlFor="hight">Hight:</label>
            <input
              className="bg-gray-700 rounded-sm focus:bg-black text-white border-transparent"
              id="hight"
              type="number"
              value={info.hight}
              placeholder="cm"
              name="hight"
              onChange={handleChange}
            />
            <label htmlFor="length">Length:</label>
            <input
              className="bg-gray-700 rounded-sm focus:bg-black text-white border-transparent"
              id="length"
              type="number"
              value={info.length}
              placeholder="cm"
              name="length"
              onChange={handleChange}
            />
            <label htmlFor="width">Width:</label>
            <input
              className="bg-gray-700 rounded-sm focus:bg-black text-white border-transparent"
              id="width"
              type="number"
              value={info.width}
              placeholder="cm"
              name="width"
              onChange={handleChange}
            />
            <label htmlFor="quantity">Quantity:</label>
            <input
              className="bg-gray-700 rounded-sm focus:bg-black text-white border-transparent"
              id="quantity"
              type="number"
              value={info.quantity}
              placeholder="number of items or boxs"
              name="quantity"
              onChange={handleChange}
            />
            <label htmlFor="shipPrice">Shipping price for one CMB:</label>
            <input
              className="bg-gray-700 rounded-sm focus:bg-black text-white border-transparent"
              id="shipPrice"
              type="number"
              value={info.shipPrice}
              placeholder="$"
              name="shipPrice"
              onChange={handleChange}
            />{" "}
            <label htmlFor="productPrice">Price of product:</label>
            <input
              className="bg-gray-700 rounded-sm focus:bg-black text-white border-transparent"
              id="productPrice"
              type="number"
              value={info.productPrice}
              placeholder="$"
              name="productPrice"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="p-3 text-white bg-black my-2 max-w-max mx-auto rounded-md"
              onClick={handleSubmit}
            >
              Calculate
            </button>
          </form>
        </article>
        <article>
          {display.map((info) => {
            const {
              id,
              length,
              hight,
              width,
              shipPrice,
              quantity,
              productPrice,
            } = info;
            let cmb_el =
              (info.width * info.hight * info.length * info.quantity) / 1000000;
            let shipPrice_el = cmb_el * info.shipPrice;
            let productPrice_el = info.quantity * info.productPrice;
            let total_el = productPrice_el * 1 + shipPrice_el;
            return (
              <div
                key={id}
                className="flex flex-col mx-auto justify-items-center  bg-gray-200 max-w-md border-3 shadow-md my-1 px-1 flex-auto rounded-md "
              >
                <h4>Name: {info.productName}</h4>
                <h4>CMB: {cmb_el} m</h4>
                <h4>Shipping: {shipPrice_el} $</h4>
                <h4>Products: {productPrice_el} $</h4>
                <h4>Total: {total_el} $</h4>
              </div>
            );
          })}
        </article>
      </div>
    </>
  );
}

export default App;
