import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RestProvider} from '../../providers/rest/rest';



@IonicPage()
@Component({
  selector: 'page-dow-jones',
  templateUrl: 'dow-jones.html',
})
export class DowJonesPage {

  stockDataDowJones: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getDowJonesDataObjectsFromPromise();
  }

  getDowJonesDataObjectsFromPromise(){
    this.restProvider.getDowJonesDataFromAPIViaPromise().then(data => {
      console.log("Trying to access DowJones results from the Promise return");

      this.stockDataDowJones = data;

      console.log("Got DowJones results from the Promise");
      console.log(this.stockDataDowJones);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DowJonesPage');
  }

  public goToHomePage(){

    this.navCtrl.setRoot(HomePage);    // by using set root we get rid of the back button when we go back to the home page
  }

}
