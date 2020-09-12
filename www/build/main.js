webpackJsonp([6],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(81);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthenticationService);
    return AuthenticationService;
}());

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(81);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(120);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasdaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stockListPageUtilities__ = __webpack_require__(622);
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
            _this.bindDataToHTML(data);
        });
    };
    NasdaqPage.prototype.bindDataToHTML = function (stockData) {
        this.htmlStockData += __WEBPACK_IMPORTED_MODULE_4__stockListPageUtilities__["a" /* default */].parseStockData(stockData);
    };
    NasdaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NasdaqPage');
    };
    NasdaqPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); // by using setroot we get rid of the back button when we go back to the home page
    };
    NasdaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-nasdaq',template:/*ion-inline-start:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\stockListPages\nasdaq\nasdaq.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>NASDAQ</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="nasdaq-page">\n\n\n\n  <button ion-button color="dark" round full (click)="goToHomePage()">Home Page</button>\n\n  <div [innerHTML]="htmlStockData"></div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\stockListPages\nasdaq\nasdaq.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object])
    ], NasdaqPage);
    return NasdaqPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=nasdaq.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandPPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stockListPageUtilities__ = __webpack_require__(622);
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
            _this.bindDataToHTML(data);
        });
    };
    SandPPage.prototype.bindDataToHTML = function (stockData) {
        this.htmlStockData += __WEBPACK_IMPORTED_MODULE_4__stockListPageUtilities__["a" /* default */].parseStockData(stockData);
    };
    SandPPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SandPPage');
    };
    SandPPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]); // // by using setroot we get rid of the back button when we go back to the home page
    };
    SandPPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sand-p',template:/*ion-inline-start:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\stockListPages\sand-p\sand-p.html"*/'<!--\n\n  Generated template for the SandPPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>S&amp;P 500</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class = "bg-image">\n\n\n\n    <button ion-button color="dark" round full (click)="goToHomePage()">Home Page</button>\n\n    <div [innerHTML]="htmlStockData"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\stockListPages\sand-p\sand-p.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _c || Object])
    ], SandPPage);
    return SandPPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=sand-p.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DowJonesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stockListPageUtilities__ = __webpack_require__(622);
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
            _this.bindDataToHTML(data);
        });
    };
    DowJonesPage.prototype.bindDataToHTML = function (stockData) {
        this.htmlStockData += __WEBPACK_IMPORTED_MODULE_4__stockListPageUtilities__["a" /* default */].parseStockData(stockData);
    };
    DowJonesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DowJonesPage');
    };
    DowJonesPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]); // by using set root we get rid of the back button when we go back to the home page
    };
    DowJonesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dow-jones',template:/*ion-inline-start:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\stockListPages\dow-jones\dow-jones.html"*/'<!--\n\n  Generated template for the DowJonesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Dow Jones Industrial Average</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bg-image">\n\n\n\n\n\n  <button ion-button color="dark" round full (click)="goToHomePage()">Home Page</button>\n\n  <div [innerHTML]="htmlStockData"></div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\stockListPages\dow-jones\dow-jones.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object])
    ], DowJonesPage);
    return DowJonesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=dow-jones.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NysePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stockListPageUtilities__ = __webpack_require__(622);
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
            _this.bindDataToHTML(data);
        });
    };
    NysePage.prototype.bindDataToHTML = function (stockData) {
        this.htmlStockData += __WEBPACK_IMPORTED_MODULE_4__stockListPageUtilities__["a" /* default */].parseStockData(stockData);
    };
    NysePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NysePage');
    };
    NysePage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]); // by using setroot we get rid of the back button when we go back to the home page
    };
    NysePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nyse',template:/*ion-inline-start:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\stockListPages\nyse\nyse.html"*/'<!--\n\n  Generated template for the NysePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>NYSE</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class = "bg-image">\n\n    <button ion-button color="dark" round full (click)="goToHomePage()">Home Page</button>\n\n    <div [innerHTML]="htmlStockData"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\stockListPages\nyse\nyse.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object])
    ], NysePage);
    return NysePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=nyse.js.map

/***/ }),

