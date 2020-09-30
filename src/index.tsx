import React from "react";
import styles from "./index.module.css";

import Draggable from "./Core/Draggable";

class Sample extends React.Component {
  componentDidMount() {
    console.log("Sample Mounted");
  }

  render() {
    return (
      <Draggable>
        <div className={styles.wrapper}>Sample Component</div>
      </Draggable>
    );
  }
}
export default Sample;
