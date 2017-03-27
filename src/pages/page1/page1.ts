import { Component } from '@angular/core';
import "rxjs/add/operator/map";

import { NavController } from 'ionic-angular';
import {BookViewPage} from '../book-view/book-view';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  works: FirebaseListObservable<any>;
  maxWorks: number;
  constructor(public navCtrl: NavController, af: AngularFire) {
    this.maxWorks = 20;
    this.works = af.database.list('/works', {
      query: {
        limitToFirst: this.maxWorks
        // orderByChild: 'startDate'
      }
    });
    console.log(this.works);
  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    console.log(this);
    console.log(this.maxWorks);
  }
  goToDetails($event, book){
    console.log(book);
		this.navCtrl.push(BookViewPage, book);
	}
}
