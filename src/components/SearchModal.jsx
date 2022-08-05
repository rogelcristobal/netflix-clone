import React from 'react';

import { Paper } from "@mui/material";
const SearchModal = () => {
  return (
    <Paper variant='contained' className='lg:w-[60%] bg-[#191920] h-[24rem] rounded-xl drop-shadow-lg' onClick={(e)=>e.stopPropagation}>
    </Paper>
  );
}

export default SearchModal;
