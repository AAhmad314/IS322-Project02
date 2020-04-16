import React from 'react';

import TaskCard from './TaskCard';
import './css/TaskBoard.css';

const COLUMN_NAMES = ['todo', 'in-progress', 'review', 'done'];

class TaskBoard extends React.Component
{
 // App component should manage it's own data, transmitted to the TaskBoard via props
  constructor(props)
  {
    super(props);
    this.onPrevClick = this.onPrevClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
  }

// Allow for the ability to move a task between columns
  findTask(taskId, taskStatus)
  {
    const columnTasks = (taskStatus === 'in-progress') ? this.props.tasks.inProgress : this.props.tasks[taskStatus];
    return columnTasks.find(task => task.id === taskId);
  }

  onPrevClick(taskId, taskStatus)
  {
    let task = this.findTask(taskId, taskStatus);
    let columnIndex = COLUMN_NAMES.findIndex(name => task.column === name);
    if (columnIndex > 0)
    {
      columnIndex--
      task.column = COLUMN_NAMES[columnIndex];
      this.props.updateTask(task);
    }
  }

  onNextClick(taskId, taskStatus)
  {
    let task = this.findTask(taskId, taskStatus);
    let columnIndex = COLUMN_NAMES.findIndex(name => task.column === name);
    if (columnIndex < COLUMN_NAMES.length)
    {
      columnIndex++
      task.column = COLUMN_NAMES[columnIndex];
      this.props.updateTask(task);
    }
  }

// Display all of the tasks in columns sorted by their status.
  renderCardColumn(post, prevTxt, nextTxt)
  {
    return (
      <TaskCard id={post.id}
                key={post.id}
                title={post.title}
                type={post.type}
                column={post.column}
                prevTxt={prevTxt}
                onPrevClick={this.onPrevClick}
                nextTxt={nextTxt}
                onNextClick={this.onNextClick}/>
    );
   }

  render()
  {
    const todoCards = this.props.tasks.todo.map(post => this.renderCardColumn(post, null, 'Start Work >'));
    const inProgressCards = this.props.tasks.inProgress.map(post => this.renderCardColumn(post, '< Send Back', 'Request Review >'));
    const reviewCards = this.props.tasks.review.map(post => this.renderCardColumn(post, '< More Work Required', 'Mark Done >'));
    const doneCards = this.props.tasks.done.map(post => this.renderCardColumn(post, '< Request Re-Review'));

    return (
      <div class="grid-view">
        <div class="grid-view_column">
          <h2 class="boardtitle">To Do</h2>
          <div class="grid-view_card-holder">{ todoCards } </div>
        </div>

        <div class="grid-view_column">
          <h2 class="boardtitle">In Progress</h2>
          <div class="grid-view_card-holder">{ inProgressCards }</div>
        </div>

        <div class="grid-view_column">
          <h2 class="boardtitle">Review</h2>
          <div class="grid-view_card-holder">{ reviewCards }</div>
        </div>

        <div class="grid-view_column">
          <h2 class="boardtitle">Done</h2>
          <div class="grid-view_card-holder">{ doneCards }</div>
        </div>
      </div>
    );
  }
}

export default TaskBoard;
