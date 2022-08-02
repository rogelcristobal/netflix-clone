import { Box, Typography, Link, Paper, Grid } from "@mui/material";
import TripleCardComponent from "../components/TripleCardComponent";
import useFetchNowPlayingMovie from "../fetch/movies/useFetchNowPlayingMovie";
import useFetchLatestMovie from "../fetch/movies/useFetchLatestMovie";
import useFetchPopularMovie from "../fetch/movies/useFetchPopularMovie";
import useFetchTopRatedMovie from "../fetch/movies/useFetchTopRatedMovie";
import useFetchUpcomingMovie from "../fetch/movies/useFetchUpcomingMovie";
const MovieCategories = () => {
  // queries
  const popularMovieQuery = useFetchPopularMovie();
  const nowPlayingMovieQuery = useFetchNowPlayingMovie();
  const topRatedMovieQuery = useFetchTopRatedMovie();
  const upcomingMovieQuery = useFetchUpcomingMovie();

  return (
    <>
      <Paper
        variant="contained"
        className=" bg-inherit  flex flex-col items-center justify-start py-4   mt-0 w-full rounded-2xl h-full box-border"
      >
        {/* scrollable content */}
        <div className="overflow-y-scroll overflow-x-hidden h-full w-full px-4 no-scrollbar  box-border ">
          <Paper
            variant="contained"
            className="h-60 bg-color-200 mb-2  w-full rounded-2xl"
          ></Paper>
          {[
            { title: "popular now", data: popularMovieQuery },
            { title: "now playing", data: nowPlayingMovieQuery },
            { title: "top rated movies", data: topRatedMovieQuery },
            { title: "upcoming movies", data: upcomingMovieQuery },
          ].map((item,id) => (
            <TripleCardComponent
              key={id}
              title={item.title}
              movie={item.data}
              isSpanTwo={id===0?true:false}
            ></TripleCardComponent>
          ))}
        </div>
      </Paper>

      {/*page nav*/}
      <Paper variant="contained" className="w-60    bg-inherit   h-80">
        <Paper
          variant="outlined px-2"
          className="h-full   w-full rounded-2xl bg-inherit "
        >
          <Typography variant="p" className="text-gray-700  font-semibold">Notifications</Typography>


        </Paper>
      </Paper>
    </>
  );
};

export default MovieCategories;
