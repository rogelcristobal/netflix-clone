import request from '../api';
import axios from 'axios';
import { useEffect,useState } from 'react';
const useFetchOnAir = () => {
    const [onAir,setOnAir] = useState(null)
    const fetch=async()=>{
        try {
            const response = await axios.get(request.getOnAir)
            setOnAir(response.data)
        } catch (error) {
            
        }
    }
    useEffect(() => {
   fetch()
 }, []);
 return {onAir}
}

export default useFetchOnAir;
