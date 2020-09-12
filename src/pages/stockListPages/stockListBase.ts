
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RestProvider } from '../../providers/rest/rest';
import stockListPageUtilities from './stockListPageUtilities';


export default class stockListPage {

  stockData: any;
  htmlStockData: String = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }


  bindDataToHTML(stockData: Object) {
    this.htmlStockData += stockListPageUtilities.parseStockData(stockData)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DowJonesPage');
  }

  public goToHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

}