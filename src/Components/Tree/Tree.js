import React from "react";
import TreeNodes from "./TreeNodes";
import light from "./style.module.css";
import dark from "./style2.module.css";

const Tree = (props) => {
    const [classes, setClasses] = React.useState(props.theme ? light : dark);
    React.useEffect(() => {
      console.log(props.theme);
      if (props.theme) {
        setClasses(dark);
      } else {
        setClasses(light);
      }
    }, [props.theme]);

  let arr = [];
  props.tree.forEach((i) => {});
  for (let i = 0; i < props.tree.length; i++) {
    arr.push(<TreeNodes theme={props.theme} values={props.tree[i]} i={i} />);
  }
  return <div ref={props.reff} className={classes.tree}>{arr}</div>;
};

export default Tree;
