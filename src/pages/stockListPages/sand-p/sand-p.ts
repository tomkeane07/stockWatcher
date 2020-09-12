import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../../providers/rest/rest';
import stockListBase from '../stockListBase'


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
export class SandPPage extends stockListBase{

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    super( navCtrl, navParams, restProvider);
    this.getSP500DataObjectsFromPromise()
  }

  getSP500DataObjectsFromPromise() {
    this.restProvider.getSP500DataFromAPIViaPromise().then(data => {
      this.stockData = data;
      this.bindDataToHTML(data)
    });
  }
}