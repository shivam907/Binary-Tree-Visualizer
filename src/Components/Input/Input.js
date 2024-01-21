"use client";
import React from "react";
import dark from "./style.module.css";
import light from "./Input.module.css";

const Input = (props) => {
    const [classes, setClasses]=React.useState(props.theme ? light : dark)
  React.useEffect(()=>{
    console.log(props.theme)
    if (props.theme){
      setClasses(light)
    }
    else{
      setClasses(dark)
    }
  },[props.theme])
// let classes = props.theme ? light : dark;
  return (
    <div className={classes.inputs}>
      <div className={classes.label}>
        <label htmlFor="">{props.label}</label>
        {props.required && <span>Required</span>}
        {props.opt && <span>({props.opt})</span>}
      </div>
      <input
        className={classes.input}
        type={props.type}
        onChange={props.onSubmit}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.value}
      />
    </div>
  );
};

export default Input;
