import { useState } from "react";

export default function Checkboxes({ data }) {

  const [checked, setChecked] = useState({});

  const handleOnChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked }


      const updateChildren = (node) => {
        node.children && node.children.map((child) => {
          newState[child.id] = isChecked
        })
      }
      updateChildren(node)
      return newState;
    })
  }

  return (
    <div>
      {
        data.map((node) => (
          <div key={node.id} className="parent-checkbox-container">
            <input type="checkbox"
              checked={checked[node.id] || false}
              onChange={(e) => handleOnChange(e.target.checked, node)}
            />
            {node.label}
            {node.children && <Checkboxes data={node.children} />}
          </div>
        ))
      }
    </div >
  );
}
