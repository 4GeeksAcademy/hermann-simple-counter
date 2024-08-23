import React from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Tempo} from "./counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="app" id="app">
			<Tempo />
		</div>
	);
};

export default Home;
