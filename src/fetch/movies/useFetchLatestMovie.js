import request from "../api"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
const  useFetchLatestMovie= ()=>{
  const latestMovieQuery = useQuery(['latestMovie'],async()=>{
    const response = await axios.get(request.getLatestMovie)
    return response.data
  })
  return latestMovieQuery
}

export default useFetchLatestMovie;