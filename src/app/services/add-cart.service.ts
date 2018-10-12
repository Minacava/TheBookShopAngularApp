import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {
  public shoppingCart = [];
  constructor() { }



   remove(shoppingCart) {
  for (let i = 0; i < this.shoppingCart.length; i++) {

     if (this.shoppingCart[i] === this.shoppingCart) {
       this.shoppingCart.splice(this.shoppingCart[i]);
        console.log(this.shoppingCart[i].id);
     }
  }
 }
}
