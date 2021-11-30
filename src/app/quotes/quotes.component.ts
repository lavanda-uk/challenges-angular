import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '@app/home/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  @Input() quotes: Quote[] = [];

  constructor() {}

  public ngOnInit(): void {}

  public sortByDate(): void {
    this.quotes.sort((a: Quote, b: Quote) => {
      return a.date < b.date ? 1 : -1;
    });
  }

  public sortByUpVotes(): void {
    this.quotes.sort((a: Quote, b: Quote) => {
      return b.upVotes - a.upVotes;
    });
  }
}
