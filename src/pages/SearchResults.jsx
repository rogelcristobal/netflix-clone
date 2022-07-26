import { Box, Typography, Link, Paper } from "@mui/material";

const SearchResults = () => {
	return (
		<>
			<div className=" px-4 pt-2 box-border bg-green-400  h-full overflow-y-auto   w-full ">
				<div className="h-auto  min-h-screen box-border flex flex-col items-start  justify-start    bg-blue-600     space-y-2 rounded-lg">
					{/* contents here */}
				</div>
			</div>

			{/*page nav*/}
			<div className="w-60   mx-4   h-80">
				<Paper
					variant="contained"
					className="h-full   w-full rounded-lg bg-red-500 "
				></Paper>
			</div>
		</>
	);
};

export default SearchResults;
