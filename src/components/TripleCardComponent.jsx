import React from "react";
import { Box, Typography, Link, Paper, Grid } from "@mui/material";
import CardComponent from "./CardComponent";
const TripleCardComponent = ({ movies ,title}) => {
//   gets first 3 items in the returned array
const fetchThreeItem = (endpoint) => {
    return endpoint?.results.slice(0, 5);
  };

  return (
    <Paper className="flex flex-col items-center justify-center w-full  h-fit bg-color-100  rounded-xl overflow-hidden">
        {/* title and CTA */}
      

          {/* used paper as a container */}

     
        {/* map only 5 item */}
        {/* <Grid container spacing={2} columns={5} >
          {(!movies
            ? Array.from(new Array(6))
            : fetchThreeItem(movies)
          ).map((item, id) => (
            <Grid item xs={id==0?2:1} key={id}>
              <CardComponent data={item} />
            </Grid>
          ))}
        </Grid>
      */}
    </Paper>
  );
};

export default TripleCardComponent;
