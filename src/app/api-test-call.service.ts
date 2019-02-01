import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiTestCallService {

  getByQuery(query: string) {
    return this.http.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json`)
  }

  constructor(private http: Http) { }

}
