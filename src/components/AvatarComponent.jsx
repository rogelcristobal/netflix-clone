import { IconButton, Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import { IoPersonOutline } from "react-icons/io5";
const Avatar = ({ user }) => {
	const [data, setData] = useState(null);

	// stack overflow snippet getting first and last initials of a given name
	const getInitials = (fullName) => {
		const allNames = fullName.trim().split(" ");
		const initials = allNames.reduce((acc, curr, index) => {
			if (index === 0 || index === allNames.length - 1) {
				acc = `${acc}${curr.charAt(0).toUpperCase()}`;
			}
			return acc;
		}, "");
		return initials;
	};
	useEffect(() => {
		setData((prev) => (prev = getInitials(user))); // the returned value was pushed to the state
	}, [user]); // when user props changes will run the funtion again

	return (
		<IconButton
			variant="outlined"
			className={`h-9 w-9  rounded-full p-1 bg-[#191920]  transition-all ease-out duration-300 hover:text-gray-700 text-gray-400`}
		>
			{/* if user exist render initial or profile else default view */}
			{user ? (
				<span className=" capitalize font-medium font-satoshi text-sm ">
					{data}
				</span>
			) : (
				<IoPersonOutline className=" font-medium text-sm"></IoPersonOutline>
			)}
		</IconButton>
	);
};

Avatar.defaultProps = {
	colorGenerated: "#0096F3",
};
export default Avatar;

// psuedo code

/**
 * avatar(str)
 * run useEffect pass(str)
 * !str null return hex code  : primary-color
 *
 *
 *
 * */
