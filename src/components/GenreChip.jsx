
import React from 'react';
import { Chip } from '@mui/material';
import useFetchGenreByCategory from '../fetch/general/useFetchGenreByCategory';
const GenreChip = ({itemList,hoverState,path}) => {
  const {data:genre} = useFetchGenreByCategory(path,itemList)
  
  const checking = genre.genres.filter((item)=>item.id===itemList).map((item)=>item.name)
    
   
  
  
  return (
    <Chip
    label={checking}
    className={` py-0.5 px-1 capitalize text-[0.70rem] tracking-wide font-medium text-color-400 ${hoverState?'bg-gray-600/30 hover:bg-gray-400/30':'bg-gray-900/30 '} h-fit`}
  ></Chip>
  );
}

export default GenreChip;
