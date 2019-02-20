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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-listings></app-listings>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _listings_listings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listings/listings.component */ "./src/app/listings/listings.component.ts");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _pipes_time_since_listed_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/time-since-listed.pipe */ "./src/app/pipes/time-since-listed.pipe.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _listings_listings_component__WEBPACK_IMPORTED_MODULE_5__["ListingsComponent"],
                _pipes_time_since_listed_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeSinceListedPipe"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_listing_service__WEBPACK_IMPORTED_MODULE_6__["ListingService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/listing.service.ts":
/*!************************************!*\
  !*** ./src/app/listing.service.ts ***!
  \************************************/
/*! exports provided: Listing, LISTINGS, ListingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listing", function() { return Listing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTINGS", function() { return LISTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingService", function() { return ListingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs/_esm5/observable/of.js");



var Listing = (function () {
    function Listing() {
    }
    Listing = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Listing);
    return Listing;
}());

var LISTINGS = [];
var ListingService = (function () {
    function ListingService() {
    }
    ListingService.prototype.getListings = function () {
        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(LISTINGS);
    };
    return ListingService;
}());



/***/ }),

/***/ "./src/app/listings/listings.component.html":
/*!**************************************************!*\
  !*** ./src/app/listings/listings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\r\n  <h1> {{ title }}</h1>\r\n  <input type=\"text\"  [(ngModel)]=\"term\" class=\"form-control pull-right\" placeholder=\"Filter job titles\" />\r\n</header>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <!-- preloader animation -->\r\n    <div class=\"loader\"></div>\r\n    <!-- retry countdown -->\r\n    <div id=\"try-again-countdown\"></div>\r\n    <!-- loop this for each returned listing -->\r\n    <!--  -->\r\n    <div class=\"col-xs-12 col-sm-6 item\" [class.active]=\"this.initialViewChecked\" *ngFor=\"let listing of listings | filter:term\" [class.selected]=\"listing === selectedListing\" (click)=\"onSelect(listing)\" ng-change=\"onChange()\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">    \r\n          <p>{{ listing.company }}</p> \r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <h3 ng-href=\"listing.company_url\">{{ listing.title }}</h3>\r\n        </div>\r\n        <table class=\"table\">\r\n          <tr>\r\n            <td><span class=\"glyphicon glyphicon-map-marker\"></span> {{ listing.location}}</td>\r\n            <td>Listed {{ listing.created_at | timeSinceListed }}</td> \r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- modal containing currently selected listing -->\r\n<div class=\"black-opacity\" *ngIf=\"selectedListing\">\r\n  <div class=\"wrapper\">\r\n    <!-- clickable scrollable blank area  -->\r\n    <div class=\"null\" (click)=\"onSelect(listing)\">\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"content-width\">\r\n        <img *ngIf=\"selectedListing.company_logo\" src=\"{{ selectedListing.company_logo || '//:0' }}\" alt=\"\">\r\n        <h2>{{ selectedListing.title }}</h2>\r\n        <a href=\"{{selectedListing.company_url}}\" target=\"_blank\"><p>{{ selectedListing.company }}</p></a>\r\n        <p><span class=\"glyphicon glyphicon-time\"></span>  {{ selectedListing.type }}</p>\r\n        <p><span class=\"glyphicon glyphicon-map-marker\"></span> {{ selectedListing.location }}</p>\r\n        <p [innerHTML]=\" selectedListing.description\" class=\"well\">{{ selectedListing.description }}</p>\r\n        <h3>How to apply</h3>\r\n        <p [innerHTML]=\" selectedListing.how_to_apply\" class=\"well\">{{ selectedListing.description }}</p>\r\n        <a type=\"button\" target=\"_blank\" class=\"btn btn-success\" href=\"{{selectedListing.url}}\">Visit listing at GitHub Jobs <span class=\"glyphicon glyphicon-new-window\"></span></a>\r\n        <!-- close button -->\r\n        <div id=\"close-button\" (click)=\"onSelect(listing)\">\r\n          <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/listings/listings.component.ts":
/*!************************************************!*\
  !*** ./src/app/listings/listings.component.ts ***!
  \************************************************/
