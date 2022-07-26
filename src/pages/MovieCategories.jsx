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
			<div className=" px-4 pt-2 box-border   h-full overflow-y-auto   w-full ">
				<div className="h-auto  min-h-full box-border flex flex-col items-start  justify-start    bg-inherit      space-y-2 rounded-lg">
					{/* contents here */}
					<Paper
						variant="contained"
						className=" h-60 w-full box-border flex items-end p-4 px-6 bg-[#233044] mb-6 rounded-xl"
					>
						<Box className="flex  items-center justify-between  w-fit mb-4">
							{/* <Typography
                variant="p"
                className="font-semibold capitalize tracking-wide text-4xl text-color-100 cursor-default"
              >
                welcome
              </Typography> */}
						</Box>
					</Paper>
					<div className="px-8 py-4">
						{/* categories */}

						{[
							{ title: "now playing", data: nowPlayingMovie },
							{ title: "popular now", data: popularMovies },
							{ title: "top rated movies", data: topRatedMovies },
							{ title: "upcoming movies", data: upcomingMovies },
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
			<div className="w-60   mx-4   h-80">
				<Paper
					variant="contained"
					className="h-full   w-full rounded-lg bg-inherit "
				></Paper>
			</div>
		</>
	);
};

export default MovieCategories;
