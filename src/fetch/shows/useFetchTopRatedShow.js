import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const useFetchTopRatedShow = () => {
    const [state,setState] = useState({totalPages:0,page:1})
    const nextPage=()=>{
      setState((prevState)=>({
        ...prevState, 
        page: state.page + 1
      }))
    }
    const prevPage=()=>{
      setState((prevState)=>({
        ...prevState, 
        page: state.page - 1
      }))
    }
    const fetch=async(page)=>{
      const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US&page=${page}`)
  
      setState((prevState)=>({...prevState, totalPages: response.data.total_pages}))
      return response.data
    }
    const data = useQuery(['top_rated',state.page],()=> fetch(state.page))
    return {data,nextPage,prevPage, state}
}

export default useFetchTopRatedShow;
