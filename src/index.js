import React from "react";
import styles from "./index.module.css";
class Sample extends React.Component {
  componentDidMount(){
    console.log("Mounted");
  }

  render() {
    return <div className={styles.wrapper}>Sample Component</div>;
  }
}
export default Sample;
