import { Routes, Route, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TelevisionSimple,FilmStrip,Users} from "phosphor-react";
import PaidIcon from "@mui/icons-material/Paid";
// pages
import MovieCategories from "./pages/MovieCategories";
import TVCategories from "./pages/TVCategories";
// MUI
import {
  Paper,
  Typography,
  ListItem,
  Button,
  ListItemButton,
  List,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
<<<<<<< HEAD
            <div className="h-96 w-96 bg-gradient-to-r from-cyan-500 to-blue-500 grid place-content-center">
=======
            <div className="h-96 w-96 bg-blue-300 grid place-content-center">
>>>>>>> parent of 37a0be9 (added header)
              put log in here
              <button onClick={() => nav("/homepage")}>go home</button>
            </div>
          }
        ></Route>
        <Route
          path="/homepage/*"
          element={
<<<<<<< HEAD
            <div className="font-outfit relative flex w-full  bg-color-100  h-screen box-border ">
              {/* nav */}
              <div className="fixed top-0 left-0 w-full h-14 z-10   ">
                <div className="container h-full flex  px-4 justify-end mx-auto   ">
=======
            <div className="font-outfit relative flex w-full    h-screen box-border ">
              {/* nav */}
              <div className="fixed top-0 left-0 w-full h-14 z-10  bg-inherit ">
                <div className="container h-full flex  px-4 justify-end mx-auto  rounded-lg ">
>>>>>>> parent of 37a0be9 (added header)
                  {/* nav contents here */}
                  <Paper
                    variant="contained"
                    className="h-full w-full bg-inherit flex items-center justify-end px-2"
                  >
                    <Button
                      variant="text"
<<<<<<< HEAD
                      className="bg-color-primary  px-5 py-1.5"
=======
                      className="bg-color-primary rounded-lg px-5 py-1.5"
>>>>>>> parent of 37a0be9 (added header)
                    >
                      <Typography
                        variant="p"
                        className="text-color-100 text-xs tracking-wide capitalize"
                      >
                        sign in
                      </Typography>
                    </Button>
                  </Paper>
                </div>
                {/* <Divider variant="middle"></Divider> */}
              </div>

              {/* sidebar */}
<<<<<<< HEAD
              <div className=" w-96 z-10  h-full ">
                {/* sidebar contents here */}
                <Paper
                  variant="contained"
                  className=" w-full   h-full pt-20 box-border  bg-inherit"
=======
              <div className=" w-96 z-10 rounded-lg h-full ">
                {/* sidebar contents here */}
                <Paper
                  variant="contained"
                  className=" w-full  px-6 h-full pt-20 box-border  bg-inherit"
>>>>>>> parent of 37a0be9 (added header)
                  square
                >
                  <Paper
                    variant="contained"
                    sx={{ overflow: "auto", boxSizing: "border-box" }}
<<<<<<< HEAD
                    className="  h-fit py-2 px-4   bg-inherit"
                  >
                    <List>
                      {[
                        {
                          path: "/",
                          title: "movies",
                          icon: function (state) {
                            return (
                              <FilmStrip
                                size={15}
                                weight="bold"
                                color={`${state ? "white" : "black"}`}
                              />
                            );
                          },
                        },
                        {
                          path: "/tvShows",
                          title: "TV shows",
                          icon: function (state) {
                            return (
                              <TelevisionSimple
                                size={15}
                                weight="bold"
                                color={`${state ? "white" : "black"}`}
                              />
                            );
                          },
                        },
                        {
                          path: "/people",
                          title: "people",
                          icon: function (state) {
                            return (
                              <Users
                                size={15}
                                weight="bold"
                                className={`${
                                  state ? "text-color-100" : "text-color-black"
                                } text-base `}
                              />
                            );
                          },
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
                                  className={` rounded-lg  px-8  py-3  ${
                                    isActive
                                      ? "bg-color-primary "
                                      : "hover:bg-color-200"
                                  }`}
                                >
                                  {item?.icon(isActive)}
                                  <Typography
                                    variant="p"
                                    className={`capitalize  font-[400] text-sm  ml-8 ${
                                      isActive
                                        ? "text-color-100"
                                        : "text-color-black"
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

=======
                    className="  h-fit py-2  rounded-lg  bg-inherit"
                  >
                    <List>

                      {[
                        {
                          path: "/",
                          title: "movies",
                          icon: function (state) {
                            return (
                              <FilmStrip size={13} weight="bold" color={`${state ?'white':'rgb(101, 119, 134)'}`} />
                            );
                          },
                        },
                        {
                          path: "/tvShows",
                          title: "TV shows",
                          icon: function (state) {
                            return (
                             <TelevisionSimple size={13} weight="bold" color={`${state ?'white':'rgb(101, 119, 134)'}`} />

                            );
                          },
                        },
                        {
                          path: "/people",
                          title: "people",
                          icon: function (state) {
                            return (
                              <Users
                                size={13} weight="bold"
                                className={`${
                                  state ? "text-color-100" : "text-color-500"
                                } text-base `}
                              />
                            );
                          },
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
                                  className={` rounded-lg  px-6  py-2 my-1 ${
                                    isActive
                                      ? "bg-color-primary "
                                      : "hover:bg-color-200"
                                  }`}
                                >
                                  {item?.icon(isActive)}
                                  <Typography
                                    variant="p"
                                    className={`capitalize  font-[400] text-sm  ml-4 ${
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
                                    
>>>>>>> parent of 37a0be9 (added header)
              {/* body */}
              <Routes>
                <Route path="/" element={<MovieCategories />}></Route>
                <Route path="/tvShows" element={<TVCategories />}></Route>
                <Route path="/forRent" element={<MovieCategories />}></Route>
<<<<<<< HEAD
              </Routes>
=======
               </Routes>
>>>>>>> parent of 37a0be9 (added header)
            </div>
          }
        ></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
// https://dribbble.com/shots/6839523-Music-App
