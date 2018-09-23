import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { SearchComponent } from '../search/search.component'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [
    SearchComponent

  ]
})
export class HeaderComponent implements OnInit {
  public login: boolean;
  
  constructor(
    private _router:Router) { 
      this.login = false;
    }

  ngOnInit() {
  }
 redirect(){
  this._router.navigate(['ToBuy']);
 }
 setLogin(){
   this.login = true;
 }
 unsetLogin(){
  this.login = false;
 }
}
