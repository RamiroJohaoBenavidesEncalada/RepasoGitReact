import React, { createContext, FC, useContext } from "react";
import { Task } from "../../utils/interfaces/task";
import useTodo from "./use-todo/use-todo";

//Necesitamos dos arrays un array de tareas se enfoque en los totales
//Un array de tareas que estan completadas

export interface TodoStateContext
{
    tasksList:Task[];
    completedTasksList:Task[];
    addTask:(title: string) => void;
    deleteTask:(id:number)=>void;
    completedTask:(id: number)=>void;
    
}
//Provider componente padre que envuelve a sus hijos

export interface TodoProviderProps
{
    children:React.ReactNode;
}

export const TodoContext = createContext<TodoStateContext>(
    {} as unknown as TodoStateContext
);

//se usa un costume hook para no estar importando el contexto cada rato
export const useTodoContext =() => useContext(TodoContext);


export const TodoProvider:FC<TodoProviderProps>=({children})=>{
    const values = useTodo();
    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
};
