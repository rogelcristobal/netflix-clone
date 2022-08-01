import axios from "axios";
import request from "../api"
import { useQuery } from "@tanstack/react-query";
export default function useFetchUpcomingMovie() {
	
	const upcomingMovieQuery = useQuery(['upcomingMovie'],async()=>{
		const response = await axios.get(request.getUpcomingMovies)
		return response.data
	})
	return upcomingMovieQuery
}
