import { Component, OnInit } from '@angular/core';

import { Quote, QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public quotes: Quote[] = [];
  public isLoading = false;

  constructor(private quoteService: QuoteService) {}

  public ngOnInit(): void {
    this.isLoading = true;
    this.quoteService.getQuotes().subscribe((quotes: Quote[]) => {
      this.quotes = quotes;
      this.isLoading = false;
    });
  }
}
