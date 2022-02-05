import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotedetailComponent } from './quotedetail/quotedetail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteFooterComponent } from './quote-footer/quote-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotedetailComponent,
    QuoteFormComponent,
    QuoteFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
