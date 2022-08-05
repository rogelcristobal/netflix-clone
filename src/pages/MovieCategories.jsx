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
import {BsArrowRight} from 'react-icons/bs'
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
  const popularArtist = useFetchPopularArtist()
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
  console.log(popularArtist.data?.results)

  return (
    <>
      <Paper
        variant="contained"
        className=" bg-inherit  flex flex-col items-center justify-start    pt-0 w-full  h-full box-border mx-2"
        square
      >
        {/* scrollable content */}
        <div className="overflow-y-scroll overflow-x-hidden h-full w-full px-4 py-2   box-border space-y-7  ">
          {/* <Paper
            variant="contained"
            className="bg-color-200  py-4 px-4 h-80 mt-20 w-full  box-border rounded-lg"
          ></Paper> */}
            <Paper
              variant="contained"
              className="h-fit bg-inherit  mt-24 box-border w-full rounded-xl space-y-3 py-4 px-6 text-gray-200 "
            >
              <Typography variant="p" className="text-3xl font-medium tracking-wide">
                Discover New Artists
              </Typography>
              {/* scroll through these */}
              <Grid container columns={10} spacing={2} className="px-4">
                <Grid item xs={4} >
                  <Paper
                    variant="contained"
                    className="bg-[#191920] overflow-hidden h-72 w-full grid place-content-center transition-all ease-in-out duration-500 box-border rounded-xl"
                  >
                    {/* {
                      !popularArtist.isLoading &&
                      <div className="p-3 bg-color-400/20  rounded-full">

                      <Avatar className="h-24 w-24 ">

                       <img src={`https://image.tmdb.org/t/p/w500${popularArtist.data.results[1].profile_path}`} className="h-full rounded-full w-full object-cover " alt=""/>
                      </Avatar>
                      </div>
                    } */}

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper
                    variant="contained"
                    className="bg-[#191920]  py-4 px-4 h-52 w-full  box-border rounded-lg"
                  ></Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper
                    variant="contained"
                    className="bg-[#191920]  py-4 px-4 h-52 w-full  box-border rounded-lg"
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
        className="w-72 mt-0 pt-20 py-2 box-border mr-3 bg-inherit   h-full "
      >
        <Paper
          variant="contained"
          className=" p-6 box-border  w-full rounded-xl bg-inherit h-auto space-y-2"
        >
          <Typography
            variant="p"
            className="text-gray-600 font-medium text-md tracking-wide"
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
                    <ListItemButton className="rounded-xl hover:bg-[#191920] py-3">
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
          className=" p-4 box-border  w-full rounded-xl bg-inherit h-full space-y-2"
        >
          
        </Paper> */}
      </Paper>
    </>
  );
};

export default MovieCategories;
