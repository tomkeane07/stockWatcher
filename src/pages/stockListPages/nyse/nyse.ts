import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../../providers/rest/rest';
import stockListBase from '../stockListBase'

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
export class NysePage extends stockListBase{

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    super( navCtrl, navParams, restProvider);
    this.getNYSEDataObjectsFromPromise()
  }

  getNYSEDataObjectsFromPromise() {
    this.restProvider.getNYSEDataFromAPIViaPromise().then(data => {
      this.stockData = data;
      this.bindDataToHTML(data)
    });
  }
}
