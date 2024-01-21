import React from "react";
import TreeNode from "./TreeNode";
import light from "./style.module.css";
import dark from "./style2.module.css";
const TreeNodes = (props) => {
      const [classes, setClasses]=React.useState(props.theme ? light : dark)
  React.useEffect(()=>{
    console.log(props.theme)
    if (props.theme){
      setClasses(dark)
    }
    else{
      setClasses(light)
    }
  },[props.theme])

  let arr = [];
  props.values.forEach((i) => {});
  for (let i = 0; i < props.values.length; i++) {
    arr.push(<TreeNode theme={props.theme} value={props.values[i]} j={i} i={props.i} />);
  }
  return <div className={classes.nodes}>{arr}</div>;
};

export default TreeNodes;
