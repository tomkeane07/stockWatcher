import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the SandPPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sand-p',
  templateUrl: 'sand-p.html',
})
export class SandPPage {

  SPstockData: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public navParams: NavParams) {
    this.getSP500DataObjectsFromPromise();
  }

  getSP500DataObjectsFromPromise() {
    this.restProvider.getSP500DataFromAPIViaPromise().then(data => {
      console.log("Trying to access S&P500 results from the Promise return");

      this.SPstockData = data;
      console.log("Got results from the S&P500 Promise");
      console.log(this.SPstockData);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SandPPage');
  }

  public goToHomePage(){

    this.navCtrl.setRoot(HomePage);    // // by using setroot we get rid of the back button when we go back to the home page
  }

}
