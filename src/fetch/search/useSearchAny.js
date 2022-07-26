
import { useState } from "react";
import axios from "axios";
const useSearchAny = () => {
  const key = "754cb358915af129a5a352e456f121ff";
  const [searchAnyResults, setSearchAny] = useState(null);
  const handleSearch = async (phrase) => {
      try {
          const response = await axios.get( `https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${phrase}&language=en-US&page=1&include_adult=false`);
          setSearchAny(response.data.results);
    } catch (error) {}

   
  };

  return {searchAnyResults,handleSearch};
};

export default useSearchAny;
