import React, { useState } from "react";
import { Task } from "../../../utils/interfaces/task";

const useTodo = () =>{

    //const [tasksList,setTasksList]=useState([{id:1,title:"Tarea 1"}]);
    
    const [tasksList,setTasksList]=useState<Task[]>([]);

    const [completedTasksList,setCompletedTasksList]=useState<Task[]>([]);
    
    const addTask = (title:string)=>{
        //Ya esta comunicado el componente con el estado
        //console.log("Entro al add task", title);
        
        //Crear un nuevo objeto
        
        const newTask: Task ={
            id :Math.floor(Math.random() * 200),
            title: title
        };
        
        //Tambien se lo puede hacer
        setTasksList([...tasksList,newTask]);
    };
    
    const deleteTask =(id:number)=>{};

    const completedTask =(id:number)=>{};

    return{
        tasksList,
        completedTasksList,
        addTask,
        deleteTask,
        completedTask,
    };
};

export default useTodo;