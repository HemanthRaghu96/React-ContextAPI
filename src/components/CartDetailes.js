// Importing React library and the useContext hook
import React, { useContext } from "react";

// Importing the Cart component from "./Cart"
import Cart from "./Cart";

// Importing the Context from "./UserProvider"
import { Context } from "./UserProvider";
import { useNavigate } from "react-router-dom";

// Defining the CartDetails component as a functional component
const CartDetails = () => {
  // Accessing the filterId from the context
  const { filterId } = useContext(Context);
  const length=filterId.length
  console.log(length)
  const navigate=useNavigate()
  // Rendering the JSX content
  return (
    <section>
    {length>0?
      <div className="w-11/12 grid grid-cols-1 mx-auto mb-20">
        <>
        {filterId.map((product) => ( 
          <Cart key={product.id} product={product} />
        ))}
        </>
        <div class=" border-t w-11/12 lg:w-3/5 mx-auto border-gray-200 mt-4 pt-3 flex flex-col items-end">
    <h4 class="m-1 font-poppins font-bold text-3xl">Order Details</h4>
    
    <p class="m-1"><span class='orderdetails'>Total Quantity:</span> {} Items</p>
    <p class="m-1"><span class='orderdetails'>Shipping:</span> FREE <span class='cartshipping'></span> </p>
    <p class="m-1"><span class='orderdetails'>Total Savings:</span> <span class='totalsavings'>${}</span></p>
    <p class="m-1"><span class='orderdetails'>Total Amount:</span> ${}</p>
    <button class="px-2 py-2 border w-32 rounded-md text-white bg-blue-400">Proceed to Buy</button>
</div>
      </div>
      
      :
      <div className="flex flex-col items-center">
      <p className="font-poppins mt-10 text-2xl md:text-4xl font-black text-red-500">
              Your R-Cart is empty😔
      </p>
      <img src="https://media.tenor.com/8Bt28MKNs7sAAAAi/shopping-cart-ecomm.gif" alt="cart" />
      <button className="font-poppins mt-10 text-3xl font-bold hover: bg-blue-600 text-white rounded-md py-2 px-5" onClick={()=>navigate('/')}>Shop now</button>
      </div>}
    </section>
  );
};

// Exporting the CartDetails component as the default export
export default CartDetails;
