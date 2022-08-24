import {
  Typography,
  Paper,
  ListItem,
  ListItemButton,
  List,
  Skeleton,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import TripleCardComponent from "../components/TripleCardComponent";
import useFetchNowPlayingMovie from "../fetch/movies/useFetchNowPlayingMovie";

import useFetchPopularMovie from "../fetch/movies/useFetchPopularMovie";
import useFetchTopRatedMovie from "../fetch/movies/useFetchTopRatedMovie";
import useFetchUpcomingMovie from "../fetch/movies/useFetchUpcomingMovie";

import useFetchGenreByCategory from "../fetch/general/useFetchGenreByCategory";

const MovieCategories = () => {
  const { pathname } = useLocation();
  // queries
  const {data:popularMovieQuery} = useFetchPopularMovie();
  const {data:nowPlayingMovieQuery} = useFetchNowPlayingMovie();
  const {data:topRatedMovieQuery} = useFetchTopRatedMovie();
  const {data:upcomingMovieQuery} = useFetchUpcomingMovie();
  const {data: genreData, isLoading: genreLoading } =
    useFetchGenreByCategory(pathname);

  const sliceGenre = (state) => {
    // console.log(movieGenreQuery.data)
    if (genreLoading) {
      if (!state) {
        return Array.from(new Array(4));
      } else {
        return Array.from(new Array(5));
      }
    } else {
      if (!state) {
        return genreData.genres.slice(0, 4);
      } else {
        return genreData.genres.slice(0, 5);
      }
    }
  };

  return (
    <>
      <Paper
        variant="contained"
        className=" bg-inherit  flex flex-col items-center justify-start    pt-20 w-full  h-full box-border"
        square
      >
        {/* scrollable content */}
        <div className="overflow-y-scroll overflow-x-hidden h-full w-full px-8 py-2  pb-72 box-border space-y-2 scroll-smooth	">
          {[
            { title: "discover movies", data: popularMovieQuery },
            { title: "now playing", data: nowPlayingMovieQuery },
            { title: "top rated movies", data: topRatedMovieQuery },
            { title: "upcoming movies", data: upcomingMovieQuery },
          ].map((item, id) => (
            <TripleCardComponent
              key={id}
              title={item.title}
              API_data={item.data}
              isSpanTwo={id === 0 ? true : false}
            ></TripleCardComponent>
          ))}
        </div>
      </Paper>
      {/*page nav*/}

      <Paper
        variant="contained"
        className="w-60 mt-0 pt-20  box-border mx-6 bg-inherit  h-full "
      >
        <Paper
          variant="contained"
          className="  box-border pt-8 px-6 w-full rounded-xl bg-inherit flex flex-col items-left justify-start h-auto space-y-0"
        >
          <Typography
            variant="p"
            className="text-color-300 font-medium text-sm tracking-wide "
          >
            Categories
          </Typography>
          <List>
            {genreLoading
              ? Array.from(new Array(4)).map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="rounded-xl" variant="contained">
                      <Skeleton className="w-full h-6 bg-[#161b22]"></Skeleton>
                    </ListItemButton>
                  </ListItem>
                ))
              : sliceGenre(genreData).map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="rounded-xl hover:bg-[#161b22] dark:hover:bg-primary-400 hover:text-color-300 py-3 text-gray-700 font-medium  tracking-wide transition-all duration-200 ease-in-out">
                      <Typography variant="p" className="text-xs    whitespace-nowrap">
                        {item.name}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
          </List>
        </Paper>
      </Paper>
    </>
  );
};

export default MovieCategories;
