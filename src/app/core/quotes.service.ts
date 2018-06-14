import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IQuote } from 'src/interfaces/IQuote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  constructor(private http: HttpClient) {}

  getQuote(): Observable<IQuote> {
    return this.getQuoteFromOnline();
  }

  private getQuoteFromOnline(): Observable<IQuote> {
    return this.http
      .get('https://us-central1-saico-quotes.cloudfunctions.net/getRandomQuote')
      .pipe(
        map(res => res as IQuote)
        // tap(quote => {
        //   localStorage.setItem(quote.id, quote.message);
        // })
      );
  }
  // private getQuoteFromOffline(): Observable<IQuote> {
  //   return localStorage.getItem(Math.random());
  // }
  // private getRandomOfflineQuoteId() {
  //   const randomIndex = Math.random() * localStorage.length + 1;
  //   const randomId = localStorage;
  // }
}
