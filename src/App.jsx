import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
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
  const theme = createTheme({
    typography: {
      fontFamily: ["outfit", "Supreme", "Clash Display", "sans-serif"].join(
        ","
      ),
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
              <div className=" w-96 rounded-lg h-full bg-color-100">
                {/* sidebar contents here */}
                <Paper
                  variant="outlined"
                  className=" w-full bg-inherit  h-full pt-20 box-border"
                  square
                >
                  <Paper
                    variant="contained"
                    sx={{ overflow: "auto", boxSizing: "border-box" }}
                    className="  h-fit py-8 rounded-lg bg-inherit"
                  >
                    <List>
                      <NavLink  to="/homepage/" className='no-underline '>
                        {({ isActive }) => (
                          <ListItem disablePadding>
                          <ListItemButton className={`px-8 mx-4 py-2 ${isActive?'bg-color-primary':'bg-inherit'}  rounded-lg `}>
                            <Typography
                              variant="p"
                              className={`capitalize  font-medium text-sm  ${isActive?'text-white':'text-black'}	`}
                            >
                              movies
                            </Typography>
                          </ListItemButton>
                        </ListItem>
                        )}
                      </NavLink>
                      <NavLink to="/homepage/tvShows" className='no-underline '>
                        {({ isActive }) => (
                          <ListItem disablePadding>
                          <ListItemButton className={`px-8 mx-4 py-2 ${isActive?'bg-color-primary':'bg-inherit'}  rounded-lg `}>
                            <Typography
                              variant="p"
                              className={`capitalize  font-medium text-sm  ${isActive?'text-white':'text-black'}	`}
                            >
                              TV Shows
                            </Typography>
                          </ListItemButton>
                        </ListItem>
                        )}
                      </NavLink>
                      <NavLink  to="/homepage/forRent" className='no-underline '>
                        {({ isActive }) => (
                          <ListItem disablePadding>
                          <ListItemButton className={`px-8 mx-4 py-2 ${isActive?'bg-color-primary':'bg-inherit'}  rounded-lg `}>
                            <Typography
                              variant="p"
                              className={`capitalize  font-medium text-sm  ${isActive?'text-white':'text-black'}	`}
                            >
                              for rent
                            </Typography>
                          </ListItemButton>
                        </ListItem>
                        )}
                      </NavLink>
                      <NavLink  to="/homepage/theaters" className='no-underline '>
                        {({ isActive }) => (
                          <ListItem disablePadding>
                          <ListItemButton className={`px-8 mx-4 py-2 ${isActive?'bg-color-primary':'bg-inherit'}  rounded-lg `}>
                            <Typography
                              variant="p"
                              className={`capitalize  font-medium text-sm  ${isActive?'text-white':'text-black'}	`}
                            >
                              in theaters
                            </Typography>
                          </ListItemButton>
                        </ListItem>
                        )}
                      </NavLink>
                     

                     
                    </List>
                    <Divider className="mt-8" variant="middle"></Divider>
                   
                  </Paper>
                </Paper>
              </div>

              {/* body */}
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/tvShows" element={<Home />}></Route>
                <Route path="/forRent" element={<Home />}></Route>
                <Route path="/theaters" element={<Home />}></Route>
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
