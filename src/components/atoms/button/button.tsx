import React from 'react';
import './button.scss';
import { FC } from 'react';

interface ButtonProps
{
    //Se puede enviar cualquier etiqueta de elemennto JSX
    children:React.ReactNode;
    //modificadores
    size?:"small"|"large";
    //funcion 
    onClick:()=>void;
}

const Button: FC<ButtonProps> = ({children,size = "small",onClick}) =>
{
    //Para la concatenacion siempre va el bloque el elemento y el modificador
    return <button onClick={onClick} className={`button button--${size}`}><label className='button__label--light'>{children}</label></button>;
};

export default Button;



