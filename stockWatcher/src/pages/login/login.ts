import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { AuthenticationService } from '../../services/authentication.service';
import {User} from '../../models/user';
import {RegisterPage} from '../../pages/register/register';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	userIsAuthenticated : boolean = false;
	user = {} as User;

	constructor(private navCtrl: NavController, public navParams: NavParams,
		private ourAuth: AuthenticationService,
		private afAuth: AngularFireAuth)
	{
  		this.userIsAuthenticated = this.ourAuth.checkAuthStatusForApp();
	}

	login(userToLogon: User)
	{
		console.log("in logon page");
		this.ourAuth.logonAService(userToLogon);
		this.afAuth.authState.subscribe(data=>{
			if (data && data.email && data.uid)
			{
			console.log("Already Logged On: " + data.email + "," + data.uid);
			this.navCtrl.setRoot(HomePage);
			}
			else
			{
			console.log("log on not recognised");
			this.navCtrl.setRoot(RegisterPage);
			}
		});

	}


	register()
	{
		this.navCtrl.setRoot(RegisterPage);
	}

	goHomePage()
	{
		this.navCtrl.setRoot(HomePage);
	}

}
