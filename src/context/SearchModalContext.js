import {  createContext } from "react";
import { useState } from "react";

const SearchModalContext = createContext()

export const SearchModalProvider = ({children})=>{

    const [searchModal,setSearchModal] = useState(false)
    return <SearchModalContext.Provider value={{searchModal,setSearchModal}}>{children}</SearchModalContext.Provider>
} 

export default SearchModalContext