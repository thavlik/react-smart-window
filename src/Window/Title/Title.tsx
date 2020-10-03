import React from "react";
import styles from "./title.module.css";

declare interface TitleProps {
  children?: React.ReactNode;
  actions?: React.ReactNode[];
}

export default function Title(props: TitleProps) {
  const ActionList = props.actions ? (
    <div className={styles.action}>{props.actions}</div>
  ) : (
    ""
  );
  return (
    <div className={styles.WindowTitle} draggable>
      <p>{props.children}</p>
      {ActionList}
    </div>
  );
}
