
import {
  Typography,
  Link,
  Paper,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  List,
  Skeleton,
  
} from "@mui/material";
import {HiOutlineChevronDown} from "react-icons/hi"
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
  const popularArtist = useFetchPopularArtist();
  const sliceArtists = (endpoint, state) => {
    // console.log(movieGenre.data)
    if (movieGenre.isLoading) {
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
        <div className="overflow-y-scroll overflow-x-hidden h-full w-full px-4  no-scrollbar  box-border space-y-3">
          <Paper
            variant="outlined"
            className="h-40  mb-4 mt-24 box-border w-full rounded-2xl p-6 text-neutral-700"
          >
            <Typography variant="p" className="text-lg font-semibold">Follow Artist</Typography>
          </Paper>

          <Paper
            variant="contained"
            className="h-52 bg-color-200    w-full rounded-2xl "
          ></Paper>

          {[
            { title: "trending", data: popularMovieQuery },
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
          variant="outlined"
          className=" p-4 box-border  w-full rounded-2xl bg-inherit h-auto space-y-2"
        >
          <Typography
            variant="p"
            className="text-neutral-700 font-semibold text-lg tracking-wide"
          >
            Genres
          </Typography>
          <List>
            {popularArtist.isLoading
              ? Array.from(new Array(4)).map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="rounded-xl">
                      <Skeleton className="h-12 w-8  rounded-full"></Skeleton>
                      <Skeleton></Skeleton>
                    </ListItemButton>
                  </ListItem>
                ))
              : sliceArtists(movieGenre).map((item, index) => (
                  <ListItem key={index} disablePadding >
                    <ListItemButton className="rounded-lg py-1.5">
                      
                      <Typography
                        variant="p"
                        className="text-sm  w-20 text-neutral-400"
                      >
                        {item.name}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
          </List>
          <Link className="flex items-center justify-start text-sm font-medium font-outfit text-neutral-400 w-full py-1 rounded-xl" underline="none" component="button">
            See More
            {/* <HiOutlineChevronDown className="text-lg  ml-4 font-bold"></HiOutlineChevronDown> */}
          </Link>
        </Paper>
        {/* <Paper
          variant="outlined"
          className=" p-4 box-border  w-full rounded-2xl bg-inherit h-full space-y-2"
        >
          
        </Paper> */}
      </Paper>
    </>
  );
};

export default MovieCategories;
