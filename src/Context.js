import { createContext } from "react";

export const UniversalContext = createContext(null)

const Context = ({ value, children }) => {
  return (
        <UniversalContext.Provider value={value}>
           {children}
        </UniversalContext.Provider>
      );
  };
  
  export default Context