import { useTodoContext } from "../../../context/todo-context/todo-context";
import useTodo from "../../../context/todo-context/use-todo/use-todo";
import Button from "../../atoms/button/button";
import Counter from "../../atoms/counter/counter";
import Input from "../../atoms/input/input";
import TaskList from "../../organisms/task-list/task-list";
import "./to-do.scss";
import useAddTask from "./use-add-task/use-add-task";

const ToDo = () => {

  const {tasksList,completedTasksList,addTask} = useTodoContext();

  const {title,handleChangeTitle,setTitle} = useAddTask();

  return (
    <div className="to-do">
        <h1 className="to-do__title">TODO LIST</h1>

        <div className="to-do__header">
            <Input 
            value={title} 
            name="addTask" 
            //onChange={()=>(console.log("Va a guardar")) } 
            onChange={handleChangeTitle}
            placeholder="Titulo"/>
            
            <Button 
            //onClick={()=>console.log("Va a agregar")}
            onClick={()=>{
              addTask(title)
              setTitle("");
            }}
            >Agregar
            </Button>
        </div>
        
        <TaskList tasks={tasksList}/>
        <div className="to-do__counter">
            <Counter completedTasks={completedTasksList.length} totalTasks={tasksList.length}/>
        </div>
        
    </div>
  )
}

export default ToDo