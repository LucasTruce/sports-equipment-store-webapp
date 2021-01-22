import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(API_URL + 'users', { responseType: 'text' });
  }
}
