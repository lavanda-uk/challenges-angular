import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared';
import { QuotesComponent } from './quotes.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [QuotesComponent],
  exports: [QuotesComponent],
})
export class QuotesModule {}
