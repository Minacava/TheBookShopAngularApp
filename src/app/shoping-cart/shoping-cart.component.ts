import { Component, OnInit } from '@angular/core';
declare var  $: any;
import { AddCartService } from '../services/add-cart.service';


@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
  public shoppingCart = [];
  public removeBooks: any;
  public total;
  public product: any;


  constructor(
    public addCartService: AddCartService,
  ) {
  }

ngOnInit() {
    this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log('hola' + this.addCartService.udpateSBooks());
}

// Remove books from shopping cart list
 remove(removeBook) {
  for (let i = 0; i < this.shoppingCart.length; i++) {
    console.log('adios' + this.addCartService.udpateSBooks());
     if (removeBook === this.shoppingCart[i]) {
      this.removeBooks  = this.shoppingCart.indexOf(removeBook);
      this.shoppingCart.splice(this.removeBooks, 1);
      console.log('hola' + this.addCartService.udpateSBooks());
     } else {
      console.log('Fatal error');
      this.addCartService.udpateSBooks();
    }
  }
 }


 getTotal() {
 this.total = 0;
  for (let i = 0; i < this.shoppingCart.length; i++) {
      this.total = this.total +  this.shoppingCart[i].price;
  }
  return this.total;
}
}
