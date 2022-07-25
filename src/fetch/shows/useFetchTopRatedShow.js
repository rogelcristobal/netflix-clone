import request from "../api";
import axios from "axios";
import { useState,useEffect } from "react";
const useFetchTopRatedShow = () => {
    const [topRatedShow,setTopRatedShow] = useState(null)
    const fetch=async()=>{
        try {
            const response = await axios.get(request.getTopRatedShow)
            setTopRatedShow(response.data)
        } catch (error) {
            
        }
    }
    useEffect(() => {
      fetch()
    }, []);
    return {topRatedShow}
}

export default useFetchTopRatedShow;
