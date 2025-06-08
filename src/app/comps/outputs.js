"use client";
import { useRef } from "react";
import "./output.css";
function Outputs({
  input,
  setinput,
  tasks,
  settasks,
  id,
  setid,
  open,
  setopen,
}) {
  // delete
  function handledelete(e) {
    setopen("block");
    setid(e);
  }
  // **delete**

  //complete
  function handlecomplete(item, btn) {
    if (item.complete == false) {
      let array = [...tasks];
      for (let test of array) {
        if (test.id == item.id) {
          test.complete = true;
        }
      }
      settasks(array);
      localStorage.setItem("tasks", JSON.stringify(array));
    } else {
      let array = [...tasks];
      for (let test of array) {
        if (test.id == item.id) {
          test.complete = false;
        }
      }
      settasks(array);
      localStorage.setItem("tasks", JSON.stringify(array));
    }
  }
  //**complete**

  //  show tasks
  let show = tasks.map((e) => {
    return (
      <div
        key={e.id}
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "10px",
          color: "black",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        <p
          style={{ width: "inherit" }}
          className={e.complete == true ? "line" : "unline"}
        >
          {e.title}
        </p>
        <button
          onClick={(a) => handlecomplete(e, a.currentTarget)}
          style={{
            width: "100px",
            height: "30px",
            backgroundColor: "gray",
            outline: "none",
            border: "none",
            borderRadius: "5px",
            marginRight: "5px",
            color: "white",
          }}
          className={e.complete == true ? "completed" : "uncompleted"}
        >
          complete
        </button>
        <button
          onClick={() => handledelete(e.id)}
          style={{
            width: "100px",
            height: "30px",
            backgroundColor: "rgb(172, 0, 0)",
            outline: "none",
            border: "none",
            borderRadius: "5px",
          }}
        >
          delete
        </button>
      </div>
    );
  });
  //  **show tasks**
  return (
    <div
      style={{
        height: "calc(100% - 30px)",
        overflowY: "auto",
        overflowX: "hidden",
        marginBottom: "10px",
      }}
    >
      {show}
    </div>
  );
}

export default Outputs;
