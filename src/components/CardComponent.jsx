import React from "react";
import { motion } from "framer-motion";
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Skeleton,
} from "@mui/material";
const CardComponent = ({ data }) => {
	return (
		<motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 1 }}>
			<Card
				variant="contained"
				className="cursor-pointer w-full  bg-color-100 rounded-lg"
				// onClick={() => alert(`${data.id}\n${data.title}`)}
			>
				{data ? (
					<CardMedia
						component="img"
						className="h-32 w-full object-cover"
						title=""
						image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
					/>
				) : (
					<Skeleton
						variant="rectangular"
						animation="wave"
						className="h-32 w-full"
					></Skeleton>
				)}

				<CardContent className="flex flex-col px-4">
					{data ? (
						<Typography
							variant="p"
							className="font-semibold text-sm tracking-wide  text-color-500"
							color="initial"
						>
							{data.title}
						</Typography>
					) : (
						<Skeleton
							variant="rectangular"
							animation="wave"
							className="h-5 w-full"
						></Skeleton>
					)}
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default CardComponent;
