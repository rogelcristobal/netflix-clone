const key = process.env.REACT_APP_MOVIE_DATABASE_API_KEY;

const request = {
	getLatestMovie:`https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US&page=1`,
	getNowPlayingMovie:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
	getTopRatedMovies:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
	getPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
	getUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
	getMovieGenre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US
    `,
	// shows
	getAiringToday:`https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,
	getOnAir:`https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=1`,
	getPopularShow:`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
	getTopRatedShow:`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
	getShowGenre:`
	https://api.themoviedb.org/3/genre/tv/list?api_key=${key}&language=en-US`,

	// people
	getPopularPeoples:`https://api.themoviedb.org/3/person/popular?api_key=${key}&language=en-US&page=1`,

	// search
	searchAny:`https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&page=1&include_adult=false`,

	// network
	getNetwork:`https://api.themoviedb.org/3/network/213?api_key=${key}`

};
export default request;
