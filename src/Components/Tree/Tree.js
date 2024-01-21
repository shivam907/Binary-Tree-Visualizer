import React from "react";
import TreeNodes from "./TreeNodes";
import classes from "./style.module.css";

const Tree = (props) => {
  let arr = [];
  props.tree.forEach((i) => {});
  for (let i = 0; i < props.tree.length; i++) {
    arr.push(<TreeNodes values={props.tree[i]} i={i} />);
  }
  return <div ref={props.reff} className={classes.tree}>{arr}</div>;
};

export default Tree;
