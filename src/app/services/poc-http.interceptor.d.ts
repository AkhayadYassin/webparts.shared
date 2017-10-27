import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Mediator } from './mediator';
import { Observable } from 'rxjs';
export declare class PocHttpInterceptor implements HttpInterceptor {
    private router;
    private mediator;
    constructor(router: Router, mediator: Mediator);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    forbidden(): Observable<{}>;
    redirectToErrorPage(): Observable<{}>;
}
