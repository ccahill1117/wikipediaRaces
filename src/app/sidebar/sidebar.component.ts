import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { ApiTestCallComponent } from '../api-test-call/api-test-call.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  games:Game[]= [

  ]


  constructor() {
    this.games.push( new Game());

  }

  ngOnInit() {
  }

}
