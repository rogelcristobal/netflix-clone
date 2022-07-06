import { useContext } from "react";
import MovieContext from './context/MovieContext'
import 'rsuite/dist/rsuite.min.css';
import { Button } from 'rsuite'

function App() {
  const {upcomingMovies} = useContext(MovieContext)
  // bg-[#e1dfdd]
  return (
   <div className="font-outfit relative flex w-full  h-screen bg-neutral-100">


    {/* nav */}
    <div className="fixed top-0 left-0 w-full h-16 ">
      <div className="container h-full flex  px-4 justify-end mx-auto border-sample">
        {/* nav contents here */}
      </div>
    </div>


    {/* sidebar */}
    <div className="border-sample w-96 h-full">
    {/* sidebar contents here */}
    <Button appearance="primary" size="sm" loading> Hello world </Button>
    </div>

    {/* body */}
    <div className=" px-12 py-12 h-screen overflow-y-auto no-scrollbar w-full">
      <div className="h-[200vh] mt-16 mb-16 w-full border-sample">
        {/* contents here */}
        
      </div>
    </div>
    

    {/*page nav*/}
    <div className="w-72 mt-28 ml-0 mr-8 border-sample h-96">
      {/* page nav contents here */}
    </div>
   </div>




  );
}

export default App;
