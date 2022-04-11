import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteBlockComponent } from './quote-block/quote-block.component';
import { QuoteInfoComponent } from './quote-block/quote-info/quote-info.component';
import { DatingPipe } from './dating.pipe';
import { TopQuoteDirective } from './top-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteBlockComponent,
    QuoteInfoComponent,
    DatingPipe,
    TopQuoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
