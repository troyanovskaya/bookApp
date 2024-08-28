import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogInService } from '../services/log-in.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private logInService: LogInService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    request = request.clone({
      headers: request.headers.set('authorization', `Bearer ${token}`)
    })
    return next.handle(request);
  }
}
export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi:true
}
