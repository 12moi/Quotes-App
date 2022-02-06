import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quotes';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0,"","","","",1,0,new Date());
  constructor() { }

  ngOnInit(): void {
  }

}
