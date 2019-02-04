import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiTestCallService {

  getByPageId(pageId: string) {
    return this.http.get(`https://en.wikipedia.org/w/api.php?action=parse&pageid=${pageId}`)
  }

  constructor(private http: Http) { }

}
