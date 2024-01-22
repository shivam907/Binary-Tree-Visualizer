"use client";
import dark from "./page.module.css";
import light from "./style.module.css";
import Input from "@/Components/Input/Input";
import React from "react";
import LightTree from "@/Components/SVGTree/LightTree";
import DarkTree from "@/Components/SVGTree/DarkTree";
import Link from "next/link";
import html2canvas from "html2canvas";
import DownloadIcon from '@mui/icons-material/Download';

export default function Home() {

  const [input, setInput] = React.useState();
  const [arr, setArr] = React.useState();
  const [sub, setSub] = React.useState(false);
  const [theme, setTheme] = React.useState();
  const [classes, setClasses] = React.useState(theme ? light : dark);
  React.useEffect(()=>{
    console.log(theme)
    if (theme){
      setClasses(light)
    }
    else{
      setClasses(dark)
    }
  },[theme])
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
  const changeTheme = () => {
    console.log(theme)
    setTheme(theme==true?false:true);
    setTheme(theme==true?false:true);
  }
const exportRef = React.useRef();
  const convert = (input) => {
    var values = input.split(/[,\s]+/);
    var resultArray = values.map(function (value) {
      return value.toLowerCase() === "null" || value.toLowerCase() === "n" || value==-1
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
    console.log(ver);
    if (ver.length == 1) return [{ child: ver[0][0], parent: "" }];
    let ans = [{ child: ver[0][0], parent: "" }];
    for (let i = 0; i < ver.length - 1; i++) {
      for (let j = 0; j < ver[i].length; j++) {
        if(ver[i+1][j*2]!=null){
          ans.push({ child: ver[i+1][j*2], parent: ver[i][j], left:true });
        }
        if(ver[i+1][j*2+1]!=null){
          ans.push({ child: ver[i+1][j*2+1], parent: ver[i][j], right:true });
        }
      }
    }
    console.log(ans);
    return ans;
    // return ver;
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
    <div className={classes.body}>
      <main className={classes.main}>
        <div className={classes.dark}>
          <input
            onClick={changeTheme}
            type="checkbox"
            class="sr-only"
            id="darkmode-toggle"
          />
          <label for="darkmode-toggle" class="toggle">
            <span>Toggle dark mode</span>
          </label>
        </div>
        <h1 className={classes.heading}>Binary Tree Visualizer</h1>
        <div className={classes.block}>
          <Input
            theme={theme}
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
        {sub && (
          <div className={classes.box}>
          <div className={classes.space} ref={exportRef}>

          {!theme?
            <LightTree theme={theme} reff={exportRef} tree={arr} />:
            <DarkTree theme={theme} reff={exportRef} tree={arr} />
          }
          </div>
            <div
              onClick={() => exportAsImage(exportRef.current, "test")}
              className={classes.download}
            >
              Download
            <DownloadIcon className={classes.icon}/>
            </div>
          </div>
        )}
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
    </div>
  );
}
