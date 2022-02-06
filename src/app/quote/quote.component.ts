


import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes: Quote[]=[
    new Quote (1,'Alexis','Human spirit','The human spirit must prevail over technology to allow humans be in charge.','Albert Einstein',1,0 , new Date(2022-2-5)),
    new Quote (2,'Wanja','Technology…','Technology… the knack of so arranging  that we don’t have to experience it.','Max Frisch',1,0, new Date(2022,2,6),),
    new Quote (3,'Korir','The great myth','The great myth of our times is that technology is communication.','Libby Larsen',1,0 ,new Date(2022,2,7)),
    new Quote (4,'Sharon','Communication','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky',1,0, new Date(2022,2,8)),
    new Quote (5,'Paul','Code and people','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',1,0 ,new Date(2022,2,9)),
    new Quote (6,'Kipchumba','Tech and life','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn',1,0 ,new Date(2022,2,10))
  ];
  addQuote(){
    this.quotes.push( )
    console.warn(this.quotes)
}
 deleteQuote(){

 }
  constructor() { 
    
  }

  ngOnInit(): void {
  }
 
}
