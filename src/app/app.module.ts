import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {AngularFireModule} from 'angularfire2' ;

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {  LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



export const config = {
    apiKey: "AIzaSyBQeyTBeTasmfw1sY_uofaZ1jB91S28jSc",
    authDomain: "scm-1-aa5dc.firebaseapp.com",
    databaseURL: "https://scm-1-aa5dc.firebaseio.com/",
    projectId: "scm-1-aa5dc",
    storageBucket: "scm-1-aa5dc.appspot.com",
    messagingSenderId: "284082496225"
  };
   firebase.initializeApp(config);



@NgModule({
  declarations: [
      MyApp,
      HomePage,
      LoginPage,
     ListPage
    
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
     LoginPage,
    ListPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireModule,
    
  
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
