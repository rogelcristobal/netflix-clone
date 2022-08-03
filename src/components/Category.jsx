import React from 'react';
import {Box,CardContent, CardHeader} from '@mui/material'
import {FiStar} from 'react-icons/fi'
const Category = ({color,title,subTitle,avatar}) => {
  return (
    <Box component="div"  className={`capitalize text-white  ${color}  rounded-2xl tracking-wider cursor-pointer w-full`}>
        <CardContent className='p-1 w-full'>
            <CardHeader title={title} titleTypographyProps={{fontSize:'1rem',color:'white'}} subheaderTypographyProps={{fontSize:'0.7rem',color:'rgb(101, 119, 134)'}} 	 subheader={subTitle} avatar={avatar}/>
        </CardContent>
    </Box>
  );
}

Category.defaultProps={
    color: 'bg-gray-600/25',
    title: 'item',
    subTitle:'item subtitle',
    avatar: <FiStar className='text-xl text-color-500'/>
}
export default Category;


