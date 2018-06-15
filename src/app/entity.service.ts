import { Injectable } from '@angular/core';


import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';



import { Entity } from './entity';
import { ENTITIES } from './mock-entities';





@Injectable()
export class EntityService {

	private entitiesUrl = 'api/entities';  // URL to web api

	constructor(private http: Http) { }

	getEntities(): Promise<Entity[]> {

    return this.http.get(this.entitiesUrl)
             .toPromise()
             .then(response => { return response.json().data as Entity[];})
             .catch(this.handleError);
  	}

  	getEntity(id: number): Promise<Entity> {
  			const url = `${this.entitiesUrl}/${id}`;
		  return this.http.get(url)
		    .toPromise()
		    .then(response => response.json().data as Entity)
		    .catch(this.handleError);
	}

	private headers = new Headers({'Content-Type': 'application/json'});

	update(entity: Entity): Promise<Entity> {
	  const url = `${this.entitiesUrl}/${entity.id}`;
	  return this.http
	    .put(url, JSON.stringify(entity), {headers: this.headers})
	    .toPromise()
	    .then(() => entity)
	    .catch(this.handleError);
	}

	create(name: string): Promise<Entity> {
	  return this.http
	    .post(this.entitiesUrl, JSON.stringify({name: name}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data as Entity)
	    .catch(this.handleError);
	}

	delete(id: number): Promise<void> {
	  const url = `${this.entitiesUrl}/${id}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}


	private handleError(error: any): Promise<any> {
  		console.error('An error occurred', error); // for demo purposes only
  		return Promise.reject(error.message || error);
	}
}
