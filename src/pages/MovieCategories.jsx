
import { Box, Typography, Link, Paper,Grid } from "@mui/material";

const MovieCategories = () => {
 
  return (
    <>
      <div className=" px-4 pt-2 box-border flex flex-col items-center justify-start  h-full overflow-y-auto space-y-5  w-full ">
        <div className="h-auto  min-h-full   box-border flex flex-col items-start  justify-start    bg-[#151920] gap-8   w-full   rounded-2xl">
          <div className="px-4 space-y-5 py-4 h-full w-full box-border ">
         
            <Grid container spacing={2}   columns={4} className="h-full">
             
                <Grid item xs={2}>
 					<div class="w-full h-full bg-[#161c24] bg-opacity-1 backdrop-blur-lg rounded-2xl text-white text-center">a</div>
                </Grid>
				<Grid item xs={1}>
 					<div class="w-full h-full bg-[#427cc7] bg-opacity-1 backdrop-blur-lg rounded-2xl text-white text-center">b</div>
                </Grid>
				<Grid item xs={1}>
 					<div class="w-full h-full bg-[#42c7c7] bg-opacity-1 backdrop-blur-lg rounded-2xl text-white text-center">b</div>
                </Grid>
				<Grid item xs={1}>
 					<div class="w-full h-full bg-[#c74279] bg-opacity-1 backdrop-blur-lg rounded-2xl text-white text-center">b</div>
                </Grid>				
				
				
			 
            </Grid>

            {/* 
            {[
              { title: "now playing", data: nowPlayingMovie },
               { title: "popular now", data: popularMovies },
               { title: "top rated movies", data: topRatedMovies },
               { title: "upcoming movies", data: upcomingMovies },
            ].map((item, id) => (
              <TripleCardComponent
                key={id}
                title={item.title}
                movies={item.data}
              ></TripleCardComponent>
            ))} */}
          </div>
        </div>
      </div>

      {/*page nav*/}
      {/* <div className="w-60 mt-2  mx-4   h-80">
				<Paper
					variant="outlined"
					className="h-full   w-full rounded-lg bg-inherit "
				></Paper>
			</div> */}
    </>
  );
};

export default MovieCategories;
