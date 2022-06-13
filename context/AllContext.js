import React, { useState, createContext } from "react";
const Context = createContext();
import Cookies from "js-cookie";

const AllContext = ({ children }) => {
  const [globalLang, setGlobalLang] = useState(Cookies.get("language"));
  // console.log(lang);
  return (
    <Context.Provider value={{ globalLang, setGlobalLang }}>
      {children}
    </Context.Provider>
  );
};

export default AllContext;
