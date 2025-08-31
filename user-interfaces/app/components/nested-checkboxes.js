import { useState } from "react";

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

const Checkboxes = ({ data, checked, setChecked }) => {

  const handleOnChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked }
      const updateChildren = (node) => {
        node.children && node.children.map((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child)
        })
      }
      updateChildren(node)

      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;
        newState[node.id] = node.children.every((child) => {
          verifyChecked(child)
        })
      }
      CheckboxesData.forEach(node => {
        verifyChecked(node)
      });
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
            {node.children && <Checkboxes data={node.children} checked={checked} setChecked={setChecked} />}
          </div>
        ))
      }
    </div >
  );
}

export default function NestedCheckboxes({ data }) {
  const [checked, setChecked] = useState({});

  return (
    <div>
      <Checkboxes data={CheckboxesData} checked={checked} setChecked={setChecked} />
    </div>
  );
}
