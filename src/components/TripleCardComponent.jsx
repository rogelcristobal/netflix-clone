import React from "react";
import { Box, Typography, Link, Paper, Grid } from "@mui/material";
import CardComponent from "./CardComponent";
const TripleCardComponent = ({ movie, title, isSpanTwo }) => {
	//   gets first 3 items in the returned array
	const selectFourItem = (endpoint, state) => {
		if (movie.isLoading) {
			if (!state) {
				return Array.from(new Array(4));
			} else {
				return Array.from(new Array(5));
			}
		} else {
			if (!state) {
				return endpoint.data?.results.slice(0, 4);
			} else {
				return endpoint.data?.results.slice(0, 5);
			}
		}
	};
	// sample logs

	return (
		<Paper
			variant="outlined"
			className="flex flex-col items-start justify-center w-full  h-fit bg-inherit  rounded-xl overflow-hidden px-6 box-border py-6 "
		>
			<Box className="flex items-center justify-between w-full h-auto mb-6">
				<Typography
					variant="p"
					className=" capitalize font-medium tracking-wide text-xl text-color-black"
				>
					{title}
				</Typography>
				<Link
					className="flex items-center justify-start text-sm  font-outfit text-gray-700  "
					underline="none"
					component="button"
				>
					See More
					{/* <HiOutlineChevronDown className="text-lg  ml-4 font-bold"></HiOutlineChevronDown> */}
				</Link>
			</Box>

			{/* map only 5 item */}

			{isSpanTwo ? (
				<Grid container spacing={2} columns={6} className="px-4 box-border">
					{selectFourItem(movie, false).map((item, id) => (
						<Grid item xs={id === 0 || id === 1 ? 2 : 1} key={id}>
							<CardComponent
								title={item?.title}
								poster={item?.poster_path}
								subheader={id}
							/>
						</Grid>
					))}
				</Grid>
			) : (
				<Grid container spacing={2} columns={5} className="px-6 box-border">
					{selectFourItem(movie, true).map((item, id) => (
						<Grid item xs={1} key={id}>
							<CardComponent
								title={item?.title}
								poster={item?.poster_path}
								subheader={id}
							/>
						</Grid>
					))}
				</Grid>
			)}
		</Paper>
	);
};
TripleCardComponent.defaultProps = {
	title: "section title",
	isSpanTwo: false,
};

export default TripleCardComponent;
