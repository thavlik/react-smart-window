import React from "react";
import styles from "./title.module.css";

declare interface TitleProps {
  children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
  return (
    <div key='draggable' className={styles.WindowTitle}>
      <p key='draggable'>{props.children}</p>
      <span>x</span>
    </div>
  );
}
