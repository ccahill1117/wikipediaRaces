import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ApiTestCallComponent } from './api-test-call/api-test-call.component';
import { routing } from './app.routing';
import { WikiComponent } from './wiki/wiki.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    ApiTestCallComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
