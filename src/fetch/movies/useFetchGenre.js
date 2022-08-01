import axios from "axios";
import request from "../api";
import { useState,useEffect } from "react";
const useFetchGenre = () => {
  const [genre,setGenre] = useState(null)
  const fetch=async()=>{
    try {
        const response = await axios.get(request.getGenre)
        setGenre(response.data)
    } catch (error) {
        
    }
  }
  useEffect(()=>{fetch()},[])
  return {genre}
}

export default useFetchGenre;
