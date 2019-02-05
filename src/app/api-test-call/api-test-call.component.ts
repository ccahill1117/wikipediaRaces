import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApiTestCallService } from '../api-test-call.service';
import { routing } from '../app.routing';
import * as $ from 'jquery';


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

      $("a").click(function() {
        let clickedURL = ($(this).attr("href"));
        let clickedLink = clickedURL.substr(clickedURL.lastIndexOf('/') + 1);
        $(".checkDiv").text(clickedLink);
      })
      $("a").dblclick(function() {
        let clickedURL = ($(this).attr("title"));
        let clickedLink = clickedURL.substr(clickedURL.lastIndexOf('/') + 1);
        $("#inputThing").val(clickedLink);
        // this.getArticle(clickedLink);
        return false;
      })

    });
  }

  constructor(private wikiApiCall: ApiTestCallService, private http: Http) {
    $.get(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=random&rnlimit=1`).then(function(response) {
      console.log('initial random', response);
      let content = response.query.random[0].id;
      $("#output").empty();
      $("#output").text(response.query.random[0].id + ' ' + response.query.random[0].title);

        $.get(`https://en.wikipedia.org/w/api.php?action=parse&origin=*&pageid=${content}&format=json`).then(function(response2) {
          let thing = response2.parse;
          console.log('get article', thing);
          $("#output").html(thing.text['*']);

          $("a").click(function() {
            let clickedURL = ($(this).attr("title"));
            let clickedLink = clickedURL.substr(clickedURL.lastIndexOf('/') + 1);
            $(".checkDiv").text(clickedLink);
            return false
          })
          $("a").dblclick(function() {
            let clickedURL = ($(this).attr("title"));
            let clickedLink = clickedURL.substr(clickedURL.lastIndexOf('/') + 1);
            $("#inputThing").val(clickedLink);
            // this.getArticle(clickedLink);
            return false;
          })
        })
    })


  }


  ngOnChanges() {
}

  ngOnInit() {




  }



  }
