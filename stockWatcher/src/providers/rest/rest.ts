import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  

  OUR_NASDAQ_REST_API_URL = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=aal,aapl,algn,dltr,ebay,mar,msft,amzn,googl,fb,fox,intc,csco,khc,pypl,amgn,nflx,nvda,sbux,tsla,vod,wynn&types=quote';

  OUR_SP500_REST_API_URL = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,msft,amzn,brk.b,jnj,jpm,xom,fb,goog,googl,unh,pfe,bac,v,vz,pg,cvx,wfc,t,intc&types=quote';

  OUR_DOWJONES_REST_API_URL = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=axp,aapl,ba,cat,cvx,csco,ko,dwdp,xom,gs,hd,ibm,intc,jnj,jpm,mcd,mrk,msft,nke,pfe,pg,trv,unh,utx,vz,v,wmt,wba,dis&types=quote';

  OUR_NYSE_REST_API_URL = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=brk.b,baba,jnj,jpm,xom,v,wmt,unh,bac,pfe,wfc,vz,pg,cvx,t,ma,ko,nvs,mrk,hd,chl,ba&types=quote';
  


  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getNASDAQDataFromAPIViaPromise() {
    return new Promise(resolve => {
      this.http.get(this.OUR_NASDAQ_REST_API_URL).subscribe(data => {
        resolve(data);
        console.log("Subscribed to the NASDAQ Data Promise");
      }, err => {
        console.log(err);
      });
    });
  }


  getSP500DataFromAPIViaPromise(){
    return new Promise(resolve => {
      this.http.get(this.OUR_SP500_REST_API_URL).subscribe(data => {
        resolve(data);
        console.log("Subscribed to the S&P 500 Data Promise");
      }, err => {
        console.log(err);
      });
    });
  }

  getDowJonesDataFromAPIViaPromise(){
    return new Promise(resolve => {
      this.http.get(this.OUR_DOWJONES_REST_API_URL).subscribe(data => {
        resolve(data);
        console.log("Subscribed to the Dow Jones Data Promise");
      }, err => {
        console.log(err);
      });
    });
  }

  getNYSEDataFromAPIViaPromise(){
    return new Promise(resolve => {
      this.http.get(this.OUR_NYSE_REST_API_URL).subscribe(data => {
        resolve(data);
        console.log("Subscribed to the NYSE Data Promise");
      }, err => {
        console.log(err);
      });
    });
  }

}
