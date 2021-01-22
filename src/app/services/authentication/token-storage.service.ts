import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export class Token {
  constructor(
    public token: string,
    public username: string,
    public roles: any
  ) {}
}
const TOKEN_KEY = 'token';
const USERNAME_KEY = 'username';
const ROLES_KEY = 'roles';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  isLogged: boolean;

  constructor(private router: Router) { }

  signOut() {
    window.sessionStorage.clear();
    this.isLogged = false;
    this.router.navigate(['/']);
  }

  public signIn(token: Token) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.removeItem(ROLES_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, token.username);
    window.sessionStorage.setItem(TOKEN_KEY, token.token);
    window.sessionStorage.setItem(ROLES_KEY, token.roles);
    this.isLogged = true;
  }

  public getToken(): string {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public getUsername() {
    return JSON.parse(window.sessionStorage.getItem(USERNAME_KEY));
  }

  public getRoles() {
    return window.sessionStorage.getItem(ROLES_KEY);
  }

  public isAdmin(){
    const roles = window.sessionStorage.getItem(ROLES_KEY);
    if (roles != null && this.isLogged) {
      return window.sessionStorage.getItem(ROLES_KEY).includes('ROLE_ADMIN');
    }
    return false;
  }
}
