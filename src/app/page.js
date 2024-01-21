"use client";
import classes from "./page.module.css";
import Input from "@/Components/Input/Input";
import React from "react";
import Tree from "@/Components/Tree/Tree";
export default function Home() {
  const [input, setInput] = React.useState();
  const [arr, setArr] = React.useState();
  const [sub, setSub] = React.useState(false);
  const convert = (input) => {
    var values = input.split(/[,\s]+/);
    var resultArray = values.map(function (value) {
      return value.toLowerCase() === "null" || value.toLowerCase() === "n"
        ? null
        : parseFloat(value);
    });
    let ver = [];
    let i = 0,
      c = 1;
    while (i < resultArray.length) {
      let temp = [];
      for (let j = 0; j < c; j++) {
        if (i < resultArray.length) {
          temp.push(resultArray[i]);
        } else {
          temp.push(null);
        }
        i++;
      }
      c = c * 2;
      ver.push(temp);
    }
    return ver;
  };
  const inputHandler = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const submit = () => {
    setArr(convert(input));
    setSub(true)
    console.log(arr)
  };
  return (
    <main className={classes.main}>
      <h1 className={classes.heading}>Binary Tree Visualizer</h1>
      <div className={classes.block}>
        <Input
          label="Enter value of Binary trees"
          opt="seprated by comma or space"
          type="text"
          placeholder="1, 2, 3"
          onSubmit={inputHandler}
        />
        <button className={classes.btn} onClick={submit}>
          Submit
        </button>
      </div>
      {sub && <Tree tree={arr} />}
      <footer className={classes.footer}>Made By Shivam Kaushal</footer>
    </main>
  );
}
