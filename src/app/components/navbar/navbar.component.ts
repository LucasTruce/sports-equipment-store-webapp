import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../services/authentication/token-storage.service';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  totalQuantity: number = Number(0);
  constructor(public tokenStorage: TokenStorageService,
              public cartService: CartService) { }

  ngOnInit() {
  }

  logout(){
    this.tokenStorage.signOut();
  }


}
