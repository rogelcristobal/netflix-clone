import { createContext } from "react";
const SearchContext= createContext()
import axios from "axios";
import { useState,useEffect } from "react";
const SeachProvider = ({children}) => {
  const key = '754cb358915af129a5a352e456f121ff'
  const [search,setSearch]=useState(null)
  const endpoint = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&page=1&include_adult=false`
    useEffect(() => {
      const fetch=async()=>{
        try {
          const response =await axios.get()  
        } catch (error) {
          
        }
        fetch()
      }
    }, []);
    return <SearchContext.Provider value={{search,setSearch}}>{children}</SearchContext.Provider>

}

export default SearchContext;
