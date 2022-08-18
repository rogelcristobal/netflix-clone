import request from "../api";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const useFetchTopRatedShow = () => {
  
    const topRatedShowQuery = useQuery(['topRatedShow'],async()=>{
        const response =await axios.get(request.getTopRatedShow)
        return response.data    
    })
    return topRatedShowQuery
}

export default useFetchTopRatedShow;
