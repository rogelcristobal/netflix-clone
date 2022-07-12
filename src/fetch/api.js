const key = "754cb358915af129a5a352e456f121ff";

const request = {
	getNowPlayingMovie:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
	getTopRatedMovies:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
	getPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
	getUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
	getGenre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US
    `,
};
export default request;
