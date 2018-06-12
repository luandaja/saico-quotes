import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuotePageComponent } from './quote-page/quote-page.component';

@NgModule(
  {
    declarations: [
      AppComponent,
      QuotePageComponent
    ],
    imports: [
      FlexLayoutModule,
      BrowserModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [
      AppComponent
    ]
  }
)
export class AppModule {}
