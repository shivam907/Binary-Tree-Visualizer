import React from "react";
import TreeNode from "./TreeNode";
import classes from "./style2.module.css";
const TreeNodes = (props) => {
  let arr = [];
  props.values.forEach((i) => {});
  for (let i = 0; i < props.values.length; i++) {
    arr.push(<TreeNode value={props.values[i]} j={i} i={props.i} />);
  }
  return <div className={classes.nodes}>{arr}</div>;
};

export default TreeNodes;
