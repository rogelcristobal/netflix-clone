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
import { BsPlayCircle } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import useFetchMovieGenres from "../fetch/movies/useFetchMovieGenres";
const CardComponent = ({ title, poster, loading, spanTwo, rate, genre, id}) => {
  const genreQuery = useFetchMovieGenres();

  const [itemRate, setItemRate] = useState(false);
  const handleRate = (e) => {
    e.stopPropagation();
    setItemRate(!itemRate);
  };
  const [hoverState, setHoverState] = useState({
    card: false,
    chip: false,
  });

  const cardHoverEnterHandler = () => {
    setHoverState({ ...hoverState, card: true });
  };
  const cardHoverLeaveHandler = () => {
    setHoverState({ ...hoverState, card: false });
  };

  const filterGenre = () => {
    // filter genre api list to the props genre
    const res = genreQuery.data.genres.filter((item) =>
      genre.includes(item.id)
    );
    // then map it to get the name
    const mapped = res.map((item) => item.name);
    // then return the genre names array
    return mapped;
  };

  return (
    <motion.div
      //   whileHover={{ scale: 1.05, zIndex: 10 }}
      initial={{ zIndex: 1 }}
      whileTap={{ scale: 1 }}
      onMouseEnter={cardHoverEnterHandler}
      onMouseLeave={cardHoverLeaveHandler}
      onClick={() => alert(id)}
    >
      <Card
        variant="contained"
        className="cursor-pointer w-full h-fit p-0 bg-inherit relative rounded-xl space-y-1  hover:drop-shadow-xl "
      >
        {!loading && poster ? (
          <div className="relative w-full h-fit  	">
            <CardMedia
              component="img"
              className={`${
                spanTwo ? "h-60" : "h-48"
              } w-full object-cover rounded-xl `}
              title=""
              image={`https://image.tmdb.org/t/p/w500/${poster}`}
            />

            <div
              className={`h-full w-full absolute top-0 ${
                hoverState.card ? "bg-black/70" : "bg-black/30"
              }  transition-all ease-in-out duration-300  rounded-xl `}
            >
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
                  className={`bg-gray-900/30 absolute ${
                    spanTwo ? "top-2.5 left-2.5" : "top-1.5 left-1.5"
                  } px-2 py-0.5 text-[0.675rem]  text-color-400 font-semibold h-fit cursor-pointer`}
                  label={`${rate}`}
                  icon={<AiFillStar className={`text-color-400`}></AiFillStar>}
                  onClick={handleRate}
                ></Chip>
              </Tooltip>

              {/* play btn */}
              {spanTwo && hoverState.card && (
                <Box className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-color-300 font-thin text-5xl tra">
                  <BsPlayCircle></BsPlayCircle>
                </Box>
              )}
            </div>
          </div>
        ) : (
          <Skeleton
            variant="rectangular"
            animation="wave"
            className={`${
              spanTwo ? "h-60" : "h-48"
            } w-full bg-[#191920]   rounded-xl  `}
          ></Skeleton>
        )}

        <CardContent
          className={`flex flex-col absolute   rounded-b-xl box-border	 bottom-0  h-fit  ${
            spanTwo ? "items-start px-8 py-4" : "items-center px-2 py-3"
          } justify-center  w-full    drop-shadow-lg  pointer-events-none`}
        >
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
              <Stack
                spacing={0.5}
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                {spanTwo
                  ? // genre will only show when spanning two fr
                    !loading && genre
                    ? // on loading state or api does not throw genre it will render a 2 skeleton ship
                      filterGenre().map((itemList) => (
                        <Chip
                          label={itemList}
                          className=" py-0.5 px-1 capitalize text-[0.70rem] tracking-wide font-medium text-color-400 bg-color-500/20 h-fit"
                        ></Chip>
                      ))
                    : null
                  : null}
              </Stack>
            </Box>
          ) : (
            <Skeleton className="h-10">
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
