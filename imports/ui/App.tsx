import React from "react";
import { Task } from "../../interfaces/task";
import { Hello } from "./Hello";
import { Info } from "./Info";
import { TaskExpress } from "./TaskExpress";

const tasks: Task[] = [
	{ _id: 1, text: "This is task 1" },
	{ _id: 2, text: "This is task 2" },
	{ _id: 3, text: "This is task 3" },
];

export const App = () => (
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
