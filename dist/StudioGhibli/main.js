(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-main-component></app-main-component>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _to_buy_to_buy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./to-buy/to-buy.component */ "./src/app/to-buy/to-buy.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shoping-cart/shoping-cart.component */ "./src/app/shoping-cart/shoping-cart.component.ts");
/* harmony import */ var _main_component_main_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-component/main-component.component */ "./src/app/main-component/main-component.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _private_page_private_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./private-page/private-page.component */ "./src/app/private-page/private-page.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_add_cart_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/add-cart.service */ "./src/app/services/add-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// FireBase Connection



// Pipe

// Service


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _to_buy_to_buy_component__WEBPACK_IMPORTED_MODULE_9__["ToBuyComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_11__["ShopingCartComponent"],
                _main_component_main_component_component__WEBPACK_IMPORTED_MODULE_12__["MainComponentComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_20__["FilterPipe"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _private_page_private_page_component__WEBPACK_IMPORTED_MODULE_16__["PrivatePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebaseConfig),
            ],
            providers: [
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["appRoutingProviders"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"],
                _services_add_cart_service__WEBPACK_IMPORTED_MODULE_22__["AddCartService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _to_buy_to_buy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-buy/to-buy.component */ "./src/app/to-buy/to-buy.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shoping-cart/shoping-cart.component */ "./src/app/shoping-cart/shoping-cart.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _private_page_private_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./private-page/private-page.component */ "./src/app/private-page/private-page.component.ts");

// Components







// Array de rutas
var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'Home/:nombre', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'ToBuy', component: _to_buy_to_buy_component__WEBPACK_IMPORTED_MODULE_2__["ToBuyComponent"] },
    { path: 'Contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'ShopingCart', component: _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_4__["ShopingCartComponent"] },
    { path: 'Register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'Login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'PrivatePage', component: _private_page_private_page_component__WEBPACK_IMPORTED_MODULE_7__["PrivatePageComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
    // Siempre última ruta 404
];
// Exportar modulo del router
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  background: url('option3.jpg');\n  background-position: center;\n  background-size: cover;\n  width: 100vw;\n  height: 90vh;\n\n}\n\n  h1 {\n    width: 100%;\n    background: #ffffff;\n    padding: 10px;\n    color: #170808;\n    border-radius: 3px 3px 0 0;\n    background: #f9f9fa;\n  }\n\n  form {\n    font-family: 'roboto', sans-serif;\n    width: 460px;\n    margin: 0 auto;\n    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);\n    padding: 0 0 40px;\n    border-radius: 3px;\n    color: #555;\n    background: #f9f9fa;\n    border-top: transparent solid 2px;\n   \n}\n\n  input::-webkit-input-placeholder,\n  textarea::-webkit-input-placeholder {\n    font: inherit;\n    transition: font-size 0.3s ease-in-out, visibility 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n    transition: transform 0.3s ease-in-out, font-size 0.3s ease-in-out, visibility 0.3s ease-in-out;\n    transition: transform 0.3s ease-in-out, font-size 0.3s ease-in-out, visibility 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n  }\n\n  input,\n  textarea {\n    font: inherit;\n    font-size: 0.8em;\n    margin: 28px 25px 10px;\n    width: 400px;\n    display: block;\n    border: none;\n    padding: 20px 0 10px;\n    border-bottom: solid 1px #03A9F4;\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #03A9F4 4%);\n    background-position: -400px 0;\n    background-size: 400px 100%;\n    background-repeat: no-repeat;\n    transition: background 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n    resize: none;\n    overflow: hidden;\n  }\n\n  input:focus::-webkit-input-placeholder,\n  textarea:focus::-webkit-input-placeholder {\n    color: #03A9F4;\n  }\n\n  input:focus, input:valid,\n  textarea:focus,\n  textarea:valid {\n    box-shadow: none;\n    outline: none;\n    background-position: 0 0;\n  }\n\n  input:focus::-webkit-input-placeholder, input:valid::-webkit-input-placeholder,\n  textarea:focus::-webkit-input-placeholder,\n  textarea:valid::-webkit-input-placeholder {\n    font-size: 0.8em;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n    visibility: visible !important;\n    opacity: 1;\n  }\n\n  input[type=\"email\"] {\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #03A9F4 4%);\n    background-position: -400px 0;\n    background-repeat: no-repeat;\n    transition: border-bottom 0.3s ease, background 0.3s ease;\n  }\n\n  input[type=\"email\"] ~ span.validation-text {\n    position: absolute;\n    visibility: hidden;\n    font-family: 'roboto', sans-serif;\n    font-size: 0.6em;\n    width: 400px;\n    margin-left: 25px;\n    margin-top: -5px;\n    color: white;\n    transition: color 0.3s ease-in-out;\n  }\n\n  .flex {\n    display: flex;\n    align-items: stretch;\n  }\n\n  .flex textarea {\n    line-height: 120%;\n  }\n\n  button {\n    font-family: 'roboto', sans-serif;\n    transition: box-shadow 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), -webkit-transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);\n    transition: transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), box-shadow 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);\n    transition: transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), box-shadow 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), -webkit-transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);\n    border: none;\n    cursor: pointer;\n    border-radius: 3px;\n    padding: 6px;\n    width: 400px;\n    color: #0f0404;\n    margin: 30px 0 0 25px;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n  .position{\n  color: white;\n  font-weight: bold;\n}\n\n  button:hover {\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n    box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.2);\n  }\n\n  .validated{\n    font-size: 0.5em;\n    padding-left: 4%;\n  }\n\n  a {\n    width: 42px;\n    height: 42px;\n    border-radius: 50px;\n    background: #03A9F4;\n    display: inline-block;\n    margin: 50px calc(50% - 21px);\n    white-space: nowrap;\n    padding: 13px;\n    box-sizing: border-box;\n    color: white;\n    transition: all 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);\n    font-family: Roboto, sans-serif;\n    text-decoration: none;\n    box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.2);\n  }\n\n  a i {\n    margin-right: 20px;\n    transition: margin-right 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);\n  }\n\n  a:hover {\n    width: 134px;\n    -webkit-transform: translateX(-50px);\n            transform: translateX(-50px);\n  }\n\n  a:hover i {\n    margin-right: 10px;\n  }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body [style.backgroundSize]=\"'cover'\">\n<!-- <section class=\"my-5\"> -->\n   <!-- Section heading -->\n   <h2 class=\"h1-responsive font-weight-bold text-center my-5\">Contact us</h2>\n    <div class=\"row  badge-primary\">\n      <div class=\"col-lg-5 mb-lg-0 mb-4\">\n        <!-- Form -->\n        <form (ngSubmit)=\"onSubmit(ContactoForm)\" #ContactoForm=\"ngForm\">\n            <input placeholder=\"Name\" type=\"text\" #name=\"ngModel\"[(ngModel)]= \"contactUser.name\" name =\"first\"required/>\n            <span class= \"validated\" *ngIf =\"name.touched && !name.valid\">Please, enter a valid name.</span>\n            <input placeholder=\"Email address\" type=\"email\"#email = \"ngModel\"[(ngModel)]= \"contactUser.email\" name =\"second\"required/>\n            <span class= \"validated\" *ngIf =\"email.touched && !email.valid\">Please, enter a valid email.</span>\n            <input placeholder=\"Location\" type=\"text\" #location= \"ngModel\"[(ngModel)]= \"contactUser.location\" name =\"third\"required/>\n            <span class= \"validated\" *ngIf =\"location.touched && !location.valid\">Please, enter a valid name.</span>\n            <div class=\"flex\">\n              <textarea name =\"four\" placeholder=\"Message\" rows=\"1\" required></textarea>\n              <span class= \"validated\"></span>\n            </div>\n          <button>Send</button>\n          </form>\n        <!-- Formr -->\n      </div>\n      <!-- Grid column -->\n      <div class=\"col-lg-7 mb-5\">\n        <!-- Buttons-->\n        <div class=\"row text-center\">\n          <div class=\"col-md-4 col-sm-6 position\">\n            <a class=\"btn-floating blue accent-1\">\n              <i class=\"fa fa-map-marker\"></i>\n            </a>\n            <p>New York, 94126</p>\n            <p class=\"mb-md-0\">United States</p>\n          </div>\n          <div class=\"col-md-4  col-sm-6 position \">\n            <a class=\"btn-floating blue accent-1\">\n              <i class=\"fa fa-phone\"></i>\n            </a>\n            <p>+ 01 234 567 89</p>\n            <p class=\"mb-md-0\">Mon - Fri, 8:00-22:00</p>\n          </div>\n        </div>\n      </div>\n      <!-- Grid column -->\n    </div>\n    <!-- Grid row --> \n<!-- </section> -->\n  \n </body> \n\n  \n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_ContactUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ContactUsers */ "./src/app/models/ContactUsers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.contactUser = new _models_ContactUsers__WEBPACK_IMPORTED_MODULE_1__["ContactUsers"]('', '', '', '');
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function (form) {
        form.reset();
        console.log('evento lanzado');
        console.log(this.contactUser);
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\nstrong{\n    font-weight: bold!important;\n    color:white!important;\n    font-size: 0.9em;\n}\n\n.footer {              \n    padding: 0.7rem;\n    background-color: #0d47a1 !important;\n    text-align: center;\n    color:white!important;\n    font-weight: bold!important;\n    font-size: 0.7em;\n    \n\n  }\n\n.pre_footer {\n    background-color:#FBD160;\n    bottom: 55px !important;\n    width: 100%;\n    margin:0;\n    padding-right: 5%;\n    z-index: 1;\n}\n\n.icon-Prefooter{\n    color:white;\n    font-size: 1em;\n   \n}\n\na[target=_blank] { \n    color: #e4ecf6; \n    font-weight: bold;\n} \n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n <footer class=\"page-footer fixed-bottom\">\n    <div class=\" pre_footer text-right py-3\">\n      \n        <strong class=\"ml-4 mr-2\"> Follow Us: </strong>\n        <a href=\"\">\n          <i class=\"fab fa-instagram  icon-Prefooter mr-1\"></i>\n        </a>\n        <a href=\"\">\n          <i class=\"fab fa-facebook icon-Prefooter \"></i>\n        </a>\n        <strong class=\"ml-4 mr-2\"> Contact: </strong>\n        <a href=\"\">\n          <i class=\"far fa-envelope icon-Prefooter\"></i>\n        </a>\n      </div>\n      <!-- Social Media -->\n      <!-- Footer -->\n    </footer>  \n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* header */\n.navbar{\n    background-color:transparent !important;\n    font-family: 'Karla', sans-serif;\n    margin-bottom: .25rem !important;\n    padding: 0!important;\n    box-shadow: none;\n \n\n}\na:hover {\n    transition: all .2s ease-in-out;\n    text-decoration: none;\n}\n.dropdown .dropdown-menu .dropdown-item:hover{\n    color: #fff !important;\n}\n.dropdown-item:focus, .dropdown-item:hover{\n   box-shadow: 0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);\n   background-color: #4285f4;\n   color: #fff !important;\n   border-radius: .125rem;\n  transition: all .1s linear;\n}\n.content-div{\n    position: relative;\n}\n.logo{\n    width: 3%;\n    height: auto;\n    float: left;\n    padding-right: 2%;\n}\n.logo2{\n    width: 20%;\n    height: auto;\n    float: left;\n    padding-right: 2%;\n}\n.logo-img{\n    width: 100%;\n    background-color: white;\n    margin:1%;\n    height: auto;\n}\n.content-nav{\n    font-size: 1.5em;\n    left: 60%;\n    \n}\n.navbar-toggler {\n    float: right;\n}\n.nav-item {\n    margin-left: 3em;\n    list-style:none;\n}\n.icons{\n    margin-left: auto;\n\n}\n.icon-bar{\n    border-radius:0.3em;\n    margin-left: 0.5em;\n}\n.icon-Header{\n    color: #757575!important;\n    font-size: 1em;\n    list-style:none;\n}\n.icon-Header-li{\n    padding:10px 9px;\n    transition: .2s;\n \n}\n.icon-Header{\n    color:white!important;\n}\n.icon-Header:hover {\n    background-color: #e25714;\n\n}\n.icon-Header-li{\n    background-color: #e25714;\n\n}\n.navbar-toggler:not(:disabled):not(.disabled) {\n    border:none;\n}\n.nav-center{\n    display: inline;\n}\n.dropdown-item{\n    font-size:0.8em;\n}\n.navbar .dropdown-menu {\n    position: absolute !important;\n    margin-top: 0;\n}\n.dropdown-menu{\n  font-size: 1rem;\n  color: #212529!important;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0,0,0,.15);\n  border-radius: .25rem;\n  margin-left: 57%;\n}\n.navbar-light .navbar-nav .nav-link {\n    font-size: 0.6em;\n    text-transform: uppercase;\n    color: #757575!important;\n}\n.navbar-light .navbar-nav .nav-link:hover {\n    background-color: #e25714;\n    color: white!important;\n}\n.Login{\n    color: #757575!important;\n    font-size: 0.9em;\n    font-family: 'Gloria Hallelujah', cursive;\n    display: inline;\n}\n/* Btn-toggle */\n.animatedBtn {\n    -webkit-transform: rotate(0deg); transform: rotate(0deg); transition: 0.2s ease;\n  }\n.animatedBtn:hover {\n      -webkit-transform: rotate(90deg); transform: rotate(90deg);\n  }\n/* Shoping Cart */\n.badge{\n    background-color: #6394F8;\n    border-radius: 10px;\n    color: white;\n    display: inline-block;\n    font-size: 12px;\n    line-height: 1;\n    padding: 3px 7px;\n    text-align: center;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n/* searchFrom */\n.navbar.navbar-light form .md-form input {\n    border-bottom: 1px solid #f5f2f2;\n}\n.form-inline {\n    padding-top: 0.1px;\n}\n::-webkit-input-placeholder{\n    color: #757575;\n}\n:-ms-input-placeholder{\n    color: #757575;\n}\n::-ms-input-placeholder{\n    color: #757575;\n}\n::placeholder{\n    color: #757575;\n}\n/* Responsive */\n\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"d-sm-block\">\n        <img class=\"logo shadow-sm  bg-white rounded\"src=\"../assets/img/thebs_logo.png\" alt=\"\">\n    </div> -->\n<nav class=\"navbar navbar-expand-md  navbar-light bg-light navbar-light-color \">\n\n  <button class=\"navbar-toggler animatedBtn\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n    aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon icon-bar\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <div class=\"content-div\">\n      <ul class=\"navbar-nav content-nav text-center\">\n        <li class=\"nav-item ml-5\">\n          <a [routerLink]=\"['/Home']\" [routerLinkActive]=\"['active']\" class=\"nav-link text-white \" href=\"#\">HOME\n            <span class=\"sr-only\"> </span>\n          </a>\n        </li>\n        <li class=\"nav-item active ml-5\">\n          <a [routerLink]=\"['/ToBuy']\" [routerLinkActive]=\"['active']\" class=\"nav-link text-white\"\n            href=\"#\">\n            <span class=\"sr-only\">(current)</span>TO BUY</a>\n        </li>\n        <li class=\"nav-item active ml-5\">\n          <a [routerLink]=\"['/Contact']\" [routerLinkActive]=\"['active']\" class=\"nav-link text-white\" href=\"#\">\n            <span class=\"sr-only\">(current)</span>Contact</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Search form -->\n\n  <!-- Registrer -->\n  <div class=\"text-center\" *ngIf=\"!isLogin\">\n      <button  [routerLink]=\"['/Register']\"type=\"button\" data-toggle=\"modal\" data-target=\"#modalRegisterForm\" class=\"btn  btn-rounded icon-Header-li\">\n        Sign in \n      </button>\n    </div>\n  <!-- End Registrer -->\n\n  <!-- login -->\n <div class=\"text-center\"*ngIf=\"!isLogin\">\n        <button  [routerLink]=\"['/Login']\" type=\"button\" data-toggle=\"modal\" data-target=\"#modalLoginForm\" class=\"btn btn-rounded icon-Header-li\">\n          LogIn\n        </button>\n    </div>\n  <!-- End login  -->\n  <!-- Exit -->\n  <div class=\"text-center\" *ngIf=\"isLogin\">\n      <button  type=\"button\"class=\"btn btn-rounded icon-Header-li\"(click)= \"onclickLogout()\">\n       LogOut\n      </button>\n  </div>\n<!-- End Exit  -->\n\n\n  <!-- Shopping Cart -->\n  <li class=\"nav-item  icon-Header-li ml-5\">\n    <a  id=\"cart\"[routerLink]=\"['/ShopingCart']\" href=\"\"><i class=\"fas mr-sm-2 fa-shopping-cart icon-Header \"></i><span class=\"badge\">{{getQ()}}</span></a>\n  </li>\n\n  <!-- End icons -->\n</nav>\n<!--Navbar-->"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_add_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/add-cart.service */ "./src/app/services/add-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, addCartService) {
        this.authService = authService;
        this.addCartService = addCartService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLogin = true;
                _this.userName = auth.displayName;
                _this.userEmail = auth.email;
            }
            else {
                _this.isLogin = false;
            }
        });
    };
    HeaderComponent.prototype.getQ = function () {
        this.shoppingCartLe = JSON.parse(localStorage.getItem('shoppingCart'));
        this.shoppingCartlength = this.shoppingCartLe.length;
        return this.shoppingCartlength;
    };
    HeaderComponent.prototype.onclickLogout = function () {
        this.authService.logout();
        console.log('LOGOUT');
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")],
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_add_cart_service__WEBPACK_IMPORTED_MODULE_2__["AddCartService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font-family: 'Gloria Hallelujah', cursive; */\n/* basics */\na:link{\n    text-decoration:none;\n}\nh1 {\n    margin: 0 auto;\n    font-size: 3em;\n}\nh2 {\n    font-size: 1.4em;\n}\nhr { \n    border: 1px solid #FBD160; \n    height: 0px; \n    text-align: center; \n    width: 100%;\n}\na:link{\n    text-decoration:none;\n}\nh4{\n    font-size: 1em;\n}\n/* Title BoxA */\n.Title-Container{\n    padding: 5% 10%;\n    max-width: 40%;\n    float: left;\n    font-family: 'M PLUS Rounded 1c', sans-serif;  \n    background-color: #FBD160;\n    color: whitesmoke;\n    margin-top: -145px;\n    font-weight: bold;\n \n}\n.strong-title{\n margin: 0 auto;\n font-size: 3em;\n margin-top: 20%;\n}\n/* About Us Box */\n.aboutUs-box{\n    width: 40%;\n    height: auto;\n    color:#757575;\n    margin-top:4%;\n    margin-right:1px;\n    padding: 0.2%;\n    justify-content: center;\n    font-size: 0.8em;\n    position:relative;\n    border: #FBD160 1px solid;\n    letter-spacing: 0.2em;\n\n}\n/* BestSell Section */\n.flex { \n    display: flex;\n    flex-wrap: wrap;\n  }\n/* .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); } */\n.best-Sell{\n    width: 40%;\n    height: auto;\n    margin-top: 10%;\n    margin-right:20px;\n    justify-content: center;\n    position: relative;\n    z-index: -1;\n    bottom: 0;\n    font-family: 'M PLUS Rounded 1c', sans-serif; \n    font-size:0.7em;\n\n}\n.salesFont{\n    font-family: 'Gloria Hallelujah', cursive;\n    margin-top:0;\n    font-size:1em;\n}\n.card-image-best-Sell {\n    width:110px;\n    height: 150px!important;\n    margin: 1%;\n}\nstrong{  \n    font-size:1em; \n\n}\n.md-form {\n    bottom: 1px!important;\n}\n/* Responsive */\n@media (max-width: 767px){\n    .logo{\n        display: none;\n    }  \n    .logo-buy-page {\n        display: none;\n    }\n    .icons{\n        width:150px;\n    }\n    a{\n        font-size: 12px;\n    }\n    .aboutUs-box{\n        margin:0 auto;\n        width: 100%;\n        display: none;\n    }\n    .best-Sell{\n       display: none;\n    }\n  \n    .Title-Container{\n        margin: 30px auto;\n        max-width: 100%;\n     \n    }\n}\n@media (max-width: 426px){\n    .aboutUs-box{\n        width: 70%;\n        margin-top:2%;\n        margin-right: 2%;\n    }\n    .Title-Container{\n        margin: 30px auto;\n        max-width: 100%;\n     \n    }\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start main index content -->\n<div class=\"background\">\n  <div class = \"Title-Container\"r>\n    <h1 class=\"strong-title\">Find something good to read.<br> <hr> No Matters Where you are. </h1>\n  </div>\n\n  <div class=\"container aboutUs-box box-shadow \">\n    <div class=\"col-12\">\n      <div class=\"row container-fluid text-center\">\n        <em>\n          Every aspect of  \n           <strong>The Book Shop</strong>  is designed to help you discover new books and ideas, and encourage\n          interdisciplinary thinking.\n          At  <strong>The Book Shop</strong> we curate our books to maximise serendipity.\n          Our shelves are arranged according to broad themes like 'Wanderlust', ‘Enchantment for Disenchanted’ and ‘The\n          City’, so you’re constantly encountering titles you might not have come across otherwise.\n        </em>\n      </div>\n    </div>\n  </div>\n  <!-- Start Best Sales  -->\n  <div class=\"container text-center best-Sell\">\n    <div class=\"row \">\n      <div class=\"col\">\n        <h5 class=\"text-center\"> <strong>RECOMMENDED FOR YOU   <span *ngIf = \"nombre\">{{nombre}}!</span></strong></h5>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div  *ngFor=\"let book of bestSellers\">\n          <hr>\n          <!-- Card image -->\n          <div class=\"col-sm-12 my-1 \">\n            <img class=\"card-image-best-Sell \" src=\"{{book.pic}}\" alt=\"Card image cap\">\n            <a>\n              <div class=\"mask rgba-white-slight\"></div>\n            </a>\n          </div>\n          <!-- Card content -->\n          <div>\n            <!-- Title -->\n            <h4 class=\"card-text\"> {{book.title}} </h4>\n            <!-- Text -->\n            <p class=\"card-text\">{{book.price}}$</p>\n            <span  class =\"salesFont\"*ngIf=\"book.price < 20\"  [style.color]=\"book.price < 20 ?  'orange':'transparent'\"\n              >SALES\n            </span> \n            \n          </div>\n        </div>\n      </div>\n    </div>  \n</div>\n<!-- Coockies Modal -->\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_bestSellBooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bestSellBooks */ "./src/app/models/bestSellBooks.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.bestSellers = [
            new _models_bestSellBooks__WEBPACK_IMPORTED_MODULE_1__["BestSell"]('China Rich Girlfriend', 25, '../assets/img/firstBook.jpg'),
            new _models_bestSellBooks__WEBPACK_IMPORTED_MODULE_1__["BestSell"]('Crazy Rich Asians ', 12, '../assets/img/secondBook.jpg'),
            new _models_bestSellBooks__WEBPACK_IMPORTED_MODULE_1__["BestSell"]('Rich People Problems', 25, '../assets/img/3book.jpg'),
        ];
        //this._route.params.subscribe((params:Params) =>{
        //this.nombre = params.nombre; 
        // console.log(params);
        //})
        this.nombre = localStorage.getItem('UserName');
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log(this.bestSellers);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.icon-Header-li{\n    padding:10px 9px;\n    transition: .2s;\n \n}\n.Login{\n    color: #757575!important;\n    font-size: 0.9em;\n    font-family: 'Gloria Hallelujah', cursive;\n    display: inline;\n}\n/* Btn-toggle */\n.animatedBtn {\n    -webkit-transform: rotate(0deg); transform: rotate(0deg); transition: 0.2s ease;\n  }\n.animatedBtn:hover {\n      -webkit-transform: rotate(90deg); transform: rotate(90deg);\n  }\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- login -->\n  <div class=\"modal fade\" id=\"modalLoginForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header text-center\">\n            <h4 class=\"modal-title w-100 font-weight-bold\">LogIn</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <form class=\"modal-body mx-3\" (submit)=\"onSubmitLogin()\">\n            <div class=\"md-form mb-5\">\n              <i class=\"fa fa-envelope prefix grey-text\"></i>\n              <input type=\"email\" id=\"defaultForm-email\" class=\"form-control validate\" name=\"Email\"[(ngModel)] =\"email\" >\n              <label data-error=\"Invalid email!\" data-success=\"right\" for=\"defaultForm-email\">Your email</label>\n            </div>\n            <div class=\"md-form mb-4\">\n              <i class=\"fa fa-lock prefix grey-text\"></i>\n              <input type=\"password\" id=\"defaultForm-pass\" class=\"form-control validate\" [(ngModel)] =\"password\"  name=\"Password\">\n              <label data-error=\"wrong\" data-success=\"right\">Your\n                password</label>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-center\">\n              <button class=\"btn btn-deep-orange\">Log In </button>\n            </div>\n          </form>\n\n  <!-- Social Media -->\n  <p class=\"font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2\"> or Sign in with:</p>\n          <div class=\"row my-3 d-flex justify-content-center\">\n              <!--Facebook-->\n              <button type=\"button\" class=\"btn btn-white btn-rounded mr-md-3 z-depth-1a\"><i class=\"fab fa-facebook-f text-center\"></i></button>\n              <!--Twitter-->\n              <button type=\"button\" class=\"btn btn-white btn-rounded mr-md-3 z-depth-1a\"><i class=\"fab fa-twitter\"></i></button>\n              <!--Google +-->\n              <button type=\"button\" class=\"btn btn-white btn-rounded z-depth-1a\"><i class=\"fab fa-google-plus-g\"></i></button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- End login  -->\n\n    <app-home></app-home>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.hideModal = function () {
        $('#modalLoginForm').modal('hide');
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmitLogin = function () {
        var _this = this;
        this.authService.loginEmail(this.email, this.password).then(function (res) {
            _this.hideModal();
            _this.router.navigate(['/Home']);
        }).catch(function (err) {
            console.log(err);
            _this.router.navigate(['/Login']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-component/main-component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/main-component/main-component.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-component/main-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main-component/main-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<!-- Rutas con vista/páginas -->\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/main-component/main-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-component/main-component.component.ts ***!
  \************************************************************/
/*! exports provided: MainComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponentComponent", function() { return MainComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponentComponent = /** @class */ (function () {
    function MainComponentComponent() {
    }
    MainComponentComponent.prototype.ngOnInit = function () {
    };
    MainComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-component',
            template: __webpack_require__(/*! ./main-component.component.html */ "./src/app/main-component/main-component.component.html"),
            styles: [__webpack_require__(/*! ./main-component.component.css */ "./src/app/main-component/main-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponentComponent);
    return MainComponentComponent;
}());



/***/ }),

/***/ "./src/app/models/BookPictures.ts":
/*!****************************************!*\
  !*** ./src/app/models/BookPictures.ts ***!
  \****************************************/
/*! exports provided: BookPictures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPictures", function() { return BookPictures; });
var BookPictures = /** @class */ (function () {
    function BookPictures(price, pic) {
        this.price = price;
        this.pic = pic;
    }
    ;
    return BookPictures;
}());



/***/ }),

/***/ "./src/app/models/ContactUsers.ts":
/*!****************************************!*\
  !*** ./src/app/models/ContactUsers.ts ***!
  \****************************************/
/*! exports provided: ContactUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsers", function() { return ContactUsers; });
var ContactUsers = /** @class */ (function () {
    function ContactUsers(name, email, location, message) {
        this.name = name;
        this.email = email;
        this.location = location;
        this.message = message;
    }
    return ContactUsers;
}());



/***/ }),

/***/ "./src/app/models/bestSellBooks.ts":
/*!*****************************************!*\
  !*** ./src/app/models/bestSellBooks.ts ***!
  \*****************************************/
/*! exports provided: BestSell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestSell", function() { return BestSell; });
var BestSell = /** @class */ (function () {
    function BestSell(title, price, pic) {
        this.title = title;
        this.price = price;
        this.pic = pic;
    }
    ;
    return BestSell;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'Filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/private-page/private-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/private-page/private-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/private-page/private-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/private-page/private-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  private-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/private-page/private-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/private-page/private-page.component.ts ***!
  \********************************************************/
/*! exports provided: PrivatePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatePageComponent", function() { return PrivatePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivatePageComponent = /** @class */ (function () {
    function PrivatePageComponent() {
    }
    PrivatePageComponent.prototype.ngOnInit = function () {
    };
    PrivatePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-private-page',
            template: __webpack_require__(/*! ./private-page.component.html */ "./src/app/private-page/private-page.component.html"),
            styles: [__webpack_require__(/*! ./private-page.component.css */ "./src/app/private-page/private-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivatePageComponent);
    return PrivatePageComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.icon-Header-li{\n    padding:10px 9px;\n    transition: .2s;\n \n}\n\n.Login{\n    color: #757575!important;\n    font-size: 0.9em;\n    font-family: 'Gloria Hallelujah', cursive;\n    display: inline;\n}\n\n/* Btn-toggle */\n\n.animatedBtn {\n    -webkit-transform: rotate(0deg); transform: rotate(0deg); transition: 0.2s ease;\n  }\n\n.animatedBtn:hover {\n      -webkit-transform: rotate(90deg); transform: rotate(90deg);\n  }\n\n/* Modal Background */\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalRegisterForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header text-center\">\n          <h4 class=\"modal-title w-100 font-weight-bold\">Sign up</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <form class=\"modal-body mx-3\" (submit)=\"onSubmitAddUser()\">\n            <div class=\"md-form mb-5\">\n                <i class=\"fa fa-envelope prefix grey-text\"></i>\n                <input type=\"text\" #box2 (keyup)= \"onKey(box2.value)\" id=\"orangeForm-name\" name=\"nombre\" class=\"form-control validate\" [(ngModel)] =\"nombre\"  >\n                <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-name\">Your name</label>\n              </div>\n          <div class=\"md-form mb-5\">\n            <i class=\"fa fa-envelope prefix grey-text\"></i>\n            <input type=\"email\" id=\"orangeForm-email\" name=\"email\" class=\"form-control validate\" [(ngModel)] =\"email\"  >\n            <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-email\">Your email</label>\n          </div>\n\n          <div class=\"md-form mb-4\">\n            <i class=\"fa fa-lock prefix grey-text\"></i>\n            <input type=\"password\" id=\"orangeForm-pass\" class=\"form-control validate\" [(ngModel)] =\"password\" name=\"password\" >\n            <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-pass\">Your password</label>\n          </div>\n          <div class=\"modal-footer d-flex justify-content-center\">\n            <button  class=\"btn btn-deep-orange\">Sign up</button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n<app-home></app-home>\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.hideModal = function () {
        $('#modalRegisterForm').modal('hide');
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onKey = function (value) {
        console.log(this.nombre);
        this.UserName = 'UserName';
        localStorage.setItem(this.UserName, this.nombre);
        console.log(localStorage);
    };
    RegisterComponent.prototype.onSubmitAddUser = function () {
        var _this = this;
        this.authService.registerUser(this.email, this.password).then(function (res) {
            console.log('Works!!!!!!!');
            console.log(res);
            console.log(_this.nombre);
            _this.hideModal();
            _this.router.navigate(['/Home', _this.nombre]);
            console.log(localStorage);
        }).catch(function (err) {
            console.log(err);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.btn[class*=\"btn-outline-\"] {\n    padding-top: .2rem;\n    padding-bottom: .2rem;\n    width: 5%;\n}\n\n.filter{\n    margin-top: 4%;\n    font-size: 1em;\n    font-family: 'Karla', sans-serif;\n    color:black;\n    margin-left: 0;\n    height: 20vh;\n}\n\n.borderSearch {\n    border-bottom: black 1px solid !important;\n}\n\n.filter-links{\n    list-style:none;\n}\n\n.filter-links li a{\n    color:black;\n}\n\n.filter-links li a:hover{\n    color:#4285f4;\n}\n\na:hover {\n    transition: all .2s ease-in-out;\n    text-decoration: none;\n}\n\n.card{\n    padding-bottom: 30px;\n    margin-top: 10% !important;\n}\n\nimg{\n    height: 200px;\n}\n\n.custom-price{\n    position: absolute;\n    bottom: 0;\n    left:20px;\n    z-index: 1;\n    font-size: 1.1em;\n\n}\n\n.flex { \n    display: flex; \n    flex-direction: row; \n\n}\n\n.btn-books{\n    position: absolute;\n    bottom: 2px;\n    right: 20px;\n    z-index: 1;\n\n}\n\n.btn[class*=\"btn-outline-\"] {\n    padding-top: .3rem;\n    padding-bottom: .3rem;\n    width: 5%;\n}\n\n#custom-size{\n    font-size: 0.6em;\n}\n\n.contanier-bot{\n    height: 200px;\n    width: 100%;\n}\n\ninput[type=\"text\"]{\n    border-bottom: 1px solid #f7f5f5;\n}\n\n@media (max-width: 767.98px) { \n\n   \n }"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline waves-light\" mdbWavesEffect>\n  <div class=\"md-form mt-0\">\n    <input #box (keyup)=\"onKey(box.value)\"[(ngModel)]=\"inputResult\"\n    name= \"inputResult\"\n    class=\"form-control\" \n    type=\"text\" placeholder=\"Search\"> \n  </div>\n  <button [routerLink]=\"['/Search']\" [routerLinkActive]=\"['active']\" (click)=\"onClickMe(inputResult)\" type=\"button\" class=\"btn btn-sm btn-outline-warning waves-effect px-3 mb-4\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n</form>\n\n<div class=\"col-9\" >\n  <div class=\"container book-list-container flex \"  >\n      <div class=\"row \" >\n            <div class=\"card col-md-3 m-2 \" *ngFor = \"let match of matches\" >\n              <div class=\"view\">\n                <img src=\"{{match.image}}\" class=\"card-img-top\" alt=\"photo\">\n                <a href=\"#\">\n                    <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>     \n                        <div class=\"card-block mb-2\">\n                          <h5>{{match.title}}</h5>\n                          <p id=\"custom-size\">{{match.description}}</p>                      \n                        </div>\n                        <p class=\"custom-price mt-5\">${{match.price}}</p>\n                        <button type=\"button\" class=\"btn btn-books btn-sm btn-outline-dark waves-effect flex text-center px-3\"><i class=\"fas fa-shopping-cart\" aria-hidden=\"true\"></i></button> \n                       \n              </div>\n              <div class=\"contanier-bot\"></div>\n      </div>\n    <!--End Book-section -->\n</div>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_petitions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/petitions.service */ "./src/app/services/petitions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(ps) {
        this.ps = ps;
        this.matches = [];
        this.inputResult = "";
        this.clickMessage = "";
        this.values = '';
    }
    SearchComponent.prototype.onKey = function (value) {
        console.log(value);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ps.getBook().subscribe(function (result) {
            _this.book = result;
            console.log(result);
        });
    };
    SearchComponent.prototype.onClickMe = function (inputResult) {
        for (var i = 0; i < this.book.length; i++) {
            if (inputResult == this.book[i].title) {
                this.matches.push(this.book[i]);
                console.log(this.matches);
            }
            else if (inputResult != this.book[i].title) {
                console.log('Not Found');
            }
            else {
                console.log('ERROR!');
            }
        }
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")],
            providers: [
                _services_petitions_service__WEBPACK_IMPORTED_MODULE_1__["PetitionsService"]
            ]
        }),
        __metadata("design:paramtypes", [_services_petitions_service__WEBPACK_IMPORTED_MODULE_1__["PetitionsService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/add-cart.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/add-cart.service.ts ***!
  \**********************************************/
/*! exports provided: AddCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCartService", function() { return AddCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddCartService = /** @class */ (function () {
    function AddCartService() {
    }
    AddCartService.prototype.getQ = function () {
        this.shoppingCartLe = JSON.parse(localStorage.getItem('shoppingCart'));
        this.shoppingCartlength = this.shoppingCartLe.length;
        return this.shoppingCartlength;
    };
    AddCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AddCartService);
    return AddCartService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    // Register
    AuthService.prototype.registerUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    // login
    AuthService.prototype.loginEmail = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    // Match login with data
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.map(function (auth) { return auth; });
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/petitions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/petitions.service.ts ***!
  \***********************************************/
/*! exports provided: PetitionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetitionsService", function() { return PetitionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PetitionsService = /** @class */ (function () {
    function PetitionsService(_http) {
        this._http = _http;
        this.url = '../assets/data.json';
    }
    PetitionsService.prototype.getBook = function () {
        return this._http.get(this.url);
    };
    PetitionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PetitionsService);
    return PetitionsService;
}());



/***/ }),

/***/ "./src/app/shoping-cart/shoping-cart.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shoping-cart/shoping-cart.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container{\n  margin-top:5%;\n}\nimg{\n  width: 50%;\n}\n.product-removal {\n  color: rgb(77, 70, 70)!important;\n}\n@media (max-width: 414px) {\n  .table-xs tr,\n  .table-xs td,\n  .table-xs tbody,\n  .table-xs thead,\n  .table-xs tfoot,\n  .table-xs th {\n    display: table;\n    width: 100%;\n    border-collapse: separate;\n  }\n  .table-xs > tbody tr:first-child {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .table-xs td[title]:before {\n    content: attr(title) \": \";\n  }\n  .table-xs td:before {\n    white-space: nowrap;\n    width: 50%;\n    display: table-cell;\n    text-align: left;\n    font-weight: bold;\n  }\n  .table-xs .item-row td:first-child,\n  .table-xs .item-row td:nth-child(2) {\n    border: 0 none;\n \n  }\n  .table-xs .item-row td:first-child {\n    border: 0 none;\n\n  }\n  .table-xs .item-row td:last-child {\n    background: #eee;\n    border-bottom: 2px solid #a2a2a2;\n    font-weight: bold;\n  }\n  .table-xs .item-row img {\n    margin-bottom: 1em;\n \n  }\n  .table-xs .total-row td {\n    display: table-cell;\n    width: 1%;\n    border-top: 0 none;\n    border-bottom: 3px double #a2a2a2;\n    font-weight: bold;\n    font-size: 1.5em;\n  }\n  .table-xs .total-row td:first-child {\n    width: 99%;\n  }\n \n}\n"

/***/ }),

/***/ "./src/app/shoping-cart/shoping-cart.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shoping-cart/shoping-cart.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body [style.backgroundSize]=\"'cover'\">\n\n  <div class=\"container\" >\n    <h1> Shopping Cart</h1>\n    <table class=\"table table-xs\">\n      <tr>\n        <th></th>\n        <th class=\"text-left \">Book</th>\n        <th class=\"text-left\">Description</th>\n        <th class=\"text-left \"></th>\n        <th class=\"text-right \">Price</th>\n      </tr>\n   \n      <tr class=\"item-row\" *ngFor=\"let shoppingCarts of shoppingCart\">\n            <div >\n                <a (click)=\"remove(shoppingCarts)\" type=\"button\" class=\" product-removal text-black btn-floating \" ><i class=\"fa fa-remove\" aria-hidden=\"true\"></i></a>\n            </div>\n        <td> <img src=\"{{shoppingCarts.image}}\"/></td>\n        <td>\n          <p> <strong>{{shoppingCarts.title}} <br>\n          </strong>\n          {{shoppingCarts.description}}</p>\n          <p></p>\n        </td>\n        <td class=\"text-right\" title=\"Amount\"></td>\n        <td class=\"text-right\" title=\"Price\">${{shoppingCarts.price}}</td>\n      \n        <td class=\"text-right\" title=\"Total\"></td>\n      </tr>\n      <tr class=\"total-row info\">\n        <td class=\"text-right\" colspan=\"4\">Total</td>\n        <td class=\"text-right\">${{getTotal()}}</td>\n      </tr>\n    </table>\n    <button type=\"button\" class=\"btn btn-outline-primary btn-rounded waves-effect\">CheckOut</button>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/shoping-cart/shoping-cart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shoping-cart/shoping-cart.component.ts ***!
  \********************************************************/
/*! exports provided: ShopingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingCartComponent", function() { return ShopingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_add_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/add-cart.service */ "./src/app/services/add-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopingCartComponent = /** @class */ (function () {
    function ShopingCartComponent(addCartService) {
        this.addCartService = addCartService;
        this.shoppingCart = [];
    }
    ShopingCartComponent.prototype.ngOnInit = function () {
        this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    };
    ShopingCartComponent.prototype.remove = function (removeBook) {
        for (var i = 0; i < this.shoppingCart.length; i++) {
            if (removeBook === this.shoppingCart[i]) {
                this.removeBooks = this.shoppingCart.indexOf(removeBook);
                this.shoppingCart.splice(this.removeBooks, 1);
                this.key = 'shoppingCart';
                localStorage.setItem(this.key, JSON.stringify(this.shoppingCart));
            }
        }
    };
    ShopingCartComponent.prototype.getTotal = function () {
        this.total = 0;
        for (var i = 0; i < this.shoppingCart.length; i++) {
            this.total = this.total + this.shoppingCart[i].price;
        }
        return this.total;
    };
    ShopingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shoping-cart',
            template: __webpack_require__(/*! ./shoping-cart.component.html */ "./src/app/shoping-cart/shoping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shoping-cart.component.css */ "./src/app/shoping-cart/shoping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_add_cart_service__WEBPACK_IMPORTED_MODULE_1__["AddCartService"]])
    ], ShopingCartComponent);
    return ShopingCartComponent;
}());



/***/ }),

/***/ "./src/app/to-buy/to-buy.component.css":
/*!*********************************************!*\
  !*** ./src/app/to-buy/to-buy.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.filter{\n    margin-top: 4%;\n    font-size: 1em;\n    font-family: 'Karla', sans-serif;\n    color:black;\n    margin-left: 0;\n    height: 20vh;\n}\n.borderSearch {\n    border-bottom: black 1px solid !important;\n}\n.filter-links{\n    list-style:none;\n}\n.filter-links li a{\n    color:black;\n}\n.filter-links li a:hover{\n    color:#4285f4;\n}\n.Serch-Title{\n    font-size: 3em;\n    color:#4285f4;\n}\na:hover {\n    transition: all .2s ease-in-out;\n    text-decoration: none;\n}\n.card{\n    padding-bottom: 30px;\n    margin: 2% !important;\n    margin-top:10%!important;\n    box-shadow: none;\n    font-weight: 300;\n}\n.card:hover{\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n.card-match{\n    padding-bottom: 50px;\n    margin: 2% !important;\n    margin-top:10%!important;\n    box-shadow: none;\n}\nimg{\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n    height: 295px;\n}\n/* Modal*/\n.img-modal{\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n    height: 295px;\n}\n.product-rating{\n    margin-top:2px;\n    margin-left: 15px;\n  }\ni.fa-star{\n    color:#aaa; \n    display:inline-block;}\ni.fa-star.rating{\n    color: rgb(232, 217, 31);}\n.product-rating-details{\n    display:inline-block; \n    padding-left: 10px;}\n.product-available {\n    margin-top: 25px;\n  }\n.btn-books-info-modal{\n    position: absolute;\n    bottom: 30px;\n    font-size:1em;\n    z-index: 1;\n    border:none!important;\n    box-shadow: none!important;\n}\n.close{\n  border:none!important;\n  box-shadow: none!important;\n  font-size: 1em;\n}\n/* Modal Ends  */\n.custom-price{\n    position: absolute;\n    bottom: 0;\n    left:20px;\n    z-index: 1;\n    font-size: 1.3em;\n    font-weight: 400;\n\n}\n.flex { \n    display: flex; \n    flex-direction: row; \n}\n.btn-books{\n    position: absolute;\n    bottom: 10px;\n    right: 20px;\n    z-index: 1;\n}\n.btn-books:hover{\n    color: #e25714!important;\n}\n.btn-books-info{\n    position: absolute;\n    bottom: 40px ;\n    left: 100px;\n    z-index: 1 ;\n    font-size: 1em;\n    border:none!important;\n    box-shadow: none;\n}\n.btn-books-info:hover{\n   color: #e25714!important;\n   \n}\n.btn[class*=\"btn-outline-\"] {\n    padding-top: .3rem;\n    padding-bottom: .3rem;\n  \n}\n.product-right {\n    float: left;\n    vertical-align: top;\n    width: 49%;\n  }\n.custom-title-size{\n    padding-top:3%;\n    font-size: 1.2em!important;\n    font-weight: 400;\n}\n#custom-size{\n    font-size: 0.7em!important;\n    text-align : justify; \n}\n.contanier-bot{\n    height: 200px;\n    width: 100%;\n}\ninput[type=\"text\"]{\n    border-bottom: 1px solid #f7f5f5;\n}\n.go-back {\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    color: #222;\n    width: 0;\n    height: 0;\n    border-top: 60px solid #CAE00D!important;\n    border-right: 60px solid transparent!important;\n}\n.go-back:hover {\n    color: white;\n    border-top: 60px solid #e25714;\n    \n}\n.go-back i {\n    font-size: 20px;\n    position: relative;\n    top: -52px;\n    left: 10px;\n  }\n/* NOT FOUND SECTION  */\n#GetAlert{\n    display: none;\n    margin: auto;\n    padding: 0!important;\n}\n/* Animations */\n.start-screen {\n    justify-content: center;\n    flex-flow: nowrap column;\n    min-height: 100vh;\n    margin: 0 auto;\n  }\n.loading {\n    display: flex;\n    margin-top: 3px 0 !important;\n  }\n/* End Animations */\n@media (max-width: 767.98px) { \n    .Serch-Title{\n        font-size: 1em;\n        color:#4285f4;\n    }\n   \n }\n@media(max-width:515px){\n    .product-rating-details{\n        padding-left:0;\n      }\n      input[type=\"text\"]{\n        font-size: 0.5em;\n    }\n}"

/***/ }),

/***/ "./src/app/to-buy/to-buy.component.html":
/*!**********************************************!*\
  !*** ./src/app/to-buy/to-buy.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start main index content -->\n<div class=\"container page-main-color\">\n  <div class=\"row\">\n    <!-- Filter -->\n    <div class=\"col-3 filter\">\n      <div class=\"col\">\n        <h5 class=\"Search-title\"> <span class=\"Serch-Title\">FIND</span> <br> YOUR NEXT FAV<br> <span class=\"Serch-Title\">BOOK</span></h5>\n        <div class=\"md-form mt-0\">\n          <form class=\"form-inline waves-light\" (ngSubmit)=\"onSubmit()\" mdbWavesEffect>\n            <div class=\"md-form mt-0\">\n              <input #box (keyup)=\"onKey(box.value)\" [(ngModel)]=\"inputResult\" name=\"inputResult\" class=\"form-control\"\n               type=\"text\" placeholder=\"TITLE\">\n            </div>\n            <button (click)=\"onClickMe(inputResult)\" type=\"submit\" class=\"btn btn-sm btn-outline-warning waves-effect px-3 mb-4\"><i\n                class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n          </form>\n        </div>\n      </div>\n    </div>\n    <!-- End Filter -->\n    <!-- Books Display -->\n    <div class=\"col-9\" *ngIf=\"DisplayBooks; else SearchBook \" >\n      <div class=\"container book-list-container flex \">\n        <div class=\"row \">\n          <div class=\"card col-md-3 m-2 el1\" *ngFor=\"let books of book|Filter: {title: inputResult};\">\n            <div class=\"view\">\n              <img src=\"{{books.image}}\" class=\"card-img-top\" alt=\"photo\">\n              <a href=\"#\">\n                <div class=\"mask rgba-white-slight\"></div>\n              </a>\n            </div>\n            <div class=\"card-block mb-5\">\n              <h5 class= \"custom-title-size\">{{books.title}}</h5>\n              <p id=\"custom-size\">{{books.description}}</p>\n            </div>\n            <p class=\"custom-price mt-5\">${{books.price}}</p>\n            <button (click)=\"getTheBook(books)\" \n            type=\"button\" \n            class=\"btn btn-books btn-sm btn-outline-dark waves-effect flex text-center px-3\"><i\n                class=\"fas fa-shopping-cart\" aria-hidden=\"true\"></i></button>\n            <!-- Modal -->\n            <!-- Button trigger modal -->\n            <button (click)=\"DisplayInModal(books.id)\" type=\"button\" class=\"btn btn-books-info btn-outline-dark flex\"\n              data-toggle=\"modal\" data-id=\"{{books.id}}\" data-target=\"#basicExampleModal\">\n              Info\n            </button>\n            <!-- Modal -->\n            <div class=\"modal fade \" id=\"basicExampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n              aria-hidden=\"true\" *ngFor=\"let modalDi of modalDis\">\n              <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <img src=\"{{modalDi.image}}\" class=\"img-modal\" alt=\"photo\">\n                    <div class=\"go-back\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <i class=\"fa fa-arrow-left\"></i> \n                    </div>\n\n                  </div>\n                  <div class=\"modal-body \">\n                    <h5 class= \"custom-title-size\">{{modalDi.title}}</h5>\n                    <p id=\"custom-size\">{{modalDi.description}}</p>\n                    <div class=\"product-available\">\n                      In stock\n                    </div>\n                  </div>\n                  <div class=\"product-rating\">\n                    <i class=\"fa fa-star rating\" star-data=\"1\"></i>\n                    <i class=\"fa fa-star rating\" star-data=\"2\"></i>\n                    <i class=\"fa fa-star rating\" star-data=\"3\"></i>\n                    <i class=\"fa fa-star\" star-data=\"4\"></i>\n                    <i class=\"fa fa-star\" star-data=\"5\"></i>\n                    <div class=\"product-rating-details\">(3.1 - <span class=\"rating-count\">1203</span> reviews)\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button (click)=\"getTheBook(books)\" type=\"button\" class=\"btn btn-books-info-modal btn-sm btn-outline-dark waves-effect flex text-center px-3\"><i\n                          class=\"fas fa-shopping-cart\" aria-hidden=\"true\"></i></button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- End Modal -->\n            </div>\n            <!-- End Modal-->\n          </div>\n          <div class=\"contanier-bot\"></div>\n        </div>\n      </div>\n    </div>\n    <!-- End Books Display -->\n    <!-- Match  Display-->\n    <ng-template #SearchBook>\n      <div class=\"col-9\">\n        <div class=\"container book-list-container flex \">\n          <div class=\"row \">\n            <div class=\"card-match col-md-3 m-2 \" *ngFor=\"let match of matches\">\n              <div class=\"view\">\n                <img src=\"{{match.image}}\" class=\"card-img-top\" alt=\"photo\">\n                <a href=\"#\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n              <div class=\"card-block mb-2\">\n                <h5 class= \"custom-title-size\">{{match.title}}</h5>\n                <p id=\"custom-size\">{{match.description}}</p>\n              </div>\n              <p class=\"custom-price mt-5\">${{match.price}}</p>\n              <button type=\"button\" (click)=\"QToFBooks()\"class=\"btn btn-books btn-sm btn-outline-dark waves-effect flex text-center px-3\"><i\n                  class=\"fas fa-shopping-cart\" aria-hidden=\"true\"></i></button>\n                          <!-- Button trigger modal -->\n            <button (click)=\"DisplayInModal(match.id)\" type=\"button\" class=\"btn btn-books-info btn-outline-dark flex\"\n            data-toggle=\"modal\" data-id=\"{{match.id}}\" data-target=\"#basicExampleModal\">\n            Info\n          </button>\n            </div>\n            <div class=\"contanier-bot\"></div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <!-- Match  Display-->\n    <!-- Not Found -->\n    <div id=\"GetAlert\" class=\"alert alertNotFound alert-light\" role=\"alert\">\n        <!-- <div class=\"start-screen\">\n            <div class=\"loading\">\n              <div class=\"loading__element el1\">N</div>\n              <div class=\"loading__element el2\">O</div>\n              <div class=\"loading__element el3\">T</div>\n            </div>\n              <div class=\"loading\">\n              <div class=\"loading__element el1\">F</div>\n              <div class=\"loading__element el2\">O</div>\n              <div class=\"loading__element el3\">U</div>\n              <div class=\"loading__element el4\">N</div>\n              <div class=\"loading__element el5\">D</div>\n            </div>\n            \n          </div> -->\n      <h2 class=\"notFound\">NOT FOUND!</h2>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/to-buy/to-buy.component.ts":
/*!********************************************!*\
  !*** ./src/app/to-buy/to-buy.component.ts ***!
  \********************************************/
/*! exports provided: ToBuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToBuyComponent", function() { return ToBuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_petitions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/petitions.service */ "./src/app/services/petitions.service.ts");
/* harmony import */ var _models_BookPictures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/BookPictures */ "./src/app/models/BookPictures.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToBuyComponent = /** @class */ (function () {
    function ToBuyComponent(_petitionsService, _router) {
        this._petitionsService = _petitionsService;
        this._router = _router;
        this.matches = [];
        this.modalDis = [];
        this.sellBook = [];
        this.inputResult = '';
        this.values = '';
        this.BookPicture = [
            new _models_BookPictures__WEBPACK_IMPORTED_MODULE_2__["BookPictures"](25, '../assets/img/portada.png'),
        ];
        this.DisplayBooks = true;
    }
    ToBuyComponent.prototype.onKey = function (value) {
        console.log(value);
    };
    // Show not found option
    ToBuyComponent.prototype.demoDisplay = function () {
        document.getElementById('GetAlert').style.display = 'block';
    };
    // Calling data
    ToBuyComponent.prototype.getBooksfr = function () {
        var _this = this;
        this._petitionsService.getBook().subscribe(function (result) {
            _this.book = result;
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    // SHowing data to the view
    ToBuyComponent.prototype.ngOnInit = function () {
        this.getBooksfr();
    };
    // Search Result
    ToBuyComponent.prototype.onClickMe = function (inputResult) {
        for (var i = 0; i < this.book.length; i++) {
            if (inputResult === this.book[i].title) {
                this.matches = [];
                this.matches.push(this.book[i]);
                console.log(this.matches);
            }
            else if (inputResult !== this.book[i].title) {
                this.DisplayBooks = false;
                this.demoDisplay();
            }
            else {
                console.log('Fatal error');
            }
        }
    };
    // Show book Modal
    ToBuyComponent.prototype.DisplayInModal = function (bookID) {
        console.log('modal Works');
        for (var i = 0; i < this.book.length; i++) {
            if (this.book[i].id === bookID) {
                this.modalDis = [];
                this.modalDis.push(this.book[i]);
                console.log(this.modalDis);
            }
            else {
                console.log('Fatal error');
                console.log(this.modalDis);
            }
        }
    };
    // Testing form submit
    ToBuyComponent.prototype.onSubmit = function () {
        console.log('Form Submitted!');
    };
    // take the selected book
    ToBuyComponent.prototype.getTheBook = function (bookID) {
        console.log(bookID);
        this.sellBook.push(bookID);
        this.key = 'shoppingCart';
        localStorage.setItem(this.key, JSON.stringify(this.sellBook));
    };
    ToBuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-to-buy',
            template: __webpack_require__(/*! ./to-buy.component.html */ "./src/app/to-buy/to-buy.component.html"),
            styles: [__webpack_require__(/*! ./to-buy.component.css */ "./src/app/to-buy/to-buy.component.css")],
            providers: [
                _services_petitions_service__WEBPACK_IMPORTED_MODULE_1__["PetitionsService"],
            ]
        }),
        __metadata("design:paramtypes", [_services_petitions_service__WEBPACK_IMPORTED_MODULE_1__["PetitionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ToBuyComponent);
    return ToBuyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyAEnrec_2PTjufJIrorQHgi9Di8fdDo-xA',
        authDomain: 'loginapp-3753e.firebaseapp.com',
        databaseURL: 'https://loginapp-3753e.firebaseio.com',
        projectId: 'loginapp-3753e',
        storageBucket: 'loginapp-3753e.appspot.com',
        messagingSenderId: '215668300033'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/minna/Documents/Code/It Academy/TheBookShopAngularApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map