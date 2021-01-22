import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../services/user/user';
import {Token, TokenStorageService} from '../../services/authentication/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User('', '', '');
  token: Token = new Token('', '', '');
  error: any = null;

  constructor(private router: Router,
              private authService: AuthenticationService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  handleLogin() {
    this.authService.authenticate(this.user).subscribe(
      data => {
        this.save(data);
        this.router.navigate(['']);
      },
      er => {
        if (er.status === 401){
          this.error = 'Podałeś zły email lub hasło!';
        }
      }
    );
  }

  save(data){
    this.tokenStorage.signIn(data);
  }


}
