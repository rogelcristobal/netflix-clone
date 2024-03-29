import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./app/store";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthContext";
import { SearchProvider } from "./context/SearchContext";
import { HashRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(

	<Provider store={store}>
		<HashRouter>
			<AuthProvider>
					<SearchProvider>
							{/* <React.StrictMode> */}
							<App />
							{/* </React.StrictMode> */}
					</SearchProvider>
				</AuthProvider>
		</HashRouter>
	</Provider>
	
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
