import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


const AUTH_API = 'http://localhost:8080/auth/';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public username: string;
  public password: string;

  constructor(private http: HttpClient) { }

  authenticate(user) {
    return this.http.post(AUTH_API + 'signin', user);
  }

  register(user) {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}
