import React from "react";
import styles from "./index.module.css";

import Draggable from "./Core/Draggable";

class Sample extends React.Component {
  render() {
    return (
      <Draggable>
        {/* <div className={styles.wrapper}></div> */}
      </Draggable>
    );
  }
}
export default Sample;
