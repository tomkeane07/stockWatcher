import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NasdaqPage} from '../pages/stockListPages/nasdaq/nasdaq'; 
import { SandPPage } from '../pages/stockListPages/sand-p/sand-p';
import { DowJonesPage} from '../pages/stockListPages/dow-jones/dow-jones';
import { NysePage} from '../pages/stockListPages/nyse/nyse';
import { RestProvider } from '../providers/rest/rest';
import { FIREBASE_CONFIG } from './app.fire.config';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import {AuthenticationService} from '../services/authentication.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';



@NgModule({
  declarations: [
     RegisterPage, MyApp, HomePage, NasdaqPage, SandPPage, DowJonesPage, NysePage, LoginPage
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, AngularFireAuthModule, AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp), AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage, HomePage, NasdaqPage, SandPPage, DowJonesPage, NysePage, LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider, AngularFireModule,
    AuthenticationService
  ]
})
export class AppModule {}
