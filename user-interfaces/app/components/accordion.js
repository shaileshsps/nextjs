import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return items.length == 0 ? (
    <div className="accordion">No records found</div>
  ) : (
    <div className="accordion">
      {items.map((item, index) => {
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