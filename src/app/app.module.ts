import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';

import { AppData } from './data/appdata.service';
import { DummyData } from './data/dummydata.service';
import { FetchService } from './fetch.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 500 }),
  ],
  providers: [AppData, DummyData, FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
