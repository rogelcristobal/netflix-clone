import React from "react";
import { Box, Typography, Link, Paper, Grid } from "@mui/material";
import CardComponent from "./CardComponent";
const TripleCardComponent = ({ movie, title, isSpanTwo }) => {
	//   gets first 3 items in the returned array
	const selectItems = (endpoint, spanState) => {
		if (movie.isLoading) {
			// if loading = true
			if (spanState) {
				// if it has a span 
				return Array.from(new Array(2));
			} else {
				// span off
				return Array.from(new Array(5));
			}
		} else {
			// if it is not loading
			if (spanState) {
				// if it has a span 
				return endpoint.data?.results.slice(0, 2);
			} else {
				// span off
				return endpoint.data?.results.slice(0, 5);
			}
		}
	};
	// sample logs

	return (
		<Paper
			variant="contained"
			className="flex flex-col items-start justify-center w-full  h-fit bg-inherit  rounded-xl overflow-hidden px-4 box-border py-6 "
		>
			<Box className="flex items-center justify-between w-full h-auto mb-6">
				<Typography
					variant="p"
					className=" capitalize font-medium tracking-wide text-xl text-color-300"
				>
					{title}
				</Typography>
				<Link
					className="flex items-center justify-start text-xs  font-semibold  font-satoshi text-gray-700  "
					underline="none"
					component="button"
				>
					See More
					{/* <HiOutlineChevronDown className="text-lg  ml-4 font-bold"></HiOutlineChevronDown> */}
				</Link>
			</Box>

			{/* map only 5 item */}

			{isSpanTwo ? (
				<Grid container spacing={2.5} columns={4} className="px-2 box-border">
					{selectItems(movie,  true).map((item, id) => (
						<Grid item xs={id === 0 || id === 1 ? 2 : 2} key={id}>
							<CardComponent
								title={item?.title}
								poster={item?.backdrop_path}
								spanTwo={isSpanTwo}
							    genre={item?.genre_ids}
								rate={item?.vote_average}
							/>
						</Grid>
					))}
				</Grid>
			) : (
				<Grid container spacing={2} columns={5} className="px-2 box-border">
					{selectItems(movie, false).map((item, id) => (
						<Grid item xs={1} key={id}>
							<CardComponent
								title={item?.title}
								poster={item?.backdrop_path}
								spanTwo={isSpanTwo}
								
							    genre={item?.genre_ids}
								rate={item?.vote_average}
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
