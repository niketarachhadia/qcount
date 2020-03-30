import React from 'react';

export default function Input(props) {
    return (
    <div>
        <label htmlFor={props.id}>{props.text}</label>
        <input id={props.id} type={props.type} min={props.min} max={props.max} value={props.value} onChange={props.onChange}></input>
        <br></br>
    </div>
    );
}

