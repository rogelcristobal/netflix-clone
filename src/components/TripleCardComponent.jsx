import React from "react";
import { Box, Typography, Link, Paper, Grid } from "@mui/material";
import CardComponent from "./CardComponent";
const TripleCardComponent = ({ movies, title }) => {
	//   gets first 3 items in the returned array
	const fetchThreeItem = (endpoint) => {
		return endpoint?.results.slice(0, 5);
	};

	return (
		<div className="flex flex-col items-start justify-start w-full  py-3 px-3">
			{/* title and CTA */}

			{/* used paper as a container */}
			<Paper
				component="div"
				variant="outlined"
				className=" h-full w-[62rem]   py-6 px-6 flex flex-col items-center justify-center rounded-xl bg-color-100"
			>
				<Box className="flex items-center justify-between w-full  mb-8">
					<Typography
						variant="h6"
						className="font-semibold capitalize relative text-2xl text-color-black tracking-wide cursor-default"
					>
						{title}
					</Typography>
					<Link
						underline="none"
						component="button"
						variant="p"
						className="text-sm hover:text-color-primary   font-outfit capitalize text-color-400"
						onClick={() => {
							alert("I'm a button.");
						}}
					>
						see all
					</Link>
				</Box>

				{/* map only 5 item */}
				<Grid container spacing={2} columns={6} className="w-full">
					{(!movies ? Array.from(new Array(6)) : fetchThreeItem(movies)).map(
						(item, id) => (
							<Grid item xs={id == 0 ? 2 : 1} key={id}>
								<CardComponent data={item} />
							</Grid>
						)
					)}
				</Grid>
			</Paper>
		</div>
	);
};

export default TripleCardComponent;
