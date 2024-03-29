import React from "react";
import { Chip } from "@mui/material";
import useFetchGenreByCategory from "../fetch/general/useFetchGenreByCategory";
const GenreChip = ({ itemID, sx, path }) => {
  const { data: genre } = useFetchGenreByCategory(path);

  const checking = genre?.genres
    .filter((item) => item.id === itemID)
    .map((item) => item.name);

  

  return (
    <Chip
      label={checking}
      className={` py-0.5 px-1 capitalize text-[0.70rem] tracking-wide font-medium text-color-400 ${sx} h-fit`}
    ></Chip>
  );
};

export default GenreChip;
