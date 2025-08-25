'use client';
import ProgressBar from "./components/progressbar";
import Accordion from "./components/accordion";
import "./style.css";
import ChipsInput from "./components/chips-input";
import Checkboxes from "./components/nested-checkboxes";

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

  const CheckboxesData = [
    {
      id: 1,
      label: "Fruits",
      children: [
        { id: 2, label: "Apple" },
        { id: 3, label: "Banana" },
        {
          id: 4,
          label: "Citrus",
          children: [
            { id: 5, label: "Orange" },
            { id: 6, label: "Lemon" },
          ],
        },
      ],
    },
    {
      id: 7,
      label: "Vegetables",
      children: [
        { id: 8, label: "Carrot" },
        { id: 9, label: "Broccoli" },
      ],
    },
  ];

  return (
    <>
      <div style={{ justifyItems: "center" }}>
        {/* Progress Bar */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100vw" }}>
            <h1>Progress Bar</h1>
            {
              bars.map((value, index) => (
          /* return */ <ProgressBar key={index} progress={value} />
              ))
            }
          </div>
        </div>
        {/* Accordion */}
        <div>
          <h1 style={{ textAlign: "center" }}>Accordion</h1>
          <Accordion items={accordianItems} />
        </div>
        {/* Chips Input */}
        <div>
          <h1 style={{ textAlign: "center" }}>Chips Input</h1>
          <ChipsInput />
        </div>
        {/* Nested Checkboxes */}
        <div>
          <h1>Nested Checkboxes</h1>
          <Checkboxes data={CheckboxesData} />
        </div>
      </div >
    </>
  );
}
