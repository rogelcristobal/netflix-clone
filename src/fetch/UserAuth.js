import { useState, useEffect } from "react";
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useQuery } from "@tanstack/react-query";
export default function UserAuth() {
	const [user, setUser] = useState();
	// const loginQuery = useQuery(["logIn"], async (email, password) => {
	// 	return await signInWithEmailAndPassword(auth, email, password);
	// });
	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logout = () => {
		return signOut(auth);
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return { user, login, logout };
}
