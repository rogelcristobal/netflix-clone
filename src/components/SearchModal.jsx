import React from 'react';
import { TextField,FormControl,FilledInput,InputLabel } from '@mui/material';
import { useState } from 'react';
import { Paper } from "@mui/material";
const SearchModal = () => {
    const [state,setState]=useState('')
    
    return (
    <Paper variant='contained' className='lg:w-[60%] bg-[#191920] p-6 h-[24rem] rounded-xl drop-shadow-lg' onClick={(e)=>e.stopPropagation()}>
        
      <p>{state}</p>

    </Paper>
  );
}

export default SearchModal;
