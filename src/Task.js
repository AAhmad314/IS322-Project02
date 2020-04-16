import React from 'react';
import './css/Task.css';

const Task = props => {
  return (
    <li class="list-group-item task_list">
      <div class="title"> {props.title} </div>
      <div class="status"> {props.column} </div>
      <div class="type"> {props.type} </div>
    </li>
  );
}
export default Task;
