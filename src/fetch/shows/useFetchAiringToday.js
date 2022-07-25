import { useState,useEffect } from "react";
import axios from "axios";
import request from "../api";

const useFetchAiringToday = () => {
    const [airingToday,setAiringToday] = useState(null)
    const fetch=async()=>{
        try {
            const response = await axios.get(request.getAiringToday)
            setAiringToday(response.data)
        } catch (error) {
            
        }
    }
    useEffect(() => {
   fetch()
 }, []);
 return {airingToday}
}

export default useFetchAiringToday;
