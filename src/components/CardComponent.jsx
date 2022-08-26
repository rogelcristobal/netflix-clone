import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardMedia,
  CardContent,
  Skeleton,
  CardHeader,
  Typography,
  Box,
  Chip,
  Tooltip,
  Zoom,
  Stack, 
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { BsPlayCircle } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import useFetchGenreByCategory from "../fetch/general/useFetchGenreByCategory";
import GenreChip from "./GenreChip";
const CardComponent = ({
  title,
  poster,
  loading,
  spanTwo,
  rate,
  genre,
  id,
}) => {
  const {pathname} = useLocation()


  const nav = useNavigate();
  const {data:genreCategory} = useFetchGenreByCategory(pathname,id)
  const [hoverState, setHoverState] = useState({
    card: false,
    
  });

  const cardHoverEnterHandler = () => {
    setHoverState({ ...hoverState, card: true });
  };
  const cardHoverLeaveHandler = () => {
    setHoverState({ ...hoverState, card: false });
  };

  const filterGenre = () => {
    // filter genre api list to the props genre
    const res = genreCategory.genres.filter((item) =>
      genre.includes(item.id)
    );
    // then map it to get the name
    const mapped = res.map((item) => item.name).slice(0, 2);
    // then return the genre names array then slice it to get only 2
    return mapped;
  };

  const handleClick = () => {
    nav(`${pathname}/${id}`);
  };
  return (
    <motion.div
      //   whileHover={{ scale: 1.05, zIndex: 10 }}
      initial={{ zIndex: 1 }}
      whileTap={{ scale: 1 }}
      onMouseEnter={cardHoverEnterHandler}
      onMouseLeave={cardHoverLeaveHandler}
      onClick={handleClick}
    >
      <Card
        variant="contained"
        className="cursor-pointer w-full h-fit p-0 bg-inherit relative rounded-xl space-y-1   "
      >
        {!loading && poster ? (
          <div className="relative w-full h-fit  	">
            {/* poster || backdop image rendered */}
            <CardMedia
              component="img"
              className={`${
                spanTwo ? "h-60" : "h-48"
              } w-full object-cover rounded-xl `}
              title=""
              image={`https://image.tmdb.org/t/p/w500/${poster}`}
            />

            {/* absolut chips */}
            <div
              className={`h-full w-full absolute top-0 ${
                hoverState.card ? "bg-black/70" : "bg-black/30"
              }  transition-all ease-in-out duration-300  rounded-xl `}
            >
              {/* star chp */}
              <Tooltip
                title="vote average"
                arrow
                placement="top-start"
                followCursor
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 300 }}
                enterDelay={1000}
              >
                <Chip
                  variant="contained"
                  className={` absolute ${hoverState.card?'bg-gray-600/30 ' :'bg-gray-900/30 '} ${
                    spanTwo ? "top-2.5 left-2.5" : "top-1 left-1"
                  } px-2 py-0.5 text-[0.675rem]  text-color-400 font-semibold h-fit cursor-pointer`}
                  label={`${rate}`}
                  icon={<AiFillStar className={`text-color-400`}></AiFillStar>}
                  // onClick={handleRate}
                ></Chip>
              </Tooltip>

              {/* menu chip */}    
                <HiDotsCircleHorizontal
                  onClick={(e)=>{
                    e.stopPropagation()

                  }}
                  className={` ${hoverState.card?'text-gray-600/30 hover:text-gray-400/30':'text-gray-900/30 '}  absolute text-2xl  ${
                    spanTwo ? "top-1.5 right-1.5" : "top-0.5 right-0.5 rotate-90"
                  } `}
                ></HiDotsCircleHorizontal>
              
            </div>
            {/* play btn */}
            {hoverState.card && (
              <Box className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-color-300 font-thin text-5xl ">
                <BsPlayCircle></BsPlayCircle>
              </Box>
            )}
          </div>
        ) : (
          <Skeleton
            variant="rectangular"
            animation="wave"
            className={`${
              spanTwo ? "h-60" : "h-48"
            } w-full bg-[#161b22]   rounded-xl  `}
          ></Skeleton>
        )}
        
        {/* card details aboslute */}
        <CardContent
          className={`flex flex-col absolute   rounded-b-xl box-border	 bottom-2  h-fit  ${
            spanTwo ? "items-start px-6 py-4" : "items-center px-2 py-3"
          } justify-center  w-full     pointer-events-none`}
        >
          {/* title */}
          {!loading && title ? (
            
            <Box
              className={`flex flex-col ${
                spanTwo ? "items-start space-y-4" : "items-center space-y-2"
              } justify-center w-full `}
            >
              <Typography
                variant="p"
                className={`  font-medium ${
                  spanTwo
                    ? "text-lg tracking-wider"
                    : "text-[0.80rem] tracking-widest"
                } font-outfit  text-gray-100 text-center max-w-[90%] leading-4`}
              >
                {title}
              </Typography>
                {/* chips */}
              <Stack
                spacing={0.5}
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
              >
               
                {spanTwo
                  ? 
                    !loading && genre
                    ? 
                      filterGenre().map((itemList, id) => (
                        <GenreChip key={id}  itemList={itemList} hoverState={hoverState.card}></GenreChip>
                      ))
                    : null
                  : null}
              </Stack>
            </Box>
          ) : (
            <Skeleton className="h-8 w-[80%] bg-[#21262d]/50">
              <CardHeader
                className="capitalize tracking-wide "
                titleTypographyProps={{ fontSize: "0.8rem", fontWeight: 600 }}
                title="item title loading"
              />
            </Skeleton>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CardComponent;
