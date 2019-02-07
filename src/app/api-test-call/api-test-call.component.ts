import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApiTestCallService } from '../api-test-call.service';
import { routing } from '../app.routing';
import * as $ from 'jquery';
import * as dot from 'dot-wild';
import { Game } from '../models/game.model';
import {BrowserModule, DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'
import { AuthenticationService } from '../authentication.service';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from "firebase";

@Component({
  selector: 'app-api-test-call',
  templateUrl: './api-test-call.component.html',
  styleUrls: ['./api-test-call.component.css'],
  providers: [ApiTestCallService,AuthenticationService],
  moduleId: module.id,
})

export class ApiTestCallComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private userName: String;
  iframeUrl: SafeResourceUrl;
  game: Game = new Game();
  safeUrl(){
    return this.domSanitizer.bypassSecurityTrustResourceUrl(
    'https://en.wikipedia.org/?curid=' +this.game.endId);
  }
  article: any[] = null;

  getArticle(query) {
    this.wikiApiCall.getByPageId(query).subscribe(response => {
        this.article = response.json();
        $("#inputThing").val('');
        let thing = response.json().parse;
        console.log('clickedthing',thing)
        console.log(this.game);
                console.log('ALL USER DATA',this.user);
                console.log('user displayName',this.user.displayName);
        this.game.username = this.user.displayName;
        this.winCheck(thing.pageid)
        this.game.articleHistoryTitles.push(thing.displaytitle);
        $("#title").text(thing.displaytitle);
        this.game.articleHistoryIDs.push(thing.pageid)
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

    winCheck(pageId) {
  if (pageId != this.game.endId) {
    $("#gameStatus").empty();
    $("#gameStatus").text("you have not won yet!");
    let statement: string = 'not yet';
    console.log(statement)
  }
  else if (pageId == this.game.endId) {
    $("#gameStatus").empty();
    $("#gameStatus").text("YOU WON!");
    let statement: string = ' you won '
    console.log(statement)
  }
}

  constructor(private wikiApiCall: ApiTestCallService, private http: Http,private domSanitizer: DomSanitizer,public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  //   this.html = sanitizer.bypassSecurityTrustHtml('<iframe src="https://en.wikipedia.org/?curid='+this.game.endId+'" width="" height=""></iframe>')



  }


  ngOnChanges() {
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
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
