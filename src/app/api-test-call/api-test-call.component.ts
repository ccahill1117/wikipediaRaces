import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApiTestCallService } from '../api-test-call.service';
import { routing } from '../app.routing';
import * as $ from 'jquery';
import * as dot from 'dot-wild';
import { Game } from '../models/game.model';
// import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';
import {BrowserModule, DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'


@Component({
  selector: 'app-api-test-call',
  templateUrl: './api-test-call.component.html',
  styleUrls: ['./api-test-call.component.css'],
  providers: [ApiTestCallService],
  moduleId: module.id,
})

export class ApiTestCallComponent implements OnInit {
  iframeUrl: SafeResourceUrl;
  safeUrl(){
    return this.domSanitizer.bypassSecurityTrustResourceUrl(
    'https://en.wikipedia.org/?curid=' +this.game.endId);
  }
  article: any[] = null;
  game: Game = new Game();

  getArticle(query) {
    this.wikiApiCall.getByPageId(query).subscribe(response => {
      this.article = response.json();
      $("#inputThing").val('');
      let thing = response.json().parse;
      let content = thing.text['*'];
      $("#output").empty();
      $("#output").html(thing.text['*']);
      $("a").click(function() {
        return false;
      })
      let that = this;
      $("a").click(function(event) {
        event.preventDefault();
        let clickedURL = ($(this).attr("href"));
        let clickedLink = clickedURL.substr(clickedURL.lastIndexOf('/') + 1);
        $(".checkDiv").text(clickedLink);
        $("#inputThing").val(clickedLink);
        that.getArticle(clickedLink);
      })

    });
  }
  constructor(private wikiApiCall: ApiTestCallService, private http: Http,private domSanitizer: DomSanitizer) {
  //   this.html = sanitizer.bypassSecurityTrustHtml('<iframe src="https://en.wikipedia.org/?curid='+this.game.endId+'" width="" height=""></iframe>')



  }


  ngOnChanges() {
}

  ngOnInit() {
    this.wikiApiCall.getRandomPage().subscribe(response => {
      this.game.beginArticle = dot.get(response.json(), 'query.pages.*.title')[0]
      this.game.beginId = dot.get(response.json(), 'query.pages.*.pageid')[0]
      this.getArticle(this.game.beginArticle);

    });
    this.wikiApiCall.getRandomPage().subscribe(response => {
      this.game.endArticle = dot.get(response.json(), 'query.pages.*.title')[0]
      this.game.endId = dot.get(response.json(), 'query.pages.*.pageid')[0]
      console.log(this.game.endId)
    });


  }



}
