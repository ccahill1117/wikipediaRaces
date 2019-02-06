import { Injectable } from '@angular/core';
import { Game } from './models/game.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.games = database.list('games');
  }

  getGames() {
  return this.games;
  }

  getGameById(key){
    return this.database.object(key);
  }

  updateGame(key,localgame) {
  return this.database.object('/games/'+key).update({
    articleHistoryTitles: localgame.articleHistoryTitles,
    articleHistoryIDs: localgame.articleHistoryIDs,
    score: localgame.score,
                                 });

  }

  winGame(key,localgame) {
    return this.database.object('/games/'+key).update({
      gameStatus: localgame.gameStatus,
                                   });
  }

  addGame(newGame) {
    return this.games.push(newGame).key;
  }


 }
