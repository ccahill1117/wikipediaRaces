import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ApiTestCallComponent } from './api-test-call/api-test-call.component';
import { routes } from './app.routing';
import { WikiComponent } from './wiki/wiki.component';


@NgModule({
  declarations: [
    AppComponent,
    ApiTestCallComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
