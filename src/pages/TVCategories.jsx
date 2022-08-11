import React from "react";
import {
  Typography,
  Paper,
  ListItem,
  ListItemButton,
  List,
  Skeleton,

} from "@mui/material";
import TripleCardComponent from "../components/TripleCardComponent";

import useFetchMovieGenres from "../fetch/movies/useFetchMovieGenres";
const TVCategories = () => {
  // queries
  
  const movieGenre = useFetchMovieGenres();
  const sliceGenre = (endpoint, state) => {
    // console.log(movieGenre.data)
    if (endpoint.isLoading) {
      if (!state) {
        return Array.from(new Array(4));
      } else {
        return Array.from(new Array(5));
      }
    } else {
      if (!state) {
        return endpoint.data?.genres.slice(0, 4);
      } else {
        return endpoint.data?.genres.slice(0, 5);
      }
    }
  };

  return (
    <>
      <Paper
        variant="contained"
        className=" bg-inherit  flex flex-col items-center justify-start    pt-20 w-full  h-full box-border"
        square
      >
        {/* scrollable content */}
        <div className="overflow-y-scroll overflow-x-hidden h-full w-full px-8 py-2  pb-72 box-border space-y-2 scroll-smooth	">
      
          {[
            { title: "popular movies", data: [] },
            { title: "now playing", data:  []},
            { title: "top rated movies", data:[]  },
            { title: "upcoming movies", data:  []},
          ].map((item, id) => (
            <TripleCardComponent
              key={id}
              title={item.title}
              movie={item.data}
              isSpanTwo={id === 0 ? true : false}
            ></TripleCardComponent>
          ))}
        </div>
      </Paper>
      {/*page nav*/}

      <Paper
        variant="contained"
        className="w-60 mt-0 pt-20  box-border mx-6 bg-inherit  h-full "
      >
        <Paper
          variant="contained"
          className="  box-border pt-8 px-4 w-full rounded-xl bg-inherit flex flex-col items-left justify-start h-auto space-y-0"
        >
          <Typography
            variant="p"
            className="text-color-300 font-medium text-sm tracking-wide"
          >
            Categories
          </Typography>
          <List>
            {movieGenre.isLoading
              ? Array.from(new Array(4)).map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="rounded-xl" variant="contained">
                      <Skeleton>
                        <Typography
                          variant="p"
                          className="text-sm  w-20 text-neutral-400"
                        >
                          item loading
                        </Typography>
                      </Skeleton>
                    </ListItemButton>
                  </ListItem>
                ))
              : sliceGenre(movieGenre).map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="rounded-xl dark:hover:bg-[#191920] hover:bg-primary-400 hover:text-color-300 py-3 text-gray-700 font-semibold hover:font-medium tracking-wide">
                      <Typography variant="p" className="text-xs    ">
                        {item.name}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
          </List>
          
        </Paper>
      </Paper>
    </>
  );
};

export default TVCategories;
