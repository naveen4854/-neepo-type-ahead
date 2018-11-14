import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeAheadModule } from './modules/type-ahead/type-ahead.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypeAheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
