import { Box, Typography, Paper } from "@mui/material";
import SearchContext from "../context/SearchContext";
import { useContext } from "react";
const SearchResults = () => {
	const { searchAnyResults, loading, setLoading } = useContext(SearchContext);
	if (!loading) {
		console.log(searchAnyResults);
	}
	return (
		<>
			<div className=" px-4 pt-2 box-border   h-full overflow-y-auto   w-full ">
				<div className="h-auto  min-h-full  box-border flex flex-col items-start  justify-start    bg-inherit      space-y-2 rounded-lg">
					{/* contents here */}

					<Box className="flex  items-center justify-between px-4 w-fit mb-4">
						<Typography
							variant="p"
							className="font-semibold capitalize tracking-wide text-3xl text-[#233044]/75 cursor-default"
						>
							Search results
						</Typography>

						{loading ? (
							<p>loading</p>
						) : (
							searchAnyResults?.map((x, key) => (
								<p key={key}>
									{x.title}
									{x.name}
								</p>
							))
						)}
					</Box>
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

export default SearchResults;
