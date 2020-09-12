import { RestProvider } from '../../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../home/home';
import stockListPageUtilities from '../stockListPageUtilities';

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
export class NasdaqPage {

  NASDAQstockData: any;
  htmlStockData: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getNASDAQDataObjectsFromPromise();
  }

  getNASDAQDataObjectsFromPromise() {
    this.restProvider.getNASDAQDataFromAPIViaPromise().then(data => {
      console.log("Trying to access NASDAQ results from the Promise return");

      this.NASDAQstockData = data;
      console.log("Got NASDAQ results from the Promise");
      this.bindDataToHTML(data)
    })
  }

  bindDataToHTML(stockData: Object) {
    this.htmlStockData += stockListPageUtilities.parseStockData(stockData)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NasdaqPage');
  }

  public goToHomePage(){
    this.navCtrl.setRoot(HomePage);   // by using setroot we get rid of the back button when we go back to the home page
  }

}
