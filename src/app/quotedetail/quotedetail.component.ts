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
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
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
