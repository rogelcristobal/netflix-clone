import { Routes, Route, NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/protetedRoute/ProtectedRoute";
import AvatarComponent from "./components/AvatarComponent";
// MUI
import { Paper, IconButton, Tooltip, Divider, Box } from "@mui/material";
// react-query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useFetchNetwork from "./fetch/useFetchNetwork";
// icons
import { RiSearchLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
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
  const nav = useNavigate();
  const { user, logout } = useContext(AuthContext);
  console.log(` render in app js: ${user?.uid}`);
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
  // generate a random hex color val from stackoverflow
  const  stringToColour = function(str) {
    let hash = 0;
    if(str){

      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      let colour = '#';
      for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
      }
      return colour;
    }else{
      return '#0096F3'
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route
          path="/homepage/*"
          element={
            <div className="font-satoshi relative flex w-full box-border   h-screen  bg-[#111115] ">
              {/* nav */}
              {searchModal && (
                <ModalBG
                  contextFunction={setSearchModal}
                  contextState={searchModal}
                >
                  <SearchModal></SearchModal>
                </ModalBG>
              )}
              <div className="fixed top-0 left-0 w-full h-20  shadow-sm z-20 bg-inherit ">
                <div className="container h-full flex   justify-end mx-auto items-center rounded-lg ">
                  {/* nav contents here */}
                  <Paper
                    variant="contained"
                    className={`h-full w-[calc(100%-14rem)]  bg-transparent  flex flex-col items-between justify-center  transition-all ease-in-out duration-500 px-4 box-border`}
                  >
                    <div className="flex items-center h-full w-full justify-between">
                      <Tooltip title="search" arrow placement="top-end">
                        <IconButton
                          aria-label=""
                          className="hover:bg-color-500/10 text-gray-700 hover:text-color-400  "
                          onClick={() => setSearchModal(!searchModal)}
                        >
                          <RiSearchLine className=" font-medium text-xl"></RiSearchLine>
                        </IconButton>
                      </Tooltip>
                      <Box className="flex items-center justify-between space-x-4">

                        <AvatarComponent user={false}>
                          </AvatarComponent>
                        {/* <IconButton
                          variant="text"
                          color="primary"
                          className={` rounded-full dark:bg-color-500/10 bg-primary-300 text-gray-200`}
                        >
                          <IoPerson className=" font-medium text-sm"></IoPerson>
                        </IconButton> */}
                        <IconButton
                          variant="text"
                          color="primary"
                          className=" rounded-xl hover:bg-color-500/10 text-gray-700 hover:text-color-400"
                        >
                          <IoSettingsOutline className=" font-medium text-xl"></IoSettingsOutline>
                        </IconButton>
                      </Box>

                      </div>
                    <Divider
                      variant="middle"
                      className="bg-gray-700/30"
                    ></Divider>
                  </Paper>
                </div>
              </div>

              {/* sidebar */}
              <div
                className={` w-80 z-20 flex h-full overflow-x-hidden transition-all ease-in-out duration-500 bg-[#0d0d0f]`}
              >
                {/* sidebar contents here */}
                <Paper
                  variant="contained"
                  className=" w-full px-4  h-full pt-6 box-border bg-inherit   flex flex-col items-center justify-start "
                  square
                >
                  <Link
                    to="/homepage/"
                    className="no-underline text-color-100 w-full px-6    box-border"
                  ></Link>
                </Paper>
              </div>
              {/* body */}

              <div className="flex items-start justify-start w-full  h-full  box-border">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <ProtectedRoute>
                        <MovieCategories />
                      </ProtectedRoute>
                    }
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
