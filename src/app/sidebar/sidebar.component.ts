import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  games:Game[]= [

  ]


  constructor() {
    this.games.push( new Game("ryan",0,[]));

  }

  ngOnInit() {
  }

}
