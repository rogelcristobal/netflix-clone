import request from "../api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useFetchPopularShow = () => {
   
    const popularShowQuery = useQuery(['popularShow'],async()=>{
        const response = await axios.get(request.getPopularShow)
        return response.data
    })
    return popularShowQuery

}

export default useFetchPopularShow;
