import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchGenreByCategory = (path,id) => {
    const fetch=async(path,id)=>{
       
        if(path.includes('/movies')){
            const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US`)
            return data
        }else if(path.includes('/tvshows')){
            const {data} = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US`)
            return data
        }

    }
    const genreQuery = useQuery(['genre',path],()=>fetch(path,id))
    return genreQuery


}
export default useFetchGenreByCategory;

