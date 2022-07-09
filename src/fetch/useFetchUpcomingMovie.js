import axios from "axios";
import request from "./api";

import { useState, useEffect } from "react";
export default function useFetchUpcomingMovie() {
	const [upcomingMovies, setUpcomingMovies] = useState(null);
	const [upcomingLoading, setUpcomingLoading] = useState(true);
	const fetch = async () => {
		const response = await axios.get(request.getUpcomingMovies);
		setUpcomingMovies(response.data);
		setUpcomingLoading(false);
	};
	useEffect(() => {
		fetch();
	}, []);

	return { upcomingMovies, upcomingLoading };
}
