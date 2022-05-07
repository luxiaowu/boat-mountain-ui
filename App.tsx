import React from "react";
import { createRoot } from "react-dom/client";
// import { BoatTreeSelect } from './lib/bundle'
import BoatTreeSelect from "@/BoatTreeSelect/demos";
import "antd/dist/antd.css";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 100,
      }}
    >
      <BoatTreeSelect />
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
