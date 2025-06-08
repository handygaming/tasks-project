"use client";
import { useEffect, useState } from "react";
import Inputs from "./inputs";
import Outputs from "./outputs";

function Main() {
  let [tasks, settasks] = useState([]);
  let [input, setinput] = useState("");
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("tasks")) == null) {
      localStorage.setItem("tasks", "[]");
    } else {
      settasks(JSON.parse(localStorage.getItem("tasks")));
    }
  }, []);
  return (
    <div
      style={{
        width: "400px",
        height: "500px",
        backgroundColor: "red",
        // borderRadius: "20px",
        padding: "20px",
        border: "10px white solid",
      }}
    >
      <Outputs
        input={input}
        setinput={setinput}
        tasks={tasks}
        settasks={settasks}
      />
      <Inputs
        input={input}
        setinput={setinput}
        tasks={tasks}
        settasks={settasks}
      />
    </div>
  );
}

export default Main;
