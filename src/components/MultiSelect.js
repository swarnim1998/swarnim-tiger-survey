import React from "react";
import Options from "./Options";

export default class MultiSelect extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-start flex-column">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              ?
            </span>
          </div>
          <input
            value={this.props.uttar}
            type="text"
            className="form-control que"
            placeholder="Enter question here"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={this.props.handleQue}
          />
        </div>
        <span>Options</span>
        {this.props.choice.map((elem, index) => {
          return (
            <Options
              key={index}
              data={elem}
              index={index}
              deleteChoice={this.props.deleteChoice}
            />
          );
        })}
      </div>
    );
  }
}
