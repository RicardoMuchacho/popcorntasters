"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_user-activity_user-activity_module_ts"],{

/***/ 125:
/*!*********************************************************************!*\
  !*** ./src/app/pages/user-activity/user-activity-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActivityPageRoutingModule": () => (/* binding */ UserActivityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _user_activity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-activity.page */ 6559);




const routes = [
    {
        path: '',
        component: _user_activity_page__WEBPACK_IMPORTED_MODULE_0__.UserActivityPage
    }
];
let UserActivityPageRoutingModule = class UserActivityPageRoutingModule {
};
UserActivityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserActivityPageRoutingModule);



/***/ }),

/***/ 8998:
/*!*************************************************************!*\
  !*** ./src/app/pages/user-activity/user-activity.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActivityPageModule": () => (/* binding */ UserActivityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-activity-routing.module */ 125);
/* harmony import */ var _user_activity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-activity.page */ 6559);







let UserActivityPageModule = class UserActivityPageModule {
};
UserActivityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserActivityPageRoutingModule
        ],
        declarations: [_user_activity_page__WEBPACK_IMPORTED_MODULE_1__.UserActivityPage]
    })
], UserActivityPageModule);



/***/ }),

/***/ 6559:
/*!***********************************************************!*\
  !*** ./src/app/pages/user-activity/user-activity.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActivityPage": () => (/* binding */ UserActivityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_activity_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-activity.page.html?ngResource */ 6423);
/* harmony import */ var _user_activity_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-activity.page.scss?ngResource */ 9205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);







let UserActivityPage = class UserActivityPage {
    constructor(route, http, activatedRoute) {
        this.route = route;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.comments = [];
        this.username = localStorage.getItem('username');
        this.ratings = [];
    }
    ngOnInit() {
        this.http
            .get('https://popcorntasters-api.herokuapp.com/users/' +
            this.username +
            '/comments')
            .subscribe((res) => {
            console.log(res);
            this.comments = res;
        });
        this.http
            .get('https://popcorntasters-api.herokuapp.com/users/' +
            this.username +
            '/ratings')
            .subscribe((res) => {
            console.log(res);
            this.ratings = res;
        });
    }
};
UserActivityPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
UserActivityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-activity',
        template: _user_activity_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_activity_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserActivityPage);



/***/ }),

/***/ 9205:
/*!************************************************************************!*\
  !*** ./src/app/pages/user-activity/user-activity.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #cf3c4f;\n}\n\nion-content {\n  --background: #222428;\n}\n\n.swag {\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 25px;\n  padding-right: 40px;\n  padding-bottom: 0px;\n  padding-left: 40px;\n  text-align: center;\n}\n\n.swag img {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n}\n\n.swag h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #ffffff;\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYWN0aXZpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBSUE7RUFHSSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhKOztBQUtJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSFI7O0FBTUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFKUiIsImZpbGUiOiJ1c2VyLWFjdGl2aXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2NmM2M0ZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjIyNDI4O1xyXG59XHJcblxyXG5cclxuXHJcbi5zd2FnIHtcclxuICAgIFxyXG4gICAgXHJcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDsgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiAgICBcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGgxIHsgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 6423:
/*!************************************************************************!*\
  !*** ./src/app/pages/user-activity/user-activity.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n      <ion-button routerLink=\"/menu/main\">Return to Main</ion-button>\r\n    </ion-buttons>\r\n    \r\n    <ion-title class=\"ion-text-center\">User Activity</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"swag\"> \r\n    \r\n    <img src=\"assets/logos/comment.png\" />\r\n    <h1 >Comments:</h1>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let com of comments\">\r\n        <ion-label\r\n        >𝗠𝗼𝘃𝗶𝗲: {{com.movie_title}} - 𝗖𝗼𝗺𝗺𝗲𝗻𝘁:\r\n        {{com.description}}</ion-label\r\n        >\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card>\r\n  <br><br><br><br>\r\n  \r\n  \r\n  <ion-card class=\"swag\">\r\n    <img src=\"assets/logos/rating.png\" />\r\n    <h1>Ratings:</h1>\r\n  \r\n          <ion-list>\r\n            <ion-item *ngFor=\"let rat of ratings\">\r\n              <ion-label\r\n              >𝗠𝗼𝘃𝗶𝗲: {{rat.movie_title}} - 𝗥𝗮𝘁𝗶𝗻𝗴:\r\n              {{rat.rating}}</ion-label\r\n              >\r\n            </ion-item>\r\n          </ion-list>\r\n          \r\n       \r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-activity_user-activity_module_ts.js.map