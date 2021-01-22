import {Component, OnInit} from '@angular/core';
import {Product} from '../../../services/product/product';
import {ProductService} from '../../../services/product/product.service';
import {CartItem} from '../../../services/cart/cart-item';
import {CartService} from '../../../services/cart/cart.service';
import {TokenStorageService} from '../../../services/authentication/token-storage.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Array<Product>;

  constructor(private productService: ProductService,
              private cartService: CartService,
              public tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.productService.getProductsList().subscribe(
      res => {
        this.responseToObject(res);
      }
    );
  }

  responseToObject(res){
    this.products = res;
  }

  addToCart(product) {
    const theCartItem = new CartItem(product);
    this.cartService.addToCart(theCartItem);
  }

}
