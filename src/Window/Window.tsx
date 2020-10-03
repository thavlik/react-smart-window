import React, { createRef } from "react";
import Title from "./Title/Title";
import Draggable from "../Core/Draggable";

import styles from "./window.module.css";

declare interface WindowProps {
  children?: React.ReactNode;
  title?: string;
}

export default class Window extends React.Component<WindowProps> {
  render() {
    return (
      <Draggable>
        <div className={styles.wrapper}>
          <Title>{this.props.title}</Title>
          <div className={styles.content}>{this.props.children}</div>
        </div>
      </Draggable>
    );
  }
}
