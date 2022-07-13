import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import {
  Paper,
  Box,
  Typography,
  CardContent,
  Skeleton,
  CardMedia,
} from "@mui/material";

import TripleCardComponent from "../components/TripleCardComponent";

const MovieCategories = () => {
  const {
    nowPlayingMovie,
    upcomingMovies,
    popularMovies,
    topRatedMovies,
    latestMovie,
  } = useContext(MovieContext);
  console.log(nowPlayingMovie);
  return (
    <>
      <div className=" px-12    h-screen overflow-y-auto  no-scrollbar w-full ">
        <div className="h-auto mt-20  min-h-screen  flex flex-col items-start  justify-start   pb-8  px-2 py-4  mb-16 w-full  space-y-0 rounded-lg">
          {/* contents here */}

          <div className="flex flex-col items-center justify-center w-full mb-6 py-2 ">
            {/* title and CTA */}
            <Box className="flex items-center justify-between w-full   mb-4 ">
              <Typography
                variant="h6"
                className="font-semibold capitalize text-2xl text-color-black "
              >
                what's new
              </Typography>
            </Box>

            {/* used paper as a container */}
            <Paper
              component="div"
              variant="contained"
              className=" h-fit w-full bg-color-200 cursor-pointer flex items-center justify-start rounded-lg overflow-hidden"
            >
              {!nowPlayingMovie ? (
                <CardMedia
                  component="img"
                  className="h-60 w-96 object-cover object-center rounded-l-lg"
                  title=""
                  image={`https://image.tmdb.org/t/p/w780/${nowPlayingMovie?.results[14].poster_path}`}
                />
              ) : (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  className="h-60 bg-color-300 rounded-l-lg w-full shadow-lg"
                ></Skeleton>
              )}
              
            </Paper>
          </div>

          {[
            { title: "upcoming movies", data: upcomingMovies },
            { title: "popular now", data: popularMovies },
            { title: "now playing", data: nowPlayingMovie },
            { title: "top rated movies", data: topRatedMovies },
          ].map((item, id) => (
            <TripleCardComponent
              key={id}
              title={item.title}
              movies={item.data}
            ></TripleCardComponent>
          ))}
        </div>
      </div>

      {/*page nav*/}
      <div className="w-72 mt-24 ml-0 mr-8   h-96">
        {/* page nav contents here */}
        <Paper
          variant="contained"
          className="h-full   w-full rounded-lg bg-color-200"
        ></Paper>
      </div>
    </>
  );
};

export default MovieCategories;
