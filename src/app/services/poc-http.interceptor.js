import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Mediator } from './mediator';
import { Observable } from 'rxjs';
var PocHttpInterceptor = (function () {
    function PocHttpInterceptor(router, mediator) {
        this.router = router;
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
            return Observable.throw('Server-side error occured');
        });
    };
    PocHttpInterceptor.prototype.forbidden = function () {
        var self = this;
        self.mediator.publish("errors", "Verboden!");
        // console.log('verboden!');
        // self.router.navigate(['404']);
        return Observable.empty();
    };
    PocHttpInterceptor.prototype.redirectToErrorPage = function () {
        var self = this;
        self.mediator.publish("errors", " ERROR --> REDIRECT!");
        // console.log('fout en redirect naar!');
        // self.router.navigate(['404']);
        return Observable.empty();
    };
    return PocHttpInterceptor;
}());
export { PocHttpInterceptor };
PocHttpInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PocHttpInterceptor.ctorParameters = function () { return [
    { type: Router, },
    { type: Mediator, },
]; };
//# sourceMappingURL=poc-http.interceptor.js.map