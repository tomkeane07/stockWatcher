import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../../providers/rest/rest';
import stockListBase from '../stockListBase'


@IonicPage()
@Component({
  selector: 'page-dow-jones',
  templateUrl: 'dow-jones.html',
})
export class DowJonesPage extends stockListBase{

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    super( navCtrl, navParams, restProvider);
    this.getDowJonesDataObjectsFromPromise()
  }

  getDowJonesDataObjectsFromPromise() {
    this.restProvider.getDowJonesDataFromAPIViaPromise().then(data => {
      this.stockData = data;
      this.bindDataToHTML(data)
    });
  }
}
