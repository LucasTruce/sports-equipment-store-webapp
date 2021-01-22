import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenStorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const roles = this.tokenService.getRoles();
    if (roles && this.tokenService.isLogged) {
      console.log(roles.includes(route.data.roles));
      // check if route is restricted by role
      if (route.data.roles && !roles.includes(route.data.roles)) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
