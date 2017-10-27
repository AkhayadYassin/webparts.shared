(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/router'), require('rxjs')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common/http', '@angular/router', 'rxjs'], factory) :
	(factory((global.webpoc = global.webpoc || {}, global.webpoc.shared = {}),global.ng.core,global.http,global.router,global.rxjs));
}(this, (function (exports,core,http,router,rxjs) { 'use strict';

var ApiService = (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
    }
    ApiService.prototype.getMessage = function (url) {
        var baseUrl = "http://localhost/GuestWebApp/";
        return this.httpClient.get(baseUrl + url);
    };
    ApiService.prototype.postMessage = function (url, body) {
        return this.httpClient.post(url, body);
    };
    return ApiService;
}());
ApiService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
ApiService.ctorParameters = function () { return [
    { type: http.HttpClient, },
]; };

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
WindowRef.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
WindowRef.ctorParameters = function () { return []; };

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
Mediator.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
Mediator.ctorParameters = function () { return [
    { type: WindowRef, },
]; };

var PocHttpInterceptor = (function () {
    function PocHttpInterceptor(router$$1, mediator) {
        this.router = router$$1;
        this.mediator = mediator;
    }
    PocHttpInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).catch(function (error) {
            console.log(error);
            if (error.status === 403) {
                _this.forbidden();
            }
            else {
                _this.redirectToErrorPage();
            }
            return rxjs.Observable.throw('Server-side error occured');
        });
    };
    PocHttpInterceptor.prototype.forbidden = function () {
        var self = this;
        self.mediator.publish("errors", "Verboden!");
        // console.log('verboden!');
        // self.router.navigate(['404']);
        return rxjs.Observable.empty();
    };
    PocHttpInterceptor.prototype.redirectToErrorPage = function () {
        var self = this;
        self.mediator.publish("errors", " ERROR --> REDIRECT!");
        // console.log('fout en redirect naar!');
        // self.router.navigate(['404']);
        return rxjs.Observable.empty();
    };
    return PocHttpInterceptor;
}());
PocHttpInterceptor.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
PocHttpInterceptor.ctorParameters = function () { return [
    { type: router.Router, },
    { type: Mediator, },
]; };

exports.ApiService = ApiService;
exports.Mediator = Mediator;
exports.WindowRef = WindowRef;
exports.PocHttpInterceptor = PocHttpInterceptor;

Object.defineProperty(exports, '__esModule', { value: true });

})));
