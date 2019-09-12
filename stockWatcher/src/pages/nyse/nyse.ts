import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the NysePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nyse',
  templateUrl: 'nyse.html',
})
export class NysePage {

  NYSEstockData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getNYSEDataObjectsFromPromise();
  }

  getNYSEDataObjectsFromPromise(){
    this.restProvider.getNYSEDataFromAPIViaPromise().then(data => {
      console.log("Trying to access NYSE results from the Promise return");

      this.NYSEstockData = data;

      console.log("Got NYSE results from the Promise");
      console.log(this.NYSEstockData);
    })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad NysePage');
  }

  public goToHomePage(){

    this.navCtrl.setRoot(HomePage);    // by using setroot we get rid of the back button when we go back to the home page
  }

}
