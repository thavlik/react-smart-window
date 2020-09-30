import React from "react";

interface IDraggableProps {}
interface IDraggableState {
  isDragging: boolean;
  offsetX?: number;
  offsetY?: number;
  startPageX: number;
  startPageY: number;
  offsetPageX?: number;
  offsetPageY?: number;
}

class Draggable extends React.Component<IDraggableProps, IDraggableState> {
  constructor(props: IDraggableProps) {
    super(props);
    this.state = {
      isDragging: false,
      startPageX: 0,
      startPageY: 0,
    };
  }

  onMouseDownHandler = (e: React.MouseEvent) => {
    this.setState({
      isDragging: true,
      offsetPageY: e.pageY,
      startPageY: e.pageY,
      offsetPageX: e.pageX,
      startPageX: e.pageX,
    });
  };

  onMouseMoveHandler = (e: React.MouseEvent) => {
    const { startPageX, startPageY, isDragging } = this.state;
    if (isDragging) {
      let offsetX = e.pageX - startPageX;
      let offsetY = e.pageY - startPageY;
      offsetX = offsetX > 0 ? offsetX : 0;
      offsetY = offsetY > 0 ? offsetY : 0;
      this.setState({
        offsetPageX: offsetX,
        offsetPageY: offsetY,
      });
    }
  };

  onMouseUpHandler = (e: React.MouseEvent) => {
    this.setState({
      isDragging: false,
      offsetPageY: e.pageY,
      startPageY: 0,
      offsetPageX: e.pageX,
      startPageX: 0,
    });
  };

  getDraggingStyle = () => {
    const { offsetPageX, offsetPageY } = this.state;
    return {
      transform: `translate(${offsetPageX}px,${offsetPageY}px)`,
      opacity: 0.5,
    };
  };

  render() {
    return (
      <div
        onMouseDown={this.onMouseDownHandler}
        onMouseMove={this.onMouseMoveHandler}
        onMouseUp={this.onMouseUpHandler}
        style={this.getDraggingStyle()}
      >
        <button>click</button>
        {this.props.children}
      </div>
    );
  }
}

export default Draggable;
