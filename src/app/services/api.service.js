import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
export { ApiService };
ApiService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ApiService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
//# sourceMappingURL=api.service.js.map