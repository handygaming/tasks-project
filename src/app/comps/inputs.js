import { v4 as uuidv4 } from "uuid";
function Inputs({
  input,
  setinput,
  tasks,
  settasks,
  id,
  setid,
  open,
  setopen,
}) {
  function handleadd() {
    if (input.length != 0) {
      let array = [...tasks];
      array.push({ id: uuidv4(), title: input, complete: false });
      settasks(array);
      setinput("");
      localStorage.setItem("tasks", JSON.stringify(array));
    }
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="task name"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        style={{
          width: "100%",
          height: "30px",
          padding: "10px",
          backgroundColor: "black",
          outline: "none",
          border: "3px white solid",
          marginRight: "10px",
        }}
      />
      <button
        onClick={handleadd}
        style={{
          width: "100px",
          height: "30px",
          padding: "5px",
          backgroundColor: "black",
          outline: "none",
          border: "3px white solid",
        }}
      >
        add
      </button>
    </div>
  );
}

export default Inputs;
