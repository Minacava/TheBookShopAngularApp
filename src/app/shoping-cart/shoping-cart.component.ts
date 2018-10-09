import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
  public shoppingCart:[];
  constructor() {

  }

  ngOnInit() {
    this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
    console.log('myShoppingCart', this.shoppingCart)
  }

}
