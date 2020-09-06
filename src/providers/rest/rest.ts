import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class RestProvider {


  NASDAQ_symbols = 'aal,aapl,algn,dltr,ebay,mar,msft,amzn,googl,fb,fox,intc,csco,khc,pypl,amgn,nflx,nvda,sbux,tsla,vod,wynn';
  SP500_symbols = 'httaapl,msft,amzn,brk.b,jnj,jpm,xom,fb,goog,googl,unh,pfe,bac,v,vz,pg,cvx,wfc,t,intc';
  DOWJONES_symbols = 'axp,aapl,ba,cat,cvx,csco,ko,dwdp,xom,gs,hd,ibm,intc,jnj,jpm,mcd,mrk,msft,nke,pfe,pg,trv,unh,utx,vz,v,wmt,wba,dis';
  NYSE_symbols = 'brk.b,baba,jnj,jpm,xom,v,wmt,unh,bac,pfe,wfc,vz,pg,cvx,t,ma,ko,nvs,mrk,hd,chl,ba';

  public_API_key = "pk_a46001373e9a46dbab34c78b9b664c60";

  base_URL = "https://cloud.iexapis.com/v1/stock/market/batch";


  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  setHttpParams(): HttpParams {
    return new HttpParams()
      .append('token', this.public_API_key)
      .append('types', 'quote')
  }


  getNASDAQDataFromAPIViaPromise() {
    return new Promise(resolve => {
      this.http.get(
        this.base_URL, {
        params:
          this.setHttpParams()
            .append('symbols', this.NASDAQ_symbols),
      }
      ).subscribe(data => {
        resolve(data);
        console.log("Subscribed to the NASDAQ Data Promise");
      }, err => {
        console.log(err);
      });
    },
    );
  }


  getSP500DataFromAPIViaPromise() {
    return new Promise(resolve => {
      this.http.get(
        this.base_URL, {
          params:
          this.setHttpParams()
            .append('symbols', this.SP500_symbols),
        }
          ).subscribe(data => {
        resolve(data);
        console.log("Subscribed to the S&P 500 Data Promise");
      }, err => {
        console.log(err);
      });
    });
  }

  getDowJonesDataFromAPIViaPromise() {
    return new Promise(resolve => {
      this.http.get(
        this.base_URL, {
          params:
          this.setHttpParams()
            .append('symbols', this.DOWJONES_symbols),
        }
          ).subscribe(data => {
        resolve(data);
        console.log("Subscribed to the Dow Jones Data Promise");
      }, err => {
        console.log(err);
      });
    });
  }

  getNYSEDataFromAPIViaPromise() {
    return new Promise(resolve => {
      this.http.get(
        this.base_URL, {
          params:
          this.setHttpParams()
            .append('symbols', this.NYSE_symbols),
        }
          ).subscribe(data => {
        resolve(data);
        console.log("Subscribed to the NYSE Data Promise");
      }, err => {
        console.log(err);
      });
    });
  }

}
