import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../core/quotes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.scss']
})
export class QuotePageComponent implements OnInit {
  quote: Observable<string>;

  constructor(private quote$: QuotesService) {}

  ngOnInit() {
    this.quote = this.quote$.getQuote();
  }
}
