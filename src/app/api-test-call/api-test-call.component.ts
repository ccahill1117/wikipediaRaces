import { Component, OnInit } from '@angular/core';
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
  providers: [ApiTestCallService]
})
export class ApiTestCallComponent implements OnInit {
  article: any[] = null;

  constructor(private wikiApiCall: ApiTestCallService) { }

  iframe = document.getElementById('iframe') as HTMLIFrameElement;


  // iframeclick() {
  //   document.getElementById("iframe").contentWindow.document.body.onclick = function() {
  //     document.getElementById("iframe").contentWindow.location.reload();
  //     console.log(contentWindow.location)
  //   }
  // }

  getArticle(query: string) {
    this.wikiApiCall.getByPageId(query).subscribe(response => {
      this.article = response.json();
      console.log(this.article);
    });
  }

  public ngOnInit() {

    $(document).ready(function(){
       $("#iframe").click(function(){
         console.log('hi')
       });
   });


  }

}
