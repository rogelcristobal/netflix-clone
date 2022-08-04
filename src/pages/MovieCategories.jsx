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
        className=" bg-inherit  flex flex-col items-center justify-start    pt-0 w-full  h-full box-border mx-2"
        square
      >
        {/* scrollable content */}
        <div className="overflow-y-scroll overflow-x-hidden h-full w-full px-4 py-2 no-scrollbar  box-border space-y-3">
          {/* <Paper
            variant="contained"
            className="bg-color-200  py-4 px-4 h-80 mt-20 w-full  box-border rounded-2xl"
          ></Paper> */}
            <Paper
              variant="contained"
              className="h-fit bg-inherit  mt-20 box-border w-full rounded-2xl space-y-2 py-4 px-6 text-white "
            >
              <Typography variant="p" className="text-2xl font-semibold">
                Discover Movies
              </Typography>
              <Grid container columns={7} spacing={2}>
                <Grid item xs={4}>
                  <Paper
                    variant="contained"
                    className="bg-[#22232e]  py-4 px-4 h-72 w-full  box-border rounded-2xl"
                  ></Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper
                    variant="contained"
                    className="bg-[#22232e]  py-4 px-4 h-72 w-full  box-border rounded-2xl"
                  ></Paper>
                </Grid>
              </Grid>
            </Paper>

          {[
            { title: "popular", data: popularMovieQuery },
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
        className="w-60 mt-20 py-2 box-border mr-3 bg-inherit   h-auto "
      >
        <Paper
          variant="contained"
          className=" p-4 box-border  w-full rounded-2xl bg-inherit h-auto space-y-2"
        >
          <Typography
            variant="p"
            className="text-black font-semibold text-md tracking-wide"
          >
            Genres
          </Typography>
          <List>
            {movieGenre.isLoading
              ? Array.from(new Array(4)).map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="rounded-xl">
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
                    <ListItemButton className="rounded-lg py-1.5">
                      <Typography
                        variant="p"
                        className="text-sm  w-20 text-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
          </List>
          <Link
            className="flex items-center justify-start text-sm  font-outfit text-gray-700 w-full py-1 rounded-xl"
            underline="none"
            component="button"
          >
            See More
            {/* <HiOutlineChevronDown className="text-lg  ml-4 font-bold"></HiOutlineChevronDown> */}
          </Link>
        </Paper>
        {/* <Paper
          variant="contained"
          className=" p-4 box-border  w-full rounded-2xl bg-inherit h-full space-y-2"
        >
          
        </Paper> */}
      </Paper>
    </>
  );
};

export default MovieCategories;
