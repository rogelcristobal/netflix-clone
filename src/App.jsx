import { Routes, Route, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiSettings, FiMenu } from "react-icons/fi";
import SearchContext from "./context/SearchContext";
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
import axios from "axios";
import useSearchAny from "./fetch/search/useSearchAny";
function App() {
  const nav = useNavigate();
  const [menuStatus,setMenuStatus]= useState(true)
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
            <div className="font-outfit relative flex w-full   h-screen bg-[#161c24] dark:bg-[#1b2635] ">
              {/* nav */}
              <div className="fixed top-0 left-0 w-full h-16 z-10  ">
                <div className="container h-full flex pt-4 px-4 justify-end mx-auto items-center rounded-lg ">
                  {/* nav contents here */}
                  <Paper
                    variant="contained"
                    className={`h-full ${!menuStatus?'w-full':'w-[calc(100%-17rem)]'} bg-inherit flex items-center justify-between px-4 transition-all ease-in-out duration-500`}
                  >
                    {/* ham */}
                    <IconButton
                      onClick={()=>setMenuStatus(!menuStatus)}
                      aria-label="log-in"
                      size="small"
                      className={`text-color-100 rounded-lg  ${!menuStatus?'bg-primary-400 hover:bg-primary-300':'bg-inherit hover:bg-primary-400/25'} space-x-4 p-2   hover:text-color-100 transition duration-500 ease-in-out`}
                    >
                      <FiMenu></FiMenu>
                    </IconButton>


                    <div className="flex items-center justify-between space-x-4">
                      <IconButton
                        aria-label="log-in"
                        size="small"
                        className="text-color-100 rounded-lg   space-x-4 p-2  hover:bg-primary-400 hover:text-color-100 transition duration-500 ease-in-out"
                      >
                        <FiSettings></FiSettings>
                      </IconButton>
                      <IconButton
                        aria-label="log-in"
                        size="small"
                        className="text-color-100 rounded-lg    p-2  hover:bg-primary-400 hover:text-color-100 transition-all duration-500 ease-in-out"
                      >
                        <FiUser></FiUser>
                      </IconButton>
                    </div>
                  </Paper>
                </div>

              </div>

              {/* sidebar */}
              <div className={` ${!menuStatus?'w-2':'w-80'} z-10  h-full  overflow-x-hidden transition-all ease-in-out duration-500`}>
                {/* sidebar contents here */}
                <Paper
                  variant="contained"
                  className=" w-full   h-full pt-20 box-border bg-[#19212b] dark:bg-[#233044] flex flex-col items-center justify-start "
                  square
                >
                  <Paper
                    variant="contained"
                    sx={{ overflow: "auto", boxSizing: "border-box" }}
                    className="  h-fit py-2 w-56 rounded-lg  bg-inherit"
                  >
                    <List>
                      {[
                        {
                          path: "/",
                          title: "movies",
                        },
                        {
                          path: "/tvShows",
                          title: "tv shows",
                        },
                      ].map((item, id) => (
                        <NavLink
                          to={`/homepage${item.path}`}
                          key={id}
                          className="no-underline "
                        >
                          {({ isActive }) => (
                            <>
                              <ListItem disablePadding>
                                <ListItemButton
                                  className={` rounded-lg  px-6  py-3 my-1 ${
                                    isActive
                                      ? " bg-primary-400/10"
                                      : "bg-inherit"
                                  }`}
                                >
                                  <Typography
                                    variant="p"
                                    className={`capitalize  font-[400] tracking-wide  text-sm ml-4 ${
                                      isActive
                                        ? "text-color-100"
                                        : "text-color-500"
                                    }	`}
                                  >
                                    {item.title}
                                  </Typography>
                                </ListItemButton>
                              </ListItem>
                            </>
                          )}
                        </NavLink>
                      ))}
                    </List>
                  </Paper>
                </Paper>
              </div>
              {/* body */}

              <div className="flex items-start justify-start w-full pt-20 box-border">
                <Routes>
                  <Route path="/" element={<MovieCategories />}></Route>
                  <Route path="/result" element={<SearchResults />}></Route>
                  <Route path="/tvShows" element={<TVCategories />}></Route>
                  <Route path="/forRent" element={<MovieCategories />}></Route>
                </Routes>
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
// https://dribbble.com/shots/6839523-Music-App
// https://berrydashboard.io/free/
