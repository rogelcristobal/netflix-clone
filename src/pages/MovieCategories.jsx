import { Box, Typography, Link, Paper, Grid } from "@mui/material";
import {BsPlayCircleFill} from 'react-icons/bs'
import {RiNumbersFill} from 'react-icons/ri'
import {AiFillStar} from 'react-icons/ai'
import useFetchNowPlayingMovie from "../fetch/movies/useFetchNowPlayingMovie";
import useFetchLatestMovie from "../fetch/movies/useFetchLatestMovie";
import useFetchPopularMovie from "../fetch/movies/useFetchPopularMovie";
import useFetchTopRatedMovie from "../fetch/movies/useFetchTopRatedMovie";
import useFetchUpcomingMovie from "../fetch/movies/useFetchUpcomingMovie";
import Category from "../components/Category";
const MovieCategories = () => {
  // queries
  const upcomingMovieQuery = useFetchUpcomingMovie();

  return (
    <>
      <div className=" px-4 pt-2 box-border flex flex-col items-center justify-start  h-full overflow-y-auto space-y-5  w-full ">
        <div className="h-auto  min-h-full   box-border flex flex-col items-start  justify-start    gap-8   w-full   no-scrollbar rounded-lg">
          <div className="p-4 gap-4 text-color-500  h-full w-full box-border mb-6 rounded-2xl grid  grid-cols-12 grid-rows-4">

            <div className="h-full w-full rounded-2xl bg-[#151920] col-span-4 ">b</div>
            <div className="h-full w-full rounded-2xl bg-[#151920] col-span-5 row-span-3">a</div>
            <div className="h-full w-full rounded-2xl bg-[#151920] col-span-2 ">c</div>



            {/* <Grid container columns={4} spacing={1} columnSpacing={2} className="h-48 w-full  ">
              {[
                { title: "popular", sub: "popular movies now",avatar:<AiFillStar className="text-lg text-color-500 "/>},
                { title: "top rated", sub: "top rated movies ",avatar:<RiNumbersFill className="text-lg text-color-500 "/>   },
                { title: "now playing", sub: "popular movies now",avatar:<BsPlayCircleFill className="text-lg text-color-500 "/>  },
              
              ].map((item, id) => (
                <Grid item xs={2} key={id} className="h-fit shadow-sm">
                  <Category
                    title={item.title}
                    subTitle={item.sub}
                    avatar={item.avatar}
                    color="bg-[#1b2635]"
                  ></Category>
                </Grid>
              ))}
            </Grid> */}

            {/* bg-[#151920]  */}
          </div>
        </div>
      </div>

      {/*page nav*/}
      {/* <div className="w-60 mt-4  mx-4   h-80">
        <Paper
          variant="contained"
          className="h-full   w-full rounded-lg bg-inherit"
        ></Paper>
      </div> */}
    </>
  );
};

export default MovieCategories;
