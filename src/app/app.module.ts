import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotedetailComponent } from './quotedetail/quotedetail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteFooterComponent } from './quote-footer/quote-footer.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from './date.pipe';
import { HighlightDirective } from './ highlight-quote';
@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotedetailComponent,
    QuoteFormComponent,
    QuoteFooterComponent,
    DatePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
