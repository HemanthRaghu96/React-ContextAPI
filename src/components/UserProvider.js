import React, { useState, createContext } from "react";

export const Context = createContext();

export const UserProvider = ({ children }) => {
  const [filterId, setFilterId] = useState([]);

  const removeFromCart = (productId) => {
    setFilterId(filterId.filter((item) => item.id !== productId));
  };

  return (
    <Context.Provider value={{ filterId, setFilterId, removeFromCart }}>
      {children}
    </Context.Provider>
  );
};