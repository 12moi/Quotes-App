

import { Component, OnInit } from '@angular/core';
import { Quote } from '../Quote';





@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  Quotes: Quote[]=[
    new Quote (1,'Alexis','Human spirit','The human spirit must prevail over technology to allow humans be in charge.','Albert Einstein',0,0 , new Date(2022-2-5)),
    new Quote (2,'Wanja','Technology…','Technology… the knack of so arranging  that we don’t have to experience it.','Max Frisch',0,0, new Date(2022,2,6),),
    new Quote (3,'Korir','The great myth','The great myth of our times is that technology is communication.','Libby Larsen',0,0 ,new Date(2022,2,7)),
    new Quote (4,'Sharon','Communication','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky',0,0, new Date(2022,2,8)),
    new Quote (5,'Paul','Code and people','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',0,0 ,new Date(2022,2,9)),
    new Quote (6,'Kipchumba','Tech and life','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn',0,0 ,new Date(2022,2,10))
  ];
  
 
  addQuote(quote: Quote){
    let arraysize = this.Quotes.length;
    quote.id = arraysize+1;
    quote.datePosted = new Date(quote.datePosted)
    this.Quotes.push(quote)
  }
 

  quoteDelete(isRead: any, index: any){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this ${this.Quotes[index].quotetitle} Quote?`)
      if(toDelete){
        this.Quotes.splice(index,1);
      }
      
    }
  }
  // event: any
  //  i: any
  showInfo(index:any){
    this.Quotes[index].showDescription = !this.Quotes[index].showDescription;
  }
 
  constructor() { 
    
  }

  ngOnInit(): void {
  }
 
}
