export interface IWEvent {
    [key: string]: string
}

const WEvent: IWEvent = {
    dragStart: 'mousedown',
    dragging: 'mousemove',
    dragEnd: 'mouseup',
}

export default WEvent;