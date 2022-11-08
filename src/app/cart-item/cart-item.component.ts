import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter;

  constructor() { 
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      quantity: 0,
      description: '' 
    }
  }

  ngOnInit(): void {
  }

  addItemCart(product: Product): Product {
    product.quantity = Number(product.quantity) + 1;
    return product;
  }

  reduceItemCart(product: Product): Product {
    if (product.quantity > 0) {
      product.quantity = Number(product.quantity) - 1;
    } else {
      alert('Quantity is 0');
    }
    return product;
  }

  removeItemCart(product: Product): Product {
    product.quantity = 0;
    return product;
  }

  roundNumber (num: number) {
    return Math.round(num);
  }

}
