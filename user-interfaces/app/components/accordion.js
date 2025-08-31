import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return accordianItems.length == 0 ? (
    <div className="accordion">No records found</div>
  ) : (
    <div className="accordion">
      {accordianItems.map((item, index) => {
        return (
          <div key={index} className="accordion-item">
            <div className="accordion-title" style={{ backgroundColor: (openIndex === index) ? "rgb(224, 224, 224)" : '' }} onClick={() => handleClick(index)}>
              <p>{item.title} {openIndex === index ? <FaChevronUp className="right" /> : <FaChevronDown className="right" />}</p>
            </div>
            {openIndex === index && <div className="accordion-content">
              <p>{item.content}</p>
            </div>}
          </div>
        )
      })}
    </div>
  );
}

export default Accordion;