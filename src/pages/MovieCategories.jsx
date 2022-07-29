import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import TripleCardComponent from "../components/TripleCardComponent";
import { Box, Typography, Link, Paper } from "@mui/material";

const MovieCategories = () => {
	const {
		nowPlayingMovie,
		upcomingMovies,
		popularMovies,
		topRatedMovies,
		latestMovie,
	} = useContext(MovieContext);
	return (
		<>
			<div className=" px-4 pt-2 box-border flex flex-col items-center justify-start  h-full overflow-y-auto space-y-5  w-full ">
				<div className="h-auto  min-h-full   box-border flex flex-col items-start  justify-start    bg-[#151920] gap-8   w-full   rounded-xl">
					
					<div className="px-4 space-y-5 py-4 h-auto  ">
					<div class="w-72 h-72 bg-[#161c24] bg-opacity-1 backdrop-blur-lg rounded-xl  "></div>
             
						

						{[
							{ title: "now playing", data: nowPlayingMovie },
							// { title: "popular now", data: popularMovies },
							// { title: "top rated movies", data: topRatedMovies },
							// { title: "upcoming movies", data: upcomingMovies },
						].map((item, id) => (
							<TripleCardComponent
								key={id}
								title={item.title}
								movies={item.data}
							></TripleCardComponent>
						))}
					</div>
				</div>
			</div>

			{/*page nav*/}
			{/* <div className="w-60 mt-2  mx-4   h-80">
				<Paper
					variant="outlined"
					className="h-full   w-full rounded-lg bg-inherit "
				></Paper>
			</div> */}
		</>
	);
};

export default MovieCategories;
