import { Box, Typography, Link, Paper, Grid } from "@mui/material";
import TripleCardComponent from "../components/TripleCardComponent";
import useFetchNowPlayingMovie from "../fetch/movies/useFetchNowPlayingMovie";
import useFetchLatestMovie from "../fetch/movies/useFetchLatestMovie";
import useFetchPopularMovie from "../fetch/movies/useFetchPopularMovie";
import useFetchTopRatedMovie from "../fetch/movies/useFetchTopRatedMovie";
import useFetchUpcomingMovie from "../fetch/movies/useFetchUpcomingMovie";
const MovieCategories = () => {
  // queries
  const popularMovieQuery = useFetchPopularMovie()

  return (
    <>
      <Paper variant="contained" className=" px-4 pt-0 box-border flex flex-col items-center justify-start    overflow-y-scroll space-y-3 mt-0 w-full rounded-2xl">
        <Paper variant="outlined" className="h-96  w-full rounded-2xl">

        </Paper>
        
        <TripleCardComponent title={"popular now"} movie={popularMovieQuery}></TripleCardComponent>
        
      </Paper>

      {/*page nav*/}
      <Paper variant="contained" className="w-60   mx-4   h-80">
				<Paper
					variant="outlined"
					className="h-full   w-full rounded-2xl bg-inherit "
				></Paper>
			</Paper>
    </>
  );
};

export default MovieCategories;
