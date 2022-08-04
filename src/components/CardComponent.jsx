import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardMedia,
  CardContent,
  Skeleton,
  CardHeader, Typography,
} from "@mui/material";

const CardComponent = ({ title,poster,subheader }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
      <Card
        variant="contained"
        
        className="cursor-pointer w-full h-fit p-0 bg-inherit relative rounded-xl space-y-1"
        // onClick={() => alert(`${!data.id}\n${!data.title}`)}
      >
        {!poster ? (
          <CardMedia
            component="img"
            className="h-40 w-full object-cover rounded-2xl "
            title=""
            image={`https://image.tmdb.org/t/p/w500/${poster}`}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            animation="wave"
            className="h-40 w-full bg-[#22232e]   rounded-2xl"
          ></Skeleton>
        )}

        <CardContent className="flex flex-col  h-16 items-start justify-center p-0 w-full ">
          {title ? (
            <>
              <Typography variant="p" className="text-sm font-outfit font-medium text-gray-400" >{title}</Typography>
            </>
          ) : (
            <>
              <Skeleton className="h-12 bg-inherit">
              <CardHeader
                className="capitalize tracking-wide"
                titleTypographyProps={{ fontSize: "0.8rem",fontWeight:600 }}
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
