import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchGenreByCategory = (pathname,id) => {

    const fetchGenre = async(pathname,id)=>{
        if(pathname === `/movies/${id}`){
            const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US`)
            return data
        }else if(pathname === `/tvshows${id}`){
            const {data} = await  axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US`)
            return data
        }
    }


    const genreSpecificQuery = useQuery(['cardGenre'],()=>fetchGenre(pathname,id))
    return genreSpecificQuery


}
export default useFetchGenreByCategory;

