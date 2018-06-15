import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    //MOdify dataset here
    const entities = [
      { id: 0,  name: "one" },
      { id: 1,  name: "two" }
    ];
    return {entities};
  }
}
