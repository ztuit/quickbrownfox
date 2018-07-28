import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PlayerScore }           from './PlayerScore';

@Injectable()
export class LeaderBoardSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<PlayerScore[]> {
    return this.http
               .get(`api/leaderboard/?name=${term}`)
               .map(response => response.json().data as PlayerScore[]);
  }
}
