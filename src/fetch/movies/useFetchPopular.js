import axios from "axios";
import request from "../api"
import { useState, useEffect } from "react";

export default function useFetchPopular() {
	const [popularMovies, setPopularMovies] = useState(null);
	const [popularLoading, setPopularLoading] = useState(true);
	const fetch = async () => {
		try {
			const response = await axios.get(request.getPopularMovies);
			setPopularMovies(response.data);
			setPopularLoading(false);
		} catch (error) {}
	};
	useEffect(() => {
		fetch();
	}, []);
	return { popularMovies, popularLoading };
}
