
import { createContext } from "react";

const ShowsContext = createContext();

export const ShowsProvider = ({ children }) => {
  // shows
  return(
    <ShowsContext.Provider
      value={{}}
    >
      {children}
    </ShowsContext.Provider>
  );
};
export default ShowsContext;
