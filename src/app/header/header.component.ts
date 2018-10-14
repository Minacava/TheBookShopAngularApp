import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { auth } from 'firebase';
import { AddCartService } from '../services/add-cart.service';

declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isLogin: boolean;
  public userName: string;
  public userEmail: string;
  public shoppingCartLe: number;

 constructor(
  public authService: AuthService,
  public addCartService: AddCartService,
 ) {

 }
 ngOnInit() {
   // tslint:disable-next-line:no-shadowed-variable
   this.authService.getAuth().subscribe ( auth => {
     if ( auth ) {
       this.isLogin = true;
       this.userName = auth.displayName;
       this.userEmail = auth.email;
     } else {
      this.isLogin = false;
     }
   });
   this.shoppingCartLe = this.addCartService.udpateSBooks();
 }



 onclickLogout() {
   this.authService.logout();
   console.log('LOGOUT');
 }

}
