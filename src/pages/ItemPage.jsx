import { Paper } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import useFetchItem from "../fetch/general/useFetchItem";
const ItemPage = () => {
  const { itemID } = useParams();
  const {pathname} = useLocation()

    
    const {data,isLoading}= useFetchItem(pathname,itemID)
    if(!isLoading)console.log(data) 

  
  return (
    <>
      <Paper
        variant="contained"
        className=" bg-inherit  flex flex-col items-center justify-start pt-20 w-full  h-full box-border"
        square
      >
        {/* scrollable content */}
        <div className="overflow-y-scroll overflow-x-hidden h-full w-full px-8 py-2  pb-72 box-border space-y-2 scroll-smooth	">
         
          <h5 className="text-white text-5xl mx-6  font-bold">{data?.title}{data?.name}</h5>
        </div>
      </Paper>
      {/*page nav*/}

      
    </>
  );
};

export default ItemPage;
