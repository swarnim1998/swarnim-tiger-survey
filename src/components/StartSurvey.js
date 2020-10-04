import React from "react";

export default function StartSurvey(props) {
  const { questions, options } = props;
  const component = questions.map((elem, index) => {
    return (
      <div key={index} className="mt-4">
        <div className="Alert">
          <span>{index + 1}</span> {elem}
        </div>
        <span>Options</span>
        <ul>
          {options[index].map((elem1, ind) => {
            return (
              <div class="input-group mb-3" key={ind}>
                <div class="input-group-prepend mr-3">
                  <div class="input-group-text ">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <li key={ind} style={{ listStyle: "none" }}>
                  {elem1}
                </li>
              </div>
            );
          })}
        </ul>
        <hr></hr>
      </div>
    );
  });
  return <div style={{ fontSize: "20px" }}>{component}</div>;
}
