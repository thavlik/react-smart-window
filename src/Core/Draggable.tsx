import React from "react";

interface IDraggableProps {}
interface IDraggableState {
  isDragging: boolean;
  offsetX?: number;
  offsetY?: number;
  startPageX?: number;
  startPageY?: number;
  offsetPageX?: number;
  offsetPageY?: number;
}

class Draggable extends React.Component<IDraggableProps, IDraggableState> {
  constructor(props: IDraggableProps) {
    super(props);
    this.state = {
      isDragging: false,
    };
  }

  onMouseDownHandler = (e: any) => {
    this.setState({
      isDragging: true,
      offsetPageY: e.pageY,
      startPageY: e.pageY,
      offsetPageX: e.pageX,
      startPageX: e.pageX,
    });
  };

  onMouseUpHandler = (e: any) => {
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
        style={this.getDraggingStyle()}
      >
        <button>click</button>
        {this.props.children}
      </div>
    );
  }
}

export default Draggable;
