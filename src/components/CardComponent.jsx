import React from "react";
import { motion } from "framer-motion";
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Skeleton,
	Tooltip,
	Zoom,
} from "@mui/material";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CardComponent = ({ data }) => {
	return (
		<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
			<Card
				variant="contained"
				className="cursor-pointer w-full h-fit pb-2 bg-inherit  "
				// onClick={() => alert(`${data.id}\n${data.title}`)}
			>
				{!data ? (
					<CardMedia
						component="img"
						className="h-48 w-full object-cover rounded-lg shadow-lg"
						title=""
						image={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
					/>
				) : (
					<Skeleton
						variant="rectangular"
						animation="wave"
						className="h-48  w-full  rounded-lg bg-color-300"
					></Skeleton>
				)}

				<CardContent className="flex flex-col relative p-2 ">
					{/* progress bar */}
					<Tooltip
						title={`vote average`}
						arrow
						followCursor
						placement="top-start"
						TransitionComponent={Zoom}
					>
						<div className="h-9 w-9 absolute -top-6 right-4  transition-all duration-300 ease-in-out hover:scale-[1.3]">
							<CircularProgressbar
								value={`${!data ? data?.vote_average : 0}`}
								maxValue={10}
								text={`${!data ? data?.vote_average : ""} `}
								styles={buildStyles({
									// Rotation of path and trail, in number of turns (0-1)
									rotation: 0,

									// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
									strokeLinecap: "butt",

									// Text size
									textSize: "2rem",

									// How long animation takes to go from one percentage to another, in seconds
									pathTransitionDuration: 0.5,

									// Can specify path transition in more detail, or remove it entirely
									// pathTransition: 'none',

									// Colors
									pathColor: `sky`,
									textColor: "gray",
									trailColor: "mediumgray",
								})}
								strokeWidth="12"
								className=" p-1 rounded-full bg-color-200 dark:bg-[#1b2635]"
							/>
						</div>
					</Tooltip>
					{!data ? (
						<>
							<Typography
								variant="p"
								className=" text-sm text-left tracking-wider mt-4 w-fit  text-color-400"
								color="initial"
							>
								{data?.title}

								{data?.name}
							</Typography>
						</>
					) : (
						<>
							<Skeleton className="h-8"></Skeleton>
						</>
					)}
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default CardComponent;
