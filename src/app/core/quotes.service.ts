import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IQuote } from 'src/interfaces/IQuote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  constructor(private http: HttpClient) {}

  getQuote(): Observable<IQuote> {
    return this.http
      .get('https://us-central1-saico-quotes.cloudfunctions.net/getRandomQuote')
      .pipe(map(res => res as IQuote));
  }
}
