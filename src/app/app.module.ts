import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { TempComponent } from './temp/temp.component';
import { RentalModule } from './rental/rental.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TempComponent],
  imports: [BrowserModule, AppRoutingModule, RentalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
