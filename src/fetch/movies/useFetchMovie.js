
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useFetchMovie = ({movieID}) => {
   
    const getMovie = useQuery(['movie' ], async()=>{
        
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US`)
        return response.data
    })
    return getMovie
  
}

export default useFetchMovie;
