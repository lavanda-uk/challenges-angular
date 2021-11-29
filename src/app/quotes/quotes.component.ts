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

  ngOnInit() {}
}
