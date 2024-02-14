import { createContext, useContext, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Context=createContext(null)
function App() {

  const [count,setCount]=useState(1)
  const [filterId,setFilterId]=useState([])

  return (
    <Context.Provider value={{count,setCount,filterId,setFilterId}}>
      <Navbar />
      <Footer />
    </Context.Provider>
    
  );
}

export default App;

export const CardState = () => {
  return useContext(Context);
};