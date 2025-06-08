"use client";
import { useEffect, useState } from "react";
import Inputs from "./inputs";
import Outputs from "./outputs";
import Confirm from "./confirm";

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

  // confirm
  let [open, setopen] = useState("none");
  let [id, setid] = useState();
  // **confirm**
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
      <Confirm
        open={open}
        setopen={setopen}
        id={id}
        setid={setid}
        tasks={tasks}
        settasks={settasks}
      />
      <Outputs
        input={input}
        setinput={setinput}
        tasks={tasks}
        settasks={settasks}
        open={open}
        setopen={setopen}
        id={id}
        setid={setid}
      />
      <Inputs
        input={input}
        setinput={setinput}
        tasks={tasks}
        settasks={settasks}
        open={open}
        setopen={setopen}
        id={id}
        setid={setid}
      />
    </div>
  );
}

export default Main;
