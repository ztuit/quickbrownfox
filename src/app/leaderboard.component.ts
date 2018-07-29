

import { Component, OnInit } from '@angular/core';

import { PlayerScore } from './PlayerScore';
import { LeaderBoardService } from './leaderboard.service';

@Component({
  selector: 'leader-board',
  templateUrl: './leaderboard.template.html',
  styleUrls: ['./leaderboard.component.css', 'app.synthwave.less']
})
export class LeaderBoardComponent implements OnInit {

  entities: PlayerScore[] = [];

  constructor(private leaderboardService: LeaderBoardService) { }

  ngOnInit(): void {
    this.leaderboardService.getEntities()
      .then(entities => {console.log(" entitiy response " + JSON.stringify(entities)); this.entities = entities.slice(0, 5)});
  }
}
