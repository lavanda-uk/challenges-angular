import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Quote, QuoteService } from './quote.service';

describe('QuoteService', () => {
  let quoteService: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuoteService],
    });

    quoteService = TestBed.inject(QuoteService);
  });

  describe('getQuotes', () => {
    it('should quotes from chuck Norris', (done: () => void) => {
      quoteService.getQuotes().subscribe((quotes: Quote[]) => {
        expect(quotes.length).toEqual(8);
        done();
      });
    });
  });
});
