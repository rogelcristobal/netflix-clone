import React from "react";
import { Tooltip,IconButton,Zoom,Button } from "@mui/material";
import {RiSearchLine} from 'react-icons/ri'
const SearchAsButton = ({setSearchModal,searchModal,placeholder}) => {
  return (
    <Button
      variant="contained"
      onClick={() => setSearchModal(!searchModal)}
      className="bg-[#090b0f]/40 shadow-none capitalize tracking-wider py-1 font-base text-gray-600 rounded-lg w-60 flex justify-start mr-12 hover:text-color-300 text-xs transition ease-in-out duration-300 "
      startIcon={
        <Tooltip
          title="search"
          arrow
          placement="top-end"
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 300 }}
          enterDelay={1000}
        >
          <IconButton
            aria-label=""
            className="rounded-full text-inherit 
                          "
          >
            <RiSearchLine className=" font-medium text-sm"></RiSearchLine>
          </IconButton>
        </Tooltip>
      }
    >
      {placeholder}
    </Button>
  );
};

export default SearchAsButton;
