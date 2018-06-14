import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuotePageComponent } from './quote-page/quote-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule(
  {
    declarations: [
      AppComponent,
      QuotePageComponent
    ],
    imports: [
      FlexLayoutModule,
      BrowserModule,
      HttpClientModule,
      ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [
      AppComponent
    ]
  }
)
export class AppModule {}
