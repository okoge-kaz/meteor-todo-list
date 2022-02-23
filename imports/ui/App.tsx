import { useTracker } from "meteor/react-meteor-data";
import React from "react";
import { Task } from "../../interfaces/task";
import { TasksCollection } from "../api/TasksCollection";
import { Hello } from "./Hello";
import { Info } from "./Info";
import { TaskExpress } from "./TaskExpress";

// const tasks: Task[] = [
// 	{ _id: 1, text: "This is task 1" },
// 	{ _id: 2, text: "This is task 2" },
// 	{ _id: 3, text: "This is task 3" },
// ];

export const App = () => {

	const tasks: Task[] = useTracker(() => {
		TasksCollection.find({}).fetch();
	});
  // void かもしれないので、処理を加える必要がある
  
	return (
		<div>
			<h1>Welcome to Meteor!</h1>
			<Hello />
			<Info />
			<ul>
				{tasks.map((task) => (
					<TaskExpress _id={task._id} text={task.text} />
				))}
			</ul>
		</div>
	);
};
