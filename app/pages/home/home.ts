import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WordpressService} from '../../providers/wordpress-service/wordpress-service';
import {SanitizeHtml} from '../../module/SanitizeHtml';
import {PostPage} from '../post/post';


@Component({
  templateUrl: 'build/pages/home/home.html',
  pipes: [SanitizeHtml],
  providers: [WordpressService]
})


export class HomePage {

  public _posts:any = [];	
  private _navCtrl:NavController;
  
  constructor(private navCtrl: NavController, public wordpressService: WordpressService) {
  	 this._navCtrl = navCtrl;
     this.loadPosts();
  }

  loadPosts(){
	  this.wordpressService.load()
	    .then(data => {
	      this._posts = data;
	  });
	}

  goToPostDetail(post){
     this._navCtrl.push(PostPage, post.id);
  }


}
