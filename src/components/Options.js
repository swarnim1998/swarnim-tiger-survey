import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

export default function Options(props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="alert option" role="alert">
        {props.data}
      </div>
      <div className="d-flex justify-content-center align-items-center choiceButtons">
        <RemoveIcon onClick={() => props.deleteChoice(props.index)} />
      </div>
    </div>
  );
}
