import { useState } from "react";
import { CardState } from "./App";
const Card = ({ product }) => {
  //on click pass id to cart n filter
  const { filterId, setFilterId } = CardState();
  const [changeButton, setChangeButton] = useState(false);

  const handleAdd = (product) => {
    setChangeButton(!changeButton);
    setFilterId([...filterId, product]);
  };

  const handleRemove=(product)=>{
    setChangeButton(!changeButton);
    setFilterId(filterId.filter((c)=>c.id !== product.id));

  }

  return (
    <section className="h-96 w-96  mx-auto border my-3 rounded-md">
      <div className="flex m-2">
        <div className="flex flex-col">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-fill h-48 rounded-md"
          />
          <div className="flex relative">
            <h1 className="font-poppins font-bold text-xl m-1">
              {product.title}{" "}
            </h1>
            <p className="font-poppins mt-1 absolute top-1 right-1">
              ⭐ {product.rating.toFixed(2)}
            </p>
          </div>
          <p className="font-poppins mt-1">
            {product.description.length > 43
              ? product.description.slice(0, 40) + `...`
              : product.description}
          </p>
          <p className="font-poppins mt-1">
            Price : ₹
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </p>
          <p className="font-poppins mt-1">
            M.R.P :₹<span className="line-through"> {product.price}</span>
          </p>
          {filterId.includes(product)?( <button className="font-poppins p-1 border bg-red-400 text-white rounded m-2  hover:bg-black hover:text-white" onClick={() => handleRemove(product)}> Remove from Cart</button>):(<button
            className="font-poppins p-1 border border-black rounded m-2 hover:bg-black hover:text-white"
            onClick={() => handleAdd(product)}
          >
            Add to Cart
          </button>)}
          
         
        </div>
      </div>
    </section>
  );
};

export default Card;
