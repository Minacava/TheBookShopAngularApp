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
  public DisplayBooks: boolean;
  public matches = [];
  public inputResult: string = "";
  public values = '';


  constructor(
    private _petitionsService: PetitionsService,
    private _router:Router,


  ) {
    this.BookPicture = [
      new BookPictures(25, '../assets/img/portada.png'),
    ];
    this.DisplayBooks = true;
  }

  onKey(value: string) {
    console.log(value);
  }
    demoDisplay() {
    document.getElementById("GetAlert").style.display = "block";
}

  getBooksfr(){
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

  ngOnInit() {
    this.getBooksfr();
  }

  onClickMe(inputResult) {
    for (let i = 0; i < this.book.length; i++) {
      if (inputResult == this.book[i].title) {
        this.matches = [];
        this.matches.push(this.book[i])
        console.log(this.matches);
      } else if (inputResult != this.book[i].title) {
        this.DisplayBooks = false;
        this.demoDisplay();
      }
      else {
       
      }
    }

  }
  onSubmit() {
      console.log("Form Submitted!");
  }

}



