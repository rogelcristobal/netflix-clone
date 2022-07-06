import axios from "axios"
import request from "./api"

import { useState,useEffect } from "react"
export default function useFetchUpcomingMovie(){
    const [upcomingMovies,setUpcomingMovies] = useState(null)
    const fetch=async()=>{
        const response = await axios.get(   request.getUpcomingMovies)
        setUpcomingMovies(response.data)
    }
    useEffect(()=>{
        fetch()
    },[])

    return {upcomingMovies}
}
