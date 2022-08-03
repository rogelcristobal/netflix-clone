import request from "../api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useFetchPopularArtist = () => {
    const popularArtistQuery=useQuery(['popularArtist'],async()=>{
        const response = await axios.get(request.getPopularPeoples)
        return response.data 
    })
  return popularArtistQuery
}

export default useFetchPopularArtist;
