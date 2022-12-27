import React, { FC } from 'react'
import { Task } from '../../../utils/interfaces/task'
import Card from '../../moleculas/card/card';
import "./task-list.scss";

interface TaskListProps
{
  tasks:Task[];
}

const TaskList:FC<TaskListProps> = ({tasks}) => {
  if(tasks.length===0) 
    return <h2 className='task-list__title'>La lista esta vacía</h2>
  return (
    <div className='task-list'>
      {tasks?.map((task,index)=>(
        <Card key ={`task-${index}`} title={task.title}/>
        
      ))}
    </div>
  );
};

export default TaskList;