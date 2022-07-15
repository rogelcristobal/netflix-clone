import React from 'react';
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

const TVCategories = () => {
    const {
        nowPlayingMovie,
        upcomingMovies,
        popularMovies,
        topRatedMovies,
        latestMovie,
      } = useContext(MovieContext);
    
  return (
    <>
    <div className=" px-8    h-screen overflow-y-auto  no-scrollbar w-full ">
      <div className="h-auto mt-20  min-h-screen  flex flex-col items-start  justify-start    px-10 py-10  mb-16   space-y-2 rounded-lg bg-color-200">
        {/* contents here */}
        {/* categories */}

        {[
          { title: " airing today", data: nowPlayingMovie },
          { title: " on the air", data: popularMovies },
          { title: "popular shows", data: topRatedMovies },
          { title: "top rated shows", data: upcomingMovies },
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
    <div className="w-80 mt-20 ml-0 mr-8   h-80">
      {/* page nav contents here */}
      <Paper
        variant="contained"
        className="h-full   w-full rounded-lg bg-color-200 "
      ></Paper>
    </div>
  </>
  );
}

export default TVCategories;
