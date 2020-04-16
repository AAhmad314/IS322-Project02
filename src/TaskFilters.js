import React from 'react';


class TaskFilters extends React.Component
{
  state = {sort: 'title', status: '', type: ''}

  render()
  {
    return(
      <div class="list_filters">

        <div class="form-group_sort"><h6>Sort</h6>
          <select name="sort" class="form-control" value={this.state.sort}
            onChange={e => {this.setState({ sort: e.target.value })
            this.props.changeSort(e.target.value);}}>
              <option value="title">Title</option>
              <option value="column">Status</option>
              <option value="type">Type</option>
          </select>
          <br></br>
        </div>

        <div class="form-group_status"><h6>Status</h6>
         <select name="status" class="form-control" value={this.state.status}
           onChange={e => {this.setState({ status: e.target.value })
           this.props.changeStatus(e.target.value);}}>
             <option value="">Select Status</option>
             <option value="todo">To Do</option>
             <option value="in-progress">In Progress</option>
             <option value="review">Review</option>
             <option value="done">Done</option>
         </select>
         <br></br>
        </div>

        <div class="form-group_type"><h6>Type</h6>
          <select name="type" class="form-control" value={this.state.type}
            onChange={e => {this.setState({ type: e.target.value })
            this.props.changeType(e.target.value);}}>
             <option value="">Select Status</option>
             <option value="task">Task</option>
             <option value="feature">Feature</option>
             <option value="bug">Bug</option>
          </select>
          <br></br>
        </div>
      </div>
    );
  }
}

export default TaskFilters;
