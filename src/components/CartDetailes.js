import React, { useContext } from "react";
import Cart from "./Cart";
import { Context } from "./UserProvider";

const CartDetails = () => {
  const { filterId } = useContext(Context); // Destructure filterId from the context

  console.log(filterId);

  return (
    <section>
      <div className="w-11/12 grid grid-cols-1 mx-auto mb-20">
        {filterId.map((product) => ( // Ensure filterId is truthy and then map
          <Cart key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CartDetails;
