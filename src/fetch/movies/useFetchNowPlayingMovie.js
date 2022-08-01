import request from "../api"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
export default function useFetchNowPlayingMovie (){
const nowPlayingMovieQuery = useQuery(['nowPlayingMovie'],async()=>{
  const response = await axios.get(request.getNowPlayingMovie)
  return response.data
}) 
  return nowPlayingMovieQuery
}
