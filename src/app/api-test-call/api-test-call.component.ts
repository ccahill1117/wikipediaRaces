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

@ViewChild('iframe') iframe: ElementRef;

  constructor(private wikiApiCall: ApiTestCallService) { }



  getArticle(query: string) {
    this.wikiApiCall.getByPageId(query).subscribe(response => {
      this.article = response.json();
      let thing = response.json().parse;
      console.log(this.article);
      console.log(thing);
      let content = thing.text['*'];
      $("#output").text(content);
      let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
      doc.open();
      doc.write(content);
      doc.close()
    });
  }

  ngOnInit() {


  }

}
