import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {

  }
  minusQuantity(product, index) {
    if (product.quantity > 1) {
      product.quantity -= 1;
      this.cartService.totalQuantity -= 1;
      this.cartService.totalPrice -= product.unitPrice;
    }
    else if (product.quantity === 1) {
      this.deleteItem(index, product);
    }
  }

  plusQuantity(product){
    product.quantity += 1;
    this.cartService.totalQuantity += 1;
    this.cartService.totalPrice += product.unitPrice;
  }

  deleteItem(index, product){
    this.cartService.cartItems.splice(index, 1);
    this.cartService.totalQuantity -= product.quantity;
    this.cartService.totalPrice -= (product.quantity * product.unitPrice);

  }

}
