
import {
  Box,
  Typography,
  Link,
  Paper,
  Grid,
  Chip,
  Stack,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  List,
  Skeleton,
} from "@mui/material";
import TripleCardComponent from "../components/TripleCardComponent";

import useFetchNowPlayingMovie from "../fetch/movies/useFetchNowPlayingMovie";
import useFetchLatestMovie from "../fetch/movies/useFetchLatestMovie";
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
  // const movieGenre = useFetchMovieGenres();
  const popularArtist = useFetchPopularArtist();
  const sliceArtists = (endpoint, state) => {
    if (popularArtist.isLoading) {
      if (!state) {
        return Array.from(new Array(4));
      } else {
        return Array.from(new Array(5));
      }
    } else {
      if (!state) {
        return endpoint.data?.results.slice(0, 4);
      } else {
        return endpoint.data?.results.slice(0, 5);
      }
    }
  };
  console.log(sliceArtists(popularArtist, true));
  return (
    <>

      <Paper
        variant="outlined"
        className=" bg-inherit  flex flex-col items-center justify-start   mt-0 w-full  h-full box-border mx-2"
      square>
        {/* scrollable content */}
        <div className="overflow-y-scroll overflow-x-hidden h-full w-full px-4 no-scrollbar   box-border space-y-6">
          <Paper
            variant="outlined"
            className="h-96 bg-inherit mb-4   w-full rounded-2xl rounded-t-none"
          ></Paper>
          {[
            { title: "popular now", data: popularMovieQuery },
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
        className="w-60 mt-20  box-border pr-3 bg-inherit  h-auto "
      >
        <Paper
          variant="outlined"
          className=" p-4 box-border  w-full rounded-2xl bg-inherit h-auto space-y-2"
        >
          <Typography
            variant="p"
            className="text-neutral-700 font-semibold tracking-wide"
          >
            Popular Artists
          </Typography>
          <List>
            {popularArtist.isLoading
              ? Array.from(new Array(4)).map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="rounded-xl">
                      <Skeleton className="h-12 w-8  rounded-full">
                     
                      </Skeleton>
                      <Skeleton>
                      
                      </Skeleton>
                    </ListItemButton>
                  </ListItem>
                ))
              : sliceArtists(popularArtist).map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="rounded-xl">
                      <ListItemAvatar>
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </ListItemAvatar>
                      <Typography
                        variant="p"
                        className="text-xs  ml-2 font-medium text-neutral-700"
                      >
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
