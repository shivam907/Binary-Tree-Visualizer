"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BinaryTree = (props) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // const data = [
    //   { child: "1", parent: "" },
    //   { child: "2", parent: "1" },
    //   { child: "3", parent: "1" },
    //   { child: "4", parent: "2" },
    //   { child: "5", parent: "2" },
    //   { child: "6", parent: "3" },
    //   { child: "7", parent: "3" },
    // ];
    const data = props.tree;
    const dataStructure = d3
      .stratify()
      .id((d) => d.child)
      .parentId((d) => d.parent)(data);

    const treeStructure = d3.tree().size([500, 300]);
    const information = treeStructure(dataStructure);

    const rectangles = svg
      .append("g")
      .selectAll("circle")
      .data(information.descendants());

    rectangles
      .enter()
      .append("circle")
      .attr("cx", (d) => {
        // console.log(d.parent)
        if (d.parent && d.parent.children.length === 1) {
            // console.log("prnt",d.parent)
            if(d.parent.children[0].data.right) {
                console.log("right")
                return d.parent.x + 50;
            }
            else{
                // console.log("left", d.parent)
                 return Number(d.parent.x)-50;
            }
        } else {
          return d.x;
        }
      })
      .attr("cy", (d) => d.y)
      .attr("r", 25)
      .style("fill", "#333")
      .style("stroke", "black");

    const connections = svg
      .append("g")
      .selectAll("path")
      .data(information.links());

    connections
      .enter()
      .append("path")
      .attr("d", (d) => {
        if (d.source.parent && d.source.children.length === 1) {
            console.log(d.source)
          const sourceX = d.source.x;
          const sourceY = d.source.y;
          let targetX = d.target.x;
          if(d.source.children[0].data.right){
            targetX+=50
          }
          else targetX-=50
          const targetY = d.target.y;

          const controlPointX1 = sourceX;
          const controlPointY1 = (sourceY + targetY) / 2;
          const controlPointX2 = targetX;
          const controlPointY2 = (sourceY + targetY) / 2;

          return (
            "M" +
            sourceX +
            "," +
            sourceY +
            " C " +
            controlPointX1 +
            "," +
            controlPointY1 +
            " " +
            controlPointX2 +
            "," +
            controlPointY2 +
            " " +
            targetX +
            "," +
            targetY
          );
        } else {
          return (
            "M" +
            d.source.x +
            "," +
            d.source.y +
            " C " +
            d.source.x +
            "," +
            (d.source.y + d.target.y) / 2 +
            " " +
            d.target.x +
            "," +
            (d.source.y + d.target.y) / 2 +
            " " +
            d.target.x +
            "," +
            d.target.y
          );
        }
      })
      .style("fill", "none")
      .style("stroke", "#333");

    const names = svg
      .append("g")
      .selectAll("text")
      .data(information.descendants());

    names
      .enter()
      .append("text")
      .text((d) => d.data.child)
      .attr("x", (d) => {
        if (d.parent && d.parent.children.length === 1) {
            if(d.parent.children[0].data.left) return d.parent.x - 50;
            else return d.parent.x + 50;
        } else {
          return d.x;
        }
      })
      .attr("y", (d) => d.y)
      .style("dominant-baseline", "middle")
      .style("color", "#fff")
      .style("fill", "#fff")
      .style("font-size", "20px")
      .style("text-anchor", "middle");
  }, []);

  return (
    <svg width={600} height={600} ref={svgRef}>
      {/* SVG content will be rendered here */}
    </svg>
  );
};

export default BinaryTree;
