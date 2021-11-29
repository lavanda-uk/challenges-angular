import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuotesModule } from '@app/quotes/quotes.module';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, HomeRoutingModule, QuotesModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
