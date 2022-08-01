import { Routes, Route, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiSettings, FiMenu } from "react-icons/fi";
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
  const [menuStatus, setMenuStatus] = useState(true);
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
              <div className="font-outfit relative flex w-full   h-screen bg-color-100 dark:bg-[#161c24]  ">
                {/* nav */}
                <div className="fixed top-0 left-0 w-full h-16 z-10  ">
                  <div className="container h-full flex  justify-end mx-auto items-center rounded-lg ">
                    {/* nav contents here */}
                    <Paper
                      variant="contained"
                      className={`h-full ${
                        !menuStatus ? "w-full" : "w-[calc(100%-15rem)]"
                      } bg-inherit flex items-center justify-between  transition-all ease-in-out duration-500`}
                    >
                      {/* ham */}
                      <IconButton
                        onClick={() => setMenuStatus(!menuStatus)}
                        aria-label="log-in"
                        size="medium"
                        className={`text-color-300 rounded-full  ${
                          !menuStatus
                            ? " hover:bg-primary-400/10 "
                            : "bg-inherit hover:bg-primary-400/10"
                        } space-x-4 p-2.5   transition duration-500 ease-in-out`}
                      >
                        <FiMenu></FiMenu>
                      </IconButton>

                      <div className="flex items-center justify-between space-x-4">
                        <IconButton
                          aria-label="log-in"
                          size="small"
                          className="text--100 rounded-lg bg-primary-100   space-x-4 p-2  hover:bg-primary-400 hover:text-color-100 transition duration-500 ease-in-out"
                        >
                          <FiSettings></FiSettings>
                        </IconButton>
                        <IconButton
                          aria-label="log-in"
                          size="small"
                          className="text--100 rounded-lg bg-primary-100    p-2  hover:bg-primary-400 hover:text-color-100 transition-all duration-500 ease-in-out"
                        >
                          <FiUser></FiUser>
                        </IconButton>
                      </div>
                    </Paper>
                  </div>
                </div>

                {/* sidebar */}
                <div
                  className={` ${
                    !menuStatus ? "w-2" : "w-80"
                  } z-10  h-full  overflow-x-hidden transition-all ease-in-out duration-500`}
                >
                  {/* sidebar contents here */}
                  <Paper
                    variant="contained"
                    className=" w-full   h-full pt-20 box-border bg-color-100 dark:bg-[#19212b]  flex flex-col items-center justify-start "
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
