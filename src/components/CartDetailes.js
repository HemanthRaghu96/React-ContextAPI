// Importing React library and the useContext hook
import React, { useContext } from "react";

// Importing the Cart component from "./Cart"
import Cart from "./Cart";

// Importing the Context from "./UserProvider"
import { Context } from "./UserProvider";

// Defining the CartDetails component as a functional component
const CartDetails = () => {
  // Accessing the filterId from the context
  const { filterId } = useContext(Context);

  // Rendering the JSX content
  return (
    <section>
      {/* Container for cart details */}
      <div className="w-11/12 grid grid-cols-1 mx-auto mb-20">
        {/* Mapping through the filtered products and rendering a Cart component for each */}
        {filterId.map((product) => ( 
          <Cart key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

// Exporting the CartDetails component as the default export
export default CartDetails;
