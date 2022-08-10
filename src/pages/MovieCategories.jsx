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
import { BsArrowRight } from "react-icons/bs";
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
  const movieGenre = useFetchMovieGenres();
  const sliceGenre = (endpoint, state) => {
    // console.log(movieGenre.data)
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
          {/* <Paper
            variant="outlined"
            className="bg-color-black  py-4 px-4 h-96 mt-20 w-full  box-border rounded-lg"
          ></Paper> */}
          {/* <Paper
            variant="outlined"
            className="h-fit bg-inherit  mt-24 box-border w-full rounded-xl space-y-3 py-4 px-6 text-gray-200 "
          >
            <Typography
              variant="p"
              className="text-3xl font-medium text-color-100 tracking-wide"
            >
              Trending now
            </Typography>
            <Grid container columns={12} spacing={2} className="px-4">
              <Grid item xs={6}>
                <Paper
                  variant="contained"
                  className="bg-color-black overflow-hidden h-72 w-full grid place-content-center transition-all ease-in-out duration-500 box-border rounded-xl"
                ></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper
                  variant="contained"
                  className="bg-color-black  py-4 px-4 h-52 w-full  box-border rounded-lg"
                ></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper
                  variant="contained"
                  className="bg-color-black   py-4 px-4 h-52 w-full  box-border rounded-lg"
                ></Paper>
              </Grid>
            </Grid>
          </Paper> */}

          {[
            { title: "popular movies", data: popularMovieQuery },
            { title: "now playing", data: nowPlayingMovieQuery },
            { title: "top rated movies", data: topRatedMovieQuery },
            { title: "upcoming movies", data: upcomingMovieQuery },
          ].map((item, id) => (
            <TripleCardComponent
              key={id}
              title={item.title}
              movie={item.data}
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
          className="  box-border pt-8 px-4 w-full rounded-xl bg-inherit flex flex-col items-left justify-start h-auto space-y-0"
        >
          <Typography
            variant="p"
            className="text-color-300 font-medium text-sm tracking-wide"
          >
            Categories
          </Typography>
          <List>
            {movieGenre.isLoading
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
              : sliceGenre(movieGenre).map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="rounded-xl dark:hover:bg-[#191920] hover:bg-primary-400 hover:text-color-300 py-3 text-gray-700 font-semibold hover:font-medium tracking-wide">
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
