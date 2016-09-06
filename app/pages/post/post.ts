import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WordpressService } from '../../providers/wordpress-service/wordpress-service';


/*
  Generated class for the PostPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/post/post.html',
  providers: [WordpressService]
})
export class PostPage {

  public _post:any = [];
  constructor(private navCtrl: NavController, private navParams:NavParams, public wordpressService: WordpressService) {
  	this.loadPost(navParams);
  }

  loadPost(id){
	this.wordpressService.loaddetail(id.data)
	  .then(data => {
	    this._post.push(data);
	  });
	}

}
