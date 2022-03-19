"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage,
    },
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







;
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let LoginPage = class LoginPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    login() {
        const username = this.username;
        const password = this.password;
        fetch('https://popcorntasters-api.herokuapp.com/auth/login', {
            method: 'POST',
            headers: new Headers({
                // Encabezados
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw 'The user does not exists or the data does not matches...';
            }
        })
            .then((r) => {
            console.log(r);
            localStorage.setItem('loggedin', 'true');
            localStorage.setItem('username', this.username);
            this.router.navigate(['/menu/main']);
        })
            .catch((e) => console.log(e));
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #cf3c4f;\n}\n\nion-content {\n  --background: #222428;\n}\n\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 100px;\n  padding-right: 40px;\n  padding-bottom: 0px;\n  padding-left: 40px;\n}\n\nion-content #header img {\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n}\n\nion-content #header h1 {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 700;\n  font-size: 26px;\n  color: #ffffff;\n  margin-bottom: 15%;\n}\n\nion-content ion-item {\n  border-radius: 50px;\n  height: 55px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --hightlight-height: 0px;\n}\n\nion-content ion-item ion-input {\n  font-size: 18px;\n  --padding-top: 20px;\n  --padding-bottom: 15px;\n  --padding-start: 5px;\n}\n\nion-content ion-item a {\n  font-size: 17px;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n}\n\nion-content ion-buton {\n  margin-top: 35px;\n  padding-left: 30px;\n  padding-right: 30px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n  --box-shadow: none;\n}\n\nion-content #register {\n  padding-right: 160px;\n  padding-bottom: 50px;\n  padding-left: 120px;\n}\n\nion-content #register ion-item p {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBS0E7RUFDSSxxQkFBQTtBQUZKOztBQUlJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZSOztBQUlRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRlo7O0FBS1E7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUhaOztBQU9JO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSx3QkFBQTtBQUxSOztBQU9RO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUxaOztBQVFRO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFOWjs7QUFVSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7QUFSUjs7QUFnQkk7RUFDSSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFkUjs7QUFrQlk7RUFDSSxrQkFBQTtBQWhCaEIiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjY2YzYzRmO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMjI0Mjg7XHJcbiAgICBcclxuICAgICNoZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4OyAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjZweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgICAgIC0taGlnaHRsaWdodC1oZWlnaHQ6IDBweDtcclxuICAgICAgICBcclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1idXRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICNyZWdpc3RlciB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTYwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMjBweDtcclxuICAgICAgICBcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <div id=\"header\">    \r\n    <img src=\"assets/logos/logo1.png\" />\r\n    <h1>Log in to PopcornTasters</h1>\r\n  </div>\r\n  \r\n  <ion-item>\r\n    <ion-input [(ngModel)]=\"username\" type=\"text\" placeholder=\"Username\"></ion-input>\r\n  </ion-item>\r\n  <br>\r\n  <ion-item>\r\n    <ion-input [(ngModel)]=\"password\" type=\"password\" placeholder=\"Password\"></ion-input>\r\n  </ion-item>\r\n  <br>\r\n  <ion-button expand=\"block\" shape=\"round\" (click)= \"login()\">Login</ion-button>\r\n  \r\n  \r\n  <div id=\"register\">\r\n    <br/>\r\n    <ion-item>\r\n      <p>Don't have an account? <a href=\"/register\"> Sign up</a></p> \r\n    </ion-item>\r\n  </div>\r\n  \r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map