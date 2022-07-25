import useFetchAiringToday from "../fetch/shows/useFetchAiringToday";
import useFetchOnAir from "../fetch/shows/useFetchOnAir";
import useFetchPopularShow from "../fetch/shows/useFetchPopularShow";
import useFetchTopRatedShow from "../fetch/shows/useFetchTopRatedShow";
import { createContext } from "react";

const ShowsContext = createContext();

export const ShowsProvider = ({ children }) => {
  // shows
  const { airingToday } = useFetchAiringToday();
  const { popularShow } = useFetchPopularShow();
  const { topRatedShow } = useFetchTopRatedShow();
  const { onAir } = useFetchOnAir();
  return (
    <ShowsContext.Provider
      value={{
        airingToday,
        onAir,
        popularShow,
        topRatedShow,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
};
export default ShowsContext;
