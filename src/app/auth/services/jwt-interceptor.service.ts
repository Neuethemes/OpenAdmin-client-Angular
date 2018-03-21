import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  apiUrl = 'http://localhost:3003';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token
    let authHeader = '';
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      authHeader = 'Bearer ' + currentUser.token;
    }
    // Clone the request to add the new header.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authHeader),
      url: this.apiUrl + req.url
    });
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}

export let JwtInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true,
};
