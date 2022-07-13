import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { Paper } from "@mui/material";

import TripleCardComponent from "../components/TripleCardComponent";

const MovieCategories = () => {
  const { nowPlayingMovie, upcomingMovies, popularMovies, topRatedMovies } =
    useContext(MovieContext);

  return (
    <>
      <div className=" px-12    h-screen overflow-y-auto  no-scrollbar w-full ">
        <div className="h-auto mt-24  min-h-screen  flex flex-col items-start  justify-start   pb-8  px-2 py-4  mb-16 w-full  space-y-0 rounded-lg">
          {/* contents here */}

          {[
            { title: "upcoming movies", data: upcomingMovies },
            { title: "popular now", data: popularMovies },
            { title: "now playing", data: nowPlayingMovie },
            { title: "top rated movies", data: topRatedMovies },
          ].map((item, id) => (
            <TripleCardComponent
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
