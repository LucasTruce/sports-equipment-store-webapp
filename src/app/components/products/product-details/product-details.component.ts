import {Component, OnInit} from '@angular/core';
import {Product} from '../../../services/product/product';
import {ProductService} from '../../../services/product/product.service';
import {ActivatedRoute} from '@angular/router';
import {CartItem} from '../../../services/cart/cart-item';
import {CartService} from '../../../services/cart/cart.service';
import {TokenStorageService} from '../../../services/authentication/token-storage.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService,
              public tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    const productId: number = + this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(productId).subscribe(
      data => {
        this.succesfullHandle(data);
      }
    );

  }

  addToCart(product) {
    const theCartItem = new CartItem(product);
    this.cartService.addToCart(theCartItem);
  }

  succesfullHandle(response){
    console.log(this.product);
    this.product = response;
  }

}
