import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { User } from '../models/User';

@Injectable()
export class AuthenticationService {

	isAuthenticated: any = null;

	constructor(public afAuth: AngularFireAuth) {

	}

	/* signInWithEmailAndPassword is provided by AngularFireAuth */
	async logonAService(userToLogon: User) {

		try {
			console.log("in logon from AuthenticationService provider");
			const result = this.afAuth.auth.signInWithEmailAndPassword(userToLogon.email, userToLogon.password);
			console.log(result);
			return result;
		}
		catch (e) {
			console.error(e);

		}
	}

	/** here we use Angular Fire to simply sign the current user out **/
	logoutAService() {
		this.afAuth.auth.signOut();
	}

	/* createUserWithEmailAndPassword is provided by AngularFireAuth */
	async registerAService(userToRegister: User) {
		try {
			console.log("in register from AuthenticationService provider");
			const result = await this.afAuth.auth.createUserWithEmailAndPassword(userToRegister.email, userToRegister.password);
			console.log(result);
		}
		catch (e) {
			console.error(e);
		}

	}


	checkAuthStatusForApp() {
		this.afAuth.auth.onAuthStateChanged(data => {
			if (data) {
				this.isAuthenticated = true;
			}
			else {
				this.isAuthenticated = false;
			}
		});

		return this.isAuthenticated;
	}


}