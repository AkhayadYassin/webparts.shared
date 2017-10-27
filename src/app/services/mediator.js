import { Injectable } from '@angular/core';
import { WindowRef } from './window-ref';
var Mediator = (function () {
    function Mediator(windowRef) {
        this.windowRef = windowRef;
        this._mediator = this.windowRef.nativeWindow.parent.getMediator();
        this.moduleName = this._mediator.moduleName;
    }
    Mediator.prototype.subscribe = function (channel, fn) {
        this._mediator.subscribe(channel, fn);
    };
    Mediator.prototype.publish = function (channel, data) {
        this._mediator.publish(channel, data);
    };
    Mediator.prototype.unsubscribe = function (channel, fn) {
        this._mediator.unsubscribe(channel, fn);
    };
    Mediator.prototype.unsubscribeAll = function () {
        this._mediator.remove();
    };
    return Mediator;
}());
export { Mediator };
Mediator.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Mediator.ctorParameters = function () { return [
    { type: WindowRef, },
]; };
//# sourceMappingURL=mediator.js.map