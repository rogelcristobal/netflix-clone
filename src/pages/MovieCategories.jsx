import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { Paper, TextField, Typography, Button } from "@mui/material";

import TripleCardComponent from "../components/TripleCardComponent";

const MovieCategories = () => {
  const { nowPlayingMovie, upcomingMovies, popularMovies, topRatedMovies } =
    useContext(MovieContext);
  const randomMovie = () => {
    const movie =
      popularMovies?.results[
        Math.floor(Math.random() * popularMovies?.results.length)
      ]?.title;
    return movie;
  };
  return (
    <>
      <div className=" px-8 box-border   h-screen overflow-y-auto   w-full no-scrollbar mx-4">
        <Paper
          variant="contained"
          className="box-border px-20 py-8 my-16 h-fit  w-full   flex-col flex items-center justify-center"
        >
          <Typography variant="h3" color="initial">
            Welcome!
          </Typography>
          <Typography variant="h6" className="capitalize">
            watch your favorite movie on the go.
          </Typography>

            <input
              placeholder={`${
                popularMovies
                  ? `try searching.... ${randomMovie()}`
                  : "search movies"
              }`}
              type="text"
              className="focus:outline-none px-4  text-base font-outfit mt-20 rounded-lg py-3 h-6 border-0  bg-color-200 placeholder:capitalize placeholder:text-color-400 w-full "
            />

        </Paper>

        <div className="h-auto mt-20  min-h-screen  flex flex-col items-start  justify-start    bg-inherit px-6 py-10  mb-16   space-y-2 rounded-lg bg-color-200">
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
          variant="contained"
          className="h-full   w-full rounded-lg bg-color-200 "
        ></Paper>
      </div>
    </>
  );
};

export default MovieCategories;
