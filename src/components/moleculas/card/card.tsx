import { FC } from "react";
import Button from "../../atoms/button/button";
import Checkbox from "../../atoms/checkbox/checkbox";
import "./card.scss";

interface CardProps
{
    //titulo para que se desplegue el nombre de la tarea
    title:string;

}


const Card:FC<CardProps> = ({title}) => {
  return (
    <div className="card">
        <Checkbox 
        title={title} 
        isChecked={false} 
        handleCheck={()=>{}}/>
        <Button onClick={()=>{}}>Eliminar</Button>
    </div>
  )
}

export default Card;

