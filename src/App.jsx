import { Routes, Route, NavLink } from "react-router-dom";
import MovieIcon from "@mui/icons-material/Movie";
import { useNavigate } from "react-router-dom";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import { TelevisionSimple,FilmStrip } from "phosphor-react";
import PaidIcon from "@mui/icons-material/Paid";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import MovieCategories from "./pages/MovieCategories";
import {
  Paper,
  Typography,
  ListItem,
  Button,
  ListItemButton,
  List,
  Divider,
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
            <div className="h-96 w-96 bg-blue-300 grid place-content-center">
              put log in here
              <button onClick={() => nav("/homepage")}>go home</button>
            </div>
          }
        ></Route>
        <Route
          path="/homepage/*"
          element={
            <div className="font-outfit relative flex w-full    h-screen bg-color-200 ">
              {/* nav */}
              <div className="fixed top-0 left-0 w-full h-14 z-20  ">
                <div className="container h-full flex  px-4 justify-end mx-auto  rounded-lg ">
                  {/* nav contents here */}
                  <Paper
                    variant="contained"
                    className="h-full w-full bg-inherit flex items-center justify-end px-2"
                  >
                    <Button
                      variant="text"
                      className="bg-color-primary rounded-lg px-5 py-1.5"
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
              <div className=" w-96 z-10 rounded-lg h-full bg-color-100">
                {/* sidebar contents here */}
                <Paper
                  variant="contained"
                  className=" w-full bg-inherit px-4 h-full pt-20 box-border  "
                  square
                >
                  <Paper
                    variant="contained"
                    sx={{ overflow: "auto", boxSizing: "border-box" }}
                    className="  h-fit py-4  rounded-lg  bg-color-100 "
                  >
                    <List>

                      {[
                        {
                          path: "/",
                          title: "movies",
                          icon: function (state) {
                            return (
                              <FilmStrip size={14} weight="fill" color={`${state ?'white':'rgb(101, 119, 134)'}`} />
                            );
                          },
                        },
                        {
                          path: "/tvShows",
                          title: "tv shows",
                          icon: function (state) {
                            return (
                             <TelevisionSimple size={14} weight="fill" color={`${state ?'white':'rgb(101, 119, 134)'}`} />

                            );
                          },
                        },
                        {
                          path: "/forRent",
                          title: "for rent",
                          icon: function (state) {
                            return (
                              <PaidIcon
                                className={`${
                                  state ? "text-color-100" : "text-color-500"
                                } text-base `}
                              />
                            );
                          },
                        },
                        {
                          path: "/theaters",
                          title: "in theaters",
                          icon: function (state) {
                            return (
                              <TheatersOutlinedIcon
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
                                  className={` rounded-xl  px-6  py-3  ${
                                    isActive
                                      ? "bg-color-primary"
                                      : "hover:bg-color-200"
                                  }`}
                                >
                                  {item?.icon(isActive)}
                                  <Typography
                                    variant="p"
                                    className={`capitalize  font-[500] text-sm  ml-4 ${
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
                    {/* <Divider className="mt-8" variant="middle"></Divider> */}
                  </Paper>
                </Paper>
              </div>

              {/* body */}
              <Routes>
                <Route path="/" element={<MovieCategories />}></Route>
                <Route path="/tvShows" element={<MovieCategories />}></Route>
                <Route path="/forRent" element={<MovieCategories />}></Route>
                <Route path="/theaters" element={<MovieCategories />}></Route>
              </Routes>
            </div>
          }
        ></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
// https://dribbble.com/shots/6839523-Music-App
