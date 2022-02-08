import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { NgForm, } from '@angular/forms';
import { Quote } from '../Quote';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote: any
  title: any
  quote = new Quote(0,"","","","",0,0 ,new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.quote);
this.quote = new Quote(0,"","","","",0,0,new Date());
  }
  constructor() { }

  ngOnInit(): void {
  }

}
