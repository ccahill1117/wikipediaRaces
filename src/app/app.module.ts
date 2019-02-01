import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ApiTestCallComponent } from './api-test-call/api-test-call.component';
import { routes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    ApiTestCallComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
