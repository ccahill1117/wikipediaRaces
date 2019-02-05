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
  // template: '<iframe #iframe></iframe>'

})
export class ApiTestCallComponent implements OnInit {
  article: any[] = null;

// @ViewChild('iframe') iframe: ElementRef;

  constructor(private wikiApiCall: ApiTestCallService) { }

  getArticle(query) {
    this.wikiApiCall.getByPageId(query).subscribe(response => {
      this.article = response.json();
      let thing = response.json().parse;
      console.log(this.article);
      console.log(thing);
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
        alert(clickedLink);

        setTimeout(() => {
                    console.log('hi');
                    this.getArticle(clickedLink);
                }, 1000);

      })




    });
  }

  // getArticle2(query) {
  //   this.wikiApiCall.getByPageId(query).subscribe(response => {
  //     this.article = response.json();
  //     let thing = response.json().parse;
  //     console.log(this.article);
  //     console.log(thing);
  //     let content = thing.text['*'];
  //     $("#output").empty();
  //     $("#output").html(thing.text['*']);
  //
  //     $("a").click(function() {
  //       return false;
  //     })
  //     $("a").click(function() {
  //       let clickedURL = ($(this).attr("href"));
  //       let clickedLink = clickedURL.substr(clickedURL.lastIndexOf('/') + 1);
  //       $(".checkDiv").text(clickedLink);
  //       alert(clickedLink);
  //       this.getArticle(clickedLink);
  //     })
  //   })
  // }


  ngOnChanges() {
}

  ngOnInit() {


  }



  }
