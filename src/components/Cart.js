import React, { useContext, useState } from "react";
import { Context } from "./UserProvider";

const Cart = ({ product }) => {
  const { removeFromCart } = useContext(Context);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };
  
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  
  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <section>
      <div className="w-full h-auto lg:h-80 lg:w-3/5 mt-5 mx-auto border rounded">
        <div className="flex flex-col lg:flex-row m-2 relative">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-fill h-44 lg:h-32 w-32 lg:w-44 rounded-md"
          />
          <div className="flex flex-col lg:w-2/3 lg:pl-4">
            <div className="flex relative">
              <h1 className="font-poppins font-bold text-xl m-1">
                {product.title}{" "}
              </h1>
              <p className="font-poppins mt-1 absolute top-1 right-1">
                ⭐ {product.rating.toFixed(2)}
              </p>
            </div>
            <p className="font-poppins m-2 lg:max-w-sm">{product.description}</p>
            <div className="flex items-center lg:hidden">
              <button className="p-2 m-2 border" onClick={handleDecrement}>-</button>
              <p className="p-2 m-2">{count}</p>
              <button className="p-2 m-2 border" onClick={handleIncrement}>+</button>
            </div>
          </div>
          <div className="flex flex-col justify-between lg:pl-4">
            <div className="hidden lg:flex items-center">
              <button className="p-2 m-2 border" onClick={handleDecrement}>-</button>
              <p className="p-2 m-2">{count}</p>
              <button className="p-2 m-2 border" onClick={handleIncrement}>+</button>
            </div>
            <p className="font-poppins mt-1">Price : ₹{((product.price - (product.price * (product.discountPercentage) / 100))).toFixed(2)}</p>
            <p className="font-poppins mt-1">M.R.P :₹<span className="line-through"> {product.price}</span></p>
            <button className="font-poppins p-1 border bg-red-400 text-white rounded m-2  hover:bg-black hover:text-white" onClick={handleRemoveFromCart}>Remove</button>
          </div>
        </div>
        <hr className="lg:hidden" />
        <div className="flex justify-between">
          <div>
            <p className="font-poppins m-2">Subtotal ({count} Items) : </p>
            <p className="font-poppins m-2">Discount % : </p>
          </div>
          <div>
            <p className="m-2">₹{product.price * count}</p>
            <p className="m-2">{product.discountPercentage}%</p>
          </div>
        </div>
        <hr className="lg:hidden" />
        <div className="flex justify-between">
          <div>
            <p className="font-poppins m-2">Totalotal : </p>
          </div>
          <div>
            <p className="m-2">
              ₹{(((product.price - (product.price * (product.discountPercentage) / 100))) * count).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
