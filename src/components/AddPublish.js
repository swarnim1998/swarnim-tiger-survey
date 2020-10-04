import React from "react";

export default function AddPublish(props) {
  return (
    <div className="d-flex justify-content-around">
      <button
        className="text-white"
        style={{ backgroundColor: "orangered", border: "none" }}
        onClick={props.addQue}
      >
        Add Question
      </button>
      <button
        className="text-white"
        style={{ backgroundColor: "orangered", border: "none" }}
        onClick={props.publish}
      >
        Publish
      </button>
    </div>
  );
}
