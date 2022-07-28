import { Routes, Route, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMenu } from "react-icons/fi";
import SearchContext from "./context/SearchContext";
// pages
import MovieCategories from "./pages/MovieCategories";
import TVCategories from "./pages/TVCategories";
import SearchResults from "./pages/SearchResults";
// MUI
import {
	Paper,
	Typography,
	ListItem,
	Button,
	ListItemButton,
	List,
	IconButton,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";
import useSearchAny from "./fetch/search/useSearchAny";
function App() {
	const nav = useNavigate();
	const theme = createTheme({
		typography: {
			fontFamily: ["outfit", "Supreme", "Clash Display", "sans-serif"].join(
				","
			),
			palette: {
				primary: {
					main: "rgb(17, 24, 39)",
				},
			},
		},
	});
	// styles
	// #1b2635
	// #233044
	const [navStat, setNavStat] = useState(false);
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route
					path="/"
					element={
						<div className="h-96 w-96 bg-blue-300 grid place-content-center">
							put log in here
							<button onClick={() => nav("/homepage")}>go home</button>
						</div>
					}
				></Route>
				<Route
					path="/homepage/*"
					element={
						<div className="font-outfit relative flex w-full   h-screen bg-color-100 ">
							{/* nav */}
							<div className="fixed top-0 left-0 w-full h-14 z-10  ">
								<div className="container h-full flex  px-4 justify-end mx-auto  rounded-lg ">
									{/* nav contents here */}
									<Paper
										variant="contained"
										className={`h-full ${
											!navStat ? "w-[calc(100%-14rem)]" : "w-full"
										}  bg-inherit flex items-center justify-between px-2 transition-all duration-300 ease-in-out`}
									>
										{/* <form
											onSubmit={(e) => {
												e.preventDefault();
												e.stopPropagation();
												handleSearch(search);
												setSearch("");
												nav("homepage/result");
											}}
											className="flex items-center justify-center space-x-4"
										>
											<IconButton
												type="submit"
												aria-label="search"
												size="small"
												className="text-gray-700 space-x-4  hover:text-color-300 hover:bg-[#18222f]"
											>
												<FiSearch
												
												></FiSearch>
											</IconButton>

											
											<input
												value={search}
												onChange={(e) => setSearch(e.target.value)}
												type="text"
												placeholder="search here "
												className="bg-inherit focus:bg-[#18222f]/75 appearance-none outline-none rounded-lg placeholder:capitalize w-72 py-3 px-3  leading-tight font-base focus:outline-none shadow-none border-none focus:shadow-outline placeholder:text-gray-700 text-white text-md transition-all ease duration-300"
											/>
										</form> */}
										<IconButton
											type="submit"
											aria-label="search"
											size="small"
											className="text-color-400 bg-primary-100 rounded-lg space-x-4  "
											onClick={() => {
												setNavStat(!navStat);
											}}
										>
											<FiMenu></FiMenu>
										</IconButton>

										<IconButton
											type="submit"
											aria-label="search"
											size="small"
											className="text-color-400 bg-primary-100  rounded-lg"
										>
											<FiUser></FiUser>
										</IconButton>
									</Paper>
								</div>
								{/* <Divider variant="middle"></Divider> */}
							</div>

							{/* sidebar */}
							<div
								className={`${
									!navStat ? "w-72" : "w-0"
								} z-10 rounded-lg h-full overflow-x-hidden transition-all duration-300 ease-in-out`}
							>
								{/* sidebar contents here */}
								<Paper
									variant="contained"
									className=" w-full  flex flex-col items-end justify-start px-4 h-full pt-20 box-border bg-inherit"
									square
								>
									<Paper
										variant="contained"
										sx={{ overflow: "auto", boxSizing: "border-box" }}
										className="  h-fit py-2 w-52 rounded-lg  bg-inherit"
									>
										<List>
											{[
												{
													path: "/",
													title: "movies",
												},
												{
													path: "/tvShows",
													title: "tv shows",
												},
											].map((item, id) => (
												<NavLink
													to={`/homepage${item.path}`}
													key={id}
													className="no-underline "
												>
													{({ isActive }) => (
														<>
															<ListItem disablePadding>
																<ListItemButton
																	className={` rounded-lg px-6  py-3 my-1 ${
																		isActive
																			? "bg-primary-100"
																			: "hover:bg-[#202c3f]"
																	}`}
																>
																	<Typography
																		variant="p"
																		className={`capitalize  font-[400] tracking-wide  text-sm  ${
																			isActive
																				? "text-color-500"
																				: "text-color-500"
																		}	`}
																	>
																		{item.title}
																	</Typography>
																</ListItemButton>
															</ListItem>
														</>
													)}
												</NavLink>
											))}
										</List>
									</Paper>
								</Paper>
							</div>

							{/* body */}

							<div className="flex items-start justify-start w-full pt-16 box-border">
								<Routes>
									<Route path="/" element={<MovieCategories />}></Route>
									<Route path="/result" element={<SearchResults />}></Route>
									<Route path="/tvShows" element={<TVCategories />}></Route>
									<Route path="/forRent" element={<MovieCategories />}></Route>
								</Routes>
							</div>
						</div>
					}
				></Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
// https://dribbble.com/shots/6839523-Music-App
// https://berrydashboard.io/free/
