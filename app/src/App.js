import React, { useState } from "react";
import "./App.css";
import feed from "./feed.json"

function App() {

  const [feedList, setFeedList] = useState(feed);


	return (
		<div className="App">
			<header>
				<h1> Plug</h1>
			</header>
		</div>
	);
}

export default App;
