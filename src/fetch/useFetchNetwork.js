import request from "./api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useFetchNetwork = () => {
  const networkQuery = useQuery(['network'],async()=>{
    const response = await axios.get(request.getNetwork)
    return response.data
  })
  return networkQuery
}

export default useFetchNetwork;
