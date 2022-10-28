import React, { useEffect, useState } from "react";

const loading = false;

//create your first component
const Home = () => {

	//const list = ['Hello', 'Hello','Hello']	
	const [loading, setLoading] = useState(true);
	const [task, setTask] = useState([]);

	useEffect (() => {
		//console.log('Hola');
		fetch('https://assets.breatheco.de/apis/fake/todos/user/testApiFs27', {method: 'GET'})
		.then(response => 
			response.json()
			).then(response => {
				//console.log(response),
				setLoading(false),
				setTask(response)
			}
	)}, []);

	return (
		<>
			<div className="text-center pt-5">
				<h1>Task list</h1>
				{loading ? "Loading..." : <div  className="d-flex flex-column justify-content-center">{task.map(element => { return <p className="border border-2 border-light">{element.label}</p>})}
				</div>}
			</div>
		</>
	);
};

export default Home;
