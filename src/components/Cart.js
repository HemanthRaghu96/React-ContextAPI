// Importing React library and necessary hooks
import React, { useContext, useState } from "react";

// Importing the Context from UserProvider
import { Context } from "./UserProvider";

// Defining the Cart component as a functional component
const Cart = ({ product }) => {
  // Accessing removeFromCart function from the context
  const { removeFromCart } = useContext(Context);

  // State to manage the count of items in the cart
  const [count, setCount] = useState(1);

  // Function to handle incrementing the count of items
  const handleIncrement = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };

  // Function to handle decrementing the count of items
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Function to handle removing the item from the cart
  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  // Rendering the JSX content
  return (
    <section>
      <div className="w-full h-auto  md:w-11/12 lg:w-11/12 xl:w-3/5 mt-5 mx-auto border shadow-md rounded">
        <div className="flex flex-col md:flex-row m-2 relative">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-fill h-44 lg:h-32 w-32 lg:w-44 rounded-md"
          />
          <div className="flex flex-col md:w-3/5 lg:pl-4">
            <h1 className="font-poppins font-bold text-xl m-1">
              {product.title}
            </h1>

            <p className="font-poppins m-1 lg:max-w-sm">
              {product.description}
            </p>
            <div className="flex md:hidden  lg:pl-4">
            <p className=" w-20   m-2 bg-red-400 text-sm rounded-md p-1 text-white font-bold">
              {product.discountPercentage}% off</p>
            <p className=" md:text-2xl py-2 font-bold ">
              ₹
              {(
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(2)}
            </p>
            <p className="m-2 text-gray-500">
              M.R.P :₹<span className="line-through"> {product.price}</span>
            </p>

            
          </div>
            <div className="flex items-center">
              <button
                className="p-1 m-1 border rounded-lg px-3"
                onClick={handleDecrement}
              >
                -
              </button>
              <p className="p-2">{count}</p>
              <button
                className="p-1 m-1 border rounded-lg px-3"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
            
            <button
              className=" w-24 font-poppins p-1 border bg-red-600 text-white rounded m-2 px-4 hover:bg-black hover:text-white"
              onClick={() => handleRemoveFromCart(product.id)}
            >
              Remove
            </button>
          </div>
          <div className=" hidden md:flex md:flex-col md:items-end  lg:pl-4">
            <p className=" w-20   m-2 bg-red-400 text-sm rounded-md p-1 text-white font-bold">
              {product.discountPercentage}% off</p>
            <p className=" md:text-2xl py-2 font-bold ">
              ₹
              {(
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(2)}
            </p>
            <p className="m-2 text-gray-500">
              M.R.P :₹<span className="line-through"> {product.price}</span>
            </p>

            
          </div>
        </div>
        <hr className="lg:hidden" />

        <hr className="" />
        <div className="flex md:justify-end md:mx-5 mx-2 my-3">
          <p className="font-poppins">Total({count} Items) : </p>
          <p className="">
            ₹
            {(
              (product.price -
                (product.price * product.discountPercentage) / 100) *
              count
            ).toFixed(2)}
          </p>
        </div>
      </div>
      
    </section>
  );

};

// Exporting the Cart component as the default export
export default Cart;
