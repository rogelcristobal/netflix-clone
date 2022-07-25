import { createContext } from "react";
import useFetchUpcomingMovie from "../fetch/movies/useFetchUpcomingMovie";
import useFetchPopular from "../fetch/movies/useFetchPopular";
import useFetchGenre from "../fetch/movies/useFetchGenre";
import useFetchTopRated from "../fetch/movies/useFetchTopRated";
import useFetchNowPlayingMovie from "../fetch/movies/useFetchNowPlaying";
import useFetchLatestMovie from "../fetch/movies/useFetchLatestMovie";
// shows
import useFetchAiringToday from "../fetch/shows/useFetchAiringToday";
import useFetchOnAir from "../fetch/shows/useFetchOnAir";
import useFetchPopularShow from "../fetch/shows/useFetchPopularShow";
import useFetchTopRatedShow from "../fetch/shows/useFetchTopRatedShow";
const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
	const {nowPlayingMovie} = useFetchNowPlayingMovie()
	const { upcomingMovies, upcomingLoading } = useFetchUpcomingMovie();
	const { popularMovies, popularLoading } = useFetchPopular();
	const { topRatedMovies} = useFetchTopRated()
	const {latestMovie} = useFetchLatestMovie()
	const { genre } = useFetchGenre();
	// shows
	const {airingToday} = useFetchAiringToday()
	const {popularShow} = useFetchPopularShow()
	const {topRatedShow} = useFetchTopRatedShow
	const {onAir}=useFetchOnAir()
	return (
		<MovieContext.Provider
			value={{
				genre,
				latestMovie,
				nowPlayingMovie,
				upcomingMovies,
				popularMovies,
				popularLoading,
				upcomingLoading,
				topRatedMovies,
				// shows
				airingToday,
				onAir,
				popularShow,
				topRatedShow
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieContext;
