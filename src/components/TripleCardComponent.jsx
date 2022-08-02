import React from "react";
import { Box, Typography, Link, Paper, Grid } from "@mui/material";
import CardComponent from "./CardComponent";
const TripleCardComponent = ({ movie, title }) => {
  //   gets first 3 items in the returned array
  const selectFourItem = (endpoint) => {
    if(movie.isLoading){
      return  Array.from(new Array(4))
    }else{
     return endpoint.data?.results.slice(0, 4);
    }
  };
  // sample logs
  if (movie.isLoading){
    console.log("loading wait")
  }else{

    console.log(movie.data)
  }
  return (
    <Paper
      variant="contained"
      className="flex flex-col items-start justify-center w-full  h-fit bg-color-100  rounded-2xl overflow-hidden px-8 box-border py-6 "
    >
      <Box className="flex items-center justify-between w-full h-auto mb-6">
        <Typography variant="p" className=" capitalize font-medium text-lg text-color-black">
          {title}
        </Typography>
        <Link
          underline="none"
          component="button"
          onClick={() => alert("x")}
          className="text-gray-400 font-[500] font-general"
        >
          See all
        </Link>
      </Box>

      {/* map only 5 item */}
      
        <Grid container spacing={2} columns={4}>
          
             
            {  selectFourItem(movie).map((item, id) => (
              <Grid item xs={1} key={id}>
              <CardComponent title={item?.title} poster={item?.poster_path} subheader={id} />
              </Grid>
              ))}
            
            
      </Grid>
    
    </Paper>
  );
};
TripleCardComponent.defaultProps={
  title:'section title'
}

export default TripleCardComponent;
