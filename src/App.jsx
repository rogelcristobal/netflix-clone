import { Routes, Route, NavLink } from "react-router-dom";

import { useContext } from "react";
// context
import AuthContext from "./context/AuthContext";
// hooks
import { SearchModalProvider } from "./context/SearchModalContext";
import SearchModalContext from "./context/SearchModalContext";
// components
import SearchModal from "./components/SearchModal";
import MovieCategories from "./pages/MovieCategories";
import ModalBG from "./components/modal/ModalBG";
import TVCategories from "./pages/TVCategories";
import ItemPage from "./pages/ItemPage";
import SearchAsButton from "./components/SearchAsButton";
// MUI
import {
  Paper,
  IconButton,
  Tooltip,
  Divider,
  Box,
  Zoom,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Button,
} from "@mui/material";
// react-query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// icons
import { MdPlayArrow } from "react-icons/md";
import { IoSettingsOutline, IoPersonOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

import { useSelector, useDispatch } from "react-redux";
import { logOut } from "./features/authSlice";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SearchModalProvider>
        <NetflixClone />
      </SearchModalProvider>
    </QueryClientProvider>
  );
}
function NetflixClone() {
  const { searchModal, setSearchModal } = useContext(SearchModalContext);
  const dispatch = useDispatch();

  const { user, logout } = useContext(AuthContext);

  // mui theme
  const theme = createTheme({
    typography: {
      fontFamily: ["Satoshi", "sans-serif"].join(","),
      palette: {
        primary: {
          main: "rgb(17, 24, 39)",
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* <Route path="/" element={<LoginPage />}></Route> */}
        <Route
          path="/*"
          element={
            <div className="font-satoshi relative flex w-full box-border   h-screen  bg-[#0d1117] ">
              {/* nav */}
              {/* search modal */}
              {searchModal && (
                <ModalBG
                  contextFunction={setSearchModal}
                  contextState={searchModal}
                >
                  <SearchModal></SearchModal>
                </ModalBG>
              )}
              <div className="fixed top-0 left-0 w-full h-20  z-20 bg-transparent ">
                <div className="container h-full flex   justify-end mx-auto items-center rounded-lg ">
                  {/* nav contents here */}
                  <Paper
                    variant="contained"
                    className={`h-full w-[calc(100%-14rem)]  bg-transparent  flex flex-col items-between justify-center  transition-all ease-in-out duration-500 px-4 box-border`}
                  >
                    <div className="flex items-center h-full w-full justify-end">
                      {/* search */}
                      <SearchAsButton
                        searchModal={searchModal}
                        setSearchModal={setSearchModal}
                        placeholder="search..."
                      ></SearchAsButton>

                      {/* right side container */}
                      <Box className="flex items-center justify-between space-x-4">
                        {/* user interface */}

                        <Box className="flex items-center justify-between ">
                          <Box className="flex  items-center justify-between space-x-2">
                            {/* greet */}
                            <Typography
                              variant="p"
                              className="text-color-400"
                            ></Typography>
                            {/* username */}
                            <Typography
                              variant="p"
                              className="text-color-300 text-xs tracking-wider"
                            >
                              {user?.email}
                            </Typography>
                          </Box>
                          {/* user */}
                          <IconButton
                            variant="outlined"
                            className=" rounded-full  bg-[#161b22]/20 mix-blend-difference	  text-color-400 transition ease-in-out duration-300"
                          >
                            <IoPersonOutline className=" font-medium text-base"></IoPersonOutline>
                          </IconButton>
                          {/* arrow dropdown */}
                          <IconButton
                            variant="outlined"
                            className="    text-color-400 transition ease-in-out duration-300"
                          >
                            <IoMdArrowDropdown className=" font-medium text-base"></IoMdArrowDropdown>
                          </IconButton>
                        </Box>

                        {/* settings */}
                        <IconButton
                          variant="outlined"
                          className=" rounded-xl bg-[#090b0f]/40  hover:text-color-100 text-color-400 transition ease-in-out duration-300 hover:bg-gray-600/30"
                          onClick={() => dispatch(logOut())}
                        >
                          <IoSettingsOutline className=" font-medium text-lg"></IoSettingsOutline>
                        </IconButton>
                      </Box>
                    </div>
                   
                  </Paper>
                </div>
              </div>

              {/* sidebar */}
              <div
                className={` w-80 z-20 flex items-center justify-center h-full overflow-x-hidden transition-all ease-in-out duration-500 bg-inherit box-border overflow-hidden`}
              >
                {/* sidebar contents here */}
                <Paper
                  variant="contained"
                  className=" w-full px-4  h-full pt-2 box-border bg-inherit   flex flex-col items-center justify-start "
                  square
                >
                  <List className=" w-full h-full space-y-2">
                    {/* roglify */}
                    <Box className="py-8 w-full flex items-center justify-center  rounded-xl  mb-4">
                      <Typography
                        variant="h5"
                        className="text-color-300 tracking-wide first-letter:text-primary-400 font-medium"
                      >
                        roglify.
                      </Typography>
                     </Box>
                    {/* dashboard */}
                    <Typography
                      variant="p"
                      className="text-gray-800 text-xs tracking-wider capitalize font-medium ml-4 "
                    >
                      dashboard
                    </Typography>
                    {/* navlinks */}
                    {[
                      { path: "/movies", label: "movies" },
                      { path: "/tvshows", label: "tv shows" },
                      { path: "/peoples", label: "peoples" },
                    ].map((link, id) => (
                      <ListItem
                        className="px-3 capitalize py-0 font-satoshi"
                        key={id}
                      >
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            isActive
                              ? "bg-[#161b22] w-full no-underline rounded-xl "
                              : " w-full no-underline rounded-xl hover:bg-[#090b0f]/40"
                          }
                        >
                          <ListItemButton className=" py-3.5 text-color-300 tracking-wide text-[0.800rem]  rounded-xl px-6">
                            <Typography variant="p" className="">
                              {link.label}
                            </Typography>
                          </ListItemButton>
                        </NavLink>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              
              
              </div>
              {/* body */}

              <div className="flex items-start justify-start w-full  h-full  box-border">
                <Routes>
                  {/* movie route */}
                  <Route path="/movies/*" element={<MovieCategories />}></Route>
                  {/* tvshow route */}
                  <Route path="/tvshows/*" element={<TVCategories />}></Route>
                  {/* movie item */}
                  <Route
                    path="/movies/:itemID"
                    element={<ItemPage></ItemPage>}
                  ></Route>
                  {/* tv show item */}
                  <Route
                    path="/tvshows/:itemID"
                    element={<ItemPage></ItemPage>}
                  ></Route>
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
// https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/dark/#/dashboards/dashboard1

// netflix

// https://dribbble.com/shots/17514939-Movie-Dashboard-Design
// https://dribbble.com/shots/17158926-Wave-Music-Streaming-Project
// https://dribbble.com/shots/14655584-White-and-clean-TV-app
