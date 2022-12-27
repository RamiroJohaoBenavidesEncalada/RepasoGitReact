import { FC } from "react";
import "./counter.scss";

interface CounterProps
{
    completedTasks: number;
    totalTasks: number;

}

const Counter:FC<CounterProps> = ({completedTasks,totalTasks}) =>
{
    return <div className="counter">
        <span className="counter__description">{completedTasks} de {totalTasks} tareas completadas</span>
    </div>
}

export default Counter;