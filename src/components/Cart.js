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
      {/* Cart item container */}
      <div className="w-full h-auto lg:h-80 lg:w-3/5 mt-5 mx-auto border rounded">
        {/* Cart item details */}
        <div className="flex flex-col lg:flex-row m-2 relative">
          {/* Product image */}
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-fill h-44 lg:h-32 w-32 lg:w-44 rounded-md"
          />
          {/* Product details */}
          <div className="flex flex-col lg:w-2/3 lg:pl-4">
            <div className="flex relative">
              {/* Product title */}
              <h1 className="font-poppins font-bold text-xl m-1">
                {product.title}{" "}
              </h1>
              {/* Product rating */}
              <p className="font-poppins mt-1 absolute top-1 right-1">
                ⭐ {product.rating.toFixed(2)}
              </p>
            </div>
            {/* Product description */}
            <p className="font-poppins m-2 lg:max-w-sm">{product.description}</p>
            {/* Increment and decrement buttons for item count */}
            <div className="flex items-center lg:hidden">
              <button className="p-2 m-2 border" onClick={handleDecrement}>-</button>
              <p className="p-2 m-2">{count}</p>
              <button className="p-2 m-2 border" onClick={handleIncrement}>+</button>
            </div>
          </div>
          {/* Additional product details and remove button */}
          <div className="flex flex-col justify-between lg:pl-4">
            <div className="hidden lg:flex items-center">
              <button className="p-1 m-1 border rounded-full px-3" onClick={handleDecrement}>-</button>
              <p className="p-2">{count}</p>
              <button className="p-1 m-1 border rounded-full px-3" onClick={handleIncrement}>+</button>
            </div>
            {/* Product price */}
            <p className="font-poppins mt-1">Price : ₹{((product.price - (product.price * (product.discountPercentage) / 100))).toFixed(2)}</p>
            {/* M.R.P */}
            <p className="font-poppins mt-1">M.R.P :₹<span className="line-through"> {product.price}</span></p>
            {/* Remove button */}
            <button className="font-poppins p-1 border bg-red-400 text-white rounded m-2  hover:bg-black hover:text-white" onClick={handleRemoveFromCart}>Remove</button>
          </div>
        </div>
        {/* Cart item subtotal and total section */}
        <hr className="lg:hidden" />
        <div className="flex justify-between">
          <div>
            <p className="font-poppins m-2">Subtotal ({count} Items) : </p>
            <p className="font-poppins m-2">Discount % : </p>
          </div>
          <div>
            {/* Subtotal */}
            <p className="m-2">₹{product.price * count}</p>
            {/* Discount */}
            <p className="m-2">{product.discountPercentage}%</p>
          </div>
        </div>
        <hr className="lg:hidden" />
        <div className="flex justify-between">
          <div>
            {/* Total */}
            <p className="font-poppins m-2">Totalotal : </p>
          </div>
          <div>
            {/* Calculated total */}
            <p className="m-2">
              ₹{(((product.price - (product.price * (product.discountPercentage) / 100))) * count).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exporting the Cart component as the default export
export default Cart;
