webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'News API';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_component__ = __webpack_require__("../../../../../src/app/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_channels_component__ = __webpack_require__("../../../../../src/app/components/channels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_filter_pipe__ = __webpack_require__("../../../../../src/app/components/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_channels_component__["a" /* ChannelComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_component__ = __webpack_require__("../../../../../src/app/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_channels_component__ = __webpack_require__("../../../../../src/app/components/channels.component.ts");



var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'channels/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__components_channels_component__["a" /* ChannelComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/channels.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div>\r\n  \r\n    <div class=\"backBtn\">\r\n        <button type=\"button\" (click)=\"goHome()\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></button>\r\n    </div>\r\n    <div id=\"preloader\" *ngIf=\"preloader\"><img src=\"../../assets/loading_icon.gif\" /></div>\r\n    <!-- <div class=\"card urlToimg\" *ngFor=\"let article of articleObject\">\r\n      <img class=\"\" src=\"{{article.urlToImage}}\" alt=\"\">\r\n      <div class=\"card-block\">\r\n        <h4 class=\"card-title\">{{article.title}}</h4>\r\n        <p class=\"card-text\">{{article.description}}</p>\r\n        <a href=\"{{article.url}}\" class=\"read-more\">Read more</a>\r\n      </div>\r\n    </div> -->\r\n\r\n    <mat-card class=\"example-card\" *ngFor=\"let article of articleObject\">\r\n            <mat-card-header>\r\n              <mat-card-title>{{article.title}}</mat-card-title>\r\n              <!-- <mat-card-subtitle>{{article.title}}</mat-card-subtitle> -->\r\n            </mat-card-header>\r\n            <img mat-card-image [src]=\"article.urlToImage\" alt=\"Photo of a Shiba Inu\">\r\n            <mat-card-content>\r\n              <p>{{article.description}}</p>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n              <a href=\"{{article.url}}\" class=\"read-more\">Read more</a>\r\n              <button mat-button>\r\n                    <mat-icon>share</mat-icon>\r\n                  Share\r\n              </button>\r\n            </mat-card-actions>\r\n    </mat-card>\r\n</div> "

/***/ }),

