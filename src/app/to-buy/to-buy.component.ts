import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../services/petitions.service';
import { BookPictures } from '../models/BookPictures';

import { Router } from "@angular/router";

@Component({
  selector: 'app-to-buy',
  templateUrl: './to-buy.component.html',
  styleUrls: ['./to-buy.component.css'],
  providers: [
    PetitionsService,

  ]
})
export class ToBuyComponent implements OnInit {
  public book: any;
  public BookPicture: Array<BookPictures>;
  public SearchBook: boolean;
  public matches = [];
  public inputResult: string = "";
  public values = '';


  constructor(
    private _petitionsService: PetitionsService,


  ) {
    this.BookPicture = [
      new BookPictures(25, '../assets/img/portada.png'),
    ];
    this.SearchBook = true;
  }

  onKey(value: string) {
    console.log(value);
  }
  ngOnInit() {
    this._petitionsService.getBook().subscribe(
      result => {
        this.book = result;
        console.log(result);

      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onClickMe(inputResult, result) {
    for (let i = 0; i < this.book.length; i++) {
      if (inputResult == this.book[i].title) {
        this.matches.push(this.book[i])
        console.log(this.matches);
      } else if (inputResult != this.book[i].title) {
        console.log('Not Found');
        this.SearchBook = false;
        
      }
      else {
        console.log('ERROR!')
      }
    }
  }

  // setSearch() {
  //   this.SearchBook = true;
  //   console.log("done")
  // }
  // unSearch() {
   
  //   console.log("done2")
  // }

}



