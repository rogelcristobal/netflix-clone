import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useFetchItem = (path,id) => {
    const fetchItem= async(pathname,id)=>{
     if(pathname === `/homepage/movies/${id}`){
        const {data} =  await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US`)
        return data
     }else if(pathname === `/homepage/tvshows/${id}`){
        const {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US`)
        return data
     }
    }
    const itemQuery = useQuery([path,id],()=>fetchItem(path,id))
    return itemQuery
 
};

export default useFetchItem;

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// const useFetchMovie = (movieID) => {

//     const fetchMovieById=async(movieID)=>{
//         const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US`)
//         return data
//     }
//     const movieQuery = useQuery(["movie", movieID], () => fetchMovieById(movieID));

//     return  movieQuery
// };

// export default useFetchMovie;
