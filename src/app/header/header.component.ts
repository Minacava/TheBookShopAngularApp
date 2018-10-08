import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from '../services/auth.service';
import { auth } from 'firebase';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})
export class HeaderComponent implements OnInit{
  public isLogin: boolean;
  public userName : string;
  public userEmail: string;

 constructor(
  public authService:AuthService,
 ){

 }
 ngOnInit(){
   this.authService.getAuth().subscribe ( auth => {
     if ( auth ){
       this.isLogin = true;
       this.userName = auth.displayName;
       this.userEmail = auth.email;
     }else{
      this.isLogin = false;
     }


   })

 }
 onclickLogout(){
   this.authService.logout();
   console.log("LOGOUT")
 }

}
