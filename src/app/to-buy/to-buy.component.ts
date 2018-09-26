import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../services/petitions.service';
import { BookPictures } from '../models/BookPictures';
import { Router } from "@angular/router";


declare var  $:any;
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
  public modalDis = []
  public inputResult: string = "";
  public values = '';
  public bookID:any;;
  public clickedID: any;


  constructor(
    private _petitionsService: PetitionsService,
    private _router: Router,


  ) {
    this.BookPicture = [
      new BookPictures(25, '../assets/img/portada.png'),
    ];
    this.DisplayBooks = true;
  }

  onKey(value: string) {
    console.log(value);
  }
  // Show not found option 
  demoDisplay() {
    document.getElementById("GetAlert").style.display = "block";
  }

// Calling data
  getBooksfr() {
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
// SHowing data to the view
  ngOnInit() {
    this.getBooksfr();
  }

  // Search Result
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
        console.log("Fatal error")
      }
    }
  }



// Show book Modal
  DisplayInModal(bookID) {
    console.log("modal Works");
    for (let i = 0; i < this.book.length; i++) {
      if (this.book[i].id == bookID) {
        this.modalDis = [];
        this.modalDis.push(this.book[i])
        console.log(this.modalDis);
      } else {
        console.log("Fatal error")
        console.log(this.modalDis);
      }
    }

  }

// Testing form submit
  onSubmit() {
    console.log("Form Submitted!");
  }

}



