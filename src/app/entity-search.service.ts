import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Entity }           from './entity';

@Injectable()
export class EntitySearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Entity[]> {
    return this.http
               .get(`api/entities/?name=${term}`)
               .map(response => response.json().data as Entity[]);
  }
}
