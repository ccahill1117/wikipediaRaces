import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { GameService } from '../game.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [GameService]
})
export class SidebarComponent implements OnInit{

  constructor(private gameService: GameService) {

  }
  getGame() {
    // this.game = this.gameService.currentGame.subscribe()
  }
  ngOnInit() {

  }

}
