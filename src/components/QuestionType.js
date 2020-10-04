import React from "react";
import MultiSelect from "./MultiSelect";
import SingleSelect from "./SingleSelect";
import Options from "./Options";
import AddPublish from "./AddPublish";
import InputBar from "./InputBar";
import StartSurvey from "./StartSurvey";

export default class QuestionType extends React.Component {
  constructor() {
    super();
    this.state = {
      option: "1",
      questions: [],
      realOptions: [],
      choice: [],
      multiCount: 0,
      singleCount: 0,
      publish: false,
      uttar: "",
    };
    this.que = "";
  }

  handleQue = (e) => {
    this.setState({
      uttar: e.target.value,
    });
  };

  selectOption = (e) => {
    this.setState({
      option: e.target.value,
    });
  };

  publish = () => {
    this.setState({
      publish: true,
    });
  };

  addQue = () => {
    this.setState(
      {
        questions: [...this.state.questions, this.state.uttar],
        realOptions: [...this.state.realOptions, this.state.choice],
        choice: [],
        multiCount: 0,
        singleCount: 0,
      },
      () => {
        console.log(this.state.questions, this.state.realOptions);
      }
    );
  };

  updatedelNote = (element, index) => {
    let uKey = index;
    let data = element.props.data;
    //console.log(first,sec);
    return (
      <Options
        key={uKey}
        data={data}
        index={uKey}
        deleteChoice={this.deleteChoice}
      />
    );
  };

  deleteChoice = (index) => {
    const newData = this.state.choice.filter((elem, ind) => ind !== index);
    if (this.state.option === "1") {
      this.setState({
        choice: newData,
        multiCount: this.state.multiCount - 1,
      });
    } else {
      this.setState({
        choice: newData,
        singleCount: this.state.singleCount - 1,
      });
    }
  };

  addChoice = (data) => {
    if (this.state.option === "1") {
      this.setState({
        choice: [...this.state.choice, data],
        multiCount: this.state.multiCount + 1,
      });
    } else {
      this.setState({
        choice: [...this.state.choice, data],
        singleCount: this.state.singleCount + 1,
      });
    }
  };

  render() {
    this.que =
      this.state.option === "1" ? (
        <MultiSelect
          addQue={this.addQue}
          choice={this.state.choice}
          deleteChoice={this.deleteChoice}
          publish={this.publish}
          handleQue={this.handleQue}
          uttar={this.state.uttar}
        />
      ) : (
        <SingleSelect
          addQue={this.addQue}
          choice={this.state.choice}
          deleteChoice={this.deleteChoice}
          publish={this.publish}
          handleQue={this.handleQue}
        />
      );
    return (
      <>
        {!this.state.publish ? (
          <div>
            <select
              className="custom-select custom-select-sm mt-5"
              onChange={this.selectOption}
            >
              <option value="1" defaultValue="1">
                Multi-Select
              </option>
              <option value="2">Single-Select</option>
            </select>
            <div className="mt-5">{this.que}</div>
            {this.state.multiCount === 4 || this.state.singleCount === 2 ? (
              <AddPublish addQue={this.addQue} publish={this.publish} />
            ) : (
              <InputBar addChoice={this.addChoice} />
            )}
          </div>
        ) : (
          <StartSurvey
            questions={this.state.questions}
            options={this.state.realOptions}
          />
        )}
      </>
    );
  }
}
