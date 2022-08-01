import axios from "axios";
import request from "../api"
import { useQuery } from "@tanstack/react-query";
const useFetchTopRatedMovie = () => {
  const topRatedMovieQuery = useQuery(['topRatedMovie'],async()=>{
    const response = await axios.get(request.getTopRatedMovies)
    return response.data
  })
  return topRatedMovieQuery
}

export default useFetchTopRatedMovie;
