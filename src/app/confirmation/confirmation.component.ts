import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { CartService } from '../services/cart.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  order: Order;


  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.order = {
      name: "",
      address: "",
      amount: 0,      
    }
   };

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.order.name = params['name'];
      this.order.address = params['address'];
      this.order.amount = params['cost'];
    })
  };

  backToMainPage(): void {
    this.cartService.emptyInCart();
  }

}
