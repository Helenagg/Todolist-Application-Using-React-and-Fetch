import React, { useEffect, useState } from "react";

const loading = false;

//create your first component
const Home = () => {
	
	const [loading, setLoading] = useState(true);
	const [task, setTask] = useState([]);
	const [inputValue, setInputValue] = useState("");

	useEffect (() => {
		//console.log('Hola');
		fetch('https://assets.breatheco.de/apis/fake/todos/user/helena', { method: 'GET' })
		.then(response => 
			response.json()
			).then(response => {
				//console.log(response),
				setLoading(false),
				setTask(response)
			}
	)}, []);

	const collectInput = (event) => {
		setInputValue(event.target.value);		
	}

	const addTask = () => {
		//task.push({"label":inputValue,"done":false})
		setTask(
			task.concat({"label":inputValue,"done":false})
		)
		fetch('https://assets.breatheco.de/apis/fake/todos/user/helena', {
			method: 'PUT',
			body: JSON.stringify(task.concat({"label":inputValue,"done":false})),
      		headers: {
        	"Content-Type": "application/json"
			}
		})
		.then(response =>
			response.json()
			.then(response => {
		
		}))

	}

	const deleteTask = (index) => {

		setTask(
			task.filter((task,element)=> element!==index)
		)
		fetch('https://assets.breatheco.de/apis/fake/todos/user/helena', {
			method: 'PUT',
			body: JSON.stringify(task.filter((task,element)=> element!==index)),
      		headers: {
        	"Content-Type": "application/json"
			}
		})
		.then(response =>
			response.json()
			.then(response => {
		
		}))


	}

	return (
		<>
			<div className="text-center pt-5">
				<h1>Task list</h1>
				<input placeholder="Add task" onChange={collectInput}></input>
				<p>{loading ? "Loading..." : <div  className="d-grid gap-2 col-3 p-5 mx-auto">{task.map((element, index) => { return <p className="border border-2 border-light">{element.label}  <button type="button" className="btn btn-outline-danger" onClick={() => deleteTask(index)}>X</button></p>})}
				<button onClick={addTask}>Add to task</button>
				</div>}</p>
			</div>
		</>
	);
};

export default Home;
//d-flex flex-column justify-content-center