import React from 'react';

class AddTask extends React.Component
{
  state = { title: '', type: 'task'}


onSubmit(event)
 {
   event.preventDefault();
   this.props.onSubmit({ title: this.state.title, type: this.state.type });
 }

/*
A form that takes a Title and Type for your new task,
After the form is submitted, the User should be taken to the Board or List view
*/
 render()
  {
    return (
      <div class="task form"> <h3>Add Task</h3>
       <form onSubmit={this.onSubmit.bind(this)}>

       <div class="form-group_title"> <h5>Title</h5>
          <input placeholder="Enter Task" type="text" class="form-control" value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })} />
            <br></br>
       </div>

       <div class="form-group_type"> <h5>Type</h5>
          <select name="type" class="form-control" value={this.state.type}
            onChange={e => this.setState({ type: e.target.value })}>
              <option value="task">Task</option>
              <option value="feature">Feature</option>
              <option value="bug">Bug</option>
          </select>
          <br></br>
        </div>
       <input type="submit" class="add task" value="Add Task" />
       </form>
      </div>
    );
  }
}
export default AddTask;
