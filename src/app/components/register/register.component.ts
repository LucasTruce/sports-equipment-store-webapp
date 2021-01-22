import {Component, OnInit} from '@angular/core';
import {User} from '../../services/user/user';
import {Token, TokenStorageService} from '../../services/authentication/token-storage.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User('', '', '');
  error: any = null;
  token: Token = new Token('', '', '');

  constructor(private router: Router,
              private authService: AuthenticationService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  handleRegister() {
    this.authService.register(this.user).subscribe(
      results => {
        this.authService.authenticate(this.user).subscribe(
          data => {
            this.save(data);
            this.router.navigate(['']);
          }
        );
      },
      error => {
        if (error.status === 401) {
          this.error = 'Użytkownik o danym loginie istnieje!';
        }
        else if (error.status === 500){
          this.error = 'Wprowadź poprawne dane!';
        }
      }
    );
  }

  save(data){
    this.tokenStorage.signIn(data);
    console.log(this.tokenStorage.getToken());
  }

}
