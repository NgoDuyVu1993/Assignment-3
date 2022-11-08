import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  shoppingCart: Product[] = [];
  public cartSize: BehaviorSubject<number> = new BehaviorSubject<number>(this.numberOfItemInCart());

  constructor() { }

  getItemsCart() {
    return this.shoppingCart;
  }

  addItemToCart(product: Product) {
    let added: boolean = false;
    this.shoppingCart.forEach(item => {
      if(item.id == product.id ) {
        item.quantity += product.quantity;
        added = true;
        alert(`You added ${product.quantity} more ${product.name} to your cart!`);
      }
    });
    if (!added) {
      this.shoppingCart.push(product);
      alert(`You added ${product.quantity} new ${product.name} to your cart!`);
    };
    this.cartSize.next(this.numberOfItemInCart());
  }

  removeItemFromCart(product: Product) {
    let index:number = this.shoppingCart.indexOf(product);
    this.shoppingCart.splice(index, 1);
  }

  checkQuantityItemInCart(product: Product) {
    this.shoppingCart.forEach(item => {
      if(item.quantity == 0) {
        this.removeItemFromCart(product);
      }
    });
  }

  numberOfItemInCart() : number {
    let amount: number = 0;
    this.shoppingCart.forEach(item => {
      amount += item.quantity;
    });
    return amount;
  }

  totalMoneyCart(): number {
    let totalCost: number = 0;
    this.shoppingCart.forEach(item => {
      totalCost += (item.quantity * item.price);
    });
    return Math.round(totalCost);
  }

  emptyInCart(): void {
    this.shoppingCart = [];
    alert('Your cart was cleared!');
  }
}
