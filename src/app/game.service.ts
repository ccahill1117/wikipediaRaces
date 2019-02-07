import { Injectable } from '@angular/core';
import { ApiTestCallComponent } from './api-test-call/api-test-call.component';
import { Game } from './models/game.model';
import { SidebarComponent } from './sidebar/sidebar.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
      this.games = database.list('games');
   }
   getHistory() {
     return this.games
   }
}
