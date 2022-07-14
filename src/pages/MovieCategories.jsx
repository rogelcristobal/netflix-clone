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
  console.log(latestMovie)
  return (
    <>
      <div className=" px-8    h-screen overflow-y-auto  no-scrollbar w-full ">
        <div className="h-auto mt-20  min-h-screen  flex flex-col items-start  justify-start   pb-8 bg-inherit px-8 py-4  mb-16   space-y-2 rounded-lg">
          {/* contents here */}

          {/* categories */}

          {[
            { title: "now playing", data: nowPlayingMovie },
            { title: "popular now", data: popularMovies },
            { title: "top rated movies", data: topRatedMovies },
            { title: "upcoming movies", data: upcomingMovies },
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
          variant="outlined"
          className="h-full   w-full rounded-lg bg-color-200 "
        ></Paper>
      </div>
    </>
  );
};

export default MovieCategories;
