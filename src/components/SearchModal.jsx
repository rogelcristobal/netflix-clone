import React from 'react';
import { useState } from 'react';
import { Paper } from "@mui/material";
const SearchModal = () => {
    
    return (
    <Paper variant='contained' className='lg:w-[50%] bg-[#0d1117] p-6 box-border h-[24rem] rounded-xl drop-shadow-lg' onClick={(e)=>e.stopPropagation()}>
      <input type="text" placeholder='Search....' className='placeholder:text-color-500/30  w-full box-border h-12 bg-[#161b22] px-4 text-color-300 text-lg focus:outline-blue-400 focus:outline-none border-none rounded-xl ' />
    </Paper>
  );
}

export default SearchModal;