/***/ 235:
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
webpackEmptyAsyncContext.id = 235;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		616,
		5
	],
	"../pages/register/register.module": [
		617,
		4
	],
	"../pages/stockListPages/dow-jones/dow-jones.module": [
		618,
		3
	],
	"../pages/stockListPages/nasdaq/nasdaq.module": [
		621,
		2
	],
	"../pages/stockListPages/nyse/nyse.module": [
		619,
		1
	],
	"../pages/stockListPages/sand-p/sand-p.module": [
		620,
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
webpackAsyncContext.id = 278;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(465);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_stockListPages_nasdaq_nasdaq__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_stockListPages_sand_p_sand_p__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_stockListPages_dow_jones_dow_jones__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_stockListPages_nyse_nyse__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_rest_rest__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_fire_config__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_register_register__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_authentication_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angularfire2_database__);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_11__pages_stockListPages_nasdaq_nasdaq__["a" /* NasdaqPage */], __WEBPACK_IMPORTED_MODULE_12__pages_stockListPages_sand_p_sand_p__["a" /* SandPPage */], __WEBPACK_IMPORTED_MODULE_13__pages_stockListPages_dow_jones_dow_jones__["a" /* DowJonesPage */], __WEBPACK_IMPORTED_MODULE_14__pages_stockListPages_nyse_nyse__["a" /* NysePage */], __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["AngularFireAuthModule"], __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stockListPages/dow-jones/dow-jones.module#DowJonesPageModule', name: 'DowJonesPage', segment: 'dow-jones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stockListPages/nyse/nyse.module#NysePageModule', name: 'NysePage', segment: 'nyse', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stockListPages/sand-p/sand-p.module#SandPPageModule', name: 'SandPPage', segment: 'sand-p', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stockListPages/nasdaq/nasdaq.module#NasdaqPageModule', name: 'NasdaqPage', segment: 'nasdaq', priority: 'low', defaultHistory: [] }
                    ]
                }), __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_16__app_fire_config__["a" /* FIREBASE_CONFIG */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_11__pages_stockListPages_nasdaq_nasdaq__["a" /* NasdaqPage */], __WEBPACK_IMPORTED_MODULE_12__pages_stockListPages_sand_p_sand_p__["a" /* SandPPage */], __WEBPACK_IMPORTED_MODULE_13__pages_stockListPages_dow_jones_dow_jones__["a" /* DowJonesPage */], __WEBPACK_IMPORTED_MODULE_14__pages_stockListPages_nyse_nyse__["a" /* NysePage */], __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"],
                __WEBPACK_IMPORTED_MODULE_19__services_authentication_service__["a" /* AuthenticationService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__(115);
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

/***/ 604:
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stockListPages_nasdaq_nasdaq__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stockListPages_sand_p_sand_p__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stockListPages_dow_jones_dow_jones__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stockListPages_nyse_nyse__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(115);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__stockListPages_nasdaq_nasdaq__["a" /* NasdaqPage */]);
    };
    HomePage.prototype.goToSP500Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__stockListPages_sand_p_sand_p__["a" /* SandPPage */]);
    };
    HomePage.prototype.goToDowJonesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__stockListPages_dow_jones_dow_jones__["a" /* DowJonesPage */]);
    };
    HomePage.prototype.goToNYSEPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__stockListPages_nyse_nyse__["a" /* NysePage */]);
    };
    HomePage.prototype.goToRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */]);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color = "banner">\n\n    <ion-title color = "light">\n\n      Stock Watcher\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class ="bg-image">\n\n  \n\n<h1><strong> Welcome to Stockwatcher</strong> </h1>\n\n\n\n\n\n\n\n<p> The app that provides you with live data from four different providers! </p>\n\n<p></p>\n\n\n\n\n\n\n\n	\n\n   <div class = "container">  \n\n  <button style="background-color: #ffd194;" ion-button color ="dark" round  clear outline  (click)="goToNasdaqPage()">NASDAQ Quotes</button>\n\n  \n\n  	</div>\n\n\n\n  <button style="background-color: #ffd194; " ion-button color ="dark" round outline clear (click)="goToSP500Page()">S&amp;P 500 Quotes</button>\n\n\n\n  <button style="background-color: #ffd194; "ion-button color ="dark" round outline clear (click)="goToDowJonesPage()">Dow Jones Quotes</button>\n\n\n\n  <button style="background-color: #ffd194;"ion-button color  ="dark" round outline clear (click)="goToNYSEPage()">NYSE Quotes</button>\n\n\n\n \n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\admin\stockWatcher-master\stockWatcher\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var stockListPageUtilities = /** @class */ (function () {
    function stockListPageUtilities() {
    }
    stockListPageUtilities.parseStockData = function (allStockData) {
        var numberOfStockSources = Object.keys(allStockData).length;
        var htmlString = "";
        for (var i = 0; i < numberOfStockSources; i++) {
            htmlString += this.generateHtmlStockSection(allStockData, i);
        }
        return htmlString;
    };
    stockListPageUtilities.generateHtmlStockSection = function (allStockData, i) {
        var stocks = this.getStocks(allStockData, i);
        var companyName = this.grabCompanyStockValue(stocks, "companyName");
        var latestPrice = this.grabCompanyStockValue(stocks, "latestPrice");
        var change = this.grabCompanyStockValue(stocks, "change");
        var previousClose = this.grabCompanyStockValue(stocks, "previousClose");
        var volumeTraded = this.grabCompanyStockValue(stocks, "volume");
        return "<h6><strong>" + companyName + "</strong></h6>" +
            "<p>Latest Price: " + latestPrice + "</p>" +
            "<p>Change: " + change + "</p>" +
            "<p>Previous Close: " + previousClose + "</p>" +
            "<p>Volume Traded: " + volumeTraded + "</p>";
    };
    stockListPageUtilities.getStocks = function (stockData, index) {
        var arrayedQuoteObjects = Object.values(stockData);
        var companyQuoteValues = this.grabCompanyQuoteObject(arrayedQuoteObjects, index);
        return [Object.keys(companyQuoteValues), Object.values(companyQuoteValues)];
    };
    stockListPageUtilities.grabCompanyQuoteObject = function (arrayedQuoteObjects, companyInt) {
        return arrayedQuoteObjects[companyInt]["quote"];
    };
    stockListPageUtilities.grabCompanyStockValue = function (stocks, param) {
        var stockIndex = stocks[0].indexOf(param);
        var stockValue = stocks[1][stockIndex];
        return stockValue == null ? "" : stockValue;
    };
    return stockListPageUtilities;
}());
/* harmony default export */ __webpack_exports__["a"] = (stockListPageUtilities);
//# sourceMappingURL=stockListPageUtilities.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(236);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map