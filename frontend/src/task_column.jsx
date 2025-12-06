import React from 'react'
import "./task_column.css";

const Task = () => {
  return (
    <section className='board'>
    <div className="task_column">
          <div className="heading">
            <div className="left">To Do</div>
            <div className="right">Count</div>
          </div>
    </div>
    <div className="task_column">
          <div className="heading">
            <div className="left">In Progress</div>
            <div className="right">Count</div>
          </div>
    </div>
    <div className="task_column">
          <div className="heading">
            <div className="left">Done</div>
            <div className="right">Count</div>
          </div>
    </div>
    </section>
  )
}

export default Task
