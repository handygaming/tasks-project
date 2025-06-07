"use client";
import { useEffect, useState } from "react";
import Inputs from "./inputs";
import Outputs from "./outputs";

function Main() {
  let [tasks, settasks] = useState([]);
  let [input, setinput] = useState("");
  let [id, setid] = useState(0);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("tasks")) == null) {
      localStorage.setItem("tasks", "[]");
    } else {
      settasks(JSON.parse(localStorage.getItem("tasks")));
      setid(JSON.parse(localStorage.getItem("id")));
    }
    if (tasks.length == 0) {
      setid(0);
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
        id={id}
        setid={setid}
      />
      <Inputs
        input={input}
        setinput={setinput}
        tasks={tasks}
        settasks={settasks}
        id={id}
        setid={setid}
      />
    </div>
  );
}

export default Main;
