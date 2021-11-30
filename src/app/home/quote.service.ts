import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Quote {
  id: string;
  quote: string;
  upVotes: number;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor() {}

  private quotes: Quote[] = [
    {
      id: '1',
      quote: 'Chuck Norris can overflow your stack just by looking at it.',
      upVotes: 12,
      date: '2020-01-24',
    },
    {
      id: '2',
      quote: 'Chuck Norris does not need to know about class factory pattern. He can instantiate interfaces.',
      upVotes: 22,
      date: '2019-11-23',
    },
    {
      id: '3',
      quote: 'All arrays Chuck Norris declares are of infinite size, because Chuck Norris knows no bounds.',
      upVotes: 2,
      date: '2021-11-22',
    },
    {
      id: '4',
      quote: "Chuck Norris doesn't need to use AJAX because pages are too afraid to postback anyways.",
      upVotes: 72,
      date: '2019-01-21',
    },
    {
      id: '5',
      quote: 'Chuck Norris can unit test entire applications with a single assert.',
      upVotes: 24,
      date: '2019-10-21',
    },
    {
      id: '6',
      quote: 'The class object inherits from Chuck Norris',
      upVotes: 1,
      date: '2019-11-21',
    },
    {
      id: '7',
      quote: "Chuck Norris doesn't use web standards as the web will conform to him.",
      upVotes: 7,
      date: '2014-12-31',
    },
    {
      id: '8',
      quote: "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris.",
      upVotes: 34,
      date: '2018-12-31',
    },
  ];

  /**
   * Simulate an API call
   */
  public getQuotes(): Observable<Quote[]> {
    return of(this.quotes).pipe(delay(1000));
  }
}
