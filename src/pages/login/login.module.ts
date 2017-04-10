import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AuthProviders ,AuthMethods ,AngularFire} from 'angularfire2' ; 
import { IonicApp, IonicErrorHandler } from 'ionic-angular';
import {AngularFireModule} from 'angularfire2' ;
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler} from '@angular/core';

import { MyApp } from './app.component';

import { HomePage  } from '../home/home'
import { LoginPage } from './login';




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
    HomePage,
    LoginPage ,
  ],
  imports: [
     BrowserModule,
     IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(config)
  
    
  ],
  exports: [
    HomePage,
    LoginPage
  ]
})
export class LoginModule {}
