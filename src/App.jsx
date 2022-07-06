import Typography from "./components/Typography";
function App() {
  
  return (
   <div className="font-outfit relative flex w-full  h-screen bg-[#e1dfdd]">
    {/* nav */}
    <div className="fixed top-0 left-0 w-full h-16 ">
      <div className="container h-full flex  px-4 justify-end mx-auto border-sample">
        {/* nav contents here */}
        <Typography>navbar</Typography>
      </div>
    </div>
    {/* sidebar */}
    <div className="border-sample w-96 h-full">
    {/* sidebar contents here */}
      <Typography>
          sidebar
      </Typography>
    </div>
    {/* body */}
    
    <div className=" px-14 py-12 h-screen overflow-y-auto no-scrollbar w-full">
      <div className="h-[200vh] mt-16 mb-16 w-full border-sample">
        {/* contents here */}
        <Typography>page content</Typography>
      </div>
    </div>
    

    {/*page nav*/}
    <div className="w-72 mt-28 mx-6 border-sample h-96">
      {/* page nav contents here */}
      <Typography>page navigation</Typography>
    </div>
   </div>




  );
}

export default App;
