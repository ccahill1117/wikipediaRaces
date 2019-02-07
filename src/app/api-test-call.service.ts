import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as $ from 'jquery';
import { Game } from './models/game.model';

@Injectable()
export class ApiTestCallService {


  getByPageId(pageId: string) {
    return this.http.get(`https://en.wikipedia.org/w/api.php?action=parse&origin=*&page=${pageId}&format=json`)
  }

  getRandomPage() {
    return this.http.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&origin=*&grnnamespace=0&prop=revisions&rvprop=content&grnlimit=1`)
  }

  getByPageIdNumber(pageId: string) {
      return this.http.get(`https://en.wikipedia.org/w/api.php?action=parse&origin=*&pageid=${pageId}&format=json`)
  }

  constructor(private http: Http) { }

}
