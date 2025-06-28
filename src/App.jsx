import React from "react";
import Navbar from "./components/index.jsx";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import {About, Home, News} from "./pages";

function App() {
	const links = [
		{path: "/about", title: "About", element: <About />},
		{path: "/", title: "Home", element: <Home />},
		{path: "news", title: "News", element: <News />},
	];
	return (
		<Router>
			<Navbar links = {links}/>
			<Routes>
				{links.map((r, key) =>
					<Route key={key} path={r.path} element={r.element} />
				)}
			</Routes>
		</Router>
	);
}

export default App;
