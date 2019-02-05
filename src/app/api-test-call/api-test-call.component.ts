import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApiTestCallService } from '../api-test-call.service';
import { routing } from '../app.routing';
import * as $ from 'jquery';
import * as dot from 'dot-wild';


@Component({
  selector: 'app-api-test-call',
  templateUrl: './api-test-call.component.html',
  styleUrls: ['./api-test-call.component.css'],
  providers: [ApiTestCallService],
  moduleId: module.id,

})
export class ApiTestCallComponent implements OnInit {
  article: any[] = null;

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
      $("a").dblclick(function() {
        let clickedURL = ($(this).attr("title"));
        let clickedLink = clickedURL.substr(clickedURL.lastIndexOf('/') + 1);

        return false;
      })

    });
  }

  constructor(private wikiApiCall: ApiTestCallService, private http: Http) {
    $.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&origin=*&grnnamespace=0&prop=revisions&rvprop=content&grnlimit=1`).then(function(response) {
      console.log(response);
      const thing2 = dot.get(response, 'query.pages.*.title')
      let thing = thing2[0];
      console.log(thing)
      $("#inputThing").val(thing);

  })
  }

    ngOnInit() {  }

}
