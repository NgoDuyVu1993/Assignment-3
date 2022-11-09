import { Component, OnInit, Input} from '@angular/core';
import { Product } from '../models/product';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products: Product[] = [];
  @Input() product: Product;
  discount: number = 0;
  
  constructor(private route: ActivatedRoute,) { 
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      quantity: 0,
      description: '' 
    };

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.product.name = params['name'];
      this.product.url = params['url'];
      this.product.price = params['cost'];
      this.product.description = params['description'] + this.updateDescription(this.product.name);
      this.discount = this.calculateDiscount(this.product.price);
    })
  };

  public updateDescription(name: string): string {
    switch(name) {
      case 'Book':
        return  " Buy It, Only 9.99, what a pargain." 
      case 'Headphones':
        return  ' The Game Headphone is the best of its line.' 
      case 'Backpack':
        return  ' Sturdy and reliable, what do you need more?.' 
      case 'Glasses':
        return  ' More than an accessory but a fashion.' 
      case 'Cup':
        return  ' For driking, no-matter what type.' 
      case 'Shift':
        return  ' Buy 3 shifts get 1 free. Hurry, limited time offered!' 
      default:
        return '';
    }
  }

  public calculateDiscount(price: number): number {
    if(price <= 50) {
      return 2
    } else if(price > 50  && price <= 100) {
      return 10
    } else if(price > 100  && price <= 200) {
      return 15
    } else {
      return 20
    }
  }

}
