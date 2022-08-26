import { Paper, Stack ,Box, Button} from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import {MdPlayArrow} from 'react-icons/md'
import useFetchItem from "../fetch/general/useFetchItem";
import GenreChip from "../components/GenreChip";
const ItemPage = () => {
  const { itemID } = useParams();
  const { pathname } = useLocation();

  const { data, isLoading } = useFetchItem(pathname, itemID);
  const genres = data?.genres.map((item) => item.id);

  return (
    <>
      <Paper
        variant="contained"
        className=" bg-inherit  flex flex-col items-center justify-start pt-0 w-full  h-full box-border"
        square
      >
        {/* scrollable content */}
        <div className="overflow-y-scroll overflow-x-hidden h-full w-full px-0   pb-72 box-border space-y-2 scroll-smooth	">
          <div className="lg:h-[85vh]  w-full relative box-border  overflow-hidden">
            <img
              className="h-full  w-full object-cover "
              src={`https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`}
              alt=""
            />
            <div className="h-full w-full absolute  top-0 left-0  backdrop-brightness-40	bg-gradient-to-r from-[#0d1117]"></div>
            <div className="h-full w-full absolute  top-0 left-0  backdrop-brightness-40	bg-gradient-to-t from-[#0d1117]"></div>

            <Box className=" absolute top-52 left-16 box-border">
              {/* titles */}
              <h5 className=" text-white text-5xl   font-bold box-border  m-0 mb-16">
                {data?.title}
                {data?.name}
              </h5>
             
              {/* genres */}
              <Stack columnGap={1.3} direction="row">
                {!isLoading
                  ? genres.slice(0,3).map((item, id) => (
                      <GenreChip
                        itemID={item}
                        path={pathname}
                        key={id}
                        sx="bg-gray-700/30 hover:bg-gray-600/30 py-1 "
                      ></GenreChip>
                    ))
                  : null}
              </Stack>

              {/* CTAs */}
              <Box className="w-96 mt-6 flex justify-start space-x-6">
                <Button variant="contained" className=" rounded-full px-12 text-sm py-2 capitalize shadow-none  bg-primary-400 drop-shadow-none" startIcon={<MdPlayArrow></MdPlayArrow>} >
                  Watch 
                </Button>
                <Button variant="contained" className=" rounded-full px-12 text-sm py-2 capitalize shadow-none  bg-transparent hover:bg-gray-600/30 outline-1  outline-color-300 outline drop-shadow-none" startIcon={<MdPlayArrow></MdPlayArrow>} >
                   trailer 
                </Button>

              </Box>
              {/* storyline */}
              <Box>

              </Box>
              




            </Box>





          </div>
        </div>
      </Paper>
      {/*page nav*/}
    </>
  );
};

export default ItemPage;
