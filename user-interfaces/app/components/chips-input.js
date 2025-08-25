import React, { useState } from "react";
function ChipsInput() {

  const [inputText, setinputText] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      // setChips([...chips, inputText])
      setChips(prev => [...prev, inputText])
      setinputText("");
    }
  }

  const handleDeleteClick = (index) => {
    const chipsCopy = [...chips];
    chipsCopy.splice(index, 1);
    setChips(chipsCopy)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {chips.map((chip, index) => (
          <div key={index} style={{ background: "grey", width: "130px", height: "50px", borderRadius: "10px", color: "white", margin: "10px", display: "flex", alignItems: "center", justifyContent: "end" }}>
            {chip}
            <button style={{ margin: "0 20px", float: "right", color: "red" }} onClick={() => handleDeleteClick(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;