import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("request Interceptor", req);
    const new_req = req.clone({headers:new HttpHeaders({token:"Ameya2378"})});
    // if(req.method === "POST"){}

    return next.handle(new_req);
  }
}
