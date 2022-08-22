import request from "../api";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const useFetchShowGenre = () => {
  const fetch = async () => {
    const { data } = await axios.get(request.getShowGenre);
    return data;
  };
  const {data,isLoading,isError,error} = useQuery(["showGenre"], fetch);
  return {data,isLoading,isError,error};
};

export default useFetchShowGenre;
