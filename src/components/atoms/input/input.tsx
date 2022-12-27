import React from 'react';
import './input.scss';
import { FC } from 'react';

interface InputProps
{
    value:string;
    name:string;
    onChange:(value:string)=>void;
    placeholder:string;
}

const Input:FC<InputProps>= ({name,onChange,placeholder,value}) =>
{
    return (
        <input 
        value={value}
        name={name}
        className='input' 
        onChange={(e)=>onChange(e.target.value)} 
        placeholder={placeholder}></input>
    
    )
};

export default Input;