

import { Component, OnInit } from '@angular/core';

import { Entity } from './entity';
import { EntityService } from './entity.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.template.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  entities: Entity[] = [];

  constructor(private entityService: EntityService) { }

  ngOnInit(): void {
    this.entityService.getEntities()
      .then(entities => {console.log(" entitiy response " + JSON.stringify(entities)); this.entities = entities.slice(0, 5)});
  }
}
