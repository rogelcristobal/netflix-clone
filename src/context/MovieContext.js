import { createContext } from "react";
import useFetchUpcomingMovie from "../fetch/useFetchUpcomingMovie";
import useFetchPopular from "../fetch/useFetchPopular";
import useFetchGenre from "../fetch/useFetchGenre";
const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
	const { upcomingMovies, upcomingLoading } = useFetchUpcomingMovie();
	const { popularMovies, popularLoading } = useFetchPopular();
	const { genre } = useFetchGenre();
	return (
		<MovieContext.Provider
			value={{
				genre,
				upcomingMovies,
				popularMovies,
				popularLoading,
				upcomingLoading,
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieContext;
