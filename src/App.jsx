import { Routes, Route, NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
// hooks
import {SearchModalProvider} from './context/SearchModalContext'
import SearchModalContext from "./context/SearchModalContext";
// components
import SearchModal from "./components/SearchModal";
import MovieCategories from "./pages/MovieCategories";
import ModalBG from "./components/modal/ModalBG";
// MUI
import { Paper,  IconButton, Tooltip } from "@mui/material";
// react-query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// icons
import {RiSearchLine} from 'react-icons/ri'
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SearchModalProvider>
        <NetflixClone/>
      </SearchModalProvider>
    </QueryClientProvider>
  );
}
function NetflixClone() {
  // styles
  // [#1b2635]
  // [#212b36]
  const {searchModal,setSearchModal} = useContext(SearchModalContext)
  const nav = useNavigate();
  const theme = createTheme({
    typography: {
      fontFamily: ["outfit Sans", "sans-serif"].join(","),
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
            <div className="font-outfit relative flex w-full box-border   h-screen bg-[#111115]  ">
              {/* nav */}
              {
                searchModal&&
                  <ModalBG contextFunction={setSearchModal} contextState={searchModal}>
                    <SearchModal></SearchModal>
                  </ModalBG>
              }
              <div className="fixed top-0 left-0 w-full h-20  z-10 bg-transparent ">
                <div className="container h-full flex   justify-end mx-auto items-center rounded-lg ">
                  {/* nav contents here */}
                  <Paper
                    variant="contained"
                    className={`h-full w-[calc(100%-14rem)] pt-4 bg-transparent  flex items-center justify-between  transition-all ease-in-out duration-500 px-4 box-border`}
                  >
                    {/* ham */}

                    <div className="flex items-center  justify-around ml-2 space-x-6">
                      <p className="text-base font-medium text-color-200 ">
                        Movies
                      </p>
                      <p className="text-base font-medium text-gray-500">
                        Tv Shows
                      </p>
                    </div>

                    <div className="flex items-center h-full w-72 justify-start">
                      <Tooltip title="search"  arrow placement="top-end">
                      <IconButton aria-label="" className="hover:bg-color-500/10 text-gray-400 hover:text-gray-100" onClick={()=>setSearchModal(!searchModal)}>
                        
                        <RiSearchLine className=" font-medium text-xl"></RiSearchLine>
                      </IconButton>
                      </Tooltip>
                    </div>


                  </Paper>
                </div>
              </div>


            
              {/* sidebar */}
              <div
                className={` w-72 z-10 flex h-full overflow-x-hidden transition-all ease-in-out duration-500`}
              >
                {/* sidebar contents here */}
                <Paper
                  variant="contained"
                  className=" w-full px-4  h-full pt-6 box-border bg-[#0d0d0f]  flex flex-col items-center justify-start "
                  square
                >
                  <Link
                    to="/homepage/"
                    className="no-underline text-color-100 w-full px-6    box-border"
                  >
                    {/* <Typography
                      variant="h6"
                      className="font-medium tracking-wide  text-2xl font-outfit  first-letter:text-primary-400 "
                    >
                      netflix.
                    </Typography> */}
                  </Link>
                </Paper>
              </div>
              {/* body */}

              <div className="flex items-start justify-start w-full  h-full  box-border">
                <Routes>
                  <Route path="/" element={<MovieCategories />}></Route>
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
// https://dribbble.com/shots/17158926-Wave-Music-Streaming-Project
// https://dribbble.com/shots/14655584-White-and-clean-TV-app
