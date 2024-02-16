// Importing necessary modules from React
import React, { useState, createContext } from "react";

// Creating a new context object
export const Context = createContext();

// Defining the UserProvider component as a functional component
export const UserProvider = ({ children }) => {
  // Initializing state for the list of filtered product IDs
  const [filterId, setFilterId] = useState([]);

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    // Filtering out the product with the given ID from the filterId state
    setFilterId(filterId.filter((item) => item.id !== productId));
  };

  // Rendering the JSX content with the context provider
  return (
    <Context.Provider value={{ filterId, setFilterId, removeFromCart }}>
      {/* Rendering the child components */}
      {children}
    </Context.Provider>
  );
};
