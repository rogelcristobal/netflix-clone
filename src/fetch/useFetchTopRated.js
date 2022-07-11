import axios from "axios";
import request from "./api";
import { useState,useEffect } from "react";
const useFetchTopRated = () => {
    const[topRatedMovies,setTopRated] = useState(null)
    const fetch=async()=>{
        try {
            const response = await axios.get(request.getTopRatedMovies)
            setTopRated(response.data)            
        } catch (error) {
            
        }

    }
    useEffect(()=>{fetch()},[])
    return {topRatedMovies}
}

export default useFetchTopRated;
