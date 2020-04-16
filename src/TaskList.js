import React from 'react';
import Task from './Task';
import TaskFilters from './TaskFilters';

import './css/TaskList.css';

class TaskList extends React.Component
{
    state = {sort: 'title', status: '', type: ''}
    
// Display all of the tasks in a list or table with all of the its properties displayed
//Be able to sort the list by Title, Status/Column, and Type
  changeSort(sort)
  {
    this.setState({ sort });
  }

  changeStatus(status)
  {
    this.setState({ status });
  }

  changeType(type)
  {
    this.setState({ type });
  }

  getFilteredTasks ()
  {
    let { tasks } = this.props;
    let { sort, status, type} = this.state;
    if (status)
    {
      tasks = tasks.filter(task => {return task.column === status;});
    }
    if (type)
    {
      tasks = tasks.filter(task => {return task.type === type;});
    }
    tasks = tasks.sort((a, b) =>
    {
      let nameA = a[sort].toUpperCase();
      let nameB = b[sort].toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
    })
    return tasks;
}

//Should be able to filter by Column/Status and Type, with a drop down include for each option
  render()
   {
    const filteredTasks = this.getFilteredTasks();
    const taskInfo = filteredTasks.map(task => {
    return <Task title={task.title}
                       key={task.id}
                       type={task.type}
                       column={task.column}
                       id={task.id}/>
    })

  return (
      <div class="list-view">
        <TaskFilters changeSort={this.changeSort.bind(this)}
                     changeStatus={this.changeStatus.bind(this)}
                     changeType={this.changeType.bind(this)} />

        <div class="list-view_columnHeader">
          <h3 class="taskTitle">Task</h3>
          <h3 class="taskStatus">Status</h3>
          <h3 class="taskType">Type</h3>
        </div>

        <ul class="list-group">{taskInfo}</ul>
      </div>
    );
  }
}

export default TaskList;
