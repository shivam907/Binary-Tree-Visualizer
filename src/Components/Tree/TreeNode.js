import React from "react";
import classes from "./style2.module.css";
const TreeNode = (props) => {
  return (
    <>
      <div className={`${classes.node} ${props.value?'':classes.null}`}>
        {props.value == null ? "N" : props.value}
        {props.i != 0 && (
          <div
            className={
              props.j % 2 == 0
                ? classes["lline" + props.i]
                : classes["rline" + props.i]
            }
          ></div>
        )}
      </div>
    </>
  );
};

export default TreeNode;
