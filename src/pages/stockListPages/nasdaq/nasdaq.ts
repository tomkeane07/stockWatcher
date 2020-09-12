import { RestProvider } from '../../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import stockListBase from '../stockListBase'


/**
 * Generated class for the NasdaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nasdaq',
  templateUrl: 'nasdaq.html',
})
export class NasdaqPage extends stockListBase{

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    super( navCtrl, navParams, restProvider);
    this.getNASDAQDataObjectsFromPromise()
  }

  getNASDAQDataObjectsFromPromise() {
    this.restProvider.getNASDAQDataFromAPIViaPromise().then(data => {
      this.stockData = data;
      this.bindDataToHTML(data)
    });
  }
}
