import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({setHeaders: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
    });
    }
    const blacklist = '/products/imageUpload';
    if (req.url.includes(blacklist)) {
      authReq = req.clone({setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return next.handle(authReq);
  }
}
