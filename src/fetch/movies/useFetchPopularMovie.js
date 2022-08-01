import axios from "axios";
import request from "../api"
import {useQuery} from '@tanstack/react-query'
export default function useFetchPopularMovie() {
	const popularMovieQuery = useQuery(['popularMovie'],async()=>{
		const response = await axios.get(request.getPopularMovies)
		return response.data
	})
	return popularMovieQuery
}
