import React from "react";
import {  Button } from "@mui/material";
import { RiSearchLine } from "react-icons/ri";
const SearchAsButton = ({ setSearchModal, searchModal, placeholder }) => {
  return (
    <Button
      variant="contained"
      onClick={() => setSearchModal(!searchModal)}
      className="bg-[#090b0f]/40 h-10 shadow-none capitalize tracking-wider py-1 font-base  rounded-lg w-60 flex justify-start mr-12 hover:text-color-100 text-color-400 text-xs transition ease-in-out duration-300"
      startIcon={
        <RiSearchLine className=" font-medium  text-inherit text-sm"></RiSearchLine>
      }
    >
      {placeholder}
    </Button>
  );
};

export default SearchAsButton;
