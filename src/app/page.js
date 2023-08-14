import Image from "next/image";
import styles from "./page.module.css";
import variables from "./variables.module.scss";

export default function Home() {
  return (
    <main>
      <title>VirtuArte</title>
      <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
    </main>
  );
}
