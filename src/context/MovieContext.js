import { createContext } from "react";
import useFetchUpcomingMovie from "../fetch/movies/useFetchUpcomingMovie";
import useFetchPopular from "../fetch/movies/useFetchPopular";
import useFetchGenre from "../fetch/movies/useFetchGenre";
import useFetchTopRated from "../fetch/movies/useFetchTopRated";
import useFetchNowPlayingMovie from "../fetch/movies/useFetchNowPlaying";
import useFetchLatestMovie from "../fetch/movies/useFetchLatestMovie";
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
				topRatedMovies,
				
				
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieContext;
