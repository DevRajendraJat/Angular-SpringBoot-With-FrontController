import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  constructor(private http: HttpServiceService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (localStorage.getItem('fname')) {
      req = req.clone({
        setHeaders: {
        "withCredentials" : "true",
        "name" : "Raj",
          
        
        }
      })
    }
        console.log(req.headers.get("Authorization")+"------------------->>>")
    return next.handle(req);

  }

}