import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { LeaderBoardSearchService } from './leaderboard-search.service';
import { PlayerScore } from './PlayerScore';

@Component({
  selector: 'leaderboard-search',
  templateUrl: './leaderboard-search.component.html',
  styleUrls: [ './leaderboard-search.component.css' ],
  providers: [LeaderBoardSearchService]
})
export class LeaderBoardSearchComponent implements OnInit {
  entities: Observable<PlayerScore[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private leaderBoardSearchService: LeaderBoardSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.entities = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.leaderBoardSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<PlayerScore[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<PlayerScore[]>([]);
      });
  }

  gotoDetail(entity: PlayerScore): void {
    let link = ['/detail', entity.name];
    this.router.navigate(link);
  }
}
