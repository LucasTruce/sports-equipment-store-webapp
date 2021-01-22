import {Injectable} from '@angular/core';
import {CartItem} from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Array<CartItem> = [];
  totalQuantity: number = Number(0);
  totalPrice: number = Number(0.00);

  constructor() { }

  addToCart(theCartItem) {

    // check if we already have the item in our cart
    let alreadyExistsInCart: boolean;
    let existingCartItem: CartItem;

    if (this.cartItems.length > 0) {
      // find the item in the cart based on item id

      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);

      // check if we found it
      alreadyExistsInCart = (existingCartItem !== undefined);
    }

    if (alreadyExistsInCart) {
      // increment the quantity
      existingCartItem.quantity++;
    }
    else {
      // just add the item to the array
      this.cartItems.push(theCartItem);
    }

    // compute cart total price and total quantity
    this.computeCartTotals();
  }

  computeCartTotals() {

    let totalPriceValue: number = Number(0);
    let totalQuantityValue: number = Number(0);

    for (const currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    // publish the new values ... all subscribers will receive the new data
    this.totalPrice = totalPriceValue;
    this.totalQuantity = totalQuantityValue;

    // log cart data just for debugging purposes
    console.log(totalPriceValue, totalQuantityValue);
  }
}
