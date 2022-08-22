import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
const useSampleFetch = () => {
  const [page,setPage] = useState(5)
  const nextPage=()=>{
    setPage(page + 1)
  }
  const prevPage=()=>{
    setPage(page-1)
  }
  const fetch=async(page)=>{
    const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US&page=${page}`)
    return response.data
  }
  const fetchMovie = useQuery(['sampleFetch',page],()=> fetch(page))
  return {fetchMovie,nextPage,prevPage}
}


export default useSampleFetch;
