import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../services/petitions.service';
import {BookPictures } from '../models/BookPictures';

@Component({
  selector: 'app-to-buy',
  templateUrl: './to-buy.component.html',
  styleUrls: ['./to-buy.component.css'],
  providers: [
    PetitionsService
  ]
  
})
export class ToBuyComponent implements OnInit {
  public user:any;
  public BookPicture: Array<BookPictures>;
  constructor(
    private _petitionsService:PetitionsService

  ) {
    this.BookPicture = [
      new BookPictures ( 25, '../assets/img/portada.png'),
   

  ];
   }

  ngOnInit() {
    this._petitionsService.getBook().subscribe(
        result => {
         this.user = result;
         console.log(result);
        },
        error => {
          console.log(<any>error);
        }
    );
  }
 
}
