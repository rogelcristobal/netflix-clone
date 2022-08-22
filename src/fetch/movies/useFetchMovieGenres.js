import axios from "axios";
import request from "../api";
import { useQuery } from "@tanstack/react-query";
const useFetchMovieGenres = () => {
  const fetch=async()=>{
    const {data} = await axios.get(request.getMovieGenre)
    return data
  }
  const {data,isLoading,isError,error} = useQuery(['movieGenre'],fetch)
  return {data,isLoading,isError,error}   
}

export default useFetchMovieGenres;
