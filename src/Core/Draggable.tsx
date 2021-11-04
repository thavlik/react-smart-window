import React, { createRef } from "react";

import styles from "./Draggable.module.css";

interface IDraggableProps {}
interface IDraggableState {
  isDragging: boolean;
  startX: number;
  startY: number;
  left?: number;
  top?: number;
}

class Draggable extends React.Component<IDraggableProps, IDraggableState> {
  wrapper: React.RefObject<HTMLDivElement>;
  constructor(props: IDraggableProps) {
    super(props);
    this.wrapper = createRef();
    this.state = {
      isDragging: false,
      startX: 0,
      startY: 0,
    };
  }
  onMouseDownHandler = (e: React.MouseEvent) => {
    // @ts-ignore
    if (!e.target.draggable && !e.target.parentNode.draggable) return;
    window.addEventListener('mousemove', this.onMouseMoveHandler);
    window.addEventListener('mouseup', this.onMouseUpHandler);
    this.setState({
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
    });
  };

  onMouseMoveHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const { isDragging, startX, startY } = this.state;
    const node = this.wrapper.current;
    if (isDragging && node) {
      const rect = node.getBoundingClientRect();
      const { left, top } = rect;
      const { clientX, clientY } = e;
      const offsetX = clientX - startX;
      const offsetY = clientY - startY;
      // TODO: boundary check
      const new_left = left + offsetX;
      const new_top = top + offsetY;

      this.setState({
        startX: clientX,
        startY: clientY,
        left: new_left,
        top: new_top,
      });
    }
  };

  onMouseUpHandler = (e: React.MouseEvent) => {
    window.removeEventListener('mousemove', this.onMouseMoveHandler);
    window.removeEventListener('mouseup', this.onMouseUpHandler);
    this.setState({
      isDragging: false,
    });
  };

  getDraggingStyle = () => {
    const { left, top } = this.state;
    if (left && top) {
      return {
        left: `${left}px`,
        top: `${top}px`,
      };
    }
  };

  render() {
    return (
      <div
        ref={this.wrapper}
        onMouseDown={this.onMouseDownHandler}
        style={this.getDraggingStyle()}
        className={styles.wrapper}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Draggable;
