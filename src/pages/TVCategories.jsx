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

import useFetchOnAir from '../fetch/shows/useFetchOnAir'
import useFetchPopularShow from '../fetch/shows/useFetchPopularShow'
import useFetchTopRatedShow from '../fetch/shows/useFetchTopRatedShow'
import useFetchAiringToday from '../fetch/shows/useFetchAiringToday'
import { useLocation } from "react-router-dom";
import useFetchGenreByCategory from "../fetch/general/useFetchGenreByCategory";
const TVCategories = () => {
  const {pathname} = useLocation()
  // queries
  const {data:onAirQuery} = useFetchOnAir()
  const {data:popularShowQuery} = useFetchPopularShow()
  const {data:topRatedShowQuery} = useFetchTopRatedShow()
  const {data:airingTodayQuery} = useFetchAiringToday()
 const {data: genreData,isLoading:genreLoading } = useFetchGenreByCategory(pathname)
  
  
  const sliceGenre = (state) => {
    
    if (genreLoading) {
      if (!state) {
        return Array.from(new Array(4));
      } else {
        return Array.from(new Array(5));
      }
    } else {
      if (!state) {
        return genreData.genres.slice(0, 4);
      } else {
        return genreData.genres.slice(0, 5);
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
            { title: "popular shows", data: popularShowQuery },
            { title: "airing today", data:  airingTodayQuery},
            { title: "top rated shows", data:topRatedShowQuery  },
            { title: "on air", data:  onAirQuery},
          ].map((item, id) => (
            <TripleCardComponent
            key={id}
            title={item.title}
            API_data={item.data}
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
          className="  box-border pt-8 px-6 w-full rounded-xl bg-inherit flex flex-col items-left justify-start h-auto space-y-0"
        >
          <Typography
            variant="p"
            className="text-color-300 font-medium text-sm tracking-wide "
          >
            Categories
          </Typography>
          <List>
            {genreLoading
              ? Array.from(new Array(4)).map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="rounded-xl" variant="contained">
                      <Skeleton className="w-full h-6 bg-[#161b22]">
                        
                      </Skeleton>
                    </ListItemButton>
                  </ListItem>
                ))
              : sliceGenre(genreData).map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="w-20 rounded-xl hover:bg-[#090b0f]/40 dark:hover:bg-primary-400 hover:text-color-300 py-3 text-gray-700 font-medium  tracking-wide transition-all duration-200 ease-in-out">
                      <Typography variant="p" className="text-xs    whitespace-nowrap text-ellipsis overflow-hidden">
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
