import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }),
    [setSolution];

  return (
    <div className={styles.container}>
      <h1>Create wordle</h1>
      {solution && <div>{solution}</div>}
    </div>
  );
}
