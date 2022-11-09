import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Order } from '../models/order'
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  totalItem: number = 0;
  totalCost: number = 0;
  fullName: string = '';
  paymentId: string = '';
  shippingAddress: string = '';
  

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItemsCart();
    this.totalItem = this.cartService.numberOfItemInCart();
    this.totalCost = this.cartService.totalMoneyCart();
  }

  ngDoCheck(): void {
    this.cartItems.forEach(item => {
      this.cartService.checkQuantityItemInCart(item);
    });
    this.totalItem = this.cartService.numberOfItemInCart();
    this.totalCost = this.cartService.totalMoneyCart();
  }

  emptyCartItem(): void {
    this.cartService.emptyInCart();
    this.totalItem = this.cartService.numberOfItemInCart();
    this.totalCost = this.cartService.totalMoneyCart();
    this.cartItems = [];
  }

  addToCart(item: Product): void {
    this.cartService.addItemToCart(item);
    this.cartItems = this.cartService.getItemsCart();
    this.totalItem = this.cartService.numberOfItemInCart();
    this.totalCost = this.cartService.totalMoneyCart();
  }

  removeFromCart(item: Product): void {
    this.cartService.removeItemFromCart(item);
    this.cartItems = this.cartService.getItemsCart();
    this.totalItem = this.cartService.numberOfItemInCart();
    this.totalCost = this.cartService.totalMoneyCart();
  }

  confirmOrder(): void {
    const order: Order = {
      name: this.fullName,
      address: this.shippingAddress,
      amount: this.totalCost
    }
  }

  onSubmit(): void {
    const order: Order = {
      name: this.fullName,
      address: this.shippingAddress,
      amount: this.totalCost
    }
  }
}
