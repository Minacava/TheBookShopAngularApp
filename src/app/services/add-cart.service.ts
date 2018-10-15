import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddCartService {
  public shoppingCartLe: string;
  public shoppingCartlength;

  constructor() { }


  udpateSBooks() {
    this.shoppingCartLe = JSON.parse(localStorage.getItem('shoppingCart'));
    this.shoppingCartlength = this.shoppingCartLe.length;
    return this.shoppingCartlength;
  }
}
