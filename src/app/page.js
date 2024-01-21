"use client";
import classes from "./page.module.css";
import Input from "@/Components/Input/Input";
import React from "react";
import Tree from "@/Components/Tree/Tree";
import Link from "next/link";
import html2canvas from "html2canvas";

export default function Home() {
  const exportAsImage = async (el, imageFileName) => {
    console.log(el)
    const canvas = await html2canvas(el);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
  };
  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;
  
    fakeLink.href = blob;
  
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
  
    fakeLink.remove();
  };
  const [input, setInput] = React.useState();
  const [arr, setArr] = React.useState();
  const [sub, setSub] = React.useState(false);

const exportRef = React.useRef();
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
          label="Enter value of Binary trees in Level Order Traversal"
          opt="seprated by comma or space"
          type="text"
          placeholder="1, 2, 3, null, null, 4"
          onSubmit={inputHandler}
        />
        <button className={classes.btn} onClick={submit}>
          Submit
        </button>
      </div>
      {sub && 
      <div className={classes.box}>

      <Tree reff={exportRef} tree={arr} />
      <button onClick={() => exportAsImage(exportRef.current, "test")} className={classes.download}>Download</button>
      </div>
      }
      <div className={classes.foot}>
        <footer className={classes.footer}>
          Made with <img className={classes.heart} src="./heart.gif" alt="" />{" "}
          by
          <Link className={classes.link} href="https://shivamkaushal.in">
            shivamkaushal.in
          </Link>
        </footer>
      </div>
    </main>
  );
}
