import { Routes, Route, NavLink } from "react-router-dom";
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import { useNavigate } from "react-router-dom";
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
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
  const nav=useNavigate()
  const theme = createTheme({
    typography: {
      fontFamily: ["outfit", "Supreme", "Clash Display", "sans-serif"].join(
        ","
      ),
      palette: {
        secondary: {
          main: 'rgb(17, 24, 39)',
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
              <button onClick={()=>nav('/homepage/')}>go home</button>
            </div>
          }
        ></Route>
        <Route
          path="/homepage/*"
          element={
            <div className="font-outfit relative flex w-full    h-screen bg-color-100 ">
              {/* nav */}
              <div className="fixed top-0 left-0 w-full h-14 z-20  bg-color-100 ">
                <div className="container h-full flex  px-4 justify-end mx-auto  rounded-lg ">
                  {/* nav contents here */}
                  <Paper
                    variant="contained"
                    className="h-full w-full bg-inherit flex items-center justify-end px-2"
                  >
                    <Button
                      variant="text"
                      className="bg-color-primary rounded-full px-5 py-1.5"
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
                <Divider variant="middle"></Divider>
              </div>

              {/* sidebar */}
              <div className=" w-96 z-20 rounded-lg h-full bg-gray-900">
                {/* sidebar contents here */}
                <Paper
                  variant="contained"
                  className=" w-full bg-inherit  h-full pt-20 box-border"
                  square
                >
                  <Paper
                    variant="contained"
                    sx={{ overflow: "auto", boxSizing: "border-box" }}
                    className="  h-fit py-4 rounded-lg  bg-gray-900"
                  >
                    <List>
                      {[
                        { path: "/", title: "movies" ,icon:<MovieCreationOutlinedIcon className="text-white text-base "/>},
                        { path: "/tvShows", title: "tv shows",icon:<LiveTvOutlinedIcon className="text-white text-base "/>},
                        { path: "/forRent", title: "for rent",icon: <PaidOutlinedIcon className="text-white text-base "/>},
                        { path: "/theaters", title: "in theaters" ,icon:<TheatersOutlinedIcon className="text-white text-base "/> },
                      ].map((item, id) => (
                        <NavLink
                          to={`/homepage${item.path}`}
                          key={id}
                          className="no-underline "
                        >
                          {({ isActive }) => (
                            <ListItem disablePadding>
                              <ListItemButton
                                className={` px-9  py-3 space-x-5 ${
                                  isActive
                                    ? "bg-gray-800 hover:bg-gray-800"
                                    : "hover:bg-gray-800 bg-inherit"
                                }`}
                              >
                                {item?.icon}
                                <Typography
                                  variant="p"
                                  className={`capitalize  font-[400] text-sm   ${
                                    isActive ? "text-color-100" : "text-color-100"
                                  }	`}
                                  >
                                  {item.title}
                                </Typography>
                              </ListItemButton>
                            </ListItem>
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
