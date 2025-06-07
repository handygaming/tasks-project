import "./output.css";
function Outputs({ input, setinput, tasks, settasks, id, setid }) {
  // delete
  function handledelete(e) {
    let array = [...tasks].filter((i) => {
      return i.id != e;
    });
    settasks(array);
    localStorage.setItem("tasks", JSON.stringify(array));
    localStorage.setItem("id", JSON.stringify(id));

    if (tasks.length == 1) {
      setid(0);
    }
  }
  // **delete**

  //complete
  function handlecomplete(item, btn) {
    if (item.complete == false) {
      btn.style.backgroundColor = "lime";
      btn.style.color = "black";
      let array = [...tasks];
      for (let test of array) {
        if (test.id == item.id) {
          test.complete = true;
        }
      }
      settasks(array);
      localStorage.setItem("tasks", JSON.stringify(array));
      localStorage.setItem("id", JSON.stringify(id));
    } else {
      btn.style.backgroundColor = "gray";
      btn.style.color = "white";
      let array = [...tasks];
      for (let test of array) {
        if (test.id == item.id) {
          test.complete = false;
        }
      }
      settasks(array);
      localStorage.setItem("tasks", JSON.stringify(array));
      localStorage.setItem("id", JSON.stringify(id));
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
        }}
      >
        <p style={{ width: "inherit" }}>{e.title}</p>
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
            backgroundColor: "red",
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
        height: "calc(100% - 20px)",
      }}
    >
      {show}
    </div>
  );
}

export default Outputs;
