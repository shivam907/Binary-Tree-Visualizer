"use client";
import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
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
