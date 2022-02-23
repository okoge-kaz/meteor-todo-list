import React from "react";
import { Task } from "../../interfaces/task";

export const TaskExpress = (task: Task) => {
	return <li>{task.text}</li>;
};
