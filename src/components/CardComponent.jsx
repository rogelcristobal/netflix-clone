import React from 'react';

import { Card, CardMedia,CardContent, Typography} from "@mui/material";
const CardComponent = ({data}) => {
  return (
    <Card variant="outlined"   className="cursor-pointer w-full  bg-color-200 rounded-lg" onClick={()=>alert(`${data.id}\n${data.title}`)}>
      <div className='h-32 w-full bg-color-300'></div>
    {/* <CardMedia  component='img'
    className="h-32 w-full object-cover" title="" 
    image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} /> */}
    <CardContent className="flex flex-col px-4">
      <Typography variant="p" className="font-bold text-sm tracking-wide  text-color-black" color="initial">
        {data.title}
      </Typography>
      
    </CardContent>
    

  </Card>

  );
}


export default CardComponent;
