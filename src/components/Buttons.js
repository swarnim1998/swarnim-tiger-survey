import React from "react";
import { Link } from "react-router-dom";

export default function Buttons() {
  return (
    <div className="d-flex flex-column">
      <Link to="/queType">
        <button className="survey-btn">Create Survey</button>
      </Link>
      <Link to="/">
        <button className="survey-btn">Take Survey</button>
      </Link>
    </div>
  );
}
