import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class ApiService {
    private httpClient;
    constructor(httpClient: HttpClient);
    getMessage(url: string): Observable<any>;
    postMessage(url: string, body: any): Observable<any>;
}
