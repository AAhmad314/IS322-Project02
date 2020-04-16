import React from 'react';

const moveTask = (taskId, column, click, clkTxt,) =>
{
  if (click && clkTxt)
  {
    return (
      <div>
        <a href="#" class="card-link" onClick={onCardAction(taskId, column, click)}>
          { clkTxt }
        </a>
      </div>
    );
  }
  else {return <span/>;}
}

const onCardAction = (taskId, column, click) =>
{
  return () =>{click(taskId, column);};
}

const TaskCard = props =>
{
  return (
    <div class="task card">
      <div class="card">
        <h4>{ props.title }</h4>
        <div class="card-text">
          <div>ID: {props.id }</div> <div>Type: {props.type }</div>
          { moveTask(props.id, props.column, props.onPrevClick, props.prevTxt) }
          { moveTask(props.id, props.column, props.onNextClick,  props.nextTxt) }
        </div>
      </div>
     </div>
   );
}

export default TaskCard;
