import React from "react";
import { render } from "react-dom";
import Window, { Draggable } from "../../src";

const App = () => (
  <div>
    <Window title="Title">
      <div
        style={{
          width: "250px",
          height: "250px",
        }}
      >
        <button onClick={() => console.log("dsa")}> cl </button>{" "}
      </div>
    </Window>
    <Draggable>
      <div
        style={{
          width: "250px",
          height: "250px",
          "background-color": "red",
        }}
        draggable
      ></div>
    </Draggable>
  </div>
);
render(<App />, document.getElementById("root"));
