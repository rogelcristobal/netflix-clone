import { createContext } from "react";
import useFetchUpcomingMovie from "../fetch/useFetchUpcomingMovie";
import useFetchPopular from "../fetch/useFetchPopular";
import useFetchGenre from "../fetch/useFetchGenre";
import useFetchTopRated from "../fetch/useFetchTopRated";
const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
	const { upcomingMovies, upcomingLoading } = useFetchUpcomingMovie();
	const { popularMovies, popularLoading } = useFetchPopular();
	const { topRatedMovies} = useFetchTopRated()
	const { genre } = useFetchGenre();
	return (
		<MovieContext.Provider
			value={{
				genre,
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
