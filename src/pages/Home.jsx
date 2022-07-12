import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import {
  Paper,
} from "@mui/material";

import TripleCardComponent from "../components/TripleCardComponent";

const Home = () => {
    const { nowPlayingMovie, upcomingMovies, popularMovies, topRatedMovies } =
    useContext(MovieContext);
  
  return (
    <>
      <div className=" px-12    h-screen overflow-y-auto  no-scrollbar w-full ">
        <div className="h-auto mt-24  min-h-screen  flex flex-col items-start  justify-start   pb-8  px-2 py-4  mb-16 w-full  space-y-0 rounded-lg">
          {/* contents here */}

          {/* category 1 */}
          <TripleCardComponent
            title="Upcoming"
            movies={upcomingMovies}
          ></TripleCardComponent>

          {/* category 2 */}
          <TripleCardComponent
            title="popular now"
            movies={popularMovies}
          ></TripleCardComponent>

          {/* category 3 */}
          <TripleCardComponent
            title="latest movies"
            movies={nowPlayingMovie}
          ></TripleCardComponent>

          {/* category 4 */}
          <TripleCardComponent
            title="top rated"
            movies={topRatedMovies}
          ></TripleCardComponent>
        </div>
      </div>

      {/*page nav*/}
      <div className="w-72 mt-24 ml-0 mr-8  rounded-lg h-96">
        {/* page nav contents here */}
        <Paper
          variant="contained"
          className="h-full   w-full  bg-color-200"
        ></Paper>
      </div>
    </>
  );
};

export default Home;
