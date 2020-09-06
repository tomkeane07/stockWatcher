import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NasdaqPage } from '../nasdaq/nasdaq';
import { SandPPage} from '../sand-p/sand-p';
import { DowJonesPage} from '../dow-jones/dow-jones';
import { NysePage} from '../nyse/nyse';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { AuthenticationService } from'../../services/authentication.service';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userIsAuthenticated : boolean = false;

  constructor(private afAuth: AngularFireAuth, public ourAuth: AuthenticationService,
    public navCtrl: NavController, public navParams: NavParams) {
   this.userIsAuthenticated = this.ourAuth.checkAuthStatusForApp();
    

  }


goPrivatePage() { 
    /** we need to check if this user is logged on **/
      /** if the user is not then they need to be redirected **/

      if (this.ourAuth.checkAuthStatusForApp())
      {
        this.navCtrl.setRoot(HomePage);
      }
      else
      {
        this.navCtrl.setRoot(RegisterPage);
      }

  }

 


  public goToNasdaqPage()
  {
  	this.navCtrl.push(NasdaqPage);  	
  }

  public goToSP500Page()
  {

    this.navCtrl.push(SandPPage);
  }

  public goToDowJonesPage()
  {
    this.navCtrl.push(DowJonesPage);
  }

  public goToNYSEPage()
  {
    this.navCtrl.push(NysePage);
  } 

  public goToRegisterPage() {
    this.navCtrl.push(RegisterPage);
  }


}