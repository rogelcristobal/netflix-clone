import React from 'react';
import { Chip } from '@mui/material';
const GenreChip = ({itemList,hoverState}) => {
  return (
    <Chip
   
    label={itemList}
    className={` py-0.5 px-1 capitalize text-[0.70rem] tracking-wide font-medium text-color-400 ${hoverState?'bg-gray-600/30 hover:bg-gray-400/30':'bg-gray-900/30 '} h-fit`}
  ></Chip>
  );
}

export default GenreChip;
