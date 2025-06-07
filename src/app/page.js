import Image from "next/image";
import styles from "./page.module.css";
import { headers } from "next/headers";
import Main from "./comps/main";
export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Main />
    </div>
  );
}
