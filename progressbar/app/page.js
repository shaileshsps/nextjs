'use client';
import ProgressBar from "./components/progressbar";
import "./style.css";

const bars = [0, 5, 10, 35, 50, 75, 100];

export default function Home() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Progress Bar</h1>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {
            bars.map((value, index) => (
          /* return */ <ProgressBar key={index} progress={value} />
            ))
          }
        </div>
      </div>
    </>
  );
}
