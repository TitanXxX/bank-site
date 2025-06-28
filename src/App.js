import React from "react";
import Navbar from "./components/index.js";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import News from "./pages/news";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route exact path="/" element={<Home />} />
				<Route path="/news" element={<News />} />
			</Routes>
		</Router>
	);
}

export default App;
