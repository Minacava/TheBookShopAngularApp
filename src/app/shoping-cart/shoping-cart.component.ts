import { Component, OnInit } from '@angular/core';
import { AddCartService } from '../services/add-cart.service';
declare var  $: any;

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
  public shoppingCart = [];
  public removeBooks: any;
  public countBooks: any;

  constructor() {}

  ngOnInit() {
    this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')); 
     console.log(this.shoppingCart.length);
  }


 
   
  


// Remove books from shopping cart list
 remove(removeBook) {
   console.log(removeBook);
  for (let i = 0; i < this.shoppingCart.length; i++) {
     if (removeBook === this.shoppingCart[i]) {
      this.removeBooks  = this.shoppingCart.indexOf(removeBook);
      this.shoppingCart.splice(this.removeBooks, 1);

     } else {
      console.log('Fatal error');
    }
  }
 }
}
