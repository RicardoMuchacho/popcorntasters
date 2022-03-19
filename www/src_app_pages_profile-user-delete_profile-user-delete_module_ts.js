"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile-user-delete_profile-user-delete_module_ts"],{

/***/ 3954:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile-user-delete/profile-user-delete-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUserDeletePageRoutingModule": () => (/* binding */ ProfileUserDeletePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profile_user_delete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-user-delete.page */ 8857);




const routes = [
    {
        path: '',
        component: _profile_user_delete_page__WEBPACK_IMPORTED_MODULE_0__.ProfileUserDeletePage
    }
];
let ProfileUserDeletePageRoutingModule = class ProfileUserDeletePageRoutingModule {
};
ProfileUserDeletePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileUserDeletePageRoutingModule);



/***/ }),

/***/ 8925:
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile-user-delete/profile-user-delete.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUserDeletePageModule": () => (/* binding */ ProfileUserDeletePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_user_delete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-user-delete-routing.module */ 3954);
/* harmony import */ var _profile_user_delete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-user-delete.page */ 8857);







let ProfileUserDeletePageModule = class ProfileUserDeletePageModule {
};
ProfileUserDeletePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_user_delete_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileUserDeletePageRoutingModule
        ],
        declarations: [_profile_user_delete_page__WEBPACK_IMPORTED_MODULE_1__.ProfileUserDeletePage]
    })
], ProfileUserDeletePageModule);



/***/ }),

/***/ 8857:
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile-user-delete/profile-user-delete.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUserDeletePage": () => (/* binding */ ProfileUserDeletePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_user_delete_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-user-delete.page.html?ngResource */ 6211);
/* harmony import */ var _profile_user_delete_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-user-delete.page.scss?ngResource */ 3740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);







let ProfileUserDeletePage = class ProfileUserDeletePage {
    constructor(router, http, activatedRoute) {
        this.router = router;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.username = localStorage.getItem('username');
    }
    ngOnInit() { }
    deleteUser() {
        const password = this.password;
        fetch('https://popcorntasters-api.herokuapp.com/users/' + this.username, {
            method: 'DELETE',
            headers: new Headers({
                // Encabezados
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                username: this.username,
                password: password,
            }),
        })
            .then((response) => {
            console.log(response);
            console.log('Account eliminated...');
            localStorage.removeItem('loggedin');
            this.router.navigate(['/login']);
            return response.json();
        })
            .then((r) => {
            console.log(r);
        })
            .catch((e) => console.log(e));
    }
};
ProfileUserDeletePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
ProfileUserDeletePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-profile-user-delete',
        template: _profile_user_delete_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_user_delete_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileUserDeletePage);



/***/ }),

/***/ 3740:
/*!************************************************************************************!*\
  !*** ./src/app/pages/profile-user-delete/profile-user-delete.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #cf3c4f;\n}\n\nion-content {\n  --background: #222428;\n}\n\n#header {\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 25px;\n  padding-right: 40px;\n  padding-bottom: 0px;\n  padding-left: 40px;\n  text-align: center;\n}\n\n#header h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #ffffff;\n  margin-bottom: 15%;\n}\n\n#header img {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n}\n\n#header h2 {\n  font-weight: 400;\n  font-size: 20px;\n  color: #ffffff;\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtdXNlci1kZWxldGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ1I7O0FBRUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBUjs7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQURSIiwiZmlsZSI6InByb2ZpbGUtdXNlci1kZWxldGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjY2YzYzRmO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMjI0Mjg7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gICAgXHJcbiAgICBoMSB7ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6MjZweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGgyIHsgICAgICAgICAgICBcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG59Il19 */";

/***/ }),

/***/ 6211:
/*!************************************************************************************!*\
  !*** ./src/app/pages/profile-user-delete/profile-user-delete.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Delete Account</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n      <ion-button routerLink=\"/profile-user\">Return To User Profile</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div id=\"header\">\r\n    <h1>Delete your Account</h1>\r\n    <img src=\"assets/logos/user-delete.png\" />\r\n    <h2>Continue with the verification:</h2>\r\n  </div>\r\n\r\n  <ion-card class=\"ion-margin\">\r\n    <br />\r\n    <ion-item>\r\n      <ion-input\r\n        [(ngModel)]=\"password\"\r\n        type=\"password\"\r\n        placeholder=\"Enter your password\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <br />\r\n  </ion-card>\r\n  <ion-button\r\n    color=\"danger\"\r\n    expand=\"block\"\r\n    shape=\"round\"\r\n    class=\"ion-margin\"\r\n    (click)=\"deleteUser()\"\r\n    >Delete</ion-button\r\n  >\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile-user-delete_profile-user-delete_module_ts.js.map