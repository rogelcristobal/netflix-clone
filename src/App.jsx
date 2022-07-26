import { Routes, Route, NavLink } from "react-router-dom";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
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
	const [search, setSearch] = useState("");
	// const key = "754cb358915af129a5a352e456f121ff";
	// const [searchAnyResults, setSearchAny] = useState(null);
	// const [loading, setLoading] = useState(true);
	// const handleSearch = async (phrase) => {
	// 	try {
	// 		const response = await axios.get(
	// 			`https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${phrase}&language=en-US&page=1&include_adult=false`
	// 		);
	// 		setSearchAny(response.data.results);
	// 		setLoading(false);
	// 	} catch (error) {}
	// };
	// if (!loading) {
	// 	console.log(searchAnyResults);
	// 	setLoading(true);
	// }
	const { handleSearch, searchAnyResults, loading, setLoading } =
		useSearchAny();
	if (!loading) {
		console.log(searchAnyResults);
		setLoading(true);
	}
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
						<div className="font-outfit relative flex w-full   h-screen bg-[#1b2635] ">
							{/* nav */}
							<div className="fixed top-0 left-0 w-full h-14 z-10  ">
								<div className="container h-full flex  px-4 justify-end mx-auto  rounded-lg ">
									{/* nav contents here */}
									<Paper
										variant="contained"
										className="h-full w-[calc(100%-16rem)] bg-inherit flex items-center justify-between px-2"
									>
										<form
											onSubmit={(e) => {
												e.preventDefault();
												e.stopPropagation();
												handleSearch(search);
												setSearch("");
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
												// onClick={()=>setTheme(colorTheme)}
												></FiSearch>
											</IconButton>

											{/* search bar */}
											<input
												value={search}
												onChange={(e) => setSearch(e.target.value)}
												type="text"
												placeholder="search here "
												className="bg-inherit focus:bg-[#18222f]/75 appearance-none outline-none rounded-lg placeholder:capitalize w-72 py-3 px-3  leading-tight font-base focus:outline-none shadow-none border-none focus:shadow-outline placeholder:text-gray-700 text-white text-md transition-all ease duration-300"
											/>
										</form>
										<Button
											variant="text"
											className="bg-primary-300 rounded-lg px-5 py-1.5"
											onClick={() => nav("homepage/result")}
										>
											<Typography
												variant="p"
												className="text-color-100 text-sm tracking-wide capitalize"
											>
												sign in
											</Typography>
										</Button>
									</Paper>
								</div>
								{/* <Divider variant="middle"></Divider> */}
							</div>

							{/* sidebar */}
							<div className=" w-72 z-10 rounded-lg h-full ">
								{/* sidebar contents here */}
								<Paper
									variant="contained"
									className=" w-full  px-4 h-full pt-20 box-border bg-[#233044]"
									square
								>
									<Paper
										variant="contained"
										sx={{ overflow: "auto", boxSizing: "border-box" }}
										className="  h-fit py-2  rounded-lg  bg-inherit"
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
																	className={` rounded-xl  px-6  py-3 my-1 ${
																		isActive
																			? "bg-[#202c3f]"
																			: "hover:bg-[#202c3f]"
																	}`}
																>
																	<Typography
																		variant="p"
																		className={`capitalize  font-[400] tracking-wide  text-sm ml-4 ${
																			isActive
																				? "text-color-100"
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

							<div className="flex items-start justify-start pt-16 box-border">
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
