import { Box, Typography, Link, Paper, Grid } from "@mui/material";
import {BsPlayCircleFill} from 'react-icons/bs'
import {RiNumbersFill} from 'react-icons/ri'
import {AiFillStar} from 'react-icons/ai'
import useFetchNowPlayingMovie from "../fetch/movies/useFetchNowPlayingMovie";
import useFetchLatestMovie from "../fetch/movies/useFetchLatestMovie";
import useFetchPopularMovie from "../fetch/movies/useFetchPopularMovie";
import useFetchTopRatedMovie from "../fetch/movies/useFetchTopRatedMovie";
import useFetchUpcomingMovie from "../fetch/movies/useFetchUpcomingMovie";
import Category from "../components/Category";
const MovieCategories = () => {
  // queries
  const latestMovieQuery = useFetchLatestMovie();
  console.log(latestMovieQuery.data)
  return (
    <>
      <div className="  box-border flex flex-col items-center justify-start  h-full overflow-y-auto space-y-5  w-full ">
        <div className="h-auto  min-h-full bg-color-200   box-border flex flex-col items-start  justify-start      w-full   no-scrollbar rounded-lg">
          <div className="h-full w-full">
            
          </div>
        </div>
      </div>

    </>
  );
};

export default MovieCategories;
