import { WindowRef } from './window-ref';
export declare class Mediator {
    private windowRef;
    private _mediator;
    moduleName: string;
    constructor(windowRef: WindowRef);
    subscribe(channel: string, fn: Function): void;
    publish(channel: string, data: any): void;
    unsubscribe(channel: string, fn: Function): void;
    unsubscribeAll(): void;
}
