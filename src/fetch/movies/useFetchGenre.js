import axios from "axios";
import request from "../api";
import { useQuery } from "@tanstack/react-query";
const useFetchGenre = () => {

  const genreQuery = useQuery(['genre'],async()=>{
    const response = await axios.get(request.getMovieGenre)
    return response.data
  })
 return genreQuery
}

export default useFetchGenre;
