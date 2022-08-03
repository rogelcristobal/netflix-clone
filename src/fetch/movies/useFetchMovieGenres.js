import axios from "axios";
import request from "../api";
import { useQuery } from "@tanstack/react-query";
const useFetchMovieGenres = () => {
  const movieGenreQuery = useQuery(['movieQuery'],async()=>{
    const response = await axios.get(request.getMovieGenre)
    return response.data
  })

  return movieGenreQuery
  
}

export default useFetchMovieGenres;
