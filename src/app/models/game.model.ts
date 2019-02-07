

export class Game {

  constructor(
    public timeStamp: string,
    public email: string = '',
    public score: number = 100,
    public beginArticle: string = '',
    public endArticle: string = '',
    public beginId: number = null,
    public endId: number = null,
    public articleHistoryTitles: string[] = [],
    public articleHistoryIDs: string[] = [],
    public gameStatus: string = "Incomplete"

    ) {

  }
}
