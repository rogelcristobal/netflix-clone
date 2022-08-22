import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchGenreByCategory = (pathname) => {

    const fetchGenre = async(pathname)=>{
        if(pathname === `/movies`){
            const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US`)
            return data
        }else if(pathname === `/tvshows`){
            const {data} = await  axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US`)
            return data
        }
    }


    const genreSpecificQuery = useQuery(['itemGenre'],()=>fetchGenre(pathname))
    return genreSpecificQuery


}
export default useFetchGenreByCategory;

