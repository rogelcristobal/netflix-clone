import { createContext } from "react";
import useFetchUpcomingMovie from "../fetch/useFetchUpcomingMovie";
import useFetchPopular from "../fetch/useFetchPopular";
import useFetchGenre from "../fetch/useFetchGenre";
import useFetchTopRated from "../fetch/useFetchTopRated";
import useFetchNowPlayingMovie from "../fetch/useFetchNowPlaying";
import useFetchLatestMovie from "../fetch/useFetchLatestMovie";
const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
	const {nowPlayingMovie} = useFetchNowPlayingMovie()
	const { upcomingMovies, upcomingLoading } = useFetchUpcomingMovie();
	const { popularMovies, popularLoading } = useFetchPopular();
	const { topRatedMovies} = useFetchTopRated()
	const {latestMovie} = useFetchLatestMovie()
	const { genre } = useFetchGenre();
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
				topRatedMovies
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieContext;
