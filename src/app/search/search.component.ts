import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../services/petitions.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    PetitionsService

  ]
})
export class SearchComponent implements OnInit {
  public user:any;
  public matches = [];
  public inputResult:string = "";
  public clickMessage = "";
  public values = '';

  constructor(
    private ps:PetitionsService
  ) { }
 
  onKey(value: string) {
    console.log(value);
  }
  ngOnInit() {
    this.ps.getBook().subscribe(
      result => {
       this.user = result;
       console.log(result);
      },
  );
  }

onClickMe(inputResult) {
  for(let i = 0; i < this.user.length; i++){
    if (inputResult == this.user[i].title) {
   this.matches.push(this.user[i])
        console.log(this.matches );
    } else if (inputResult != this.user[i].title)  {
        console.log(inputResult , 'Not Found');
    }
    else{
      console.log('ERROR!')
    }
  }
}
}
