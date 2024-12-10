import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ToDoList } from "./ToDoList.jsx";

//create your first component
const Home = () => {

	return (
		<div className="container">
			<ToDoList/>
		</div>
	);
};

export default Home;
