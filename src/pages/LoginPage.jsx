import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import UserAuth from "../fetch/UserAuth";
const LoginPage = () => {
	const { loginQuery } = UserAuth();
	const { user, login, logout } = useContext(AuthContext);
	const [inputText, setTextInput] = useState({
		email: "",
		password: "",
	});
	const nav = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		e.stopPropagation();
		// loginQuery(inputText.email, inputText.password);

		try {
			await login(inputText.email, inputText.password);
		} catch (e) {
			alert(e.message);
		}
		setTextInput({
			email: "",
			password: "",
		});
	};
	// console.log(user);
	return (
		<div className="h-screen w-full bg-color-200 grid gap-20 grid-cols-12">
			<form
				onSubmit={handleSubmit}
				className="h-screen w-full col-start-9 box-border py-6 px-12 flex flex-col items-center justify-center space-y-8 bg-color-100 col-span-4 rounded-l-xl drop-shadow-xl"
			>
				<input
					required
					type="text"
					className="h-10 rounded-lg  outline-none border-none bg-color-200 w-72 placeholder:text-md placeholder:capitalize  placeholder:font-medium placeholder:tracking-wide placeholder:text-gray-400 px-6 box-border"
					placeholder="username"
					value={inputText.email}
					onChange={(e) => setTextInput({ ...inputText, email: e.target.value })}
				/>
				<input
					placeholder="password"
					type="password"
					className="h-10 rounded-lg  outline-none border-none bg-color-200 w-72 placeholder:text-md placeholder:capitalize placeholder:font-medium placeholder:tracking-wide placeholder:text-gray-400 px-6 box-border"
					value={inputText.password}
					onChange={(e) => setTextInput({ ...inputText, password: e.target.value })}
				/>
				<input
					type="submit"
					className="bg-primary-400 shadow-primary-400 shadow-lg hover:bg-primary-500 border-none py-2 w-52 rounded-xl cursor-pointer text-white  font-outfit text-base capitalize tracking-wide"
					value="sign in"
				/>
				<button onClick={logout}>logout</button>
			</form>
		</div>
	);
};

export default LoginPage;
