
import {useQuery} from '@tanstack/react-query'
import axios from "axios";
import request from "../api";
const useFetchAiringToday = () => {
    const airingTodayQuery=useQuery(["airingToday"],async()=>{
        const response = await axios.get(request.getAiringToday)
        return response
    })
    return airingTodayQuery
}

export default useFetchAiringToday;
