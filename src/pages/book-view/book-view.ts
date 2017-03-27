import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the BookView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-book-view',
  templateUrl: 'book-view.html'
})
export class BookViewPage {
  book: FirebaseObjectObservable<any>;
  sections: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.book = af.database.object('/works/' + this.navParams.data.$key);
    this.sections = af.database.list('/sections/', { query: { orderByChild: 'work', equalTo: this.navParams.data.$key } });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookViewPage');
    console.log(this);
    console.log(this.navParams);
  }

}
