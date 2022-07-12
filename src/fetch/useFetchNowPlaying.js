import request from "./api"
import axios from "axios"
import { useState,useEffect } from "react"
export default function useFetchNowPlayingMovie (){
    const [nowPlayingMovie,setNowPlayingMovie]=useState(null)
    const fetch=async()=>{
        const response = await axios.get(request.getNowPlayingMovie)
        setNowPlayingMovie(response.data)
    }
    useEffect(()=>{fetch()},[])


  return {nowPlayingMovie}
}
