// Importing useContext and useState hooks from React
import { useContext, useState } from "react";

// Importing the Context from the UserProvider
import { Context } from "./UserProvider";

// Defining the Card component as a functional component
const Card = ({ product }) => {
  // Destructuring filterId and setFilterId from the Context
  const { filterId, setFilterId } = useContext(Context);

  // State to manage button state changes
  const [changeButton, setChangeButton] = useState(false);

  // Function to handle adding a product to the cart
  const handleAdd = (product) => {
    // Toggling the button state
    setChangeButton(!changeButton);
    // Adding the product to the cart (filterId)
    setFilterId([...filterId, product]);
  };

  // Function to handle removing a product from the cart
  const handleRemove = (product) => {
    // Toggling the button state
    setChangeButton(!changeButton);
    // Filtering out the removed product from the cart (filterId)
    setFilterId(filterId.filter((c) => c.id !== product.id));
  };

  // Rendering the JSX content
  return (
    <section className=" w-72 md:w-96   mx-auto border my-3 rounded-md">
       <div className="flex m-5">
        <div className="flex flex-col">
          {/* Product image */}
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-fill h-48 rounded-md w-full"
          />
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
          <p className="font-poppins mt-1">
          {product.description.length > 75
              ? product.description.slice(0, 75) + `...`
              : product.description}
          </p>
          {/* Product price */}
          <p className=" mt-1">
          <span className="text-xl font-bold">₹{(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}</span>
            <span className="text-gray-500 line-through px-2 text-lg">₹{product.price}</span>
            <span className="text-green-500 font-bold ">{product.discountPercentage}% OFF</span>
          </p>
         
          {/* Conditional rendering of Add to Cart or Remove from Cart button */}
          {filterId.includes(product) ? (
            <button className="font-poppins p-1 border bg-red-400 text-white rounded m-2  hover:bg-black hover:text-white" onClick={() => handleRemove(product)}> Remove from Cart</button>
          ) : (
            <button
              className="font-poppins p-1 border border-black rounded m-2 hover:bg-black hover:text-white"
              onClick={() => handleAdd(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

// Exporting the Card component as the default export
export default Card;
