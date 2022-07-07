import { useState, useContext } from "react";
import MovieContext from "./context/MovieContext";
import "rsuite/dist/rsuite.min.css";
import { Button, Toggle, Nav, Sidenav } from "rsuite";
function App() {
  const { upcomingMovies, genre } = useContext(MovieContext);
 
  const [activeKey, setActiveKey] = useState("1");




  // styles
  const style={
    navItem:{
      fontWeight:500,
      fontSize: '0.9rem',
      lineHeight: '1.25rem',
      textAlign:'right'
      
    },
    navSubItem:{
      fontWeight:500,
      fontSize: '0.9rem',
      lineHeight: '1.25rem',
      textAlign:'right'
      
    },
    
  }
  return (
    <div className="font-outfit relative flex w-full  h-screen bg-[#f7f7fa]">
      {/* nav */}
      <div className="fixed top-0 left-0 w-full h-16 ">
        <div className="container h-full flex  px-4 justify-end mx-auto border-sample">
          {/* nav contents here */}
        </div>
      </div>

      {/* sidebar */}
      <div className=" w-96  h-full z-50 ">
        {/* sidebar contents here */}

        <Sidenav expanded={true} defaultOpenKeys={["2"]} className="  max-h-screen  h-screen">
          {" "}
          {/*(defaultOpenKey) what itemMenu is expanded*/}
          <Sidenav.Body className="w-full h-screen ">
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              {" "}
              {/*(activeKey) what item is active*/}
              <div className="h-16 w-full "></div>
              <Nav.Item eventKey="1" style={style.navItem}>Upcoming</Nav.Item>
              <Nav.Menu placement="rightStart" eventKey="2" className="border-sample" title="Genre" >
                <div className=" h-80  overflow-y-scroll py-2 pl-3">
                  {genre?.genres.map((item, id) => (
                    <Nav.Item  eventKey={`2-${id}`} key={id} style={style.navSubItem}>
                      {item.name}
                    </Nav.Item>
                  ))}
                </div>
              </Nav.Menu>
              <Nav.Menu placement="rightStart" eventKey="3" title="Settings" >
                <Nav.Item eventKey="3-1">Applications</Nav.Item>
                <Nav.Item eventKey="3-2">Channels</Nav.Item>
                <Nav.Item eventKey="3-3">Versions</Nav.Item>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>

      {/* body */}
      <div className=" px-10  h-screen overflow-y-auto no-scrollbar w-full">
        <div className="h-[200vh] mt-24 mb-16 w-full border-sample">
          {/* contents here */}
        </div>
      </div>

      {/*page nav*/}
      <div className="w-72 mt-24 ml-0 mr-8 border-sample h-96">
        {/* page nav contents here */}
      </div>
    </div>
  );
}

export default App;
