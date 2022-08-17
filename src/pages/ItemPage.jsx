import { Paper } from "@mui/material";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams, useLocation } from "react-router-dom";
const ItemPage = () => {
  const { movieId } = useParams();
 
  

  const getItem = async(movieId)=>{
    console.log('accepted', movieId)
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US`)
    return data
  }

  const {data,isLoading} = useQuery(['movie', movieId], ()=> getItem(movieId)) 
  if(!isLoading)console.log(data.title)
  



  return (
    <>
      <Paper
        variant="contained"
        className=" bg-inherit  flex flex-col items-center justify-start    pt-20 w-full  h-full box-border"
        square
      >
        {/* scrollable content */}
        <div className="overflow-y-scroll overflow-x-hidden h-full w-full px-8 py-2  pb-72 box-border space-y-2 scroll-smooth	">
          <h5 className="text-white text-4xl">hello world {movieId}</h5>
        </div>
      </Paper>
      {/*page nav*/}

      <Paper
        variant="contained"
        className="w-60 mt-0 pt-20  box-border mx-6 bg-inherit  h-full "
      >
        <Paper
          variant="contained"
          className="  box-border pt-8 px-4 w-full rounded-xl bg-inherit flex flex-col items-left justify-start h-auto space-y-0"
        ></Paper>
      </Paper>
    </>
  );
};

export default ItemPage;
