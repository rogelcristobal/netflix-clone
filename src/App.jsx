import { useState, useContext } from "react";
import MovieContext from "./context/MovieContext";
import CardComponent from "./components/CardComponent";
import Grid from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const { upcomingMovies, genre } = useContext(MovieContext);
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
        <div className="fixed top-0 left-0 w-full h-16 z-20 bg-color-100 shadow-sm">
          <div className="container h-full flex  px-4 justify-end mx-auto  rounded-lg">
            {/* nav contents here */}
            <Paper
              variant="contained"
              className="h-full w-full bg-inherit"
              
            ></Paper>
          </div>
        </div>

        {/* sidebar */}
        <div className=" w-96  rounded-lg h-full z-50 ">
          {/* sidebar contents here */}
          <Paper
            variant="contained"
            className="h-full w-full bg-inherit"
            square
          ></Paper>
        </div>

        {/* body */}
        <div className=" px-10  h-screen overflow-y-auto  no-scrollbar w-full ">
          <div className="h-auto mt-24 p-4   mb-16 w-full   rounded-lg">
            {/* contents here */}
            <Paper
              variant="contained"
              className="h-screen flex flex-col items-start space-y-4 justify-start   pb-8 "
              component="div"
              
            >
              <Typography
                variant="h6"
                className="font-semibold text-3xl text-color-black pb-4"
              >
                Upcoming
              </Typography>

              <Paper
                component="div"
                variant="outlined"
                className=" h-full w-full bg-inherit"
              >

                {/* <Grid container spacing={2} rowSpacing={6} columns={4}>
                  {upcomingMovies?.results.map((item, id) => (
                    <Grid item xs={1} key={id}>
                      <CardComponent data={item} key={id} />
                    </Grid>
                  ))}
                </Grid> */}
              </Paper>
            </Paper>
          </div>
        </div>

        {/*page nav*/}
        <div className="w-72 mt-24 ml-0 mr-8  rounded-lg h-96">
          {/* page nav contents here */}
          <Paper
            variant="contained"
            className="h-full w-full bg-inherit"
            
          ></Paper>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
// https://dribbble.com/shots/6839523-Music-App
