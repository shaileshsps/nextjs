'use client';
import ProgressBar from "./components/progressbar";
import Accordion from "./components/accordion";
import "./style.css";
import ChipsInput from "./components/chips-input";

const bars = [0, 5, 10, 35, 50, 75, 100];

export default function Home() {
  const accordianItems = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript."
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React."
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js."
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js."
    },
  ];

  return (
    <>
      {/* Progress Bar */}
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
      {/* Accordion */}
      <div style={{ textAlign: 'center' }}>
        <h1>Accordion</h1>
        <Accordion items={accordianItems} />
      </div>
      {/* Chips Input */}
      <div style={{ textAlign: 'center' }}>
        <h1>Chips Input</h1>
        <ChipsInput />
      </div >
    </>
  );
}
