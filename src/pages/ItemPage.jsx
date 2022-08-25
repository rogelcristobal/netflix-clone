import { Paper } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import useFetchItem from "../fetch/general/useFetchItem";
const ItemPage = () => {
  const { itemID } = useParams();
  const {pathname} = useLocation()

    
  const {data,isLoading}= useFetchItem(pathname,itemID)
    

  
  return (
    <>
      <Paper
        variant="contained"
        className=" bg-inherit  flex flex-col items-center justify-start pt-0 w-full  h-full box-border"
        square
      >
        {/* scrollable content */}
        <div className="overflow-y-scroll overflow-x-hidden h-full w-full px-0   pb-72 box-border space-y-2 scroll-smooth	">
          <div className="h-[26rem]  w-full relative box-border  overflow-hidden">
            <img className="h-full  w-full object-cover " src={`https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`} alt="" />
             <div className="h-full w-full absolute top-0 left-0  backdrop-brightness-40	bg-gradient-to-t from-[#0d1117]"></div>
             <h5 className=" absolute -bottom-12 left-16 text-white text-6xl   font-bold box-border">{data?.title}{data?.name}</h5>
          </div>
         
        </div>
      </Paper>
      {/*page nav*/}

      
    </>
  );
};

export default ItemPage;
