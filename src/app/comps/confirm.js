function Confirm({ title, open, setopen, id, setid, tasks, settasks }) {
  function yes() {
    let array = [...tasks].filter((i) => {
      return i.id != id;
    });
    settasks(array);
    setopen("none");
    localStorage.setItem("tasks", JSON.stringify(array));
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        backgroundColor: "#0000008c",
        zIndex: "10",
        display: `${open}`,
      }}
    >
      <div
        style={{
          width: "50%",
          height: "150px",
          backgroundColor: "gray",
          position: "absolute",
          zIndex: "999",
          top: "calc(50% - 50px)",
          left: "25%",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          textAlign: "center",
          gap: "10px",
          border: "2px black solid",
          borderRadius: "7px",
        }}
      >
        <p>Do You Want To Delete This Task ??</p>
        <button
          style={{
            height: "30px",
            padding: "5px",
          }}
          onClick={() => yes()}
        >
          Yes
        </button>
        <button
          style={{
            height: "30px",
            padding: "5px",
          }}
          onClick={() => setopen("none")}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Confirm;
