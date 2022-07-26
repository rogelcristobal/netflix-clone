import { createContext } from "react";
import useSearchAny from "../fetch/search/useSearchAny";
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
	const { handleSearch, searchAnyResults, loading, setLoading } =
		useSearchAny();
	return (
		<SearchContext.Provider
			value={{ handleSearch, searchAnyResults, loading, setLoading }}
		>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContext;
