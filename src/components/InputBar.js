import React, { useState } from "react";

export default function InputBar(props) {
  const [text, changeText] = useState("");
  const handleChange = (e) => {
    changeText(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
      <form>
        <input
          value={text}
          type="text"
          className="form-control que"
          placeholder="Enter question here"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </form>

      <div
        className="d-flex justify-content-center align-items-center InputButtons"
        onClick={() => props.addChoice(text)}
      >
        <span className="text-white">Add</span>
      </div>
    </div>
  );
}
