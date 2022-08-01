import axios from "axios";
import request from "../api";
import { useQuery } from "@tanstack/react-query";
const useFetchAiringToday = () => {
    const fetchAiringTodayQuery = useQuery(['airingTodayShow'],async()=>{
        const response = await axios.get(request.getAiringToday)
        return response.data
    })     
    return fetchAiringTodayQuery
}

export default useFetchAiringToday;
