

export class Game {

  constructor(
    public username: string = '',
    public score: number = null,
    public history: string[] = [],
    public beginArticle: string = '',
    public endArticle: string = '',
    public beginId: any = '',
    public endId: any = '') {

    }
}