/***/ "../../../../../src/app/components/channels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_getchannels_services__ = __webpack_require__("../../../../../src/app/services/getchannels.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChannelComponent = (function () {
    //Class Constructor
    function ChannelComponent(getChannels, route, router) {
        this.getChannels = getChannels;
        this.route = route;
        this.router = router;
        this.title = "Channel List";
        this.articleObject = [];
        this.preloader = true;
    }
    ChannelComponent.prototype.goHome = function () {
        this.router.navigate(['/']);
    };
    ChannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.source = id;
        this.getChannels.getNews(this.source).subscribe(function (data) {
            for (var item in data.articles) {
                _this.articleObject.push(data.articles[item]);
            }
            _this.preloader = false;
            console.log(_this.articleObject);
        });
    };
    return ChannelComponent;
}());
ChannelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'channels',
        template: __webpack_require__("../../../../../src/app/components/channels.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/css/home.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_getchannels_services__["a" /* getChannels */]]
    })
    //Home Component
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_getchannels_services__["a" /* getChannels */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_getchannels_services__["a" /* getChannels */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ChannelComponent);

var _a, _b, _c;
//# sourceMappingURL=channels.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/css/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "body, .mat-card {\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.mat-card {\r\n  margin-top: 5px;\r\n}\r\n\r\n.example-card {\r\n  width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n  background-size: cover;\r\n}\r\n\r\nbutton.mat-mini-fab {\r\n  margin-right: 10px;\r\n  font-size: 10px;\r\n}\r\n\r\nheader {\r\n  margin: 10px;\r\n}\r\n\r\nheader p {\r\n   padding: 10px;\r\n   background-color: #16B7DF;\r\n   color: white;\r\n}\r\n\r\n.card-text {\r\n  text-align: justify;\r\n}\r\n\r\nul li, .media, .media-heading, .card-text {\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n\r\nul.list-group {\r\n  font-size: 16px;\r\n}\r\n\r\nul.navbar-nav {\r\n  left : 50%;\r\n  position: relative;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%)\r\n}\r\n\r\n.headerDiv, .navbar-brand {\r\n    font-family: 'Open Sans Condensed', sans-serif;\r\n    font-size: 24px;\r\n}\r\n.example-card {\r\n    width: 400px;\r\n  }\r\n  \r\n.example-header-image {\r\n    background-size: cover;\r\n}\r\n\r\n.media {\r\n    box-shadow: 5px 5px 5px #DBD9D9;\r\n    padding-bottom: 10px\r\n  }\r\n\r\n.form-check-label {\r\n    padding: 15px;\r\n}\r\n\r\n.read-more {\r\n  font-family: 'Open Sans Condensed', sans-serif;\r\n  background-color: #128de4;\r\n  font-size: 14px;\r\n  padding: 0 5px 0 5px;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\nli.news-sources{\r\n  cursor: pointer; \r\n}\r\n\r\n\r\n  .banner {\r\n    width: 100%;\r\n    height: 300px;\r\n    color: #fff;\r\n    background: linear-gradient(-45deg, #10069C, #2DA807, #0694C4, #03943F);\r\n    background-size: 400% 400%;\r\n    -webkit-animation: Gradient 15s ease infinite;\r\n    animation: Gradient 15s ease infinite;\r\n    position: relative;\r\n    border-bottom: 5px solid #012D3A;\r\n  }\r\n  \r\n  @-webkit-keyframes Gradient {\r\n    0% {\r\n      background-position: 0% 50%\r\n    }\r\n    50% {\r\n      background-position: 100% 50%\r\n    }\r\n    100% {\r\n      background-position: 0% 50%\r\n    }\r\n  }\r\n  \r\n  @keyframes Gradient {\r\n    0% {\r\n      background-position: 0% 50%\r\n    }\r\n    50% {\r\n      background-position: 100% 50%\r\n    }\r\n    100% {\r\n      background-position: 0% 50%\r\n    }\r\n  }\r\n\r\n.banner section {\r\n    position: absolute;\r\n    right: 10%;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\n.banner div, section {\r\n  display: inline-block;\r\n}\r\n\r\n.banner #title {\r\n  font-family: 'Cinzel', serif;\r\n  font-size: 40px;\r\n}\r\n\r\n.banner #title_notes {\r\n  font-family: 'Kaushan Script', cursive; \r\n  font-size: 24px;\r\n}\r\n\r\n.mat-menu-item {\r\n  font-family: 'Open Sans Condensed', sans-serif;\r\n  font-size: 22px;\r\n}\r\n\r\n#title, #title_notes {\r\n  display: block\r\n}\r\n\r\n.backBtn {\r\n  padding: 10px;\r\n  bottom: 0px;\r\n  position: fixed;\r\n  right: 10px;\r\n  z-index: 1000;\r\n}\r\n\r\n.backBtn button {\r\n  font-family: 'Cinzel', serif;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0px;\r\n  padding: 10px 0 10px 10px;\r\n  font-family: 'Kaushan Script', cursive; \r\n}\r\n\r\n\r\n  @media (max-width: 750px) {\r\n    .banner #title {\r\n      font-family: 'Cinzel', serif;\r\n      font-size: 24px;\r\n    }\r\n    \r\n    .banner #title_notes {\r\n      font-family: 'Kaushan Script', cursive; \r\n      font-size: 18px;\r\n    }\r\n\r\n    .banner section {\r\n      position: absolute;\r\n      left: 5%;\r\n    }\r\n\r\n    .card-title {\r\n      font-family: 'Raleway', sans-serif;\r\n    }\r\n  }\r\n  \r\n  #preloader img {\r\n     top : 60%;\r\n     left : 50%;\r\n     -webkit-transform: translate(-50%, -50%);\r\n             transform: translate(-50%, -50%);\r\n     position: absolute;\r\n  }\r\n\r\n  @media (max-width: 990px) {\r\n    #worldmap {\r\n      display : none;\r\n    }\r\n    .banner {\r\n      height: 150px;\r\n    }\r\n    .form-check-label {\r\n      padding: 15px;\r\n      display: block;\r\n      text-align: left;\r\n    }\r\n }\r\n\r\n @media (min-width: 991) {\r\n  a.navbar-brand {\r\n    display: none;\r\n  }\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (channelObject, myfilter) {
        if (myfilter === undefined || myfilter === 'all') {
            return channelObject;
        }
        return channelObject.filter(function (channel) {
            return channel.category.includes(myfilter.toLowerCase());
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/components/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div>\r\n      <!-- <div class=\"banner\">    \r\n        <div id=\"worldmap\"><img src=\"../../assets/world-map.png\" alt=\"\" /></div>\r\n            <section>\r\n                <div id=\"title\">Live Headlines</div>\r\n                <div id=\"title_notes\">News headlines from 70 news sources worldwide.</div>\r\n            </section>\r\n      </div> -->\r\n    <header>\r\n\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item>\r\n              <mat-icon>favorite</mat-icon>\r\n              <span>Favorite</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>info</mat-icon>\r\n              <span>Info</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>settings</mat-icon>\r\n              <span>Settings</span>\r\n            </button>\r\n    \r\n            <!-- <button mat-menu-item [matMenuTriggerFor]=\"filterChannels\">\r\n                <mat-icon>list</mat-icon>\r\n                <span>Filters</span>\r\n            </button> -->\r\n             \r\n            <button *ngFor=\"let category of categories; let i = index\" id={{i}} (click)=\"filterOption(category); saveCategory(category)\" mat-menu-item>\r\n                <!-- <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"myfilters\" id={{i}} value={{category}} (click)=\"filterOption(category)\"> {{category  | uppercase}}\r\n                </label> -->\r\n                <mat-icon>sort</mat-icon>\r\n                <span>{{category  | uppercase}}</span>\r\n                <mat-icon *ngIf='genre == category'>check</mat-icon>\r\n            </button>\r\n\r\n          </mat-menu>\r\n          <!-- <mat-menu #filterChannels=\"matMenu\">\r\n              <span *ngFor=\"let category of categories; let i = index\" mat-menu-item>\r\n              <label class=\"form-check-label\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"myfilters\" id={{i}} value={{category}} (click)=\"filterOption(category)\"> {{category  | uppercase}}\r\n              </label>\r\n            </span>\r\n          </mat-menu> -->\r\n\r\n          <!-- <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n                <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  <span class=\"navbar-toggler-icon\"></span>\r\n                </button> -->\r\n                <!-- <mat-radio-group class=\"example-radio-group\">\r\n                    <mat-radio-button class=\"example-radio-button\" *ngFor=\"let category of categories\" [value]=\"category\">\r\n                      {{category}}\r\n                    </mat-radio-button>\r\n                  </mat-radio-group>\r\n                  <div class=\"example-selected-value\">Your Channel season is: {{favoriteChannel}}</div> -->\r\n                <!-- <a class=\"navbar-brand\" href=\"#\">{{myfilterStr | uppercase}}</a>\r\n                <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n                  <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item active\">\r\n                      <label class=\"form-check-label\" *ngFor=\"let category of categories; let i = index\">\r\n                       <input class=\"form-check-input\" type=\"radio\" name=\"myfilters\" id={{i}} value={{category}} (click)=\"filterOption(category)\"> {{category  | uppercase}}\r\n                      </label>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </nav> -->\r\n  </header>\r\n      <div id=\"preloader\" *ngIf=\"preloader\"><img src=\"../../assets/loading_icon.gif\" /></div>\r\n      <div id=\"\" *ngIf=\"errObject\"><img src=\"../../assets/404.jpg\" /></div>\r\n      <!-- <ul class=\"list-group\" >\r\n        <li (click)=\"onSelect(channel)\" class=\"list-group-item news-sources\" *ngFor=\"let channel of channelObject | filter: myfilterStr\">{{channel.name}} | {{channel.category}}</li>\r\n      </ul> -->\r\n      <mat-card (click)=\"onSelect(channel)\" class=\"list-group-item news-sources\" *ngFor=\"let channel of channelObject | filter: myfilterStr\">\r\n              <button mat-mini-fab>\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n              </button>{{channel.name}} | {{channel.category}}\r\n      </mat-card>\r\n</div> \r\n"

/***/ }),

/***/ "../../../../../src/app/components/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_getchannels_services__ = __webpack_require__("../../../../../src/app/services/getchannels.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    //Class Constructor
    function HomeComponent(getChannels, route) {
        var _this = this;
        this.getChannels = getChannels;
        this.route = route;
        this.arr = [];
        this.myfilterStr = 'all';
        this.title = "News Headlines";
        this.status = true;
        this.categories = ['all', 'general', 'entertainment', 'gaming', 'music', 'politics', 'science-and-nature', 'sport', 'technology'];
        this.channelObject = [];
        this.preloader = true;
        this.errObject = false;
        this.genre = this.getCategory();
        this.getChannels.getData().subscribe(function (channels) {
            for (var item in channels.sources) {
                _this.channelObject.push(channels.sources[item]);
            }
            console.log(_this.preloader);
        }, function err(err) {
            this.errObject = true;
            this.preloader = false;
            console.log(err);
            console.log(this.errObject);
        }, function () { return _this.preloader = false; });
    }
    HomeComponent.prototype.toggleFilter = function () {
        if (this.status == true) {
            this.status = false;
        }
        else {
            this.status = true;
        }
    };
    HomeComponent.prototype.filterOption = function (value) {
        this.myfilterStr = value;
        return this.myfilterStr;
    };
    HomeComponent.prototype.saveCategory = function (genre) {
        this.genre = genre;
        if (sessionStorage) {
            sessionStorage.setItem('currentGenre', this.genre);
        }
    };
    HomeComponent.prototype.getCategory = function () {
        if (sessionStorage) {
            console.log(sessionStorage.getItem('currentGenre'));
            if (!(sessionStorage.getItem('currentGenre'))) {
                return 'all';
            }
            return sessionStorage.getItem('currentGenre');
        }
    };
    HomeComponent.prototype.onSelect = function (channel) {
        this.route.navigate(['/channels', channel.id]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/components/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/css/home.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_getchannels_services__["a" /* getChannels */]]
    })
    //Home Component
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_getchannels_services__["a" /* getChannels */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_getchannels_services__["a" /* getChannels */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/getchannels.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getChannels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var getChannels = (function () {
    function getChannels(http) {
        this.http = http;
        console.log("Getting data.......................");
    }
    getChannels.prototype.getData = function () {
        return this.http.get('https://newsapi.org/v1/sources').map(function (res) { return res.json(); });
    };
    getChannels.prototype.getNews = function (source) {
        return this.http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=cbbf845e87d94bfa99f0f1419fbe6b00').map(function (res) { return res.json(); });
    };
    return getChannels;
}());
getChannels = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], getChannels);

var _a;
//# sourceMappingURL=getchannels.services.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map