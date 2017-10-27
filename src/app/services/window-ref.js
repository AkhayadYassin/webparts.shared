import { Injectable } from '@angular/core';
function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
export { WindowRef };
WindowRef.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WindowRef.ctorParameters = function () { return []; };
//# sourceMappingURL=window-ref.js.map