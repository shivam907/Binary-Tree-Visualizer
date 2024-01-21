import React from "react";
import light from "./style.module.css";
import dark from "./style2.module.css";
const TreeNode = (props) => {
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
