import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../Quote';


@Component({
  selector: 'app-quotedetail',
  templateUrl: './quotedetail.component.html',
  styleUrls: ['./quotedetail.component.css']
})
export class QuotedetailComponent implements OnInit {
  @Input()
  Quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }
  
  upvote(){
    this.Quote.likes+=1;
  }
  downvote(){
    this.Quote.dislikes+=1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
function complete(complete: any) {
  throw new Error('Function not implemented.');
}

