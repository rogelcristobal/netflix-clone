import React from "react";
import { Box, Typography, Link, Paper, Grid } from "@mui/material";
import CardComponent from "./CardComponent";
const TripleCardComponent = ({ movie, title,isSpanTwo }) => {
  //   gets first 3 items in the returned array
  const selectFourItem = (endpoint,state) => {
    if (movie.isLoading) {
      if(!state){
        return Array.from(new Array(4))
      }else{
        return Array.from(new Array(5)) 
      }
    } else {
      if(!state){
        return endpoint.data?.results.slice(0, 4);
      }else{
        return endpoint.data?.results.slice(0, 5);  
      }
    }
  };
  // sample logs
 
  return (
    <Paper
      variant="contained"
      className="flex flex-col items-start justify-center w-full  h-fit bg-inherit  rounded-xl overflow-hidden px-6 box-border py-6 "
    >
      <Box className="flex items-center justify-between w-full h-auto mb-6">
        <Typography
          variant="p"
          className=" capitalize font-semibold text-xl text-neutral-700"
        >
          {title}
        </Typography>
        <Link
          underline="none"
          component="button"
          onClick={() => alert("x")}
          className="text-gray-400 font-medium font-general"
        >
          See all
        </Link>
      </Box>

      {/* map only 5 item */}

      {isSpanTwo ? (
        <Grid container spacing={2} columns={5}>
          {selectFourItem(movie,false).map((item, id) => (
            <Grid item xs={id === 0 ? 2 : 1} key={id}>
              <CardComponent
                title={item?.title}
                poster={item?.poster_path}
                subheader={id}
              />
            </Grid>
          ))}
        </Grid>
      ) : 
      <Grid container spacing={2} columns={5}>
          {selectFourItem(movie,true).map((item, id) => (
            <Grid item xs={1} key={id}>
              <CardComponent
                title={item?.title}
                poster={item?.poster_path}
                subheader={id}
              />
            </Grid>
          ))}
        </Grid>
      }
    </Paper>
  );
};
TripleCardComponent.defaultProps = {
  title: "section title",
  isSpanTwo:false
};

export default TripleCardComponent;
