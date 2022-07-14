import React from "react";
import { Box, Typography, Link, Paper, Grid } from "@mui/material";
import CardComponent from "./CardComponent";
const TripleCardComponent = ({ movies ,title}) => {
//   gets first 3 items in the returned array
const fetchThreeItem = (endpoint) => {
    return endpoint?.results.slice(0, 5);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full  py-2 ">
        {/* title and CTA */}
      <Box className="flex items-center justify-between w-full  mb-6">
        <Typography
          variant="h6"
          className="font-semibold capitalize text-xl text-color-black cursor-default"
        >
          {title}
        </Typography>
        <Link
          underline="none"
          component="button"
          variant="p"
          className="text-sm hover:text-color-primary   font-outfit capitalize text-color-400"
          onClick={() => {
            alert("I'm a button.");
          }}
        >
          see all
        </Link>
      </Box>

          {/* used paper as a container */}
      <Paper
        component="div"
        variant="contained"
        className=" h-full w-full bg-color-100  py-8 px-4 grid place-content-center rounded-lg "
      >
        {/* map only 5 item */}
        <Grid container spacing={1} columns={5}>
          {(!movies
            ? Array.from(new Array(5))
            : fetchThreeItem(movies)
          ).map((item, id) => (
            <Grid item xs={1} key={id}>
              <CardComponent data={item} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default TripleCardComponent;