/*! exports provided: ListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsComponent", function() { return ListingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");




var ListingsComponent = (function () {
    function ListingsComponent(listingService, http, rd) {
        this.listingService = listingService;
        this.http = http;
        this.rd = rd;
        this.title = "Angular exercise";
        this.results = '';
        this.initialViewChecked = false;
    }
    ListingsComponent.prototype.onSelect = function (listing) {
        var body = document.getElementsByTagName("body")[0];
        if (this.selectedListing == undefined) {
            this.selectedListing = listing;
            body.classList.add("modal-open");
        }
        else {
            this.selectedListing = listing;
            body.classList.remove("modal-open");
        }
    };
    ListingsComponent.prototype.ngOnInit = function () {
        var http = this.http;
        function getListings() {
            var request = new XMLHttpRequest();
            request.open('GET', 'https://jsonp.afeld.me/?url=https://jobs.github.com/positions.json', true);
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    // Success!
                    componentScope.listings = JSON.parse(request.responseText);
                    loader[0].parentNode.removeChild(loader[0]);
                }
                else {
                    // We reached our target server, but it returned an error
                }
            };
            request.onerror = function () {
                // There was a connection error of some sort
            };
            request.send();
            // http.get('https://jsonp.afeld.me/?url=https://jobs.github.com/positions.json').subscribe(data => {
            //   loader.style.opacity = "0";
            //   setTimeout(() => {
            //     loader.parentNode.removeChild(loader);
            //   }, 2000);
            //   // returned job objects into listings array
            //   componentScope.listings = data;
            // }, error => countdown321());
        }
        ;
        getListings();
        var componentScope = this;
        var retryMsg = document.getElementById("try-again-countdown");
        var loader = document.getElementsByClassName("loader");
        var iteration = 3;
        var oneSecondInterval;
        function countdown321() {
            oneSecondInterval = setInterval(function () { currentTimerStatus(); }, 1000);
        }
        function currentTimerStatus() {
            retryMsg.innerHTML = "Couldn't connect, let's try again in " + iteration + "...";
            loader[0].style.display = 'none';
            iteration--;
            if (iteration == -1) {
                retryMsg.innerHTML = "";
                loader[0].style.display = "";
                clearInterval(oneSecondInterval);
                iteration = 3;
                getListings();
            }
        }
    };
    ListingsComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        var listingCollection = document.getElementsByClassName('col-xs-12');
        if (this.initialViewChecked === false) {
            Array.from(listingCollection).forEach(function (elem, i, elements) {
                elem.style.transitionDelay = i * 50 + "ms";
                setTimeout(function () { return elem.style.transform = "rotateX(0deg)"; }, 100);
                if (i == 49)
                    _this.initialViewChecked = true;
            });
        }
    };
    ListingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(/*! ./listings.component.html */ "./src/app/listings/listings.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_2__["ListingService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ListingsComponent);
    return ListingsComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");


var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (listings, term) {
        if (term === undefined) {
            return listings;
        }
        else {
            return listings.filter(function (listing) {
                return listing.title.toLowerCase().includes(term.toLowerCase());
            });
        }
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/time-since-listed.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/time-since-listed.pipe.ts ***!
  \*************************************************/
/*! exports provided: TimeSinceListedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSinceListedPipe", function() { return TimeSinceListedPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");


var TimeSinceListedPipe = (function () {
    function TimeSinceListedPipe() {
    }
    // turn date listing posted into days since today
    TimeSinceListedPipe.prototype.transform = function (value, args) {
        var d = new Date().getTime();
        var d2 = new Date(value).getTime();
        var diff = +new Date(d - d2);
        // milliseconds in a day, round to zero decimal places
        var daysAgo = Math.round(diff / 86400000);
        var plural = "";
        if (!value)
            return value;
        if (daysAgo == 0) {
            return plural = "today";
        }
        else if (daysAgo == 1) {
            return plural = "yesterday";
        }
        else {
            return plural = daysAgo + " days ago";
        }
    };
    TimeSinceListedPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'timeSinceListed' })
    ], TimeSinceListedPipe);
    return TimeSinceListedPipe;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\angular-exercise\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map