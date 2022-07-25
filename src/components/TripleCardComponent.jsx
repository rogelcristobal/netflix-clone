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
      <Box className="flex items-center justify-between w-full  mb-4">
        <Typography
          variant="h6"
          className="font-semibold capitalize relative text-xl text-color-100 tracking-wide cursor-default"
        >
          {title}
          <div className="absolute h-full w-1 bg-primary-300 top-0 -left-4 rounded-full"></div>
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
        className=" h-full w-full   py-6 px-4 grid place-content-center rounded-lg bg-inherit"
      >
        {/* map only 5 item */}
        <Grid container spacing={2} columns={5}>
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
