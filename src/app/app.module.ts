import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { BookViewPage } from '../pages/book-view/book-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../providers/auth-service';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAuM-xMkb0u74Z9TYpj_SPGNBZCUIOPRug",
  authDomain: "libre-listen.firebaseapp.com",
  databaseURL: "https://libre-listen.firebaseio.com",
  storageBucket: "libre-listen.appspot.com",
  messagingSenderId: "406293891028"
};

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    BookViewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    BookViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
