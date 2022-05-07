import React from "react";
// import { BoatTreeSelect } from './lib/bundle'
import BoatTreeSelect from "../index";
import "antd/dist/antd.css";

const treeData = [
  {
    title: "parent 0",
    key: "0-0",
    children: [
      { title: "leaf 0-0", key: "0-0-0", isLeaf: true },
      { title: "leaf 0-1", key: "0-0-1", isLeaf: true },
    ],
  },
  {
    title: "parent 1",
    key: "0-1",
    children: [
      { title: "leaf 1-0", key: "0-1-0", isLeaf: true },
      { title: "leaf 1-1", key: "0-1-1", isLeaf: true },
    ],
  },
];

const BoatTreeSelectDemo = () => {
  return <BoatTreeSelect treeData={treeData} />;
};

export default BoatTreeSelectDemo;
