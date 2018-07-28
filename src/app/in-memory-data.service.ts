import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PlayerScore } from './PlayerScore';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    //MOdify dataset here
    const leaders = [
      new PlayerScore("player1",  1),
      new PlayerScore("player2",  2)
    ];
    return {leaders};
  }
}
