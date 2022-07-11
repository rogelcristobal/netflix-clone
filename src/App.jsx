import { useContext } from "react";
import MovieContext from "./context/MovieContext";
import { Paper, Typography, Box, Link } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import TripleCardComponent from "./components/TripleCardComponent";

function App() {
  const { upcomingMovies, upcomingLoading, popularMovies, popularLoading ,topRatedMovies} =
    useContext(MovieContext);
  const theme = createTheme({
    typography: {
      fontFamily: ["outfit", "Supreme", "Clash Display", "sans-serif"].join(
        ","
      ),
    },
  });
  // styles
  return (
    <ThemeProvider theme={theme}>
      <div className="font-outfit relative flex w-full   h-screen bg-color-100 ">

        {/* nav */}
        <div className="fixed top-0 left-0 w-full h-16 z-20 bg-color-100 ">
          <div className="container h-full flex  px-4 justify-end mx-auto  rounded-lg">
            {/* nav contents here */}
            <Paper
              variant="outlined"
              className="h-full w-full bg-inherit"
            ></Paper>
          </div>
        </div>

        {/* sidebar */}
        <div className=" w-96  rounded-lg h-full z-10 bg-color-100 ">
          {/* sidebar contents here */}
          <Paper
            variant="outlined"
            className="h-full w-full bg-inherit"
            square
          ></Paper>
        </div>

        {/* body */}
        <div className=" px-8    h-screen overflow-y-auto  no-scrollbar w-full ">
          <div className="h-auto mt-24  min-h-screen  flex flex-col items-start  justify-start   pb-8  px-2 py-4  mb-16 w-full  space-y-4 rounded-lg">

            {/* contents here */}

              {/* category 1 */}
              <TripleCardComponent
                title="Upcoming"
                upcomingLoading={upcomingLoading}
                upcomingMovies={upcomingMovies}
              ></TripleCardComponent>

              {/* category 2 */}
              <TripleCardComponent
                title="popular now"
                upcomingLoading={popularLoading}
                upcomingMovies={popularMovies}
              ></TripleCardComponent>

               {/* category 3 */}
               <TripleCardComponent
                title="top rated"
                upcomingLoading={popularLoading}
                upcomingMovies={topRatedMovies}
              ></TripleCardComponent>
              
          </div>
        </div>

        {/*page nav*/}
        <div className="w-72 mt-24 ml-0 mr-8  rounded-lg h-96">
          {/* page nav contents here */}
          <Paper
            variant="outlined"
            className="h-full bg-color-100  w-full "
          ></Paper>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
// https://dribbble.com/shots/6839523-Music-App
