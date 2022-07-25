import { Routes, Route, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  // #1b2635
  // #233044
  return (
    <ThemeProvider theme={theme}>
      <Routes>s
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
            <div className="font-outfit relative flex w-full    h-screen bg-[#1b2635] ">
              {/* nav */}
              <div className="fixed top-0 left-0 w-full h-14 z-10  ">
                <div className="container h-full flex  px-4 justify-end mx-auto  rounded-lg ">
                  {/* nav contents here */}
                  <Paper
                    variant=""
                    className="h-full w-full bg-inherit flex items-center justify-end px-2"
                  >
                    <Button
                      variant="text"
                      className="bg-primary-300 rounded-xl px-5 py-1.5"
                    >
                      <Typography
                        variant="p"
                        className="text-color-100 text-sm tracking-wide capitalize"
                      >
                        sign in
                      </Typography>
                    </Button>
                  </Paper>
                </div>
                {/* <Divider variant="middle"></Divider> */}
              </div>

              {/* sidebar */}
              <div className=" w-72 z-10 rounded-lg h-full ">
                {/* sidebar contents here */}
                <Paper
                  variant="contained"
                  className=" w-full  px-4 h-full pt-20 box-border  bg-[#233044]"
                  square
                >
                  <Paper
                    variant="contained"
                    sx={{ overflow: "auto", boxSizing: "border-box" }}
                    className="  h-fit py-2  rounded-lg  bg-inherit"
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
                                  className={` rounded-xl  px-6  py-3 my-1 ${
                                    isActive
                                      ? "bg-[#202c3f]"
                                      : "hover:bg-color-200"
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

              <div className="flex items-start justify-start pt-16 box-border">
                <Routes>
                  <Route path="/" element={<MovieCategories />}></Route>
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
