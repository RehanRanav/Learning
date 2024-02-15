import { createContext, useRef, useState } from "react";
import Card from "./Card";

export const RefContext = createContext();

export const RefContextProvider = ({ children }) => {
    const cardRef = useRef(null);
    const [flag, setFlag] = useState(false)

  return (
    <RefContext.Provider value={{ cardRef }}>
      {children}
      {flag && <Card/>}
    </RefContext.Provider>
  );
};
