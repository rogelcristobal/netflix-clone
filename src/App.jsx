import { Routes, Route, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiSettings } from "react-icons/fi";
import {HiMenuAlt4} from "react-icons/hi"
// pages
import MovieCategories from "./pages/MovieCategories";
import TVCategories from "./pages/TVCategories";
import SearchResults from "./pages/SearchResults";
// MUI
import {
  Paper,
  Typography,
  ListItem,
  Divider,
  ListItemButton,
  List,
  IconButton,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// react-query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

function App() {
  const nav = useNavigate();
  const theme = createTheme({
    typography: {
      fontFamily: ["outfit", "Supreme", "Clash Display", "sans-serif"].join(
        ","
      ),
      palette: {
        primary: {
          main: "rgb(17, 24, 39)",
        },
      },
    },
  });
  // styles
  // [#1b2635]
  // [#212b36]

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="h-96 w-96 bg-blue-300 grid place-content-center">
                put log in here
                <button onClick={() => nav("/homepage")}>go home</button>
              </div>
            }
          ></Route>
          <Route
            path="/homepage/*"
            element={
              <div className="font-outfit relative flex w-full   h-screen bg-color-100 dark:bg-[#1b2635]   ">
                {/* nav */}
                <div className="fixed top-0 left-0 w-full h-20 z-20 ">
                  <div className="container h-full flex  justify-end mx-auto items-center rounded-lg ">
                    {/* nav contents here */}
                    <Paper
                      variant="outlined"
                      className={`h-full w-full  bg-inherit flex items-center justify-between  transition-all ease-in-out duration-500`}
                    >
                      {/* ham */}
                    

                      <div className="flex items-center justify-between w-full space-x-4">
                     
                    
                      </div>
                    </Paper>
                  </div>
                </div>

                {/* sidebar */}
                <div
                  className={` w-80 z-10  h-full  overflow-x-hidden transition-all ease-in-out duration-500`}
                >
                  {/* sidebar contents here */}
                  <Paper
                    variant="outlined"
                    className=" w-full px-4  h-full pt-20 box-border bg-color-100 dark:bg-[#19212b]  flex flex-col items-center justify-start "
                    square
                  >
                   
                  </Paper>
                </div>
                {/* body */}

                <div className="flex items-start justify-start w-full pt-16 box-border">
                  <Routes>
                    <Route path="/" element={<MovieCategories />}></Route>
                    <Route path="/result" element={<SearchResults />}></Route>
                    <Route path="/tvShows" element={<TVCategories />}></Route>
                    <Route
                      path="/forRent"
                      element={<MovieCategories />}
                    ></Route>
                  </Routes>
                </div>
              </div>
            }
          ></Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
// https://dribbble.com/shots/6839523-Music-App
// https://berrydashboard.io/free/
// https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/dark/#/dashboards/dashboard1

// netflix

// https://dribbble.com/shots/14655584-White-and-clean-TV-app