const key = "754cb358915af129a5a352e456f121ff";

const request = {
	getLatestMovie:`https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US&page=1`,
	getNowPlayingMovie:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
	getTopRatedMovies:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
	getPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
	getUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
	getGenre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US
    `,
	// shows
	getAiringToday:`https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,
	getOnAir:`https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=1`,
	getPopularShow:`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
	getTopRatedShow:`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,

	// search
	searchAny:`https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&page=1&include_adult=false`

};
export default request;
