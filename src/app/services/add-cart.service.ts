import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable(
)
export class AddCartService {
  public shoppingCartLe: string;
  public shoppingCartlength;

  constructor() { }


  getQ() {
    this.shoppingCartLe = JSON.parse(localStorage.getItem('shoppingCart'));
    this.shoppingCartlength = this.shoppingCartLe.length;
    return this.shoppingCartlength;
  }
}
