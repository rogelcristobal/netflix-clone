import request from '../api';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
const useFetchOnAir = () => {
   
    const onAirQuery = useQuery(['onAir'],async()=>{
        const response = await axios.get(request.getOnAir)
        return response.data
    })
    return onAirQuery
}

export default useFetchOnAir;
