import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { HomePage } from '../../home/home';
import { RestProvider } from '../../../providers/rest/rest';
import stockListPageUtilities from '../stockListPageUtilities';
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

  NYSEstockData: Object;
  htmlStockData: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getNYSEDataObjectsFromPromise();
  }

  getNYSEDataObjectsFromPromise() {
    this.restProvider.getNYSEDataFromAPIViaPromise().then(data => {
      console.log("Trying to access NYSE results from the Promise return");
      this.NYSEstockData = data;
      console.log("Got NYSE results from the Promise");
      this.bindDataToHTML(data)
    })
  }

  bindDataToHTML(stockData: Object) {
    this.htmlStockData += stockListPageUtilities.parseStockData(stockData)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NysePage');
  }

  public goToHomePage() {
    this.navCtrl.setRoot(HomePage);    // by using setroot we get rid of the back button when we go back to the home page
  }

}
