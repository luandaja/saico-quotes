import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  constructor(private http: HttpClient) {}

  getQuote(): Observable<string> {
    return this.http
      .get('https://us-central1-saico-quotes.cloudfunctions.net/getRandomQuote')
      .pipe(map(res => res as string));
  }
}
