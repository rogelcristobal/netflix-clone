import { useState, useContext } from "react";
import MovieContext from "./context/MovieContext";
import "rsuite/dist/rsuite.min.css";
import { Button, Toggle, Nav, Sidenav } from "rsuite";

function App() {
	const { upcomingMovies } = useContext(MovieContext);
	// bg-[#e1dfdd]
	const [expanded, setExpanded] = useState(true);
	const [activeKey, setActiveKey] = useState("1");
	return (
		<div className="font-outfit relative flex w-full  h-screen bg-neutral-100">
			{/* nav */}
			<div className="fixed top-0 left-0 w-full h-16 ">
				<div className="container h-full flex  px-4 justify-end mx-auto border-sample">
					{/* nav contents here */}
				</div>
			</div>

			{/* sidebar */}
			<div className=" w-96 h-full">
				{/* sidebar contents here */}

				<Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}>
					<Sidenav.Body className="h-[calc(100vh-4rem)]">
						<Nav activeKey={activeKey} onSelect={setActiveKey}>
							<Nav.Item eventKey="1" className="h-16 ">
								Dashboard
							</Nav.Item>{" "}
							{/*item*/}
							<Nav.Item eventKey="2">User Group</Nav.Item> {/*item*/}
							<Nav.Menu placement="rightStart" eventKey="3" title="Advanced">
								{" "}
								{/*drop down*/}
								<Nav.Item eventKey="3-1">Geo</Nav.Item>
								<Nav.Item eventKey="3-2">Devices</Nav.Item>
								<Nav.Item eventKey="3-3">Loyalty</Nav.Item>
								<Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
							</Nav.Menu>
							<Nav.Menu placement="rightStart" eventKey="4" title="Settings">
								{" "}
								{/*drop down*/}
								<Nav.Item eventKey="4-1">Applications</Nav.Item>
								<Nav.Item eventKey="4-2">Channels</Nav.Item>
								<Nav.Item eventKey="4-3">Versions</Nav.Item>
								<Nav.Menu eventKey="4-5" title="Custom Action">
									{" "}
									{/*inner drop down*/}
									<Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
									<Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
								</Nav.Menu>
							</Nav.Menu>
						</Nav>
					</Sidenav.Body>
					<Sidenav.Toggle
						expanded={expanded}
						onToggle={(expanded) => setExpanded(expanded)}
					/>
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
