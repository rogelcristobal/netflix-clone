import request from "../api";
import { useState,useEffect } from "react";
import axios from "axios";
const useFetchPopularShow = () => {
    const [popularShow,setPopularShow] = useState(null)
    const fetch=async()=>{
        try {
            const response = await axios.get(request.getPopularShow)
            setPopularShow(response.data)
        } catch (error) {
            
        }
    }
    useEffect(() => {
    fetch()
  }, []);
  return {popularShow}

}

export default useFetchPopularShow;
