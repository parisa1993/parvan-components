import React from "react";
import Button from "./components/Button";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: 600
      }}
    >
      <Button type="outlined">Normal Button</Button>
    </div>
  );
}