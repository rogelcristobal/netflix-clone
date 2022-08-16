import {
    Paper,
  } from "@mui/material";
  
  
  const ItemPage = () => {
   
  
    return (
      <>
        <Paper
          variant="contained"
          className=" bg-inherit  flex flex-col items-center justify-start    pt-20 w-full  h-full box-border"
          square
        >
          {/* scrollable content */}
          <div className="overflow-y-scroll overflow-x-hidden h-full w-full px-8 py-2  pb-72 box-border space-y-2 scroll-smooth	">
            <h5 className="text-white text-4xl">hello world</h5>
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
          >
            
            
           
          </Paper>
        </Paper>
      </>
    );
  };
  
  export default ItemPage;
  