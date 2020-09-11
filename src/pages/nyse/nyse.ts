import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RestProvider } from '../../providers/rest/rest';
import { range } from 'rxjs';

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
      console.log(this.NYSEstockData);
      this.bindDataToHTML(data)
    })
  }

  bindDataToHTML(stockData: Object) {
    this.htmlStockData += this.parseStockData(stockData)
  }

  parseStockData(allStockData: Object): string {
    let numberOfStockSources = Object.keys(allStockData).length
    let htmlString = ""
    for (let i = 0; i < numberOfStockSources; i++) {
      htmlString += this.generateHtmlStockSection(allStockData, i)
    }
    return htmlString
  }

  generateHtmlStockSection(allStockData: Object, i: number) : string {
    let stocks = this.getStocks(allStockData, i)
    let companyName = this.grabCompanyStockValue(stocks, "companyName")
    let latestPrice = this.grabCompanyStockValue(stocks, "latestPrice")
    let change = this.grabCompanyStockValue(stocks, "change")
    let previousClose = this.grabCompanyStockValue(stocks, "previousClose")
    let volumeTraded = this.grabCompanyStockValue(stocks, "volume")

    return "<h6><strong>" + companyName + "</strong></h6>" +
      "<p>Latest Price: " + latestPrice + "</p>" +
      "<p>Change: " + change + "</p>" +
      "<p>Previous Close: " + previousClose + "</p>" +
      "<p>Volume Traded: " + volumeTraded + "</p>";
  }

  getStocks(stockData: Object, index: number): Array<Array<any>> {
    let arrayedQuoteObjects = Object.values(stockData)
    let companyQuoteValues: Object = this.grabCompanyQuoteObject(arrayedQuoteObjects, index)
    return [Object.keys(companyQuoteValues), Object.values(companyQuoteValues)]
  }

  grabCompanyQuoteObject(arrayedQuoteObjects: Object, companyInt: number): Object {
    console.log("CompanyQuoteValue")
    console.log(arrayedQuoteObjects[companyInt]["quote"]);

    return arrayedQuoteObjects[companyInt]["quote"] as Object
  }


  grabCompanyStockValue(stocks: Array<Array<any>>, param: string): string {
    let stockIndex = stocks[0].indexOf(param);
    let stockValue = stocks[1][stockIndex];
    console.log(stockValue)

    return stockValue == null ? "" : stockValue
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NysePage');
  }

  public goToHomePage() {
    this.navCtrl.setRoot(HomePage);    // by using setroot we get rid of the back button when we go back to the home page
  }

}
