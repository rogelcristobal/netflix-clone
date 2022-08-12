import { useState } from "react";
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
} from "@mui/material";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const CardComponent = ({ title, poster, loading, spanTwo, rate }) => {
  const [itemRate, setItemRate] = useState(false);
  const handleRate = (e) => {
    e.stopPropagation();
    setItemRate(!itemRate);
  };
  const [hoverState, setHoverState] = useState({
    card: false,
    chip: false,
  });

  return (
    <motion.div
      whileHover={{ scale: 1.05, zIndex: 10 }}
      initial={{ zIndex: 1 }}
      whileTap={{ scale: 1 }}
      onMouseEnter={() => setHoverState({ ...hoverState, card: true })}
      onMouseLeave={() => setHoverState({ ...hoverState, card: false })}
      onClick={() => alert("clicked card")}
    >
      <Card
        variant="contained"
        className="cursor-pointer w-full h-fit p-0 bg-inherit relative rounded-xl space-y-1  hover:drop-shadow-xl "
        // onClick={() => alert(`${!data.id}\n${!data.title}`)}
      >
        {loading || poster ? (
          <div className="relative w-full h-fit  	">
            <CardMedia
              component="img"
              className={`${
                spanTwo ? "h-60" : "h-48"
              } w-full object-cover rounded-xl `}
              title=""
              image={`https://image.tmdb.org/t/p/w500/${poster}`}
            />

            <div className="h-full w-full absolute top-0 hover:bg-black/60 bg-black/30 transition-all ease-in-out duration-300  rounded-xl ">
              <Chip
                variant="contained"
                className="bg-gray-900/50 absolute top-2 left-2 px-2 py-0.5 text-xs text-color-400 font-medium h-fit cursor-pointer"
                label={`${rate}`}
                icon={
                  itemRate ? (
                    <AiFillStar
                      className={`text-yellow-400`}
                    ></AiFillStar>
                  ) : <AiOutlineStar  className={`font-medium text-color-500`}>

				  </AiOutlineStar>
                }
                onClick={handleRate}
                onMouseEnter={() =>
                  setHoverState({ ...hoverState, chip: true })
                }
                onMouseLeave={() =>
                  setHoverState({ ...hoverState, chip: false })
                }
              ></Chip>
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
          className={`flex flex-col absolute   rounded-b-xl box-border	 bottom-0 py-6 h-fit  ${
            spanTwo ? "items-start px-6" : "items-center px-4"
          } justify-center  w-full    drop-shadow-lg  pointer-events-none`}
        >
          {loading || title ? (
            <Box className="flex items-center justify-between w-full">
              <Typography
                variant="p"
                className="  font-medium text-sm font-outfit tracking-wider text-gray-100 text-center max-w-[90%]"
              >
                {title}
              </Typography>
            </Box>
          ) : (
            <>
              <Skeleton className="h-6 bg-inherit ">
                <CardHeader
                  className="capitalize tracking-wide "
                  titleTypographyProps={{ fontSize: "0.8rem", fontWeight: 600 }}
                  title="item title"
                />
              </Skeleton>
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CardComponent;
