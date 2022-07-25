import request from "../api"
import axios from "axios"
import { useState,useEffect } from "react"
export default function useFetchLatestMovie (){
    const [latestMovie,setLatestMovie]=useState(null)
    const fetch=async()=>{
        const response = await axios.get(request.getLatestMovie)
        setLatestMovie(response.data)
    }
    useEffect(()=>{fetch()},[])


  return {latestMovie}
}
