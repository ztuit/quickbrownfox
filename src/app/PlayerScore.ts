export class PlayerScore {
  score: number;
  name: string;
  on: Date;
  constructor(n:string, s:number){
    this.score=s;
    this.name=n;
    this.on = new Date();
  }
}
