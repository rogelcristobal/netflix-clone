import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { Paper, Skeleton, Typography, Button } from "@mui/material";

import TripleCardComponent from "../components/TripleCardComponent";

const MovieCategories = () => {
	const { nowPlayingMovie, upcomingMovies, popularMovies, topRatedMovies } =
		useContext(MovieContext);
	const randomMovie = () => {
		const movie =
			popularMovies?.results[
				Math.floor(Math.random() * popularMovies?.results.length)
			]?.backdrop_path;
		return movie;
	};
	return (
		<>
			<div className=" px-0 box-border   h-screen overflow-y-auto   w-full no-scrollbar ">
				<Paper
					variant="contained"
					className={`box-border px-12  py-14 pt-32 h-fit w-full rounded-t-none 
           flex-col flex items-start justify-center relative overflow-hidden`}
				>
					{/* {randomMovie()?.backdrop_path ? (
						<>
							<img
								src={`https://image.tmdb.org/t/p/w1280/${randomMovie()}`}
								alt=""
								className="absolute top-0 left-0 w-full h-full object-cover "
							/>
							<div className="absolute top-0 left-0 h-full w-full  z-5 bg-gradient-to-r from-black/70 to-transparent	"></div>
						</>
					) : (
						<Skeleton
							animation="wave"
							variant="rectangular"
							className="absolute top-0 left-0 w-full h-full bg-color-300"
						></Skeleton>
					)} */}

					<Typography variant="h4" className="text-white z-10">
						Welcome!
					</Typography>
					<Typography
						variant="p"
						className="capitalize text-lg mt-1 text-white z-10"
					>
						watch your favorite movie on the go.
					</Typography>
					{/* <div className="z-10 flex items-center justify-center p-2 w-full mt-14">
						<input
							placeholder={`${
								popularMovies ? `try searching.... ` : "search movies"
							}`}
							type="text"
							className="focus:outline-none px-4 rounded-full text-base font-outfit  py-3 h-6 border-0  bg-color-200 placeholder:capitalize placeholder:text-color-400 w-[90%] "
						/>
					</div> */}
				</Paper>

				<div className="h-auto   min-h-screen  flex flex-col items-start  justify-start    bg-inherit px-12 py-10  mb-16   space-y-2 rounded-lg bg-color-200">
					{/* contents here */}

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

			{/*page nav*/}
			<div className="w-80 mt-20 mx-4    h-80">
				{/* page nav contents here */}
				<Paper
					variant="contained"
					className="h-full   w-full rounded-lg bg-inherit "
				></Paper>
			</div>
		</>
	);
};

export default MovieCategories;
