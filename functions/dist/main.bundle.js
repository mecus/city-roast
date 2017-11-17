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

/***/ "../../../../../src/app/app-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentications_auth_service__ = __webpack_require__("../../../../../src/app/authentications/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router, af) {
        this.authService = authService;
        this.router = router;
        this.af = af;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log('AuthGuard Service implemented');
        var url = state.url;
        return this.checkAdmin(url);
    };
    //AuthGuard for Products // Access Admin Only
    AuthGuard.prototype.checkAdmin = function (url) {
        var _this = this;
        if (!localStorage.getItem('idToken')) {
            return false;
        }
        if (localStorage.getItem('idToken')) {
            this.authService.getAccount(localStorage.getItem('idToken'))
                .subscribe(function (adm) {
                if (adm['isAdmin'] == true) {
                    console.log("True Admin");
                    _this.adminUser = true;
                }
                else {
                    console.log("False Admin");
                    _this.adminUser = false;
                }
            });
            this.authService.redirectUrl = url;
            return this.adminUser;
        }
        this.router.navigate(['/']);
        return false;
    };
    AuthGuard.prototype.checkLogin = function (url) {
        var _this = this;
        this.af.authState.subscribe(function (currentUser) {
            console.log(currentUser);
            if (currentUser.email) {
                if (_this.authService.isAuthenticated) {
                    return true;
                }
                return true;
            }
        });
        if (localStorage.getItem('currentUser')) {
            if (this.authService.isAuthenticated) {
                return true;
            }
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentications_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentications_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=app-auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_page_index__ = __webpack_require__("../../../../../src/app/containers/page-index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentications_signup_component__ = __webpack_require__("../../../../../src/app/authentications/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentications_login_component__ = __webpack_require__("../../../../../src/app/authentications/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentications_password_reset_component__ = __webpack_require__("../../../../../src/app/authentications/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentications_accounts_account_component__ = __webpack_require__("../../../../../src/app/authentications/accounts/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__products_product_index__ = __webpack_require__("../../../../../src/app/products/product-index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__check_out_shopping_cart_component__ = __webpack_require__("../../../../../src/app/check-out/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__check_out_check_out_component__ = __webpack_require__("../../../../../src/app/check-out/check-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__check_out_order_component__ = __webpack_require__("../../../../../src/app/check-out/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__check_out_payment_method_component__ = __webpack_require__("../../../../../src/app/check-out/payment-method.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__redirect_error_component__ = __webpack_require__("../../../../../src/app/redirect/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__redirect_order_success_component__ = __webpack_require__("../../../../../src/app/redirect/order-success.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { CoffeeComponent } from './pages/coffee/coffee.component';




// import { ProductformComponent } from './products/product-form.component';
// import { ProductsComponent } from './products/product.component';

// import { ProductUpdateComponent } from './products/product-update.component';






// import { AuthGuard } from './app-auth-guard.service';
var fallBack = {
    path: '**', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
};
var root = {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
};
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__containers_page_index__["a" /* AboutComponent */] },
    { path: 'brewing', component: __WEBPACK_IMPORTED_MODULE_4__containers_page_index__["c" /* BrewingComponent */] },
    { path: 'coffees', component: __WEBPACK_IMPORTED_MODULE_9__products_product_index__["c" /* CoffeeComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__authentications_signup_component__["a" /* SignUpComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_8__authentications_accounts_account_component__["a" /* AccountComponent */] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_4__containers_page_index__["d" /* ContactsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__authentications_login_component__["a" /* LoginComponent */] },
    { path: 'product/?', component: __WEBPACK_IMPORTED_MODULE_9__products_product_index__["e" /* ProductViewComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_10__check_out_shopping_cart_component__["a" /* ShoppingCartComponent */] },
    { path: 'terms', component: __WEBPACK_IMPORTED_MODULE_4__containers_page_index__["f" /* TermsComponent */] },
    { path: 'return-policy', component: __WEBPACK_IMPORTED_MODULE_4__containers_page_index__["e" /* ReturnComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_11__check_out_check_out_component__["a" /* CheckOutComponent */] },
    { path: 'order', component: __WEBPACK_IMPORTED_MODULE_12__check_out_order_component__["a" /* OrderComponent */] },
    { path: 'exception', component: __WEBPACK_IMPORTED_MODULE_14__redirect_error_component__["a" /* ErrorComponent */] },
    { path: 'payment-confirmation', component: __WEBPACK_IMPORTED_MODULE_15__redirect_order_success_component__["a" /* OrderSuccessComponent */] },
    { path: 'payment-method', component: __WEBPACK_IMPORTED_MODULE_13__check_out_payment_method_component__["a" /* PaymentMethodComponent */] },
    { path: 'password-reset', component: __WEBPACK_IMPORTED_MODULE_7__authentications_password_reset_component__["a" /* PasswordResetComponent */] },
    { path: 'products/?', component: __WEBPACK_IMPORTED_MODULE_9__products_product_index__["b" /* CategoryComponent */] },
    { path: 'coffee_machine', component: __WEBPACK_IMPORTED_MODULE_9__products_product_index__["d" /* MachineComponent */] },
    { path: 'accessories', component: __WEBPACK_IMPORTED_MODULE_9__products_product_index__["a" /* AccessoryComponent */] },
    { path: 'blog/?', component: __WEBPACK_IMPORTED_MODULE_4__containers_page_index__["b" /* BlogPostComponent */] },
    // {path: 'dashboard', component: DashboardComponent},
    root,
];
//canActivate: [AuthGuard]
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
        ],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"menu-section\">\n    <app-menu></app-menu>\n    <!--<cat-menu></cat-menu>-->\n</section>\n<section class=\"content-body\">\n    <router-outlet></router-outlet>\n</section>\n<section class=\"footer-section\">\n <app-footer></app-footer>\n</section>\n\n       "

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-section {\n  position: relative;\n  bottom: 0;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        // console.log(localStorage);
        this._router.events.subscribe(function (event) {
            if (!(event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            // window.scrollTo(0, 0)
            setTimeout(function () {
                window.scrollTo(0, 1);
            }, 0);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase_config__ = __webpack_require__("../../../../../src/app/firebase-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__authentications_auth_module__ = __webpack_require__("../../../../../src/app/authentications/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__menu_menu_module__ = __webpack_require__("../../../../../src/app/menu/menu.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__menu_header_component__ = __webpack_require__("../../../../../src/app/menu/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home_header_component__ = __webpack_require__("../../../../../src/app/home/home.header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__menu_footer_component__ = __webpack_require__("../../../../../src/app/menu/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__containers_pages_module__ = __webpack_require__("../../../../../src/app/containers/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__products_product_module__ = __webpack_require__("../../../../../src/app/products/product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__check_out_check_out_module__ = __webpack_require__("../../../../../src/app/check-out/check-out.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__redirect_redirect_module__ = __webpack_require__("../../../../../src/app/redirect/redirect.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__app_auth_guard_service__ = __webpack_require__("../../../../../src/app/app-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_db_service__ = __webpack_require__("../../../../../src/app/services/db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























//need to be lazy loaded

// import { CatMenuComponent } from './menu/cat.menu.component';






var Components = [
    __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_17__menu_menu_component__["a" /* MenuComponent */], __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_19__menu_header_component__["a" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_20__home_home_header_component__["a" /* HomeMenuComponent */], __WEBPACK_IMPORTED_MODULE_22__menu_footer_component__["a" /* FooterComponent */]
];
var Modules = [
    __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_11_angular2_materialize__["a" /* MaterializeModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_16__menu_menu_module__["a" /* MenuModule */], __WEBPACK_IMPORTED_MODULE_25__containers_pages_module__["a" /* PagesModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_15__authentications_auth_module__["a" /* AuthModule */], __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
    __WEBPACK_IMPORTED_MODULE_26__products_product_module__["a" /* ProductModule */], __WEBPACK_IMPORTED_MODULE_27__check_out_check_out_module__["a" /* CheckOutModule */], __WEBPACK_IMPORTED_MODULE_28__redirect_redirect_module__["a" /* RedirectModule */],
    __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */], __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
    __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__firebase_config__["a" /* firebaseConfig */]),
    __WEBPACK_IMPORTED_MODULE_12_angular_2_local_storage__["LocalStorageModule"].withConfig({
        prefix: 'my-app',
        storageType: 'localStorage'
    }),
    __WEBPACK_IMPORTED_MODULE_29__dashboard_dashboard_module__["a" /* DashboardModule */]
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: Components,
        imports: Modules,
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_21__services_check_out_service__["a" /* CheckOutService */], __WEBPACK_IMPORTED_MODULE_23__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_24__services_blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_30__app_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_31__services_db_service__["a" /* DbService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentications/accounts/account.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ac-container\">\n    <div class=\"ac-head\">\n        <img src=\"assets/slider-access-control-jpg.jpeg\"  alt=\"\">\n        <div class=\"ac-title\">\n        <h1>Profile</h1>\n        </div>\n    </div>\n</section>\n<section class=\"ac-main-content container\">\n    <div class=\"ac-update\">\n        <h4>Billing Address</h4>\n        <form novalidates [formGroup]=\"cusForm\">\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-2 col-form-label\">First Name</label>\n                <div class=\"col-10 form-input\">\n                    <input class=\"form-control\" type=\"text\" formControlName=\"firstName\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n            <label for=\"example-search-input\" class=\"col-2 col-form-label\">Last Name</label>\n            <div class=\"col-10 form-input\">\n                <input class=\"form-control\" type=\"search\"  formControlName=\"lastName\">\n            </div>\n            </div>\n        \n            <div class=\"form-group row\">\n            <label for=\"example-datetime-local-input\" class=\"col-2 col-form-label\">Email</label>\n            <div class=\"col-10 form-input\">\n                <input class=\"form-control\" type=\"text\"  formControlName=\"email\">\n            </div>\n            </div>\n            <div class=\"form-group row\">\n            <label for=\"example-datetime-local-input\" class=\"col-2 col-form-label\">Telephone</label>\n            <div class=\"col-10 form-input\">\n                <input class=\"form-control\" type=\"text\"  formControlName=\"telephone\">\n            </div>\n            </div>\n            \n            <div class=\"form-group row\">\n            <label for=\"example-password-input\" class=\"col-2 col-form-label\">First Line Address</label>\n            <div class=\"col-10 form-input\">\n                <input class=\"form-control\" type=\"text\" value=\"hunter2\" formControlName=\"addressOne\">\n            </div>\n            </div>\n\n            <div class=\"form-group row\">\n            <label for=\"example-number-input\" class=\"col-2 col-form-label\">Second Line Address</label>\n            <div class=\"col-10 form-input\">\n                <input class=\"form-control\" type=\"text\" value=\"42\" formControlName=\"addressTwo\">\n            </div>\n            </div>\n\n            <div class=\"form-group row\">\n            <label for=\"example-date-input\" class=\"col-2 col-form-label\">Post Code</label>\n            <div class=\"col-10 form-input\">\n                <input class=\"form-control\" type=\"text\" value=\"SE14 5DG\" formControlName=\"postCode\">\n            </div>\n            </div>\n\n            <div class=\"form-group row\">\n            <label for=\"example-month-input\" class=\"col-2 col-form-label\">City</label>\n            <div class=\"col-10 form-input\">\n                <input class=\"form-control\" type=\"text\" value=\"London\" formControlName=\"city\">\n            </div>\n            </div>\n\n            <div class=\"form-group row\">\n            <label for=\"example-week-input\" class=\"col-2 col-form-label\">Country</label>\n            <div class=\"col-10 form-input\">\n                <input class=\"form-control\" type=\"text\" value=\"United Kingdom\" formControlName=\"country\">\n            </div>\n            </div>\n         </form>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/authentications/accounts/account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ac-container .ac-head {\n  background-color: #35414C;\n  width: 100%;\n  height: 200px;\n  overflow: hidden; }\n  .ac-container .ac-head img {\n    width: 100%;\n    opacity: 0.1;\n    margin-top: -200px; }\n  .ac-container .ac-head .ac-title {\n    position: absolute;\n    top: 160px;\n    right: 50px; }\n    .ac-container .ac-head .ac-title h1 {\n      color: lightslategray;\n      font-size: 1.5rem;\n      margin-right: 15px; }\n\n.ac-main-content {\n  width: 70%; }\n  .ac-main-content .ac-update .form-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .ac-main-content .ac-update .form-group .col-form-label {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n    .ac-main-content .ac-update .form-group .form-input {\n      -webkit-box-flex: 3;\n          -ms-flex: 3;\n              flex: 3; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentications/accounts/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_customer_details_model__ = __webpack_require__("../../../../../src/app/models/customer-details.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = (function () {
    function AccountComponent(cartService, _fb) {
        this.cartService = cartService;
        this._fb = _fb;
        this.title = 'Account Rocks';
        this.customer = new __WEBPACK_IMPORTED_MODULE_2__models_customer_details_model__["a" /* Customer */];
        this.cusForm = _fb.group(this.customer);
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getCustomerDetails()
            .subscribe(function (customers) {
            _this.customerInfo = customers;
            console.log(_this.customerInfo[0].firstName);
            _this.cusForm.patchValue({
                firstName: _this.customerInfo[0].firstName,
                lastName: _this.customerInfo[0].lastName,
                email: _this.customerInfo[0].email,
                telephone: _this.customerInfo[0].telephone,
                addressOne: _this.customerInfo[0].addressOne,
                addressTwo: _this.customerInfo[0].addressTwo,
                postCode: _this.customerInfo[0].postCode,
                city: _this.customerInfo[0].city,
                country: "United Kingdom"
            });
        });
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'account',
        template: __webpack_require__("../../../../../src/app/authentications/accounts/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentications/accounts/account.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__["a" /* CheckOutService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], AccountComponent);

var _a, _b;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentications/auth-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(afA, _router, db, cartService) {
        var _this = this;
        this.afA = afA;
        this._router = _router;
        this.db = db;
        this.cartService = cartService;
        this.isAuthenticated = false;
        afA.authState.subscribe(function (user) { return _this.currentUser = user; });
    }
    AuthService.prototype.storeAuthState = function (authState) {
        if (authState) {
            // this.isAuthenticated = true;
            if (authState) {
                localStorage.setItem('currentUser', (authState.email));
                localStorage.setItem('idToken', (authState.uid));
                localStorage.setItem('userId', (authState.uid));
                // localStorage.setItem('anonymous',(authState.auth.isAnonymous))
            }
        }
        return authState;
    };
    AuthService.prototype.signUp = function (user) {
        if (user) {
            console.log("creating user account");
            return this.afA.auth.createUserWithEmailAndPassword(user.email, user.password);
        }
    };
    AuthService.prototype.createAccount = function (uId, email) {
        var dbRef = this.db.object('accounts/' + this.currentUser["uid"]);
        dbRef.set({ isAdmin: false, active: false, email: email, createdAt: Date() })
            .then(function (success) { console.log("User Account Created successfully " + success); })
            .catch(function (error) { console.log("something went wrong " + error); });
    };
    AuthService.prototype.getAccount = function (uId) {
        // console.log(this.currentUser["uid"]);
        return this.db.object('accounts/' + this.currentUser["uid"]).valueChanges();
    };
    AuthService.prototype.getAccountWithId = function () {
        return this.db.object('accounts/' + this.currentUser["uid"]).snapshotChanges();
    };
    AuthService.prototype.getAccounts = function () {
        return this.db.list('accounts').snapshotChanges();
    };
    AuthService.prototype.updateAccount = function (update) {
        // console.log(this.currentUser["uid"]);
        var dbRef = this.db.object('accounts/' + this.currentUser["uid"]);
        return dbRef.update(__assign({}, update, { updatedAt: Date(), active: true }));
    };
    AuthService.prototype.deleteAccount = function (key) {
        var dbRef = this.db.object('accounts/' + key);
        dbRef.remove().then(function (res) {
            console.log("Account Deleted");
        }).catch(function (err) { return console.log(err); });
    };
    AuthService.prototype.logIn = function (user) {
        if (user) {
            return this.afA.auth.signInWithEmailAndPassword(user.email, user.password);
        }
    };
    AuthService.prototype.logOut = function () {
        return this.afA.auth.signOut();
    };
    AuthService.prototype.authChange = function () {
        var _this = this;
        this.afA.authState.subscribe(function (newUser) {
            if (!localStorage.getItem('currentUser') && newUser) {
                _this.storeAuthState(newUser);
                console.log('user saved in the storage');
            }
            if (newUser) {
                console.log(newUser.getToken());
                console.log('User Currently LoggedIn');
                console.log(newUser);
            }
            else {
                console.log('No User LoggedIn');
            }
        });
    };
    AuthService.prototype.logAnonymous = function () {
        var auth = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]();
        return auth.signInAnonymously();
    };
    AuthService.prototype.authUserState = function () {
        //checking for current user LoggedIn==//
        return this.afA.authState;
    };
    //Password Resetting Function
    AuthService.prototype.resetPasswordLink = function (email) {
        var auth = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]();
        var emailAddress = email;
        auth.sendPasswordResetEmail(emailAddress).then(function () {
            console.log('password reset');
        }, function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.resetPassword = function (email, password) {
        var user = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser;
        var credential = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].EmailAuthProvider.credential(email, password);
        // Prompt the user to re-provide their sign-in credentials
        // user.reauthenticate(credential).then(()=> {
        //     // User re-authenticated.
        //     console.log("Password Reset successfully")
        // }, (error)=> {
        //     // An error happened.
        //     console.log("Something went wrong");
        // });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_check_out_service__["a" /* CheckOutService */]) === "function" && _d || Object])
], AuthService);

var _a, _b, _c, _d;
//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ "../../../../../src/app/authentications/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_component__ = __webpack_require__("../../../../../src/app/authentications/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__("../../../../../src/app/authentications/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__password_reset_component__ = __webpack_require__("../../../../../src/app/authentications/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__("../../../../../src/app/authentications/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__accounts_account_component__ = __webpack_require__("../../../../../src/app/authentications/accounts/account.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { AppRoutingModule } from '../app-routing.module';






var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__signup_component__["a" /* SignUpComponent */], __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_8__accounts_account_component__["a" /* AccountComponent */], __WEBPACK_IMPORTED_MODULE_6__password_reset_component__["a" /* PasswordResetComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]],
        exports: [],
        providers: [__WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */]]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentications/auth.stylesheet.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lp-page-container .lp-page-head {\n  background-color: #35414C;\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n  border-radius: 0px 0px 0px 0px; }\n  .lp-page-container .lp-page-head img {\n    width: 100%;\n    opacity: 0.1;\n    margin-top: -200px; }\n  .lp-page-container .lp-page-head .lp-page-title {\n    width: 90%;\n    position: absolute;\n    top: 130px;\n    right: 50px; }\n    .lp-page-container .lp-page-head .lp-page-title h1 {\n      color: lightslategray;\n      font-size: 1.5rem;\n      margin-right: 15px; }\n\n.lp-page-container .logged-in {\n  height: 250px;\n  margin: 0 auto;\n  text-align: center;\n  min-height: 500px; }\n  .lp-page-container .logged-in h5 {\n    text-align: center; }\n  .lp-page-container .logged-in .jumbotron {\n    margin: 100px; }\n\n.lp-page-container .form-content {\n  max-width: 600px;\n  margin: 50px auto;\n  min-height: 500px; }\n  .lp-page-container .form-content .login-head {\n    text-align: center;\n    margin-bottom: 30px; }\n    .lp-page-container .form-content .login-head p {\n      color: lightslategray; }\n    .lp-page-container .form-content .login-head i {\n      font-size: 100px;\n      opacity: 0.8;\n      color: lightslategray; }\n\n.but-ton {\n  margin: 50px 0px;\n  text-align: center; }\n\n@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .lp-page-container .lp-page-head {\n    background-color: #35414C;\n    width: 100%;\n    height: 150px;\n    overflow: hidden;\n    border-radius: 0px 0px 0px 0px; }\n    .lp-page-container .lp-page-head img {\n      width: 100%;\n      opacity: 0.1;\n      margin-top: 0px;\n      min-height: 150px; }\n    .lp-page-container .lp-page-head .lp-page-title {\n      position: absolute;\n      top: 110px;\n      right: 10px; }\n      .lp-page-container .lp-page-head .lp-page-title h1 {\n        color: lightslategray;\n        font-size: 1.5rem;\n        margin-right: 15px; }\n  .lp-page-container .logged-in {\n    height: 420px;\n    margin: 0 auto;\n    text-align: center; }\n    .lp-page-container .logged-in h5 {\n      text-align: center; }\n    .lp-page-container .logged-in .login-option {\n      margin-top: 20px; }\n      .lp-page-container .logged-in .login-option button {\n        margin: 10px 0px; }\n    .lp-page-container .logged-in .jumbotron {\n      margin: 10px 0px;\n      width: 100%;\n      height: 400px;\n      padding: 50px 10px 10px 10px; }\n      .lp-page-container .logged-in .jumbotron h5 {\n        color: lightslategray; }\n  .lp-page-container .form-content {\n    max-width: 500px;\n    margin: 30px auto;\n    min-height: 500px;\n    margin: 20px; }\n    .lp-page-container .form-content .login-head {\n      text-align: center;\n      margin-bottom: 30px; }\n      .lp-page-container .form-content .login-head p {\n        color: lightslategray;\n        padding: 0px 40px; }\n      .lp-page-container .form-content .login-head i {\n        font-size: 100px;\n        opacity: 0.8;\n        color: lightslategray; }\n  .lp-page-container .form-group {\n    margin: 20px 20px; }\n    .lp-page-container .form-group .but-ton {\n      margin: 50px 0px;\n      text-align: center; }\n      .lp-page-container .form-group .but-ton button {\n        background-color: lightslategray !important; } }\n\n#form-content {\n  margin: 50px; }\n  #form-content .jumbotron {\n    width: 50%; }\n\n#password-container {\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1000; }\n  #password-container .forgotten-password {\n    position: fixed;\n    top: 30%;\n    left: 50%;\n    width: 50%;\n    margin-left: -25%; }\n    #password-container .forgotten-password .jumbotron {\n      text-align: center;\n      max-width: 500px; }\n\n@media only screen and (min-width: 250px) and (max-width: 640px) {\n  #password-container {\n    position: fixed;\n    top: 0px;\n    width: 100%;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 1000; }\n    #password-container .forgotten-password {\n      position: fixed;\n      top: 25%;\n      left: 50%;\n      width: 80%;\n      margin-left: -40%; }\n      #password-container .forgotten-password .jumbotron {\n        text-align: center;\n        max-width: 500px; }\n  #form-content {\n    margin: 10px; }\n    #form-content .jumbotron {\n      width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentications/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lp-page-container\">\n    <div class=\"lp-page-head\">\n        <img src=\"assets/slider-access-control-jpg.jpeg\"  alt=\"\">\n        <div class=\"lp-page-title\">\n        <h1>Login</h1>\n        </div>\n    </div>\n    <div class=\"container logged-in\" *ngIf=\"dashboard\">\n        <div class=\"jumbotron\">\n            <button (click)=\"logAnonymous()\" class=\"btn btn-success mce-btn-small\" type=\"button\">Continue as Guest</button>\n            <p>OR</p>\n            <h5>Login with your email or Create a new account</h5>\n            <div class=\"login-option\">\n                <button (click)=\"openDash()\" routerLink=\"/login\" class=\"btn btn-primary\">Login </button>\n                <!--<button (click)=\"openDash()\" class=\"btn btn-success\">Login with email & password</button>-->\n                 <button routerLink=\"/signup\" class=\"btn btn-danger\">Create account</button>\n            </div>\n        </div>\n    </div>\n\n    <!--Password Reset section success message-->\n    <div class=\"container\" *ngIf=\"successPassword\">\n        <div style=\"max-width: 500px\" class=\"alert alert-success container\" role=\"alert\">\n         <strong>Well done!</strong> Please check your email, and follow the link to password reset page!\n        </div>\n    </div>\n\n    <!--Login Dashboard-->\n    <div class=\"container form-content jumbotron\" *ngIf=\"!dashboard\">\n    <div class=\"container login-head\">\n        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n        <p>Please login with your email and password</p>\n        <!--<div *ngIf=\"!anoUser\">\n            <button (click)=\"logAnonymous()\" class=\"btn btn-success\" type=\"button\">Guest Login no password</button>\n            <h3>OR</h3>\n        </div>-->\n        \n    </div>\n    \n        <form novalidate [class.has-success]=\"user.valid\" [formGroup]=\"user\" (ngSubmit)=\"loginUser(user.value)\">\n            <div class=\"input-field\">\n                <label for=\"email\">Email</label>\n                <input type=\"email\" formControlName=\"email\">\n            </div>\n            <div class=\"input-field\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" formControlName=\"password\" required >\n            </div>\n            <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errMsg\">\n                <strong>{{errMsg.message}}</strong>\n            </div>\n            <!--<span>Reset>></span>-->\n            <a style=\"color: red\" (click)=\"showPasswordPage()\">Forgotton Password</a>\n\n            <div class=\"container but-ton\">\n                <button type=\"submit\" [disabled]=\"!user.valid\" class=\"waves-effect waves-light btn\">Login</button>\n                or <span > <a routerLink=\"/signup\"> Sign up </a> here</span>\n            </div>\n        </form>\n    </div>\n</div>\n\n<!--Resetting password form section-->\n<div id=\"password-container\" *ngIf=\"showPassword\">\n    <div class=\"forgotten-password\">\n        <div class=\"jumbotron container form-group\">\n            <i style=\"text-align:center; font-size: 28px;\" class=\"fa fa-recycle\" aria-hidden=\"true\"></i>\n            <p style=\"text-align:center\">Please enter your email.</p>\n            <input #link type=\"email\" class=\"form-control\" name=\"password_reset\" required placeholder=\"email@example.com\"> <br>\n            <button class=\"btn-block waves-effect waves-light btn\" (click)=\"sendLink(link.value)\" type=\"link\">Reset Password</button>\n            <br>\n            <button (click)=\"closePasswordPage()\" type=\"button\" class=\"btn btn-danger\">close</button>\n            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentications/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/authentications/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(fb, authService, router, cartService, _location) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.cartService = cartService;
        this._location = _location;
        this.dashboard = false;
        this.logUser = false;
        this.anoUser = false;
        //Resetting Pasword
        this.showPassword = false;
        this.successPassword = false;
        this.user = fb.group({
            email: "",
            password: ""
        });
    }
    LoginComponent.prototype.openDash = function () {
        this.dashboard = true;
    };
    LoginComponent.prototype.showPasswordPage = function () {
        this.showPassword = true;
    };
    LoginComponent.prototype.closePasswordPage = function () {
        this.showPassword = false;
    };
    LoginComponent.prototype.sendLink = function (email) {
        if (email.includes('@')) {
            this.authService.resetPasswordLink(email);
            this.showPassword = false;
            this.successPassword = true;
        }
    };
    LoginComponent.prototype.loginUser = function (user) {
        var _this = this;
        if (user) {
            // this.logOutAnonymous();
            this.authService.logIn(user)
                .then(function (success) {
                console.log('Authentication Allowed');
                // this.isAuthenticated = true;
                _this.authService.authChange();
                _this._location.back();
                // this.router.navigate(['/']);      
                // location.reload();
            }).catch(function (err) {
                _this.errMsg = err;
                console.log(err);
            });
        }
        //  this.authService.authChange();
    };
    //==LogOut Anonymous not in use==//
    //  logOutAnonymous(){
    //      this.cartService.clear();
    //      let auth = firebase.auth();
    //         auth.signOut().then(
    //         success=> {console.log(success);
    //             console.log("Anonymous logged out")
    //             localStorage.clear();
    //         }
    //         )
    //         .catch(
    //             err=> console.log(err)
    //         );
    //  }
    //  logAnonymous(){
    //     if(!localStorage.getItem('idToken')){
    //         this.authService.logAnonymous()
    //             .then(success=>{
    //             //==This section runs to save the current user to the local-storage==//
    //             this.authService.authChange();
    //             this.router.navigate(['/']);
    //             })
    //             .catch(error=>console.log(error));
    //         } 
    // }
    LoginComponent.prototype.userChange = function () {
        var _this = this;
        this.authService.authUserState().subscribe(function (user) {
            if (user != null) {
                if (user.isAnonymous) {
                    _this.anoUser = true;
                }
                else if (user.email) {
                    _this.logUser = true;
                }
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.userChange();
        // this.logUser = localStorage.getItem('currentUser');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/authentications/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentications/auth.stylesheet.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_check_out_service__["a" /* CheckOutService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentications/password-reset.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"lp-page-container\">\n    <div class=\"lp-page-head\">\n        <img src=\"assets/slider-access-control-jpg.jpeg\"  alt=\"\">\n        <div class=\"lp-page-title\">\n        <h1>Password Reset</h1>\n        </div>\n    </div>\n</div>\n<div class=\"container\" id=\"form-content\">\n    <div class=\"container jumbotron\">\n        <p style=\"text-align:center\"><strong>{{accountEmail}}</strong> </p> \n        <form style=\"text-align:center\" novalidate [class.has-success]=\"user.valid\" (ngSubmit)=\"reAuthenticateUser(user.value)\" [formGroup]=\"user\">\n            <div class=\"form-group\">\n                <label for=\"password\">New Password</label>\n                <input id=\"mail-box\" style=\"text-align:center; margin:0 auto; width:60%\" type=\"password\" class=\"form-control\" formControlName=\"password\" required placeholder=\"password\">\n            </div>\n            <!--<div class=\"form-group\">\n                <label for=\"password\">Repeat Password</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"repeat_password\" required placeholder=\"repeat password\">\n            </div>-->\n            <div style=\"width:80%; margin: 0 auto; text-align:center\" class=\"alert alert-success\" role=\"alert\" *ngIf=\"succMsg\">\n                <p style=\"text-align:center\">Your Password was reset successfully!</p>\n                <button class=\"btn btn-default\" routerLink=\"/login\">login</button>\n            </div>\n            <div class=\"container but-ton\">\n                <button type=\"submit\"  class=\"btn btn-primary\">Reset Password</button>\n                \n            </div>\n        </form>\n        \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentications/password-reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/authentications/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PasswordResetComponent = (function () {
    function PasswordResetComponent(fb, authService, router, cartService, route) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.cartService = cartService;
        this.route = route;
        this.succMsg = false;
        this.accountEmail = "me@gmail.com";
        this.auth = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]();
        this.user = fb.group({
            password: ""
        });
    }
    PasswordResetComponent.prototype.reAuthenticateUser = function (newPassword) {
        var _this = this;
        // var accountEmail;
        // Verify the password reset code is valid.
        this.auth.verifyPasswordResetCode(this.queryparams.oobCode).then(function (email) {
            // this.accountEmail = email;
            console.log("Account varified");
            // TODO: Show the reset screen with the user's email and ask the user for
            // the new password.
            // Save the new password.
        }).catch(function (error) {
            // Invalid or expired action code. Ask user to try to reset the password
            // again.
            console.log(error);
            return;
        });
        this.auth.confirmPasswordReset(this.queryparams.oobCode, newPassword.password).then(function (resp) {
            // Password reset has been confirmed and new password updated.
            console.log(resp);
            console.log("password was reset successfuly");
            _this.succMsg = true;
            // this.router.navigate(["/login"]);
            // TODO: Display a link back to the app, or sign-in the user directly
            // if the page belongs to the same domain as the app:
            // auth.signInWithEmailAndPassword(accountEmail, newPassword);
        }).catch(function (error) {
            // Error occurred during confirmation. The code might have expired or the
            // password is too weak.
            console.log("Error Occur while updating");
            console.log(error);
        });
    };
    PasswordResetComponent.prototype.ngOnInit = function () {
        this.queryparams = this.route.snapshot.queryParams;
        //   console.log(this.queryparams);
        // this.logUser = localStorage.getItem('currentUser');
    };
    PasswordResetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.auth.verifyPasswordResetCode(this.queryparams.oobCode).then(function (email) {
            _this.accountEmail = email;
            // console.log(email);
        }).catch(function (error) {
            _this.accountEmail = error.message;
            console.log(error);
        });
    };
    return PasswordResetComponent;
}());
PasswordResetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'reset-password',
        template: __webpack_require__("../../../../../src/app/authentications/password-reset.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentications/auth.stylesheet.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_check_out_service__["a" /* CheckOutService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], PasswordResetComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=password-reset.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentications/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lp-page-container\">\n    <div class=\"lp-page-head\">\n        <img src=\"assets/slider-access-control-jpg.jpeg\"  alt=\"\">\n        <div class=\"lp-page-title\">\n        <h1>Sign up</h1>\n        </div>\n    </div>\n    <div class=\"container form-content jumbotron\">\n        <div class=\"container login-head\">\n            <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n            <p>Please create a new account with email and password</p>\n         </div>\n        <form [class.has-danger]=\"errMsg\" [class.has-success]=\"user.valid\" novalidate [formGroup]=\"user\" (ngSubmit)=\"createUser(user.value)\" >\n            <div class=\"input-field\">\n                <label for=\"email\">Email</label>\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\" pattern=\"[A-Za-z]+\\.?-?[A-Za-z]+@[A-Za-z]+\\.(com|co.uk|net|org)\">\n            </div>\n            <div class=\"input-field\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"password\" >\n            </div>\n            <div class=\"input-field\">\n                <label for=\"password-confirmation\">Password Confirmation</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"confirm\" required>\n            </div>\n            <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errMsg\">\n                <strong>{{errMsg}}</strong>\n            </div>\n            <div class=\"container but-ton\">\n                <button type=\"submit\" [disabled]=\"!user.valid\" class=\"btn btn-primary\">Sign up</button> or\n                <a routerLink=\"/login\">login </a><span>here</span>\n            </div>\n            \n        </form>\n        <!--<div>\n            <p>Status: {{user.status | json}}</p>\n            <p>Validate error: {{user.errors | json}}</p>\n        </div>-->\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentications/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/authentications/auth-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function passwordMather(c) {
    return c.get('password').value === c.get('confirm').value
        ? null : { 'nomatch': true };
}
var SignUpComponent = (function () {
    function SignUpComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.user = fb.group({
            email: "",
            password: "",
            confirm: ""
        }, { validator: passwordMather });
    }
    SignUpComponent.prototype.createUser = function (user) {
        var _this = this;
        this.authService.signUp(user)
            .then(function (success) {
            console.log("Successfully Created user account");
            _this.router.navigate(['/']);
            _this.authService.authChange();
            _this.authService.authUserState()
                .subscribe(function (signUser) {
                _this.authService.createAccount(signUser.uid, signUser.email);
            });
            // console.log(success);
        }).catch(function (err) {
            _this.errMsg = err.message;
            console.log(_this.errMsg);
        });
    };
    SignUpComponent.prototype.ngOnInit = function () {
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sign-up',
        template: __webpack_require__("../../../../../src/app/authentications/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentications/auth.stylesheet.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], SignUpComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/check-out/check-out-form.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cus-details {\n  margin: 0px;\n  padding: 0px;\n  border: 1px solid;\n  border-color: lightgrey; }\n  .cus-details .main-form {\n    padding: 10px 20px; }\n  .cus-details h1 {\n    font-size: 18px;\n    margin: 0px;\n    padding: 5px 10px;\n    color: lightgray;\n    background-color: lightslategrey; }\n  .cus-details input#pay-btn {\n    background-color: #f48024; }\n\n.order-detail-container .order-detail {\n  margin: 0px;\n  padding: 0px;\n  border: 1px solid;\n  border-color: lightgrey; }\n  .order-detail-container .order-detail table tr td img {\n    margin-left: 10px; }\n  .order-detail-container .order-detail table p {\n    font-size: 14px;\n    padding: 0px 10px; }\n  .order-detail-container .order-detail h1 {\n    font-size: 18px;\n    margin: 0px;\n    padding: 5px 10px;\n    color: lightgray;\n    background-color: lightslategrey; }\n  .order-detail-container .order-detail h6 {\n    margin-left: 50px; }\n  .order-detail-container .order-detail input.btn {\n    height: 20px;\n    background-color: transparent;\n    border-radius: 0px !important; }\n  .order-detail-container .order-detail .final-total {\n    padding-left: 20px; }\n\n.order-content {\n  padding: 20px 10px; }\n  .order-content .shipping-address {\n    position: relative;\n    width: 100%; }\n    .order-content .shipping-address h4 {\n      font-size: 1.5em; }\n    .order-content .shipping-address .edit {\n      position: relative;\n      right: 5px; }\n    .order-content .shipping-address h1 {\n      font-size: 18px;\n      margin: 0px;\n      padding: 5px 10px;\n      color: lightgray;\n      background-color: lightslategrey; }\n    .order-content .shipping-address p {\n      padding: 5px 0px;\n      margin: 0px; }\n  .order-content .edit-form {\n    margin-top: 10px; }\n  .order-content .place-order-btn {\n    margin-bottom: 50px; }\n    .order-content .place-order-btn .btn {\n      width: 100%;\n      border-radius: 0;\n      border: none;\n      background-color: #000;\n      color: #f48024;\n      font-weight: 600; }\n      .order-content .place-order-btn .btn:hover {\n        background-color: #f48024;\n        color: #fff;\n        font-weight: 800;\n        cursor: pointer; }\n\n#e-order {\n  max-width: 700px;\n  min-height: 500px; }\n  #e-order .jumbotron {\n    margin: 50px; }\n\n#search-customer {\n  position: relative; }\n  #search-customer .close-s {\n    position: absolute;\n    right: 10px;\n    top: 10px; }\n  #search-customer .search-box {\n    text-align: center; }\n    #search-customer .search-box .btn {\n      margin: 10px;\n      background-color: lightslategrey;\n      border-color: lightslategrey; }\n    #search-customer .search-box input {\n      margin: 0 auto;\n      margin-top: 5px;\n      width: 50%;\n      text-align: center; }\n\n#yfound {\n  position: relative;\n  height: 40px;\n  padding: 0px;\n  margin: 0px;\n  padding: 5px 10px;\n  margin-bottom: 10px;\n  width: 100%; }\n  #yfound p {\n    font-size: 12px; }\n  #yfound i {\n    position: absolute;\n    right: 10px;\n    cursor: pointer; }\n\n@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .card-input {\n    width: 250px;\n    padding: 0px;\n    margin: 0px; }\n  .order-detail-container {\n    padding: 0px;\n    margin: 20px 0px; }\n  #e-order {\n    max-width: 100%;\n    min-height: 500px;\n    margin: 0px;\n    padding: 0px; }\n    #e-order .jumbotron {\n      margin: 20px 0px; }\n  #search-customer {\n    margin: 10px 10px; }\n    #search-customer .search-box {\n      text-align: center; }\n      #search-customer .search-box .btn {\n        margin: 10px;\n        background-color: lightslategrey;\n        border-color: lightslategrey; }\n      #search-customer .search-box input {\n        margin: 0 auto;\n        margin-top: 5px;\n        width: 100%;\n        text-align: center; }\n  #yfound {\n    height: 40px;\n    padding: 0px;\n    margin: 0px;\n    padding: 5px 10px;\n    margin-bottom: 10px;\n    width: 100%; }\n    #yfound p {\n      font-size: 12px; }\n  .page-wrapper {\n    margin: 0px;\n    padding: 0px;\n    width: 100%;\n    padding: 20px; }\n    .page-wrapper .order-content .shipping-address {\n      width: 100%; }\n      .page-wrapper .order-content .shipping-address h4 {\n        font-size: 1.5em; }\n    .page-wrapper .order-content .jumbotron {\n      width: 100%; }\n    .page-wrapper form {\n      width: 100%; }\n      .page-wrapper form .form-group {\n        width: 100% !important; }\n        .page-wrapper form .form-group input {\n          width: 100%; }\n      .page-wrapper form button {\n        margin: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/check-out/check-out-media-query.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .table, .sum-container {\n    display: none; }\n  .cart-mobile {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n    margin: 0 auto;\n    margin-left: 20px; }\n    .cart-mobile .cart-0, .cart-mobile .cart-1, .cart-mobile .cart-2, .cart-mobile .cart-3, .cart-mobile .cart-4, .cart-mobile .cart-5 {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n    .cart-mobile p {\n      font-size: 12px; }\n  .fp-page-head {\n    background-color: #35414C;\n    width: 100%;\n    height: 150px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden; }\n    .fp-page-head img {\n      opacity: 0.2;\n      position: relative;\n      width: 100%;\n      margin-top: 0px; }\n    .fp-page-head .fp-page-title {\n      position: absolute;\n      width: 90%;\n      top: 80px; }\n      .fp-page-head .fp-page-title h1 {\n        color: lightslategrey;\n        font-size: 1.5rem;\n        margin-right: 15px; }\n  .fp-page-content {\n    max-width: 700px;\n    padding: 50px 0px; }\n    .fp-page-content p {\n      text-align: center;\n      padding: 20px 0px; }\n    .fp-page-content h4 {\n      padding-top: 20px; }\n  .Shopping-container, .check-out-container {\n    min-height: 500px;\n    padding: 10px 0px 50px 0px; }\n    .Shopping-container h1, .check-out-container h1 {\n      margin-bottom: 20px;\n      font-size: 28px; }\n  i.remove-cart-i {\n    color: red; }\n    i.remove-cart-i:hover {\n      cursor: pointer; }\n  .total-cart {\n    position: absolute;\n    right: 30px;\n    border-bottom: 2px solid;\n    border-bottom-color: lightgrey; }\n  .empty-basket {\n    position: absolute;\n    right: 30px; }\n  .check-button {\n    position: absolute;\n    margin: 0 auto;\n    margin-top: 40px; }\n    .check-button .check-out {\n      position: relative;\n      text-align: right;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .check-button .check-out button {\n        margin: 0px 4px;\n        height: 30px;\n        padding: 0px 5px;\n        background-color: lightslategrey;\n        border: none; }\n      .check-button .check-out button#btn-check {\n        background-color: #f48024;\n        color: #35414C;\n        padding: 0 10px; } }\n\n@media only screen and (min-width: 640px) {\n  .cart-mobile-container, .empty-basket {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/check-out/check-out.component.html":
/***/ (function(module, exports) {

module.exports = "<section >\n    <div class=\"fp-page-head\">\n        <!--<img src=\"assets/about-us.jpg\"  alt=\"\">-->\n        <div class=\"fp-page-title\">\n        <!-- <h1>Check Out</h1> -->\n        </div>\n  </div>\n</section>\n<div *ngIf=\"hideSearch\" class=\"jumbotron\" id=\"search-customer\">\n    <div class=\"close-s\">\n        <button class=\"btn btn-default\" (click)=\"removeSearch()\" type=\"\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n    </div>\n    \n        <div class=\"search-box\">\n            <h3>Find Your Account</h3>\n            <p>Enter your info in the box below and search for your details if you have used our service before!</p>\n            <p *ngIf=\"showErr\" style=\"color:red\" >No details found</p>\n            <p *ngIf=\"emptyErr\" style=\"color:red\">Please enter a valid information!</p>\n            <input id=\"search-box\" #email class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"email\">\n            <input id=\"search-box\" #phone class=\"form-control\" type=\"text\" name=\"telephone\" placeholder=\"telephone\">\n            <input id=\"search-box\" #postcode class=\"form-control\" type=\"text\" name=\"postcode\" placeholder=\"Post Code eg SE12 6KL\">\n            <button class=\"btn btn-primary\" (click)=\"findCustomer(email.value, phone.value, postcode.value)\" type=\"button\">Search</button>\n        </div>\n </div>\n <section class=\"main-container-load\">\n    <section class=\"container page-wrapper\">\n        <div *ngIf=\"updateFlag\" class=\"alert alert-success\" id=\"yfound\">\n            <p ><strong>{{updateFlag}}</strong>\n            <!-- <i style=\"font-size:18px\" (click)=\"removeFound()\" class=\"fa fa-times\" aria-hidden=\"true\"></i> -->\n            </p>\n        </div>\n        <div class=\"row customer-info\">\n            <div class=\"col l12 cus-details jumbotron\">\n                <h1>Customer Details</h1>\n                <small *ngIf=\"invalidForm\" style=\"color:red; margin-left:20px;\">Please check your details and try again!</small>\n                <form [class.invalid]=\"invalidForm\" novalidate [class.has-success]=\"cusForm.valid\" [formGroup]=\"cusForm\" (ngSubmit)=\"saveCustomer(cusForm.value)\" class=\"main-form\" >\n                \n                    <div class=\"row name-section\">\n                        <div class=\"col xs12 s12 l6 input-field\">\n                            <label for=\"first_name\">First Name <span style=\"color: red\">*</span></label>\n                            <input id=\"first_name\" type=\"text\" class=\"form-control\" formControlName=\"firstName\" required>\n                        </div>\n                        <div class=\"col xs12 s12 l6 input-field\">\n                            <label for=\"last_name\">Last Name <span style=\"color: red\">*</span></label>\n                            <input id=\"last_name\" type=\"text\" class=\"form-control\" formControlName=\"lastName\" required>\n                        </div>\n                        <div class=\"col xs12 s12 l6 input-field\">\n                            <label for=\"email\">Email <span style=\"color: red\">*</span></label>\n                            <input id=\"email\" type=\"text\" class=\"form-control\" formControlName=\"email\" required pattern=\"[A-Za-z]+\\.?-?[A-Za-z]+@[A-Za-z]+\\.(com|co.uk|net|org)\">\n                        </div>\n                        <div class=\"col xs12 s12 l6 input-field\">\n                            <label for=\"formGroupExampleInput2\">Telephone <span style=\"color: red\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"telephone\" required pattern=\"^0\\d{10}\">\n                        </div>\n                        <div class=\"col xs12 s12 l6 form-group\">\n                            <label for=\"gender\">Gender <span style=\"color: red\">*</span></label>\n                            <select class=\"custom-select\" id=\"gender\" required formControlName=\"gender\">\n                                <option selected>Gender</option>\n                                <option value=\"Male\" selected>Male</option>\n                                <option value=\"Female\">Female</option>\n                            </select>\n                            <!-- <label for=\"gender\">Gender </label> -->\n                            <!--<input type=\"text\" class=\"form-control\" formControlName=\"telephone\" required  placeholder=\"sex\">-->\n                        </div>\n                    </div>\n                    <br><br>\n                    <div class=\"row address-section\">\n                        <h6 style=\"margin-left:20px\">Billing/Delivery Address</h6>\n                        <div class=\"col xs12 s12 l6 input-field address-input\">\n                            <hr>\n                            <div class=\"col xs12 s12 l12 input-field\">\n                                <label for=\"formGroupExampleInput\">Address line 1 <span style=\"color: red\">*</span></label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"addressOne\" required>\n                            </div>\n\n                            <div class=\"col xs12 s12 l12 input-field\">\n                                <label for=\"formGroupExampleInput2\">Address line 2 <span style=\"color: red\">*</span></label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"addressTwo\" required>\n                            </div>\n\n                            <div class=\"col xs12 s12 l12 input-field\">\n                                <label for=\"formGroupExampleInput\">Post Code <span style=\"color: red\">*</span></label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"postCode\" pattern=\"^[A-Za-z]{2}\\d\\d?\\s?\\d[A-Za-z]{2}\" required>\n                            </div>\n\n                        </div>\n\n                        <div class=\"col xs12 s12 l6 address-input\">\n                            <hr>\n                            \n                            <div class=\"col xs12 s12 l12 input-field form-group\">\n                                <label for=\"formGroupExampleInput2\">City <span style=\"color: red\">*</span></label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"city\">\n                            </div>\n                            <div class=\"col xs12 s12 l12 input-field\">\n                                <label for=\"formGroupExampleInput2\">Country</label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"country\" value=\"United Kingdom\">\n                            </div>\n\n                        </div>\n\n                        <!--<div class=\"col col-xs-12  col-lg-6 address-input\">\n                            <h6  (click)=\"hideMyform()\"><input type=\"checkbox\" > Add Delivery Address if different</h6>\n                            <hr>\n                            <div id=\"delivery-form\" *ngIf=\"hideForm\">\n                                <div class=\"col col-xs-6 col-lg-6 form-group\">\n                                    <label for=\"formGroupExampleInput\">Address 1</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"deliveryOne\" placeholder=\"first line address\">\n                                </div>\n                                <div class=\"col col-xs-6 col-lg-6 form-group\">\n                                    <label for=\"formGroupExampleInput2\">Address 2</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"deliveryTwo\" placeholder=\"second line address\">\n                                </div>\n                                <div class=\"col col-xs-6 col-lg-6 form-group\">\n                                    <label for=\"formGroupExampleInput\">Post Code</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"deliveryCode\" placeholder=\"post code\">\n                                </div>\n                                <div class=\"col col-xs-6 col-lg-6 form-group\">\n                                    <label for=\"formGroupExampleInput2\">City</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"deliveryCity\" placeholder=\"city\">\n                                </div>\n\n                                <div class=\"col col-xs-12 col-lg-6 form-group\">\n                                    <label for=\"formGroupExampleInput2\">Country</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"deliveryCountry\" value=\"United Kingdom\" placeholder=\"United Kingdom\">\n                                </div>\n                                <br><br><br>\n                                <div class=\"col col-xs-12 col-lg-12 form-group\">\n                                    <span>\n                                        <label for=\"formGroupExampleInput2\">Select box if billing address is the same as delivery address</label>\n                                    </span>\n                                    <input type=\"checkbox\" class=\"form-control\" formControlName=\"deliveryTrue\" value=\"\" >\n                                </div>\n                            </div>\n                        </div>-->\n                        \n                    </div>\n                    \n                    <br><br>\n                    <button [class.btn-success]=\"cusForm.valid\" id=\"pay-btn\" class=\"btn btn-default\" type=\"submit\" value=\"Proceed to Payment\"  >Proceed to Order</button>\n                    <span *ngIf=\"!cusForm.valid\" style=\"font-size: 12px\">please fill all required field <span style=\"color: red\">*</span></span>\n                </form>\n            </div>\n            <div class=\"col xs12 s12 m6 l3 order-detail-container\">\n                <!-- <div class=\"order-detail jumbotron\">\n                    <h1><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> Your Basket</h1>\n                    <table >\n                        <thead>\n                            <tr>\n                                <th colspan=\"3\"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let cart of carts\">\n                                <td><img [src]=\"cart.imageUrl\" style=\"width: 30px\" alt=\"\"></td>\n                                <td><p>{{cart.qty}}x </p></td>\n                                <td><p>{{cart.name}}</p></td>\n                                <td><p>{{cart.qty * cart.price | currency:'GBP':true}}</p></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                        <hr>\n                        <h6>Total: {{sumCart | currency: 'GBP': true}}</h6>\n                </div> -->\n                <!--<input class=\"btn btn-default\" type=\"submit\" value=\"Continue to Order\" onclick=\"Worldpay.submitTemplateForm()\" />-->\n                <!--<div class=\"jumbotron\" id=\"search-customer\">\n                    <div class=\"search-box\">\n                        <h3>Find Account</h3>\n                        <p>Enter your email in the box below and search for your details if you have use our service before!</p>\n                        <p *ngIf=\"showErr\" class=\"alert alert-danger\" role=\"alert\">No details found</p>\n                        <p *ngIf=\"emptyErr\" class=\"alert alert-danger\" role=\"alert\">Please enter a valid email!</p>\n                        <input #email class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"search with email\">\n                        <button class=\"btn btn-primary\" (click)=\"findCustomer(email.value)\" type=\"button\">Search</button>\n                    </div>\n                </div>-->\n            </div>\n        </div>\n\n\n    </section>\n    <div *ngIf=\"spinner\" class=\"reload-cover-white\">\n            <div class=\"progress-loading\" >\n                <div class=\"preloader-wrapper big active\">\n                <div class=\"spinner-layer spinner-blue-only\">\n                    <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                    </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                    </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                    </div>\n                </div>\n                </div>\n            </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/check-out/check-out.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_customer_details_model__ = __webpack_require__("../../../../../src/app/models/customer-details.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentications_auth_service__ = __webpack_require__("../../../../../src/app/authentications/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CheckOutComponent = (function () {
    function CheckOutComponent(appService, checkoutService, _elementRef, _fb, _router, authService, cartService) {
        this.appService = appService;
        this.checkoutService = checkoutService;
        this._elementRef = _elementRef;
        this._fb = _fb;
        this._router = _router;
        this.authService = authService;
        this.cartService = cartService;
        this.spinner = true;
        this.customerInput = new __WEBPACK_IMPORTED_MODULE_4__models_customer_details_model__["a" /* Customer */];
        this.hideForm = false;
        this.customers = [];
        this.showErr = false;
        this.emptyErr = false;
        this.hideSearch = false;
        this.foundyou = "";
        this.cusForm = _fb.group(this.customerInput);
        if (localStorage.getItem('currentUser')) {
            if (localStorage.getItem("currentUser").includes('@')) {
                this.cusForm.patchValue({
                    email: localStorage.getItem("currentUser")
                });
            }
            else {
                this.cusForm.patchValue({
                    email: ""
                });
            }
        }
    }
    CheckOutComponent.prototype.hideMyform = function () {
        this.hideForm = true;
    };
    CheckOutComponent.prototype.saveCustomer = function (details) {
        var _this = this;
        if (this.cusForm.status == 'INVALID') {
            console.log(this.cusForm.status);
            this.invalidForm = true;
        }
        else {
            this.invalidForm = false;
            // console.log("this.cusForm.status");
            this.authService.updateAccount(details)
                .then(function (res) {
                console.log("User Updated", res);
                _this._router.navigate(['/order']);
            }).catch(function (err) {
                console.log(err);
            });
        }
        // this.checkoutService.saveCustomerDetails(details);
        // let currentCustomer;
        // this.cartService.getCustomerDetails().subscribe((customer)=>{
        //     currentCustomer = customer;
        // })
        // console.log(currentCustomer);
        // if(currentCustomer.id){
        //     this._router.navigate(['/order']);
        //     return
        // }
        // let lastId = this.customers.reverse();
        // if(lastId.length > 0){
        //     let id = parseInt(lastId[0].id)
        //     this.cartService.saveCustomerDetails(details, id += 1);
        // }else{
        //     this.cartService.saveCustomerDetails(details, 1); 
        // }
        // console.log(this.lastId);
        // this._router.navigate(['/order']);
    };
    CheckOutComponent.prototype.sumCartPrice = function (cart) {
        var priceArr = [];
        cart.forEach(function (element) {
            priceArr.push(element.price * element.qty);
        });
        this.sumCart = priceArr.reduce(this.sumTotal, 0);
    };
    CheckOutComponent.prototype.sumTotal = function (sum, num) {
        return sum + num;
    };
    // public findCustomer(email, telephone, postcode){
    //     if(!email){
    //         this.emptyErr = true;
    //         setTimeout(()=>{
    //             this.emptyErr = false;
    //         },8000);
    //         return;
    //     }
    //     this.lastCus = this.customers.find((customer)=>{
    //         return customer.email == email.toString();
    //     })
    //     // console.log(this.lastCus);
    //     if((this.lastCus.email === email.toString().toLowerCase()) && (this.lastCus.telephone === telephone.toString()) && (this.lastCus.postCode === postcode.toString().toUpperCase()) ){
    //         this.cusForm.patchValue({
    //             firstName:  this.lastCus.firstName,
    //             lastName:  this.lastCus.lastName,
    //             email:  this.lastCus.email,
    //             gender: this.lastCus.gender,
    //             telephone:  this.lastCus.telephone,
    //             addressOne:  this.lastCus.addressOne,
    //             addressTwo:  this.lastCus.addressTwo,
    //             postCode:  this.lastCus.postCode,
    //             city:  this.lastCus.city,
    //             country:  "United Kingdom"
    //         })
    //         this.hideSearch = false;
    //         this.foundyou = this.lastCus.firstName;
    //     }else{
    //         this.showErr = true; 
    //     }
    //     // let input = document.getElementById('search-box');
    //     // input.value = "";
    // }
    CheckOutComponent.prototype.removeSearch = function () {
        this.hideSearch = false;
    };
    CheckOutComponent.prototype.removeFound = function () {
        this.foundyou = "";
    };
    CheckOutComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.cartService.createDb();
        //Only allowed user if they logged in
        if (!localStorage.getItem('idToken')) {
            this._router.navigate(["/login"]);
            return;
        }
        // this.checkoutService.getAllCustomerDetails().subscribe((customers)=>{
        //         this.customers = customers;
        //         // console.log(customers);
        // });
        setTimeout(function () {
            _this.authService.getAccount()
                .subscribe(function (account) {
                _this.spinner = false;
                // this.userAccount = account;
                // console.log(this.userAccount);
                if (account && account["firstName"] && account["lastName"] && account["postCode"]) {
                    // this._router.navigate(["/order"]);
                }
                if (account && account["firstName"] && account["lastName"]) {
                    _this.cusForm.patchValue({
                        firstName: account["firstName"],
                        lastName: account["lastName"],
                        email: account["email"],
                        gender: account["gender"],
                        telephone: account["telephone"],
                        addressOne: account["addressOne"],
                        addressTwo: account["addressTwo"],
                        postCode: account["postCode"],
                        city: account["city"],
                        country: "United Kingdom"
                    });
                    _this.updateFlag = "Please check your details below and make changes if necessory";
                }
            });
            // this.cartService.retrieveCart().subscribe((carts)=>{
            //     this.carts = carts[0];
            //     console.log(carts[0]);
            // });
        }, 300);
    };
    return CheckOutComponent;
}());
CheckOutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'check-out',
        template: __webpack_require__("../../../../../src/app/check-out/check-out.component.html"),
        styles: [__webpack_require__("../../../../../src/app/check-out/check-out.module.scss"), __webpack_require__("../../../../../src/app/check-out/check-out-form.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_check_out_service__["a" /* CheckOutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__authentications_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__authentications_auth_service__["a" /* AuthService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_cart_service__["a" /* CartService */]) === "function" && _g || Object])
], CheckOutComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=check-out.component.js.map

/***/ }),

/***/ "../../../../../src/app/check-out/check-out.module.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".invalid {\n  color: red !important; }\n  .invalid input {\n    border-color: red; }\n\n.page-wrapper {\n  min-height: 500px; }\n\n.fp-page-head {\n  background-color: #35414C;\n  width: 100%;\n  height: 150px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden; }\n  .fp-page-head img {\n    opacity: 0.2;\n    position: relative;\n    width: 100%;\n    margin-top: 0px;\n    min-height: 150px; }\n  .fp-page-head .fp-page-title {\n    width: 90%;\n    position: absolute;\n    top: 80px;\n    right: 50px; }\n    .fp-page-head .fp-page-title h1 {\n      color: lightslategrey;\n      font-size: 1.5rem;\n      margin-right: 15px; }\n\n.page-wrapper {\n  margin-top: 20px; }\n\n.fp-page-content {\n  max-width: 700px;\n  padding: 50px 0px; }\n  .fp-page-content p {\n    text-align: center;\n    padding: 20px 0px; }\n  .fp-page-content h4 {\n    padding-top: 20px; }\n\n.main-container-load {\n  position: relative;\n  margin-bottom: 60px; }\n  .main-container-load .reload-cover, .main-container-load .reload-cover-white {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 100; }\n    .main-container-load .reload-cover .progress-loading, .main-container-load .reload-cover-white .progress-loading {\n      text-align: center;\n      margin-top: 20%; }\n  .main-container-load .reload-cover-white {\n    background-color: #ffffff; }\n\n.Shopping-container, .check-out-container {\n  min-height: 700px;\n  padding: 10px 30px 50px 30px; }\n  .Shopping-container h1, .check-out-container h1 {\n    font-size: 1.5em;\n    text-align: center; }\n  .Shopping-container .empty-cart h5, .check-out-container .empty-cart h5 {\n    font-size: 1em;\n    text-align: center; }\n\nh1.head-1 {\n  font-size: 28px;\n  margin-left: 20px; }\n\n.cart-table {\n  margin: 0px;\n  padding: 0px;\n  border: 1px solid;\n  border-color: lightgray; }\n  .cart-table tr th {\n    color: lightslategrey; }\n  .cart-table td {\n    font-size: 13px; }\n  .cart-table td i:hover {\n    color: red;\n    cursor: pointer; }\n\n.sum-container {\n  position: relative;\n  margin: 0px;\n  padding: 0px; }\n  .sum-container .cartSum {\n    margin: 0px;\n    padding: 0px;\n    position: absolute;\n    right: 0px;\n    border-top: 0px solid;\n    border-right: 1px solid;\n    border-left: 1px solid;\n    border-color: lightgray; }\n\n.check-button {\n  margin-top: 20px; }\n  .check-button .check-out {\n    position: relative; }\n    .check-button .check-out button {\n      background-color: lightslategrey;\n      border: none; }\n    .check-button .check-out button#btn-check {\n      background-color: #f48024;\n      color: #35414C;\n      padding: 0 10px; }\n\n.load-item {\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 100px; }\n  .load-item .progress-loading {\n    text-align: center; }\n\n.anonymous-wrapper {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100vmax;\n  z-index: 10000;\n  background-color: rgba(0, 0, 0, 0.5); }\n  .anonymous-wrapper .anonymous {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    width: 40%;\n    margin-left: -20%;\n    text-align: center;\n    transition: 0.2s; }\n    .anonymous-wrapper .anonymous .ano-content {\n      position: relative;\n      background-color: #fff;\n      opacity: 0.99;\n      width: 100%; }\n      .anonymous-wrapper .anonymous .ano-content button.ano-b {\n        background-color: slategray;\n        color: #fff; }\n      .anonymous-wrapper .anonymous .ano-content i.fa-close {\n        position: absolute;\n        right: 10px;\n        top: 10px;\n        font-size: 20px; }\n        .anonymous-wrapper .anonymous .ano-content i.fa-close:hover {\n          color: red;\n          cursor: pointer; }\n      .anonymous-wrapper .anonymous .ano-content p {\n        padding: 10px 0px; }\n      .anonymous-wrapper .anonymous .ano-content span#span {\n        color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/check-out/check-out.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shopping_cart_component__ = __webpack_require__("../../../../../src/app/check-out/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__check_out_component__ = __webpack_require__("../../../../../src/app/check-out/check-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__order_component__ = __webpack_require__("../../../../../src/app/check-out/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__payment_method_component__ = __webpack_require__("../../../../../src/app/check-out/payment-method.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var CheckOutModule = (function () {
    function CheckOutModule() {
    }
    return CheckOutModule;
}());
CheckOutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__shopping_cart_component__["a" /* ShoppingCartComponent */],
            __WEBPACK_IMPORTED_MODULE_13__check_out_component__["a" /* CheckOutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__order_component__["a" /* OrderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__payment_method_component__["a" /* PaymentMethodComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageModule"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
        ],
        exports: [],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_8__services_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_9__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_10__services_check_out_service__["a" /* CheckOutService */], __WEBPACK_IMPORTED_MODULE_11__services_mail_service__["a" /* MailService */], __WEBPACK_IMPORTED_MODULE_16__services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_17__services_order_service__["a" /* OrderService */]
        ]
    })
], CheckOutModule);

//# sourceMappingURL=check-out.module.js.map

/***/ }),

/***/ "../../../../../src/app/check-out/order.component.html":
/***/ (function(module, exports) {

module.exports = "<section >\n    <div class=\"fp-page-head\">\n        <!--<img src=\"assets/about-us.jpg\"  alt=\"\">-->\n        <div class=\"fp-page-title\">\n        <!-- <h1>Order Review</h1> -->\n        </div>\n  </div>\n</section>\n<!-- <section *ngIf=\"!hidePage\" class=\"container\">\n    <div id=\"e-order\" class=\"container\">\n        <div class=\"jumbotron\">\n            <h3>You already have a pending.. order</h3>\n            <p>Please click on continue button below to proceed to payment methods</p>\n            <button (click)=\"modifyOrder()\" class=\"btn btn-primary\" type=\"button\">see details</button> or click here to: \n            <span class=\"btn btn-success\"  routerLink=\"/payment-method\">Continue</span>\n            <button class=\"btn mce-btn-large\" (click)=\"deleteItem()\" type=\"button\">Back to Checkout</button>\n        </div>\n        \n    </div>\n</section> -->\n<section class=\"main-container page-wrapper main-container-load\">\n    <section *ngIf=\"hidePage\" class=\"order-content\">\n        <div class=\"row\">\n            <div class=\"col xs12 s12 m8 l8 order-review\">\n                <div class=\"shipping-address\">\n                    <h1>Shipping Details <span *ngIf=\"!isEdit\"><button class=\"waves-effect waves-light btn\" (click)=\"editDetails()\" type=\"button\">Edit</button></span></h1>\n                    \n                \n                    <div *ngIf=\"!isEdit\">\n                        <div class=\"col l6\">\n                            <h4>Personal Details</h4>\n                            <p>First Name: {{customer.firstName}}</p>\n                            <p>Last Name: {{customer.lastName}}</p>\n                            <p>Email: {{customer.email}}</p>\n                            <p>Telephone: {{customer.telephone}}</p>\n                            <!--<p>OrderId: {{customer.customerId}}</p>-->\n                        </div>\n                        <div class=\" col l6\">\n                            <h4>Shippin Address</h4>\n                            <p>Address: {{customer.addressOne +' '+ customer.addressTwo}}</p>\n                            <p>Post Code: {{customer.postCode}}</p>\n                            <p>City: {{customer.city}}</p>\n                            <p>Country: {{customer.country}}</p>\n                        </div>\n                    </div>\n                </div>\n            \n                <!--Edit payment details-->\n                <div class=\"edit-form jumbotron\" *ngIf=\"isEdit\">\n                    <h5>Edit your details</h5>\n                    <form novalidate [class.alert-danger]=\"!editForm.valid\" [class.has-success]=\"editForm.valid\" [formGroup]=\"editForm\" (ngSubmit)=\"saveCustomerUpdate(editForm.value)\" class=\"main-form\" >\n                \n                    <div class=\"row name-section\">\n                        <div class=\"col xs6 l6 form-group\">\n                            <label for=\"formGroupExampleInput\">First Name <span style=\"color: red\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" required placeholder=\"first name\">\n                        </div>\n                        <div class=\"col xs6 l6 form-group\">\n                            <label for=\"formGroupExampleInput2\">Last Name <span style=\"color: red\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" required placeholder=\"last name\">\n                        </div>\n                        <div class=\"col xs6 l6 form-group\">\n                            <label for=\"formGroupExampleInput\">Email <span style=\"color: red\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"email\" required pattern=\"[A-Za-z]+\\.?-?[A-Za-z]+@[A-Za-z]+\\.(com|co.uk|net|org)\" placeholder=\"example@email.com\">\n                            <div *ngIf=\"editForm.get('email').hasError('required') && doValidation\" class=\"alert alert-danger\" role=\"alert\">type in a correct email</div>\n                        </div>\n                        <div class=\"col xs6 l6 form-group\">\n                            <label for=\"formGroupExampleInput2\">Telephone <span style=\"color: red\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"telephone\" required pattern=\"^0\\d{10}\" placeholder=\"e.g 02078946526\">\n                        </div>\n                        <!-- <div class=\"col xs12 l6 form-group\">\n                            <label for=\"formGroupExampleInput2\">Gender <span style=\"color: red\">*</span></label>\n                            <select class=\"form-control\" required formControlName=\"gender\">\n                                <option value=\"Male\" selected>Male</option>\n                                <option value=\"Female\">Female</option>\n                            </select>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"telephone\" required  placeholder=\"sex\">\n                        </div> -->\n                    </div>\n                    <br><br>\n                    <div class=\"row address-section\">\n                        \n                        <div class=\"col xs12 l12 address-input\">\n                            <h6>Billing Address</h6>\n                            <hr>\n                            <div class=\"col xs6 l6 form-group\">\n                                <label for=\"formGroupExampleInput\">Address 1 <span style=\"color: red\">*</span></label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"addressOne\" required placeholder=\"House/Flat no.\">\n                            </div>\n                            <div class=\"col xs6 l6 form-group\">\n                                <label for=\"formGroupExampleInput2\">Address 2 <span style=\"color: red\">*</span></label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"addressTwo\" required placeholder=\"Street/Road name\">\n                            </div>\n                            <div class=\"col xs6 l6 form-group\">\n                                <label for=\"formGroupExampleInput\">Post Code <span style=\"color: red\">*</span></label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"postCode\" pattern=\"^[A-Za-z]{2}\\d\\d?\\s?\\d[A-Za-z]{2}\" required placeholder=\"e.g SE12 7KL\">\n                            </div>\n                            <div class=\"col xs6 l6 form-group\">\n                                <label for=\"formGroupExampleInput2\">City <span style=\"color: red\">*</span></label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"city\" required placeholder=\"city\">\n                            </div>\n\n                            <div class=\"col xs12 l6 form-group\">\n                                <label for=\"formGroupExampleInput2\">Country</label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"country\" value=\"United Kingdom\" placeholder=\"United Kingdom\">\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <br><br>\n                    <button  id=\"pay-btn\" class=\"btn btn-primary\"  type=\"submit\" value=\"Proceed to Payment\" >Save Changes</button>\n                    <button (click)=\"cancelEdit()\" id=\"pay-btn\" class=\"btn btn-danger\"  type=\"button\"  >Cancel & go back</button>\n                    <!-- <span *ngIf=\"!editForm.valid\"  style=\"font-size: 12px\">please fill all required field <span style=\"color: red\">*</span></span> -->\n                </form>\n                </div>\n                <!--shipping method-->\n                <br>\n                <div class=\"main-container-o\">\n                    <div  class=\"shipping-method\">\n                    \n                        <h5 >Shipping Methods</h5>\n                    \n                    \n                    <!-- <table class=\"responsive-table\">\n                        <thead class=\"\">\n                            <tr>\n                                \n                                <th colspan=\"3\"><h5>Shipping Methods</h5></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            \n                            <tr>\n                            <td><input class=\"with-gap\" (change)=\"onChange($event)\" type=\"radio\" name=\"optradio\" id=\"free\" ></td>\n                            <td>Uk Standard(3-5 working days) (Min Order of £30)</td>\n                            <td>Free</td>\n                                \n                            </tr>\n                            <tr class=\"alert alert-danger\" role=\"alert\" *ngIf=\"freeAlert\">\n                                <td></td>\n                                <td>Your total order have to equal £30 or more to qualify for free delivery</td>\n                                <td></td>\n                            </tr>\n                            <tr>\n                                <td><input (change)=\"onChange($event)\" type=\"radio\" name=\"optradio\" id=\"express\" ></td>\n                                <td>UK Express (1-2 Working Days)</td>\n                                <td>£2.99</td>\n                            </tr>\n                            <tr>\n                                <td><input (change)=\"onChange($event)\" type=\"radio\" name=\"optradio\" id=\"next-day\" ></td>\n                                <td>UK Next Working Day (on orders placed before 12:00pm, exclusions apply - see Delivery Policy)</td>\n                                <td>£4.99</td>\n                            </tr>\n                        </tbody>\n                    </table> -->\n                    <p>\n                    <input name=\"optradio\" (change)=\"onChange($event)\" type=\"radio\" id=\"free\" />\n                    <label for=\"free\">Free Uk Standard(3-5 working days) (Min Order of £30)</label>\n                    <br>\n                    <small *ngIf=\"freeAlert\">Your total order have to equal £30 or more to qualify for free delivery</small>\n                    </p>\n                    <p>\n                    <input name=\"optradio\" (change)=\"onChange($event)\" type=\"radio\" id=\"express\" />\n                    <label for=\"express\">£2.99 UK Express (1-2 Working Days)</label>\n                    </p>\n                    <p>\n                    <input class=\"with-gap\" (change)=\"onChange($event)\" name=\"optradio\" type=\"radio\" id=\"next-day\"  />\n                    <label for=\"next-day\">£4.99 UK Next Working Day (on orders placed before 12:00pm, exclusions apply - see Delivery Policy)</label>\n                    </p>\n                \n                            \n                </div>\n            </div>\n            </div>\n            <div class=\"col xs12 s12 m4 l4 item-order\">\n                <div class=\"order-detail-container\">\n                    <div class=\"order-detail jumbotron\">\n                        <h1><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> Your Basket</h1>\n                        <table>\n                            <thead>\n                                <tr>\n                                    <th colspan=\"3\"></th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let cart of basket$\">\n                                    <td><img [src]=\"cart.imageUrl\" style=\"width: 30px\" alt=\"\"></td>\n                                    <td><p>{{cart.qty}}x </p></td>\n                                    <td><p>{{cart.name}}</p></td>\n                                    <td><p>{{cart.qty * cart.price | currency:'GBP':true}}</p></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                            <hr>\n                        <div class=\"final-total\">\n                                <table>\n        \n                                <tbody>\n                                    <tr>\n                                        <td>Delivery Charge:</td>\n                                        <td colspan=\"2\"></td>\n                                        <td><h6>{{deliveryFee | currency: 'GBP': true}}</h6></td>\n                                    </tr>\n                                    <tr>\n                                        <td><strong>Total:</strong></td>\n                                        <td colspan=\"2\"></td>\n                                        <td><h6 style=\"text-decoration:underline\"> <strong>{{sumCart + deliveryFee | currency: 'GBP': true}}</strong> </h6></td>\n                                    </tr>\n                                    <br>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <br>\n                </div>\n                \n                <div class=\"place-order-btn\">\n                    <button [disabled]=\"freeAlert\" (click)=\"createOrder()\" class=\"btn btn-primary\"  type=\"button\">Payment method</button>\n                    \n                    <!--<button (click)=\"newOrder()\" class=\"btn btn-success\" type=\"\">Finish Payment</button>-->\n                </div>\n                \n            </div>\n        </div>\n    </section>\n    <div *ngIf=\"spinner\" class=\"reload-cover-white\">\n        <div class=\"progress-loading\" >\n            <div class=\"preloader-wrapper big active\">\n            <div class=\"spinner-layer spinner-blue-only\">\n                <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n                </div><div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n                </div><div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n                </div>\n            </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/check-out/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_order_model__ = __webpack_require__("../../../../../src/app/models/order.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_customer_details_model__ = __webpack_require__("../../../../../src/app/models/customer-details.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentications_auth_service__ = __webpack_require__("../../../../../src/app/authentications/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var OrderComponent = (function () {
    function OrderComponent(checkoutService, _fb, _router, _mailService, cartService, authService, orderService, meta, title) {
        this.checkoutService = checkoutService;
        this._fb = _fb;
        this._router = _router;
        this._mailService = _mailService;
        this.cartService = cartService;
        this.authService = authService;
        this.orderService = orderService;
        this.meta = meta;
        this.title = title;
        this.spinner = true;
        this.basket$ = [];
        this.sumCart = 0;
        this.deliveryFee = 2.99;
        this.hidePage = false;
        this.freeAlert = false;
        this.editValue = new __WEBPACK_IMPORTED_MODULE_3__models_customer_details_model__["a" /* Customer */];
        this.isEdit = false;
        //creating order
        this.newOrder = new __WEBPACK_IMPORTED_MODULE_2__models_order_model__["a" /* CustomerOrder */];
        //Payment Amount to Barclays
        this.ordelivery = 0;
        this.shippingMethod = "Free Delivery";
        title.setTitle('Order Review');
        this.orderForm = _fb.group(this.newOrder);
        this.editForm = _fb.group(this.editValue);
    }
    OrderComponent.prototype.onChange = function ($event) {
        $event.stopPropagation();
        if ($event.target.id == 'free' && $event.target.checked == true) {
            if (this.sumCart < 30) {
                this.freeAlert = true;
            }
            else {
                this.deliveryFee = 0.00;
                this.shippingMethod = "Free Delivery";
            }
        }
        else if ($event.target.id == 'express' && $event.target.checked == true) {
            this.deliveryFee = 2.99;
            this.ordelivery = 299;
            this.shippingMethod = "UK Express (1-2 Working Days)";
            this.freeAlert = false;
        }
        else if ($event.target.id == 'next-day' && $event.target.checked == true) {
            this.deliveryFee = 4.99;
            this.ordelivery = 499;
            this.shippingMethod = "UK Next Working Day (on orders placed before 12:00pm, exclusions apply - see Delivery Policy)";
            this.freeAlert = false;
        }
        else {
            this.deliveryFee = 0.00;
            this.ordelivery = 0;
            this.shippingMethod = "Free Delivery";
        }
    };
    OrderComponent.prototype.sumCartPrice = function (cart) {
        var priceArr = [];
        cart.forEach(function (element) {
            priceArr.push(element.price * element.qty);
        });
        this.sumCart = priceArr.reduce(this.sumTotal, 0);
    };
    OrderComponent.prototype.sumTotal = function (sum, num) {
        return sum + num;
    };
    OrderComponent.prototype.modifyOrder = function () {
        this.hidePage = true;
    };
    OrderComponent.prototype.saveCustomerUpdate = function (value) {
        this.authService.updateAccount(value);
        this.isEdit = false;
    };
    OrderComponent.prototype.editDetails = function () {
        this.isEdit = true;
    };
    OrderComponent.prototype.cancelEdit = function () {
        this.isEdit = false;
    };
    OrderComponent.prototype.createOrder = function () {
        // console.log(this.orderForm.value);
        if (this.orderForm.value) {
            this.orderService.createOrder(this.orderForm.value, this.shippingMethod, this.basket$, this.sumCart + this.deliveryFee);
        }
        this._router.navigate(["/payment-method"]);
        // else{
        //     this.orderService.createOrder(
        //     this.orderForm.value,
        //     this.shippingMethod, this.basket$, 
        //     this.sumCart+this.deliveryFee, this.lsOrder[0].id);
        // }
        //Send Email to the customer
        // this.sendOrderEmail(this.orderForm.value.customerName, this.orderForm.value.email);
    };
    // sendOrderEmail(name, email){
    //     this._mailService.sendMail(name, email)
    //         .subscribe(res=> res);
    // }
    OrderComponent.prototype.deleteItem = function () {
        var _this = this;
        this.itemKeys.forEach(function (item) {
            _this.checkoutService.deleteOrderItems(item.$key);
        });
        this.checkoutService.deleteAllOrder(this.orderKeys.$key);
        this.checkoutService.deleteOrder();
        this._router.navigate(["/checkout"]);
    };
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.createDb();
        //Only allowed user if they logged in
        if (!localStorage.getItem('currentUser')) {
            this._router.navigate(["/login"]);
            return;
        }
        // this.checkoutService.getFinalOrder().subscribe((orders)=>{
        //     this.lsOrder = orders.reverse();
        //     // console.log(orders[0].id || 1);
        // });
        //  this.checkoutService.getOrderItems().subscribe((items)=>{
        //     this.itemKeys = items.filter((item)=>{
        //         // return item.customerId == localStorage.getItem("userId");
        //     });
        // });
        // this.checkoutService.getOrder().subscribe((orders)=>{
        //     //  this.orderKeys = orders.find((order)=>{
        //     //     return order.customerId == localStorage.getItem("userId");
        //     // });
        // });
        // this.checkoutService.getUserOrder().subscribe((orders)=>{
        //     // console.log(orders);
        //     this.cusOrder = orders;
        //     // console.log(this.cusOrder);
        //     if(orders.length > 0){
        //         this.hidePage = false;
        //     }else{this.hidePage = true;}
        // });
        // this.checkoutService.getCustomerDetails()
        //     .subscribe(customers=>{
        //         this.customer = customers;
        //         this.customerkey = customers;
        //     });
        //Get carts items
        setTimeout(function () {
            _this.cartService.retrieveCart()
                .subscribe(function (carts) {
                _this.basket$ = carts[0];
                console.log(carts[1]);
                _this.sumCart = carts[1];
                // this.sumCartPrice(carts);
            });
            _this.authService.getAccountWithId()
                .subscribe(function (snapshot) {
                console.log(snapshot);
                _this.customer = snapshot.payload.val();
                var customers = snapshot.payload.val();
                _this.hidePage = true;
                _this.spinner = false;
                // console.log(customers.$key);
                _this.orderForm.patchValue({
                    customerId: snapshot.key,
                    // orderId: customers.customerId,
                    customerName: customers.firstName + " " + customers.lastName,
                    address: customers.addressOne + ", " + customers.addressTwo,
                    postcode: customers.postCode,
                    city: customers.city,
                    country: customers.country,
                    email: customers.email,
                    telephone: customers.telephone
                });
                _this.editForm.patchValue({
                    firstName: customers.firstName,
                    lastName: customers.lastName,
                    email: customers.email,
                    gender: customers.gender,
                    telephone: customers.telephone,
                    addressOne: customers.addressOne,
                    addressTwo: customers.addressTwo,
                    postCode: customers.postCode,
                    city: customers.city,
                    country: "United Kingdom"
                });
            });
            // console.log(this.orderForm.value);
        }, 1000);
    };
    return OrderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('change', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderComponent.prototype, "onChange", null);
OrderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'order',
        template: __webpack_require__("../../../../../src/app/check-out/order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/check-out/check-out.module.scss"), __webpack_require__("../../../../../src/app/check-out/check-out-form.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__["a" /* CheckOutService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_mail_service__["a" /* MailService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_cart_service__["a" /* CartService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__authentications_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__authentications_auth_service__["a" /* AuthService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_order_service__["a" /* OrderService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* Meta */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["d" /* Title */]) === "function" && _j || Object])
], OrderComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ "../../../../../src/app/check-out/payment-method.component.html":
/***/ (function(module, exports) {

module.exports = "<section >\n    <div class=\"fp-page-head\">\n        <!--<img src=\"assets/about-us.jpg\"  alt=\"\">-->\n        <div class=\"fp-page-title\">\n            <!-- <h1>Payment Method</h1> -->\n        </div>\n  </div>\n</section>\n<div  class=\"main-container jumbo-content main-container-load\">\n    \n    <div class=\"\" >\n    <h1>Choose how you want to pay <span *ngIf=\"fieldOk\"><i style=\"color: lightseagreen\" class=\"fa fa-check\" aria-hidden=\"true\"></i></span> </h1>\n    <div *ngIf=\"order && order.amount\">\n        <h5 style=\"color: #f48024\" >Due Amount:  {{order.amount | currency:'GBP':true}}</h5>\n    </div>\n    <p>Thank you for placing your order on our websit, as part of our security measure we will redirect you to a secured payment page to take your card details and process the payment.</p>\n    <p>Chose one from the two payment method below!</p>\n    <!--<p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a></p>-->\n    <!--<button routerLink=\"/order\" type=\"button\">Go Back</button>-->\n    \n    <div class=\"row\">\n        <div style=\"padding: 0px; margin: 10px;\" class=\"barclaypay col xs6 s6 m6 l6\">\n            <div id=\"paypal-button\"></div>\n            <span style=\"width: 5px;\"></span>\n            <!-- <div id=\"main-form\">\n            </div>\n            <div id=\"myform\">\n                    <div *ngIf=\"order\">\n                        <input type=\"hidden\" name=\"PSPID\" value=\"epdq3027479\">\n                        <input type=\"hidden\" name=\"ORDERID\" value={{order.orderId}}>\n                        <input type=\"hidden\" name=\"AMOUNT\" value={{order.amount*100}}>\n                        <input type=\"hidden\" name=\"CURRENCY\" value=\"GBP\">\n                        <input type=\"hidden\" name=\"LANGUAGE\" value=\"en_US\">\n                        \n                        lay out information\n                        <input type=\"hidden\" name=\"TITLE\" value=\"London City Roast\">\n                        <input type=\"hidden\" name=\"ACCEPTURL\" value=\"http://www.londoncityroast.com/payment-confirmation\">\n                        <input type=\"hidden\" name=\"BACKURL\" value=\"http://www.londoncityroast.com/payment-method\">\n                        <input type=\"hidden\" name=\"EXCEPTIONURL\" value=\"http://www.londoncityroast.com/exception\">\n                        miscellanous\n                        <input type=\"hidden\" name=\"HOMEURL\" value=\"http://www.londoncityroast.com\">\n            \n                        <input type=\"hidden\" name=\"CN\" value={{order.customerName}}>\n                        <input type=\"hidden\" name=\"EMAIL\" value={{order.email}}>\n                        <input type=\"hidden\" name=\"OWNERZIP\" value={{order.postCode}}>\n                        <input type=\"hidden\" name=\"OWNERADDRESS\" value={{order.address}}>\n                        <input type=\"hidden\" name=\"OWNERTOWN\" value={{order.city}}>\n                        <input type=\"hidden\" name=\"OWNERCTY\" value={{order.country}}>\n\n                        <input type=\"hidden\" name=\"SHASIGN\" value={{hashSign}}>\n                        <input type=\"submit\" class=\"btn btn-success\" [disabled]=\"true\" value=\"Barclays\" id=submit2 name=submit2>\n                    </div>\n                </div>\n                <div class=\"card-type\">\n                     <i class=\"fa fa-cc-visa\" aria-hidden=\"true\"></i>\n                    <i class=\"fa fa-cc-jcb\" aria-hidden=\"true\"></i>\n                    <i class=\"fa fa-cc-mastercard\" aria-hidden=\"true\"></i>\n                    <a><img src=\"https://www.merchantequip.com/image/?logos=a&height=36\" alt=\"Merchant Equipment Store Credit Card Logos\" /></a>\n                </div> -->\n        </div>\n\n        <div style=\"padding: 0px; margin: 0px;\" class=\"worldpay col xs6 s6 m6 l6\">\n            <div id=\"payForm\">\n            </div>\n            <div id=\"form10\">\n                <div *ngIf=\"order\">\n                    <input type=\"hidden\" name=\"testMode\" value=\"0\">\n                \n                    <input type=\"hidden\" name=\"instId\" value=\"1189962\">\n                    <input type=\"hidden\" name=\"cartId\" value=\"{{order.orderId}}\">\n                    <input type=\"hidden\" name=\"currency\" value=\"GBP\">\n                    <input type=\"hidden\" name=\"amount\" value=\"{{order.amount}}\">\n\n                    \n                    <input type=\"hidden\" name=\"desc\" value=\"Coffees\">\n                    <input type=\"hidden\" name=\"name\" value=\"{{order.customerName}}\">\n                    <input type=\"hidden\" name=\"address1\" value=\"{{order.address}}\">\n                    <input type=\"hidden\" name=\"town\" value=\"{{order.city}}\">\n                    <input type=\"hidden\" name=\"postcode\" value=\"{{order.postCode}}\">\n                    <input type=\"hidden\" name=\"country\" value=\"{{order.country}}\">\n                    <input type=\"hidden\" name=\"email\" value=\"{{order.email}}\">\n                    <input class=\"btn btn-danger\" type=\"submit\" value=\"Debit Card\">\n                </div>\n            </div>\n            <!-- <div class=\"card-type\">\n                <i class=\"fa fa-cc-visa\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-cc-jcb\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-cc-mastercard\" aria-hidden=\"true\"></i>\n                <a><img src=\"https://www.merchantequip.com/image/?logos=me&height=36\" alt=\"Merchant Equipment Store Credit Card Logos\" /></a>\n\n            </div> -->\n        </div>\n    </div>\n    </div>\n    <div *ngIf=\"spinner\" class=\"reload-cover-white\">\n        <div class=\"progress-loading\" >\n            <div class=\"preloader-wrapper big active\">\n            <div class=\"spinner-layer spinner-blue-only\">\n                <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n                </div><div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n                </div><div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n                </div>\n            </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/check-out/payment-method.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentMethodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { objectHash } from './dist/object_hash';
var PaymentMethodComponent = (function () {
    function PaymentMethodComponent(cartService, _router, _elementRef, orderService, meta, title) {
        this.cartService = cartService;
        this._router = _router;
        this._elementRef = _elementRef;
        this.orderService = orderService;
        this.meta = meta;
        this.title = title;
        this.fieldOk = false;
        this.spinner = true;
        title.setTitle('Payment method');
    }
    PaymentMethodComponent.prototype.paymentSubmit = function () {
    };
    PaymentMethodComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Only allowed user if they logged in
        if (!localStorage.getItem('currentUser')) {
            this._router.navigate(["/login"]);
            return;
        }
        this.orderService.getOrder().subscribe(function (order) {
            var subFormHolder = document.getElementById('payForm');
            var form = document.getElementById('form10');
            var subForm = document.createElement('form');
            subForm.action = "https://secure.worldpay.com/wcc/purchase";
            subForm.name = "BuyForm";
            subForm.method = "POST";
            subForm.appendChild(form);
            subFormHolder.appendChild(subForm);
            // console.log(order.payload.val());
            _this.order = order.payload.val();
            var orders = order.payload.val();
            _this.paypalCheckOut(orders.amount, orders.orderId, orders.customerName);
            _this.spinner = false;
        });
    };
    PaymentMethodComponent.prototype.ngAfterViewInit = function () {
        var subFormHolder = document.getElementById('payForm');
        var form = document.getElementById('form10');
        var subForm = document.createElement('form');
        subForm.action = "https://secure.worldpay.com/wcc/purchase";
        subForm.name = "BuyForm";
        subForm.method = "POST";
        subForm.appendChild(form);
        subFormHolder.appendChild(subForm);
        // var script = document.createElement("script");
        // script.type = "text/javascript";
        // script.src = "https://cdn.worldpay.com/v1/worldpay.js";
        // this._elementRef.nativeElement.appendChild(script);
    };
    PaymentMethodComponent.prototype.paypalCheckOut = function (sum, orId, name) {
        var _this = this;
        // console.log((sum * 100)/100);
        var amount = (sum * 100) / 100;
        window['paypal'].Button.render({
            env: 'sandbox',
            client: {
                sandbox: 'ARBSCUiDOABkb_xriEZ3hIfQuU_acaJF7v_gd5hg660xW-totw0wbIhdH4ZKh1XaJSn2KTx8H4FTRv4O',
            },
            style: {
                color: 'gold',
                size: 'small'
            },
            payment: function () {
                var env = this.props.env;
                var client = this.props.client;
                return window['paypal'].rest.payment.create(env, client, {
                    transactions: [
                        {
                            amount: { total: amount, currency: 'GBP' }
                        }
                    ]
                });
            },
            commit: true,
            onAuthorize: function (data, actions) {
                console.log(actions);
                console.log(data);
                // create transaction here with data
                _this.orderService.createTransaction(data, orId, amount, name);
                var key = localStorage.getItem("lastOrderKey");
                _this.orderService.upDateOrder(key, { status: "completed" });
                _this._router.navigate(["/payment-confirmation"]);
                // Optional: display a confirmation page here
                return actions.payment.execute().then(function () {
                    // Show a success page to the buyer
                });
            },
            onCancel: function (data, actions) {
                _this._router.navigate(["/exception"]);
                /*
                 * Buyer cancelled the payment
                 */
                console.log(actions);
            },
            onError: function (err) {
                /*
                 * An error occurred during the transaction
                 */
            }
        }, '#paypal-button');
    };
    return PaymentMethodComponent;
}());
PaymentMethodComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pay-method',
        template: __webpack_require__("../../../../../src/app/check-out/payment-method.component.html"),
        styles: [__webpack_require__("../../../../../src/app/check-out/styles/stylesheet.scss"), __webpack_require__("../../../../../src/app/check-out/check-out.module.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__["a" /* CheckOutService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Meta */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["d" /* Title */]) === "function" && _f || Object])
], PaymentMethodComponent);

var _a, _b, _c, _d, _e, _f;
// let nform = document.createElement('form');
// let myf = document.getElementById('myform');
// nform.id = "form1";
// nform.name = "form1";
// nform.action = "https://mdepayments.epdq.co.uk/Ncol/Test/orderstandard.asp";
// nform.method = "post";
// nform.appendChild(myf);
// let main = document.getElementById('main-form');
// main.appendChild(nform);
// if(orders){
//     let passphrase = "LCRUB3DA172000@#tig";
//     // console.log(order.orderId);
//     let accpturl = "ACCEPTURL=http://www.londoncityroast.com/payment-confirmation"+passphrase;
//     let amount = "AMOUNT="+orders.amount*(100)+passphrase;
//     let backurl = "BACKURL=http://www.londoncityroast.com/payment-method"+passphrase;
//     let cusName ="CN="+orders.customerName+passphrase;
//     let currency ="CURRENCY=GBP"+passphrase;
//     let email ="EMAIL="+orders.email+passphrase;
//     let expturl ="EXCEPTIONURL=http://www.londoncityroast.com/exception"+passphrase;
//     let homeurl ="HOMEURL=http://www.londoncityroast.com"+passphrase;
//     let language ="LANGUAGE=en_US"+passphrase;
//     let orderId ="ORDERID="+orders.orderId+passphrase;
//     let ownaddress ="OWNERADDRESS="+orders.address+passphrase;
//     let owntown ="OWNERTOWN="+orders.city+passphrase;
//     let owncty ="OWNERCTY="+orders.country+passphrase;
//     let ownZip ="OWNERZIP="+orders.postCode+passphrase;
//     let pspdq ="PSPDQ=epdq3027479"+passphrase;
//     let title ="TITLE=London City Roast"+passphrase;
//     // let shasign = {
//     //     "AMOUNT" : order.amount*(100)+passphrase,
//     //     "CURRENCY": "GBP"+passphrase,
//     //     "LANGUAGE": "en_US"+passphrase,
//     //     "ORDERID": order.orderId+passphrase,
//     //     "PSPDQ": "epdq3027479"+passphrase
//     // };
//     this.hashSign = SHA1(
//         accpturl+
//         amount+
//         backurl+
//         cusName+
//         currency+
//         email+
//         expturl+
//         homeurl+
//         language+
//         orderId+
//         ownaddress+
//         owncty+
//         owntown+
//         ownZip+
//         pspdq+
//         title
//         );
//     // let hash = (accpturl+amount+backurl+cusName+currency+
//     //     email+homeurl+language+orderId+ownaddress+
//     //     ownaddress3+ownZip+pspdq+title)
//     let hash = (accpturl+amount+backurl+cusName+currency+email+expturl+
//         homeurl+language+orderId+ownaddress+owncty+owntown+ownZip+pspdq+
//         title);
//     let newHash = (accpturl+''+amount+''+currency+''+language+''+orderId+''+pspdq+''+title)
//     console.log(this.hashSign);
//     let testHash = SHA1(newHash);
//     let digest = "3B0878805E3717F355FF73A8C21E5A6AAE29BFEA"
//     let calSign = "62A8995FA228F0A0CB4AB981E7F87E7BD9FBC452"
//     console.log(hash);
//     // console.log(newHash);
//     // console.log(testHash);
//     setTimeout(()=>{
//         this.fieldOk = true;
//     },500);
// }else{
//     // this._router.navigate(["/order"]) 
// } 
//# sourceMappingURL=payment-method.component.js.map

/***/ }),

/***/ "../../../../../src/app/check-out/shopping-cart-side.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartSideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartSideComponent = (function () {
    function CartSideComponent(cartService, _location, _router, _elementRef, _mailSender) {
        this.cartService = cartService;
        this._location = _location;
        this._router = _router;
        this._elementRef = _elementRef;
        this._mailSender = _mailSender;
        this.cartproduct = [];
        this.accepTerms = false;
        this.liginAlert = false;
    }
    CartSideComponent.prototype.moveTopayment = function () {
        this._router.navigate(["/checkout"]);
        this.liginAlert = true;
    };
    CartSideComponent.prototype.removeItem = function (key) {
        // this.cartService.removeItem(key);
    };
    CartSideComponent.prototype.clearCart = function () {
        // this.cartService.clear();
    };
    CartSideComponent.prototype.sumCartPrice = function (cart) {
        var priceArr = [];
        var oldPrice = [];
        cart.forEach(function (element) {
            priceArr.push(element.price * element.qty);
            oldPrice.push(element.oldprice * element.qty);
        });
        this.sumCart = priceArr.reduce(this.sumTotal, 0);
        this.sumOldCart = oldPrice.reduce(this.sumTotal, 0);
    };
    CartSideComponent.prototype.sumTotal = function (sum, num) {
        return sum + num;
    };
    CartSideComponent.prototype.ngOnInit = function () {
        //Only allowed user if they logged in
        // if(!localStorage.getItem('currentUser')){
        //     this._router.navigate(["/login"])
        //     return
        // }
        // this.cartService.getCart()
        //     .subscribe(cart=>{
        //         this.cartproduct = cart;
        //         this.sumCartPrice(cart);
        //     });
    };
    return CartSideComponent;
}());
CartSideComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'side-cart',
        template: "\n        <div class=\"side-cart\">\n            <h1><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Your Basket <strong>{{sumCart|currency:\"GBP\":true}}</strong></h1>\n            <div class=\"wrapper\">\n                <div *ngFor=\"let cart of cartproduct\">\n\n                    <div class=\"row container\">\n                        <div class=\"qty col col-xs-1\">{{cart.qty}}x</div>\n                        <div class=\"pname col col-xs-6\">{{cart.name}}</div>\n                        <div class=\"price col col-xs-2\"><p>{{cart.price | currency: 'GBP' :true}}</p></div>\n                        <p class=\"remove-cart\"><i (click)=\"removeItem(cart.$key)\" class=\"fa fa-times remove-cart-i\" aria-hidden=\"true\"></i></p>\n                        <hr>\n                    </div>\n                    \n                </div>\n                \n            </div>\n            <p class=\"saved-purchase\">you saved {{sumOldCart - sumCart |currency:\"GBP\":true}}</p>\n            <a *ngIf=\"cartproduct.length > 0\" routerLink=\"/cart\"><p>See Full Cart</p></a>\n        </div>\n        <div *ngIf=\"cartproduct.length > 0\" routerLink=\"/checkout\" class=\"check-out\"><p>Check Out</p></div>\n    ",
        styles: ["\n    p i{color:#f48024;}\n        .qty,.pname,.price{\n            font-size: 13px;\n            color:lightslategray;\n            margin:0px;\n        }\n        .qty{\n            \n        }\n        .price p{\n            color:lightslategrey;\n        }\n        .side-cart{ \n            margin-top: 10px;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n            \n            border-color: lightslategrey;\n            padding-bottom: 20px;\n            \n        }\n        .wrapper{\n            position: relative;\n            max-height: 250px;\n            overflow: scroll;\n        }\n        .remove-cart{\n            position: absolute;\n            right: 5px;\n        }\n        h1{\n            padding: 10px 5px;\n            font-size: 18px;\n            color: #fff;\n            background-color: lightslategrey;\n        }\n        h1 strong{\n            color:#f48024;\n        }\n        p{\n            text-align: left;\n            padding: 0px;\n            margin:0px;\n            margin: 5px 10px;\n            font-size: 14px;\n        }\n        .check-out{\n            background-color:#f48024; \n            margin: 0px;\n            padding:0px;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n        }\n        .check-out p{\n            text-align:center;\n            padding: 10px;\n            font-size: 18px;\n            font-family: 'Satisfy', cursive;\n            letter-spacing: 3px;\n            color:#fff;\n        }\n        .saved-purchase{\n            border-top: 1px solid;\n            border-color: #f48024; \n            padding-top: 10px;\n        }\n       \n     "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__["a" /* CheckOutService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_mail_service__["a" /* MailService */]) === "function" && _e || Object])
], CartSideComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=shopping-cart-side.component.js.map

/***/ }),

/***/ "../../../../../src/app/check-out/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<section >\n    <div class=\"fp-page-head\">\n        <img class=\"cart-mobile-container\" src=\"assets/shopping-trolley.jpg\"  alt=\"Car Mobile\">\n        <!--<img class=\"table\" src=\"assets/large-shoppin-cart.jpg\"  alt=\"Cart Desktop\">-->\n        <div class=\"fp-page-title\">\n          \n          <h1>Shopping Cart</h1>\n        </div>\n  </div>\n</section>\n<!-- <div *ngIf=\"cartproduct && cartproduct.length < 1\" class=\"container load-item\">\n  <div class=\"progress-loading\" >\n    <div class=\"preloader-wrapper big active\">\n      <div class=\"spinner-layer spinner-blue-only\">\n        <div class=\"circle-clipper left\">\n          <div class=\"circle\"></div>\n        </div><div class=\"gap-patch\">\n          <div class=\"circle\"></div>\n        </div><div class=\"circle-clipper right\">\n          <div class=\"circle\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n<section class=\"main-container-load \">\n  <section class=\"main-container container-r Shopping-container\">\n  <!--<p *ngIf=\"currentuser.includes('@')\">Your email: {{currentuser}}</p>-->\n  <!-- <div class=\"empty-basket\" *ngIf=\"cartproduct && cartproduct.length > 0\">\n    <button (click)=\"clearCart()\" class=\"btn btn-danger\" type=\"button\">Empty</button>\n  </div> -->\n  <h1 class=\"head-1\">Your Basket <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n  </h1>\n    <div class=\"empty-cart\" *ngIf=\"cartproduct.length < 1\">\n      <h5>You have no item in your Basket</h5>\n    </div>\n    <div class=\"cart-mobile-container\" *ngIf=\"cartproduct && cartproduct.length > 0\">\n      <div class=\"cart-mobile\" *ngFor=\"let item of cartproduct\" >\n        <div class=\"cart-0\">\n          <p>{{item.qty}}</p>\n        </div>\n        <div class=\"cart-1\">\n          <img [src]=\"item.imageUrl\" style=\"width: 30px;\" alt=\"\">\n        </div>\n        <div class=\"cart-2\">\n          <p>{{item.name}}</p>\n        </div>\n        <div class=\"cart-3\">\n          <p> @ {{item.price | currency: 'GBP': true}}</p>\n        </div>\n        <div class=\"cart-4\">\n          <p> {{item.qty * item.price | currency: 'GBP': true}}</p>\n        </div>\n        <div class=\"cart-5\">\n          <p><i (click)=\"removeItem(item.id)\" class=\"fa fa-times remove-cart-i\" aria-hidden=\"true\"></i></p>\n        </div>\n        \n      </div>\n      <hr>\n        <p style=\"padding:0px; margin:0px; font-size:12px; margin-left: 20px;\">You just Saved:\n          <span style=\"color:red;\">- {{sumOldCart - sumCart | currency:'GBP':true}}</span>\n        </p>\n      <div class=\"row total-cart\">\n        <div class=\"col xs6\"><h5>Total:</h5></div>\n        <div class=\"col xs6\"><p style=\"color:#f48024\"><strong>{{sumCart | currency: 'GBP': true}}</strong></p></div>\n\n      </div>\n    </div>\n    <div class=\"dextop\">\n      <table class=\"table table-striped cart-table\" *ngIf=\"cartproduct && cartproduct.length > 0\">\n        <thead class=\"thead-inverse\">\n          <tr>\n              <th></th>\n              <th>Product</th>\n              <th>Qty</th>\n              <th>Size</th>\n              <th>Blend</th>\n              <!--<th>Roast</th>-->\n              <th>Price</th>\n              <th>Total</th>\n              <th></th>\n              <!--<th><button (click)=\"clearCart()\" class=\"btn btn-danger\" type=\"button\">Empty your basket</button></th>-->\n          </tr>\n        </thead>\n        <tbody>\n          \n          <tr *ngFor=\"let item of cartproduct\">\n            <th>\n              <img [src]=\"item.imageUrl\" style=\"width: 30px;\" alt=\"\">\n            </th>\n            <td>{{item.name}}</td>\n            <td contenteditable=\"true\">{{item.qty}}</td>\n            <td>{{item.size}}</td>\n            <td>{{item.type}}</td>\n            <!--<td>{{item.roast}}</td>-->\n            <td>{{item.price | currency: 'GBP': true}}</td>\n            <td><strong>{{item.qty * item.price | currency: 'GBP': true}}</strong></td>\n            <td><i (click)=\"removeItem(item.id)\" class=\"fa fa-times remove-cart-i\" aria-hidden=\"true\"></i>\n          </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"sum-container\" *ngIf=\"cartproduct && cartproduct.length > 0\">\n          <div class=\"row cartSum\">\n            \n            <div style=\"padding: 10px;\" class=\"col l12\">\n              <h6 style=\"color:slategray\"><small>You Just Saved yourself</small>\n                <span style=\"color:red;\">- {{sumOldCart - sumCart | currency:'GBP':true}}</span>\n              </h6>\n              \n            </div>\n            <div  class=\"col l12\" style=\"background-color:#000; padding: 10px;\">\n              <div class=\"col l6\">\n                <h5 style=\"color:#fff; font-size:1.5em;\">Total:</h5>\n              </div>\n              <div class=\"col l6\">\n                <h4 style=\"letter-spacing:2px; color:#f48024\"><strong>{{sumCart | currency: 'GBP': true}}</strong></h4>\n              </div>\n            </div>\n      \n          </div>\n          \n        </div>\n        <div class=\"check-button\">\n              <p *ngIf=\"cartproduct && cartproduct.length > 0\">\n                <input (change)=\"termsChange($event)\" type=\"checkbox\" id=\"terms\" />\n                <label for=\"terms\">I agree to the return policy! <span > <a routerLink=\"/return-policy\" target=\"blank\" style=\" color: orangered\" >read..</a> </span></label>\n              </p>\n              <br>\n              <div class=\"check-out right-nav\">\n                \n                  <button [disabled]=\"!accepTerms\" id=\"btn-check\" *ngIf=\"cartproduct.length > 0\" (click)=\"moveTopayment()\" class=\"waves-effect waves-light btn\" type=\"button\">Check Out <i  class=\"material-icons\"></i></button>\n                  <button (click)=\"back()\" class=\"waves-effect waves-light btn\" type=\"button\">Keep Shopping <i class=\"material-icons\"></i></button>\n              </div>\n          </div>\n          \n          <!--<div class=\"cart-login-alert\" *ngIf=\"liginAlert\">\n            <div>\n              <p>Please register or login with email and password before check out</p>\n            </div>\n            <button class=\"btn btn-danger\" type=\"button\">Register</button> Or\n              <button class=\"btn btn-primary\" type=\"button\">login</button>\n          </div>-->\n\n        </div>\n\n  </section>\n  <div *ngIf=\"pageReload\" class=\"reload-cover\">\n      <div class=\"progress-loading\" >\n        <div class=\"preloader-wrapper big active\">\n          <div class=\"spinner-layer spinner-blue-only\">\n            <div class=\"circle-clipper left\">\n              <div class=\"circle\"></div>\n            </div><div class=\"gap-patch\">\n              <div class=\"circle\"></div>\n            </div><div class=\"circle-clipper right\">\n              <div class=\"circle\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"firstPageLoad\" class=\"reload-cover-white\">\n        <div class=\"progress-loading\" >\n          <div class=\"preloader-wrapper big active\">\n            <div class=\"spinner-layer spinner-blue-only\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div><div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div><div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n</section>\n\n<!--Anonymous login continue-->\n<div *ngIf=\"!currentUserLogin\" class=\"anonymous-wrapper\">\n    <div class=\"anonymous\">\n      <div class=\"ano-content jumbotron\">\n        <i (click)=\"closeWindow()\" class=\"fa fa-close\" aria-hidden=\"true\"></i>\n        <!-- <button (click)=\"logAnonymous()\" class=\"ano-b btn btn-default mce-btn-small\" type=\"button\"><i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i> Be Our Guest</button> -->\n        <!-- <p style=\"margin: 0px; padding: 0px;\">OR</p> -->\n        <p>Please Login with your email or Register to continue to checkout </p>\n        <button (click)=\"closeWindow()\" routerLink=\"/login\" class=\"btn mce-btn-small btn-success\" type=\"button\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Login</button>\n        <button (click)=\"closeWindow()\" routerLink=\"/signup\" class=\"btn mce-btn-small btn-primary\" type=\"button\"><i class=\"fa fa-registered\" aria-hidden=\"true\"></i> Register</button>\n        <br>\n        <!--<h4 style=\"margin-top: 10px;\">OR</h4>-->\n        <!--<p>You may also want to <span class=\"btn\" id=\"span\" style=\"text-decoration: underline; color: lightslategrey\" (click)=\"registerUser()\">register</span> here </p>\n        <button (click)=\"closeWindow()\" class=\"btn mce-btn-large btn-danger\" type=\"\">close</button>-->\n      </div>\n    </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/check-out/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentications_auth_service__ = __webpack_require__("../../../../../src/app/authentications/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(_location, _router, _elementRef, _mailSender, authService, cartService) {
        this._location = _location;
        this._router = _router;
        this._elementRef = _elementRef;
        this._mailSender = _mailSender;
        this.authService = authService;
        this.cartService = cartService;
        this.user = "kam";
        this.cartproduct = [];
        this.sumCart = 0;
        this.accepTerms = false;
        this.liginAlert = false;
        this.currentUserLogin = true;
        this.pageReload = false;
        this.firstPageLoad = true;
    }
    ShoppingCartComponent.prototype.termsChange = function ($event) {
        if ($event.target.checked == true) {
            this.accepTerms = true;
        }
        else {
            this.accepTerms = false;
        }
    };
    ShoppingCartComponent.prototype.moveTopayment = function () {
        if (this.currentuser) {
            this._router.navigate(["/checkout"]);
        }
        else {
            this.currentUserLogin = false;
        }
        // this.liginAlert =true;
    };
    ShoppingCartComponent.prototype.back = function () {
        this._location.back();
    };
    ShoppingCartComponent.prototype.removeItem = function (key) {
        var _this = this;
        this.pageReload = true;
        setTimeout(function () {
            _this.cartService.removeCart(key);
        }, 400);
        // this.cartService.removeItem(key);
        setTimeout(function () {
            _this.pageReload = false;
        }, 600);
    };
    ShoppingCartComponent.prototype.sumCartPrice = function (cart) {
        console.log(cart);
        // let priceArr = [];
        // let oldPrice = [];
        //      cart.forEach(element=>{
        //          console.log(element);
        //     priceArr.push(element.price * element.qty);
        //     oldPrice.push(element.oldprice * element.qty);
        // });
        this.sumCart = __WEBPACK_IMPORTED_MODULE_4_lodash__["reduce"](cart, this.sumTotal, 0);
        console.log(this.sumCart);
        // this.sumOldCart = oldPrice.reduce(this.sumTotal, 0);
    };
    ShoppingCartComponent.prototype.sumTotal = function (sum, num) {
        return sum + num;
    };
    ShoppingCartComponent.prototype.closeWindow = function () {
        this.currentUserLogin = true;
    };
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.createDb();
        setTimeout(function () {
            _this.carts$ = _this.cartService.retrieveCart()
                .subscribe(function (data) {
                _this.cartproduct = data[0];
                _this.sumCart = data[1];
                _this.sumOldCart = data[2];
                _this.firstPageLoad = false;
                // this.paypalCheckOut(data[1]);
            });
        }, 800);
        this.authService.authUserState().subscribe(function (user) {
            if (user) {
                _this.currentuser = user;
            }
        });
        // this.paypalCheckOut();
        // this.railsOrder = this._mailSender.getorders();
    };
    return ShoppingCartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('change', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ShoppingCartComponent.prototype, "termsChange", null);
ShoppingCartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shop-cart',
        template: __webpack_require__("../../../../../src/app/check-out/shopping-cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/check-out/check-out.module.scss"), __webpack_require__("../../../../../src/app/check-out/check-out-media-query.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__authentications_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__authentications_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_cart_service__["a" /* CartService */]) === "function" && _f || Object])
], ShoppingCartComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=shopping-cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/check-out/styles/stylesheet.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fp-page-head {\n  background-color: #35414C;\n  width: 100%;\n  height: 150px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden; }\n  .fp-page-head img {\n    opacity: 0.2;\n    position: relative;\n    width: 100%;\n    margin-top: 0px;\n    min-height: 150px; }\n  .fp-page-head .fp-page-title {\n    width: 90%;\n    position: absolute;\n    top: 80px;\n    right: 50px; }\n    .fp-page-head .fp-page-title h1 {\n      color: lightslategrey;\n      font-size: 1.5rem;\n      margin-right: 15px; }\n\n.fp-page-content {\n  max-width: 700px;\n  padding: 50px 0px; }\n  .fp-page-content p {\n    text-align: center;\n    padding: 20px 0px; }\n  .fp-page-content h4 {\n    padding-top: 20px; }\n\n.Shopping-container, .check-out-container {\n  min-height: 700px;\n  padding: 50px; }\n  .Shopping-container .check-out, .check-out-container .check-out {\n    text-align: right;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .Shopping-container .check-out button, .check-out-container .check-out button {\n      margin: 0px 4px;\n      height: 30px;\n      padding: 0px 5px;\n      background-color: lightslategrey;\n      border: none; }\n    .Shopping-container .check-out button#btn-check, .check-out-container .check-out button#btn-check {\n      background-color: #f48024;\n      color: #35414C;\n      padding: 0 10px; }\n\nh1.head-1 {\n  font-size: 28px;\n  margin-left: 20px; }\n\n.cart-table {\n  border: 1px solid;\n  border-color: lightgray; }\n  .cart-table tr th {\n    color: lightslategrey; }\n  .cart-table td i:hover {\n    color: red;\n    cursor: pointer; }\n\n.jumbo-content {\n  padding: 50px 20px;\n  max-width: 600px; }\n  .jumbo-content h1 {\n    font-size: 1.5rem;\n    color: lightslategrey;\n    margin-bottom: 20px; }\n  .jumbo-content .card-type {\n    padding: 10px 0px; }\n    .jumbo-content .card-type i {\n      font-size: 32px; }\n    .jumbo-content .card-type a img {\n      padding-bottom: 10px; }\n\n@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .jumbo-content {\n    padding: 20px 20px;\n    max-width: 600px; }\n    .jumbo-content .jumbotron {\n      padding: 20px; }\n      .jumbo-content .jumbotron h1 {\n        font-size: 1.5rem;\n        color: lightslategrey;\n        margin-bottom: 20px; }\n      .jumbo-content .jumbotron .card-type {\n        padding: 10px 0px; }\n        .jumbo-content .jumbotron .card-type i {\n          font-size: 20px; }\n        .jumbo-content .jumbotron .card-type a img {\n          padding-bottom: 5px;\n          height: 28px; }\n  .fp-page-head img {\n    opacity: 0.2;\n    position: relative;\n    width: 100%;\n    margin-top: 0px;\n    min-height: 150px; }\n  .fp-page-head .fp-page-title {\n    width: 70%;\n    position: absolute;\n    top: 80px;\n    right: 50px; }\n    .fp-page-head .fp-page-title h1 {\n      color: lightslategrey;\n      font-size: 1.5rem;\n      margin-right: 15px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/about/about-media-query.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .ab-page-head {\n    background-color: #35414C;\n    width: 100%;\n    height: 300px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden;\n    border-radius: 0px 0px 0px 0px; }\n    .ab-page-head img {\n      position: fixed;\n      opacity: 0.2;\n      margin-bottom: -100px;\n      margin-top: 0px;\n      width: 100%;\n      height: 300px;\n      min-width: 450px; }\n    .ab-page-head .ab-page-title {\n      position: absolute;\n      top: 250px;\n      right: 20px; }\n      .ab-page-head .ab-page-title h1 {\n        color: lightslategrey;\n        font-size: 1.5rem; }\n  #cover-page {\n    background-color: #fff;\n    position: relative; }\n    #cover-page .page-content {\n      position: relative;\n      z-index: 100;\n      background-color: #fff;\n      text-align: center;\n      min-height: 500px;\n      padding-bottom: 40px;\n      padding: 0px 10px; }\n      #cover-page .page-content p {\n        text-align: center;\n        padding: 20px 5px; }\n      #cover-page .page-content h4 {\n        padding-top: 20px; }\n      #cover-page .page-content .bio h1 {\n        padding: 30px 10px; }\n  .page-image {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n    text-align: center;\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n    padding-bottom: 50px;\n    margin: 0 auto; }\n    .page-image .lcr-image1 {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      background-color: red;\n      width: 30%;\n      margin-right: 10px; }\n      .page-image .lcr-image1 img {\n        width: 100%; }\n    .page-image .lcr-image2 {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      background-color: orange;\n      width: 30%; }\n      .page-image .lcr-image2 img {\n        width: 100%; }\n    .page-image .lcr-image3 {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      background-color: deeppink;\n      width: 30%;\n      margin-left: 10px; }\n      .page-image .lcr-image3 img {\n        width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"ab-page-container\">\n  <div class=\"ab-page-head\">\n    <img src=\"assets/DSCN0715-min.JPG\"  alt=\"\">\n    <div class=\"ab-page-title\">\n      <h1>About us</h1>\n    </div>\n  </div>\n</section> \n<section id=\"cover-page\">\n  <section class=\"page-content main-container\">\n    <div class=\"bio\">\n      <h1>About London City Roast</h1>\n      <h5>Tigransky ltd is an established retail company which have been trading for over a decade in the United Kingdom, supplying eastern Mediterranean deli foods, coffee and vine.</h5>\n      <p> The business have grown from strength to strength sourcing for the best healthy food, coffee and vine in the Europe. Few years back the founder mr Tigran travel to Brazil in south America in search for natural coffee beans cultivated by the local farmer, on that journey he discover a brand of coffee in Sao Paolo in brazil. From there he found the magic behind a great coffee beans and has continue to search for the best coffee and good price deal for the coffee farmers and for the coffee drinkers. Since then mr Tigran has been sourcing for coffee from countries that produce good coffee like Congo, Nicaragua, Mexico, Ethiopia and Rwanda etc. London city roast is now the face of the new discovered Coffee.</p>\n    </div>\n    <h1>Our Gallery</h1>\n    <div class=\"page-image\">\n      \n        <div class=\"lcr-image1 rounded\">\n\n            <img class=\"rounded materialboxed\" src=\"{{image[0]}}\" alt=\"\">\n        </div>\n        <div class=\"lcr-image2 rounded\">\n        \n            <img class=\"rounded materialboxed\" src=\"{{image[1]}}\" alt=\"\">\n        </div>\n        <div class=\"lcr-image3 rounded\">\n        \n            <img class=\"rounded materialboxed\" src=\"{{image[2]}}\" alt=\"\">\n        </div>\n    </div>\n    <div class=\"page-image2\">\n        <div class=\"lcr-image1 rounded\">\n            \n            <img class=\"rounded materialboxed\" src=\"{{image[3]}}\" alt=\"\">\n        </div>\n        <div class=\"lcr-image2 rounded\">\n        \n            <img class=\"rounded materialboxed\" src=\"{{image[4]}}\" alt=\"\">\n        </div>\n        <div class=\"lcr-image3 rounded\">\n        \n            <img class=\"rounded materialboxed\" src=\"{{image[5]}}\" alt=\"\">\n        </div>\n    </div>\n  </section>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/containers/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ab-page-head {\n  background-color: #35414C;\n  width: 100%;\n  height: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  border-radius: 0px 0px 0px 0px; }\n  .ab-page-head img {\n    opacity: 0.2;\n    position: fixed;\n    margin-bottom: 0px;\n    margin-top: -280px;\n    width: 100%;\n    min-width: 1200px; }\n  .ab-page-head .ab-page-title {\n    position: absolute;\n    width: 90%;\n    top: 230px;\n    right: 50px; }\n    .ab-page-head .ab-page-title h1 {\n      color: lightslategrey;\n      font-size: 1.5rem; }\n\n#cover-page {\n  background-color: #fff;\n  position: relative; }\n  #cover-page .page-content {\n    position: relative;\n    background-color: #fff;\n    text-align: center;\n    min-height: 500px;\n    padding: 0px 100px; }\n    #cover-page .page-content p {\n      text-align: center;\n      padding: 20px 0px; }\n    #cover-page .page-content h4 {\n      padding-top: 20px; }\n    #cover-page .page-content h1 {\n      padding: 0px;\n      margin: 0px;\n      font-size: 2em;\n      font-family: 'Dosis', sans-serif;\n      padding: 20px 0px;\n      font-weight: 600; }\n    #cover-page .page-content .bio h1 {\n      padding: 0px;\n      margin: 0px;\n      font-size: 2em;\n      font-family: 'Dosis', sans-serif;\n      padding: 40px 0px;\n      font-weight: 600; }\n    #cover-page .page-content .page-image, #cover-page .page-content .page-image2 {\n      box-sizing: border-box;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: baseline;\n          -ms-flex-align: baseline;\n              align-items: baseline;\n      text-align: center;\n      -ms-flex-line-pack: justify;\n          align-content: space-between;\n      padding-bottom: 10px;\n      margin: 0 auto; }\n      #cover-page .page-content .page-image .lcr-image1, #cover-page .page-content .page-image2 .lcr-image1 {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        width: 30%;\n        margin-right: 10px; }\n        #cover-page .page-content .page-image .lcr-image1 img, #cover-page .page-content .page-image2 .lcr-image1 img {\n          width: 100%; }\n      #cover-page .page-content .page-image .lcr-image2, #cover-page .page-content .page-image2 .lcr-image2 {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        width: 30%; }\n        #cover-page .page-content .page-image .lcr-image2 img, #cover-page .page-content .page-image2 .lcr-image2 img {\n          width: 100%; }\n      #cover-page .page-content .page-image .lcr-image3, #cover-page .page-content .page-image2 .lcr-image3 {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        width: 30%;\n        margin-left: 10px; }\n        #cover-page .page-content .page-image .lcr-image3 img, #cover-page .page-content .page-image2 .lcr-image3 img {\n          width: 100%; }\n    #cover-page .page-content .page-image2 {\n      padding-bottom: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_images_images__ = __webpack_require__("../../../../../src/app/shared/images/images.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent() {
        this.image = __WEBPACK_IMPORTED_MODULE_1__shared_images_images__["a" /* AboutImage */];
    }
    AboutComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/containers/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/about/about.component.scss"), __webpack_require__("../../../../../src/app/containers/about/about-media-query.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-container\">\n    <div *ngIf=\"blog$\" class=\"blog-image\">\n        <img [src]=\"blog$.data.blogImage\" alt=\"\">\n        <div class=\"blogtitle\">\n            <h1>{{blog$.data.title}}</h1>\n            <p>Posted: {{blog$.data.postdate | date}}</p>\n        </div>\n    </div>\n    <div class=\"main-container main-page\">\n        <div class=\"row\">\n            <div *ngIf=\"blog$\" class=\"left-pane col xs12 s12 m8 l8\">\n                <h1>{{blog$.data.title}}</h1>\n                <p>{{blog$.data.snippet}}</p>\n                <small>Posted: {{blog$.data.postdate | date}}</small>\n                <div [innerHtml]=\"blog$.data.body\"></div>\n            </div>\n            <div class=\"right-pane col xs12 s12 m4 l4\">\n                <ul class=\"collection\">\n                    <li *ngFor=\"let blog of nextBlog$\" class=\"collection-item avatar\">\n                        <img (click)=\"readBlog(blog)\" [src]=\"blog.data.blogImage\" alt=\"\" class=\"circle\">\n                        <span (click)=\"readBlog(blog)\" class=\"title\">{{blog.data.title}}</span>\n                        <p>Posted: {{blog.data.postdate | date}} <br>\n\n                        </p>\n                        <!-- <a (click)=\"readBlog(blog)\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a> -->\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/containers/blog/blog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blog-container {\n  min-height: 500px; }\n  .blog-container .blog-image {\n    position: relative;\n    width: 100%;\n    height: 500px;\n    overflow: hidden; }\n    .blog-container .blog-image .blogtitle {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      margin: 0 auto;\n      margin-top: 25%;\n      background-color: rgba(0, 0, 0, 0.3);\n      width: 300px;\n      padding: 20px; }\n      .blog-container .blog-image .blogtitle h1 {\n        font-family: 'Dosis', sans-serif;\n        font-size: 1.8em;\n        font-weight: 600;\n        text-align: center;\n        text-transform: capitalize;\n        color: #ffffff;\n        padding: 0px;\n        margin: 0px; }\n      .blog-container .blog-image .blogtitle p {\n        font-family: 'Dosis', sans-serif;\n        font-size: 1em;\n        text-align: center;\n        color: lightgray;\n        padding: 0px;\n        margin: 0px; }\n    .blog-container .blog-image img {\n      width: 100%; }\n  .blog-container .main-page {\n    background-color: #ffffff;\n    margin-bottom: 60px; }\n    .blog-container .main-page .left-pane h1 {\n      font-family: 'Open Sans', sans-serif;\n      font-size: 1.4em;\n      font-weight: 600;\n      margin-bottom: 0px;\n      text-transform: capitalize; }\n    .blog-container .main-page .left-pane p {\n      margin: 0px;\n      padding: 0px;\n      margin-bottom: 20px;\n      font-size: 1em;\n      font-weight: 100;\n      color: lightslategrey; }\n    .blog-container .main-page .left-pane small {\n      color: red; }\n    .blog-container .main-page .right-pane p {\n      font-size: 0.8em !important;\n      color: lightslategrey; }\n\n@media only screen and (max-width: 640px) {\n  .blog-container {\n    min-height: 500px; }\n    .blog-container .blog-image {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      overflow: hidden; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogPostComponent = (function () {
    function BlogPostComponent(blogService, route, _router) {
        this.blogService = blogService;
        this.route = route;
        this._router = _router;
    }
    BlogPostComponent.prototype.readBlog = function (blog) {
        this._router.navigate(["/blog/?", { key: blog.key, title: blog.data.title }]);
    };
    BlogPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            _this.blogService.getCacheBlog().subscribe(function (blogs) {
                _this.nextBlog$ = blogs;
                _this.blog$ = __WEBPACK_IMPORTED_MODULE_3_lodash__["first"](__WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](blogs, { "key": param["key"] }));
                // console.log(this.blog$);
            });
        });
    };
    return BlogPostComponent;
}());
BlogPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blog-post',
        template: __webpack_require__("../../../../../src/app/containers/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/blog/blog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], BlogPostComponent);

var _a, _b, _c;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/brewing/brewing-media-query.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .br-page-head {\n    background-color: #35414C;\n    width: 100%;\n    height: 300px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden;\n    border-radius: 0px 0px 0px 0px; }\n    .br-page-head img {\n      opacity: 0.2;\n      position: fixed;\n      margin-bottom: -100px;\n      margin-top: 0px;\n      min-width: 500px;\n      width: 100%;\n      height: 300px; }\n    .br-page-head .br-page-title {\n      position: absolute;\n      top: 250px;\n      right: 20px; }\n      .br-page-head .br-page-title h1 {\n        color: lightslategray;\n        font-size: 1.5rem; }\n  #cover-page {\n    position: relative;\n    background-color: #fff; }\n    #cover-page .br-page-content {\n      background-color: #fff;\n      position: relative;\n      z-index: 100;\n      min-height: 500px;\n      width: 100%;\n      margin-top: 0px;\n      text-align: center;\n      padding: 0px 20px;\n      padding-bottom: 50px; }\n      #cover-page .br-page-content h1 {\n        margin: 0px 0px;\n        padding: 30px 10px; }\n      #cover-page .br-page-content h5 {\n        color: lightslategrey;\n        margin-bottom: 30px;\n        text-align: center;\n        font-size: 20px;\n        letter-spacing: 3px;\n        font-family: 'Caveat', cursive; }\n      #cover-page .br-page-content h2 {\n        color: lightslategray;\n        font-family: 'Lobster', cursive; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/brewing/brewing.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"br-page-container\">\n  <div class=\"br-page-head\">\n    <img src=\"assets/brewing-method.jpeg\"  alt=\"brewing-method\">\n    <div class=\"br-page-title\">\n      <h1>Brewing Methods</h1>\n    </div>\n  </div>\n</section>\n<section id=\"cover-page\">\n  <div class=\"br-page-content main-container\">\n    <h1>Our Brewing Methods</h1>\n    <h5>Select your brewing method from the categories below to find the perfect coffee for your bean-to-cup machine, cafetiere or filter machine. We've carefully selected coffee beans that we consider to be the perfect choice for each type; you can select whether you'd like whole beans, or choose from our grind options on the product page for each of our coffees.</h5>\n\n    <div>\n      <h2>Coffee for Bean-to-Cup Machines</h2>\n      <p>Bean-to-cup machines automatically grind and brew coffee via the espresso method. They are becoming more and more popular due to their ease of use and consistent results. Simply select 'Beans' from the grind options before adding your coffee to the basket, rather than selecting from our grind options.</p>\n    </div>\n    <div>\n      <h2>Coffee for Cafetieres</h2>\n      <p>Cafetieres, also know as French Presses or coffee plungers, require a coarser grind of coffee than coffee filters. The coffee is brewed directly in hot water before the plunger is used to hold the grinds at the bottom of the container. The strength of your brew can be easily adjusted by using more or less ground coffee to taste. Simply select the 'Cafetiere' grind option when adding our coffees to your basket.</p>\n    </div>\n    <div>\n      <h2>Coffee for Espresso Machines</h2>\n      <p>Espresso style coffee is brewed by forcing pressurised hot water through finely ground coffee beans, creating a generally thicker coffee than other methods. Espresso coffee forms the basis of many popular coffee drinks including cappuccino, latte and mocha, and is well used both at home and in coffee shops and cafes throughout the world.</p>\n    </div>\n    <div>\n      <h2>Coffee for Filter Machines</h2>\n      <p>Filter coffee is produced by pouring water over ground coffee beans, then passing the liquid through a membrane (often paper) to filter out the larger grounds leaving the brewed coffee to collect. Filter, or drip brewed coffee, is particularly popular in America and generally produces a lighter-bodied brew than some other methods.</p>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/containers/brewing/brewing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".br-page-head {\n  background-color: #35414C;\n  width: 100%;\n  height: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  border-radius: 0px 0px 0px 0px; }\n  .br-page-head img {\n    opacity: 0.2;\n    position: fixed;\n    margin-bottom: 0px;\n    margin-top: -200px;\n    min-width: 1200px;\n    width: 100%;\n    height: 100%; }\n  .br-page-head .br-page-title {\n    width: 90%;\n    position: absolute;\n    top: 230px;\n    right: 50px; }\n    .br-page-head .br-page-title h1 {\n      color: lightslategray;\n      font-size: 1.5rem; }\n\n#cover-page {\n  position: relative;\n  background-color: #fff; }\n  #cover-page .br-page-content {\n    position: relative;\n    background-color: #fff;\n    min-height: 500px;\n    margin-top: 0px;\n    padding: 0px 100px; }\n    #cover-page .br-page-content h1 {\n      text-align: center;\n      padding: 0px;\n      margin: 0px;\n      font-size: 1.8em;\n      font-family: 'Dosis', sans-serif;\n      padding: 20px 0px;\n      font-weight: 600; }\n    #cover-page .br-page-content h5 {\n      color: lightslategrey;\n      margin-bottom: 30px;\n      font-size: 1em;\n      font-style: italic; }\n    #cover-page .br-page-content h2 {\n      color: lightslategray;\n      font-family: 'Lobster', cursive;\n      font-size: 1.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/brewing/brewing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrewingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BrewingComponent = (function () {
    function BrewingComponent() {
    }
    BrewingComponent.prototype.ngOnInit = function () {
    };
    return BrewingComponent;
}());
BrewingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-brewing',
        template: __webpack_require__("../../../../../src/app/containers/brewing/brewing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/brewing/brewing.component.scss"), __webpack_require__("../../../../../src/app/containers/brewing/brewing-media-query.scss")]
    }),
    __metadata("design:paramtypes", [])
], BrewingComponent);

//# sourceMappingURL=brewing.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/contacts/contact-media-query.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .cb-page-container .notification {\n    padding-top: 10px;\n    margin: 0 auto;\n    width: 100%;\n    text-align: center; }\n  .contact-address {\n    display: none; }\n  .contact-info {\n    background-color: #fff;\n    text-align: center; }\n    .contact-info h1 {\n      margin: 40px 0px; }\n    .contact-info p {\n      padding: 0px;\n      margin: 0px;\n      padding: 0px 30px; }\n  .cb-page-head {\n    background-color: #35414C;\n    width: 100%;\n    height: 200px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden;\n    border-radius: 0px 0px 0px 0px; }\n    .cb-page-head img {\n      opacity: 0.2;\n      position: fixed;\n      margin-bottom: -100px;\n      width: 100%;\n      height: 200px; }\n    .cb-page-head .cb-page-title {\n      position: absolute;\n      top: 160px;\n      right: 10px; }\n      .cb-page-head .cb-page-title h1 {\n        color: lightslategrey;\n        font-size: 1.5rem;\n        margin-right: 15px; }\n  .page-content {\n    background-color: #fff;\n    position: relative;\n    z-index: 100;\n    margin-top: 0px;\n    display: block;\n    max-width: 800px;\n    width: 100%;\n    min-height: 500px;\n    height: 100%;\n    padding-bottom: 40px; }\n    .page-content p {\n      text-align: center;\n      padding: 20px 0px; }\n    .page-content h4 {\n      padding-top: 20px; }\n    .page-content .contact-form {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      padding-top: 30px;\n      margin-left: 20px;\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n    .page-content .contact-address {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      padding-top: 10px; }\n      .page-content .contact-address p {\n        padding: 0px;\n        margin: 0px;\n        text-align: left !important; }\n    .page-content .contact-address-mobile {\n      padding-bottom: 50px;\n      text-align: center;\n      padding-top: 10px; }\n      .page-content .contact-address-mobile p {\n        padding: 0px;\n        margin: 0px; } }\n\n@media only screen and (min-width: 640px) {\n  .contact-address-mobile {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"cb-page-container\">\n  <div class=\"cb-page-head\">\n    <img src=\"assets/contact.jpeg\"  alt=\"\">\n    <div class=\"cb-page-title\">\n      <h1>Contact us</h1>\n    </div>\n  </div>\n  <div class=\"container contact-info\" *ngIf=\"infoMsg\">\n      <h1>Contact us</h1>\n      <p>Please call us on the number below or fill the form below, and one of our team will get back to you as soon as possible. </p>\n    </div>\n    <div class=\"notification container\" >\n      <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"sentNotification\">\n        <strong>Thanks for getting in touch!</strong> Your message was successfully sent.\n      </div>\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errMsg\">\n        <strong>Oh snap!</strong> <p>{{errMsg}}</p>\n      </div>\n    </div>\n  <section class=\"container page-content\">\n    <div class=\"contact-address jumbotron\">\n        <h4>Our Office</h4>\n        <p>Unit B3 Crabtree Manorway North</p>\n        <p>DA17 6AX</p>\n        <br>\n        <p>Email: info@londoncityroast.com</p>\n        <p>Tel: 0208 310 8517</p>\n        <p>Mobile: 07878959635</p>\n        <!-- <div [style.margin-top.px]=\"20\" class=\"row\">\n          <div class=\"col col-lg-4\">\n            <img style=\"width:80px\" class=\"rounded\" src=\"{{contactImage[4]}}\" alt=\"Contact-Image-1\">\n          </div>\n          <div class=\"col col-lg-4\">\n            <img style=\"width:80px\" class=\"rounded\" src=\"{{contactImage[1]}}\" alt=\"Contact-Image-1\">\n          </div>\n          <div class=\"col col-lg-4\">\n            <img style=\"width:80px\" class=\"rounded\" src=\"{{contactImage[3]}}\" alt=\"Contact-Image-1\">\n          </div>\n        </div> -->\n     </div>\n    <div class=\"contact-form\">\n      <form novalidate [class.has-success]=\"cForm.valid\" [formGroup]=\"cForm\" (ngSubmit)=\"saveContact(cForm.value)\">\n        <div class=\"row\">\n          <div class=\"input-field col col-xs-6\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" required >\n            <label for=\"firstname\">First Name <span style=\"color: red\">*</span> </label>\n          </div>\n          <div class=\"input-field col col-xs-6\">          \n            <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" >\n            <label for=\"lastname\">Last Name</label>\n          </div>\n        </div>\n        <div class=\"input-field\">\n            <label for=\"email\">Email <span style=\"color: red\">*</span></label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" required pattern=\"[A-Za-z]+\\.?-?[A-Za-z]+@[A-Za-z]+\\.(com|co.uk|net|org)\">\n          </div>\n          <div class=\"input-field\">\n            <label for=\"telephone\">Telephone <span style=\"color: red\">*</span></label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"telephone\" required pattern=\"^0\\d{10}\" >\n          </div>\n          <div class=\"input-field\">\n            <label for=\"message\">Message</label>\n            <textarea rows=\"5\" class=\"materialize-textarea\" formControlName=\"message\" ></textarea>\n          </div>\n          <div class=\"input-field\">\n            <button [class.btn-success]=\"cForm.valid\" class=\"btn btn-default\" [disabled]=\"!cForm.valid\" type=\"submit\">Send</button>\n            <span *ngIf=\"!cForm.valid\" style=\"font-size: 12px\">please fill all required field <span style=\"color: red\">*</span></span>\n          </div>\n      </form>\n    </div>\n    <div class=\"contact-address-mobile jumbotron\">\n        <h4>Our Office</h4>\n        <p>Unit B3 Crabtree Manorway North</p>\n        <p>DA17 6AX</p>\n        <br>\n        <p>Email: info@londoncityroast.com</p>\n        <p>Tel: 0208 310 8517</p>\n        <p>Mobile: 07878959635</p>\n     </div>\n  </section>\n</section>"

/***/ }),

/***/ "../../../../../src/app/containers/contacts/contacts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cb-page-container .notification {\n  padding-top: 10px;\n  margin: 0 auto;\n  width: 600px;\n  text-align: center; }\n\n.contact-info {\n  text-align: center; }\n  .contact-info h1 {\n    padding: 0px;\n    margin: 0px;\n    font-size: 2em;\n    font-family: 'Dosis', sans-serif;\n    padding: 40px 0px;\n    font-weight: 600; }\n  .contact-info p {\n    padding: 0px;\n    margin: 0px;\n    padding: 0px 50px; }\n\n.cb-page-head {\n  background-color: #35414C;\n  width: 100%;\n  height: 200px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  border-radius: 0px 0px 0px 0px; }\n  .cb-page-head img {\n    opacity: 0.2;\n    position: relative;\n    margin-bottom: -100px;\n    width: 100%; }\n  .cb-page-head .cb-page-title {\n    position: absolute;\n    width: 90%;\n    top: 130px;\n    right: 50px; }\n    .cb-page-head .cb-page-title h1 {\n      color: lightslategrey;\n      font-size: 1.5rem;\n      margin-right: 15px; }\n\n.page-content {\n  margin-top: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 800px;\n  min-height: 500px;\n  height: 500px; }\n  .page-content p {\n    text-align: center;\n    padding: 20px 0px; }\n  .page-content h4 {\n    padding-top: 20px; }\n  .page-content .contact-form {\n    -webkit-box-flex: 3;\n        -ms-flex: 3;\n            flex: 3;\n    margin-left: 20px; }\n  .page-content .contact-address {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n    padding-top: 100px; }\n    .page-content .contact-address p {\n      padding: 0px;\n      margin: 0px;\n      text-align: left !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_contact_model__ = __webpack_require__("../../../../../src/app/models/contact.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_images_images__ = __webpack_require__("../../../../../src/app/shared/images/images.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactsComponent = (function () {
    function ContactsComponent(fb, appService) {
        this.fb = fb;
        this.appService = appService;
        this.sentNotification = false;
        this.infoMsg = true;
        this.contactImage = __WEBPACK_IMPORTED_MODULE_4__shared_images_images__["a" /* AboutImage */];
        var contact = new __WEBPACK_IMPORTED_MODULE_3__models_contact_model__["a" /* Contact */];
        this.cForm = fb.group(contact);
        // this.cForm.setValidators(Validators.minLength(6));
    }
    ContactsComponent.prototype.saveContact = function (contact) {
        var _this = this;
        var db = this.appService.addContact();
        db.push(contact).then(function (res) {
            _this.sentNotification = true;
            _this.infoMsg = false;
            _this.clearFormData();
        });
    };
    ContactsComponent.prototype.clearFormData = function () {
        this.cForm.patchValue({
            firstName: "",
            lastName: "",
            email: "",
            telephone: "",
            message: ""
        });
    };
    ContactsComponent.prototype.ngOnInit = function () {
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contacts',
        template: __webpack_require__("../../../../../src/app/containers/contacts/contacts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/contacts/contacts.component.scss"), __webpack_require__("../../../../../src/app/containers/contacts/contact-media-query.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* AppService */]) === "function" && _b || Object])
], ContactsComponent);

var _a, _b;
//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/page-index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_about_component__ = __webpack_require__("../../../../../src/app/containers/about/about.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__about_about_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/containers/contacts/contacts.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__contacts_contacts_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brewing_brewing_component__ = __webpack_require__("../../../../../src/app/containers/brewing/brewing.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__brewing_brewing_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_terms_component__ = __webpack_require__("../../../../../src/app/containers/terms/terms.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__terms_terms_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__return_return_component__ = __webpack_require__("../../../../../src/app/containers/return/return.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__return_return_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__ = __webpack_require__("../../../../../src/app/containers/blog/blog.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__["a"]; });






//# sourceMappingURL=page-index.js.map

/***/ }),

/***/ "../../../../../src/app/containers/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_index__ = __webpack_require__("../../../../../src/app/containers/page-index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__page_index__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_4__page_index__["d" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__page_index__["c" /* BrewingComponent */], __WEBPACK_IMPORTED_MODULE_4__page_index__["e" /* ReturnComponent */],
            __WEBPACK_IMPORTED_MODULE_4__page_index__["f" /* TermsComponent */], __WEBPACK_IMPORTED_MODULE_4__page_index__["b" /* BlogPostComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
        ],
        exports: []
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/containers/return/return.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"cb-page-container\">\n  <div class=\"cb-page-head\">\n    <!--<img src=\"assets/about-us.jpg\"  alt=\"\">-->\n    <div class=\"cb-page-title\">\n      <h1>Return Policy</h1>\n    </div>\n  </div>\n</section>\n<section class=\"container page-content\">\n  <h3>Return Policy</h3>\n  <p>\n    Your product must be complete and in 'as new' condition e.g. \n    if you have opened the box to examine the product you must have \n    done so without damaging or marking the product or packaging. \n    It must not have been used. It should be returned with the original \n    box and packing you received with it.\n    </p>\n    <p>\n      If you follow the steps above you will receive a full refund of the \n      product price.\n    </p>\n    <h4> We cannot cancel your purchase when:</h4>\n    <ul>\n       <li>\n        The seal has been broken on any products, or the goods were a special order to \n        your specification (including ground-to-order options of espresso, filter).\n      </li>\n    </ul>\n   \n    <h4>To qualify for a refund or exchange the product must be:</h4>\n    <ol>\n       <li>\n        In otherwise \"as new\" condition; and if possible, the original box and packaging.\n      </li>\n      <li>\n        The coffee can not be returned unless it is sent damaged or by \n        mistake\n      </li>\n      <li>wrong delivery or damaged products should be returned within 7 days after receiving the goods</li>\n      \n    </ol>\n   \n\n  <h6>This promise does not cover faults caused by accident, neglect, misuse or normal wear and tear.</h6>\n</section>"

/***/ }),

/***/ "../../../../../src/app/containers/return/return.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cb-page-head {\n  background-color: #35414C;\n  width: 100%;\n  height: 150px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  border-radius: 0px 0px 0px 0px; }\n  .cb-page-head img {\n    opacity: 0.2;\n    position: relative;\n    margin-bottom: -100px;\n    width: 100%; }\n  .cb-page-head .cb-page-title {\n    position: absolute;\n    top: 110px;\n    right: 50px; }\n    .cb-page-head .cb-page-title h1 {\n      color: lightslategrey;\n      font-size: 1.5rem; }\n\n.page-content {\n  max-width: 700px;\n  min-height: 500px; }\n  .page-content p {\n    margin: 0px;\n    padding: 10px 0px; }\n  .page-content h3, .page-content h4 {\n    padding-top: 20px;\n    color: lightslategray; }\n  .page-content h6 {\n    margin-bottom: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/return/return.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReturnComponent = (function () {
    function ReturnComponent() {
    }
    ReturnComponent.prototype.ngOnInit = function () {
    };
    return ReturnComponent;
}());
ReturnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-privacy',
        template: __webpack_require__("../../../../../src/app/containers/return/return.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/return/return.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ReturnComponent);

//# sourceMappingURL=return.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"cb-page-container\">\n  <div class=\"cb-page-head\">\n    <!--<img src=\"assets/about-us.jpg\"  alt=\"\">-->\n    <div class=\"cb-page-title\">\n      <h1>Terms and Conditions</h1>\n    </div>\n  </div>\n  <section class=\"container page-content\">\n\n      <h3>Terms and Conditions</h3>\n\n      <p>\n        These Terms and Conditions apply to all transactions on this site. \n        Please read them carefully. They do not affect your statutory rights.\n      </p>\n      <p>\n        We may change these terms and conditions at any time. Any changes will take \n        effect on the date they are posted onto the site (see date above). \n        Placing an order through the site constitutes acceptance of the following terms and conditions.\n      </p>\n      <h4>Prices and Payment</h4>\n      <p>\n        All prices and charges on this site are in UK pounds, unless alternative \n        currencies are selected. They include any VAT payable (most coffee products are \n        currently excluded from UK VAT), but exclude delivery charges, if applicable\n      </p>\n      <p>\n        The total cost of your order will be the price of the products you order plus \n        the applicable delivery charge. All these will be set out clearly before you submit your order.\n      </p>\n      <p>\n        Prices, offers and products are subject to availability and may change before \n        (but not after) we accept your order. If something becomes unavailable we may \n        offer you an alternative\n      </p>\n      <p class=\"alert-danger\" id=\"importanT\">\n        IMPORTANT: We try very hard to ensure that all information on this site is accurate. \n        However, occasionally, an error can occur. If we discover an error in the price or \n        description of a product you have ordered, we may cancel your order at any time up to \n        the point we send the product(s) to you. We will contact you where we become aware of \n        an error and ask you whether you wish to continue with your order at the correct price \n        or cancel it. If we do cancel your order you will receive a full refund of any charges \n        paid in advance.\n      </p>\n      <p>\n        We accept payment by Mastercard, Visa, Maestro, JCB. \n        Payment is deducted when we process your order.\n      </p>\n      <p>\n        We try very hard to ensure that you receive your order in pristine condition. \n        If you do not receive all your products or in the unlikely event that a product \n        arrives damaged, please contact us via our contact email.\n      </p>\n      <h4>Change of Mind Cancellations</h4>\n      <p>\n        You can cancel your purchase at any time either before or up to 7 working days* \n        following the day you receive the goods by emailing us at the address shown in the \n        'contact us' section of the website.\n      </p>\n      <p>\n        Your product must be complete and in 'as new' condition e.g. if you have opened the \n        box to examine the product you must have done so without damaging or marking the \n        product or packaging. It must not have been used. It should be returned with the \n        original box and packing you received with it\n      </p>\n      <h4>General</h4>\n      <p>\n        These terms and conditions and all transactions relating to this website are governed \n        by English law and are subject to the non-exclusive jurisdiction of the English courts. \n        We do not accept amendments to these terms and conditions.\n      </p>\n      <p>Your data protection rights are set out in our Privacy Policy.</p>\n      <p>\n        Items sold on this website are intended for normal domestic and consumer use and are not \n        intended for resale or commercial use. We reserve the right to refuse access to this website, \n        to remove or edit content, or to refuse or cancel orders at our discretion. If we cancel an \n        order, it will be without charge to you, and we will reimburse any payment made by you\n      </p>\n      <p>Additional terms and conditions may apply for prize competitions, pre-release orders and our \n        added value services and offers. If so, you will be alerted to them at the relevant juncture.\n      </p>\n      <p id=\"last\">\n        These terms and conditions only cover the londoncityroast.com website. Any other websites to \n        which you link from this site are governed by their own terms and conditions. We accept no \n        responsibility or liability for the content or operation of websites which are not under our \n        control. We are required by law to tell you that sales can be concluded in English only and \n        that no public filing requirements apply.\n      </p>\n\n  </section>\n</section>"

/***/ }),

/***/ "../../../../../src/app/containers/terms/terms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cb-page-head {\n  background-color: #35414C;\n  width: 100%;\n  height: 150px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  border-radius: 0px 0px 0px 0px; }\n  .cb-page-head img {\n    opacity: 0.2;\n    position: relative;\n    margin-bottom: -100px;\n    width: 100%; }\n  .cb-page-head .cb-page-title {\n    width: 90%;\n    position: absolute;\n    top: 80px;\n    right: 50px; }\n    .cb-page-head .cb-page-title h1 {\n      color: lightslategrey;\n      font-size: 1.5rem; }\n\n.page-content {\n  max-width: 700px;\n  min-height: 500px; }\n  .page-content p {\n    margin: 0px;\n    padding: 10px 0px; }\n  .page-content h3, .page-content h4 {\n    padding-top: 20px;\n    color: lightslategrey; }\n  .page-content h3 {\n    font-size: 1.4em; }\n  .page-content h4 {\n    font-size: 1em; }\n  .page-content p#last {\n    margin-bottom: 50px; }\n  .page-content p#importanT {\n    color: grey;\n    padding: 5px 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    return TermsComponent;
}());
TermsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-terms',
        template: __webpack_require__("../../../../../src/app/containers/terms/terms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/terms/terms.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TermsComponent);

//# sourceMappingURL=terms.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/blogs/newblog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"main-container\">\n    <div *ngIf=\"blogs && blogs.length > 5\" class=\"pagination\">\n        <pagination-controls (pageChange)=\"page = $event\" class=\"pg-pagination\"></pagination-controls>\n    </div>\n  <div>\n \n    <table class=\"table table-striped\">\n      <thead class=\"thead-inverse\">\n        <tr>\n          <th>Image</th>\n          <th>Title</th>\n          <th>Snippet</th>\n          <th>Post Date</th>\n        \n          <th><i style=\"cursor:pointer; font-size:18px;\" routerLink=\"/dashboard/newblog\" class=\"fa fa-plus\" aria-hidden=\"true\"></i></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let blog of blogs | paginate: {itemsPerPage: pageSize, currentPage: page}\">\n          <td>\n            <img style=\"width:80px;\" [src]=\"blog.data.blogImage\" alt=\"\">\n          </td>\n          <td>{{blog.data.title}}</td>\n          <td>{{blog.data.snippet}}</td>\n          <td>{{blog.data.postdate | date}}</td>\n         <td> <i (click)=\"removeBlog(blog)\" class=\"fa fa-times\" aria-hidden=\"true\"></i> </td>\n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/dashboard/blogs/newblog/blog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#formContainer {\n  margin-bottom: 50px;\n  margin-top: 10px; }\n  #formContainer .formWrapper {\n    margin: 0 auto;\n    position: relative;\n    width: 700px; }\n    #formContainer .formWrapper .addP {\n      position: absolute;\n      right: 50px; }\n    #formContainer .formWrapper .formTitle {\n      width: 200px;\n      margin: 0 auto;\n      text-align: center; }\n    #formContainer .formWrapper .imageup {\n      margin: 0px;\n      padding: 0px;\n      height: 300px;\n      overflow: hidden;\n      position: relative;\n      text-align: center; }\n      #formContainer .formWrapper .imageup img {\n        position: relative;\n        width: 100%;\n        margin-top: -150px;\n        z-index: 100; }\n      #formContainer .formWrapper .imageup input {\n        position: relative;\n        margin: 0 auto;\n        padding: 50px;\n        z-index: 1000; }\n      #formContainer .formWrapper .imageup .progress {\n        position: absolute;\n        top: 50%;\n        margin-top: -5%; }\n        #formContainer .formWrapper .imageup .progress i {\n          font-size: 50px;\n          color: #fff; }\n        #formContainer .formWrapper .imageup .progress .progress-bar {\n          margin: 0 auto; }\n  #formContainer .submitBtn {\n    text-align: center; }\n    #formContainer .submitBtn .btn {\n      background-color: slategray;\n      border-color: slategray; }\n  #formContainer .inputbtn {\n    position: relative;\n    margin-top: 5px;\n    background-color: slategray;\n    border-color: slategray; }\n    #formContainer .inputbtn p {\n      position: absolute; }\n    #formContainer .inputbtn input {\n      position: relative;\n      z-index: 10000; }\n\n.hidden {\n  opacity: 0;\n  width: 100px; }\n\n.pagination {\n  position: relative;\n  min-width: 300px;\n  left: 50%;\n  margin-left: -150px;\n  margin-top: 10px; }\n  .pagination .ngx-pagination .current {\n    background: lightslategray !important; }\n  .pagination li .current {\n    background: lightslategray !important; }\n  .pagination pagination-controls {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/blogs/newblog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogPost = (function () {
    function BlogPost(blogService) {
        this.blogService = blogService;
        this.pageSize = 5;
        this.page = 1;
    }
    BlogPost.prototype.ngOnInit = function () {
        var _this = this;
        this.blogService.getCacheBlog().subscribe(function (blogs) {
            _this.blogs = blogs;
        });
    };
    BlogPost.prototype.removeBlog = function (blog) {
        var R = confirm("Are you sure");
        if (R == true) {
            this.blogService.deleteBlog(blog);
        }
    };
    return BlogPost;
}());
BlogPost = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'post-blog',
        template: __webpack_require__("../../../../../src/app/dashboard/blogs/newblog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/blogs/newblog/blog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object])
], BlogPost);

var _a;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/blogs/newblog/newblog.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\" id=\"formContainer\">\n    <div class=\"formWrapper\">\n        <form novalidate [formGroup]=\"blogForm\" (ngSubmit)=\"createBlog(blogForm.value)\">\n            <div class=\"\">\n                \n                <div class=\"imageup jumbotron\">\n                    <!-- <div *ngIf=\"!progress\" class=\"progress\">\n                        <i class=\"fa fa-circle-o-notch fa-spin\" aria-hidden=\"true\"></i>\n                        <div class=\"progress-bar\"  style=\"width: 25%;\" ><h3 style=\"color:lightslategrey; opacity:0.5\">BLOG IMAGE</h3></div>\n                    </div> -->\n                    <div *ngIf=\"progress\" class=\"progress\">\n                        <i class=\"fa fa-circle-o-notch fa-spin\" aria-hidden=\"true\"></i>\n                        <div class=\"progress-bar\"  style=\"width: 25%;\" >{{progress}}% done..</div>\n                    </div>\n                    <img [src]=\"returnImage\"  alt=\"\">\n                    \n                    <input hidden class=\"form-control\" required type=\"text\" formControlName=\"blogImage\">\n                </div>\n                <div class=\"btn btn-primary inputbtn\">\n                    <p>Select Image</p>\n                    <input (change)=\"onChange($event)\" class=\"hidden\" type=\"file\">\n                </div>\n                \n              \n            </div>\n      \n\n            <div class=\"input-field\">\n                <label for=\"title\">Blog Title</label>\n                <input id=\"title\" formControlName=\"title\" type=\"text\" required>\n            </div>\n            <div class=\"input-field\">\n                <label for=\"snipet\">Snippet</label>\n                <input id=\"snipet\" formControlName=\"snippet\" type=\"text\" required>\n            </div>\n                \n            <div class=\"input-field\">\n                <textarea id=\"body\" formControlName=\"body\"  class=\"materialize-textarea\"></textarea>\n                <label for=\"body\">Body</label>\n            </div>\n            \n            <!-- <div class=\"container formBody\">\n            \n                <div class=\"form-group row \" formArrayName=\"body\">\n                    <div class=\"singleP\" *ngFor=\"let paragraph of blogForm.control.body.control; let i=index\">\n    \n                        <div [formGroupName]=\"i\">\n                            \n                            <span *ngIf=\"blogForm.control.body.control.length > 1\">\n                                <i  style=\"cursor:pointer\" (click)=\"removeParagraph(i)\" class=\"fa fa-times remove-cart-i\" aria-hidden=\"true\"></i>\n                            </span>\n                            <div class=\"col-lg-12\">\n                            \n                                <div style=\"margin: 5px 0px;\" class=\"col-lg-12\">\n                                    <input class=\"form-control\" type=\"text\" placeholder=\"Optional header\" formControlName=\"header\">\n                                </div>\n                              \n                            </div>\n                            \n                            <div class=\"col-lg-12\">\n                         \n                                <div class=\"col-lg-12\">\n                                    <textarea rows=\"2\"class=\"form-control\" type=\"text\" placeholder=\"This is a paragraph\" formControlName=\"paragraph\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div> -->\n\n            <!-- <div class=\"addP\">\n                <span><i (click)=\"addParagraph()\" style=\"cursor:pointer; font-size:18px;\" class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n            </div> -->\n            <div class=\"form-group submitBtn\" >\n                <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n                <button routerLink=\"/dashboard/blogs\" class=\"btn btn-primary\" >Cancel</button>\n            </div>\n        </form>\n    </div>\n  \n</section>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/blogs/newblog/newblog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBlog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

var NewBlog = (function () {
    function NewBlog(blogService, _fb, _router) {
        this.blogService = blogService;
        this._fb = _fb;
        this._router = _router;
        this.title = "Blog Works";
        this.headers = false;
        this.returnImage = ""; //"https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/blogimages%2FDSCN0715-min-min.JPG?alt=media&token=1a1de55a-2c16-49dd-a5cd-b171b8c38a7f";
        this.blogForm = _fb.group({
            title: "",
            blogImage: "",
            image: "",
            snippet: "",
            postdate: new Date().toString(),
            body: ""
        });
    }
    NewBlog.prototype.onChange = function ($event) {
        $event.stopPropagation();
        var newFile = $event.target.files[0];
        this.uploadImage(newFile);
        // console.log(newFile);
    };
    NewBlog.prototype.ngOnInit = function () {
    };
    // initParagraph(){
    //     return this._fb.group({
    //         header: "",
    //         paragraph: ""
    //     })
    // }
    // addParagraph(){
    //     const control =<FormArray> this.blogForm.controls['body'];
    //     control.push(this.initParagraph());
    // }
    // removeParagraph(i:number){
    //     const control =<FormArray> this.blogForm.controls['body'];
    //     control.removeAt(i);
    // }
    // toggleHeader(){
    //     this.headers = this.headers? true : false;
    // }
    NewBlog.prototype.createBlog = function (blog) {
        // console.log(blog);
        this.blogService.createBlog(blog);
        this._router.navigate(["/dashboard/blogs"]);
    };
    //Uploading Image to firebase
    NewBlog.prototype.uploadImage = function (selectedFile) {
        var _this = this;
        var filename = selectedFile.name;
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref('/blogimages/' + filename);
        var uploadTask = storageRef.put(selectedFile);
        uploadTask.on('state_changed', function (snapshot) {
            console.log("Uploading file......");
            // this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;    
            // let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
            // this.progress = Math.round(progress);
            // console.log('Upload is ' + progress + '% done');
            // switch (snapshot.state) {
            //     case firebase.storage.TaskState.PAUSED: // or 'paused'
            //     console.log('Upload is paused');
            //     break;
            //     case firebase.storage.TaskState.RUNNING: // or 'running'
            //     console.log('Upload is running');
            //     break;
            // }
        }, function (error) {
            console.log(error);
            // Handle unsuccessful uploads
        }, function () {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            var downloadURL = uploadTask.snapshot.downloadURL;
            _this.returnImage = uploadTask.snapshot.downloadURL;
            // localStorage.setItem('downloadURL', (downloadURL) );
            _this.blogForm.patchValue({
                blogImage: uploadTask.snapshot.downloadURL,
                image: filename
            });
            console.log(downloadURL);
        });
    };
    return NewBlog;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('change', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NewBlog.prototype, "onChange", null);
NewBlog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-blog',
        template: __webpack_require__("../../../../../src/app/dashboard/blogs/newblog/newblog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/blogs/newblog/blog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], NewBlog);

var _a, _b, _c;
//# sourceMappingURL=newblog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"main-container\">\n    <div *ngIf=\"contacts && contacts.length > 5\" class=\"pagination\">\n        <pagination-controls (pageChange)=\"page = $event\" class=\"pg-pagination\"></pagination-controls>\n    </div>\n  <table class=\"centered\">\n    <thead>\n      <tr>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Email</th>\n        <th>Telephone</th>\n        <th>Message</th>\n        <th></th>\n       \n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let contact of contacts | paginate: { itemsPerPage: pageSize, currentPage: page }\">\n        <td>{{contact.firstName}}</td>\n        <td>{{contact.lastName}}</td>\n        <td>{{contact.email}}</td>\n        <td>{{contact.telephone}}</td>\n        \n        <td><a style=\"color: orangered; cursor:poi\" (click)=\"seeContact(contact)\" >read message</a></td>\n        <td><i (click)=\"removeContact(contact.$key)\" class=\"material-icons\">clear</i></td>\n      </tr>\n\n    </tbody>\n  </table>\n  <div class=\"display-contact\" *ngIf=\"showMsg\">\n    <div class=\"jumbotron-container\">\n      \n      <div class=\"jumbotron\">\n        <h4>From: {{singlecontact.firstName}}</h4>\n        <p>message: {{singlecontact.message}}</p>\n      </div>\n      <button (click)=\"closeMsg()\" class=\"btn btn-danger\" type=\"button\">close</button>\n    </div>\n  </div>\n</section>\n\n<div *ngIf=\"contacts && contacts.length < 1\" class=\"container load-item\">\n      <div class=\"progress-loading\" >\n        <div class=\"preloader-wrapper big active\">\n          <div class=\"spinner-layer spinner-blue-only\">\n            <div class=\"circle-clipper left\">\n              <div class=\"circle\"></div>\n            </div><div class=\"gap-patch\">\n              <div class=\"circle\"></div>\n            </div><div class=\"circle-clipper right\">\n              <div class=\"circle\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/contacts/contacts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table tbody td {\n  font-size: 12px; }\n\n.pagination {\n  position: relative;\n  width: 300px;\n  left: 50%;\n  margin-left: -150px;\n  margin-top: 10px; }\n  .pagination .ngx-pagination .current {\n    background: lightslategray !important; }\n  .pagination li .current {\n    background: lightslategray !important; }\n  .pagination pagination-controls {\n    width: 100%; }\n\n.display-contact {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  background-color: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  height: 100vh;\n  z-index: 10000; }\n  .display-contact .jumbotron-container {\n    position: relative;\n    width: 500px;\n    height: 400px;\n    top: 20%;\n    left: 50%;\n    margin-left: -250px; }\n    .display-contact .jumbotron-container .jumbotron {\n      margin-top: 20px; }\n\n.load-item {\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 150px; }\n  .load-item .progress-loading {\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactsComponent = (function () {
    function ContactsComponent(appService) {
        this.appService = appService;
        this.page = 1;
        this.pageSize = 5;
        this.contacts = [];
        this.singlecontact = {};
        this.showMsg = false;
    }
    ContactsComponent.prototype.seeContact = function (contact) {
        this.singlecontact = contact;
        this.showMsg = true;
    };
    ContactsComponent.prototype.closeMsg = function () {
        this.showMsg = false;
    };
    ContactsComponent.prototype.removeContact = function (key) {
        var D = confirm("Are you sure?");
        if (D == true) {
            this.appService.deleteContact(key);
        }
    };
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getContacts().subscribe(function (contact) {
            _this.contacts = contact;
        });
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contacts',
        template: __webpack_require__("../../../../../src/app/dashboard/contacts/contacts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/contacts/contacts.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */]) === "function" && _a || Object])
], ContactsComponent);

var _a;
//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/customers/customers.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"main-container\">\n\n  <div>\n      <div *ngIf=\"customers && customers.length > 5\" class=\"pagination\">\n          <pagination-controls (pageChange)=\"page = $event\" class=\"pg-pagination\"></pagination-controls>\n      </div>\n \n    <table class=\"centered\">\n      <thead >\n        <tr>\n          <th>Id</th>\n          <th>Name</th>\n          <th>Sex</th>\n          <th>Email</th>\n          <th>Telephone</th>\n          <th>Address</th>\n          <th>Postcode</th>\n          <th>City</th>\n          <th>Country</th>\n          <th>Date</th>\n          <th *ngIf=\"togg\" (click)=\"getAll()\">All</th>\n          <th *ngIf=\"!togg\" (click)=\"getFew()\">Few</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let customer of customers | paginate: { itemsPerPage: pageSize, currentPage: page }\">\n          <td>{{customer.id}}</td>\n          <td>{{customer.firstName+\" \"+customer.lastName}}</td>\n          <td>{{customer.gender}}</td>\n          <td>{{customer.email}}</td>\n          <td>{{customer.telephone}}</td>\n          <td>{{customer.addressOne+\" \"+customer.addressTwo}}</td>\n          <td>{{customer.postCode}}</td>\n          <td>{{customer.city}}</td>\n          <td>{{customer.country}}</td>\n          <td>{{customer.createdAt | date}}</td>\n          <td><i (click)=\"remoteCustomer(customer.key)\" style=\"cursor:pointer\"  class=\"material-icons\">clear</i></td>\n        </tr>\n\n      </tbody>\n    </table>\n    <!-- <div class=\"pagination\">\n        <pagination-controls (pageChange)=\"page = $event\" class=\"pg-pagination\"></pagination-controls>\n    </div> -->\n  </div>\n</section>\n<div *ngIf=\"customers && customers.length < 1\" class=\"container load-item\">\n      <div class=\"progress-loading\" >\n        <div class=\"preloader-wrapper big active\">\n          <div class=\"spinner-layer spinner-blue-only\">\n            <div class=\"circle-clipper left\">\n              <div class=\"circle\"></div>\n            </div><div class=\"gap-patch\">\n              <div class=\"circle\"></div>\n            </div><div class=\"circle-clipper right\">\n              <div class=\"circle\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/customers/customers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table tbody td {\n  font-size: 12px; }\n\n.pagination {\n  position: relative;\n  width: 300px;\n  left: 50%;\n  margin-left: -150px;\n  margin-top: 10px; }\n  .pagination pagination-controls {\n    width: 100%; }\n\n.load-item {\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 150px; }\n  .load-item .progress-loading {\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/customers/customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentications_auth_service__ = __webpack_require__("../../../../../src/app/authentications/auth-service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomersComponent = (function () {
    function CustomersComponent(cartService, authService) {
        this.cartService = cartService;
        this.authService = authService;
        this.page = 1;
        this.pageSize = 5;
        this.togg = true;
    }
    CustomersComponent.prototype.remoteCustomer = function (key) {
        var D = confirm("Are you sure you want to permanently delete this customer?");
        if (D == true) {
            // this.cartService.deleteCustomerDetails(key);
            this.authService.deleteAccount(key);
        }
    };
    CustomersComponent.prototype.getAll = function () {
        this.customers = this.allCustomers;
        this.togg = false;
    };
    CustomersComponent.prototype.getFew = function () {
        this.getAccounts();
        this.togg = true;
    };
    CustomersComponent.prototype.ngOnInit = function () {
        // this.cartService.getAllCustomerDetails().subscribe((customer)=>{
        //   // this.customers = customer;
        // });
        this.getAccounts();
    };
    CustomersComponent.prototype.getAccounts = function () {
        var _this = this;
        this.authService.getAccounts()
            .map(function (snapshot) {
            var dataAcc = [];
            snapshot.forEach(function (doc) {
                var data = doc.payload.val();
                var key = doc.key;
                dataAcc.push(__assign({}, data, { key: key }));
            });
            return dataAcc;
        }).subscribe(function (account) {
            _this.customers = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](account, { "active": true });
            _this.allCustomers = account;
        });
    };
    return CustomersComponent;
}());
CustomersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customers',
        template: __webpack_require__("../../../../../src/app/dashboard/customers/customers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/customers/customers.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__["a" /* CheckOutService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentications_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentications_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], CustomersComponent);

var _a, _b;
//# sourceMappingURL=customers.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-route/dashboard-route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRouteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/dashboard/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_list_order_list_component__ = __webpack_require__("../../../../../src/app/dashboard/order-list/order-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_product_new_product_component__ = __webpack_require__("../../../../../src/app/dashboard/new-product/new-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__update_product_update_product_component__ = __webpack_require__("../../../../../src/app/dashboard/update-product/update-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/dashboard/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customers_customers_component__ = __webpack_require__("../../../../../src/app/dashboard/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_list_item_order_component__ = __webpack_require__("../../../../../src/app/dashboard/order-list/item-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blogs_newblog_newblog_component__ = __webpack_require__("../../../../../src/app/dashboard/blogs/newblog/newblog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__blogs_newblog_blog_component__ = __webpack_require__("../../../../../src/app/dashboard/blogs/newblog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__transaction_transaction_component__ = __webpack_require__("../../../../../src/app/dashboard/transaction/transaction.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var dashRoutes = [
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__product_list_product_list_component__["a" /* ProductListComponent */] },
            { path: 'products-list', component: __WEBPACK_IMPORTED_MODULE_4__product_list_product_list_component__["a" /* ProductListComponent */] },
            { path: 'orders-list', component: __WEBPACK_IMPORTED_MODULE_5__order_list_order_list_component__["a" /* OrderListComponent */] },
            { path: 'new-product', component: __WEBPACK_IMPORTED_MODULE_6__new_product_new_product_component__["a" /* NewProductComponent */] },
            { path: 'update-product', component: __WEBPACK_IMPORTED_MODULE_7__update_product_update_product_component__["a" /* UpdateProductComponent */] },
            { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_8__contacts_contacts_component__["a" /* ContactsComponent */] },
            { path: 'customers', component: __WEBPACK_IMPORTED_MODULE_9__customers_customers_component__["a" /* CustomersComponent */] },
            { path: 'order/:id', component: __WEBPACK_IMPORTED_MODULE_10__order_list_item_order_component__["a" /* OrderViewComponent */] },
            { path: 'blogs', component: __WEBPACK_IMPORTED_MODULE_12__blogs_newblog_blog_component__["a" /* BlogPost */] },
            { path: 'newblog', component: __WEBPACK_IMPORTED_MODULE_11__blogs_newblog_newblog_component__["a" /* NewBlog */] },
            { path: 'transactions', component: __WEBPACK_IMPORTED_MODULE_13__transaction_transaction_component__["a" /* TransactionComponent */] }
        ]
    }
];
// canActivate:[AuthGuard]
var DashboardRouteModule = (function () {
    function DashboardRouteModule() {
    }
    return DashboardRouteModule;
}());
DashboardRouteModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forChild(dashRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
        ],
        declarations: []
    })
], DashboardRouteModule);

//# sourceMappingURL=dashboard-route.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"db-page-container\">\n  <div class=\"db-page-head\">\n    <!--<img src=\"assets/Coffee-Producers.jpeg\"  alt=\"\">-->\n    <div class=\"db-page-title\">\n      <h1>Admin<span style=\"color: #f48024\">DashBoard</span></h1>\n    </div>\n  </div>\n</section>\n<section class=\"dashboard-container\">\n  <div class=\"dashboard container\">\n    <div class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n          <ul class=\"dash-list navbar-nav mr-auto container\">\n              \n              <li class=\"list-item\">\n                <a routerLink=\"/dashboard/products-list\" class=\"nav-link\" routerLinkActive=\"active\">Products</a>\n                </li>\n              <li  class=\"list-item\">\n                <a routerLink=\"/dashboard/customers\" class=\"nav-link\" routerLinkActive=\"active\">Customers</a>\n              </li>\n              <li  class=\"list-item\">\n                <a routerLink=\"/dashboard/orders-list\" class=\"nav-link\" routerLinkActive=\"active\" >Orders</a>\n              </li>\n              <li  class=\"list-item\">\n                  <a routerLink=\"/dashboard/transactions\" class=\"nav-link\" routerLinkActive=\"active\" >Transactions</a>\n                </li>\n               <li  class=\"list-item\">\n                <a routerLink=\"/dashboard/contacts\" class=\"nav-link\" routerLinkActive=\"active\" >Contacts</a>\n              </li>\n              <li  class=\"list-item\">\n                <a style=\"color:#f48024\" routerLink=\"/dashboard/blogs\" class=\"nav-link\" routerLinkActive=\"active\" >Blogs</a>\n              </li>\n              <!--<li  class=\"list-item\">\n                <a routerLink=\"/dashboard/items\" class=\"nav-link\" routerLinkActive=\"active\" >Items</a>\n              </li>-->\n          </ul>\n        </div>\n   </div>\n</section>\n<div class=\"out-let\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active {\n  color: red; }\n\n.db-page-container .db-page-head {\n  background-color: #35414C;\n  width: 100%;\n  height: 150px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  border-radius: 0px 0px 0px 0px; }\n  .db-page-container .db-page-head img {\n    opacity: 0.2;\n    position: fixed;\n    margin-bottom: 0px;\n    margin-top: -280px;\n    width: 100%;\n    min-width: 1200px; }\n  .db-page-container .db-page-head .db-page-title {\n    width: 90%;\n    position: absolute;\n    top: 80px;\n    right: 50px; }\n    .db-page-container .db-page-head .db-page-title h1 {\n      color: lightslategrey;\n      font-size: 1.5rem; }\n\n.dashboard-container {\n  margin: 0px;\n  padding: 0px;\n  height: 50px;\n  background-color: lightslategrey !important; }\n  .dashboard-container .dashboard {\n    text-align: center; }\n    .dashboard-container .dashboard .navbar {\n      background-color: transparent !important;\n      height: 50px;\n      position: relative;\n      padding: .0rem 1rem;\n      text-align: center; }\n      .dashboard-container .dashboard .navbar .dash-list {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin: 0 auto;\n        padding: 10px 0px; }\n        .dashboard-container .dashboard .navbar .dash-list .list-item {\n          margin: 0 20px;\n          color: lightgrey; }\n          .dashboard-container .dashboard .navbar .dash-list .list-item .nav-link {\n            color: lightgrey; }\n\n.out-let {\n  min-height: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_route_dashboard_route_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-route/dashboard-route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/dashboard/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_list_order_list_component__ = __webpack_require__("../../../../../src/app/dashboard/order-list/order-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_product_new_product_component__ = __webpack_require__("../../../../../src/app/dashboard/new-product/new-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__update_product_update_product_component__ = __webpack_require__("../../../../../src/app/dashboard/update-product/update-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/dashboard/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__customers_customers_component__ = __webpack_require__("../../../../../src/app/dashboard/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__order_list_item_order_component__ = __webpack_require__("../../../../../src/app/dashboard/order-list/item-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__blogs_newblog_newblog_component__ = __webpack_require__("../../../../../src/app/dashboard/blogs/newblog/newblog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blogs_newblog_blog_component__ = __webpack_require__("../../../../../src/app/dashboard/blogs/newblog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_test_service__ = __webpack_require__("../../../../../src/app/services/test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__transaction_transaction_component__ = __webpack_require__("../../../../../src/app/dashboard/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_17_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_3__dashboard_route_dashboard_route_module__["a" /* DashboardRouteModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_5__product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__order_list_order_list_component__["a" /* OrderListComponent */], __WEBPACK_IMPORTED_MODULE_7__new_product_new_product_component__["a" /* NewProductComponent */],
            __WEBPACK_IMPORTED_MODULE_8__update_product_update_product_component__["a" /* UpdateProductComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contacts_contacts_component__["a" /* ContactsComponent */], __WEBPACK_IMPORTED_MODULE_10__customers_customers_component__["a" /* CustomersComponent */],
            __WEBPACK_IMPORTED_MODULE_11__order_list_item_order_component__["a" /* OrderViewComponent */], __WEBPACK_IMPORTED_MODULE_12__blogs_newblog_newblog_component__["a" /* NewBlog */], __WEBPACK_IMPORTED_MODULE_13__blogs_newblog_blog_component__["a" /* BlogPost */],
            __WEBPACK_IMPORTED_MODULE_16__transaction_transaction_component__["a" /* TransactionComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__services_blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_15__services_test_service__["a" /* TestService */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/new-product/new-product.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container fp-page-content\">\n    <!--<a routerLink=\"/products\"><button class=\"btn btn-default\">Go to Products</button></a>-->\n    <form  [class.has-success]=\"newproduct.valid\" novalidate [formGroup]=\"newproduct\" (ngSubmit)=\"createProd(newproduct.value)\">\n        <div class=\"form-group\">\n            <h6>Product Id: <span>0{{lastId}}</span></h6>\n            <p *ngIf=\"errMsg\" style=\"color:red\">{{errMsg}}</p>\n        </div>\n        <div class=\"row\">\n            <div class=\"input-field col m6 l6\">\n                <label for=\"name\">Name</label>\n                <input  type=\"text\" class=\"form-control\" formControlName=\"name\" required>\n            </div>\n            <div class=\"input-field col l6\">\n                <label for=\"code\">Product Code</label>\n                <input id=\"code\" type=\"text\" formControlName=\"code\" required pattern=\"[0-9]+\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"input-field col m6 l6\">\n                <label for=\"old_price\">Old Price</label>\n                <input id=\"old_price\" type=\"text\"  formControlName=\"oldprice\" required pattern=\"[0-9]+\\.?[0-9]+\"> \n            </div>\n            <div class=\"input-field col m6 l6\">\n                <label for=\"new_price\">Now Price</label>\n                <input id=\"new_price\" type=\"text\"  formControlName=\"price\" required pattern=\"[0-9]+\\.?[0-9]+\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col l6\">\n                <select class=\"custom-select\" formControlName=\"tag\">\n                    <option value=\"\" disabled selected>Select Tag</option>\n                    <option value=\"coffees\">Coffees</option>\n                    <option value=\"machines\">Machine</option>\n                    <option value=\"accessories\">Accessories</option>\n                </select>\n            </div>\n           \n        </div>\n        <div class=\"row\" formGroupName = \"category\">\n            <div class=\"input-field col col-lg-6\">\n                <label for=\"category\">Category Name</label>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\"  required>\n   \n            </div>\n            <div class=\"input-field col col-lg-6\">\n                <label for=\"category\">Category Group</label>\n                <input type=\"text\" formControlName=\"group\" class=\"form-control\"  required>\n\n            </div>\n        </div>\n        <!--Add Blend, Size, and Roast-->\n        <div class=\"row\">\n            <div class=\"form-group col-lg-4\">\n                <!-- <label for=\"blend\">Blend</label> -->\n                <!--<input type=\"text\" class=\"form-control\" formControlName=\"blend\" placeholder=\"Blend\">-->\n                <select class=\"custom-select\" type=\"text\"  formControlName=\"blend\">\n                    <option value=\"\" disabled selected>Choose Blend</option>\n                    <option value=\"Coffee beans\">Coffee Beans</option>\n                    <option value=\"Espresso\">Espresso</option>\n                    <option value=\"Nespresso\">Nespresso</option>\n                    <option value=\"Paper Filter\">Paper Filter</option>\n                    <option value=\"French Press\">French Press</option>\n                    <option value=\"Metal Filter\">Metal Filter</option>\n                    <option value=\"Turkish Fine\">Turkish Fine</option>\n                </select>\n            </div>\n            <div class=\"form-group col-lg-4\">\n                <!-- <label for=\"size\">Size</label> -->\n                <!--<input type=\"text\"  class=\"form-control\" formControlName=\"size\" placeholder=\"Size\">-->\n                <select class=\"custom-select\" type=\"text\" formControlName=\"size\">\n                    <option value=\"\" disabled selected>Choose Size</option>\n                    <option value=\"1kg\">1Kg</option>\n                    <option value=\"500g\">500g</option>\n                    <option value=\"250g\">250g</option>\n                </select>\n            </div>\n            <div class=\"form-group col-lg-4\">\n                <!-- <label for=\"roast\">Roast</label> -->\n                <!--<input type=\"text\" class=\"form-control\" formControlName=\"roast\" placeholder=\"Roast\">-->\n                <select class=\"custom-select\" type=\"text\" formControlName=\"roast\">\n                    <option value=\"\" disabled selected>Choose Roast</option>\n                    <option value=\"Light Roast\">Light Roast</option>\n                    <option value=\"Medium Roast\">Medium Roast</option>\n                    <option value=\"Dark Roast\">Dark Roast</option>\n                </select>\n            </div>\n        </div>\n        \n        <div class=\"input-field myinput\">\n            <label for=\"price\">Description</label>\n            <textarea rows=\"5\" class=\"materialize-textarea\" formControlName=\"description\" required ></textarea>\n        </div>\n        <button class=\"btn\"  [class.btn-success]=\"newproduct.valid\" type=\"submit\">Add Product</button>\n        <span><a routerLink=\"/dashboard/products-list\">Cancel</a></span>\n    </form>\n    <!--<div>\n        <p>Validate: {{newproduct.valid | json}}</p>\n    </div>-->\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/new-product/new-product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fp-page-content {\n  max-width: 700px;\n  padding: 20px 0px 50px 0px; }\n  .fp-page-content p {\n    text-align: center;\n    padding: 20px 0px; }\n  .fp-page-content h4 {\n    padding-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/new-product/new-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_test_service__ = __webpack_require__("../../../../../src/app/services/test.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { TestProduct } from '../../services/test.product';
var firebase;
var NewProductComponent = (function () {
    function NewProductComponent(fb, upload, productService, router, _location, testService) {
        this.fb = fb;
        this.upload = upload;
        this.productService = productService;
        this.router = router;
        this._location = _location;
        this.testService = testService;
        this.newproduct = fb.group({
            id: "",
            name: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(2)],
            oldprice: "",
            price: [""],
            code: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(4)],
            blend: "",
            size: "",
            tag: "",
            roast: "",
            imageUrl: "",
            category: this.category(),
            description: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(20)]
        });
    }
    NewProductComponent.prototype.category = function () {
        return this.fb.group({
            name: "",
            group: ""
        });
    };
    NewProductComponent.prototype.patchValue = function () {
        this.newproduct.patchValue({
            imageUrl: "image/image.jpg",
            id: this.lastId || 100
        });
    };
    NewProductComponent.prototype.storeImage = function () {
        this.upload.uploadImage(this.selectedFile);
    };
    NewProductComponent.prototype.createProd = function (product) {
        var _this = this;
        //  console.log(product);
        this.productService.addProduct(product)
            .then(function (res) {
            console.log('Product Created Successfully');
            _this.router.navigate(['/dashboard/products-list']);
        }, function (err) {
            console.log(err);
            _this.errMsg = "Product was not added! please try again.";
        });
        //testing service
        // this.testService.addProduct(product);
    };
    NewProductComponent.prototype.getLastProdId = function () {
        var _this = this;
        this.productService.getProduct().subscribe(function (data) {
            _this.lastProduct = __WEBPACK_IMPORTED_MODULE_3_lodash__["last"](data);
            _this.lastId = Number(_this.lastProduct.id) + 1;
            //  console.log(this.lastId + 1);
            _this.patchValue();
        });
    };
    NewProductComponent.prototype.ngOnInit = function () {
        this.getLastProdId();
    };
    NewProductComponent.prototype.ngAfterContentInit = function () {
    };
    return NewProductComponent;
}());
NewProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-product',
        template: __webpack_require__("../../../../../src/app/dashboard/new-product/new-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/new-product/new-product.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_test_service__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_test_service__["a" /* TestService */]) === "function" && _f || Object])
], NewProductComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=new-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/order-list/item-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"content\">\n    <div *ngIf=\"order\" class=\"order-info card white\">\n        <div class=\"card-content gray-text\">\n            <span class=\"card-title\">{{order.customerName}}</span>\n            <p>{{order.address}}</p>\n            <p>{{order.city}}</p>\n            <p>{{order.postcode}}</p>\n            <p>{{order.country}}</p>\n        </div>\n        <div class=\"card-action\">\n            <a href=\"#\">Print Label</a>\n        </div>\n    </div>\n    <div class=\"items\">\n        <table *ngIf=\"order && order.basket\">\n            <thead>\n                <tr>\n                    <th>Image</th>\n                    <th>Item Name</th>\n                    <th>Item Price</th>\n                    <th>Qty</th>\n                    <th>Size</th>\n                </tr>\n            </thead>\n    \n            <tbody>\n                <tr *ngFor=\"let order of (order.basket)\">\n                <td>\n                    <img style=\"width: 50px;\" [src]=\"order.imageUrl\" alt=\"\">\n                </td>\n                <td>{{order.name}}</td>\n                <td>{{order.price | currency: 'GBP':true}}</td>\n                <td>{{order.qty}}</td>\n                <td>{{order.size}}</td>\n                </tr>\n            </tbody>\n        </table>\n        \n        <!-- <div class=\"row\" *ngIf=\"order && order.basket\">\n            <div *ngFor=\"let order of (order.basket)\">\n                \n            <div class=\"row\"></div>\n            <hr>\n\n            <div class=\"col col-sm-4\">\n                <h5 style=\"color: #f48024\" > {{order.name}}</h5>\n                <img [src]=\"order.image\" style=\"width: 80px\" alt=\"coffee pix\">\n            </div>\n            <div class=\"col col-sm-4 items\">\n                <p><strong>Price:</strong> {{order.price | currency: 'GBP': true}}</p>\n                <p><strong>Blend:</strong>  {{order.type}}</p>\n                \n            </div>\n            <div class=\"col col-sm-4 items\">\n                \n                <p><strong>Qty:</strong>  {{order.qty}}</p>\n                <p><strong>Size:</strong>  {{order.size}}</p>\n            </div>\n        </div>\n            \n        </div> -->\n        <button routerLink=\"/dashboard/orders-list\" class=\"btn btn-primary\">Back</button>\n    </div>\n\n    </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/order-list/item-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderViewComponent = (function () {
    function OrderViewComponent(orderService, route) {
        this.orderService = orderService;
        this.route = route;
    }
    OrderViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var key = this.route.snapshot.params['key'];
        this.orderService.getSingleOrderWithItems(key)
            .subscribe(function (order) {
            _this.order = order;
            console.log(_this.order);
        });
    };
    return OrderViewComponent;
}());
OrderViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'items',
        template: __webpack_require__("../../../../../src/app/dashboard/order-list/item-order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/order-list/order-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], OrderViewComponent);

var _a, _b;
//# sourceMappingURL=item-order.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/order-list/order-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"table-content main-container\">\n    <div *ngIf=\"orders && orders.length > 5\" class=\"pagination\">\n        <pagination-controls (pageChange)=\"page = $event\" class=\"pg-pagination\"></pagination-controls>\n    </div>\n  <table class=\"centered striped\">\n    <thead >\n      <tr>\n        <th>Status</th>\n        <th>Date</th>\n        <th>Order Id</th>\n        <th>Amount</th>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Telephone</th>\n        <th>Address</th>\n        <th>Postcode</th>\n        <th>City</th>\n        <th>Country</th>\n        <th colspan=\"1\">\n          <i *ngIf=\"spin\" style=\"color:green\" (click)=\"refreshOrder()\" class=\"fa fa-refresh fa-spin fa-1x fa-fw\" aria-hidden=\"true\"></i>\n          <i *ngIf=\"!spin\" (click)=\"refreshOrder()\" class=\"fa fa-refresh fa-1x fa-fw\" aria-hidden=\"true\"></i>\n        </th>      \n      </tr>\n    </thead>\n    <tbody *ngIf=\"railsOrder\">\n      <tr *ngFor=\"let order of orders | paginate: { itemsPerPage: pageSize, currentPage: page }\">\n        <td *ngIf=\"order.status == 'completed'\" style=\"color:green;\">{{order.status}}</td>\n        <td *ngIf=\"order.status == 'pending'\" style=\"color:red;\">{{order.status}}..</td>\n        <td>{{order.createdAt | date}}</td>\n        <th style=\"color: lightslategray; cursor:pointer\" (click)=\"seeOrder(order)\" >{{order.orderId}}</th>\n        <td>{{order.amount | currency: 'GBP':true}}</td>\n        <td>{{order.customerName}}</td>\n        <td>{{order.email}}</td>\n        <td>{{order.telephone}}</td>\n        <td>{{order.address}}</td>\n        <td>{{order.postcode}}</td>\n        <td>{{order.city}}</td>\n        <td>{{order.country}}</td>\n        <td><i style=\"cursor:pointer\" (click)=\"removeOrder(order.key)\" class=\"fa fa-times remove-cart-i\" aria-hidden=\"true\"></i></td>\n      </tr>\n    </tbody>\n  </table>\n</section>\n\n  <div *ngIf=\"orders && orders.length < 1\" class=\"container load-item\">\n      <div class=\"progress-loading\" >\n        <div class=\"preloader-wrapper big active\">\n          <div class=\"spinner-layer spinner-blue-only\">\n            <div class=\"circle-clipper left\">\n              <div class=\"circle\"></div>\n            </div><div class=\"gap-patch\">\n              <div class=\"circle\"></div>\n            </div><div class=\"circle-clipper right\">\n              <div class=\"circle\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n    \n\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/order-list/order-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-content {\n  background-color: lightgrey; }\n\ntable tbody td {\n  font-size: 11px; }\n\n.pagination {\n  position: relative;\n  width: 300px;\n  left: 50%;\n  margin-left: -150px;\n  margin-top: 10px; }\n  .pagination .ngx-pagination .current {\n    background: lightslategray !important; }\n  .pagination li .current {\n    background: lightslategray !important; }\n  .pagination pagination-controls {\n    width: 100%; }\n\n.load-item {\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 150px; }\n  .load-item .progress-loading {\n    text-align: center; }\n\n.items button {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/order-list/order-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderListComponent = (function () {
    function OrderListComponent(orderService, router) {
        this.orderService = orderService;
        this.router = router;
        this.page = 1;
        this.pageSize = 5;
        this.spin = false;
        this.railsOrder = [];
    }
    OrderListComponent.prototype.seeOrder = function (order) {
        // this.sinOrder = order;
        console.log(order);
        this.router.navigate(["/dashboard/order/?", { key: order.key }]);
    };
    OrderListComponent.prototype.removeOrder = function (id) {
        var D = confirm("Are you sure you want to permanently delete this Order?");
        if (D == true) {
            // this.cartService.deleteFinalOrder(id)
            // .subscribe((res)=>{
            //   this.refreshOrder();
            //   console.log(res)
            // });
            // this.router.navigate(["/dashboard/orders-list"]);
        }
        else {
            // this.router.navigate(["/dashboard/orders-list"]);
            this.refreshOrder();
        }
    };
    OrderListComponent.prototype.refreshOrder = function () {
        var _this = this;
        this.spin = true;
        setTimeout(function () { _this.spin = false; }, 1000);
    };
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getOrdersWithId()
            .map(function (snapshot) {
            var orders = [];
            snapshot.forEach(function (doc) {
                var data = doc.payload.val();
                var key = doc.key;
                orders.push(__assign({}, data, { key: key }));
            });
            return orders;
        }).subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    return OrderListComponent;
}());
OrderListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-list',
        template: __webpack_require__("../../../../../src/app/dashboard/order-list/order-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/order-list/order-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], OrderListComponent);

var _a, _b;
//# sourceMappingURL=order-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"product-list main-container\">\n    <div style=\"margin-top: 10px;\" class=\"pagination\">\n        <pagination-controls (pageChange)=\"page = $event\" class=\"pg-pagination\"></pagination-controls>\n    </div>\n\n    <table class=\"centered\">\n    <thead>\n        <tr>\n        <!--<th>Id</th>-->\n        <th>Code</th>\n        <th>Photo</th>\n        <th>Product</th>\n        <th>Price</th>\n        <th>Size</th>\n        <th>Size</th>\n        <th>Cat</th>\n        <th>Group</th>\n        <th>Description</th>\n        <th *ngIf=\"products && products.length\">{{products.length}}</th>\n        <!--<th> <a ><button routerLink=\"/dashboard/new-product\" class=\"btn btn-secondary\">Add</button></a></th>-->\n        <th><i style=\"cursor:pointer; font-size:18px;\" routerLink=\"/dashboard/new-product\" class=\"fa fa-plus\" aria-hidden=\"true\"></i></th>\n\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let product of products | paginate: { itemsPerPage: pageSize, currentPage: page }\">\n        <!--<th scope=\"row\">{{product.id}}</th>-->\n        <th style=\"font-size:14px;\" scope=\"row\">{{product.data.code}}</th>\n        <td>\n            <div class=\"display-image\">\n                <img [src]=\"product.data.imageUrl\" style=\"width:50px\" alt=\"\">\n                <div *ngIf=\"product && product.data.imageUrl\" class=\"file-input\">\n                    <input (change)=\"onChange($event)\" (change)=\"prodKey(product)\" (change)=\"uploadImage()\" type=\"file\" class=\"hidden\">\n                    <span class=\"add\">image</span>\n                </div> \n            </div>\n        </td>\n        \n        <td (click)=\"seeProduct(product)\"><h5 style=\"color: #f48024\"><a  [style.font-size.px]=\"12\" >{{product.data.name}} </a></h5> </td>\n        <td>{{product.data.price | currency: 'GBP' :true}}</td>\n        <td>{{product.data.size}}</td>\n        <td>{{product.data.tag}}</td>\n        <td>{{product.data.category.name}}</td>\n        <td>{{product.data.category.group}}</td>\n        <td><p [style.font-size.px]=\"13\">{{product.data.description}}</p></td>\n        <!--<td > <button class=\"btn btn-default\" (click)=\"getValue(product)\" type=\"\">Edit</button></td>-->\n        <td><i style=\"cursor:pointer; font-size:18px;\" (click)=\"getValue(product)\" class=\"material-icons\" aria-hidden=\"true\">edit</i></td>\n        <td><i style=\"cursor:pointer; font-size:14px; color:#f48024\" (click)=\"deleteProduct(product)\" class=\"material-icons\" aria-hidden=\"true\">clear</i></td>\n        <!--<td><button class=\"btn btn-danger\" (click)=\"deleteProduct(product)\" type=\"\">Remove</button></td>-->\n        </tr>\n        \n    </tbody>\n    </table>\n    <div class=\"pagination\">\n        <pagination-controls (pageChange)=\"page = $event\" class=\"pg-pagination\"></pagination-controls>\n    </div>\n    \n</div>\n\n<div *ngIf=\"products && products.length < 1\" class=\"container load-item\">\n    <div class=\"progress-loading\" >\n      <div class=\"preloader-wrapper big active\">\n        <div class=\"spinner-layer spinner-blue-only\">\n          <div class=\"circle-clipper left\">\n            <div class=\"circle\"></div>\n          </div><div class=\"gap-patch\">\n            <div class=\"circle\"></div>\n          </div><div class=\"circle-clipper right\">\n            <div class=\"circle\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/product-list/product-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table tbody td {\n  font-size: 11px; }\n\n.product-list {\n  margin-bottom: 50px; }\n  .product-list .pagination {\n    position: relative;\n    width: 400px;\n    left: 50%;\n    margin-left: -200px;\n    margin-top: 50px; }\n    .product-list .pagination pagination-controls {\n      width: 100% !important; }\n\n.myinput input {\n  height: 100px; }\n\n.hidden {\n  opacity: 0;\n  width: 50px; }\n\n.display-image {\n  background-color: red;\n  position: absolute;\n  opacity: .8; }\n\n.file-input {\n  position: absolute;\n  top: 10%;\n  width: 50px;\n  opacity: .2;\n  overflow: hidden;\n  background-color: gray; }\n  .file-input:hover {\n    background-color: lightseagreen;\n    cursor: pointer; }\n\nspan.add {\n  position: relative;\n  padding: 0px 5px;\n  text-align: center;\n  color: black;\n  z-index: -1000;\n  font-size: 14px;\n  margin: 0 auto; }\n\n.load-item {\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 150px; }\n  .load-item .progress-loading {\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_test_service__ = __webpack_require__("../../../../../src/app/services/test.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductListComponent = (function () {
    function ProductListComponent(productService, as, af, db, router, testService) {
        this.productService = productService;
        this.as = as;
        this.af = af;
        this.db = db;
        this.router = router;
        this.testService = testService;
        this.page = 1;
        this.pageSize = 5;
        this.data = {};
        this.products = [];
    }
    //===Listening to event in the host html==//
    ProductListComponent.prototype.onChange = function ($event) {
        this.newFile = $event.target.files[0];
        console.log(this.newFile);
    };
    //setting the firebase object key//
    ProductListComponent.prototype.prodKey = function (product) {
        console.log('setting prod key');
        console.log(product);
        this.prodKy = product.key;
    };
    ProductListComponent.prototype.seeProduct = function (product) {
        var id = product.key;
        this.router.navigate(['coffees/' + id]);
    };
    ProductListComponent.prototype.uploadImage = function () {
        var _this = this;
        var filename = this.newFile.name;
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref('/images/products/' + filename);
        var uploadTask = storageRef.put(this.newFile);
        uploadTask.on('state_changed', function (snapshot) {
            // let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
            // switch (snapshot.state) {
            //     case firebase.storage.TaskState.PAUSED: // or 'paused'
            //     console.log('Upload is paused');
            //     break;
            //     case firebase.storage.TaskState.RUNNING: // or 'running'
            //     console.log('Upload is running');
            //     break;
            // }
        }, function (error) {
            console.log(error);
            // Handle unsuccessful uploads
        }, function () {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            var downloadURL = uploadTask.snapshot.downloadURL;
            _this.data = { imageUrl: uploadTask.snapshot.downloadURL, image: filename };
            // localStorage.setItem('downloadURL', (downloadURL) );
            _this.updateVal();
            console.log(downloadURL);
        });
    };
    //==CRUD START HERE==//
    ProductListComponent.prototype.updateVal = function () {
        var key = this.prodKy;
        var ref = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref();
        var dbObject = ref.child("products/" + key);
        dbObject.update(this.data).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ProductListComponent.prototype.deleteProduct = function (product) {
        var D = confirm('Are you sure you wan to delete this product');
        if (D == true) {
            this.productService.removeProduct(product.key, product.image);
        }
        this.router.navigate(['/dashboard/products-list']);
    };
    //==CRUD ENDS HERE==//
    ProductListComponent.prototype.getValue = function (data) {
        this.productService.getUpdateVal(data);
        this.router.navigate(['/dashboard/update-product']);
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProductWithId()
            .subscribe(function (product) {
            _this.products = product;
            // console.log(product);
        });
    };
    return ProductListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('change', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductListComponent.prototype, "onChange", null);
ProductListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/dashboard/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/product-list/product-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_test_service__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_test_service__["a" /* TestService */]) === "function" && _f || Object])
], ProductListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/transaction/transaction.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-container\">\n    <div *ngIf=\"transactions$ && transactions$.length > 5\" class=\"pagination\">\n        <pagination-controls (pageChange)=\"page = $event\" class=\"pg-pagination\"></pagination-controls>\n    </div>\n    <table class=\"centered\">\n        <thead>\n            <tr>\n                <th>Date</th>\n                <th>Intent</th>\n                <th>PayerID</th>\n                <th>PaymentID</th>\n                <th>Customer</th>\n                <th>OrderId</th>\n                <th>Amount</th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr *ngFor=\"let sale of transactions$ | paginate: { itemsPerPage: pageSize, currentPage: page }\">\n                <td>{{sale.createdAt | date}}</td>\n                <td>{{sale.intent}}</td>\n                <td>{{sale.payerID}}</td>\n                <td>{{sale.paymentID}}</td>\n                <td>{{sale.customerName}}</td>\n                <td>{{sale.orderId}}</td>\n                <td>{{sale.amounts | currency: 'GBP': true}}</td>\n            </tr>\n    \n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/transaction/transaction.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table td {\n  font-size: 12px !important; }\n\n.pagination {\n  position: relative;\n  width: 300px;\n  left: 50%;\n  margin-left: -150px;\n  margin-top: 10px; }\n  .pagination .ngx-pagination .current {\n    background: lightslategray !important; }\n  .pagination li .current {\n    background: lightslategray !important; }\n  .pagination pagination-controls {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/transaction/transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionComponent = (function () {
    function TransactionComponent(orderService) {
        this.orderService = orderService;
        this.page = 1;
        this.pageSize = 5;
    }
    TransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getTransactions()
            .subscribe(function (transact) {
            _this.transactions$ = transact;
        });
    };
    return TransactionComponent;
}());
TransactionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'transact-sales',
        template: __webpack_require__("../../../../../src/app/dashboard/transaction/transaction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/transaction/transaction.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === "function" && _a || Object])
], TransactionComponent);

var _a;
//# sourceMappingURL=transaction.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/update-product/update-product.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container fp-page-content\">\n     \n    <form [class.has-success]=\"updateVal.valid\" novalidates [formGroup]=\"updateVal\" (ngSubmit)=\"updateProd(updateVal.value)\">\n            <!-- <div class=\"form-group\">\n                <h6>Product Id: <span>0{{lastId}}</span></h6>\n            </div> -->\n            <div class=\"row\">\n                <div class=\"input-field col m6 l6\">\n                    <label for=\"name\">Name</label>\n                    <input  type=\"text\" class=\"form-control\" formControlName=\"name\" required>\n                </div>\n                <div class=\"input-field col l6\">\n                    <label for=\"code\">Product Code</label>\n                    <input id=\"code\" type=\"text\" formControlName=\"code\" required pattern=\"[0-9]+\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col m6 l6\">\n                    <label for=\"old_price\">Old Price</label>\n                    <input id=\"old_price\" type=\"text\"  formControlName=\"oldprice\" required pattern=\"[0-9]+\\.?[0-9]+\"> \n                </div>\n                <div class=\"input-field col m6 l6\">\n                    <label for=\"new_price\">Now Price</label>\n                    <input id=\"new_price\" type=\"text\"  formControlName=\"price\" required pattern=\"[0-9]+\\.?[0-9]+\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col l6\">\n                    <select class=\"custom-select\" formControlName=\"tag\">\n                        <option value=\"\" disabled selected>Select Tag</option>\n                        <option value=\"coffees\">Coffees</option>\n                        <option value=\"machines\">Machine</option>\n                        <option value=\"accessories\">Accessories</option>\n                    </select>\n                </div>\n               \n            </div>\n            <div class=\"row\" formGroupName = \"category\">\n                <div class=\"input-field col col-lg-6\">\n                    <label for=\"category\">Category Name</label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\"  required>\n       \n                </div>\n                <div class=\"input-field col col-lg-6\">\n                    <label for=\"category\">Category Group</label>\n                    <input type=\"text\" formControlName=\"group\" class=\"form-control\"  required>\n    \n                </div>\n            </div>\n            <!--Add Blend, Size, and Roast-->\n            <div class=\"row\">\n                <div class=\"form-group col-lg-4\">\n                    <!-- <label for=\"blend\">Blend</label> -->\n                    <!--<input type=\"text\" class=\"form-control\" formControlName=\"blend\" placeholder=\"Blend\">-->\n                    <select class=\"custom-select\" type=\"text\"  formControlName=\"blend\">\n                        <option value=\"\" disabled selected>Choose Blend</option>\n                        <option value=\"Coffee beans\">Coffee Beans</option>\n                        <option value=\"Espresso\">Espresso</option>\n                        <option value=\"Nespresso\">Nespresso</option>\n                        <option value=\"Paper Filter\">Paper Filter</option>\n                        <option value=\"French Press\">French Press</option>\n                        <option value=\"Metal Filter\">Metal Filter</option>\n                        <option value=\"Turkish Fine\">Turkish Fine</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-lg-4\">\n                    <!-- <label for=\"size\">Size</label> -->\n                    <!--<input type=\"text\"  class=\"form-control\" formControlName=\"size\" placeholder=\"Size\">-->\n                    <select class=\"custom-select\" type=\"text\" formControlName=\"size\">\n                        <option value=\"\" disabled selected>Choose Size</option>\n                        <option value=\"1kg\">1Kg</option>\n                        <option value=\"500g\">500g</option>\n                        <option value=\"250g\">250g</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-lg-4\">\n                    <!-- <label for=\"roast\">Roast</label> -->\n                    <!--<input type=\"text\" class=\"form-control\" formControlName=\"roast\" placeholder=\"Roast\">-->\n                    <select class=\"custom-select\" type=\"text\" formControlName=\"roast\">\n                        <option value=\"\" disabled selected>Choose Roast</option>\n                        <option value=\"Light Roast\">Light Roast</option>\n                        <option value=\"Medium Roast\">Medium Roast</option>\n                        <option value=\"Dark Roast\">Dark Roast</option>\n                    </select>\n                </div>\n            </div>\n            \n            <div class=\"input-field myinput\">\n                <label for=\"price\">Description</label>\n                <textarea rows=\"5\" class=\"materialize-textarea\" formControlName=\"description\" required ></textarea>\n            </div>\n            <button  class=\"btn btn-success\" type=\"submit\">Update Product</button>\n            <span> <button class=\"btn btn-default\" (click)=\"back()\" type=\"button\">Cancel</button> </span>\n        </form>\n</section>"

/***/ }),

/***/ "../../../../../src/app/dashboard/update-product/update-product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fp-page-content {\n  max-width: 700px;\n  padding: 50px 0px; }\n  .fp-page-content p {\n    text-align: center;\n    padding: 20px 0px; }\n  .fp-page-content h4 {\n    padding-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/update-product/update-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_test_service__ = __webpack_require__("../../../../../src/app/services/test.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateProductComponent = (function () {
    function UpdateProductComponent(fb, productService, router, _location, testService) {
        this.fb = fb;
        this.productService = productService;
        this.router = router;
        this._location = _location;
        this.testService = testService;
        this.updateVal = fb.group({
            name: ["",],
            oldprice: "",
            price: ["",],
            code: ["",],
            category: this.category(),
            blend: "",
            tag: "",
            size: "",
            roast: "",
            imageUrl: "",
            description: ["",]
        });
    }
    UpdateProductComponent.prototype.category = function () {
        return this.fb.group({
            name: "", group: ""
        });
    };
    UpdateProductComponent.prototype.back = function () {
        this.router.navigate(['/dashboard/products-list']);
        // this._location.back();
    };
    UpdateProductComponent.prototype.updateProd = function (product) {
        // console.log(this.patchdata.key);
        if (this.productService.rdata) {
            this.productService.updateProduct(this.patchdata.key, product);
        }
        else {
            alert("Update can't continue..Please go back to products and select again!");
        }
        this.router.navigate(['dashboard']);
    };
    UpdateProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patchdata = this.productService.rdata;
        if (this.productService.rdata) {
            console.log(this.patchdata);
            setTimeout(function () {
                _this.updateVal.patchValue({
                    name: _this.patchdata.data.name,
                    oldprice: _this.patchdata.data.oldprice,
                    price: _this.patchdata.data.price,
                    code: _this.patchdata.data.code,
                    category: { name: _this.patchdata.data.category.name, group: _this.patchdata.data.category.group },
                    //  <!--Add Blend, Size, and Roast-->
                    tag: _this.patchdata.data.tag,
                    blend: _this.patchdata.data.blend,
                    size: _this.patchdata.data.size,
                    roast: _this.patchdata.data.roast,
                    imageUrl: _this.patchdata.data.imageUrl,
                    description: _this.patchdata.data.description
                });
            }, 300);
            // $(document).ready(function() {
            //     $('select').material_select();
            // });
        }
        // $(document).ready(function() {
        //     $('select').material_select();
        // });
    };
    return UpdateProductComponent;
}());
UpdateProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-product',
        template: __webpack_require__("../../../../../src/app/dashboard/update-product/update-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/update-product/update-product.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_test_service__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_test_service__["a" /* TestService */]) === "function" && _e || Object])
], UpdateProductComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=update-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/firebase-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_secret__ = __webpack_require__("../../../../../src/app/shared/secret.ts");
// import { AngularFireModule, AuthMethods, AuthProviders, FIREBASE_PROVIDERS } from 'angularfire2';

// declare let firebase: any;
// Initialize Firebase
var firebaseConfig = {
    apiKey: __WEBPACK_IMPORTED_MODULE_0__shared_secret__["b" /* FIREBASEAPI */],
    authDomain: "city-roast.firebaseapp.com",
    databaseURL: "https://city-roast.firebaseio.com",
    storageBucket: "city-roast.appspot.com",
    messagingSenderId: "798903411161"
};
// export const authConfig = {
//   provider: AuthProviders.Password,
//   method: AuthMethods.Password
// };
//# sourceMappingURL=firebase-config.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-header></app-header>-->\n<home-header></home-header>\n<section class=\"whole-content\">\n  <div class=\"departments\">\n    <div class=\"cat-1\">\n        <img class=\"\"  src=\"assets/pexels-dep.jpeg\">\n        <div class=\"caption\">\n          <h2 routerLink=\"/coffees\">Coffee</h2>\n          <!-- <a href=\"\" class=\"btn waves-effect white grey-text darken-text-2\">See</a> -->\n        </div>\n    </div>\n    <div class=\"cat-2\">\n        <img class=\"\"  src=\"assets/pexels-dep2.jpeg\">\n        <div class=\"caption\">\n          <h2 routerLink=\"/coffee_machine\">Coffee Machine</h2>\n          <!-- <a href=\"\" class=\"btn waves-effect white grey-text darken-text-2\">See</a> -->\n        </div>\n    </div>\n    <div class=\"cat-3\">\n        <img  class=\"\"  src=\"assets/pexels-dep.jpeg\">\n        <div class=\"caption\">\n          <h2 routerLink=\"/accessories\">Accessories</h2>\n          <!-- <a routerLink=\"/accessories\" class=\"btn waves-effect white grey-text darken-text-2\">See</a> -->\n        </div>\n    </div>\n  </div>\n\n  <div class=\"container product-display\">\n    <h1>Coffees</h1>\n    <a routerLink=\"/coffees\">See more</a>\n    <div class=\"row\">\n      <div class=\"col xs6 s6 m4 l3 items\"  *ngFor=\"let item of coffees\">\n          <img (click)=\"viewProduct(item)\" class=\"rounded-top\" [src]=\"item.imageUrl\" alt=\"product photo\">\n          <div class=\"product-caption\">\n              <h1 (click)=\"viewProduct(item)\">{{item.name}}</h1>\n              <h5 *ngIf=\"item.oldprice\" id=\"oldprice\"><small>was</small> {{item.oldprice | currency: 'GBP' :true}}</h5>\n              <h6>{{item.price | currency: 'GBP' :true}}</h6>\n              <!-- <a class=\"waves-effect waves-light btn\"><i class=\"material-icons right\">cloud</i>Order</a> -->\n          </div>\n          <div class=\"btn-button\">\n              <a (click)=\"viewProduct(item)\" class=\"waves-effect waves-light btn\">buy</a>\n          </div>\n      </div>\n    </div>\n    <h1>Coffee Machines</h1>\n    <a routerLink=\"/coffee_machine\">See more</a>\n    <div class=\"row\">\n      <div class=\"col xs6 s6 m4 l3 items\"  *ngFor=\"let item of machines\">\n          <img (click)=\"viewProduct(item)\" class=\"rounded-top\" [src]=\"item.imageUrl\" alt=\"product photo\">\n          <div class=\"product-caption\">\n              <h1 (click)=\"viewProduct(item)\">{{item.name}}</h1>\n              <h5 *ngIf=\"item.oldprice\" id=\"oldprice\"><small>was</small> {{item.oldprice | currency: 'GBP' :true}}</h5>\n              <h6>{{item.price | currency: 'GBP' :true}}</h6>\n              <!-- <a class=\"waves-effect waves-light btn\"><i class=\"material-icons right\">cloud</i>Order</a> -->\n          </div>\n          <div class=\"btn-button\">\n            <a (click)=\"viewProduct(item)\" class=\"waves-effect waves-light btn\">buy</a>\n        </div>\n      </div>\n    </div>\n    <h1>Accessories</h1>\n    <a routerLink=\"/accessories\">See more</a>\n    <div class=\"row\">\n      <div class=\"col xs6 s6 m4 l3 items\"  *ngFor=\"let item of accessories\">\n          <img (click)=\"viewProduct(item)\" class=\"rounded-top\" [src]=\"item.imageUrl\" alt=\"product photo\">\n          <div class=\"product-caption\">\n              <h1 (click)=\"viewProduct(item)\">{{item.name}}</h1>\n              <h5 *ngIf=\"item.oldprice\" id=\"oldprice\"><small>was</small> {{item.oldprice | currency: 'GBP' :true}}</h5>\n              <h6>{{item.price | currency: 'GBP' :true}}</h6>\n              <!-- <a class=\"waves-effect waves-light btn\"><i class=\"material-icons right\">cloud</i>Order</a> -->\n          </div>\n          <div class=\"btn-button\">\n            <a (click)=\"viewProduct(item)\" class=\"waves-effect waves-light btn\">buy</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<!-- <button class=\"waves-effect waves-light btn\" (click)=\"addCar()\" >Add Cart</button>\n\n<button class=\"waves-effect waves-light btn\" (click)=\"getCart()\" >Get Cart</button>\n -->\n\n  <section *ngIf=\"subscib\" class=\"cta-sub container\">\n    <div class=\"cta-content\">\n      <!-- <i (click)=\"closeSub()\" class=\"close-sub fa fa-times-circle-o\" aria-hidden=\"true\"></i> -->\n      <h1><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Subscribe</h1>\n      <h2>Fill in your email to receive our latest products and discount updates </h2>\n      <p *ngIf=\"subsuccess\" style=\"color:lightgreen\">Thank you for subcribing to us!</p>\n      <form novalidate [formGroup]=\"subForm\" (ngSubmit)=\"subscription(subForm.value)\" >\n        <input class=\"form-control\" type=\"email\" formControlName=\"subscriber\" placeholder=\"\" autofocus\n          pattern=\"[A-Za-z]+\\.?-?[A-Za-z]+@[A-Za-z]+\\.(com|co.uk|net|org|ie)\" required >\n          <button  class=\"btn waves-effect white grey-text darken-text-2\" type=\"submit\">Subscribe</button>\n        <!-- <button [disabled]=\"!subForm.valid\" class=\"btn btn-success\" type=\"submit\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> subsribe</button> -->\n      </form>\n    </div>\n  </section>\n\n  <section class=\" about-container-cover hide\">\n    \n    <div class=\"about-container container\" >\n      <div class=\"about-text container\">\n        <!--<i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i>-->\n        <h1>{{title}}</h1>\n        <p>We roast over 100 wonderful coffees from around the world, including rare and exclusive varieties such as Kopi Luwak and Blue Mountain Jamaica, and deliver them directly to your door. We roast to order, so your coffee will always arrive in the freshest condition possible, and offer a range of grind options as well as whole beans. We also offer a sumptuous range of teas, as well as our ever-popular coffee gift hampers.</p>\n        <button routerLink=\"/about\" class=\"btn btn-default\" type=\"button\">more about us</button>\n      </div>\n\n      <!--Mobile image slider-->\n      <div class=\"mobile-slider-cover\" *ngIf=\"isSlider\">\n\n        <div class=\"iText\">\n          <p>Slide photo</p>\n        </div>\n        <div class=\"slider-button\">\n          <button (click)=\"closeSlidepix()\" class=\"btn btn-danger\" type=\"button\">Close Windows</button>\n        </div>\n      </div>\n\n      \n\n      <div class=\"tagline \"> \n        <p> <i>we roast the best coffee in London</i> </p>\n        <p> <i>supply offices and shops</i> </p>\n      </div>\n    </div>\n\n  </section>\n\n  <section class=\"cta hide\" >\n    <div class=\"cta-content\">\n      <h1><i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> Like Our Products?</h1>\n      <h2>please order below or contact us for enquiry </h2>\n      <button routerLink=\"/contacts\" class=\"btn btn-success\" type=\"button\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> send message</button>\n    </div>\n  </section>\n\n  <!--Displaying Desktop Products-->\n  <section id=\"desktop-prod\" class=\"hide\">\n    <section class=\"front-shop container clearfix\">\n\n      <h1>10% discount on all Coffees</h1>\n      <div class=\"shop-item-cover\">\n        <div class=\"items\">\n          <button id=\"all-p-btn\" type=\"button\" class=\"btn btn-xs btn-primary\">All Products</button>\n          <div  class=\"shop-item rounded-top\" *ngFor=\"let item of products\">\n            <div class=\"item-img\">\n              <div *ngIf=\"item.size\" class=\"p-size\">\n                <div class=\"badge\">\n                  <h5>{{item.size}}</h5>\n                </div>\n              </div>\n              <img (click)=\"viewProduct(item)\" class=\"rounded-top\" [src]=\"item.imageUrl\" style=\"width: 150px\" alt=\"product photo\">\n            </div>\n            <div class=\"item-title\">\n              <h2>{{item.name}}</h2>\n              <h5>{{item.blend}}</h5>\n              <h5 *ngIf=\"item.oldprice\" id=\"oldprice\"><small>was</small> {{item.oldprice | currency: 'GBP' :true}}</h5>\n              <h6>{{item.price | currency: 'GBP' :true}}</h6>\n            </div>\n            <p>\n              <a><button (click)=\"viewProduct(item)\" class=\"btn btn-default\" type=\"\"><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Order Now</button></a>\n            </p>\n          </div> \n        </div> \n      </div>\n    </section>\n  </section>\n\n  <!--Displaying Mobile Products-->\n  <!-- <section id=\"mobile-prod\">\n    <section class=\"front-shop clearfix\" >\n      <img class=\"img-bg\" src=\"assets/cityroast.png\" alt=\"\">\n      <div class=\"shop-item-cover\">\n        <div class=\"items\">\n          <button id=\"all-p-btn\" type=\"button\" class=\"btn btn-xs btn-primary\">All Products</button>\n          <div  class=\"shop-item rounded-top\" *ngFor=\"let item of mProducts\">\n            <div class=\"item-img\">\n              <div *ngIf=\"item.size\" class=\"p-size\">\n                <div class=\"badge\">\n                  <h5>{{item.size}}</h5>\n                </div>\n              </div>\n              <img (click)=\"viewProduct(item)\" class=\"rounded-top\" [src]=\"item.imageUrl\" style=\"width: 150px\" alt=\"product photo\">\n            </div>\n            <div class=\"item-title\">\n              <h2>{{item.name}}</h2>\n              <h5>{{item.blend}}</h5>\n              <h5 *ngIf=\"item.oldprice\" id=\"oldprice\"><small>was</small> {{item.oldprice | currency: 'GBP' :true}}</h5>\n              <h6>{{item.price | currency: 'GBP' :true}}</h6>\n            </div>\n            <p>\n              <a><button (click)=\"viewProduct(item)\" class=\"btn btn-default\" type=\"\"><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Order Now</button></a>\n            </p>\n          </div> \n        </div> \n      </div>\n    </section>\n  </section> -->\n\n  <!--<div class=\"alert alert-danger added-item\" *ngIf=\"isLogin\">\n          <strong>OOps!! Please login to add items to your basket</strong>\n          <span><button routerLink=\"/login\" class=\"btn btn-danger\">login here</button></span>\n    </div>-->\n  <!--<div class=\"alert alert-success added-item\" *ngIf=\"itemAdd\">\n          <strong>Well done! you just added product to your basket</strong>\n          <span><button routerLink=\"/cart\" class=\"btn btn-success\">View your basket</button></span>\n    </div>-->\n  <!-- <div [class.hide]=\"isHide\" class=\"img-container\">\n    <div class=\"img-display\">\n      <div class=\"close1\">\n        <i (click)=\"closeImage()\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"main-image\">\n        <img class=\"rounded\" src=\"{{displayImg}}\" style=\"width:700px\"  alt=\"\">\n      </div>\n      <div class=\"close2\">\n        <i (click)=\"closeImage()\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n  </div> -->\n\n  <section class=\"blog-wrapper\">\n    <div class=\"container blog-content\">\n      <h1>Latest News</h1>\n      <div class=\"row\">\n        <div *ngFor=\"let blog of blogs\" class=\"col col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n          <div class=\"blog\">\n              <div class=\"blogimage\">\n                <img (click)=\"readPost(blog)\" [src]=\"blog.data.blogImage\" alt=\"\">\n              </div>\n              \n              <div class=\"blogheader\">\n                <h6 (click)=\"readPost(blog)\" *ngIf=\"blog.data.title\"><strong>{{blog.data.title}}</strong></h6>\n                <p *ngIf=\"blog.data.postdate\">Posted: {{blog.data.postdate | date}}</p>\n              </div>\n            </div>\n        </div>        \n      </div>\n    </div>\n  </section>\n</section>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hide {\n  display: none; }\n\n.success input {\n  background: transparent;\n  border-color: green;\n  color: green; }\n\n.departments {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -webkit-flex;\n  border-top: 10px solid #35414C;\n  border-bottom: 10px solid #35414C; }\n  .departments img {\n    width: 100%; }\n  .departments .cat-2 {\n    border-right: 10px solid #35414C;\n    border-left: 10px solid #35414C; }\n  .departments .cat-1, .departments .cat-2, .departments .cat-3 {\n    position: relative; }\n    .departments .cat-1 .caption, .departments .cat-2 .caption, .departments .cat-3 .caption {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      background-color: rgba(0, 0, 0, 0.5);\n      height: 100%; }\n      .departments .cat-1 .caption:hover, .departments .cat-2 .caption:hover, .departments .cat-3 .caption:hover {\n        background-color: rgba(0, 0, 0, 0.1); }\n      .departments .cat-1 .caption h2, .departments .cat-2 .caption h2, .departments .cat-3 .caption h2 {\n        font-family: 'Dosis', sans-serif;\n        font-size: 1.7em;\n        font-weight: 600;\n        letter-spacing: 2px;\n        color: #ffffff;\n        text-align: center;\n        margin-top: 50%;\n        padding: 0px 10px;\n        -webkit-transform: translate(0px, -40px);\n                transform: translate(0px, -40px); }\n        .departments .cat-1 .caption h2:hover, .departments .cat-2 .caption h2:hover, .departments .cat-3 .caption h2:hover {\n          cursor: pointer;\n          color: #f48024; }\n      .departments .cat-1 .caption a, .departments .cat-2 .caption a, .departments .cat-3 .caption a {\n        display: none;\n        margin: 0 auto;\n        text-align: center;\n        padding: 0px 10px; }\n\n.product-display h1 {\n  font-size: 1.5em;\n  text-align: center;\n  font-family: 'Dosis', sans-serif;\n  color: lightslategrey;\n  text-transform: uppercase;\n  margin-bottom: 0px;\n  padding-bottom: 0px; }\n\n.product-display a {\n  margin: 0px;\n  padding: 0px;\n  color: red;\n  width: 100px;\n  text-align: center;\n  margin: 0 auto;\n  text-transform: lowercase; }\n  .product-display a:hover {\n    cursor: pointer;\n    opacity: 0.5; }\n\n.product-display .items {\n  position: relative;\n  border: 1px solid lightgrey;\n  height: 400px;\n  background-color: #ffffff;\n  margin-top: 10px; }\n  .product-display .items img {\n    width: 200px; }\n  .product-display .items .btn-button {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n    .product-display .items .btn-button a {\n      width: 100%;\n      background-color: #ffffff;\n      border-top: 1px solid lightgrey;\n      color: lightslategrey; }\n  .product-display .items .product-caption {\n    text-align: center; }\n    .product-display .items .product-caption h1 {\n      font-size: 1.2em;\n      font-family: 'Dosis', sans-serif;\n      padding: 0px;\n      margin: 0px;\n      text-transform: capitalize;\n      margin-top: 10px; }\n    .product-display .items .product-caption h5 {\n      margin: 0px;\n      padding: 0px;\n      font-size: 1em;\n      font-family: 'Open Sans', sans-serif;\n      text-decoration: line-through;\n      color: red; }\n    .product-display .items .product-caption h6 {\n      font-size: 1em;\n      font-family: 'Open Sans', sans-serif;\n      font-weight: bold; }\n\n.product-display .items:nth-child(1), .product-display .items:nth-child(2), .product-display .items:nth-child(3) {\n  border-right: 0px; }\n\n.cta, .cta-sub {\n  position: relative;\n  background-color: #000;\n  width: 100%;\n  padding: 30px 10px; }\n  .cta .cta-content, .cta-sub .cta-content {\n    text-align: center; }\n    .cta .cta-content h1, .cta-sub .cta-content h1 {\n      font-size: 28px;\n      color: #f48024;\n      font-weight: 800; }\n    .cta .cta-content i, .cta-sub .cta-content i {\n      color: #f48024; }\n    .cta .cta-content h2, .cta-sub .cta-content h2 {\n      font-size: 18px;\n      color: lightslategray;\n      font-weight: 600; }\n    .cta .cta-content button, .cta-sub .cta-content button {\n      background-color: transparent;\n      border-color: #f48024;\n      color: #f48024; }\n\n.cta-sub {\n  position: relative;\n  background-color: #000000;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.1); }\n  .cta-sub input {\n    width: 300px;\n    background: transparent;\n    border-color: #fff;\n    color: #fff;\n    text-align: center;\n    margin: 0 auto; }\n  .cta-sub .cta-content {\n    text-align: center; }\n    .cta-sub .cta-content h1 {\n      font-size: 2em;\n      font-family: 'Dosis', sans-serif;\n      color: #fff;\n      font-weight: 50;\n      letter-spacing: 1.5px;\n      text-transform: uppercase; }\n    .cta-sub .cta-content i {\n      color: #fff; }\n    .cta-sub .cta-content h2 {\n      font-size: 1.1em;\n      font-family: 'Open Sans', sans-serif;\n      color: lightgray;\n      font-weight: 0;\n      letter-spacing: 2px;\n      text-transform: capitalize; }\n    .cta-sub .cta-content button {\n      background-color: transparent !important;\n      border: 1px solid #FF9900 !important;\n      color: #FF9900 !important;\n      font-family: 'Dosis', sans-serif;\n      font-weight: 100 !important;\n      letter-spacing: 2px;\n      margin-top: 10px; }\n  .cta-sub .close-sub {\n    position: absolute;\n    top: 10px;\n    right: 80px;\n    font-size: 40px;\n    font-weight: 100; }\n    .cta-sub .close-sub:hover {\n      color: red !important;\n      cursor: pointer; }\n\n.about-container-cover {\n  background: #fff;\n  padding: 0px 0px;\n  position: relative; }\n  .about-container-cover .about-container {\n    margin: 0px auto;\n    text-align: center;\n    min-height: 500px;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.1); }\n    .about-container-cover .about-container i.fa-handshake-o {\n      font-size: 40px;\n      color: slategray; }\n    .about-container-cover .about-container .about-text {\n      padding-top: 50px;\n      max-width: 900px; }\n\n.front-shop {\n  position: relative;\n  margin: 0px auto;\n  text-align: center;\n  padding-top: 20px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  display: flex;\n  display: -webkit-box;\n  /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */\n  /* OLD: Firefox (buggy) */\n  display: -ms-flexbox;\n  /* MID: IE 10 */\n  display: -webkit-flex;\n  /* NEW, Chrome 21?28, Safari 6.1+ */\n  height: 600px; }\n  .front-shop img.img-bg {\n    background-size: cover;\n    width: 100%;\n    opacity: 0.2; }\n  .front-shop h1 {\n    margin: 0 auto;\n    text-align: center;\n    font-size: 22px; }\n  .front-shop .items {\n    position: absolute;\n    left: 50%;\n    display: flex;\n    display: -webkit-box;\n    /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */\n    /* OLD: Firefox (buggy) */\n    display: -ms-flexbox;\n    /* MID: IE 10 */\n    display: -webkit-flex;\n    /* NEW, Chrome 21?28, Safari 6.1+ */\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    margin: 0px auto;\n    width: 800px;\n    margin-left: -400px;\n    padding: 50px 0px; }\n    .front-shop .items #all-p-btn {\n      display: none; }\n    .front-shop .items button:hover {\n      background-color: lightgrey !important;\n      color: slategray; }\n    .front-shop .items .shop-item {\n      padding: 10px;\n      box-sizing: border-box;\n      -ms-flex-preferred-size: 30%;\n          flex-basis: 30%;\n      margin: 10px;\n      background-color: #fff;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n      .front-shop .items .shop-item:hover {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n        transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 2);\n        border: 1px solid;\n        border-color: lightseagreen; }\n      .front-shop .items .shop-item p {\n        color: #ff0000;\n        margin: 10px;\n        font-size: 12px; }\n        .front-shop .items .shop-item p button {\n          background-color: slategray;\n          color: #fff; }\n      .front-shop .items .shop-item .item-img .p-size {\n        position: absolute;\n        text-align: center; }\n        .front-shop .items .shop-item .item-img .p-size .badge {\n          margin: 0 auto;\n          text-align: center;\n          -ms-flex-line-pack: center;\n              align-content: center;\n          padding: 15px 0px;\n          border: 1.5px solid;\n          border-color: #f48024;\n          width: 50px;\n          height: 50px;\n          border-radius: 50%;\n          background-color: rgba(0, 0, 0, 0.9);\n          overflow: hidden; }\n          .front-shop .items .shop-item .item-img .p-size .badge h5 {\n            font-size: 13px;\n            margin: 5;\n            text-align: center;\n            color: #f48024; }\n      .front-shop .items .shop-item .item-title h2 {\n        font-size: 18px;\n        margin-top: 5px;\n        font-weight: 600;\n        font-family: 'Lobster', cursive;\n        letter-spacing: 2px; }\n      .front-shop .items .shop-item .item-title h5 {\n        font-size: 14px;\n        margin: 0px;\n        color: slategray; }\n      .front-shop .items .shop-item .item-title #oldprice {\n        text-decoration: line-through;\n        color: #f48024; }\n      .front-shop .items .shop-item .item-title h6 {\n        font-size: 18px;\n        color: orangered;\n        margin-top: 5px; }\n    .front-shop .items .shop-item:nth-child(1) {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n    .front-shop .items .shop-item:nth-child(2) {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n    .front-shop .items .shop-item:nth-child(3) {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n\n.tagline {\n  margin-top: 0px;\n  opacity: 0.6;\n  font-family: 'Lobster', cursive;\n  letter-spacing: 2px; }\n\n.about-images {\n  margin-top: 20px; }\n  .about-images img {\n    width: 100%; }\n  .about-images img:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n    transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 2);\n    cursor: pointer;\n    border: 1px solid;\n    border-color: #fff; }\n\n.img-container {\n  background-color: rgba(0, 0, 0, 0.8);\n  background-size: cover;\n  background-position: top;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 10000;\n  width: 100%;\n  height: 100vmin;\n  margin: 0 auto; }\n  .img-container .img-display {\n    position: absolute;\n    left: 50%;\n    width: 700px;\n    margin-left: -420px;\n    margin-top: 5%;\n    display: flex;\n    display: -webkit-box;\n    /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */\n    /* OLD: Firefox (buggy) */\n    display: -ms-flexbox;\n    /* MID: IE 10 */\n    display: -webkit-flex;\n    /* NEW, Chrome 21?28, Safari 6.1+ */ }\n    .img-container .img-display .close1, .img-container .img-display .close2 {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      padding-top: 250px; }\n    .img-container .img-display .main-image {\n      -webkit-box-flex: 4;\n          -ms-flex: 4;\n              flex: 4;\n      margin: 0 50px;\n      border: 2px solid;\n      border-color: #fff;\n      border-radius: 10px; }\n    .img-container .img-display i {\n      font-size: 30px;\n      color: #fff;\n      font-weight: 100; }\n      .img-container .img-display i:hover {\n        color: red;\n        cursor: pointer; }\n\n.added-item {\n  position: relative;\n  text-align: center;\n  margin: 0px; }\n\n.blog-wrapper {\n  position: relative;\n  padding-top: 50px;\n  padding-bottom: 50px; }\n  .blog-wrapper .blog-content {\n    width: 900px;\n    margin: 0 auto; }\n    .blog-wrapper .blog-content h1 {\n      margin: 20 auto;\n      font-family: 'Dosis', sans-serif;\n      font-size: 1.5em;\n      text-align: center;\n      color: slategray; }\n    .blog-wrapper .blog-content .blog {\n      margin: 10px 0px;\n      background-color: #fff;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n      .blog-wrapper .blog-content .blog .blogimage {\n        position: relative;\n        height: 200px;\n        overflow: hidden;\n        margin: 2px; }\n        .blog-wrapper .blog-content .blog .blogimage img {\n          width: 100%;\n          border: 2px solid;\n          border-color: #fff;\n          transition: 1s; }\n          .blog-wrapper .blog-content .blog .blogimage img:hover {\n            opacity: 0.7;\n            -webkit-transform: scale(1.2);\n                    transform: scale(1.2);\n            transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 2); }\n      .blog-wrapper .blog-content .blog .blogheader {\n        padding: 5px 10px;\n        background-color: #fff;\n        padding-bottom: 20px; }\n        .blog-wrapper .blog-content .blog .blogheader h6, .blog-wrapper .blog-content .blog .blogheader p {\n          color: lightslategrey;\n          margin: 0px;\n          padding: 0px; }\n        .blog-wrapper .blog-content .blog .blogheader h6:hover {\n          color: red;\n          cursor: pointer; }\n        .blog-wrapper .blog-content .blog .blogheader p {\n          color: grey;\n          font-size: 12px;\n          margin-top: 5px; }\n\n.home-header {\n  position: relative;\n  margin: 0px;\n  padding: 0px; }\n  .home-header .header-content {\n    position: relative;\n    z-index: 1; }\n    .home-header .header-content .carousel {\n      height: 600px;\n      overflow: hidden;\n      background-color: #000000; }\n      .home-header .header-content .carousel h2 {\n        margin-top: 20%; }\n      .home-header .header-content .carousel .carousel-item img {\n        height: 600px; }\n\n.header-cover {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 600px;\n  z-index: 100; }\n\n@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .header-content {\n    margin: 0px 0px;\n    padding: 0px 0px;\n    box-shadow: 0 0px 0px 0 transparent, 0 0px 0px 0 transparent; }\n    .header-content .home-slider {\n      margin: 0px;\n      padding: 0px; }\n      .header-content .home-slider .jumbotron {\n        padding: 0px;\n        margin: 0px;\n        margin-bottom: 20px; }\n        .header-content .home-slider .jumbotron h1 {\n          font-size: 26px; }\n        .header-content .home-slider .jumbotron h4 {\n          font-size: 14px; }\n  #tag-line {\n    margin-top: 20px;\n    padding-top: 50px;\n    position: relative;\n    margin: 30px 0px; }\n    #tag-line i {\n      font-size: 40px;\n      color: slategrey;\n      text-align: center; }\n  .product-display {\n    margin: 0px;\n    padding: 0px;\n    margin: 0 auto;\n    text-align: center; }\n    .product-display h1 {\n      font-size: 1.5em;\n      text-align: center;\n      font-family: 'Dosis', sans-serif;\n      text-transform: uppercase; }\n    .product-display .items {\n      border: 1px solid lightgrey;\n      height: 280px;\n      margin: 0px;\n      padding: 0px; }\n      .product-display .items img {\n        margin-top: 10px;\n        width: 100px; }\n      .product-display .items .product-caption {\n        text-align: center; }\n        .product-display .items .product-caption h1 {\n          font-size: 1.2em;\n          font-family: 'Dosis', sans-serif;\n          padding: 0px;\n          margin: 0px;\n          text-transform: capitalize;\n          margin-top: 10px; }\n        .product-display .items .product-caption h5 {\n          margin: 0px;\n          padding: 0px;\n          font-size: 1em;\n          font-family: 'Open Sans', sans-serif;\n          text-decoration: line-through;\n          color: red; }\n        .product-display .items .product-caption h6 {\n          font-size: 1em;\n          font-family: 'Open Sans', sans-serif;\n          font-weight: bold; }\n    .product-display .items:nth-child(1), .product-display .items:nth-child(2), .product-display .items:nth-child(3) {\n      border-right: 1px solid lightgrey; }\n    .product-display .items:nth-child(1), .product-display .items:nth-child(3) {\n      border-right: 0px; }\n    .product-display .items:nth-child(1), .product-display .items:nth-child(2) {\n      border-bottom: 0px; }\n  .cta-sub {\n    padding-bottom: 80px; } }\n\n@media only screen and (min-width: 640px) and (max-width: 1400px) {\n  .product-display {\n    text-align: center; }\n    .product-display h1 {\n      font-size: 1.5em;\n      text-align: center;\n      font-family: 'Dosis', sans-serif;\n      text-transform: uppercase; }\n    .product-display .items {\n      border: 1px solid lightgrey;\n      height: 340px; }\n      .product-display .items img {\n        margin-top: 10px;\n        width: 120px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_images_images__ = __webpack_require__("../../../../../src/app/shared/images/images.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
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
    function HomeComponent(productService, router, appService, cartService, _fb, blogService, meta, title) {
        this.productService = productService;
        this.router = router;
        this.appService = appService;
        this.cartService = cartService;
        this._fb = _fb;
        this.blogService = blogService;
        this.meta = meta;
        this.title = title;
        this.image = __WEBPACK_IMPORTED_MODULE_2__shared_images_images__["c" /* WelcomeImage */];
        this.displayImg = __WEBPACK_IMPORTED_MODULE_2__shared_images_images__["c" /* WelcomeImage */][2];
        this.isHide = true;
        this.itemAdd = false;
        this.isLogin = false;
        this.isSlider = false;
        this.state = "small";
        this.subscib = true;
        this.subsuccess = false;
        this.slideInterval = window.setInterval(function () {
            $('.carousel').carousel('next');
        }, 10000);
        title.setTitle("Welcome to London City Roast");
        meta.addTags([
            {
                name: "Coffee Roaster",
                content: "Welcome to London City Roast. We roast over 100 wonderful coffees from around the world,\n                    including rare and exclusive varieties "
            }
        ]);
    }
    HomeComponent.prototype.readPost = function (blog) {
        this.router.navigate(["/blog/?", { key: blog.key, title: blog.data.title }]);
    };
    HomeComponent.prototype.seeSlidepic = function () {
        this.isSlider = true;
    };
    HomeComponent.prototype.closeSlidepix = function () {
        this.isSlider = false;
    };
    HomeComponent.prototype.viewProduct = function (data) {
        this.router.navigate(['/product/?', { id: data.id, product_name: data.name }]);
    };
    HomeComponent.prototype.selectImg = function (image) {
        this.displayImg = image;
        this.isHide = false;
    };
    HomeComponent.prototype.closeImage = function () {
        this.isHide = true;
    };
    HomeComponent.prototype.toggleState = function () {
        this.state = this.state ? "large" : "small";
    };
    HomeComponent.prototype.subscription = function (subscribe) {
        // console.log(subscribe);
        this.appService.subscription(subscribe);
        this.subForm = this._fb.group({
            subscriber: ""
        });
    };
    HomeComponent.prototype.closeSub = function () {
        this.subscib = false;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(document).ready(function () {
            $('.carousel.carousel-slider').carousel({ fullWidth: true });
            $('.materialboxed').materialbox();
            this.slideInterval;
        });
        this.subForm = this._fb.group({
            subscriber: [""]
        });
        // Get products for the three sections
        this.productService.getCacheProduct().subscribe(function (product) {
            _this.coffees = __WEBPACK_IMPORTED_MODULE_9_lodash__["take"]((__WEBPACK_IMPORTED_MODULE_9_lodash__["filter"](product, { "tag": "coffees" })), 4);
            _this.machines = __WEBPACK_IMPORTED_MODULE_9_lodash__["take"]((__WEBPACK_IMPORTED_MODULE_9_lodash__["filter"](product, { "tag": "machines" })), 4);
            _this.accessories = __WEBPACK_IMPORTED_MODULE_9_lodash__["take"]((__WEBPACK_IMPORTED_MODULE_9_lodash__["filter"](product, { "tag": "accessories" })), 4);
        });
        this.blogService.getCacheBlog().subscribe(function (blogs) {
            _this.blogs = blogs;
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        window.clearInterval(this.slideInterval);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss"), __webpack_require__("../../../../../src/app/home/home.media-query.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["j" /* trigger */])('zoom', [
                Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["g" /* state */])('small', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["h" /* style */])({
                    backgroundColor: '#000',
                    color: '#fff',
                    transform: 'scale(1)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["g" /* state */])('large', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["h" /* style */])({
                    backgroundColor: '#ff0',
                    transform: 'scale(1.1)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["i" /* transition */])('small => large', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["e" /* animate */])('100ms ease-out')),
                Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["i" /* transition */])('large => small', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["e" /* animate */])('100ms ease-in'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_check_out_service__["a" /* CheckOutService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_blog_service__["a" /* BlogService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* Meta */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["d" /* Title */]) === "function" && _h || Object])
], HomeComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-header\">\n    <div class=\"header-content\">\n        <div class=\"carousel carousel-slider center\" data-indicators=\"true\">\n            <div class=\"carousel-fixed-item center\">\n              <a routerLink=\"/signup\" class=\"btn waves-effect white grey-text darken-text-2\">Register</a>\n            </div>\n            <div  class=\"carousel-item red white-text\" href=\"#one!\">\n                <img src=\"assets/pexels4.jpeg\" alt=\"\">\n                <div class=\"header-cover\">\n                    <h2>Great Coffee</h2>\n                    <p class=\"white-text\">Making of good coffee is our passion</p>\n                </div>\n              \n            </div>\n            <div  class=\"carousel-item amber white-text\" href=\"#two!\">\n                <img src=\"assets/pexels1.jpeg\" alt=\"\">\n                <div class=\"header-cover\">\n                    <h2>First Panel</h2>\n                    <p class=\"white-text\">This is your first panel</p>\n                </div>\n            </div>\n            <div  class=\"carousel-item green white-text\" href=\"#three!\">\n                <img src=\"assets/pexels2.jpeg\" alt=\"\">\n                <div class=\"header-cover\">\n                    <h2>First Panel</h2>\n                    <p class=\"white-text\">This is your first panel</p>\n                </div>\n            </div>\n            <div  class=\"carousel-item blue white-text\" href=\"#four!\">\n                <img src=\"assets/pexels3.jpeg\" alt=\"\">\n                <div class=\"header-cover\">\n                    <h2>First Panel</h2>\n                    <p class=\"white-text\">This is your first panel</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeMenuComponent = (function () {
    function HomeMenuComponent(router) {
        this.router = router;
        this.actions = true;
    }
    HomeMenuComponent.prototype.coffee = function () {
        this.router.navigate(["products/?", { category: "coffees", dispay: "true" }]);
    };
    HomeMenuComponent.prototype.coffeeMachine = function () {
        this.router.navigate(["products/?", { category: "coffee_machine", dispay: "true" }]);
    };
    HomeMenuComponent.prototype.accessories = function () {
        this.router.navigate(["products/?", { category: "accessories", dispay: "true" }]);
    };
    HomeMenuComponent.prototype.ngOnInit = function () {
    };
    return HomeMenuComponent;
}());
HomeMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home-header',
        template: __webpack_require__("../../../../../src/app/home/home.header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss"), __webpack_require__("../../../../../src/app/home/home.media-query.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], HomeMenuComponent);

var _a;
//# sourceMappingURL=home.header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.media-query.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .img-container, #mobile-prod, #desktop-prod {\n    display: none; }\n  .about-container-cover {\n    position: relative;\n    background-color: #fff;\n    background: -moz-linear-gradient(#FF9900);\n    padding: 0px 0px 0px 0px;\n    margin: 0px; }\n    .about-container-cover .about-container {\n      margin: 0px auto;\n      text-align: center;\n      max-width: 400px; }\n      .about-container-cover .about-container .about-text {\n        padding-top: 40px; }\n        .about-container-cover .about-container .about-text button {\n          color: lightslategray; }\n  .front-shop {\n    position: relative;\n    overflow: hidden;\n    margin: 0px auto;\n    text-align: center;\n    display: flex;\n    display: -webkit-box;\n    /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */\n    /* OLD: Firefox (buggy) */\n    display: -ms-flexbox;\n    /* MID: IE 10 */\n    display: -webkit-flex;\n    /* NEW, Chrome 21?28, Safari 6.1+ */\n    height: 530px; }\n    .front-shop img.img-bg {\n      background-size: cover;\n      width: 100%;\n      opacity: 0.2; }\n    .front-shop .shop-item-cover {\n      width: 100%;\n      padding: 0 10px;\n      overflow-x: hidden; }\n      .front-shop .shop-item-cover .items {\n        position: none;\n        left: 0px;\n        display: flex;\n        display: -webkit-box;\n        /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */\n        /* OLD: Firefox (buggy) */\n        display: -ms-flexbox;\n        /* MID: IE 10 */\n        display: -webkit-flex;\n        /* NEW, Chrome 21?28, Safari 6.1+ */\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n        margin: 0px;\n        width: 100%;\n        margin-left: 0px;\n        padding: 50px 0px;\n        overflow-x: scroll; }\n        .front-shop .shop-item-cover .items #all-p-btn {\n          display: block; }\n        .front-shop .shop-item-cover .items button:hover {\n          background-color: #189a18 !important;\n          color: #fff; }\n        .front-shop .shop-item-cover .items .shop-item {\n          padding: 10px;\n          box-sizing: border-box;\n          -ms-flex-preferred-size: 30%;\n              flex-basis: 30%;\n          margin: 10px;\n          background-color: #fff;\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n          .front-shop .shop-item-cover .items .shop-item:hover {\n            -webkit-transform: scale(1.1);\n                    transform: scale(1.1);\n            transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 2);\n            border: 1px solid;\n            border-color: lightseagreen; }\n          .front-shop .shop-item-cover .items .shop-item p {\n            color: #ff0000;\n            margin: 10px;\n            font-size: 12px; }\n          .front-shop .shop-item-cover .items .shop-item h2 {\n            font-size: 1rem; }\n        .front-shop .shop-item-cover .items .shop-item:nth-child(1) {\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          -webkit-box-align: end;\n              -ms-flex-align: end;\n                  align-items: flex-end; }\n        .front-shop .shop-item-cover .items .shop-item:nth-child(2) {\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          -webkit-box-align: start;\n              -ms-flex-align: start;\n                  align-items: flex-start; }\n        .front-shop .shop-item-cover .items .shop-item:nth-child(3) {\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          -webkit-box-align: end;\n              -ms-flex-align: end;\n                  align-items: flex-end; }\n  .tagline {\n    margin-top: 20px;\n    opacity: 0.6;\n    font-family: 'Lobster', cursive;\n    letter-spacing: 2px; }\n  .about-images {\n    margin: 30px 10px; }\n    .about-images button {\n      margin-top: 10px;\n      background-color: #f48024;\n      border: none;\n      border-color: none !important;\n      color: #fff; }\n    .about-images #dImage {\n      margin: 0px !important;\n      padding: 0px !important; }\n    .about-images a img {\n      width: 100%;\n      margin: 0px !important;\n      padding: 5px !important; }\n    .about-images img:hover {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 2);\n      cursor: pointer;\n      border: none; }\n  .img-container {\n    background-color: rgba(0, 0, 0, 0.8);\n    background-size: cover;\n    background-position: top;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    z-index: 10000;\n    width: 100%;\n    height: 100vmin;\n    margin: 0 auto; }\n    .img-container .img-display {\n      position: absolute;\n      left: 50%;\n      width: 700px;\n      margin-left: -420px;\n      margin-top: 5%;\n      display: flex;\n      display: -webkit-box;\n      /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */\n      /* OLD: Firefox (buggy) */\n      display: -ms-flexbox;\n      /* MID: IE 10 */\n      display: -webkit-flex;\n      /* NEW, Chrome 21?28, Safari 6.1+ */ }\n      .img-container .img-display .close1, .img-container .img-display .close2 {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        padding-top: 250px; }\n      .img-container .img-display .main-image {\n        -webkit-box-flex: 4;\n            -ms-flex: 4;\n                flex: 4;\n        margin: 0 50px;\n        border: 2px solid;\n        border-color: #fff;\n        border-radius: 10px; }\n      .img-container .img-display i {\n        font-size: 30px;\n        color: #fff;\n        font-weight: 100; }\n        .img-container .img-display i:hover {\n          color: red;\n          cursor: pointer; }\n  .added-item {\n    text-align: center;\n    margin: 0px; }\n  .mobile-slider-cover {\n    position: fixed;\n    top: 0px;\n    background-color: rgba(0, 0, 0, 0.9);\n    width: 100%;\n    height: 100vh;\n    z-index: 1000000;\n    transition: 0.5s; }\n    .mobile-slider-cover .slider-button {\n      position: relative;\n      top: 12%; }\n      .mobile-slider-cover .slider-button button {\n        color: lightslategrey;\n        background-color: transparent; }\n    .mobile-slider-cover .iText {\n      position: relative;\n      top: 8%; }\n      .mobile-slider-cover .iText p {\n        color: lightslategrey; }\n    .mobile-slider-cover .mobile-slider {\n      position: relative;\n      top: 20%;\n      margin: 10px 0px;\n      display: flex;\n      display: -webkit-box;\n      /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */\n      /* OLD: Firefox (buggy) */\n      display: -ms-flexbox;\n      /* MID: IE 10 */\n      display: -webkit-flex;\n      /* NEW, Chrome 21?28, Safari 6.1+ */\n      width: 100%;\n      overflow-x: scroll; }\n      .mobile-slider-cover .mobile-slider #dImage {\n        width: 350px;\n        padding: 0px;\n        margin: 0px; }\n        .mobile-slider-cover .mobile-slider #dImage a img {\n          width: 350px;\n          padding: 5px; }\n  .home-header {\n    position: relative;\n    margin: 0px;\n    padding: 0px; }\n    .home-header .header-content {\n      position: relative;\n      z-index: 1; }\n      .home-header .header-content .carousel {\n        height: 300px;\n        background-color: #000000; }\n        .home-header .header-content .carousel h2 {\n          margin-top: 25%; }\n        .home-header .header-content .carousel .carousel-item img {\n          height: 300px; }\n  .header-cover {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    height: 300px;\n    z-index: 100; }\n  .departments .cat-1, .departments .cat-2, .departments .cat-3 {\n    position: relative; }\n    .departments .cat-1 .caption h2, .departments .cat-2 .caption h2, .departments .cat-3 .caption h2 {\n      font-family: 'Dosis', sans-serif;\n      font-size: 1.2em;\n      font-weight: 600;\n      letter-spacing: 2px;\n      color: #ffffff;\n      text-align: center;\n      margin-top: 60%;\n      padding: 0px 10px;\n      -webkit-transform: translate(0px, -30px);\n              transform: translate(0px, -30px); }\n      .departments .cat-1 .caption h2:hover, .departments .cat-2 .caption h2:hover, .departments .cat-3 .caption h2:hover {\n        cursor: pointer;\n        color: #f48024; }\n    .departments .cat-1 .caption a, .departments .cat-2 .caption a, .departments .cat-3 .caption a {\n      display: none;\n      margin: 0 auto;\n      text-align: center;\n      padding: 0px 10px; } }\n\n@media only screen and (min-width: 640px) {\n  .mobile-slider, #mobile-prod, .slider-button, .about-images button, .about-text button {\n    display: none; } }\n\n@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .blog-wrapper {\n    position: relative;\n    height: 100%;\n    padding-top: 10px;\n    padding-bottom: 50px; }\n    .blog-wrapper .blog-content {\n      width: 100%;\n      margin: 0 auto; }\n      .blog-wrapper .blog-content h1 {\n        margin: 0 auto;\n        font-size: 28px;\n        text-align: center; }\n      .blog-wrapper .blog-content .blog {\n        margin: 10px 0px;\n        background-color: #fff;\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n        .blog-wrapper .blog-content .blog .blogimage {\n          position: relative;\n          height: 230px;\n          overflow: hidden;\n          margin: 2px; }\n          .blog-wrapper .blog-content .blog .blogimage img {\n            position: relative;\n            width: 100%;\n            border: 2px solid;\n            border-color: #fff; }\n        .blog-wrapper .blog-content .blog .blogheader {\n          padding: 10px 10px;\n          background-color: #fff; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/menu/cat-menu/cat.menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatMenuComponent = (function () {
    function CatMenuComponent(router) {
        this.router = router;
        this.coffees = false;
        this.machine = false;
        this.accessory = false;
        this.sticky = false;
    }
    CatMenuComponent.prototype.coffee = function () {
        this.coffees = true;
        this.accessory = false;
        this.machine = false;
        this.router.navigate(["products/?", { category: "coffees" }]);
    };
    CatMenuComponent.prototype.coffeeMachine = function () {
        this.machine = true;
        this.accessory = false;
        this.coffees = false;
        this.router.navigate(["products/?", { category: "coffee_machine" }]);
    };
    CatMenuComponent.prototype.accessories = function () {
        this.accessory = true;
        this.machine = false;
        this.coffees = false;
        this.router.navigate(["products/?", { category: "accessories" }]);
    };
    CatMenuComponent.prototype.offsetPage = function () {
        var _el = document.getElementById('stick');
        var topPos = _el.offsetTop;
        if (topPos > 110) {
            //   alert('page is scrolled');
            //   this.sticky = true;
        }
    };
    CatMenuComponent.prototype.ngOnInit = function () {
        this.offsetPage();
    };
    return CatMenuComponent;
}());
CatMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cat-menu',
        template: __webpack_require__("../../../../../src/app/menu/cat-menu/cat.menu.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/cat-menu/cat.menu.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], CatMenuComponent);

var _a;
//# sourceMappingURL=cat.menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/cat-menu/cat.menu.html":
/***/ (function(module, exports) {

module.exports = "<div [class.stick-menu]=\"sticky\" id=\"stick\" class=\"sub-menu\">\n    <div class=\"list-item row container\">\n        <div [class.active-bar]=\"coffees\" class=\"item1 col xs4 s4 m4 l4\">\n            <h1 (click)=\"coffee()\">Coffees</h1>\n        </div>\n        <div [class.active-bar]=\"machine\" class=\"item2 col xs4 s4 m4 l4\">\n            <h1 (click)=\"coffeeMachine()\">Coffee Machine</h1>\n        </div>\n        <div [class.active-bar]=\"accessory\" class=\"item3 col xs4 s4 m4 l4\">\n            <h1 (click)=\"accessories()\">Accessories</h1>\n        </div> \n    </div>\n    \n</div>"

/***/ }),

/***/ "../../../../../src/app/menu/cat-menu/cat.menu.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active-bar {\n  height: 50px;\n  background-color: #f48024;\n  text-transform: uppercase;\n  text-color: lightslategey;\n  transition: 1s; }\n\n.stick-menu {\n  position: fixed;\n  z-index: 1000;\n  top: 0px; }\n\n.sub-menu {\n  width: 100%;\n  height: 50px;\n  background: #fff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.list-item {\n  margin: 0 auto;\n  text-align: center; }\n\n.item1 h1, .item2 h1, .item3 h1 {\n  margin: 0px;\n  padding: 0px;\n  font-size: 1em;\n  line-height: 50px; }\n\n@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .list-item h1 {\n    font-size: 16px;\n    text-align: center; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\">\n    <footer class=\"footer-content container\">\n        <div class=\"footer-brand\">\n            <img src=\"assets/LCRartwork-05.png\" style=\"width: 100px\" alt=\"lcr\">\n        </div>\n        <div class=\"footer-address\">\n            <h5>Unit B3 Crabtree Manorway North </h5>\n            <h6>DA17 6AX</h6>\n            <h5 id=\"tel\">0208 310 8517 </h5>\n            <h5 id=\"imail\">info@londoncityroast.com</h5>\n            <h6 id=\"crt\">Copyright ©londoncityroast 2017 | All rights reserved </h6>\n            <h6 id=\"tcp\"><span id=\"pv\" routerLink=\"/return-policy\">Return Policy</span> | <span id=\"tc\" routerLink=\"/terms\">Terms & Conditions</span></h6>\n        </div>\n        <div class=\"social-media\">\n            <a><img src=\"https://www.merchantequip.com/image/?logos=v|m|jcb|me&height=64\" alt=\"Merchant Equipment Store Credit Card Logos\" /></a> \n           <!--<h1><a href=\"\"><i class=\"fa fa-cc-mastercard\" aria-hidden=\"true\"></i></a></h1> \n           <h1><a href=\"\"><i class=\"fa fa-cc-jcb\" aria-hidden=\"true\"></i></a></h1> \n           <h1><a href=\"\"><i class=\"fa fa-cc-visa\" aria-hidden=\"true\"></i></a></h1>-->\n        </div>\n        <div id=\"designer\">\n            <p style=\"margin:0px; padding:0px;\">Design and coded by Austin =><a style=\"color:lightslategray;\" href=\"http://www.onklick.co.uk\" target=\"blank\">Onklick Media</a></p>\n            <p style=\"margin:0px; padding:0px;\">\n                <i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n                07853292983\n            </p>\n        </div>\n    </footer>\n</div>\n\n <!--Footer section for mobile only-->\n<div class=\"footer-mobile\">\n    <div class=\"footer-brand\">\n        <div class=\"left-line\">\n            \n        </div>\n        <div class=\"branded\">\n            <img (click)=\"back()\" src=\"assets/LCR-branded.png\"  alt=\"lcr\">\n        </div>\n        <!--<div class=\"right-line\">\n            \n        </div>-->\n    </div>\n    <footer class=\"footer-content-mobile container\">\n        <div class=\"footer-address-mobile\">\n            <h5>London City Roast Ltd</h5>\n            <h5> Unit B3 Crabtree Manorway North</h5>\n            <h5> DA17 6AX </h5>\n            <h4>0208 310 8517</h4>\n            <h4>info@londoncityroast.com</h4>\n            \n        </div>\n        <div class=\"copy-right\">\n            <h6>Copyright © 2017 | All rights reserved</h6>\n            <h6 style=\"color:aquamarine\" routerLink=\"/return-policy\">Return Policy</h6>\n            <h6 style=\"color:aquamarine\" routerLink=\"/terms\">Terms & Conditions</h6>\n\n        </div>\n        <div class=\"social-media-mobile\">\n            <a><img src=\"https://www.merchantequip.com/image/?logos=v|m|jcb|me&height=32\" alt=\"Merchant Equipment Store Credit Card Logos\" /></a>\n           <!--<i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i>\n           <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>-->\n        </div>\n        <div class=\"developer-info\">\n            <h1>Design and Coded by Austin < <a style=\"color:lightslategray;\" href=\"http://www.onklick.co.uk\" target=\"blank\">Onklick Media</a> > </h1>\n            <p>\n                <i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n                07853292983\n            </p>\n        </div>\n    </footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/menu/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(_location) {
        this._location = _location;
    }
    FooterComponent.prototype.back = function () {
        this._location.back();
    };
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/menu/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/stylesheet.scss"), __webpack_require__("../../../../../src/app/menu/stylesheet.media.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header\" id=\"app-header\">\n  <div class=\"header-container\">\n    <img (click)=\"toggleBanner1()\" *ngIf=\"!isBanner\" [src]=\"ourCoffee\" alt=\"Header image\">\n    <img (click)=\"toggleBanner2()\" *ngIf=\"isBanner\" [src]=\"puringCoffee\" alt=\"Header image\">\n    <div class=\"banner-text\">\n      <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n        <!--<ol class=\"carousel-indicators\">\n          <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n        </ol>-->\n        <div class=\"carousel-inner\" role=\"listbox\">\n          <div class=\"carousel-item active\">\n            <h1>Freshly <span style=\"color:#f48024\">Roasted Coffee</span> Beans, <span style=\"color:lightslategrey\">for your pleasure</span> </h1>\n            <h4 style=\"color:#f48024\">number 1 taste in coffee</h4>\n          </div>\n          <div class=\"carousel-item\">\n          \n            <h1>Perfactly <span style=\"color:lightslategrey\">Roasted Coffee</span> Beans, blend for a good taste</h1>\n            <h4 style=\"color:#f48024\">taste much better</h4>\n          </div>\n          <div class=\"carousel-item\">\n            \n            <h1>Freshly Roasted Coffee Beans, for your pleasure</h1>\n            <h4 style=\"color:#f48024\">number 1 taste in coffee</h4>\n          </div>\n        </div>\n        <div class=\"banner-link\">\n          <button routerLink=\"/coffees\" class=\"btn btn-success\" type=\"\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> See Our Coffees</button>\n          <div class=\"arrow\">\n           <a href=\"#next-sec\"> <i (click)=\"slideUp()\" class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i></a>\n          </div>\n        </div>\n      \n        <!--<a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n          <span class=\"icon-prev\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n          <span class=\"icon-next\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>-->\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"next-sec\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/menu/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_images_images__ = __webpack_require__("../../../../../src/app/shared/images/images.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(_el) {
        this._el = _el;
        this.isBanner = false;
        this.puringCoffee = __WEBPACK_IMPORTED_MODULE_1__shared_images_images__["b" /* Images */][0];
        this.ourCoffee = __WEBPACK_IMPORTED_MODULE_1__shared_images_images__["c" /* WelcomeImage */][3];
        this.margin = 0;
    }
    HeaderComponent.prototype.toggleBanner1 = function () {
        var _this = this;
        // this.isBanner = true || !this.isBanner;
        this.isBanner = true;
        setInterval(function () {
            _this.isBanner = false;
        }, 20000);
    };
    HeaderComponent.prototype.toggleBanner2 = function () {
        var _this = this;
        // this.isBanner = true || !this.isBanner;
        this.isBanner = false;
        setInterval(function () {
            _this.isBanner = true;
        }, 20000);
    };
    HeaderComponent.prototype.slideUp = function () {
        // alert('Sliding up');
        // let divTarget = document.getElementById('app-header');
        // let node = document.createElement('div');
        // node.id="text"
        // divTarget.appendChild(node);
        // window.pageYOffset;
        // window.scrollBy(100, 700);
        // let topage = document.getElementById('app-header');
        // let yPos = window.pageYOffset;
        // if(yPos > 60){
        //   alert("window scroll")
        //   // topage.style.marginTop = "700";
        // } else {
        //   // topage.style.display = "none";
        //   alert("No way");
        // }
        // window.addEventListener("scroll", yScroll);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        // setInterval(()=>{
        //   this.margin = 20;
        // }, 100);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/menu/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/stylesheet.scss"), __webpack_require__("../../../../../src/app/menu/stylesheet.media.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/media-query/menu.query.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".colapse-menu {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 100000; }\n  .colapse-menu i {\n    font-size: 30px;\n    color: #fff; }\n\n@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .navbar-main .anonymous-wrapper {\n    position: fixed;\n    width: 100%;\n    height: 100vmax;\n    background-color: rgba(0, 0, 0, 0.5); }\n    .navbar-main .anonymous-wrapper .anonymous {\n      position: absolute;\n      top: 15%;\n      left: 50%;\n      width: 80%;\n      margin-left: -40%;\n      text-align: center;\n      transition: 0.2s; }\n      .navbar-main .anonymous-wrapper .anonymous .ano-content {\n        background-color: #fff;\n        opacity: 0.99;\n        width: 100%; }\n        .navbar-main .anonymous-wrapper .anonymous .ano-content p {\n          padding: 10px 0px;\n          color: black; }\n        .navbar-main .anonymous-wrapper .anonymous .ano-content span#span {\n          color: red; }\n  .activated {\n    color: lightslategrey !important;\n    background-color: transparent;\n    border-radius: 5px;\n    padding-left: 5px;\n    padding-right: 5px;\n    border: 1px solid;\n    transition: 0.2s; }\n  .right-nav, .login-out {\n    display: none; }\n  .side-cart {\n    position: absolute;\n    top: 18px;\n    right: 55px;\n    z-index: 100000; }\n    .side-cart li {\n      text-decoration: none;\n      list-style: none; }\n      .side-cart li a {\n        background-color: #fff; }\n  .side-nav-container {\n    position: fixed;\n    top: 0;\n    width: 0%;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 100000; }\n    .side-nav-container .side-nav-side {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      z-index: 1000;\n      float: right;\n      width: 250px;\n      height: 100vh;\n      background-color: #fff; }\n      .side-nav-container .side-nav-side .aside {\n        margin: 20px; }\n        .side-nav-container .side-nav-side .aside a {\n          color: lightslategrey; }\n      .side-nav-container .side-nav-side i {\n        color: lightslategray;\n        font-size: 18px;\n        margin-right: 20px; }\n      .side-nav-container .side-nav-side .account-menu {\n        position: relative; }\n        .side-nav-container .side-nav-side .account-menu .slide-close i {\n          position: relative;\n          top: 5px;\n          padding: 10px 10px 10px 10px;\n          font-size: 20px;\n          color: lightslategray;\n          border: 1px solid;\n          border-color: #fff;\n          border-radius: 50%;\n          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 6px 0 rgba(0, 0, 0, 0.19); }\n        .side-nav-container .side-nav-side .account-menu .user-ac {\n          position: relative;\n          top: 15px;\n          right: 5px; }\n          .side-nav-container .side-nav-side .account-menu .user-ac span {\n            color: lightslategrey;\n            padding: 8px;\n            margin: 0px; }\n          .side-nav-container .side-nav-side .account-menu .user-ac i {\n            font-size: 20px;\n            padding: 0px;\n            margin: 0px; }\n    .side-nav-container .close-menu {\n      position: absolute;\n      top: 0px;\n      left: 0px;\n      z-index: 10000;\n      width: 100%;\n      height: 100vh; }\n    .side-nav-container .show-case p {\n      margin: 0px;\n      padding: 10px 10px;\n      text-align: center;\n      font-size: 14px; }\n    .side-nav-container .show-case h5 {\n      padding: 0px 20px;\n      margin: 0px;\n      text-align: center;\n      color: #f48024; }\n      .side-nav-container .show-case h5 i {\n        color: #f48024; }\n    .side-nav-container .show-case .show-case-images {\n      display: -webkit-box;\n      /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */\n      /* OLD: Firefox (buggy) */\n      display: -ms-flexbox;\n      /* MID: IE 10 */\n      /* NEW, Chrome 21?28, Safari 6.1+ */\n      display: flex;\n      margin: 0px 10px;\n      overflow: hidden;\n      width: 230px;\n      height: 70px; }\n      .side-nav-container .show-case .show-case-images .case-1, .side-nav-container .show-case .show-case-images .case-2 {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        width: 50%;\n        margin: 1%;\n        overflow: hidden; }\n        .side-nav-container .show-case .show-case-images .case-1 img, .side-nav-container .show-case .show-case-images .case-2 img {\n          width: 100%;\n          max-height: 80px; }\n  .navbar .brand img {\n    width: 70px;\n    height: 70px; }\n  .navbar .brand-logo {\n    top: 0px;\n    left: 0px;\n    margin: 0px;\n    padding: 0px; }\n    .navbar .brand-logo .brand-list {\n      margin: 10px;\n      padding: 0px; }\n      .navbar .brand-logo .brand-list .brand-item-text {\n        padding: 10px 5px; }\n        .navbar .brand-logo .brand-list .brand-item-text h6 {\n          color: lightslategrey;\n          margin: 0px;\n          padding: 0px;\n          font-size: 0.5em;\n          padding-left: 10px;\n          font-family: 'Satisfy', cursive;\n          letter-spacing: 3px; }\n      .navbar .brand-logo .brand-list span.logo-text {\n        font-family: 'Dosis', sans-serif;\n        text-transform: uppercase;\n        color: lightgrey;\n        font-weight: 800;\n        letter-spacing: 1px;\n        padding: 0px;\n        margin: 0px;\n        font-size: 0.8em;\n        margin-top: 20px !important; }\n  .cartSum {\n    padding: 5px;\n    z-index: 1000; }\n    .cartSum i {\n      font-size: 14px;\n      color: #f48024;\n      margin-right: 1px; }\n    .cartSum span {\n      margin: 0px;\n      padding: 0px;\n      font-size: 12px; } }\n\n@media only screen and (min-width: 640px) {\n  .side-nav-container, .colapse-menu, .side-cart {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"menu-header\" class=\"menu-header\">\n</div>\n<div class=\"nav-inner\">\n  <div class=\"navbar-main\">\n      <div class=\"brand-logo clearfix\">\n          <ul class=\"brand-list\">\n              <li class=\"brand-item-image\">\n                  <div id=\"brand\" class=\"brand\">\n                      <a *ngIf=\"!isRedlogo\" routerLink=\"/\"><img src=\"assets/logo-lcr-05.png\"  alt=\"lcr\"></a>\n                      <a *ngIf=\"isRedlogo\" routerLink=\"/\"><img src=\"assets/LCRartwork-05.png\"  alt=\"lcr\"></a>\n                  </div>\n              </li>\n              <li class=\"brand-item-text\" routerLink=\"/\">\n                  <div>\n                      <span class=\"logo-text\">London City Roast</span>\n                      <h6>freshly made coffee</h6>\n                  </div>\n              </li>\n          </ul>\n      </div>\n  \n    <div class=\"right-nav\">\n      <ul class=\"nav navbar-nav\">\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/\" ><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"activated\">About </a>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link shop-deal\" routerLinkActive=\"activated\">Shop Deal</a>\n          <div class=\"prod-cat\">\n            <ul>\n              <li>Coffee</li>\n              <li>Machine</li>\n              <li>Accessory</li>\n            </ul>\n          </div>\n        </li> -->\n        \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/coffees\" routerLinkActive=\"activated\">Coffees</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/coffee_machine\" routerLinkActive=\"activated\">Coffee Machine</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/accessories\" routerLinkActive=\"activated\">Accessories</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/brewing\" routerLinkActive=\"activated\">Brewing</a>\n        </li>\n        \n        <li class=\"nav-item\" >\n          <a class=\"nav-link\" routerLink=\"/contacts\" routerLinkActive=\"activated\">Contact</a>\n        </li>\n        <li class=\"nav-item\" >\n          <a class=\"nav-link\" routerLink=\"/dashboard\" *ngIf=\"previlege\" routerLinkActive=\"activated\">cPanel</a>\n        </li>\n        <li class=\"nav-item\" routerLink=\"/cart\" >\n          <a class=\"nav-link cartSum\"><i class=\"material-icons\">shopping_cart</i>{{cartTotal | currency: 'GBP': true}}\n          <!-- <span class=\"badge badge-primary\">{{cartTotal | currency: 'GBP': true}}</span> -->\n          </a>\n        </li>\n        \n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"openDrawer()\"  *ngIf=\"previlege && regUser\" ><span style=\"color: red\">|</span> Admin <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n            <a class=\"nav-link\" (click)=\"openDrawer()\"  *ngIf=\"regUser && !previlege\" ><span style=\"color: red\">|</span> User <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n            <a class=\"nav-link\" (click)=\"openDrawer()\"  *ngIf=\"anoUser\" ><span style=\"color: red\">|</span> Guest <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n            <a class=\"nav-link\"  routerLink=\"/login\" *ngIf=\"!regUser && !anoUser\"><span style=\"color: red\">|</span> Login <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n        </li>\n        <li class=\"nav-item\">\n            <div class=\"colapse-menu\">\n                <i (click)=\"openMenu()\" class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n              </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n<!--Login menu-->\n<div class=\"login-out\" [style.width.px]=\"loginDraw\">\n  <div id=\"iClose\" (click)=\"closeDrawer()\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </div>\n  <ul class=\"login-items\">\n    <!--<li (click)=\"closeDrawer()\" class=\"nav-item\" >\n        <small><span class=\"badge badge-primary\">{{currentuser}}</span></small>\n      </li>-->\n     <li (click)=\"closeDrawer()\" *ngIf=\"cartTotal > 0\" class=\"nav-item\" routerLink=\"/cart\" >\n        <a class=\"nav-link\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n        <span class=\"badge badge-primary\">= {{cartTotal}}</span></a>\n      </li>\n    <li (click)=\"closeDrawer()\" routerLink=\"/checkout\" *ngIf=\"regUser\" class=\"nav-item\">Account</li>\n    <!--<li (click)=\"closeDrawer()\" class=\"nav-item\">Favourite</li>-->\n    <hr>\n    <li (click)=\"closeDrawer()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/login\" *ngIf=\"!regUser && !anoUser\">Login</a>\n      </li>\n      <li (click)=\"closeDrawer()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/signup\" *ngIf=\"!regUser && !anoUser\">Sign up</a>\n      </li>\n    <li (click)=\"closeDrawer()\" class=\"nav-item\">\n      <a class=\"nav-link\" (click)=\"signOut()\" *ngIf=\"regUser || anoUser\" >Sign Out</a>\n    </li>\n  \n  </ul>\n</div>\n<div class=\"dropdow-colp\" (click)=\"closeDrawer()\" *ngIf=\"closeWind\">\n  \n</div>\n\n<!--Colapsable menu-->\n<div class=\"colapse-menu\">\n  <i (click)=\"openMenu()\" class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n</div>\n\n\n<!--Cart display section-->\n<div class=\"side-cart\">\n   <li class=\"nav-item dropdown\" routerLink=\"/cart\" *ngIf=\"cartTotal\">\n        <a routerLink=\"/cart\" class=\"nav-link cartSum\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n        <span routerLink=\"/cart\">{{cartTotal | currency: 'GBP': true}}</span></a>\n    </li>\n</div>\n\n<!-- SideNav section -->\n<!-- <section class=\"side-nav-container\" [style.width.%]=\"isImenu\"></section> -->\n<section class=\"side-nav-container\" [style.width.%]=\"isImenu\">\n\n  <!-- <div class=\"close-menu\" >\n  </div> -->\n  <div class=\"side-nav-side\">\n    <div class=\" row account-menu\">\n      <div class=\"col xs6 slide-close\">\n        <i (click)=\"closeMenu()\" class=\"material-icons\" aria-hidden=\"true\">arrow_forward</i>\n      </div>\n      <div class=\"col xs6 user-ac\">\n        <i (click)=\"closeMenu()\" routerLink=\"/checkout\" class=\"fa fa-user\" *ngIf=\"previlege && regUser\" aria-hidden=\"true\"></i><span (click)=\"closeMenu()\" routerLink=\"/checkout\" *ngIf=\"previlege && regUser\">Admin</span>\n        <i (click)=\"closeMenu()\" routerLink=\"/checkout\" class=\"fa fa-user\" *ngIf=\"!previlege && regUser\" aria-hidden=\"true\"></i><span (click)=\"closeMenu()\" routerLink=\"/checkout\" *ngIf=\"!previlege && regUser\">User</span>\n        <i class=\"fa fa-user\" *ngIf=\"anoUser\" aria-hidden=\"true\"></i><span *ngIf=\"anoUser\">Guest</span>\n        <i class=\"fa fa-user\" *ngIf=\"!anoUser && !regUser\"  aria-hidden=\"true\"></i><span *ngIf=\"!anoUser && !regUser\">No user?</span>\n      </div>\n      \n    </div>\n    <hr>\n    <ul class=\"menu-list\">\n        <li class=\"nav-item aside\">\n          <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n            <a class=\"nav-link\" (click)=\"closeMenu()\" routerLink=\"/\" >Home</a>\n        </li>\n      <li class=\"nav-item aside\">\n        <i class=\"fa fa-wpexplorer\" aria-hidden=\"true\"></i>\n        <a class=\"nav-link\" (click)=\"closeMenu()\" routerLink=\"/about\">About </a>\n      </li>\n      <li  class=\"nav-item aside deals\">\n        <i class=\"fa fa-coffee\" aria-hidden=\"true\"></i>\n        <a class=\"nav-link\" (click)=\"closeMenu()\" routerLink=\"/coffees\" >Coffees</a>\n      </li>\n      <li  class=\"nav-item aside deals\">\n          <i class=\"fa fa-cogs\" aria-hidden=\"true\"></i>\n          <a class=\"nav-link\" (click)=\"closeMenu()\" routerLink=\"/coffee_machine\">Coffee Machines</a>\n      </li>\n      <li  class=\"nav-item aside deals\">\n          <i class=\"fa fa-snowflake-o\" aria-hidden=\"true\"></i>\n          <a class=\"nav-link\" (click)=\"closeMenu()\" routerLink=\"/accessories\">Accessories</a>\n      </li>\n      <li class=\"nav-item aside\">\n        <i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i>\n        <a class=\"nav-link\" (click)=\"closeMenu()\" routerLink=\"/brewing\">Brewing Method</a>\n      </li>\n      <!--<li class=\"nav-item aside\" >\n        <i class=\"fa fa-product-hunt\" aria-hidden=\"true\" *ngIf=\"regUser && !anoUser\"></i>\n        <a class=\"nav-link\" (click)=\"closeMenu()\" routerLink=\"/products\" *ngIf=\"regUser && !anoUser\" routerLinkActive=\"activated\">Products</a>\n      </li>-->\n      <li class=\"nav-item aside\" >\n         <i class=\"fa fa-product-hunt\" aria-hidden=\"true\" *ngIf=\"previlege\"></i>\n        <a class=\"nav-link\" (click)=\"closeMenu()\" routerLink=\"/dashboard\" *ngIf=\"previlege\">cPanel</a>\n      </li>\n      <li class=\"nav-item aside\" >\n        <i class=\"fa fa-compress\" aria-hidden=\"true\"></i>\n        <a class=\"nav-link\" (click)=\"closeMenu()\" routerLink=\"/contacts\" >Contact</a>\n      </li>\n      <li class=\"nav-item aside\">\n        <i class=\"fa fa-sign-in\" aria-hidden=\"true\" *ngIf=\"!regUser && !anoUser\"></i>\n        <a class=\"nav-link\" (click)=\"closeMenu()\" routerLink=\"/login\" *ngIf=\"!regUser && !anoUser\">Login</a>\n      </li>\n       <li class=\"nav-item aside\" >\n         <i class=\"fa fa-sign-out\" aria-hidden=\"true\" *ngIf=\"regUser || anoUser\"></i>\n        <a class=\"nav-link\" (click)=\"closeMenu()\" (click)=\"signOut()\" *ngIf=\"regUser || anoUser\" >Sign Out</a>\n      </li>\n       <!--<li class=\"nav-item\" *ngIf=\"userEmail\">\n        <a class=\"nav-link\" >{{userEmail}}</a>\n      </li>-->\n    </ul>\n    <hr>\n    <div class=\"show-case\">\n      \n      <div class=\"show-case-images\">\n        <div class=\"case-1\">\n          <img  src=\"assets/beans-coffee-cup.jpeg\" alt=\"\">\n        </div>\n        <div class=\"case-2\" >\n          <img src=\"assets/coffee-machine.jpg\" alt=\"\">\n        </div>\n      </div>\n      <p>Welcome to London City Roast. We roast over 100 wonderful coffees from around the world,\n         including rare and exclusive varieties \n        </p>\n        <h5><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n            <span>0208 310 8517</span>\n        </h5>\n\n    </div>\n  </div>\n</section>\n\n<!--Anonymous login continue-->\n<div class=\"anonymous-wrapper\" *ngIf=\"loginAlert\">\n  <div class=\"anonymous\">\n    <div class=\"ano-content jumbotron\">\n      <i (click)=\"closeWindow()\" class=\"fa fa-close\" aria-hidden=\"true\"></i>\n      <button (click)=\"logAnonymous()\" class=\"ano-b btn btn-default mce-btn-small\" type=\"button\"><i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i> Be Our Guest</button>\n      <p style=\"margin: 0px; padding: 0px;\">OR</p>\n      <p>Login with your email to benefit from the best experience our website can offer </p>\n      <button (click)=\"closeWindow()\" routerLink=\"/login\" class=\"btn mce-btn-small btn-success\" type=\"button\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Login</button>\n      <button (click)=\"closeWindow()\" routerLink=\"/signup\" class=\"btn mce-btn-small btn-primary\" type=\"button\"><i class=\"fa fa-registered\" aria-hidden=\"true\"></i> Register</button>\n      <br>\n      <!--<h4 style=\"margin-top: 10px;\">OR</h4>-->\n      <!--<p>You may also want to <span class=\"btn\" id=\"span\" style=\"text-decoration: underline; color: lightslategrey\" (click)=\"registerUser()\">register</span> here </p>\n      <button (click)=\"closeWindow()\" class=\"btn mce-btn-large btn-danger\" type=\"\">close</button>-->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 60px;\n  background-color: #35414C;\n  z-index: 1000;\n  opacity: 0; }\n\n.activated {\n  color: #ffffff !important;\n  background-color: #000;\n  padding: 0 10px !important;\n  transition: 0.2s; }\n\n.nav-inner {\n  position: fixed;\n  z-index: 10001;\n  width: 100%; }\n  .nav-inner .navbar-main {\n    background: transparent;\n    padding: 0px !important;\n    width: 90%;\n    margin: 0 auto; }\n    .nav-inner .navbar-main .right-nav {\n      position: absolute;\n      right: 50px;\n      color: #fff !important; }\n      .nav-inner .navbar-main .right-nav ul, .nav-inner .navbar-main .right-nav li {\n        margin: 0px;\n        padding: 0px; }\n      .nav-inner .navbar-main .right-nav ul li a {\n        margin: 0px;\n        padding: 0px 10px;\n        font-family: 'Dosis', sans-serif;\n        text-transform: uppercase;\n        font-weight: 100;\n        font-size: 0.8em;\n        letter-spacing: 0.2em;\n        color: #fff !important;\n        opacity: .5;\n        line-height: 60px;\n        transition: 0.2s; }\n        .nav-inner .navbar-main .right-nav ul li a:hover {\n          cursor: pointer;\n          background-color: #000000;\n          padding: 0 5px !important;\n          transition: 0.2s; }\n      .nav-inner .navbar-main .right-nav .shop-deal {\n        transition: 0.2s; }\n        .nav-inner .navbar-main .right-nav .shop-deal .prod-cat {\n          display: none;\n          position: absolute;\n          top: 0;\n          margin-top: 60px;\n          background-color: red;\n          width: 200px;\n          height: 200px;\n          transition: 0.2s; }\n        .nav-inner .navbar-main .right-nav .shop-deal:hover {\n          background-color: red !important;\n          padding: 0px 10px !important;\n          transition: 0.2s; }\n    .nav-inner .navbar-main .brand {\n      width: 80px;\n      height: 80px;\n      border-radius: 50%;\n      opacity: 0.8; }\n      .nav-inner .navbar-main .brand img {\n        width: 80px;\n        height: 80px;\n        padding: 5px;\n        -webkit-filter: grayscale(100%);\n        filter: grayscale(100%); }\n    .nav-inner .navbar-main .brand-logo {\n      position: absolute;\n      top: 10px;\n      width: 90%; }\n      .nav-inner .navbar-main .brand-logo .brand-list {\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        display: -webkit-box;\n        /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */\n        /* OLD: Firefox (buggy) */\n        display: -ms-flexbox;\n        /* MID: IE 10 */\n        display: -webkit-flex;\n        /* NEW, Chrome 21?28, Safari 6.1+ */ }\n        .nav-inner .navbar-main .brand-logo .brand-list .brand-item-text {\n          padding: 10px 5px; }\n          .nav-inner .navbar-main .brand-logo .brand-list .brand-item-text h6 {\n            color: lightslategrey;\n            margin: 0px;\n            padding: 0px;\n            font-size: 0.5em;\n            padding-left: 10px;\n            font-family: 'Satisfy', cursive;\n            letter-spacing: 3px; }\n      .nav-inner .navbar-main .brand-logo span.logo-text {\n        font-family: 'Dosis', sans-serif;\n        text-transform: uppercase;\n        color: lightgrey;\n        font-weight: 800;\n        letter-spacing: 2px;\n        padding: 0px;\n        margin: 0px;\n        font-size: 1em;\n        margin-top: 20px !important; }\n\n.anonymous-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100vmax;\n  z-index: 10000;\n  background-color: rgba(0, 0, 0, 0.5); }\n  .anonymous-wrapper .anonymous {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    width: 40%;\n    margin-left: -20%;\n    text-align: center;\n    transition: 0.2s; }\n    .anonymous-wrapper .anonymous .ano-content {\n      position: relative;\n      background-color: #fff;\n      opacity: 0.99;\n      width: 100%; }\n      .anonymous-wrapper .anonymous .ano-content button.ano-b {\n        background-color: slategray;\n        color: #fff; }\n      .anonymous-wrapper .anonymous .ano-content i.fa-close {\n        position: absolute;\n        right: 10px;\n        top: 10px;\n        font-size: 20px; }\n        .anonymous-wrapper .anonymous .ano-content i.fa-close:hover {\n          color: red;\n          cursor: pointer; }\n      .anonymous-wrapper .anonymous .ano-content p {\n        padding: 10px 0px; }\n      .anonymous-wrapper .anonymous .ano-content span#span {\n        color: red; }\n\n.cartSum {\n  padding: 5px 0px;\n  background-color: green; }\n  .cartSum i {\n    font-size: 15px;\n    color: #f48024;\n    margin-right: 4px; }\n  .cartSum span {\n    margin: 0px;\n    padding: 0px;\n    font-size: 14px; }\n\n.login-out {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 100000;\n  height: 200px;\n  background-color: lightgray;\n  margin: 0px;\n  transition: 0.4s;\n  overflow: hidden; }\n  .login-out #iClose i {\n    padding: 5px 0px 0px 10px;\n    color: lightslategrey; }\n    .login-out #iClose i:hover {\n      color: red;\n      cursor: pointer; }\n  .login-out .login-items {\n    padding-right: 10px !important;\n    margin: 0px !important;\n    margin: 10px 0px !important; }\n    .login-out .login-items li {\n      padding: 5px 0px !important; }\n      .login-out .login-items li:hover {\n        cursor: pointer;\n        color: lightslategray; }\n    .login-out .login-items hr {\n      margin: 0px;\n      padding: 0px; }\n\n.dropdow-colp {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  z-index: 99; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentications_auth_service__ = __webpack_require__("../../../../../src/app/authentications/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuComponent = (function () {
    function MenuComponent(authService, cartService, router) {
        this.authService = authService;
        this.cartService = cartService;
        this.router = router;
        this.isRedlogo = false;
        this.regUser = false;
        this.anoUser = false;
        this.totalItem = 90;
        this.previlege = false;
        this.loginAlert = false;
        this.isImenu = 0;
        this.isMenuIcon = true;
        this.loginDraw = 0;
        this.closeWind = false;
    }
    MenuComponent.prototype.productCategory = function () {
        this.router.navigate(["products/?", { category: "coffees", dispay: "true" }]);
    };
    MenuComponent.prototype.openDrawer = function () {
        this.loginDraw = 150;
        this.closeWind = true;
    };
    MenuComponent.prototype.closeDrawer = function () {
        this.loginDraw = 0;
        this.closeWind = false;
    };
    MenuComponent.prototype.openMenu = function () {
        this.isImenu = 100;
        this.isMenuIcon = false;
    };
    MenuComponent.prototype.closeMenu = function () {
        this.isImenu = 0;
        this.isMenuIcon = true;
    };
    MenuComponent.prototype.changeLogo = function () {
        var _this = this;
        setInterval(function () {
            _this.isRedlogo = true;
        }, 10000);
        setInterval(function () {
            _this.isRedlogo = false;
        }, 15000);
    };
    MenuComponent.prototype.registerUser = function () {
        this.loginAlert = false;
        this.router.navigate(["/signup"]);
    };
    MenuComponent.prototype.loginUser = function () {
        this.loginAlert = false;
        this.router.navigate(["/login"]);
    };
    MenuComponent.prototype.closeWindow = function () {
        this.loginAlert = false;
    };
    MenuComponent.prototype.signOut = function () {
        var _this = this;
        // if(this.anoUser){
        //   this.cartService.clear();
        // //   this.cartService.deleteCustomerDetails(); 
        // }
        this.authService.logOut().then(function (res) {
            localStorage.removeItem('userId');
            localStorage.removeItem('currentUser');
            localStorage.removeItem('idToken');
            if (localStorage.getItem('returnId')) {
                localStorage.removeItem('returnId');
            }
            _this.regUser = false;
            _this.anoUser = false;
            _this.previlege = false;
            setTimeout(function () { _this.router.navigate(["/login"]); }, 500);
        }, function (error) {
            console.log(error);
        });
        // this.router.navigate(["/login"]);
    };
    // logAnonymous(){
    //     if(!localStorage.getItem('idToken')){
    //         this.authService.logAnonymous()
    //             .then(success=>{
    //             //==This section runs to save the current user to the local-storage==//
    //             this.loginAlert = false;
    //             this.authService.authChange();
    //             // this.router.navigate(['/']);
    //             })
    //             .catch(error=>console.log(error));
    //         } 
    //     }
    //Need to move the fuction to service component
    // getCartTotal(){
    //     this.cartService.getCart()
    //         .subscribe(cart=>{
    //             cart.forEach((cart)=>{
    //             this.cartTotal.push(cart.qty);
    //             this.totalItem = this.cartTotal.reduce((sum, num)=>{
    //                 return sum + Math.ceil(num);
    //             }, 0)
    //         }); 
    //         });
    // }
    MenuComponent.prototype.userChange = function () {
        var _this = this;
        this.authService.authUserState().subscribe(function (user) {
            if (user != null) {
                if (user.isAnonymous) {
                    _this.anoUser = true;
                }
                else if (user.email) {
                    _this.regUser = true;
                }
            }
        });
    };
    MenuComponent.prototype.clearTimer = function () {
        clearInterval(this.timer);
    };
    MenuComponent.prototype.stripMail = function (email) {
        var regx = /[A-Za-z]+\.?-?[A-Za-z]/;
        return email = regx;
    };
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.createDb();
        setTimeout(function () {
            _this.cartService.retrieveCart()
                .subscribe(function (carts) {
                _this.cartTotal = carts[1];
            });
        }, 1200);
        var domEl = document.getElementById("menu-header");
        var brandEl = document.getElementById("brand");
        window.addEventListener('scroll', function (e) {
            var yPos = window.pageYOffset;
            if (yPos > 200) {
                domEl.style.opacity = "1";
                domEl.style.transition = ".3s";
                brandEl.style.backgroundColor = "#35414C";
                brandEl.style.transition = "1.2s";
            }
            else {
                domEl.style.transition = ".3s";
                domEl.style.opacity = "0";
                brandEl.style.background = "transparent";
                brandEl.style.transition = "1.2s";
            }
        });
        this.userChange();
        // this.getCartTotal();
        this.timer = setInterval(function () {
            _this.userChanges();
        }, 1500);
        // this.authService.authChange();
        // this.regUser = localStorage.getItem('currentUser');
        this.changeLogo();
        // setTimeout(()=>{
        //     if(!localStorage.getItem('idToken')){
        //         this.loginAlert = true;
        //     }
        // }, 50000);
        this.currentuser = this.stripMail(localStorage.getItem('currentUser'));
    };
    MenuComponent.prototype.userChanges = function () {
        var _this = this;
        console.log("Checking user presence");
        if (localStorage.getItem('idToken')) {
            this.authService.getAccount(localStorage.getItem('idToken'))
                .subscribe(function (adm) {
                if (adm) {
                    // console.log(adm["isAdmin"]);
                    if (adm["isAdmin"] == true) {
                        _this.previlege = true;
                        // console.log("Admin truthy");
                        _this.clearTimer();
                    }
                    else {
                        _this.previlege = false;
                        _this.clearTimer();
                    }
                }
                else {
                    _this.clearTimer();
                    return 0;
                }
            });
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.scss"), __webpack_require__("../../../../../src/app/menu/media-query/menu.query.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentications_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentications_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], MenuComponent);

var _a, _b, _c;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MenuModule = (function () {
    function MenuModule() {
    }
    return MenuModule;
}());
MenuModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: []
    })
], MenuModule);

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ "../../../../../src/app/menu/stylesheet.media.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .footer-container {\n    display: none; }\n  .app-header {\n    position: relative;\n    background-color: #35414C;\n    top: 0px; }\n    .app-header .header-container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 700px;\n      overflow: hidden; }\n      .app-header .header-container img {\n        position: fixed;\n        background-size: cover;\n        width: 1200px;\n        min-height: 700px;\n        margin-left: -350px;\n        opacity: 0.5; }\n  .banner-text {\n    margin: 0 auto;\n    left: 0px;\n    top: 250px;\n    width: 100%;\n    margin-left: 0px;\n    text-align: center; }\n    .banner-text .carousel-inner {\n      margin: 0 auto;\n      padding: 0px 10px; }\n    .banner-text h1 {\n      color: lightgray;\n      font-family: 'Lobster', cursive; }\n    .banner-text h4 {\n      color: lightgrey;\n      font-family: 'Caveat', cursive;\n      letter-spacing: 1px; }\n  .banner-tug {\n    position: absolute;\n    bottom: 0px; }\n  .footer-mobile {\n    position: relative;\n    background-color: #35414C; }\n  .footer-brand .left-line {\n    background-color: #f48024;\n    height: 7px;\n    width: 100%; }\n  .footer-brand .branded {\n    position: relative;\n    text-align: center;\n    top: -50px;\n    left: 50%;\n    z-index: 100;\n    width: 100px;\n    height: 100px;\n    margin-left: -50px;\n    border: 5px solid;\n    border-color: #f48024;\n    border-radius: 50%;\n    padding: 0px;\n    overflow: hidden;\n    background-color: #f48024; }\n    .footer-brand .branded img {\n      width: 100%;\n      margin: 0px;\n      padding: 0px; }\n  .footer-content-mobile {\n    position: relative;\n    padding: 0px 10px;\n    box-sizing: border-box;\n    text-align: center;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline; }\n    .footer-content-mobile .copy-right {\n      color: #f48024; }\n    .footer-content-mobile .footer-address-mobile h4 {\n      font-size: 1em; }\n    .footer-content-mobile .footer-address-mobile h5, .footer-content-mobile .footer-address-mobile h6, .footer-content-mobile .footer-address-mobile h4 {\n      color: lightgrey; }\n    .footer-content-mobile .footer-address-mobile h6 {\n      font-size: 14px; }\n    .footer-content-mobile .footer-address-mobile h5 {\n      font-size: 16px;\n      padding: 2px 0px; }\n    .footer-content-mobile .social-media-mobile {\n      text-align: center;\n      margin: 0 auto;\n      margin-bottom: 30px; }\n      .footer-content-mobile .social-media-mobile i {\n        color: #fff;\n        font-size: 30px;\n        text-align: center; }\n    .footer-content-mobile .developer-info {\n      padding-bottom: 20px;\n      text-align: center;\n      opacity: 0.4; }\n      .footer-content-mobile .developer-info h1 {\n        font-size: 14px;\n        color: lightslategray;\n        padding: 0px;\n        margin: 0px; }\n      .footer-content-mobile .developer-info p {\n        color: #f48024;\n        font-size: 12px;\n        padding: 0px;\n        margin: 0px;\n        padding-top: 5px; } }\n\n@media only screen and (min-width: 640px) {\n  .footer-mobile {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/stylesheet.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-header {\n  position: relative;\n  background-color: #35414C;\n  top: 0px; }\n  .app-header .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 700px;\n    overflow: hidden; }\n    .app-header .header-container img {\n      position: fixed;\n      background-size: cover;\n      width: 100%;\n      min-height: 700px;\n      opacity: 0.2; }\n\n.banner-text {\n  position: absolute;\n  top: 280px;\n  left: 50%;\n  max-width: 500px;\n  margin-left: -250px;\n  text-align: center; }\n  .banner-text h1 {\n    color: lightgray;\n    font-family: 'Lobster', cursive; }\n  .banner-text h4 {\n    color: lightgrey;\n    font-family: 'Caveat', cursive;\n    letter-spacing: 1px; }\n  .banner-text .banner-link button {\n    background: transparent;\n    color: lightgray;\n    border-color: lightgray; }\n    .banner-text .banner-link button:hover {\n      color: lightslategrey;\n      border-color: lightslategrey; }\n    .banner-text .banner-link button i {\n      font-size: 22px; }\n  .banner-text .banner-link .arrow i {\n    margin-top: 20px;\n    color: #f48024;\n    font-size: 22px;\n    transition: 1s; }\n    .banner-text .banner-link .arrow i:hover {\n      margin-top: 30px;\n      cursor: pointer; }\n\n.banner-tug {\n  position: absolute;\n  bottom: 0px; }\n\n#next-sec {\n  transition: 1s; }\n\n.footer-container {\n  position: relative;\n  background-color: #35414C;\n  border-top: 2px solid;\n  border-color: #f48024; }\n\n.footer-content {\n  padding: 20px 10px;\n  box-sizing: border-box;\n  text-align: center; }\n  .footer-content .footer-brand {\n    margin-bottom: 10px; }\n    .footer-content .footer-brand img {\n      -webkit-filter: grayscale(100%);\n      filter: grayscale(100%);\n      opacity: 0.5; }\n  .footer-content .footer-address h5, .footer-content .footer-address h6 {\n    color: lightgrey;\n    letter-spacing: 1px; }\n  .footer-content .footer-address #imail {\n    color: #f48024;\n    letter-spacing: 2px;\n    opacity: 0.6; }\n  .footer-content .footer-address #crt {\n    font-size: 14px;\n    letter-spacing: 3px; }\n  .footer-content .footer-address #tel {\n    letter-spacing: 4px; }\n  .footer-content .footer-address #tcp {\n    color: aquamarine;\n    opacity: 0.5; }\n    .footer-content .footer-address #tcp #tc:hover {\n      cursor: pointer;\n      color: lightslategray; }\n    .footer-content .footer-address #tcp #pv:hover {\n      cursor: pointer;\n      color: lightslategray; }\n  .footer-content #designer p {\n    color: lightslategray;\n    opacity: 0.5;\n    letter-spacing: 3px; }\n  .footer-content .social-media {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n    .footer-content .social-media h1 {\n      margin: 20px; }\n      .footer-content .social-media h1 i {\n        color: #fff; }\n        .footer-content .social-media h1 i:hover {\n          cursor: pointer;\n          color: lightslategray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/models/contact.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.telephone = '';
        this.message = '';
    }
    return Contact;
}());

//# sourceMappingURL=contact.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/customer-details.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    function Customer() {
        // this.customerId = "LCREF"+Math.floor((Math.random() * 1000) + 100);
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.gender = "";
        this.telephone = "";
        this.addressOne = "";
        this.addressTwo = "";
        this.postCode = "";
        this.city = "";
        this.country = "United Kingdom";
        this.deliveryOne = "";
        this.deliveryTwo = "";
        this.deliveryCode = "";
        this.deliveryCity = "";
        this.deliveryCountry = "United Kingdom";
        this.deliveryTrue = "";
    }
    return Customer;
}());

//# sourceMappingURL=customer-details.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/order.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerOrder; });
var CustomerOrder = (function () {
    function CustomerOrder() {
        this.customerId = "";
        this.orderId = "LCREF" + Math.floor((Math.random() * 1000) + 100);
        this.customerName = " ";
        this.email = "";
        this.telephone = "";
        this.address = "";
        this.postcode = "";
        this.city = "";
        this.country = "";
        this.amount = "";
    }
    return CustomerOrder;
}());

//# sourceMappingURL=order.model.js.map

/***/ }),

/***/ "../../../../../src/app/products/accessory/accessory.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"cf-page-container\">\n  <div class=\"cf-page-head\">\n    <!--<img src=\"assets/beans-coffee-cup.jpeg\"  alt=\"coffee-beans\">-->\n    <div class=\"cf-page-title\">\n      <h1>Acces<strong style=\"color:#f48024\">sories</strong></h1>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"coffees container\">\n    <!-- <div class=\"togInfo\">\n        <h6>At London City Roast, we are very particular about our coffee. We know what it takes to build a loyal customer base, and how providing a great-tasting coffee improves your bottom line.</h6>\n        <p> We source our coffees from all over the world, and roast them at our \n            London Headquarters, to guarantee freshness and great taste. With over \n            5 years of roasting and blending experience, we pride ourselves on \n            bringing you some of the finest coffees available.\n          Working with our experienced roaster on a daily basis, we ensure our \n          coffees are rarely older than a few days, by the time they reach our \n          customers across the country.\n         </p>\n      </div> -->\n  <div class=\"row content-wrapper\">\n      <div class=\"col xs6 sm6 m4 l3 coffee\" *ngFor=\"let product of accessory$\">\n        <div class=\"coffee-wrapper\">\n          <div class=\"coffee-img\">\n            <div class=\"p-size\">\n              <div *ngIf=\"product.size\" class=\"badge\">\n                <h5 >{{product.size}}</h5>\n              </div>\n            </div>\n            <img (click)=\"viewProduct(product)\" [src]=\"product.imageUrl\" alt=\"product image\">\n            </div>\n            <div class=\"coffee-title\">\n              <h1>{{product.name}}</h1>\n              <h6>{{product.blend}}</h6>\n              <h5 *ngIf=\"product.oldprice\" id=\"oldprice\"><small>was</small> {{product.oldprice | currency: 'GBP' :true}}</h5>\n              <h6 style=\"color:red\"><small>now</small> {{product.price | currency: 'GBP' :true}}</h6>\n            </div>\n            <div class=\"button\">\n                <a><button (click)=\"viewProduct(product)\" class=\"btn btn-default\" type=\"\"><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add</button></a>\n            </div>\n        </div>\n          \n        </div>\n         \n    </div>\n</section>\n<div class=\"main-container no-product\"  *ngIf=\"accessory$ && accessory$.length < 1\">\n  <p>There is no product in this category</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/accessory/accessory.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cf-page-container {\n  background-color: #fff; }\n  .cf-page-container .cf-page-head {\n    background-color: #35414C;\n    width: 100%;\n    height: 140px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden;\n    border-radius: 0px 0px 0px 0px; }\n    .cf-page-container .cf-page-head img {\n      opacity: 0.2;\n      position: fixed;\n      margin-bottom: 100px;\n      margin-top: -100px;\n      width: 100%;\n      height: 100%; }\n    .cf-page-container .cf-page-head .cf-page-title {\n      width: 90%;\n      position: absolute;\n      top: 80px;\n      right: 50px; }\n      .cf-page-container .cf-page-head .cf-page-title h1 {\n        color: lightslategrey;\n        font-size: 1.5rem; }\n\n.coffees {\n  margin: auto;\n  text-align: center;\n  transition: 2s;\n  transition-timing-function: ease; }\n  .coffees .content-wrapper {\n    margin: 5px; }\n    .coffees .content-wrapper .coffee {\n      margin: 0px;\n      padding: 0px;\n      padding: 10px 5px; }\n      .coffees .content-wrapper .coffee .coffee-wrapper {\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n        padding: 10px; }\n        .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img {\n          position: relative; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img img {\n            width: 150px; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size {\n            position: absolute;\n            text-align: center; }\n            .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size .badge {\n              margin: 0 auto;\n              text-align: center;\n              -ms-flex-line-pack: center;\n                  align-content: center;\n              border: 1.5px solid;\n              border-color: #f48024;\n              width: 35px;\n              height: 35px;\n              border-radius: 50%;\n              background-color: rgba(0, 0, 0, 0.9);\n              overflow: hidden; }\n              .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size .badge h5 {\n                font-size: 0.7em;\n                margin: 10;\n                text-align: center;\n                color: #f48024; }\n        .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title {\n          text-align: center;\n          padding: 10px 10px; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title h6 {\n            font-size: 14px;\n            margin: 0px;\n            color: gray; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title h1 {\n            font-size: 16px;\n            color: lightslategray; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title #oldprice {\n            text-decoration: line-through;\n            color: #f48024;\n            font-size: 14px; }\n        .coffees .content-wrapper .coffee .coffee-wrapper .button {\n          margin-top: 5px;\n          background-color: transparent !important;\n          color: #f48024;\n          border-color: #f48024;\n          text-align: center; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .button a:hover {\n            background-color: #000 !important;\n            color: #f48024;\n            border-color: #f48024; }\n\n.no-product {\n  min-height: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/accessory/accessory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccessoryComponent = (function () {
    function AccessoryComponent(producService, cartService, router) {
        this.producService = producService;
        this.cartService = cartService;
        this.router = router;
        this.accessory$ = [];
        this.togInfo = true;
        this.togtxt = 'show';
    }
    AccessoryComponent.prototype.viewProduct = function ($id) {
        this.router.navigate(['/product/?', { id: $id.id, product_name: $id.name }]);
    };
    AccessoryComponent.prototype.toggleInfo = function () {
        this.togInfo = this.togInfo ? false : true;
        if (this.togInfo == true) {
            this.togtxt = 'show';
        }
        else {
            this.togtxt = 'hide';
        }
    };
    AccessoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.producService.getProduct()
            .subscribe(function (products) {
            _this.accessory$ = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](products, { 'tag': 'accessories' });
        });
    };
    return AccessoryComponent;
}());
AccessoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-accessory',
        template: __webpack_require__("../../../../../src/app/products/accessory/accessory.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/accessory/accessory.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_check_out_service__["a" /* CheckOutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], AccessoryComponent);

var _a, _b, _c;
//# sourceMappingURL=accessory.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"cf-page-container\">\n  <div class=\"cf-page-head\">\n    <!--<img src=\"assets/beans-coffee-cup.jpeg\"  alt=\"coffee-beans\">-->\n    <div class=\"cf-page-title\">\n      <h1>Cate<strong style=\"color:#f48024\">gories</strong></h1>\n    </div>\n  </div>\n</section>\n<cat-menu></cat-menu>\n<section class=\"coffees container\">\n    <div class=\"row content-wrapper\">\n      <div class=\"col col l8\">\n          <div class=\"col xs6 s6 m6 l4 coffee\" *ngFor=\"let product of products$\">\n            <div class=\"coffee-wrapper\">\n              <div class=\"coffee-img\">\n                <!--<div class=\"p-size\">\n                  <div *ngIf=\"product.size\" class=\"badge\">\n                    <h5 >{{product.size}}</h5>\n                  </div>\n                </div>-->\n                <img (click)=\"viewProduct(product)\" [src]=\"product.imageUrl\" alt=\"product image\">\n                </div>\n                <div class=\"coffee-title\">\n                  <h1>{{product.name}}</h1>\n                  <h6>{{product.blend}}</h6>\n                  <h5 *ngIf=\"product.oldprice\" id=\"oldprice\"><small>was</small> {{product.oldprice | currency: 'GBP' :true}}</h5>\n                  <h6 style=\"color:red\"><small>now</small> {{product.price | currency: 'GBP' :true}}</h6>\n                  <!--<h6>{{product.roast}}</h6>-->\n                  <a><button (click)=\"viewProduct(product)\" class=\"btn btn-default\" type=\"\"><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add</button></a>\n                </div>\n                <div class=\"coffee-description\">\n                  \n                </div>\n            </div>\n              \n            </div>\n          </div>\n          <div class=\"col xs12 l4\">\n            <side-cart></side-cart>\n          </div>\n            \n      </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/products/category/category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cf-page-container {\n  background-color: #fff; }\n\n.cf-page-head {\n  background-color: #35414C;\n  width: 100%;\n  height: 140px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  border-radius: 0px 0px 0px 0px; }\n  .cf-page-head img {\n    opacity: 0.2;\n    position: fixed;\n    margin-bottom: 100px;\n    margin-top: -100px;\n    width: 100%;\n    height: 100%; }\n  .cf-page-head .cf-page-title {\n    width: 90%;\n    position: absolute;\n    top: 80px;\n    right: 50px; }\n    .cf-page-head .cf-page-title h1 {\n      color: lightslategrey;\n      font-size: 1.5rem; }\n\n@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .cf-page-head .cf-page-title {\n    right: 20px; }\n    .cf-page-head .cf-page-title h1 {\n      color: lightslategrey;\n      font-size: 1.5rem; } }\n\n.page-content {\n  height: 500px; }\n\n.coffees {\n  min-height: 500px;\n  margin: auto;\n  margin-bottom: 50px;\n  text-align: center;\n  transition: 2s;\n  transition-timing-function: ease; }\n  .coffees .content-wrapper {\n    margin: 5px; }\n    .coffees .content-wrapper .coffee {\n      margin: 0px;\n      padding: 0px;\n      padding: 10px 5px; }\n      .coffees .content-wrapper .coffee .coffee-wrapper {\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n        padding: 10px; }\n        .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img {\n          position: relative; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img img {\n            width: 150px; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size {\n            position: absolute;\n            text-align: center; }\n            .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size .badge {\n              margin: 0 auto;\n              text-align: center;\n              -ms-flex-line-pack: center;\n                  align-content: center;\n              padding: 20px 0px;\n              border: 1.5px solid;\n              border-color: #f48024;\n              width: 60px;\n              height: 60px;\n              border-radius: 50%;\n              background-color: rgba(0, 0, 0, 0.9);\n              overflow: hidden; }\n              .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size .badge h5 {\n                font-size: 14px;\n                margin: 10;\n                text-align: center;\n                color: #f48024; }\n        .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title {\n          text-align: center;\n          padding: 10px 10px; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title h6 {\n            font-size: 14px;\n            margin: 0px;\n            color: gray; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title h1 {\n            font-size: 16px;\n            color: lightslategray; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title #oldprice {\n            text-decoration: line-through;\n            color: #f48024;\n            font-size: 14px; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title button {\n            margin-top: 5px;\n            background-color: transparent !important;\n            color: #f48024;\n            border-color: #f48024; }\n            .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title button:hover {\n              background-color: #000 !important;\n              color: #f48024;\n              border-color: #f48024; }\n\n@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .coffees {\n    min-height: 500px;\n    margin: auto;\n    margin-bottom: 50px;\n    text-align: center;\n    transition: 2s;\n    transition-timing-function: ease; }\n    .coffees .content-wrapper {\n      margin: 5px; }\n      .coffees .content-wrapper .coffee {\n        margin: 0px;\n        padding: 0px;\n        padding: 10px 5px; }\n        .coffees .content-wrapper .coffee .coffee-wrapper {\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          padding: 10px; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img {\n            position: relative; }\n            .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img img {\n              width: 100px; }\n            .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .coffee-title button {\n              margin-top: 5px;\n              background-color: transparent !important;\n              color: #f48024;\n              border-color: #f48024;\n              font-size: 12px; }\n              .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .coffee-title button:hover {\n                background-color: #000 !important;\n                color: #f48024;\n                border-color: #f48024; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentications_auth_service__ = __webpack_require__("../../../../../src/app/authentications/auth-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryComponent = (function () {
    function CategoryComponent(router, route, productService, cartService, authService) {
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.authService = authService;
    }
    CategoryComponent.prototype.viewProduct = function ($id) {
        this.router.navigate(['/product/?', { id: $id.id, product_name: $id.name }]);
    };
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach((function (params) {
            _this.productService.getProduct().subscribe(function (products) {
                _this.products$ = products.filter(function (prodCat) { return prodCat.category.name === params['category']; });
            });
        }));
    };
    CategoryComponent.prototype.addtoCart = function (blend) {
        var _this = this;
        // console.log(qty, blend);
        if (!localStorage.getItem('idToken')) {
            this.authService.logAnonymous()
                .then(function (res) {
                _this.authService.authChange();
            })
                .catch(function (err) { return console.log(err); });
            // this.islogin = true;
            setTimeout(function () {
                // this.cartService.incrementQty(this.dproduct, 1, blend);
                // this.cartService.addCart(this.dproduct);
                _this.router.navigate(['/cart']);
            }, 500);
        }
        else if (localStorage.getItem('currentUser')) {
            // this.cartService.incrementQty(this.dproduct, 1, blend);
            // this.cartService.addCart(this.dproduct);
            this.router.navigate(['/cart']);
        }
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-category',
        template: __webpack_require__("../../../../../src/app/products/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/category/category.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_check_out_service__["a" /* CheckOutService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__authentications_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__authentications_auth_service__["a" /* AuthService */]) === "function" && _e || Object])
], CategoryComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/coffee/coffee-media-query.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .cf-page-container {\n    background-color: #fff;\n    padding-bottom: 50px; }\n  .cf-page-head {\n    background-color: #35414C;\n    width: 100%;\n    height: 200px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden;\n    border-radius: 0px 0px 0px 0px; }\n    .cf-page-head img {\n      opacity: 0.2;\n      position: fixed;\n      margin-bottom: -100px;\n      margin-top: 0px;\n      width: 100%;\n      height: 200px; }\n    .cf-page-head .cf-page-title {\n      position: absolute;\n      top: 130px;\n      right: 20px; }\n      .cf-page-head .cf-page-title h1 {\n        color: lightslategrey;\n        font-size: 1.5rem; }\n  #cover-page {\n    background-color: #fff;\n    position: relative; }\n    #cover-page .cf-page-content {\n      margin: 0px;\n      padding: 0px;\n      background-color: #fff;\n      position: relative;\n      z-index: 100;\n      min-height: 500px;\n      padding-bottom: 50px;\n      margin: 0 auto; }\n      #cover-page .cf-page-content .coffee-text {\n        margin: 0px;\n        padding: 0px;\n        margin: 0 auto;\n        max-width: 900px;\n        text-align: center; }\n        #cover-page .cf-page-content .coffee-text h1 {\n          font-size: 1.8em;\n          margin: 0px;\n          padding: 0px; }\n        #cover-page .cf-page-content .coffee-text p {\n          margin-top: 15px; }\n      #cover-page .cf-page-content .coffees {\n        margin: auto;\n        text-align: center; }\n        #cover-page .cf-page-content .coffees .content-wrapper {\n          margin: 5px; }\n          #cover-page .cf-page-content .coffees .content-wrapper .coffee {\n            margin: 0px;\n            padding: 0px;\n            padding: 10px 5px; }\n            #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper {\n              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n              padding: 10px; }\n              #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img img {\n                width: 100px; }\n              #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size {\n                position: absolute;\n                text-align: center; }\n                #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size .badge {\n                  margin: 0 auto;\n                  text-align: center;\n                  -ms-flex-line-pack: center;\n                      align-content: center;\n                  padding: 10px 0px;\n                  border: 1px solid;\n                  border-color: #f48024;\n                  width: 40px;\n                  height: 40px;\n                  border-radius: 50%;\n                  background-color: rgba(0, 0, 0, 0.9);\n                  overflow: hidden; }\n                  #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size .badge h5 {\n                    font-size: 11px;\n                    margin: 10;\n                    text-align: center;\n                    color: #f48024; }\n              #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title {\n                text-align: center;\n                padding: 10px 10px; }\n                #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title h6 {\n                  font-size: 12px;\n                  margin: 0px;\n                  color: gray; }\n                #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title h1 {\n                  font-size: 13px;\n                  color: lightslategray; }\n                #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title button {\n                  position: relative;\n                  margin: 0 auto;\n                  background-color: transparent !important;\n                  color: #f48024;\n                  border-color: #f48024;\n                  font-size: 10px;\n                  margin-top: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/coffee/coffee.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"cf-page-container\">\n  <div class=\"cf-page-head\">\n    <img src=\"assets/beans-coffee-cup.jpeg\"  alt=\"coffee-beans\">\n    <div class=\"cf-page-title\">\n      <h1>Coff<strong style=\"color:#f48024\">ees</strong></h1>\n    </div>\n  </div>\n</section>\n\n<!-- <section class=\"cf-page-container\">\n  <div class=\"cf-page-head\">\n    <img src=\"assets/beans-coffee-cup.jpeg\"  alt=\"coffee-beans\">\n    <div class=\"cf-page-title\">\n      <h1>Our Coffee</h1>\n    </div>\n  </div>\n</section> -->\n\n<section id=\"cover-page\">\n  <section class=\"container cf-page-content\">\n    <div class=\"coffee-text\">\n      <h1>Our Great Coffee</h1>\n      <p style=\"margin:0px; padding:0px; opacity:0.4;\">toggle switch to hide/show text</p>\n      <a (click)=\"toggleInfo()\" type=\"\">\n        <i *ngIf=\"!togInfo\" class=\"fa fa-toggle-off\" aria-hidden=\"true\"></i>\n        <i *ngIf=\"togInfo\" class=\"fa fa-toggle-on\" aria-hidden=\"true\"></i>\n        <!--<i *ngIf=\"togInfo\" class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>-->\n        <!--<i *ngIf=\"!togInfo\" class=\"fa fa-caret-square-o-up\" aria-hidden=\"true\"></i>-->\n      </a>\n      <div class=\"togInfo\" [@coffeState]=\"togtxt\">\n        <h6>At London City Roast, we are very particular about our coffee. We know what it takes to build a loyal customer base, and how providing a great-tasting coffee improves your bottom line.</h6>\n        <p> We source our coffees from all over the world, and roast them at our \n            London Headquarters, to guarantee freshness and great taste. With over \n            5 years of roasting and blending experience, we pride ourselves on \n            bringing you some of the finest coffees available.\n          Working with our experienced roaster on a daily basis, we ensure our \n          coffees are rarely older than a few days, by the time they reach our \n          customers across the country.\n         </p>\n      </div>\n       \n    </div>\n      <section class=\"coffees\">\n        <div class=\"row content-wrapper\">\n            <div class=\"col xs6 s6 m4 l3 coffee\" *ngFor=\"let product of coffees$\">\n              <div class=\"coffee-wrapper\">\n                <div class=\"coffee-img\">\n                  <div class=\"p-size\">\n                    <div *ngIf=\"product.size\" class=\"badge\">\n                      <h5 >{{product.size}}</h5>\n                    </div>\n                  </div>\n                  <img (click)=\"viewProduct(product)\" [src]=\"product.imageUrl\" alt=\"product image\">\n                  </div>\n                  <div class=\"coffee-title\">\n                    <h1>{{product.name}}</h1>\n                    <h6>{{product.blend}}</h6>\n                    <h5 *ngIf=\"product.oldprice\" id=\"oldprice\"><small>was</small> {{product.oldprice | currency: 'GBP' :true}}</h5>\n                    <h6 style=\"color:red\"><small>now</small> {{product.price | currency: 'GBP' :true}}</h6>\n\n                  </div>\n                  <div class=\"button\">\n                      <a><button (click)=\"viewProduct(product)\" class=\"btn btn-default\" type=\"\"><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add</button></a>\n                  </div>\n\n              </div>\n                \n              </div>\n               \n          </div>\n    </section>\n  </section>\n</section>\n<div class=\"main-container no-product\"  *ngIf=\"coffees$ && coffees$.length < 1\">\n    <p>There is no product in this category</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/coffee/coffee.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cf-page-container {\n  background-color: #fff; }\n\n.cf-page-head {\n  background-color: #35414C;\n  width: 100%;\n  height: 200px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  border-radius: 0px 0px 0px 0px; }\n  .cf-page-head img {\n    opacity: 0.2;\n    position: fixed;\n    margin-bottom: 100px;\n    margin-top: -100px;\n    width: 100%;\n    height: 100%; }\n  .cf-page-head .cf-page-title {\n    width: 90%;\n    position: absolute;\n    top: 130px;\n    right: 50px; }\n    .cf-page-head .cf-page-title h1 {\n      color: lightslategrey;\n      font-size: 1.5rem; }\n\n#cover-page {\n  background-color: #fff;\n  position: relative; }\n  #cover-page .cf-page-content {\n    position: relative;\n    min-height: 500px;\n    background-color: #fff;\n    transition: 2s;\n    transition-timing-function: ease; }\n    #cover-page .cf-page-content .coffee-text {\n      margin: 0 auto;\n      max-width: 900px;\n      text-align: center;\n      margin-bottom: 40px; }\n      #cover-page .cf-page-content .coffee-text h1 {\n        font-size: 1.8em;\n        margin: 0px;\n        padding: 0px;\n        padding: 20px 0px;\n        margin-bottom: 0px; }\n      #cover-page .cf-page-content .coffee-text p {\n        margin-top: 15px; }\n      #cover-page .cf-page-content .coffee-text i {\n        font-size: 28px;\n        color: #f48024;\n        cursor: pointer; }\n      #cover-page .cf-page-content .coffee-text .togInfo {\n        margin-top: 20px; }\n    #cover-page .cf-page-content .coffees {\n      min-height: 500px;\n      margin: auto;\n      text-align: center;\n      transition: 2s;\n      transition-timing-function: ease; }\n      #cover-page .cf-page-content .coffees .content-wrapper {\n        margin: 5px; }\n        #cover-page .cf-page-content .coffees .content-wrapper .coffee {\n          margin: 0px;\n          padding: 0px;\n          padding: 10px 5px; }\n          #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper {\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n            padding: 10px; }\n            #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img {\n              position: relative; }\n              #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img img {\n                width: 150px; }\n              #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size {\n                position: absolute;\n                text-align: center; }\n                #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size .badge {\n                  margin: 0 auto;\n                  text-align: center;\n                  -ms-flex-line-pack: center;\n                      align-content: center;\n                  border: 1.5px solid;\n                  border-color: #f48024;\n                  width: 35px;\n                  height: 35px;\n                  border-radius: 50%;\n                  background-color: rgba(0, 0, 0, 0.9);\n                  overflow: hidden; }\n                  #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size .badge h5 {\n                    font-size: 0.7em;\n                    margin: 10;\n                    text-align: center;\n                    color: #f48024; }\n            #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title {\n              text-align: center;\n              padding: 10px 10px; }\n              #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title h6 {\n                font-size: 14px;\n                margin: 0px;\n                color: gray; }\n              #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title h1 {\n                font-size: 16px;\n                color: lightslategray; }\n              #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title #oldprice {\n                text-decoration: line-through;\n                color: #f48024;\n                font-size: 14px; }\n            #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .button {\n              margin-top: 5px;\n              background-color: transparent !important;\n              color: #f48024;\n              border-color: #f48024;\n              text-align: center; }\n              #cover-page .cf-page-content .coffees .content-wrapper .coffee .coffee-wrapper .button a:hover {\n                background-color: #000 !important;\n                color: #f48024;\n                border-color: #f48024; }\n\n.no-product {\n  min-height: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/coffee/coffee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoffeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoffeeComponent = (function () {
    function CoffeeComponent(producService, cartService, router) {
        this.producService = producService;
        this.cartService = cartService;
        this.router = router;
        this.coffees$ = [];
        this.togInfo = true;
        this.togtxt = 'show';
    }
    CoffeeComponent.prototype.viewProduct = function ($id) {
        this.router.navigate(['/product/?', { id: $id.id, product_name: $id.name }]);
    };
    CoffeeComponent.prototype.toggleInfo = function () {
        this.togInfo = this.togInfo ? false : true;
        if (this.togInfo == true) {
            this.togtxt = 'show';
        }
        else {
            this.togtxt = 'hide';
        }
    };
    CoffeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.producService.getProduct()
            .subscribe(function (products) {
            _this.coffees$ = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](products, { 'tag': 'coffees' });
            // console.log(this.coffees$);
        });
    };
    return CoffeeComponent;
}());
CoffeeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-coffee',
        template: __webpack_require__("../../../../../src/app/products/coffee/coffee.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/coffee/coffee.component.scss"), __webpack_require__("../../../../../src/app/products/coffee/coffee-media-query.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* trigger */])('coffeState', [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('show', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({
                    display: 'block',
                    transform: 'translateY(0%)',
                    zIndex: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('hide', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({
                    display: 'none',
                    zIndex: -1,
                    transform: 'translateY(100%)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* transition */])('show => hide', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('500ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* transition */])('hide => show', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('500ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_check_out_service__["a" /* CheckOutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], CoffeeComponent);

var _a, _b, _c;
//# sourceMappingURL=coffee.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/machine/machine.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"cf-page-container\">\n  <div class=\"cf-page-head\">\n    <!--<img src=\"assets/beans-coffee-cup.jpeg\"  alt=\"coffee-beans\">-->\n    <div class=\"cf-page-title\">\n      <h1>Coffee<strong style=\"color:#f48024\">Machine</strong></h1>\n    </div>\n  </div>\n</section>\n<section class=\"coffees container\">\n    <!-- <div class=\"togInfo\">\n        <h6>At London City Roast, we are very particular about our coffee. We know what it takes to build a loyal customer base, and how providing a great-tasting coffee improves your bottom line.</h6>\n        <p> We source our coffees from all over the world, and roast them at our \n            London Headquarters, to guarantee freshness and great taste. With over \n            5 years of roasting and blending experience, we pride ourselves on \n            bringing you some of the finest coffees available.\n          Working with our experienced roaster on a daily basis, we ensure our \n          coffees are rarely older than a few days, by the time they reach our \n          customers across the country.\n         </p>\n      </div> -->\n  <div class=\"row content-wrapper\">\n      <div class=\"col xs6 sm6 m4 l3 coffee\" *ngFor=\"let product of machines$\">\n        <div class=\"coffee-wrapper\">\n          <div class=\"coffee-img\">\n            <div class=\"p-size\">\n              <div *ngIf=\"product.size\" class=\"badge\">\n                <h5 >{{product.size}}</h5>\n              </div>\n            </div>\n            <img (click)=\"viewProduct(product)\" [src]=\"product.imageUrl\" alt=\"product image\">\n            </div>\n            <div class=\"coffee-title\">\n              <h1>{{product.name}}</h1>\n              <h6>{{product.blend}}</h6>\n              <h5 *ngIf=\"product.oldprice\" id=\"oldprice\"><small>was</small> {{product.oldprice | currency: 'GBP' :true}}</h5>\n              <h6 style=\"color:red\"><small>now</small> {{product.price | currency: 'GBP' :true}}</h6>\n              <!--<h6>{{product.roast}}</h6>-->\n              \n            </div>\n            <div class=\"button\">\n                <a><button (click)=\"viewProduct(product)\" class=\"btn btn-default\" type=\"\"><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add</button></a>\n            </div>\n        </div>\n          \n        </div>\n         \n    </div>\n</section>\n<div class=\"main-container no-product\"  *ngIf=\"machines$ && machines$.length < 1\">\n    <p>There is no product in this category</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/machine/machine.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cf-page-container {\n  background-color: #fff; }\n  .cf-page-container .cf-page-head {\n    background-color: #35414C;\n    width: 100%;\n    height: 140px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden;\n    border-radius: 0px 0px 0px 0px; }\n    .cf-page-container .cf-page-head img {\n      opacity: 0.2;\n      position: fixed;\n      margin-bottom: 100px;\n      margin-top: -100px;\n      width: 100%;\n      height: 100%; }\n    .cf-page-container .cf-page-head .cf-page-title {\n      width: 90%;\n      position: absolute;\n      top: 80px;\n      right: 50px; }\n      .cf-page-container .cf-page-head .cf-page-title h1 {\n        color: lightslategrey;\n        font-size: 1.5rem; }\n\n.coffees {\n  min-height: 500px;\n  margin: auto;\n  text-align: center;\n  transition: 2s;\n  transition-timing-function: ease; }\n  .coffees .content-wrapper {\n    margin: 5px; }\n    .coffees .content-wrapper .coffee {\n      margin: 0px;\n      padding: 0px;\n      padding: 10px 5px; }\n      .coffees .content-wrapper .coffee .coffee-wrapper {\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n        padding: 10px; }\n        .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img {\n          position: relative; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img img {\n            width: 150px; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size {\n            position: absolute;\n            text-align: center; }\n            .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size .badge {\n              margin: 0 auto;\n              text-align: center;\n              -ms-flex-line-pack: center;\n                  align-content: center;\n              padding: 20px 0px;\n              border: 1.5px solid;\n              border-color: #f48024;\n              width: 60px;\n              height: 60px;\n              border-radius: 50%;\n              background-color: rgba(0, 0, 0, 0.9);\n              overflow: hidden; }\n              .coffees .content-wrapper .coffee .coffee-wrapper .coffee-img .p-size .badge h5 {\n                font-size: 14px;\n                margin: 10;\n                text-align: center;\n                color: #f48024; }\n        .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title {\n          text-align: center;\n          padding: 10px 10px; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title h6 {\n            font-size: 14px;\n            margin: 0px;\n            color: gray; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title h1 {\n            font-size: 16px;\n            color: lightslategray; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .coffee-title #oldprice {\n            text-decoration: line-through;\n            color: #f48024;\n            font-size: 14px; }\n        .coffees .content-wrapper .coffee .coffee-wrapper .button {\n          margin-top: 5px;\n          background-color: transparent !important;\n          color: #f48024;\n          border-color: #f48024;\n          text-align: center; }\n          .coffees .content-wrapper .coffee .coffee-wrapper .button a:hover {\n            background-color: #000 !important;\n            color: #f48024;\n            border-color: #f48024; }\n\n.no-product {\n  min-height: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/machine/machine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MachineComponent = (function () {
    function MachineComponent(producService, cartService, router) {
        this.producService = producService;
        this.cartService = cartService;
        this.router = router;
        this.machines$ = [];
        this.togInfo = true;
        this.togtxt = 'show';
    }
    MachineComponent.prototype.viewProduct = function ($id) {
        this.router.navigate(['/product/?', { id: $id.id, product_name: $id.name }]);
    };
    MachineComponent.prototype.toggleInfo = function () {
        this.togInfo = this.togInfo ? false : true;
        if (this.togInfo == true) {
            this.togtxt = 'show';
        }
        else {
            this.togtxt = 'hide';
        }
    };
    MachineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.producService.getProduct()
            .subscribe(function (products) {
            _this.machines$ = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](products, { 'tag': 'machines' });
        });
    };
    return MachineComponent;
}());
MachineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-machine',
        template: __webpack_require__("../../../../../src/app/products/machine/machine.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/machine/machine.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_check_out_service__["a" /* CheckOutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], MachineComponent);

var _a, _b, _c;
//# sourceMappingURL=machine.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__productView_product_view_component__ = __webpack_require__("../../../../../src/app/products/productView/product-view.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__productView_product_view_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_coffee_coffee_component__ = __webpack_require__("../../../../../src/app/products/coffee/coffee.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__products_coffee_coffee_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_category_category_component__ = __webpack_require__("../../../../../src/app/products/category/category.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__products_category_category_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__machine_machine_component__ = __webpack_require__("../../../../../src/app/products/machine/machine.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__machine_machine_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accessory_accessory_component__ = __webpack_require__("../../../../../src/app/products/accessory/accessory.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__accessory_accessory_component__["a"]; });





//# sourceMappingURL=product-index.js.map

/***/ }),

/***/ "../../../../../src/app/products/product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__share_modules_share_module__ = __webpack_require__("../../../../../src/app/share-modules/share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_index__ = __webpack_require__("../../../../../src/app/products/product-index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { ProductformComponent } from './product-form.component';
// import { ProductUpdateComponent } from './product-update.component';
// import { DashboardComponent } from '../menu/dashboard/dashboard.component';
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__product_index__["e" /* ProductViewComponent */], __WEBPACK_IMPORTED_MODULE_12__product_index__["c" /* CoffeeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__product_index__["b" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_12__product_index__["d" /* MachineComponent */],
            __WEBPACK_IMPORTED_MODULE_12__product_index__["a" /* AccessoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageModule"], __WEBPACK_IMPORTED_MODULE_7__share_modules_share_module__["a" /* ShareModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        exports: [],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_9__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_10__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_11__services_check_out_service__["a" /* CheckOutService */],
            __WEBPACK_IMPORTED_MODULE_13__services_cart_service__["a" /* CartService */]
        ]
    })
], ProductModule);

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ "../../../../../src/app/products/productView/product-media-query/product-view.media.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .big-screen {\n    display: none; }\n  .description-small {\n    padding: 0px 10px 20px 10px;\n    text-align: center; }\n    .description-small h6, .description-small .other-product .other-item .other-item-details p, .other-product .other-item .other-item-details .description-small p {\n      font-size: 22px;\n      letter-spacing: 2px;\n      font-family: 'Lobster', cursive;\n      margin-bottom: 10px; }\n  .content-container {\n    min-height: 500px;\n    margin-bottom: 50px; }\n    .content-container button.small-screen {\n      color: lightslategray; }\n    .content-container .product-disply {\n      width: 100%;\n      margin: 0 auto;\n      margin-top: 10px; }\n      .content-container .product-disply .product-img {\n        margin-top: 10px; }\n      .content-container .product-disply .product-details h1 {\n        margin: 0px;\n        padding: 0px;\n        color: slategray;\n        margin-bottom: 5px;\n        text-align: center;\n        font-size: 26px; }\n      .content-container .product-disply .product-details h5 {\n        margin: 0px;\n        padding: 0px;\n        color: #f48024;\n        margin-bottom: 10px;\n        text-align: center; }\n      .content-container .product-disply .product-details .add-to {\n        text-align: center;\n        margin-bottom: 10px; }\n  .other-product {\n    max-width: 700px;\n    margin: 0 auto;\n    display: flex;\n    display: -webkit-box;\n    /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */\n    /* OLD: Firefox (buggy) */\n    display: -ms-flexbox;\n    /* MID: IE 10 */\n    display: -webkit-flex;\n    /* NEW, Chrome 21?28, Safari 6.1+ */ }\n    .other-product .other-item {\n      height: 200px;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n      .other-product .other-item .other-item-details {\n        width: 100px;\n        text-align: center; }\n        .other-product .other-item .other-item-details h6, .other-product .other-item .other-item-details p {\n          font-size: 12px;\n          padding: 0px;\n          margin: 0px; }\n        .other-product .other-item .other-item-details p {\n          font-size: 10px; } }\n\n@media only screen and (min-width: 640px) {\n  .small-screen {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/productView/product-view.component.html":
/***/ (function(module, exports) {

module.exports = "<section >\n    <div class=\"fp-page-head\">\n        <img src=\"assets/coffee-beans.png\"  alt=\"\">\n        <div class=\"fp-page-title\">\n            <h1>{{dproduct.name}}</h1>\n        </div>\n  </div>\n</section>\n<div *ngIf=\"positiveNum\" class=\"alert alert-danger big-screen\" role=\"alert\">\n    please enter a valid number in the \"Qty\" box! to proceed.\n</div>\n<div class=\"user-login-msg\" *ngIf=\"islogin\">\n    <div class=\"alert alert-danger alert-p\" role=\"alert\">\n        <strong>Oh no!</strong> please login to add this product to your basket. <span><button routerLink=\"/login\" class=\"btn btn-primary\">please login here</button></span>\n    </div>\n</div>\n\n<section class=\"main-container content-container\">\n    <div *ngIf=\"positiveNum\" class=\"alert alert-danger small-screen\" role=\"alert\">\n        please enter a valid number in the \"Qty\" box! to proceed.\n    </div>\n    <a (click)=\"back()\" class=\"btn-floating btn-small waves-effect waves-light grey darken-1\"><i class=\"material-icons\" aria-hidden=\"true\">arrow_back</i></a>\n    <div *ngIf=\"!dproduct.name\" class=\"container load-item\">\n        <div class=\"progress-loading\">\n            <div class=\"preloader-wrapper large active\">\n                <div class=\"spinner-layer spinner-green-only\">\n                    <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                    </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                    </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"dproduct.name\" class=\"row product-disply\">\n        <div class=\"col col-xs-12 col-sm-12 col-md-6 col-lg-6 product-img\">\n            <div *ngIf=\"dproduct.size\" class=\"p-size\">\n                <div class=\"badge\">\n                    <h5>{{dproduct.size}}</h5>\n                </div>\n            </div>\n            <img [src]=\"dproduct.imageUrl\" alt=\"product image\">\n\n            <div class=\"row similar-prod\" *ngIf=\"similaProd.length > 1\">\n                <p><i class=\"fa fa-coffee\" aria-hidden=\"true\"></i> Similar Items <i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></p>\n                <div class=\"col col-xs-4 col-lg-4\" *ngFor=\"let simp of similaProd\">\n                    <div [class.selected]=\"simp.id === active\" class=\"jumbotron\">\n                       <img (click)=\"simpView(simp)\" [src]=\"simp.imageUrl\" alt=\"Sim prod\">\n                        <p>{{simp.size}}</p>\n                        <p style=\"color:#f48024\"><strong>{{simp.price | currency: 'GBP' :true}}</strong></p> \n                    </div>\n                </div>\n                \n            </div>\n        </div>\n        <div class=\"col col-xs-12 col-sm-12 col-md-6 col-lg-6 product-details jumbotron\">\n            <h1>{{dproduct.name}}</h1>\n\n            <h5 *ngIf=\"dproduct.oldprice\"><span>Price: </span> <small style=\"text-decoration: line-through; color:red\">was {{dproduct.oldprice | currency: 'GBP' :true}}</small> <small>now</small>  {{dproduct.price | currency: 'GBP' :true}}</h5>\n            <h5 *ngIf=\"!dproduct.oldprice\"><span>Price: </span>{{dproduct.price | currency: 'GBP' :true}}</h5>\n            <div class=\"cart-select row\">\n                <span class=\"col s4 qty\"> <strong>Qty: </strong></span>\n                <span class=\"col s8 input\">\n                    <input #val type=\"number\" class=\"form-control s-input\" name=\"count\" value=\"1\" pattern=\"[0-9]+\" >\n                </span>\n                \n                \n            </div>\n\n            <div class=\"\">\n                <div *ngIf=\"dproduct.size\" class=\"pick-type\">\n                    <label for=\"size\"><strong>Size:</strong> </label>\n                    <select class=\"form-control custom-select\" #size>\n                        <option value=\"500gm\" selected>{{dproduct.size}}</option>\n         \n                    </select>\n          \n            \n                </div>\n                <div *ngIf=\"dproduct.tag == 'coffees'\" class=\"pick-type\">\n                    <span><label for=\"blend\"> <strong>Blend: </strong> </label></span>\n                    <select class=\"form-control custom-select\" #blend>\n                        <option *ngIf=\"dproduct.name.includes('Nespresso')\" value=\"Nespresso\" selected>Nespresso</option>\n                        <option value=\"Expresso\" selected>Espresso</option>\n                        <option value=\"Coffee beans\">Coffee Beans</option>\n                        <option value=\"Paper filter\">Paper Filter</option>\n                        <option value=\"French filter\">French Filter</option>\n                        <option value=\"Metal filter\">Metal Filter</option>\n                        <option value=\"Turkish fine\">Turkish Fine</option>\n                    </select>\n\n                </div>\n                \n                <div class=\"pick-type\">\n\n            \n                </div>\n            </div>\n            <br>\n            <div class=\"big-screen\">\n                 <h6>Product Descriptions:</h6>\n                <p>{{dproduct.description}}</p>\n            </div>\n            <!-- <div *ngIf=\"dproduct.tag == 'coffees'\" class=\"add-to\">\n                <h6> <button (click)=\"addtoCart( val.value, blend.value )\" class=\"btn btn-success\" type=\"button\"><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> Add to Basket</button></h6>\n            </div> -->\n            <div class=\"add-to\">\n                <h6> <button (click)=\"addtoCart( val.value )\" class=\"btn btn-success\" type=\"button\"><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> Add to Basket</button></h6>\n            </div>\n        </div>\n    </div>\n     <div class=\"description-small small-screen\" *ngIf=\"dproduct.name\">\n            <h6>Product Descriptions:</h6>\n            <p>{{dproduct.description}}</p>\n        </div>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/products/productView/product-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentications_auth_service__ = __webpack_require__("../../../../../src/app/authentications/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductViewComponent = (function () {
    function ProductViewComponent(productService, route, cartService, router, _location, checkOutService, authService) {
        this.productService = productService;
        this.route = route;
        this.cartService = cartService;
        this.router = router;
        this._location = _location;
        this.checkOutService = checkOutService;
        this.authService = authService;
        this.islogin = false;
        this.positiveNum = false;
        this.products = [];
        this.simVee = false;
        this.dproduct = {
            id: 9
            // name: 'Italian Coffee Beans',
            // price: '45',
            // code: '23098',
            // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fdark-decaffeinated-colombian_large.jpg?alt=media&token=d9a20d69-6eed-43b2-bbab-fb3497e49089',
            // description: ' once() method to simplify this scenario: it triggers once and then does not trigger again.'
        };
    }
    ProductViewComponent.prototype.back = function () {
        this._location.back();
    };
    ProductViewComponent.prototype.viewOthers = function (product) {
        var id = product.id;
        this.router.navigate(['products/' + id]);
    };
    ProductViewComponent.prototype.addtoCart = function (qty, blend) {
        // console.log(this.dproduct);
        if (qty < 1) {
            this.positiveNum = true;
            return;
        }
        else {
            var cart = {
                name: this.dproduct['name'],
                price: this.dproduct['price'],
                oldprice: this.dproduct['oldprice'],
                imageUrl: this.dproduct['imageUrl'],
                size: this.dproduct['size'],
                qty: qty,
                pid: this.dproduct['id']
            };
            this.cartService.createCart(cart);
        }
        // console.log(qty, blend);
        // if(!localStorage.getItem('idToken')){
        //     this.authService.logAnonymous()
        //         .then(res=>{
        //             this.authService.authChange();
        //         })
        //         .catch(err=>console.log(err));
        //     // this.islogin = true;
        //     setTimeout(()=>{
        //         if(localStorage.getItem('currentUser')){
        //             if(qty < 1){
        //                 this.positiveNum = true;
        //             }else{
        //                 this.cartService.incrementQty(this.dproduct, qty, blend);
        //                 // this.cartService.addCart(this.dproduct);
        //                 // this.router.navigate(['/cart']);
        //                 // this.router.navigate(["products/?", {category: "coffees"}]);
        //                 this._location.back();
        //             }
        //         }
        //     }, 500);
        // }else
        //     if(localStorage.getItem('currentUser')){
        //         if(qty < 1){
        //             this.positiveNum = true;
        //         }else{
        //             this.cartService.incrementQty(this.dproduct, qty, blend);
        //             // this.cartService.addCart(this.dproduct);
        //             this.router.navigate(['/cart']);
        //             //this.router.navigate(["products/?", {category: "coffees"}]);
        //             // this._location.back();
        //         }
        //     }
    };
    ProductViewComponent.prototype.simpView = function (simp) {
        this.router.navigate(['/product/?', { id: +simp.id, product_name: simp.name }]);
        this.simVee = true;
        this.active = simp.id;
    };
    ProductViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.createDb();
        this.cartService.createDb();
        this.authService.authUserState();
        this.productService.getProduct()
            .subscribe(function (products) {
            if (products.length > 0) {
                products.length = 4;
                _this.products = products.reverse();
            }
        });
        // let id = +this.route.snapshot.params['id'];
        // this.productService.getProduct().subscribe(products=>{
        //     this.dproduct = products.find((product)=> product.id == id);
        //     if(this.dproduct){
        //         let simProd = products.find((product)=> product.id == id);
        //         this.similaProd = products.filter((product)=>{
        //             return product.name === simProd.name;
        //         })
        //     }
        // });
        this.route.params.forEach(function (param) {
            // console.log(+param["id"]);
            _this.productService.getProduct().subscribe(function (products) {
                _this.dproduct = products.find(function (product) { return product.id == +param['id']; });
                if (_this.dproduct) {
                    var simProd_1 = products.find(function (product) { return product.id == +param['id']; });
                    _this.similaProd = products.filter(function (product) {
                        return product.name === simProd_1.name;
                    });
                }
            }, function (error) { console.log(error); }, function () { console.log("Observer completed all!"); });
        });
    };
    return ProductViewComponent;
}());
ProductViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-view',
        template: __webpack_require__("../../../../../src/app/products/productView/product-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/productView/product.component.scss"), __webpack_require__("../../../../../src/app/products/productView/product-media-query/product-view.media.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_cart_service__["a" /* CartService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_check_out_service__["a" /* CheckOutService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__authentications_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__authentications_auth_service__["a" /* AuthService */]) === "function" && _g || Object])
], ProductViewComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=product-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/productView/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n  background-color: lightslategray; }\n  .selected p {\n    color: #fff; }\n\n.fp-page-head {\n  background-color: #35414C;\n  width: 100%;\n  height: 150px;\n  display: flex;\n  display: -webkit-box;\n  /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */\n  /* OLD: Firefox (buggy) */\n  display: -ms-flexbox;\n  /* MID: IE 10 */\n  display: -webkit-flex;\n  /* NEW, Chrome 21?28, Safari 6.1+ */\n  overflow: hidden; }\n  .fp-page-head img {\n    opacity: 0.2;\n    position: relative;\n    width: 100%;\n    margin-top: -100px; }\n  .fp-page-head .fp-page-title {\n    display: none;\n    width: 90%;\n    position: absolute;\n    top: 80px;\n    right: 10px; }\n    .fp-page-head .fp-page-title h1 {\n      color: lightslategrey;\n      font-size: 1.5rem;\n      margin-right: 15px; }\n\n.fp-page-content {\n  max-width: 700px;\n  padding: 50px 0px; }\n  .fp-page-content p {\n    text-align: center;\n    padding: 20px 0px; }\n  .fp-page-content h4 {\n    padding-top: 20px; }\n\n.myinput input {\n  height: 100px; }\n\n.hidden {\n  opacity: 0;\n  width: 50px; }\n\n.display-image {\n  background-color: red;\n  position: absolute;\n  opacity: .8; }\n\n.file-input {\n  position: absolute;\n  top: 10%;\n  width: 50px;\n  opacity: .2;\n  overflow: hidden;\n  background-color: gray; }\n  .file-input:hover {\n    background-color: lightseagreen;\n    cursor: pointer; }\n\nspan.add {\n  position: relative;\n  padding: 0px 5px;\n  text-align: center;\n  color: black;\n  z-index: -1000;\n  font-size: 14px;\n  margin: 0 auto; }\n\n.product-list {\n  min-height: 500px; }\n\n.content-container {\n  min-height: 600px; }\n  .content-container a {\n    margin-top: 10px; }\n  .content-container .product-disply {\n    width: 80%;\n    margin: 0 auto;\n    margin-top: 20px; }\n    .content-container .product-disply .product-img {\n      margin: 0 auto;\n      margin-top: 40px; }\n      .content-container .product-disply .product-img img {\n        width: 60%;\n        margin: 0 auto; }\n      .content-container .product-disply .product-img .p-size {\n        position: absolute;\n        text-align: center; }\n        .content-container .product-disply .product-img .p-size .badge {\n          margin: 0 auto;\n          text-align: center;\n          padding: 10px 0px;\n          border: 1.5px solid;\n          border-color: #f48024;\n          width: 35px;\n          height: 35px;\n          border-radius: 50%;\n          background-color: rgba(0, 0, 0, 0.9);\n          overflow: hidden; }\n          .content-container .product-disply .product-img .p-size .badge h5 {\n            font-size: 10px;\n            margin: 0px;\n            margin: 0 auto;\n            text-align: center;\n            color: #f48024; }\n      .content-container .product-disply .product-img .similar-prod {\n        padding-top: 20px;\n        margin-bottom: 10px; }\n        .content-container .product-disply .product-img .similar-prod p {\n          padding: 0px;\n          margin: 0px;\n          margin-left: 15px;\n          margin-bottom: 10px; }\n        .content-container .product-disply .product-img .similar-prod .jumbotron {\n          text-align: center;\n          margin: 0px;\n          padding: 0px;\n          margin: 0 auto;\n          padding-bottom: 5px; }\n          .content-container .product-disply .product-img .similar-prod .jumbotron p {\n            margin: 0px;\n            padding: 0px; }\n          .content-container .product-disply .product-img .similar-prod .jumbotron img {\n            width: 80px;\n            margin: 10px 0px;\n            border-radius: 4px; }\n            .content-container .product-disply .product-img .similar-prod .jumbotron img:hover {\n              opacity: 0.5; }\n    .content-container .product-disply .product-details {\n      padding-top: 10px; }\n      .content-container .product-disply .product-details h1 {\n        font-size: 1.5em;\n        font-family: 'Dosis', sans-serif;\n        margin: 0px;\n        padding: 0px;\n        color: slategray;\n        margin-bottom: 15px;\n        text-align: left; }\n      .content-container .product-disply .product-details h5 {\n        font-size: 1.2em;\n        margin: 0px;\n        padding: 0px;\n        color: #f48024;\n        margin-bottom: 10px;\n        text-align: left; }\n      .content-container .product-disply .product-details .add-to {\n        text-align: left;\n        margin-bottom: 10px; }\n        .content-container .product-disply .product-details .add-to button {\n          background-color: slategray;\n          border-color: slategray; }\n      .content-container .product-disply .product-details .cart-select .qty {\n        padding-top: 20px; }\n      .content-container .product-disply .product-details .cart-select .input {\n        width: 100px; }\n\n.other-product {\n  max-width: 700px;\n  margin: 0 auto;\n  display: flex;\n  display: -webkit-box;\n  /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */\n  /* OLD: Firefox (buggy) */\n  display: -ms-flexbox;\n  /* MID: IE 10 */\n  display: -webkit-flex;\n  /* NEW, Chrome 21?28, Safari 6.1+ */ }\n  .other-product .other-item {\n    height: 200px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n    .other-product .other-item .other-item-details {\n      width: 100px;\n      text-align: center; }\n      .other-product .other-item .other-item-details h6, .other-product .other-item .other-item-details p {\n        font-size: 12px;\n        padding: 0px;\n        margin: 0px; }\n      .other-product .other-item .other-item-details p {\n        font-size: 10px; }\n\n.load-item {\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 150px; }\n  .load-item .progress-loading {\n    text-align: center; }\n\n@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .fp-page-head {\n    background-color: #35414C;\n    width: 100%;\n    height: 150px;\n    display: flex;\n    display: -webkit-box;\n    /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */\n    /* OLD: Firefox (buggy) */\n    display: -ms-flexbox;\n    /* MID: IE 10 */\n    display: -webkit-flex;\n    /* NEW, Chrome 21?28, Safari 6.1+ */\n    overflow: hidden; }\n    .fp-page-head img {\n      position: fixed;\n      opacity: 0.2;\n      position: relative;\n      width: 100%;\n      margin-top: -100px; }\n    .fp-page-head .fp-page-title {\n      position: absolute;\n      top: 110px;\n      right: 10px; }\n      .fp-page-head .fp-page-title h1 {\n        color: lightslategrey;\n        font-size: 1.5rem;\n        margin-right: 10px; }\n  .content-container {\n    min-height: 600px; }\n    .content-container .product-disply {\n      width: 80%;\n      margin: 0 auto;\n      margin-top: 20px; }\n      .content-container .product-disply .product-img {\n        margin: 0 auto;\n        margin-top: 10px; }\n        .content-container .product-disply .product-img img {\n          width: 80%; }\n        .content-container .product-disply .product-img .similar-prod {\n          padding-top: 20px;\n          margin-bottom: 10px; }\n          .content-container .product-disply .product-img .similar-prod .jumbotron {\n            text-align: center;\n            margin: 0px;\n            padding: 0px;\n            margin: 0 auto;\n            padding-bottom: 5px; }\n            .content-container .product-disply .product-img .similar-prod .jumbotron p {\n              margin: 0px;\n              padding: 0px; }\n            .content-container .product-disply .product-img .similar-prod .jumbotron img {\n              width: 60px;\n              margin: 10px 0px;\n              border-radius: 4px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/redirect/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorComponent = (function () {
    function ErrorComponent(router, meta, title) {
        this.router = router;
        this.meta = meta;
        this.title = title;
        title.setTitle('Payment Termination');
    }
    ErrorComponent.prototype.reTry = function () {
        this.router.navigate(['/payment-method']);
    };
    ErrorComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('idToken')) {
            this.router.navigate(["/login"]);
            return;
        }
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/redirect/html/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/redirect/styles/error.component.scss"), __webpack_require__("../../../../../src/app/redirect/styles/stylesheet.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Meta */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */]) === "function" && _c || Object])
], ErrorComponent);

var _a, _b, _c;
//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/redirect/html/error.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"cm-page-container\">\n  <div class=\"cm-page-head\">\n    \n    <div class=\"cm-page-title\">\n      <!-- <h1>Error Occur</h1> -->\n    </div>\n  </div>\n</section> \n\n<section class=\"\">\n    <div class=\"page-content container\">\n        <div class=\"jumbotron\" >\n          <h4>Payment Terminated</h4>\n          <p>Something went wrong while we are processing your payment,\n            Please try again by clicking on the button below...\n          </p>\n\n          <button class=\"btn btn-danger\" (click)=\"reTry()\" role=\"button\">Try Again</button>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/redirect/html/order-success.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"cm-page-container\">\n  <div class=\"cm-page-head\">\n    \n    <div class=\"cm-page-title\">\n      <!-- <h1>Order Confirmation</h1> -->\n    </div>\n  </div>\n</section> \n\n<section class=\"\">\n    <div class=\"page-content container\">\n        <div class=\"jumbotron\">\n          <h4>Order Confirmation <span><i class=\"material-icons\" style=\"color: lightseagreen; font-size: 26px;\">check</i></span></h4>\n          <p>Thank you for completing the secured payment process, Your goods will be on it's way to you soon!!\n          </p>\n          <p>To complete the order process, please click on the finish order button below!</p>\n          <a class=\"waves-effect waves-light btn\" (click)=\"successUpdate()\">Finish</a>\n        </div>\n    </div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/redirect/order-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__ = __webpack_require__("../../../../../src/app/services/check-out.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderSuccessComponent = (function () {
    function OrderSuccessComponent(cartService, router, meta, title) {
        this.cartService = cartService;
        this.router = router;
        this.meta = meta;
        this.title = title;
        title.setTitle('Confirmation');
    }
    OrderSuccessComponent.prototype.successUpdate = function () {
        this.router.navigate(["/"]);
        // this.updateStatus();
        // this.deleteTempOrder();
        // this.cartService.clear();
    };
    //Deleting Temporary order after a successful transaction
    //  deleteTempOrder(){       
    //     // this.itemKeys.forEach((item)=>{ 
    //     //     this.cartService.deleteOrderItems(item.$key);
    //     // });
    //     this.cartService.deleteAllOrder(this.orderKeys.$key);
    //     this.cartService.deleteOrder();
    // }
    // updateStatus(){
    //     this.cartService.patchFinalOrder((localStorage.getItem("returnId").toString())).subscribe((res)=>{
    //         console.log(res);
    //         localStorage.removeItem("returnId");
    //     });
    // }
    OrderSuccessComponent.prototype.ngOnInit = function () {
        //use idToken to check for current user
        // if(!localStorage.getItem('idToken')){
        //     this.router.navigate(["/login"])
        //     return;
        // }
        var _this = this;
        // this.cartService.getOrder().subscribe((orders)=>{
        //    this.orderPal = orders.find((order)=> {return order.customerId === localStorage.getItem('userId')});
        //     // console.log(this.orderPal.$key);
        // }) 
        //Deleting Temporary order after a successful transaction
        this.cartService.getOrderItems().subscribe(function (items) {
            _this.itemKeys = items.filter(function (item) {
                // return item.customerId == localStorage.getItem("userId");
            });
        });
        this.cartService.getOrder().subscribe(function (orders) {
            //  this.orderKeys = orders.find((order)=>{
            //     // return order.customerId == localStorage.getItem("userId");
            // });
        });
    };
    return OrderSuccessComponent;
}());
OrderSuccessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ord-success',
        template: __webpack_require__("../../../../../src/app/redirect/html/order-success.component.html"),
        styles: [__webpack_require__("../../../../../src/app/redirect/styles/order-success.component.scss"), __webpack_require__("../../../../../src/app/redirect/styles/stylesheet.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__["a" /* CheckOutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_check_out_service__["a" /* CheckOutService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Meta */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */]) === "function" && _d || Object])
], OrderSuccessComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=order-success.component.js.map

/***/ }),

/***/ "../../../../../src/app/redirect/redirect.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_component__ = __webpack_require__("../../../../../src/app/redirect/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_success_component__ = __webpack_require__("../../../../../src/app/redirect/order-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RedirectModule = (function () {
    function RedirectModule() {
    }
    return RedirectModule;
}());
RedirectModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__error_component__["a" /* ErrorComponent */], __WEBPACK_IMPORTED_MODULE_3__order_success_component__["a" /* OrderSuccessComponent */]]
    })
], RedirectModule);

//# sourceMappingURL=redirect.module.js.map

/***/ }),

/***/ "../../../../../src/app/redirect/styles/error.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-content {\n  position: relative;\n  min-height: 500px;\n  max-width: 75%; }\n  .page-content .jumbotron {\n    margin: 50px; }\n    .page-content .jumbotron h4 {\n      font-family: 'Dosis', sans-serif;\n      font-size: 1.4em;\n      color: red; }\n    .page-content .jumbotron p {\n      font-size: 0.9em; }\n\n@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .page-content {\n    position: relative;\n    min-height: 500px;\n    max-width: 100%;\n    width: 100%; }\n    .page-content .jumbotron {\n      margin: 0px;\n      margin-top: 20px;\n      width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/redirect/styles/order-success.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-content {\n  position: relative;\n  min-height: 500px;\n  max-width: 75%; }\n  .page-content .jumbotron {\n    margin: 50px; }\n    .page-content .jumbotron h4 {\n      font-family: 'Dosis', sans-serif;\n      font-size: 1.5em;\n      font-weight: 400;\n      color: #35bbad; }\n    .page-content .jumbotron p {\n      font-size: 0.9em; }\n    .page-content .jumbotron a {\n      color: #ffffff; }\n\n@media only screen and (min-width: 250px) and (max-width: 640px) {\n  .page-content {\n    position: relative;\n    min-height: 500px;\n    max-width: 100%;\n    width: 100%; }\n    .page-content .jumbotron {\n      margin: 0px;\n      margin-top: 20px;\n      width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/redirect/styles/stylesheet.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cm-page-container .cm-page-head {\n  background-color: #35414C;\n  width: 100%;\n  height: 200px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  border-radius: 0px 0px 0px 0px; }\n  .cm-page-container .cm-page-head img {\n    opacity: 0.2;\n    position: fixed;\n    margin-bottom: 0px;\n    margin-top: -280px;\n    width: 100%;\n    min-width: 1200px; }\n  .cm-page-container .cm-page-head .cm-page-title {\n    position: absolute;\n    width: 90%;\n    top: 130px;\n    right: 50px; }\n    .cm-page-container .cm-page-head .cm-page-title h1 {\n      color: lightslategrey;\n      font-size: 1.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppService = (function () {
    // apiUrl = "http://localhost:3000/posts";
    function AppService(af, db, _http) {
        this.af = af;
        this.db = db;
        this._http = _http;
    }
    AppService.prototype.subscription = function (subscribe) {
        var fb_ref = this.db.list("subscriptions");
        fb_ref.push(subscribe).then(function (res) {
            console.log(res);
        });
        return fb_ref;
    };
    AppService.prototype.getImages = function () {
        var storage = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["storage"]().ref();
        var imageUrl = storage.child('/images/');
        // return imageUrl.getDownloadURL();
    };
    // getApiData():Observable<any[]>{
    //     let header = new Headers();
    //         header.append("Content-Type", "application/vnd.api+json");
    //     return this._http.get(this.apiUrl)
    //         .map((res:Response)=>  res.json());
    // }
    AppService.prototype.addContact = function () {
        return this.db.list('contacts');
    };
    AppService.prototype.getContacts = function () {
        return this.db.list('contacts').valueChanges();
    };
    AppService.prototype.deleteContact = function (key) {
        var db = this.db.list('contacts/' + key);
        db.remove().then(function (res) { console.log(res); })
            .catch(function (error) { return console.log(error); });
    };
    return AppService;
}());
AppService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object])
], AppService);

var _a, _b, _c;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BlogService = (function () {
    function BlogService(_af, _router, _http, db) {
        this._af = _af;
        this._router = _router;
        this._http = _http;
        this.db = db;
        this.cacheBlog$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
    }
    BlogService.prototype.createBlog = function (blog) {
        var blogRef = this.db.list("blogs");
        blogRef.push(blog).then(function (res) { console.log(res); });
    };
    BlogService.prototype.getBlog = function () {
        return this.db.list("/blogs").valueChanges();
    };
    BlogService.prototype.getCacheBlog = function () {
        var _this = this;
        if (!this.cacheBlog$.observers.length) {
            this.db.list("/blogs").snapshotChanges()
                .map(function (snapshot) {
                var blog = [];
                snapshot.forEach(function (doc) {
                    blog.push({ data: doc.payload.val(), key: doc.payload.key });
                });
                return blog;
            }).subscribe(function (blog) { return _this.cacheBlog$.next(blog); }, function (err) {
                _this.cacheBlog$.error(err);
                _this.cacheBlog$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
            });
        }
        return this.cacheBlog$;
    };
    BlogService.prototype.updateBlog = function (key, object) {
        var blogRef = this.db.list("blogs");
        blogRef.update(key, object);
    };
    BlogService.prototype.deleteBlog = function (blog) {
        var _this = this;
        var blogRef = this.db.list("blogs");
        blogRef.remove(blog.key).then(function (res) {
            _this.removeBlogImage(blog.data.image);
            console.log(res);
        }).catch(function (error) { return console.log(error); });
    };
    BlogService.prototype.removeBlogImage = function (file) {
        // var desertRef = firebase.storageRef.child('images/desert.jpg');
        var storageRef = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["storage"]().ref('/blogimages/' + file);
        // Delete the file
        storageRef.delete().then(function () {
            // File deleted successfully
            console.log("Image Successfully Removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    return BlogService;
}());
BlogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
], BlogService);

var _a, _b, _c, _d;
//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__db_service__ = __webpack_require__("../../../../../src/app/services/db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartService = (function () {
    function CartService(_router, dbService) {
        this._router = _router;
        this.dbService = dbService;
        this.cartAry = [];
        this.newPrice = [];
        this.oldPrice = [];
        this.subject$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* ReplaySubject */](1);
        var dbName = "CityDb";
        this.request = indexedDB.open(dbName, 1);
        // this.createDb();
    }
    CartService.prototype.createDb = function () {
        var _this = this;
        this.request.onupgradeneeded = function (event) {
            _this.db = null;
            _this.db = event.target['result'];
            console.log(event);
            // Create an objectStore for this database
            if (_this.db) {
                var objectStore = _this.db.createObjectStore("carts", { keyPath: "id", autoIncrement: true });
                objectStore.createIndex("pid", "pid", { unique: true });
                objectStore.createIndex("id", "id", { unique: true });
            }
            else {
                console.log("ObjectStore can not be created");
            }
        };
        this.request.onerror = function (event) {
            console.error(event);
            // Do something with request.errorCode!
        };
        this.request.onsuccess = function (e) {
            _this.db = e.target['result'];
            console.log(_this.db);
        };
    };
    CartService.prototype.createCart = function (cat) {
        var _this = this;
        // console.log(cat);
        var transaction = this.db.transaction(["carts"], "readwrite");
        var store = transaction.objectStore("carts");
        var index = store.index("pid");
        index.get(cat.pid).onsuccess = function (e) {
            // console.log(e.target.result);
            var updatCat = e.target.result;
            if (updatCat) {
                var lasUp = Number(updatCat.qty) + Number(cat.qty);
                updatCat.qty = lasUp;
                // console.log(updatCat);
                var upRequest = store.put(updatCat);
                upRequest.onsuccess = function (e) {
                    console.log("Updated");
                    _this._router.navigate(["/cart"]);
                };
                upRequest.onerror = function (e) {
                    console.error("Error", e.target.result);
                };
            }
            else {
                console.log("Creating New Cart");
                var request = store.add(cat);
                request.onsuccess = (function (e) {
                    console.log("Object Added to IndexedDb");
                    _this._router.navigate(["/cart"]);
                });
                request.onerror = (function (e) {
                    console.error('Error:', e);
                });
            }
        };
    };
    CartService.prototype.retrieveCart = function () {
        var _this = this;
        this.cartAry = [];
        this.newPrice = [];
        this.oldPrice = [];
        this.newPriceSum = 0;
        this.oldPriceSum = 0;
        var transaction = this.db.transaction(["carts"], "readonly");
        var store = transaction.objectStore("carts");
        var index = store.index("pid");
        index.openCursor().onsuccess = function (e) {
            var cursor = e.target.result;
            if (cursor) {
                _this.cartAry.push(cursor['value']);
                _this.newPrice.push(cursor['value'].price * cursor['value'].qty);
                _this.oldPrice.push(cursor['value'].oldprice * cursor['value'].qty);
                cursor.continue();
            }
        };
        setTimeout(function () {
            _this.newPriceSum = __WEBPACK_IMPORTED_MODULE_3_lodash__["reduce"](_this.newPrice, _this.reduceNum, 0);
            _this.oldPriceSum = __WEBPACK_IMPORTED_MODULE_3_lodash__["reduce"](_this.oldPrice, _this.reduceNum, 0);
            _this.subject$.next([_this.cartAry, _this.newPriceSum, _this.oldPriceSum]);
        }, 300);
        return this.subject$;
    };
    CartService.prototype.reduceNum = function (sum, num) {
        return sum + num;
    };
    CartService.prototype.removeCart = function (key) {
        var _this = this;
        var request = this.db.transaction(["carts"], "readwrite")
            .objectStore("carts")
            .delete(key);
        request.onsuccess = function (e) {
            console.log("Deleted", key);
            _this.retrieveCart();
        };
    };
    return CartService;
}());
CartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__db_service__["a" /* DbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__db_service__["a" /* DbService */]) === "function" && _b || Object])
], CartService);

var _a, _b;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/check-out.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_secret__ = __webpack_require__("../../../../../src/app/shared/secret.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';






var CheckOutService = (function () {
    function CheckOutService(af, db, router, _http) {
        var _this = this;
        this.af = af;
        this.db = db;
        this.router = router;
        this._http = _http;
        this.productArr = [];
        this.apiUrl2 = "http://localhost:3000/orders";
        this.apiUrl = "https://mailer-server.herokuapp.com/orders";
        this.apiCoffee = "https://mailer-server.herokuapp.com/coffees";
        af.authState.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
            }
        });
    }
    CheckOutService.prototype.getUser = function () {
        var _this = this;
        if (localStorage.getItem('userId')) {
            this.userId = localStorage.getItem('userId');
            this.af.authState.subscribe(function (user) {
                if (user) {
                    _this.userId = user.uid;
                }
            });
        }
    };
    // addCart(product, num, blend){
    //     this.getUser();
    //     if(this.userId){
    //         let cart:iCart = {
    //             id: product.id,
    //             name: product.name,
    //             price: product.price,
    //             oldprice: product.oldprice,
    //             qty: num,
    //             size: product.size,
    //             type: blend,
    //             // roast: roast,
    //             imageUrl: product.imageUrl
    //         }
    //         let dbr = this.db.list('/cart/'+this.userId);
    //         dbr.push(cart).then(res=>{
    //             console.log(res);
    //         });
    //     }
    // }
    // incrementQty(cartItem, num, blend?){
    //     let key = cartItem.$key;
    //     let qty = parseInt(cartItem.qty);
    //     let cart, thisblend;
    //     this.getCart().subscribe(cartArr=>{
    //         cartArr;
    //         // cart = cartArr.find((cart)=> cart.id === cartItem.id);
    //         // thisblend = cartArr.find((cart)=> cart.type === blend);
    //     });
    //     this.addCart(cartItem, num, blend);
    //     // if(thisblend !== blend){
    //     //     if(num){
    //     //        this.getUser();
    //     //         firebase.database().ref().child('/cart/'+this.userId+'/'+cart.$key)
    //     //         .update({qty: parseInt(cart.qty) + parseInt(num)}).then(res=>{res}).catch(err=>{err}); 
    //     //     }else{
    //     //         this.getUser();
    //     //         firebase.database().ref().child('/cart/'+this.userId+'/'+cart.$key)
    //     //         .update({qty: cart.qty + 1}).then(res=>{res}).catch(err=>{err});
    //     //     }
    //     // }else{
    //     //    this.addCart(cartItem, num, blend, roast);
    //     // }
    // }
    // removeItem(key){
    //     this.getUser();
    //     let db = this.db.list('/cart/'+this.userId);
    //     db.remove(key).then(res=>{
    //         console.log(res);
    //     }).catch(err=>{
    //         console.log(err);
    //     });
    // }
    // clear(){
    //     this.getUser();
    //     let db = this.db.list('/cart/'+this.userId);
    //     db.remove().then(res=>{
    //         console.log(res);
    //     }).catch(err=>{
    //         console.log(err);
    //     });
    // }
    // getCart(){
    //     this.getUser();
    //     return this.db.list('cart/'+this.userId).valueChanges();
    // }
    // sumCart():Observable<iCart[]>{
    //     this.db.list('cart').valueChanges()
    //         .subscribe(cart=>{
    //             this.productArr = cart;
    //         });
    //     let priceArr = [];
    //         this.productArr.forEach(element=>{
    //         priceArr.push(element.price);
    //     });
    //     return priceArr.reduce(this.sumTotal, 0);
    // }
    // sumTotal(sum, num){
    //     return sum + Math.round(num);
    // }
    //Saving Customer Details
    CheckOutService.prototype.saveCustomerDetails = function (customer, lastId) {
        var _this = this;
        this.getUser();
        if (this.userId) {
            var createdDate = new Date().toString();
            var customerDetails = {
                id: lastId,
                // customerId: customer.customerId,
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email.toLowerCase(),
                gender: customer.gender,
                telephone: customer.telephone,
                addressOne: customer.addressOne,
                addressTwo: customer.addressTwo,
                postCode: customer.postCode.toUpperCase(),
                city: customer.city,
                country: "United Kingdom",
                created_at: createdDate,
            };
            var dbr = this.db.object('/customers/' + this.userId);
            dbr.set(customerDetails)
                .then(function (res) {
                console.log("Customer Saved");
            })
                .catch(function (error) { console.log(error); });
            setTimeout(function () { _this.sortCustomer(customer); }, 500);
        }
    };
    CheckOutService.prototype.sortCustomer = function (customer) {
        //check if customer exist?
        var selectedCustomer;
        this.getAllCustomerDetails().subscribe(function (customers) {
            // selectedCustomer = customers.filter((xcustomer)=> {return xcustomer.email == customer.email});
        });
        if (selectedCustomer.length > 1) {
            var key = selectedCustomer[0].$key;
            // console.log(selectedCustomer);
            // console.log(key);
            var dbR = this.db.list('customers');
            dbR.remove(key).then(function (res) { return console.log(res); }).catch(function (error) { return console.log(error); });
        }
    };
    CheckOutService.prototype.updateCustomerDetails = function (customer) {
        this.getUser();
        if (!customer) {
            return;
        }
        var customerUpdate = {
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            gender: customer.gender,
            telephone: customer.telephone,
            addressOne: customer.addressOne,
            addressTwo: customer.addressTwo,
            postCode: customer.postCode,
            city: customer.city,
            country: "United Kingdom"
        };
        var dbR = this.db.list('/customers');
        dbR.update(this.userId, customer)
            .then(function (res) { console.log(res + "Customer Saved"); })
            .catch(function (error) { console.log(error); });
    };
    CheckOutService.prototype.getCustomerDetails = function () {
        this.getUser();
        return this.db.object('customers/' + this.userId).valueChanges();
    };
    CheckOutService.prototype.getAllCustomerDetails = function () {
        return this.db.list('customers').valueChanges();
    };
    CheckOutService.prototype.deleteCustomerDetails = function (id) {
        this.getUser();
        var cusDb = this.db.list('customers');
        cusDb.remove(id).then(function (res) { return res; }).catch(function (err) { return console.log(err); });
    };
    // Creating New Order
    CheckOutService.prototype.createOrder = function (customer, shipping, items, amount, order_id) {
        var _this = this;
        this.getUser();
        var orderDate = new Date().toString();
        var newOrder = {
            itemsId: order_id,
            customerId: customer.customerId,
            orderId: customer.orderId,
            customerName: customer.customerName,
            email: customer.email,
            telephone: customer.telephone,
            address: customer.address,
            postCode: customer.postcode,
            city: customer.city,
            country: customer.country,
            shipping: shipping,
            amount: amount,
            orDate: orderDate,
            status: "Incomplete",
        };
        // Rails Api Order Creation
        var body = { "data": { "type": "orders",
                "attributes": {
                    "name": customer.customerName,
                    "customerid": customer.customerId,
                    "email": customer.email,
                    "telephone": customer.telephone,
                    "address": customer.address,
                    "postcode": customer.postcode,
                    "city": customer.city,
                    "country": customer.country,
                    "amount": amount,
                    "orderid": customer.orderId,
                    "status": "Pending",
                    "itemsid": order_id
                } } };
        this.finalOrder(body).subscribe(function (res) {
            console.log(res.data);
            localStorage.setItem("returnId", res.data.id);
            // items.forEach((item)=>{
            //    this.makeCoffee({"data":{"type": "coffees",
            //         "attributes": {
            //         "order_id": res.data.id,
            //         "name": item.name,
            //         "blend": item.type,
            //         "qty": item.qty,
            //         "size": item.size,
            //         "roast": item.roast,
            //         "price": item.price
            //         }
            //     }});
            // });
        });
        if (this.userId) {
            //Saving Orders
            var dbR = this.db.list('/allorders/orders/');
            dbR.push(newOrder).then(function (res) {
                console.log(res);
                //Saving Ordered items
                if (res) {
                    var dbp_1 = _this.db.list('/allorders/orderedItems/');
                    items.forEach(function (item) {
                        console.log(item);
                        dbp_1.push({
                            customerId: customer.customerId,
                            orderId: order_id,
                            name: item.name,
                            type: item.type,
                            qty: item.qty,
                            size: item.size,
                            // roast: item.roast,
                            price: item.price,
                            image: item.imageUrl
                        }).then(function (res) { return res; });
                    });
                }
            });
            //Saving Order for Current_User
            var udb = this.db.list('/allorders/userorders/' + this.userId);
            udb.push(newOrder).then(function (res) {
                console.log(res);
            });
            // .catch(err=>console.log(err));
        }
        else {
            console.log("user don't exit");
        }
    };
    //Updating Order Records after a successful Transactions
    CheckOutService.prototype.updateOrder = function (key1, key2, status) {
        this.getUser();
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref().child('/allorders/orders/' + key2)
            .update(status).then(function (complete) { complete; })
            .catch(function (error) { return console.log(error); });
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref().child('/allorders/userorders/' + this.userId + "/" + key1)
            .update(status).then(function (complete) { complete; })
            .catch(function (error) { return console.log(error); });
        //Adding rails patch update function here
    };
    //Clearing all Order for the Customer
    CheckOutService.prototype.clearOrders = function (key1, key2) {
        var udb = this.db.list('/allorders/userorders/' + this.userId);
        var u2db = this.db.list('/allorders/orders/' + key1);
        udb.remove().then(function (res) { console.log(res); })
            .catch(function (error) { console.log(error); });
        u2db.remove().then(function (res) { console.log(res); })
            .catch(function (error) { console.log(error); });
    };
    //Retrieving Order from the database
    CheckOutService.prototype.getOrder = function () {
        this.getUser();
        return this.db.list('/allorders/orders/').valueChanges();
    };
    CheckOutService.prototype.getUserOrder = function () {
        this.getUser();
        return this.db.list('/allorders/userorders/' + this.userId).valueChanges();
    };
    CheckOutService.prototype.deleteOrder = function () {
        this.getUser();
        var dlDb = this.db.list('/allorders/userorders');
        dlDb.remove(this.userId).then(function (response) { return console.log(response); })
            .catch(function (error) { return console.log(error); });
    };
    CheckOutService.prototype.deleteAllOrder = function (key) {
        var oRdb = this.db.list('/allorders/orders');
        oRdb.remove(key).then(function (res) { return console.log(res); }).catch(function (error) { return console.log(error); });
    };
    //Creating Admin control delete function
    CheckOutService.prototype.deleteAdminOrder = function (uid, key) {
        var oRdb = this.db.list('/allorders/orders');
        oRdb.remove(key).then(function (res) { return console.log(res); }).catch(function (error) { return console.log(error); });
        var dlDb = this.db.list('/allorders/userorders');
        dlDb.remove(uid).then(function (response) { return console.log(response); })
            .catch(function (error) { return console.log(error); });
    };
    //Retrieving Order Items and Deleting them
    CheckOutService.prototype.getOrderItems = function () {
        return this.db.list('/allorders/orderedItems').valueChanges();
    };
    CheckOutService.prototype.deleteOrderItems = function (key) {
        console.log(key);
        var refItem = this.db.list('/allorders/orderedItems');
        refItem.remove(key).then(function (res) { return console.log(res); })
            .catch(function (error) { return console.log(error); });
    };
    //Creating final Order in the Rails Server
    CheckOutService.prototype.finalOrder = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        // headers.append("Content-Type", "application/vnd.api+json");
        // headers.append("Authorisation", "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTIwNzQ1MDIsInN1YiI6M30.nC3jG2gXHsYZc4b6PdUZ0YQOpD54okXRwBER7o2VS0o")
        return this._http.post(this.apiUrl, body, this.postRequestHeaders()).map(function (res) { return res.json(); });
    };
    //Creating Coffee items 
    CheckOutService.prototype.makeCoffee = function (coffee) {
        this._http.post(this.apiCoffee, coffee, this.postRequestHeaders()).map(function (res) { return res.json(); })
            .subscribe(function (res) { return console.log(res); });
    };
    CheckOutService.prototype.getFinalOrder = function () {
        return this._http.get(this.apiUrl, this.getRequestHeaders()).map(function (res) { return res.json().data; });
    };
    CheckOutService.prototype.patchFinalOrder = function (key) {
        var update = { "data": { "type": "orders", "id": key, "attributes": { "status": "completed" } } };
        return this._http.patch(this.apiUrl + '/' + key, update, this.postRequestHeaders())
            .map(function (res) { return res.json(); });
    };
    //Deleting a single Order
    CheckOutService.prototype.deleteFinalOrder = function (id) {
        return this._http.delete(this.apiUrl + "/" + id, this.postRequestHeaders()).map(function (res) { return res.json(); });
    };
    CheckOutService.prototype.getRequestHeaders = function () {
        // let authTest = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTIwNzQ1MDIsInN1YiI6M30.nC3jG2gXHsYZc4b6PdUZ0YQOpD54okXRwBER7o2VS0o';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': __WEBPACK_IMPORTED_MODULE_6__shared_secret__["a" /* AUTHORIZATION */], 'Content-Type': 'application/vnd.api+json', 'Accept': 'application/vnd.api+json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    CheckOutService.prototype.postRequestHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': __WEBPACK_IMPORTED_MODULE_6__shared_secret__["a" /* AUTHORIZATION */], 'Content-Type': 'application/vnd.api+json', 'Accept': 'application/vnd.api+json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    return CheckOutService;
}());
CheckOutService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _d || Object])
], CheckOutService);

var _a, _b, _c, _d;
//# sourceMappingURL=check-out.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DbService = (function () {
    function DbService() {
    }
    DbService.prototype.createDb = function (name, v) {
        return this.request = indexedDB.open(name, v);
    };
    return DbService;
}());
DbService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DbService);

//# sourceMappingURL=db.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MailService = (function () {
    function MailService(_http) {
        this._http = _http;
        this.apiUrl = "https://mailer-server.herokuapp.com/mailings.json";
    }
    MailService.prototype.sendMail = function (name, email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json ");
        var body = { mailing: { name: name, email: email } };
        return this._http.post(this.apiUrl, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MailService.prototype.getMails = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json ");
        return this._http.get(this.apiUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return MailService;
}());
MailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MailService);

var _a;
//# sourceMappingURL=mail.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderService = (function () {
    function OrderService(afA, afDb) {
        this.afA = afA;
        this.afDb = afDb;
        this.getUser();
    }
    OrderService.prototype.getUser = function () {
        var _this = this;
        this.afA.authState.subscribe(function (user) {
            _this.currentUser = user;
        });
    };
    OrderService.prototype.getOrder = function () {
        var uid = localStorage.getItem("userId");
        return this.afDb.list('/orders', function (ref) { return ref.orderByChild('customerId')
            .equalTo(uid).limitToLast(1); })
            .stateChanges();
    };
    OrderService.prototype.getOrders = function () {
        return this.afDb.list('orders').valueChanges();
    };
    OrderService.prototype.getOrdersWithId = function () {
        return this.afDb.list('orders').snapshotChanges();
    };
    OrderService.prototype.getSingleOrderWithItems = function (key) {
        return this.afDb.object('orders/' + key).valueChanges();
    };
    OrderService.prototype.createOrder = function (order, shipping, basket, amount) {
        var orders = __assign({}, order, { shipping: shipping, amount: amount, basket: basket, createdAt: Date(), status: "pending" });
        var dbRef = this.afDb.list('orders');
        dbRef.push(orders).then(function (res) {
            console.log(res);
            localStorage.setItem("lastOrderKey", res.key);
            console.log("Order submitted");
            //Send email to the customer
        });
        // console.log(amount);
        // console.log(orders);
        return;
    };
    OrderService.prototype.upDateOrder = function (key, update) {
        var updatObj = __assign({}, update, { updatedAt: Date() });
        var dbRef = this.afDb.object('orders/' + key);
        dbRef.update(updatObj).then(function (res) {
            console.log("Order Updated");
        }).catch(function (err) { return console.log(err); });
    };
    OrderService.prototype.createTransaction = function (data, orderId, amount, name) {
        var transaction = {
            customerName: name,
            intent: data.intent,
            paymentID: data.paymentID,
            payerID: data.payerID,
            paymentToken: data.paymentToken,
            orderId: orderId,
            createdAt: Date(),
            amounts: amount,
            uid: localStorage.getItem("userId"),
        };
        var dbRef = this.afDb.list('sales');
        dbRef.push(transaction).then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    OrderService.prototype.getTransactions = function () {
        return this.afDb.list('sales').valueChanges();
    };
    OrderService.prototype.removeTransaction = function (key) {
        var dbRef = this.afDb.object('sales/' + key);
        dbRef.remove();
    };
    return OrderService;
}());
OrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
], OrderService);

var _a, _b;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';




var ProductService = (function () {
    function ProductService(db, route, router) {
        this.db = db;
        this.route = route;
        this.router = router;
        this.cachesProduct$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
    }
    //==Retrieving Products from the FireBase Database==//
    ProductService.prototype.getProduct = function () {
        return this.db.list('products').valueChanges();
    };
    ProductService.prototype.getProductWithId = function () {
        var colls = this.db.list('products').snapshotChanges();
        return colls.map(function (snapshot) {
            var data = [];
            snapshot.forEach(function (docs) {
                data.push({ data: docs.payload.val(), key: docs.payload.key });
            });
            return data;
        });
    };
    ProductService.prototype.oneProduct = function (id) {
        return this.db.list('products').valueChanges()
            .subscribe(function (products) {
            products.find(function (product) { return product = product === +id; });
        });
    };
    ProductService.prototype.getCacheProduct = function () {
        var _this = this;
        if (!this.cachesProduct$.observers.length) {
            this.getProduct().subscribe(function (product) { return _this.cachesProduct$.next(product); }, function (err) {
                if (err) {
                    _this.cachesProduct$.error(err);
                    _this.cachesProduct$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
                }
            });
        }
        return this.cachesProduct$;
    };
    //==Adding Product to the List==//
    ProductService.prototype.addProduct = function (product) {
        var db = this.db.list('products');
        return db.push(product);
    };
    //==Deleting Single Product form the List==//
    ProductService.prototype.removeProduct = function (key, file) {
        var db = this.db.list('products');
        db.remove(key).then(function (res) {
            console.log(res);
            if (file) {
                this.removeProductImage(file);
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    //==Updating Product section==//
    ProductService.prototype.getUpdateVal = function (data) {
        this.rdata = data;
    };
    ProductService.prototype.updateProduct = function (key, data) {
        console.log('Updating product with key: ' + key);
        console.log('............');
        var dbRef = this.db.object('products/' + key);
        dbRef.update(data).then(function (res) {
            console.log('product updated');
        }).catch(function (err) {
            console.log(err);
        });
    };
    ProductService.prototype.removeProductImage = function (file) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref('/images/products/' + file);
        storageRef.delete().then(function (res) {
            console.log("Image Deleted Successfully");
        }).catch(function (err) { return console.log(err); });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ProductService);

var _a, _b, _c;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(db) {
        this.db = db;
    }
    TestService.prototype.getTestProduct = function () {
        return this.db.list('testproducts');
    };
    TestService.prototype.addProduct = function (product) {
        var db = this.db.list('testproducts');
        db.push(product).then(function (res) {
            console.log('Product Created Successfully');
        });
    };
    TestService.prototype.updateProduct = function (key, data) {
        console.log('Updating product with key: ' + key);
        console.log('............');
        var dbRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('testproducts/' + key);
        dbRef.update(data).then(function (res) {
            console.log('product updated');
        }).catch(function (err) {
            console.log(err);
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadService = (function () {
    function UploadService(localStorage) {
    }
    UploadService.prototype.uploadImage = function (selectedFile) {
        var filename = selectedFile.name;
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref('/blogimages/' + filename);
        var uploadTask = storageRef.put(selectedFile);
        uploadTask.on('state_changed', function (snapshot) {
            // let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
            // switch (snapshot.state) {
            //     case firebase.storage.TaskState.PAUSED: // or 'paused'
            //     console.log('Upload is paused');
            //     break;
            //     case firebase.storage.TaskState.RUNNING: // or 'running'
            //     console.log('Upload is running');
            //     break;
            // }
        }, function (error) {
            console.log(error);
            // Handle unsuccessful uploads
        }, function () {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            var downloadURL = uploadTask.snapshot.downloadURL;
            // localStorage.setItem('downloadURL', (downloadURL) );
            console.log(downloadURL);
        });
    };
    UploadService.prototype.removeImage = function (key) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref('/blogimages/');
    };
    return UploadService;
}());
UploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object])
], UploadService);

var _a;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/share-modules/share.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_cat_menu_cat_menu_component__ = __webpack_require__("../../../../../src/app/menu/cat-menu/cat.menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__check_out_shopping_cart_side_component__ = __webpack_require__("../../../../../src/app/check-out/shopping-cart-side.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ShareModule = (function () {
    function ShareModule() {
    }
    return ShareModule;
}());
ShareModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__menu_cat_menu_cat_menu_component__["a" /* CatMenuComponent */], __WEBPACK_IMPORTED_MODULE_4__check_out_shopping_cart_side_component__["a" /* CartSideComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__menu_cat_menu_cat_menu_component__["a" /* CatMenuComponent */], __WEBPACK_IMPORTED_MODULE_4__check_out_shopping_cart_side_component__["a" /* CartSideComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_mail_service__["a" /* MailService */]]
    })
], ShareModule);

//# sourceMappingURL=share.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/images/images.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Images; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WelcomeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutImage; });
var Images = [
    "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fheader%2Fcoffee-pouring.jpg?alt=media&token=20d4b4fa-2c7c-4e11-a609-83dc19860118",
    "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fheader%2Four-coffee.png?alt=media&token=1a21966b-10a1-4476-83b3-769777133ef2",
];
var WelcomeImage = [
    "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fwelcome%2FDSCN0715-min.JPG?alt=media&token=5379c226-0cdb-4df5-9451-5f4f59180c7c",
    "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fwelcome%2FDSCN0746-min.JPG?alt=media&token=d91da0cf-5637-4e2f-8ae1-6a33b2306e8d",
    "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fwelcome%2FDSCN0767-min.JPG?alt=media&token=1dbf5d61-e8cd-4fa9-a505-73529e77dd96",
    "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fwelcome%2FDSCN0792-min.JPG?alt=media&token=b89d8ab5-8666-4980-8c9c-754c57d570db"
];
var AboutImage = [
    "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fabouts%2Fcoffee-shop1.jpg?alt=media&token=bd2667d3-3434-4a39-8977-d1e234a57e28",
    "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fabouts%2Fcoffee-shop2.jpg?alt=media&token=5467e088-c179-41c8-ae52-9e8a10fe2296",
    "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fabouts%2Fcoffee-shop3.jpg?alt=media&token=df32338e-8946-4b4b-bad3-0168c2eda5a6",
    "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fabouts%2Fcoffee-shop4.jpg?alt=media&token=bdcd225b-acec-4bda-9547-0cf1c932a1b1",
    "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fabouts%2Fcoffee-shop5.jpg?alt=media&token=577ec4d4-917e-437c-b78f-6873a2685b47",
    "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fabouts%2Fcoffee-shop6.jpg?alt=media&token=a961f314-af23-42d1-8dc8-32733d05a791"
    // "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fabouts%2FDSCN0739-min.JPG?alt=media&token=966c5875-86af-4d39-95ec-5967e68d5715",
    // "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fabouts%2FDSCN0747-min.JPG?alt=media&token=67d350ca-76f1-409b-8fa9-567996b1c747",
    // "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fabouts%2FDSCN0776-min.JPG?alt=media&token=0bb4948a-134a-407c-be47-36495ceb5b15",
    // "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fabouts%2F20170102_123047-min.jpg?alt=media&token=582421cc-49e5-4d96-a3fe-916de82475ce",
    // "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fabouts%2F20170102_123108-min.jpg?alt=media&token=c6dc396f-0417-4ddd-bf67-cdaf50075305",
    // "https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fabouts%2F20170102_123127-min.jpg?alt=media&token=21f5575a-8128-41d2-8319-185cdd7a6ebe"
];
//# sourceMappingURL=images.js.map

/***/ }),

/***/ "../../../../../src/app/shared/secret.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHORIZATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FIREBASEAPI; });
var AUTHORIZATION = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjF9.eyQ9jfdECQ74pPyA8LDjXr-4NUt36lSAcdDNn16vnEQ";
var FIREBASEAPI = "AIzaSyBZYu-le-v0_1NuB0exuYJmJcsZqSJ-EKM";
//# sourceMappingURL=secret.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app___ = __webpack_require__("../../../../../src/app/index.ts");
// import './polyfills.ts';




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app___["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map