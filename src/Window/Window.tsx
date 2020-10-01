import React from "react";
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
          {this.props.children}
        </div>
      </Draggable>
    );
  }
}
