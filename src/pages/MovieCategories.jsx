import {
  Typography,
  Link,
  Paper,
  ListItem,
  ListItemButton,
  Box,
  List,
  Skeleton,
  Avatar,
  Stack,
  Grid,
} from "@mui/material";
import TripleCardComponent from "../components/TripleCardComponent";
import useFetchNowPlayingMovie from "../fetch/movies/useFetchNowPlayingMovie";

import useFetchPopularMovie from "../fetch/movies/useFetchPopularMovie";
import useFetchTopRatedMovie from "../fetch/movies/useFetchTopRatedMovie";
import useFetchUpcomingMovie from "../fetch/movies/useFetchUpcomingMovie";

import useFetchMovieGenres from "../fetch/movies/useFetchMovieGenres";
import useFetchPopularArtist from "../fetch/people/useFetchPopularArtist";

const MovieCategories = () => {
  // queries
  const popularMovieQuery = useFetchPopularMovie();
  const nowPlayingMovieQuery = useFetchNowPlayingMovie();
  const topRatedMovieQuery = useFetchTopRatedMovie();
  const upcomingMovieQuery = useFetchUpcomingMovie();
  const popularArtist = useFetchPopularArtist();
  const genreQuery = useFetchMovieGenres();
  const sliceGenre = (endpoint, state) => {
    // console.log(genreQuery.data)
    if (endpoint.isLoading) {
      if (!state) {
        return Array.from(new Array(4));
      } else {
        return Array.from(new Array(5));
      }
    } else {
      if (!state) {
        return endpoint.data?.genres.slice(0, 4);
      } else {
        return endpoint.data?.genres.slice(0, 5);
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
              movie={item.data}
              isSpanTwo={id === 0 ? true : false}
              loading={item.isLoading}
              
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
          className="  box-border pt-8 px-4 w-full rounded-xl bg-inherit flex flex-col items-left justify-start h-auto space-y-0"
        >
          <Typography
            variant="p"
            className="text-color-300 font-medium text-sm tracking-wide"
          >
            Categories
          </Typography>
          <List>
            {genreQuery.isLoading
              ? Array.from(new Array(4)).map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="rounded-xl" variant="contained">
                      <Skeleton>
                        <Typography
                          variant="p"
                          className="text-sm  w-20 text-neutral-400"
                        >
                          item loading
                        </Typography>
                      </Skeleton>
                    </ListItemButton>
                  </ListItem>
                ))
              : sliceGenre(genreQuery).map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="rounded-xl dark:hover:bg-[#191920] hover:bg-primary-400 hover:text-color-300 py-3 text-gray-700 font-medium  tracking-wide transition-all duration-200 ease-in-out">
                      <Typography
                        variant="p"
                        className="text-xs    "
                      >
                        {item.name}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
          </List>
          {/* <Link
            className="flex items-center justify-start text-sm  font-outfit text-gray-700 w-full py-1 rounded-xl"
            underline="none"
            component="button"
          >
            See More
          </Link> */}
        </Paper>
      </Paper>
    </>
  );
};

export default MovieCategories;
