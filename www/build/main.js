webpackJsonp([6],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DowJonesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DowJonesPage = /** @class */ (function () {
    function DowJonesPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.getDowJonesDataObjectsFromPromise();
    }
    DowJonesPage.prototype.getDowJonesDataObjectsFromPromise = function () {
        var _this = this;
        this.restProvider.getDowJonesDataFromAPIViaPromise().then(function (data) {
            console.log("Trying to access DowJones results from the Promise return");
            _this.stockDataDowJones = data;
            console.log("Got DowJones results from the Promise");
            console.log(_this.stockDataDowJones);
        });
    };
    DowJonesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DowJonesPage');
    };
    DowJonesPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]); // by using set root we get rid of the back button when we go back to the home page
    };
    DowJonesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dow-jones',template:/*ion-inline-start:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\dow-jones\dow-jones.html"*/'<!--\n\n  Generated template for the DowJonesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Dow Jones Industrial Average</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class = "bg-image">\n\n\n\n\n\n    <button ion-button color="dark" round full (click)="goToHomePage()">Home Page</button>\n\n\n\n    <h6><strong>{{stockDataDowJones?.AAPL?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.AAPL?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.AAPL?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.AAPL?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.AAPL?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.AXP?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.AXP?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.AXP?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.AXP?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.AXP?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.BA?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.BA?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.BA?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.BA?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.BA?.quote?.avgTotalVolume}}</p>\n\n   \n\n    <h6><strong>{{stockDataDowJones?.CAT?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.CAT?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.CAT?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.CAT?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.CAT?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.CSCO?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.CSCO?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.CSCO?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.CSCO?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.CSCO?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.CVX?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.CVX?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.CVX?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.CVX?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.CVX?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.DIS?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.DIS?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.DIS?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.DIS?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.DIS?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.DWDP?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.DWDP?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.DWDP?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.DWDP?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.DWDP?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.GS?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.GS?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.GS?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.GS?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.GS?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.HD.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.HD?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.HD?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.HD?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.HD?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.IBM.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.IBM?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.IBM?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.IBM?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.IBM?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.INTC.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.INTC?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.INTC?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.INTC?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.INTC?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.JNJ.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.JNJ?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.JNJ?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.JNJ?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.JNJ?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.JPM.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.JPM?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.JPM?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.JPM?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.JPM?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.KO.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.KO?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.KO?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.KO?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.KO?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.MCD.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.MCD?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.MCD?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.MCD?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.MCD?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.MRK.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.MRK?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.MRK?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.MRK?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.MRK?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.MSFT.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.MSFT.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.MSFT?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.MSFT?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.MSFT?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.NKE.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.NKE.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.NKE?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.NKE?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.NKE?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.PFE.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.PFE.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.PFE?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.PFE?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.PFE?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.PG.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.PG.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.PG?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.PG?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.PG?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.TRV.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.TRV.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.TRV?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.TRV?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.TRV?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.UNH.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.UNH.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.UNH?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.UNH?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.UNH?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.UTX.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.UTX.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.UTX?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.UTX?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.UTX?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.V.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.V.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.V?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.V?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.V?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.VZ.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.VZ.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.VZ?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.VZ?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.VZ?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.WBA.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.WBA.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.WBA?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.WBA?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.WBA?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.WMT.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.WMT.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.WMT?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.WMT?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.WMT?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{stockDataDowJones?.XOM.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{stockDataDowJones?.XOM.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{stockDataDowJones?.XOM?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{stockDataDowJones?.XOM?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{stockDataDowJones?.XOM?.quote?.avgTotalVolume}}</p>\n\n\n\n  \n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\dow-jones\dow-jones.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object])
    ], DowJonesPage);
    return DowJonesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=dow-jones.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasdaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NasdaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NasdaqPage = /** @class */ (function () {
    function NasdaqPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.getNASDAQDataObjectsFromPromise();
    }
    NasdaqPage.prototype.getNASDAQDataObjectsFromPromise = function () {
        var _this = this;
        this.restProvider.getNASDAQDataFromAPIViaPromise().then(function (data) {
            console.log("Trying to access NASDAQ results from the Promise return");
            _this.NASDAQstockData = data;
            console.log("Got NASDAQ results from the Promise");
            console.log(_this.NASDAQstockData);
        });
    };
    NasdaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NasdaqPage');
    };
    NasdaqPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); // by using setroot we get rid of the back button when we go back to the home page
    };
    NasdaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-nasdaq',template:/*ion-inline-start:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\nasdaq\nasdaq.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>NASDAQ</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class = "nasdaq-page">\n\n\n\n    <button ion-button color="dark" round full (click)="goToHomePage()">Home Page</button>\n\n\n\n    <h6><strong>{{NASDAQstockData?.AAL?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{NASDAQstockData?.AAL?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.AAL?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.AAL?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.AAL?.quote?.avgTotalVolume}}</p>\n\n\n\n    \n\n    <h6><strong>{{NASDAQstockData?.AAPL?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{NASDAQstockData?.AAPL?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.AAPL?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.AAPL?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.AAPL?.quote?.avgTotalVolume}}</p>  \n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.ALGN?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{NASDAQstockData?.ALGN?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.ALGN?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.ALGN?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.ALGN?.quote?.avgTotalVolume}}</p> \n\n       \n\n\n\n    <h6><strong>{{NASDAQstockData?.AMGN?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{NASDAQstockData?.AMGN?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.AMGN?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.AMGN?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.AMGN?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.AMZN?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.AMZN?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.AMZN?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.AMZN?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.AMZN?.quote?.avgTotalVolume}}</p>   \n\n\n\n    \n\n    <h6><strong>{{NASDAQstockData?.CSCO?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.CSCO?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.CSCO?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.CSCO?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.CSCO?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.DLTR?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.DLTR?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.DLTR?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.DLTR?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.DLTR?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.EBAY?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.EBAY?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.EBAY?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.EBAY?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.EBAY?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.FB?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.FB?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.FB?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.FB?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.FB?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.FOX?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.FOX?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.EBAY?.FOX?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.FOX?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.FOX?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.GOOGL?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.GOOGL?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.GOOGL?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.GOOGL?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.GOOGL?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.INTC?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.INTC?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.INTC?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.INTC?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.INTC?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.KHC?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.KHC?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.KHC?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.KHC?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.KHC?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.MAR?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.MAR?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.MAR?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.MAR?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.MAR?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.MSFT?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.MSFT?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.MSFT?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.MSFT?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.MSFT?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.NFLX?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.NFLX?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.NFLX?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.NFLX?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.NFLX?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.NVDA?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.NVDA?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.NVDA?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.NVDA?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.NVDA?.quote?.avgTotalVolume}}</p>    \n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.PYPL?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.PYPL?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.PYPL?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.PYPL?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.PYPL?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.SBUX?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.SBUX?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.SBUX?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.SBUX?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.SBUX?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.TSLA?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.TSLA?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.TSLA?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.TSLA?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.TSLA?.quote?.avgTotalVolume}}</p>  \n\n\n\n\n\n    <h6><strong>{{NASDAQstockData?.WYNN?.quote?.companyName}}</strong></h6>\n\n    <p>Lastest Price: ${{NASDAQstockData?.WYNN?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NASDAQstockData?.WYNN?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NASDAQstockData?.WYNN?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NASDAQstockData?.WYNN?.quote?.avgTotalVolume}}</p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\nasdaq\nasdaq.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object])
    ], NasdaqPage);
    return NasdaqPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=nasdaq.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandPPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SandPPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SandPPage = /** @class */ (function () {
    function SandPPage(navCtrl, restProvider, navParams) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.navParams = navParams;
        this.getSP500DataObjectsFromPromise();
    }
    SandPPage.prototype.getSP500DataObjectsFromPromise = function () {
        var _this = this;
        this.restProvider.getSP500DataFromAPIViaPromise().then(function (data) {
            console.log("Trying to access S&P500 results from the Promise return");
            _this.SPstockData = data;
            console.log("Got results from the S&P500 Promise");
            console.log(_this.SPstockData);
        });
    };
    SandPPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SandPPage');
    };
    SandPPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]); // // by using setroot we get rid of the back button when we go back to the home page
    };
    SandPPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sand-p',template:/*ion-inline-start:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\sand-p\sand-p.html"*/'<!--\n\n  Generated template for the SandPPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>S&amp;P 500</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class = "bg-image">\n\n\n\n    <button ion-button color="dark" round full (click)="goToHomePage()">Home Page</button>\n\n\n\n    <h6><strong>{{SPstockData?.AAPL?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{SPstockData?.AAPL?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{SPstockData?.AAPL?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{SPstockData?.AAPL?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{SPstockData?.AAPL?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{SPstockData?.AMZN?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{SPstockData?.AMZN?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{SPstockData?.AMZN?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{SPstockData?.AMZN?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{SPstockData?.AMZN?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{SPstockData?.BAC?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{SPstockData?.BAC?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{SPstockData?.BAC?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{SPstockData?.BAC?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{SPstockData?.BAC?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{SPstockData?.CVX?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{SPstockData?.CVX?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{SPstockData?.CVX?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{SPstockData?.CVX?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{SPstockData?.CVX?.quote?.avgTotalVolume}}</p>\n\n\n\n    <h6><strong>{{SPstockData?.FB?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{SPstockData?.FB?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{SPstockData?.FB?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{SPstockData?.FB?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{SPstockData?.FB?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{SPstockData?.GOOGL?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{SPstockData?.GOOGL?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{SPstockData?.GOOGL?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{SPstockData?.GOOGL?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{SPstockData?.GOOGL?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{SPstockData?.INTC?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{SPstockData?.INTC?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{SPstockData?.INTC?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{SPstockData?.INTC?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{SPstockData?.INTC?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{SPstockData?.JNJ?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{SPstockData?.JNJ?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{SPstockData?.JNJ?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{SPstockData?.JNJ?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{SPstockData?.JNJ?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n    <h6><strong>{{SPstockData?.JPM?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{SPstockData?.JPM?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{SPstockData?.JPM?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{SPstockData?.JPM?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{SPstockData?.JPM?.quote?.avgTotalVolume}}</p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\sand-p\sand-p.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _c || Object])
    ], SandPPage);
    return SandPPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=sand-p.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NysePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NysePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NysePage = /** @class */ (function () {
    function NysePage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.getNYSEDataObjectsFromPromise();
    }
    NysePage.prototype.getNYSEDataObjectsFromPromise = function () {
        var _this = this;
        this.restProvider.getNYSEDataFromAPIViaPromise().then(function (data) {
            console.log("Trying to access NYSE results from the Promise return");
            _this.NYSEstockData = data;
            console.log("Got NYSE results from the Promise");
            console.log(_this.NYSEstockData);
        });
    };
    // bindStockData(){
    //   .forEach(element => {
    //   });
    // }
    NysePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NysePage');
    };
    NysePage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]); // by using setroot we get rid of the back button when we go back to the home page
    };
    NysePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nyse',template:/*ion-inline-start:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\nyse\nyse.html"*/'<!--\n\n  Generated template for the NysePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>NYSE</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class = "bg-image">\n\n\n\n    <button ion-button color="dark" round full (click)="goToHomePage()">Home Page</button>\n\n\n\n    <h6><strong>{{NYSEstockData?.BA?.quote?.companyName}}</strong></h6>\n\n    <p>Latest Price: ${{NYSEstockData?.BA?.quote?.latestPrice | number:\'1.2-2\'}}</p>\n\n    <p>Change: ${{NYSEstockData?.BA?.quote?.change | number:\'1.2-2\'}}</p>\n\n    <p>Previous Close: ${{NYSEstockData?.BA?.quote?.previousClose | number:\'1.2-2\'}}</p>\n\n    <p>Volume Traded: {{NYSEstockData?.BA?.quote?.avgTotalVolume}}</p>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\nyse\nyse.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object])
    ], NysePage);
    return NysePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=nyse.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 202;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dow-jones/dow-jones.module": [
		513,
		5
	],
	"../pages/login/login.module": [
		514,
		4
	],
	"../pages/nasdaq/nasdaq.module": [
		515,
		3
	],
	"../pages/nyse/nyse.module": [
		516,
		2
	],
	"../pages/register/register.module": [
		517,
		1
	],
	"../pages/sand-p/sand-p.module": [
		518,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 245;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(431);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_nasdaq_nasdaq__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sand_p_sand_p__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dow_jones_dow_jones__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_nyse_nyse__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_rest_rest__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_fire_config__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_authentication_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_10__pages_nasdaq_nasdaq__["a" /* NasdaqPage */], __WEBPACK_IMPORTED_MODULE_11__pages_sand_p_sand_p__["a" /* SandPPage */], __WEBPACK_IMPORTED_MODULE_12__pages_dow_jones_dow_jones__["a" /* DowJonesPage */], __WEBPACK_IMPORTED_MODULE_13__pages_nyse_nyse__["a" /* NysePage */], __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuthModule"], __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dow-jones/dow-jones.module#DowJonesPageModule', name: 'DowJonesPage', segment: 'dow-jones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nasdaq/nasdaq.module#NasdaqPageModule', name: 'NasdaqPage', segment: 'nasdaq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nyse/nyse.module#NysePageModule', name: 'NysePage', segment: 'nyse', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sand-p/sand-p.module#SandPPageModule', name: 'SandPPage', segment: 'sand-p', priority: 'low', defaultHistory: [] }
                    ]
                }), __WEBPACK_IMPORTED_MODULE_6_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_15__app_fire_config__["a" /* FIREBASE_CONFIG */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_10__pages_nasdaq_nasdaq__["a" /* NasdaqPage */], __WEBPACK_IMPORTED_MODULE_11__pages_sand_p_sand_p__["a" /* SandPPage */], __WEBPACK_IMPORTED_MODULE_12__pages_dow_jones_dow_jones__["a" /* DowJonesPage */], __WEBPACK_IMPORTED_MODULE_13__pages_nyse_nyse__["a" /* NysePage */], __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_6_angularfire2__["AngularFireModule"],
                __WEBPACK_IMPORTED_MODULE_18__services_authentication_service__["a" /* AuthenticationService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, ourAuth) {
        this.ourAuth = ourAuth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\admin\stockWatcher-master\stockWatcher\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\admin\stockWatcher-master\stockWatcher\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyA_82taJqfhMS27xge0JJE29_3xhDGxNDw",
    authDomain: "stockwatcher-f0010.firebaseapp.com",
    databaseURL: "https://stockwatcher-f0010.firebaseio.com",
    projectId: "stockwatcher-f0010",
    storageBucket: "stockwatcher-f0010.appspot.com",
    messagingSenderId: "235999219307"
};
//# sourceMappingURL=app.fire.config.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nasdaq_nasdaq__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sand_p_sand_p__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dow_jones_dow_jones__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nyse_nyse__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(afAuth, ourAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.ourAuth = ourAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userIsAuthenticated = false;
        this.userIsAuthenticated = this.ourAuth.checkAuthStatusForApp();
    }
    HomePage_1 = HomePage;
    HomePage.prototype.goPrivatePage = function () {
        /** we need to check if this user is logged on **/
        /** if the user is not then they need to be redirected **/
        if (this.ourAuth.checkAuthStatusForApp()) {
            this.navCtrl.setRoot(HomePage_1);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */]);
        }
    };
    HomePage.prototype.goToNasdaqPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__nasdaq_nasdaq__["a" /* NasdaqPage */]);
    };
    HomePage.prototype.goToSP500Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sand_p_sand_p__["a" /* SandPPage */]);
    };
    HomePage.prototype.goToDowJonesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dow_jones_dow_jones__["a" /* DowJonesPage */]);
    };
    HomePage.prototype.goToNYSEPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__nyse_nyse__["a" /* NysePage */]);
    };
    HomePage.prototype.goToRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */]);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color = "banner">\n\n    <ion-title color = "light">\n\n      Stock Watcher\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class ="bg-image">\n\n  \n\n<h1><strong> Welcome to Stockwatcher</strong> </h1>\n\n\n\n\n\n\n\n<p> The app that provides you with live data from four different providers! </p>\n\n<p></p>\n\n\n\n\n\n\n\n	\n\n   <div class = "container">  \n\n  <button style="background-color: #ffd194;" ion-button color ="dark" round  clear outline  (click)="goToNasdaqPage()">NASDAQ Quotes</button>\n\n  \n\n  	</div>\n\n\n\n  <button style="background-color: #ffd194; " ion-button color ="dark" round outline clear (click)="goToSP500Page()">S&amp;P 500 Quotes</button>\n\n\n\n  <button style="background-color: #ffd194; "ion-button color ="dark" round outline clear (click)="goToDowJonesPage()">Dow Jones Quotes</button>\n\n\n\n  <button style="background-color: #ffd194;"ion-button color  ="dark" round outline clear (click)="goToNYSEPage()">NYSE Quotes</button>\n\n\n\n \n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var HomePage_1, _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.NASDAQ_symbols = 'aal,aapl,algn,dltr,ebay,mar,msft,amzn,googl,fb,fox,intc,csco,khc,pypl,amgn,nflx,nvda,sbux,tsla,vod,wynn';
        this.SP500_symbols = 'httaapl,msft,amzn,brk.b,jnj,jpm,xom,fb,goog,googl,unh,pfe,bac,v,vz,pg,cvx,wfc,t,intc';
        this.DOWJONES_symbols = 'axp,aapl,ba,cat,cvx,csco,ko,dwdp,xom,gs,hd,ibm,intc,jnj,jpm,mcd,mrk,msft,nke,pfe,pg,trv,unh,utx,vz,v,wmt,wba,dis';
        this.NYSE_symbols = 'brk.b,baba,jnj,jpm,xom,v,wmt,unh,bac,pfe,wfc,vz,pg,cvx,t,ma,ko,nvs,mrk,hd,chl,ba';
        this.public_API_key = "pk_a46001373e9a46dbab34c78b9b664c60";
        this.base_URL = "https://cloud.iexapis.com/v1/stock/market/batch";
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.setHttpParams = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            .append('token', this.public_API_key)
            .append('types', 'quote');
    };
    RestProvider.prototype.getNASDAQDataFromAPIViaPromise = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.base_URL, {
                params: _this.setHttpParams()
                    .append('symbols', _this.NASDAQ_symbols),
            }).subscribe(function (data) {
                resolve(data);
                console.log("Subscribed to the NASDAQ Data Promise");
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getSP500DataFromAPIViaPromise = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.base_URL, {
                params: _this.setHttpParams()
                    .append('symbols', _this.SP500_symbols),
            }).subscribe(function (data) {
                resolve(data);
                console.log("Subscribed to the S&P 500 Data Promise");
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getDowJonesDataFromAPIViaPromise = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.base_URL, {
                params: _this.setHttpParams()
                    .append('symbols', _this.DOWJONES_symbols),
            }).subscribe(function (data) {
                resolve(data);
                console.log("Subscribed to the Dow Jones Data Promise");
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getNYSEDataFromAPIViaPromise = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.base_URL, {
                params: _this.setHttpParams()
                    .append('symbols', _this.NYSE_symbols),
            }).subscribe(function (data) {
                resolve(data);
                console.log("Subscribed to the NYSE Data Promise");
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], RestProvider);
    return RestProvider;
    var _a;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(afAuth) {
        this.afAuth = afAuth;
        this.isAuthenticated = null;
    }
    /* signInWithEmailAndPassword is provided by AngularFireAuth */
    AuthenticationService.prototype.logonAService = function (userToLogon) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                try {
                    console.log("in logon from AuthenticationService provider");
                    result = this.afAuth.auth.signInWithEmailAndPassword(userToLogon.email, userToLogon.password);
                    console.log(result);
                    return [2 /*return*/, result];
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    /** here we use Angular Fire to simply sign the current user out **/
    AuthenticationService.prototype.logoutAService = function () {
        this.afAuth.auth.signOut();
    };
    /* createUserWithEmailAndPassword is provided by AngularFireAuth */
    AuthenticationService.prototype.registerAService = function (userToRegister) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("in register from AuthenticationService provider");
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(userToRegister.email, userToRegister.password)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationService.prototype.checkAuthStatusForApp = function () {
        var _this = this;
        this.afAuth.auth.onAuthStateChanged(function (data) {
            if (data) {
                _this.isAuthenticated = true;
            }
            else {
                _this.isAuthenticated = false;
            }
        });
        return this.isAuthenticated;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]) === "function" && _a || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    RegisterPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.goToLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style class = \'bg-image\'>\n\n	<ion-item style class = \'item-style\'>\n\n		<ion-label>Email Address</ion-label>  <!-- text box for email entry -->\n\n		<ion-input type = "text" [(ngModel)] = "user.email"></ion-input>  \n\n	</ion-item>\n\n	     \n\n	 <ion-item style class =  \'item-style\'> \n\n	<ion-label>Password</ion-label>    <!-- text box for \n\n	email entry -->\n\n		<ion-input type = "text" [(ngModel)]  = "user.password"></ion-input> \n\n	</ion-item>\n\n\n\n	<button ion-button style = "background-color: #ffd194; "ion-button color dark (click) ="register(user)" >Register</button> \n\n\n\n	<button ion-button style ="background-color:  #ffd194;" ion-button color dark round full (click)="goToLoginPage()">Back to Login Page</button>\n\n\n\n</ion-content>\n\n\n\n<button style="background-image: url("../assets/imgs/register.jpg"); ion-button color ="dark" round outline clear (click)'/*ion-inline-end:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _c || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, ourAuth, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ourAuth = ourAuth;
        this.afAuth = afAuth;
        this.userIsAuthenticated = false;
        this.user = {};
        this.userIsAuthenticated = this.ourAuth.checkAuthStatusForApp();
    }
    LoginPage.prototype.login = function (userToLogon) {
        var _this = this;
        console.log("in logon page");
        this.ourAuth.logonAService(userToLogon);
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                console.log("Already Logged On: " + data.email + "," + data.uid);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
            }
            else {
                console.log("log on not recognised");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_register_register__["a" /* RegisterPage */]);
            }
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.goHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar style class  = "navbar">\n\n    <ion-title>StockWatcher </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style class = "bg-image">\n\n\n\n	<ion-item style class = \'item-style\'>\n\n		<ion-label>Email Address</ion-label>  <!-- text box for email entry -->\n\n		<ion-input type = "text" [(ngModel)] = "user.email"></ion-input>  \n\n	</ion-item>\n\n	     \n\n	 <ion-item style class = \'item-style\'>\n\n	<ion-label>Password</ion-label>    <!-- text box for \n\n	email entry -->\n\n		<ion-input type = "text" [(ngModel)] = "user.password"></ion-input> \n\n	</ion-item>\n\n\n\n	<button ion-button (click)="login(user)" >Login</button>\n\n	<button ion-button (click)="register()" >Register</button>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[298]);
//# sourceMappingURL=main.js.map