import { Injectable } from '@angular/core';
import { Game } from './models/game.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.games = database.list('games');
  }

  addGame(newGame) {
  this.games.push(newGame);
}

}
