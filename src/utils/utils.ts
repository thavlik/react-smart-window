interface Window {
    attachEvent(event: string, listener: EventListener): boolean;
    detachEvent(event: string, listener: EventListener): void;
}

export function addEventListener(element: Node & Window, event: string, handler: EventListener) {
    // check browser compatibility
    if (element.addEventListener) {
        element.addEventListener(event, handler);
    } else if (element.attachEvent) {
        element.attachEvent('on' + event, handler);
    }
}