import React from 'react';
import axios from 'axios';
import NaviBar from './NaviBar';
import TaskBoard from './TaskBoard';
import TaskList from './TaskList';
import AddTask from './AddTask';

class App extends React.Component
{
    state =
    {
      view: 'grid',
      tasksDict: [],
      sortedTasks:
      {
        todo: [],
        inProgress: [],
        review: [],
        done: []
      },
      error: ''
    }

// API Requests to JSON Server should be made inside the App component
 getTasks()
  {
     axios.get(`http://my-json-server.typicode.com/bnissen24/project2DB/posts`).then
     (response => {this.setState({tasksDict: response.data, sortedTasks: this.sortTasks(response.data) });}).catch
     (error => {this.setState({ errorMessage: error.message });});
   }

 sortTasks(tasks)
  {
    return {
       todo: tasks.filter(post => post.column === 'todo'),
       inProgress: tasks.filter(post => post.column === 'in-progress'),
       review: tasks.filter(post => post.column === 'review'),
       done: tasks.filter(post => post.column === 'done'),
     }
   }

// App Component should be responsible making any updates to the data after it has been retrieved from the API
 updateTask(item)
  {
    let tasksDict = this.state.tasksDict;
    const index = tasksDict.findIndex(task => task.id === item.id);
    tasksDict[index] = item;
    const sortedTasks = this.sortTasks(tasksDict);
    this.setState({ tasksDict, sortedTasks })
  }

// When the form is submitted, the App component should be the one that adds it to the array of existing tasks.
 addTask(task)
  {
    let { tasksDict } = this.state;
    task.column = 'todo';
    task.id = this.state.tasksDict.length + 1;
    tasksDict.push(task);
    let sortedTasks = this.sortTasks(tasksDict);
    this.setState({ tasksDict, sortedTasks, view: 'grid' });
  }

 wrapPage(jsx)
  {
    const { view } = this.state;
    return (
       <div class="container">
        <NaviBar currentView={view}
        changeComp={this.changeComp.bind(this)}/>
        {jsx}
       </div>
    );
  }

 componentDidMount()
  {
    this.getTasks();
  }

 changeComp(view)
  {
    this.setState({ view });
  }

//App component should control which of the other 2-3 components are currently being viewed through conditional rendering
 render()
   {
     const { view } = this.state;
     switch (view)
      {
       case 'grid': return (this.wrapPage(
       <TaskBoard tasks={this.state.sortedTasks} updateTask={(task)=> this.updateTask(task)} />));
       case 'list': return (this.wrapPage(
       <TaskList tasks={this.state.tasksDict} />));
       case 'add': return (this.wrapPage(
       <AddTask onSubmit={this.addTask.bind(this)} />));
       default:
      }
    }
}
export default App;
