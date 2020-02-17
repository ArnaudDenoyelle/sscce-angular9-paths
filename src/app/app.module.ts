import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyLibModule } from 'projects/my-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
