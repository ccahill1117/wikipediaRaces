import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as $ from 'jquery';

@Injectable()
export class ApiTestCallService {

  getByPageId(pageId: string) {
    // return this.http.get(`https://en.wikipedia.org/w/api.php?action=parse&origin=*&pageid=${pageId}&format=json`)
    return this.http.get(`https://en.wikipedia.org/w/api.php?action=parse&origin=*&page=${pageId}&format=json`)
  }

  getRandomPage() {
    return this.http.get(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=random&rnlimit=1`)

  }

  getByPageIdNumber(pageId: string) {
      return this.http.get(`https://en.wikipedia.org/w/api.php?action=parse&origin=*&pageid=${pageId}&format=json`)
  }

  constructor(private http: Http) { }

}
