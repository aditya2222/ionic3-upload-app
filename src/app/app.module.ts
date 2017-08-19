import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { config } from "./app.firebase.config";
import * as firebase from 'firebase';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireModule } from "angularfire2";
import { MyApp } from './app.component';
import { UserProvider } from '../providers/user/user';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { AuthProvider } from "../providers/auth/auth";

firebase.initializeApp(config)
@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement:'top'}),
    AngularFireModule.initializeApp(config),
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileChooser,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    UserProvider,
    ImghandlerProvider,
    AuthProvider
  ]
})
export class AppModule {}
