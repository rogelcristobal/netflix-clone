import axios from 'axios';
import request from '../api';
import { useQuery } from '@tanstack/react-query';
const useFetchRecommended = () => {
    const recommendedMovieQuery = useQuery(['recommendedMovie'],async()=>{
        // const resposnse = await axios.get(`https://api.themoviedb.org/3/movie/${}/recommendations?api_key=${}&language=en-US&page=1`)
    })
  
}

export default useFetchRecommended;
