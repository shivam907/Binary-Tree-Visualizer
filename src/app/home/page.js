// pages/index.js

import React from "react";
import styles from "./style.module.css";


const TreeNode = ({ value, left, right }) => {
  return (
    <div className={styles.treeNode}>
      <div className={styles.nodeValue}>{value}</div>
      {left && <TreeNode {...left} />}
      {right && <TreeNode {...right} />}
    </div>
  );
};

const BinaryTree = ({ root }) => {
  if (!root) {
    return null;
  }

  return (
    <div className={styles.binaryTree}>
      <TreeNode {...root} />
    </div>
  );
};

const Home = () => {
  const treeData = {
    value: 1,
    left: {
      value: 2,
      left: {
        value: 4,
        left: { value: 8 },
        right: { value: 9 },
      },
      right: {
        value: 5,
        left: { value: 10 },
      },
    },
    right: {
      value: 3,
      left: { value: 6 },
      right: { value: 7 },
    },
  };

  return (
    <div>
      <h1>Binary Tree Example</h1>
      <BinaryTree root={treeData} />
    </div>
  );
};

export default Home;