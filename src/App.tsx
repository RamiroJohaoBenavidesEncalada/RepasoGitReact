import Button from "./components/atoms/button/button";
import Checkbox from "./components/atoms/checkbox/checkbox";
import Counter from "./components/atoms/counter/counter";
import Input from "./components/atoms/input/input";
import Card from "./components/moleculas/card/card";
import TaskList from "./components/organisms/task-list/task-list";



import ToDo from "./components/templates/to-do/to-do";
import { TodoProvider } from "./context/todo-context/todo-context";


function App() {

  return (
    <>
      <Button onClick={() => console.log("Va a agregar")} >Agregar</Button>
      <Button onClick={() => console.log("Va a eliminar")} size="large" >Eliminar</Button>
      <Input
        value={""}
        name={""}
        onChange={() => console.log("Esta tipeando")}
        placeholder={"Titulo"}></Input>
      <Checkbox
        title="Tarea 1"
        isChecked={false}
        handleCheck={() => console.log("Entro al CheckBox")}></Checkbox>
      <Counter completedTasks={0} totalTasks={0} />
      <Card title="Tarea 1" />
      Task List Vacia
      <TaskList tasks={[]} />
      Task List No Vacía
      <TaskList
        tasks={[{ id: 1,  title: "Tarea 1" },
        { id: 2,  title: "Tarea 2" },
        { id: 3, title: "Tarea 3" },
        ]}
      />
      <br></br>
      Aqui ya va el Template ToDo
      <br></br>
      <TodoProvider>
        <ToDo/>
      </TodoProvider>
      
    </>);

}

export default App;
