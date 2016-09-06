import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PostModel } from '../../model/PostModel';
import 'rxjs/add/operator/map';

/*
  Generated class for the WordpressService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WordpressService {
  private postModel:[PostModel];
  private data:any;
  constructor(private http: Http) {}

  loaddetail(id:number){
  
	  return new Promise(resolve => {
	    this.http.get('http://i-create.org/wp-json/wp/v2/posts/' + id)
	      .map(res => res.json())
	      .subscribe(data => {
	      	this.postModel = data;
	        this.data = data;
	        console.log(this.postModel);
	        resolve(this.data);
	      });
	  });

  }

  load() {
	  if (this.data) {
	    // already loaded data
	    return Promise.resolve(this.data);
	  }

	  // don't have the data yet
	  return new Promise(resolve => {
	    // We're using Angular HTTP provider to request the data,
	    // then on the response, it'll map the JSON data to a parsed JS object.
	    // Next, we process the data and resolve the promise with the new data.
	    this.http.get('http://i-create.org/wp-json/wp/v2/posts')
	      .map(res => res.json())
	      .subscribe(data => {
	        // we've got back the raw data, now generate the core schedule data
	        // and save the data for later reference
	        this.data = data;
	        this.postModel = data;
	        resolve(this.data);
	      });
	  });
 	}



}

