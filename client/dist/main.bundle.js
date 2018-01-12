webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/main/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_demo_demo_component__ = __webpack_require__("../../../../../src/app/components/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_main_main_component__["a" /* MainComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_demo_demo_component__["a" /* DemoComponent */] },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__components_main_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'projects/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_main_dashboard_dashboard_component__["a" /* DashboardComponent */] }
        ] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_material_module__ = __webpack_require__("../../../../../src/app/ui/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_covalent_module__ = __webpack_require__("../../../../../src/app/ui/covalent.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_demo_demo_component__ = __webpack_require__("../../../../../src/app/components/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_demo_demo_sidebar_demo_sidebar_component__ = __webpack_require__("../../../../../src/app/components/demo/demo-sidebar/demo-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_demo_demo_form_demo_form_component__ = __webpack_require__("../../../../../src/app/components/demo/demo-form/demo-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_demo_demo_add_demo_add_component__ = __webpack_require__("../../../../../src/app/components/demo/demo-add/demo-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_demo_demo_edit_demo_edit_component__ = __webpack_require__("../../../../../src/app/components/demo/demo-edit/demo-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_auth_user_form_user_form_component__ = __webpack_require__("../../../../../src/app/components/auth/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_auth_register_register_component__ = __webpack_require__("../../../../../src/app/components/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_auth_account_account_component__ = __webpack_require__("../../../../../src/app/components/auth/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_auth_login_login_component__ = __webpack_require__("../../../../../src/app/components/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_main_main_nav_main_nav_component__ = __webpack_require__("../../../../../src/app/components/main/main-nav/main-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_main_main_nav2_main_nav2_component__ = __webpack_require__("../../../../../src/app/components/main/main-nav2/main-nav2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_main_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/main/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_main_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/main/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_project_project_form_project_form_component__ = __webpack_require__("../../../../../src/app/components/project/project-form/project-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_project_new_project_new_project_component__ = __webpack_require__("../../../../../src/app/components/project/new-project/new-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_project_edit_project_edit_project_component__ = __webpack_require__("../../../../../src/app/components/project/edit-project/edit-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_project_join_project_join_project_component__ = __webpack_require__("../../../../../src/app/components/project/join-project/join-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_task_task_form_task_form_component__ = __webpack_require__("../../../../../src/app/components/task/task-form/task-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_task_new_task_new_task_component__ = __webpack_require__("../../../../../src/app/components/task/new-task/new-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_task_edit_task_edit_task_component__ = __webpack_require__("../../../../../src/app/components/task/edit-task/edit-task.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular modules







// UI modules



// Services



// AppComponent

// Demo Components





// Auth Components




// Layout Components





// Project Components




// Task Components



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__components_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_auth_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_auth_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_auth_account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_main_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_demo_demo_component__["a" /* DemoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_auth_user_form_user_form_component__["a" /* UserFormComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_main_main_nav_main_nav_component__["a" /* MainNavComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_project_project_form_project_form_component__["a" /* ProjectFormComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_project_join_project_join_project_component__["a" /* JoinProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_main_main_nav2_main_nav2_component__["a" /* MainNav2Component */],
                __WEBPACK_IMPORTED_MODULE_25__components_main_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_project_new_project_new_project_component__["a" /* NewProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_task_new_task_new_task_component__["a" /* NewTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_task_task_form_task_form_component__["a" /* TaskFormComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_project_edit_project_edit_project_component__["a" /* EditProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_task_edit_task_edit_task_component__["a" /* EditTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_demo_demo_sidebar_demo_sidebar_component__["a" /* DemoSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_demo_demo_form_demo_form_component__["a" /* DemoFormComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_demo_demo_add_demo_add_component__["a" /* DemoAddComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_demo_demo_edit_demo_edit_component__["a" /* DemoEditComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__ui_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__ui_covalent_module__["a" /* CovalentModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_dragula__["DragulaModule"],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__components_auth_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_auth_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_auth_account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_project_join_project_join_project_component__["a" /* JoinProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_project_new_project_new_project_component__["a" /* NewProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_task_new_task_new_task_component__["a" /* NewTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_project_edit_project_edit_project_component__["a" /* EditProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_task_edit_task_edit_task_component__["a" /* EditTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_demo_demo_add_demo_add_component__["a" /* DemoAddComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_demo_demo_edit_demo_edit_component__["a" /* DemoEditComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_10__services_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_11__services_task_service__["a" /* TaskService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__components_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hammerjs__);
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
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "\n<span *ngIf=\"user | async as user\">\n\n<div layout=row layout-padding>\n\n    <div flex>\n\n        <h3>Change Password</h3>\n        <form #pwForm=ngForm (submit)=changePW()>\n\n            <mat-form-field>\n            <input [type]=\"hidePW ? 'password' : 'text'\"\n                matInput placeholder=\"Password\"\n                name=_pw [(ngModel)]='pwField._pw' #_pw='ngModel'\n                required minlength=8>\n            <mat-icon matSuffix (click)=\"hidePW = !hidePW\">\n                {{hidePW ? 'visibility' : 'visibility_off'}}\n            </mat-icon>\n            </mat-form-field>\n\n            <mat-form-field>\n            <input [type]=\"hidePWC ? 'password' : 'text'\"\n                matInput placeholder=\"Confirm Password\"\n                name=_pwconf [(ngModel)]='pwField._pwconf' #_pwconf='ngModel'\n                required pattern={{pwField._pw}}>\n            <mat-icon matSuffix (click)=\"hidePWC = !hidePWC\">\n                {{hidePWC ? 'visibility' : 'visibility_off'}}\n            </mat-icon>\n            <mat-error align=right *ngIf=_pwconf.errors [hidden]=!_pwconf.errors.pattern>\n                Must be exact match.\n            </mat-error>\n            </mat-form-field>\n            \n            <button mat-raised-button *ngIf=\"!pwForm.valid\" disabled>Change Password</button>\n            <button type=submit mat-raised-button color=accent *ngIf=\"pwForm.valid\">Change Password</button>\n        </form>\n\n        <div>&nbsp;</div>\n\n        <h3>Delete Account</h3>\n        <form #delForm=ngForm (submit)=unregister()>\n            <mat-form-field>\n            <input [type]=\"hidePWD ? 'password' : 'text'\"\n            matInput placeholder=\"Password\"\n            name=_pw [(ngModel)]='pwDel._pw' #_pw='ngModel'\n            required minlength=8>\n            <mat-icon matSuffix (click)=\"hidePWD = !hidePWD\">\n            {{hidePW ? 'visibility' : 'visibility_off'}}\n            </mat-icon>\n            <mat-error align=right>{{pwError}}</mat-error>\n            </mat-form-field>\n\n            <button mat-raised-button *ngIf=\"!delForm.valid\" disabled>Delete</button>\n            <button type=submit mat-raised-button color=accent *ngIf=\"delForm.valid\">Delete</button> \n        </form>\n\n    </div>\n\n    <div flex=5>&nbsp;</div>\n    \n    <div flex>\n        <h3>Update My Information</h3>\n        <user-form [user]=user [action]=action (send)=update($event)></user-form>\n    </div>\n\n</div>\n\n</span>"

/***/ }),

/***/ "../../../../../src/app/components/auth/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
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
    function AccountComponent(snackbar, _us, _router, dialog, _tdDialog) {
        this.snackbar = snackbar;
        this._us = _us;
        this._router = _router;
        this.dialog = dialog;
        this._tdDialog = _tdDialog;
        this.action = 'Update';
        this.pwField = { _pw: '', _pwconf: '' };
        this.pwDel = { _pw: '' };
        this.hidePW = true;
        this.hidePWC = true;
        this.hidePWD = true;
        this.user = { name: '' };
    }
    AccountComponent.prototype.ngOnInit = function () {
        this._us.updateStatus();
        this.user = this._us.status$;
    };
    AccountComponent.prototype.changePW = function () {
        var _this = this;
        this._us.updatePW(this.pwField)
            .subscribe(function (result) {
            _this.snackbar.open(result['msg'], 'x', { duration: 3000 });
        });
    };
    AccountComponent.prototype.update = function (user) {
        var _this = this;
        this._us.updateUser(user)
            .subscribe(function (result) {
            _this.snackbar.open(result['msg'], 'x', { duration: 3000 });
            _this._us.updateStatus();
            _this.dialog.close();
        });
    };
    AccountComponent.prototype.unregister = function () {
        var _this = this;
        this._tdDialog.openConfirm({
            message: 'Are you sure you want to unregister? Your account and all associations will be permanently deleted.',
            title: 'Delete Account',
            acceptButton: "Confirm",
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                _this._us.unregister(_this.pwDel)
                    .subscribe(function (result) {
                    _this.snackbar.open(result['msg'], 'x', { duration: 3000 });
                    _this._us.updateStatus();
                    _this.dialog.close();
                    _this._router.navigate(['']);
                });
            }
        });
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/components/auth/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_4__covalent_core__["d" /* TdDialogService */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div layout=column layout-margin layout-padding>\n\n  <h3 mat-dialog-title align=center>Log In</h3>\n\n  <form (submit)=login()>\n\n  <div mat-dialog-content>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Email Address\"\n          name=email [(ngModel)]='guest.email'>\n          <mat-error align=right>{{emailError}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input [type]=\"hidePW ? 'password' : 'text'\"\n          matInput placeholder=\"Password\"\n          name=_pw [(ngModel)]='guest._pw' #_pw='ngModel'>\n        <mat-icon matSuffix (click)=\"hidePW = !hidePW\">\n          {{hidePW ? 'visibility' : 'visibility_off'}}\n        </mat-icon>\n          <mat-error align=right>{{pwError}}</mat-error>\n      </mat-form-field>\n\n  </div>\n\n  <div mat-dialog-actions align=center>\n  <button type=submit mat-button>Log In</button>\n  </div>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function LoginComponent(_us, _ps, snackbar, dialog, _router) {
        this._us = _us;
        this._ps = _ps;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this._router = _router;
        this.guest = { email: '', _pw: '' };
        this.hidePW = true;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._us.login(this.guest)
            .subscribe(function (result) {
            _this.snackbar.open(result['msg'], 'x', { duration: 3000 });
            _this._us.updateStatus();
            if (result['status']) {
                _this._ps.getAgenda();
                _this.dialog.close();
                _this._router.navigate(['dashboard']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div layout=column layout-margin layout-padding>\n\n    <h2 mat-dialog-title align=center>Create a New Account</h2>\n\n    <user-form [user]=user [action]=action (send)=register($event)></user-form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(dialog, snackbar, _us, _ps, _router) {
        this.dialog = dialog;
        this.snackbar = snackbar;
        this._us = _us;
        this._ps = _ps;
        this._router = _router;
        this.user = {
            first: '',
            last: '',
            email: '',
            _pw: '',
            _pwconf: ''
        };
        this.action = 'Sign Up';
    }
    RegisterComponent.prototype.register = function (user) {
        var _this = this;
        this._us.register(user)
            .subscribe(function (result) {
            _this.snackbar.open(result['msg'], 'x', { duration: 3000 });
            _this._us.updateStatus();
            if (result['status']) {
                _this._ps.getAgenda();
                _this.dialog.close();
                _this._router.navigate(['dashboard']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/auth/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/user-form/user-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=ngForm (submit)=sendUser()>\n\n<div mat-dialog-content>\n\n    <mat-form-field>\n      <input matInput placeholder=\"First Name\"\n        name=first [(ngModel)]='user.first' #first='ngModel'\n        required minlength=2>\n        <mat-hint align=end>Minimum 2 characters</mat-hint>\n        <mat-error align=right *ngIf=first.errors [hidden]=!first.errors.minlength>\n          Must be 2 characters minimum.\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Last Name\"\n        name=last [(ngModel)]='user.last' #last='ngModel'\n        required minlength=2>\n        <mat-hint align=end>Minimum 2 characters</mat-hint>\n        <mat-error align=right *ngIf=last.errors [hidden]=!last.errors.minlength>\n          Must be 2 characters minimum.\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Email Address\"\n        name=email [(ngModel)]='user.email'\n        required [formControl]=email\n        (keyup)=\"user.email = user.email.toLowerCase()\"\n        (keyup)=\"address$.next($event.target.value)\">\n        <mat-hint align=end *ngIf=!unique color=warn>\n          Email address already in use.\n        </mat-hint>\n        <mat-error align=right *ngIf=email.invalid>{{getEmailError()}}</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input [type]=\"hidePW ? 'password' : 'text'\"\n        matInput placeholder=\"Password\"\n        name=_pw [(ngModel)]='user._pw' #_pw='ngModel'\n        required minlength=8>\n      <mat-icon matSuffix (click)=\"hidePW = !hidePW\">\n        {{hidePW ? 'visibility' : 'visibility_off'}}\n      </mat-icon>\n        <mat-hint *ngIf=\"action === 'Sign Up'\" align=end>Minimum 8 characters</mat-hint>\n        <mat-hint *ngIf=\"action === 'Update'\" align=end>Enter password to confirm changes.</mat-hint>\n        <mat-error align=right *ngIf=_pw.errors [hidden]=!_pw.errors.minlength>\n          <span *ngIf=\"action === 'Sign Up'\">Must be 8 characters minimum.</span>\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"action === 'Sign Up'\">\n      <input [type]=\"hidePWC ? 'password' : 'text'\"\n        matInput placeholder=\"Confirm Password\"\n        name=_pwconf [(ngModel)]='user._pwconf' #_pwconf='ngModel'\n        required pattern={{user._pw}}>\n      <mat-icon matSuffix (click)=\"hidePWC = !hidePWC\">\n        {{hidePWC ? 'visibility' : 'visibility_off'}}\n      </mat-icon>\n        <mat-error align=right *ngIf=_pwconf.errors [hidden]=!_pwconf.errors.pattern>\n          Must be exact password match.\n        </mat-error>\n    </mat-form-field>\n\n</div>\n\n<div mat-dialog-actions align=center>\n<button mat-raised-button *ngIf=\"!form.valid || !unique\" disabled>{{action}}</button>\n<button type=submit mat-raised-button color=accent *ngIf=\"form.valid && unique\">{{action}}</button>\n</div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/auth/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Rxjs__ = __webpack_require__("../../../../Rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_Rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserFormComponent = (function () {
    function UserFormComponent(_us) {
        this._us = _us;
        this.send = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        // form controls/validations
        // I might later want to make the entire form reactive
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]);
        this.hidePW = true;
        this.hidePWC = true;
        this.address$ = new __WEBPACK_IMPORTED_MODULE_3_Rxjs__["Subject"](); // email address input
        this.unique = true;
    }
    UserFormComponent.prototype.getEmailError = function () {
        return this.email.hasError('email')
            ? 'Valid email address required.' : '';
    };
    UserFormComponent.prototype.checkEmail = function () {
        var _this = this;
        if (this.action === 'Sign up') {
            this._us.checkEmail(this.address$)
                .subscribe(function (result) {
                _this.unique = result;
            });
        }
    };
    UserFormComponent.prototype.ngOnInit = function () {
        this.checkEmail();
    };
    UserFormComponent.prototype.sendUser = function () {
        this.send.emit(this.user);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserFormComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserFormComponent.prototype, "action", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserFormComponent.prototype, "send", void 0);
    UserFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-form',
            template: __webpack_require__("../../../../../src/app/components/auth/user-form/user-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/demo/demo-add/demo-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/demo/demo-add/demo-add.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div layout=column>\n\n    <h2 mat-dialog-title align=center>New Item</h2>\n\n    <app-demo-form\n    [task]=task\n    [action]=action\n    (send)=updateProject()\n    ></app-demo-form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/demo/demo-add/demo-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DemoAddComponent = (function () {
    function DemoAddComponent(data, dialogRef, _ps) {
        this.data = data;
        this.dialogRef = dialogRef;
        this._ps = _ps;
        this.task = { title: '', description: '' };
        this.action = 'Add Item';
        this.project = { grid: [[]] };
    }
    DemoAddComponent.prototype.ngOnInit = function () {
        this.project = this.data;
    };
    DemoAddComponent.prototype.updateProject = function () {
        this.project.grid[0].tasks.push(this.task);
        this._ps.updateDemo(this.project);
        this.dialogRef.close();
    };
    DemoAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-demo-add',
            template: __webpack_require__("../../../../../src/app/components/demo/demo-add/demo-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/demo/demo-add/demo-add.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */]])
    ], DemoAddComponent);
    return DemoAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/demo/demo-edit/demo-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/demo/demo-edit/demo-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div layout=column>\n\n    <h2 mat-dialog-title align=center>Edit Item</h2>\n\n    <app-demo-form\n    [task]=task\n    [action]=action\n    (send)=closeDialog()\n    ></app-demo-form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/demo/demo-edit/demo-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DemoEditComponent = (function () {
    function DemoEditComponent(task, dialogRef) {
        this.task = task;
        this.dialogRef = dialogRef;
        this.action = 'Edit';
    }
    DemoEditComponent.prototype.ngOnInit = function () {
    };
    DemoEditComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    DemoEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-demo-edit',
            template: __webpack_require__("../../../../../src/app/components/demo/demo-edit/demo-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/demo/demo-edit/demo-edit.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]])
    ], DemoEditComponent);
    return DemoEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/demo/demo-form/demo-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/demo/demo-form/demo-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=ngForm (submit)=sendTask()>\n\n<div layout=column layout-padding>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Title\"\n      name=title [(ngModel)]='task.title' #title='ngModel'\n      required maxlength=40>\n      <mat-error *ngIf=title.errors [hidden]=!title.errors.required align=right>\n        A title is required.\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Description\"\n      name=description [(ngModel)]='task.description' #description='ngModel'\n      rows=4 maxlength=500></textarea>\n  </mat-form-field>\n\n  <div mat-dialog-actions align=center>\n  <button mat-raised-button *ngIf=!form.valid disabled>{{action}}</button>\n  <button type=submit mat-raised-button color=accent *ngIf=form.valid>{{action}}</button>\n  </div>\n\n</div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/demo/demo-form/demo-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoFormComponent = (function () {
    function DemoFormComponent() {
        this.send = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
    }
    DemoFormComponent.prototype.ngOnInit = function () {
    };
    DemoFormComponent.prototype.sendTask = function () {
        this.send.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DemoFormComponent.prototype, "task", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DemoFormComponent.prototype, "action", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DemoFormComponent.prototype, "send", void 0);
    DemoFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-demo-form',
            template: __webpack_require__("../../../../../src/app/components/demo/demo-form/demo-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/demo/demo-form/demo-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoFormComponent);
    return DemoFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/demo/demo-sidebar/demo-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.info {\n    padding: 0px 15px;\n    font-size: 14px;\n}\n\n.add {\n    position: absolute;\n    top: 10px;\n    opacity: 0.5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/demo/demo-sidebar/demo-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item>\n    <h4 matLine><strong>Welcome to Dozo!</strong></h4>\n  </mat-list-item>\n  <span>\n    <div class=info>\n      This is a demo version of Dozo. In this demo, you can add items to the board, edit them, and drag them from one lane to the next.\n    <br><br>\n      Feel free to sign up for an account using the bottom athe top-right corner of the page. By signing up, you'll have access to additional features.\n    <br><br>\n      To get started, click the first button below to clear the board, and then click the next button to add an item.\n    <br><br>\n    </div>\n  </span>\n  <mat-divider></mat-divider>\n</mat-list>\n\n<mat-nav-list>\n  <mat-list-item (click)=clearBoard()>\n    <mat-icon matListIcon>clear_all</mat-icon>\n    <span matLine>Clear Board</span>\n  </mat-list-item>\n  <mat-list-item (click)=addDemoItem()>\n    <svg matListIcon class=add matListIcon xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" viewBox=\"0 0 511.99998 639.999975\" version=\"1.1\" x=\"0px\" y=\"0px\"><g transform=\"translate(-88.749289,-131.31133)\"><path style=\"opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:11.95540333;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1\" d=\"M 256 0 A 256 256 0 0 0 0 256 A 256 256 0 0 0 256 512 A 256 256 0 0 0 512 256 A 256 256 0 0 0 256 0 z M 256 96.427734 C 259.45322 96.427734 267.23241 99.208879 267.23242 102.66211 L 267.23242 244.76758 L 409.33789 244.76758 C 412.79076 244.71898 415.57227 252.54677 415.57227 256 C 415.57227 259.45322 412.79111 267.23242 409.33789 267.23242 L 267.23242 267.23242 L 267.23242 409.33789 C 267.28033 412.79078 259.45322 415.57227 256 415.57227 C 252.54677 415.57227 244.76758 412.79111 244.76758 409.33789 L 244.76758 267.23242 L 102.66211 267.23242 C 99.209229 267.28102 96.427734 259.45322 96.427734 256 C 96.427734 252.54677 99.208879 244.76758 102.66211 244.76758 L 244.76758 244.76758 L 244.76758 102.66211 C 244.71966 99.209209 252.54677 96.427734 256 96.427734 z \" transform=\"translate(88.749289,131.31133)\"/></g></svg>\n    <mat-icon matListIcon></mat-icon>\n    <span matLine>Add an Item</span>\n  </mat-list-item>\n</mat-nav-list>"

/***/ }),

/***/ "../../../../../src/app/components/demo/demo-sidebar/demo-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_add_demo_add_component__ = __webpack_require__("../../../../../src/app/components/demo/demo-add/demo-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DemoSidebarComponent = (function () {
    function DemoSidebarComponent(_ps, _dialog, _router) {
        this._ps = _ps;
        this._dialog = _dialog;
        this._router = _router;
    }
    DemoSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.project$ = this._ps.project$
            .subscribe(function (project) { return _this.project = project; });
    };
    DemoSidebarComponent.prototype.clearBoard = function () {
        this.project = {
            grid: [
                { title: "To Do", tasks: [] },
                { title: "Planning", tasks: [] },
                { title: "Doing", tasks: [] },
                { title: "Done", tasks: [] }
            ]
        };
        this._ps.updateDemo(this.project);
    };
    DemoSidebarComponent.prototype.addDemoItem = function () {
        this._dialog.open(__WEBPACK_IMPORTED_MODULE_3__demo_add_demo_add_component__["a" /* DemoAddComponent */], {
            width: '400px',
            data: this.project
        });
    };
    DemoSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-demo-sidebar',
            template: __webpack_require__("../../../../../src/app/components/demo/demo-sidebar/demo-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/demo/demo-sidebar/demo-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], DemoSidebarComponent);
    return DemoSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/demo/demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.lane {\n    width: 100%;\n    height: 100%;\n    padding: 10px 10px;\n}\n\n.card-header {\n    width: 100%;\n    height: 70px;\n}\n\n.card-heading {\n    font-size: 24px;\n    padding-top: 22px;\n    color: white;\n}\n\n.header-menu {\n    font-size: 18px;\n    cursor: pointer;\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n    color: white;\n}\n\n.mat-card-button {\n    box-sizing: border-box;\n    margin-top: 15px;\n    width: 100%;\n    height: 100%;\n    padding: 5px 7px;\n    cursor: pointer;\n}\n\n.card-title {\n    display: block;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 20px;\n}\n\n.card-subtitle {\n    color: gray;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 16px;\n}\n\n.handle {\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n    cursor: -webkit-grab;\n    cursor: grab;\n    width: 16px;\n    height: 16px;\n}\n\n.handle:active {\n    cursor: -webkit-grabbing;\n    cursor: grabbing;\n}\n\n.drag {\n    padding-bottom: 150px;\n    height: 100%;\n    width: 100%;\n    margin: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=project layout=row layout-margin>\n\n    <div class=lane *ngFor=\"let lane of project.grid, let i = index\" id={{i}}>\n        <mat-card class=\"bgAccent card-header\">\n            <mat-card-title class=\"card-heading text-truncate\" align=center>\n                {{lane.title}}\n            </mat-card-title>\n        </mat-card>\n        <div class=drag [dragula]='\"lane\"'>\n            <mat-card class=mat-card-button *ngFor=\"let task of lane.tasks, let j = index\" id={{j}} (click)=openEditTask(task)>\n                <mat-card-content class=mat-card-button>\n                <span class=\"card-title\">{{task.title}}</span>\n                <span class=\"card-subtitle\">{{task.description}}</span>\n                </mat-card-content>\n                <svg class=handle\n                xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 96 120\" enable-background=\"new 0 0 96 96\" xml:space=\"preserve\"><polygon points=\"86.953,46.952 74.944,34.944 73.462,36.426 83.99,46.952 49.048,46.952 49.048,12.01 59.574,22.538 61.056,21.056   49.048,9.046 48,8 46.952,9.046 34.944,21.056 36.426,22.538 46.952,12.01 46.952,46.952 12.01,46.952 22.538,36.426 21.056,34.944   9.046,46.952 8,48 9.046,49.048 21.056,61.056 22.538,59.574 12.01,49.048 46.952,49.048 46.952,83.99 36.426,73.462 34.944,74.944   46.952,86.953 48,88 49.048,86.953 61.056,74.944 59.574,73.462 49.048,83.99 49.048,49.048 83.99,49.048 73.462,59.574   74.944,61.056 86.953,49.048 88,48 \"/>\n                </svg>\n            </mat-card>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_demo_edit_demo_edit_component__ = __webpack_require__("../../../../../src/app/components/demo/demo-edit/demo-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DemoComponent = (function () {
    function DemoComponent(_ps, _ds, _dialog, _router) {
        this._ps = _ps;
        this._ds = _ds;
        this._dialog = _dialog;
        this._router = _router;
        this.project = {
            grid: [
                {
                    title: "What is Dozo?",
                    tasks: [
                        { title: "A Project Visualization Tool",
                            description: "Dozo uses simple Kanban boards for seamless project workflows. Use it to plan, assign, and track each step throughout the course of a project. I used it to track a lot of my progress in building this app!" },
                        { title: "Disclaimer!",
                            description: "Dozo's simple interface that likely won't meet every need of most Scrum / Agile practicioners and teams. But it makes for a good introduction!" }
                    ]
                },
                { title: "Credits", tasks: [
                        { title: "The MEAN Stack",
                            description: "Dozo is built in full-stack JavaScript via the MEAN stack, which runs on Node.js and uses the Express web framework, MongoDB (via Mongoose ODM), and Angular on the front-end." },
                        { title: "UX / UI",
                            description: "Dozo's UX/UI interface uses design elements provided by Angular Material & Teradata Covalent UI." },
                        { title: "Dragula / ng2-Dragula",
                            description: "Much thanks to Nicolas Bevacqua and Valor Software for their easy-to-integrate drag-and-drop projects." }
                    ] },
                { title: "About Me", tasks: [
                        { title: "Full-Stack Developer",
                            description: "I'm Brian, a full stack web developer in the Washington D.C. area. I'm able to work with various web frameworks in JavaScript, Python, and Java, and I'm always looking to learn more!" },
                        { title: "Looking for a developer?",
                            description: "If you like what you see and would like to collaborate with me, I'd love to hear from you! Please use the links at the bottom-right corner of the page to view my LinkedIn and GitHub, or to send me an email." }
                    ] },
                { title: "Thanks!",
                    tasks: [
                        { title: "Special Thanks to Coding Dojo",
                            description: "I owe a ton to my mentors and friends at Coding Dojo D.C. Thank you for accelerating my growth as a developer during the course of my residency with you guys!" },
                        { title: "Thanks for stopping by!",
                            description: "Click the button at the top-right corner of the page to use Dozo's more advanced features!" }
                    ]
                }
            ]
        };
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ps.updateDemo(this.project);
        this.project$ = this._ps.project$
            .subscribe(function (project) { return _this.project = project; });
    };
    DemoComponent.prototype.openEditTask = function (task) {
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_2__demo_demo_edit_demo_edit_component__["a" /* DemoEditComponent */], {
            width: '400px',
            data: task
        });
    };
    DemoComponent.prototype.ngOnDestroy = function () {
    };
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__("../../../../../src/app/components/demo/demo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/demo/demo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.lane {\n    width: 100%;\n    height: 100%;\n    padding: 10px 10px;\n}\n\n.card-header {\n    width: 100%;\n    height: 70px;\n}\n\n.card-heading {\n    font-size: 24px;\n    padding-top: 22px;\n    color: white;\n}\n\n.header-menu {\n    font-size: 18px;\n    cursor: pointer;\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n    color: white;\n}\n\n.mat-card-button {\n    box-sizing: border-box;\n    margin-top: 15px;\n    width: 100%;\n    height: 100%;\n    padding: 5px 7px;\n}\n\n.card-title {\n    display: block;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 20px;\n}\n\n.card-subtitle {\n    color: gray;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 16px;\n}\n\n.card-blank-button {\n    text-align: center;\n    height: 77px;\n    line-height: 75px;\n    width: 100%;\n    font-size: 18px;\n}\n\n.card-blank {\n    background-color: rgba(255, 255, 255, 0.5);\n    border: 0.5px dashed;\n    margin-top: 15px;\n    margin-left: 7px;\n    width: 100%;\n    height: 100%;\n}\n\n.lane-blank {\n    background-color: rgba(255, 255, 255, 0.5);\n    border: 0.5px dashed;\n    height: 71px;\n    margin-top: 4px;\n}\n\n.lane-blank-button {\n    width: 100%;\n    height: 100%;\n    font-size: 20px;\n    padding-top: 17px;\n}\n\n.input-blank {\n    background-color: rgba(255, 255, 255, 0);\n    border: 0px;\n    font-size: 24px;\n    text-align: center;\n    width: 100%;\n    padding-top: 20px;\n}\n\n.input-blank:focus {\n    outline-width: 0;\n}\n\n.handle {\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n    cursor: -webkit-grab;\n    cursor: grab;\n    width: 16px;\n    height: 16px;\n}\n\n.handle:active {\n    cursor: -webkit-grabbing;\n    cursor: grabbing;\n}\n\n.card-delete {\n    position: absolute;\n    right: -10px;\n    top: -10px;\n    font-size: 28px;\n    cursor: pointer;\n    z-index: 1;\n    opacity: 0;\n    transition: all ease 0.4s;\n}\n\n.card-delete:hover {\n    opacity: 100;\n}\n\n.drag {\n    padding-bottom: 150px;\n    height: 100%;\n    width: 100%;\n    margin: auto;\n}\n\n.edit {\n    position: absolute;\n    bottom: 7px;\n    right: 20px;\n    cursor: pointer;\n    opacity: 0.5;\n    font-size: 16px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"project\" layout=row layout-margin>\n\n    <div *ngFor=\"let lane of project.grid, let i = index\" class=lane>\n        <mat-menu #headerMenu=\"matMenu\">\n            <button mat-menu-item\n            (click)=openEditLane(lane)>Rename</button>\n            <button *ngIf=\"project.grid && lane !== project.grid[0]\" mat-menu-item (click)=openDeleteLane(lane)>Delete</button>\n        </mat-menu>\n        <mat-card class=\"bgAccent card-header\">\n            <mat-icon class=header-menu [matMenuTriggerFor]=\"headerMenu\" *ngIf=\"project.creator && user._id === project.creator._id\">\n                arrow_drop_down\n            </mat-icon> \n            <mat-card-title class=\"card-heading text-truncate\" align=center>\n                {{lane.title}}\n            </mat-card-title>\n        </mat-card>\n        <div class=drag [dragula]='\"lane\"' id=\"{{lane._id}}-{{i}}\">\n            <mat-card class=mat-card-button *ngFor=\"let task of lane.tasks, let j = index\" id=\"{{task._id}}-{{j}}\">\n                <mat-icon\n                    *ngIf=\"task.creator && (user._id === task.creator._id)\n                        || project.creator && (user._id === project.creator._id)\"\n                    class=card-delete\n                    (click)=\"openDeleteTask(task._id)\">\n                    cancel\n                </mat-icon>\n                <mat-card-content class=mat-card-button>\n                <ng-template #space>&nbsp;</ng-template>\n                <span class=\"card-title\">{{task.title}}</span>\n                <span class=\"card-subtitle\">{{task.description}}</span>\n                </mat-card-content>\n                <span *ngIf=\"(task.contributor && user._id === task.contributor._id)\n                          || (task.creator && user._id === task.creator._id)\n                          || (project.creator && user._id === project.creator._id); else space\">\n                    <svg class=handle xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 96 120\" enable-background=\"new 0 0 96 96\" xml:space=\"preserve\"><polygon points=\"86.953,46.952 74.944,34.944 73.462,36.426 83.99,46.952 49.048,46.952 49.048,12.01 59.574,22.538 61.056,21.056   49.048,9.046 48,8 46.952,9.046 34.944,21.056 36.426,22.538 46.952,12.01 46.952,46.952 12.01,46.952 22.538,36.426 21.056,34.944   9.046,46.952 8,48 9.046,49.048 21.056,61.056 22.538,59.574 12.01,49.048 46.952,49.048 46.952,83.99 36.426,73.462 34.944,74.944   46.952,86.953 48,88 49.048,86.953 61.056,74.944 59.574,73.462 49.048,83.99 49.048,49.048 83.99,49.048 73.462,59.574   74.944,61.056 86.953,49.048 88,48 \"/>\n                    </svg>\n                    <mat-icon class=edit (click)=openEditTask(task)>edit</mat-icon>\n                </span>\n            </mat-card>\n        </div>\n    </div>\n\n    <div *ngIf=\"project.creator && project.creator._id === user._id && project.grid?.length < 5\" class=lane>\n\n        <div class=\"lane-blank\">\n            <a *ngIf=!newLane.status mat-button (click)=\"addLane()\" class=lane-blank-button>\n                New Lane <mat-icon>playlist_add</mat-icon>\n            </a>\n            <input class=input-blank *ngIf=newLane.status\n                name=laneTitle [(ngModel)]=newLane.title #laneTitle='ngModel'\n                (keyup.enter)=createNewLane() maxlength=14 matTooltip=\"{{newLaneTip}}\"\n                (blur)=\"newLane = {status: false, title: ''}\" placeholder=\"(Add Title)\">\n        </div>\n\n    </div>\n\n    <div *ngIf=\"project.grid?.length < 2\" class=lane>&nbsp;</div>\n    <div *ngIf=\"project.grid?.length < 3\" class=lane>&nbsp;</div>\n    <div *ngIf=\"project.grid?.length < 4\" class=lane>&nbsp;</div>\n\n</div>\n\n<!-- <td-json-formatter [data]=\"project\" [levelsOpen]=\"1\"></td-json-formatter> -->"

/***/ }),

/***/ "../../../../../src/app/components/main/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_edit_task_edit_task_component__ = __webpack_require__("../../../../../src/app/components/task/edit-task/edit-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function DashboardComponent(_ps, _us, _ts, _ds, _route, _dialog, _tdDialog) {
        this._ps = _ps;
        this._us = _us;
        this._ts = _ts;
        this._ds = _ds;
        this._route = _route;
        this._dialog = _dialog;
        this._tdDialog = _tdDialog;
        this.user = false;
        this.project = false;
        this.newLane = { status: false, title: '' };
        this.newLaneTip = "Press RETURN to save";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rtParam$ = this._route.paramMap.subscribe(function (params) {
            if (params.get('id'))
                _this._ps.updateProject(params.get('id'));
            else
                _this._ps.getAgenda();
        });
        this.getUser();
        this.getProject();
        this.setDragulaOptions();
        this.drops$ = this._ds.drop
            .subscribe(function (value) { return _this.onDrop(value.slice(1)); });
    };
    DashboardComponent.prototype.getUser = function () {
        var _this = this;
        this._us.updateStatus();
        this.user$ = this._us.status$
            .subscribe(function (user) { return _this.user = user; });
    };
    DashboardComponent.prototype.getProject = function () {
        var _this = this;
        this.project$ = this._ps.project$
            .subscribe(function (project) {
            if (project['grid']) {
                _this.project = project;
            }
        });
    };
    DashboardComponent.prototype.getGrid = function () {
        var grid_ids = [];
        this.project['grid'].forEach(function (lane) {
            grid_ids.push(Array.from(lane.tasks, function (task) { return task['_id']; }));
        });
        return grid_ids;
    };
    DashboardComponent.prototype.setDragulaOptions = function () {
        var bag = this._ds.find('lane');
        if (bag !== undefined)
            this._ds.destroy('lane');
        this._ds.setOptions('lane', {
            moves: function (el, container, handle) {
                return handle.classList.contains('handle');
            }
        });
    };
    DashboardComponent.prototype.onDrop = function (args) {
        /*
          let [task,
            newLane,
            oldLane,
            next] = args;
        */
        var _this = this;
        var _a = args[2].id.split('-'), lane = _a[0], i1 = _a[1];
        var _b = args[1].id.split('-'), newLane = _b[0], i2 = _b[1];
        var _c = args[0].id.split('-'), task = _c[0], j1 = _c[1];
        var n, j2;
        if (args[3])
            _d = args[3].id.split('-'), n = _d[0], j2 = _d[1];
        var grid_ids = this.getGrid();
        grid_ids[i1].splice(j1, 1);
        if (j2)
            grid_ids[i2].splice(j2, 0, task);
        else
            grid_ids[i2].push(task);
        this._ts.updateLaneTasks(grid_ids[i1], lane)
            .subscribe(function (result) {
            _this._ts.updateLaneTasks(grid_ids[i2], newLane)
                .subscribe(function (result) {
                _this._ps.updateProject(_this.project._id);
            });
        });
        var _d;
    };
    DashboardComponent.prototype.getLaneTaskIDs = function (lane) {
        return Array.from(lane.tasks, function (item) { return item['_id']; });
    };
    DashboardComponent.prototype.addLane = function () {
        var _this = this;
        setTimeout(function () { _this.newLane.status = true; }, 300);
    };
    DashboardComponent.prototype.createNewLane = function () {
        var _this = this;
        if (this.newLane.title.length < 3) {
            this.newLaneTip = "Titles must be at least 2 characters.";
        }
        var lane = { title: this.newLane.title };
        this._ts.createLane(lane, this.project._id)
            .subscribe(function (result) {
            if (result['status']) {
                if (result) {
                    _this._ps.updateProject(_this.project._id);
                }
                _this.newLane = { status: false, title: '' };
                _this.newLaneTip = "Press RETURN to save";
            }
        });
    };
    DashboardComponent.prototype.openEditLane = function (lane) {
        var _this = this;
        this._tdDialog.openPrompt({
            message: '',
            title: "Rename \"" + lane.title + "\" Lane",
            value: "" + lane.title,
            acceptButton: 'Edit',
        }).afterClosed().subscribe(function (title) {
            if (title.length > 2) {
                lane.title = title;
                _this._ts.updateLane(lane)
                    .subscribe(function (result) { return; });
            }
        });
    };
    DashboardComponent.prototype.openDeleteLane = function (lane) {
        var _this = this;
        var message;
        var notEmpty = false;
        if (lane.tasks.length > 0) {
            message = "Are you sure you want to delete this \"" + lane.title + "\" lane?\n        All its items will be moved to the \"" + this.project.grid[0].title + "\" lane.";
            notEmpty = true;
        }
        else {
            message = "Are you sure you want to delete this \"" + lane.title + "\" lane?";
        }
        this._tdDialog.openConfirm({
            message: message,
            title: "Delete \"" + lane.title + "\" Lane",
            acceptButton: 'Delete',
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                if (notEmpty) {
                    var tasksIDs = _this.getLaneTaskIDs(lane);
                    tasksIDs = _this.getGrid()[0].concat(tasksIDs);
                    _this._ts.updateLaneTasks(tasksIDs, _this.project.grid[0]._id)
                        .subscribe(function (result) {
                        _this._ts.removeLane(lane._id).subscribe(function (lane) {
                            _this._ps.updateProject(_this.project._id);
                        });
                    });
                }
                else {
                    _this._ts.removeLane(lane._id).subscribe(function (lane) {
                        _this._ps.updateProject(_this.project._id);
                    });
                }
            }
        });
    };
    DashboardComponent.prototype.openEditTask = function (task) {
        var _this = this;
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_2__task_edit_task_edit_task_component__["a" /* EditTaskComponent */], {
            width: '50%',
            data: {
                task: task,
                userID: this.user._id,
                ownerID: this.project['creator']._id,
                contributors: this.project['contributors']
            }
        });
        dialogRef.beforeClose().subscribe(function (result) {
            if (result) {
                _this._ps.updateProject(_this.project._id);
            }
        });
    };
    DashboardComponent.prototype.openDeleteTask = function (taskID) {
        var _this = this;
        this._tdDialog.openConfirm({
            message: 'Are you sure you want to delete this task?',
            title: 'Delete Task',
            acceptButton: 'Delete',
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                _this._ts.removeTask(taskID)
                    .subscribe(function (lane) {
                    _this._ps.updateProject(_this.project._id);
                });
            }
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.user$.unsubscribe();
        this.project$.unsubscribe();
        this.drops$.unsubscribe();
        this.rtParam$.unsubscribe();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/main/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__["DragulaService"],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_7__covalent_core__["d" /* TdDialogService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/main-nav/main-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.handle {\n    cursor: -webkit-grab;\n    cursor: grab;\n}\n\n.handle:active {\n    cursor: -webkit-grabbing;\n    cursor: grabbing;\n}\n\nspan {\n    cursor: pointer;\n}\n\n.card-blank {\n    width: 200px;\n    margin: 15px 15px;\n}\n\n.card-blank-button {\n    text-align: center;\n    margin: auto;\n    height: 69px;\n    line-height: 70px;\n    width: 100%;\n    font-size: 18px;\n}\n\n.edit {\n    position: absolute;\n    right: -10px;\n    top: 20px;\n    font-size: 30px;\n    z-index: 1;\n    opacity: 0;\n    transition: all ease 0.4s;\n    cursor: pointer;\n}\n\n.edit:hover {\n    opacity: 100;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main-nav/main-nav.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-nav-list>\n  <h3 matSubheader>My Projects</h3>\n  <span *ngFor=\"let project of projects\">\n  <mat-list-item (click)=goToProject(project)>\n    <mat-icon [ngClass]=\"{txtAccent: project._id === current}\" matListIcon>\n      assignment\n    </mat-icon>\n    <span [ngClass]=\"{txtAccent: project._id === current}\" matLine>\n      {{project.title}}\n    </span>\n    <span\n      [ngClass]=\"{txtAccent: project._id === current}\" matLine>\n      <span *ngIf=project.targetDate>\n        Goal: {{project.targetDate|date:'mediumDate'}}\n      </span>\n    </span>\n  </mat-list-item>\n  </span>\n</mat-nav-list>\n\n<span>\n<mat-nav-list>\n  <mat-list-item (click)=openNewProject()>\n    <mat-icon>playlist_add</mat-icon>\n    <span matLine>Create a New Project</span>\n    <span matLine></span>\n  </mat-list-item>\n</mat-nav-list>\n</span>"

/***/ }),

/***/ "../../../../../src/app/components/main/main-nav/main-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_new_project_new_project_component__ = __webpack_require__("../../../../../src/app/components/project/new-project/new-project.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainNavComponent = (function () {
    function MainNavComponent(_ps, _ds, _dialog, _router) {
        this._ps = _ps;
        this._ds = _ds;
        this._dialog = _dialog;
        this._router = _router;
    }
    MainNavComponent.prototype.ngOnInit = function () {
        this._ps.getUserProjects();
        this.listProjects();
    };
    MainNavComponent.prototype.listProjects = function () {
        var _this = this;
        this._ps.projects$
            .subscribe(function (user) { return _this.projects = user['projects']; });
    };
    MainNavComponent.prototype.openNewProject = function () {
        var _this = this;
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_5__project_new_project_new_project_component__["a" /* NewProjectComponent */], {
            width: '600px',
            data: this.user
        });
        dialogRef.beforeClose().subscribe(function (result) {
            if (result)
                _this._ps.getUserProjects();
        });
    };
    MainNavComponent.prototype.goToProject = function (project) {
        this.current = project._id;
        if (project._id === this.user['agenda']) {
            this._ps.getAgenda();
            this._router.navigate(['dashboard']);
        }
        else {
            this._ps.updateProject(project._id);
            this._router.navigate(['projects', project._id]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MainNavComponent.prototype, "user", void 0);
    MainNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__("../../../../../src/app/components/main/main-nav/main-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/main-nav/main-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/main-nav2/main-nav2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main-nav2/main-nav2.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-nav-list>\n  <h3 matSubheader>All Projects Available</h3>\n  <span *ngFor=\"let project of projects\">\n    <mat-list-item (click)=openJoinProject(project)>\n      <mat-icon matListIcon>assignment</mat-icon>\n      <span matLine>{{project.title}}</span>\n    </mat-list-item>\n  </span>\n  <mat-list-item *ngIf=\"projects?.length === 0\">\n    <mat-icon matListIcon>cancel</mat-icon>\n    <span matLine>No Projects Available</span>\n  </mat-list-item>\n</mat-nav-list>\n\n<!-- <td-json-formatter [data]=\"projects\" [levelsOpen]=\"1\"></td-json-formatter> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/main/main-nav2/main-nav2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainNav2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_join_project_join_project_component__ = __webpack_require__("../../../../../src/app/components/project/join-project/join-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainNav2Component = (function () {
    function MainNav2Component(_ps, dialog) {
        this._ps = _ps;
        this.dialog = dialog;
    }
    MainNav2Component.prototype.ngOnInit = function () {
        var _this = this;
        this._ps.list();
        this.projects$ = this._ps.team_projects$
            .subscribe(function (projects) { return _this.projects = projects; });
    };
    MainNav2Component.prototype.openJoinProject = function (project) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__project_join_project_join_project_component__["a" /* JoinProjectComponent */], {
            width: '500px',
            data: project,
            autoFocus: false
        });
    };
    MainNav2Component.prototype.ngOnDestroy = function () {
        this.projects$.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MainNav2Component.prototype, "user", void 0);
    MainNav2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-nav2',
            template: __webpack_require__("../../../../../src/app/components/main/main-nav2/main-nav2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/main-nav2/main-nav2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */]])
    ], MainNav2Component);
    return MainNav2Component;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.footer {\n    font-size: 14px;\n    padding: 10px;\n}\n\n.email {\n    background-color: black;\n    font-size: 28px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<td-layout>\n\n  <!-- other attrs: logo=\"assets:logo\" -->\n  <td-navigation-drawer *ngIf=user.status flex sidenavTitle=\"Project Dashboard\" name=\"{{user.name}}\" email=\"{{user.email}}\" color=primary>\n    <app-main-nav [user]=user></app-main-nav>\n    <div td-navigation-drawer-menu>\n      <app-main-nav2 [user]=user></app-main-nav2>\n    </div>\n  </td-navigation-drawer>\n\n  <!-- For individual project pages, have a stationary list on the side? -->\n  <!-- other attrs: logo=\"assets:logo\" -->\n  <td-layout-nav-list opened=true mode=side sidenavWidth=225px toolbarTitle=\"Dozo\" navigationRoute=\"/\">\n    <button *ngIf=user.status mat-icon-button td-menu-button tdLayoutToggle matTooltip=\"Dashboard\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <div td-sidenav-content>\n      <app-demo-sidebar *ngIf=\"this._router.isActive('', true)\"></app-demo-sidebar>\n      <app-sidebar *ngIf=\"!this._router.isActive('', true)\" [user]=user></app-sidebar>\n    </div>\n\n    <div td-toolbar-content layout=\"row\" layout-align=\"center center\" flex>\n      <a *ngIf=user.status mat-icon-button tdLayoutNavListToggle>\n        <mat-icon matTooltip=\"Show / Hide\">chrome_reader_mode</mat-icon>\n      </a>\n      <span flex></span>\n      <span *ngIf=!user.status>\n        <a mat-icon-button matTooltip=\"Log In\" (click)=openLogIn()><mat-icon>exit_to_app</mat-icon></a>\n        <a mat-icon-button matTooltip=\"Sign Up\" (click)=openSignUp()><mat-icon>description</mat-icon></a>\n      </span>\n      <span *ngIf=user.status>\n        <a mat-icon-button matTooltip=\"My Account\" (click)=openAccount()><mat-icon>account_box</mat-icon></a>\n        <a mat-icon-button matTooltip=\"Log Out\" (click)=logout()><mat-icon>exit_to_app</mat-icon></a>\n      </span>\n    </div>\n    <router-outlet></router-outlet>\n    <td-layout-footer color=\"primary\">\n      <div layout=row>\n        <div flex class=footer>Copyright © 2017</div>\n        <div flex align=right class=footer>\n          <a href=\"https://www.linkedin.com/in/bcmendoza/\" target=\"_blank\"><img src=\"assets/linkedin.png\"></a> &nbsp;\n          <a href=\"https://github.com/bcmendoza\" target=\"_blank\"><img src=\"assets/github.png\"></a> &nbsp;\n          <a href=\"mailto:bcmendoza@gmail.com\"><mat-icon class=email>email</mat-icon></a>\n        </div>\n      </div>\n    </td-layout-footer>\n  </td-layout-nav-list>\n\n</td-layout>"

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_register_register_component__ = __webpack_require__("../../../../../src/app/components/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_login_login_component__ = __webpack_require__("../../../../../src/app/components/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_account_account_component__ = __webpack_require__("../../../../../src/app/components/auth/account/account.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainComponent = (function () {
    function MainComponent(dialog, snackbar, _us, _router) {
        this.dialog = dialog;
        this.snackbar = snackbar;
        this._us = _us;
        this._router = _router;
        this.user = { status: false };
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getStatus();
    };
    MainComponent.prototype.getStatus = function () {
        var _this = this;
        this._us.updateStatus();
        this._us.status$
            .subscribe(function (result) {
            if (!result['status'])
                _this._router.navigate(['']);
            _this.user = result;
        });
    };
    MainComponent.prototype.openSignUp = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__auth_register_register_component__["a" /* RegisterComponent */], { width: '350px' });
    };
    MainComponent.prototype.openLogIn = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__auth_login_login_component__["a" /* LoginComponent */], { width: '350px' });
    };
    MainComponent.prototype.openAccount = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__auth_account_account_component__["a" /* AccountComponent */], {
            width: '600px',
            data: this.user,
            autoFocus: false
        });
    };
    MainComponent.prototype.logout = function () {
        var _this = this;
        this._us.logout()
            .subscribe(function (result) {
            _this.snackbar.open(result['msg'], 'x', { duration: 3000 });
            _this._router.navigate(['']);
        });
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/components/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/main.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.info {\n    padding: 0px 15px;\n    font-size: 14px;\n}\n\n.item {\n    font-size: 16px;\n}\n\n.add {\n    position: absolute;\n    top: 10px;\n    opacity: 0.5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <td-json-formatter [data]=\"project\" [levelsOpen]=\"1\"></td-json-formatter> -->\n\n<span *ngIf=\"user.status && project\">\n\n<mat-list>\n    <mat-list-item>\n        <h4 matLine><strong>{{project.title}}</strong></h4>\n    </mat-list-item>\n    <span *ngIf=\"user.agenda !== project._id\">\n        <div class=info>{{project.description}}</div>\n        <mat-list-item>\n            <p matLine></p>\n            <p matLine>Start: {{project.startDate|date:'mediumDate'}}</p>\n            <p matLine>Goal: {{project.targetDate|date:'mediumDate'}}</p>\n            <p matLine>Created By: {{project.creator.name}}</p>\n        </mat-list-item>\n    </span>\n    <mat-divider></mat-divider>\n</mat-list>\n\n<mat-nav-list>\n    <mat-list-item *ngIf=\"user.agenda === project._id\" (click)=renameAgenda()>\n        <mat-icon matListIcon>edit</mat-icon>\n        <span matLine>Edit Title</span>\n    </mat-list-item>\n    <mat-list-item (click)=openNewTask()>\n        <svg matListIcon class=add matListIcon xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" viewBox=\"0 0 511.99998 639.999975\" version=\"1.1\" x=\"0px\" y=\"0px\"><g transform=\"translate(-88.749289,-131.31133)\"><path style=\"opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:11.95540333;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1\" d=\"M 256 0 A 256 256 0 0 0 0 256 A 256 256 0 0 0 256 512 A 256 256 0 0 0 512 256 A 256 256 0 0 0 256 0 z M 256 96.427734 C 259.45322 96.427734 267.23241 99.208879 267.23242 102.66211 L 267.23242 244.76758 L 409.33789 244.76758 C 412.79076 244.71898 415.57227 252.54677 415.57227 256 C 415.57227 259.45322 412.79111 267.23242 409.33789 267.23242 L 267.23242 267.23242 L 267.23242 409.33789 C 267.28033 412.79078 259.45322 415.57227 256 415.57227 C 252.54677 415.57227 244.76758 412.79111 244.76758 409.33789 L 244.76758 267.23242 L 102.66211 267.23242 C 99.209229 267.28102 96.427734 259.45322 96.427734 256 C 96.427734 252.54677 99.208879 244.76758 102.66211 244.76758 L 244.76758 244.76758 L 244.76758 102.66211 C 244.71966 99.209209 252.54677 96.427734 256 96.427734 z \" transform=\"translate(88.749289,131.31133)\"/></g></svg>\n        <mat-icon matListIcon></mat-icon>\n        <span matLine>Add an Item</span>\n    </mat-list-item>\n    <span *ngIf=\"project.creator && project.creator._id === user._id && user.agenda !== project._id\">\n        <mat-list-item (click)=openEditProject()>\n            <mat-icon matListIcon>edit</mat-icon>\n            <span matLine>Edit Project</span>\n        </mat-list-item>\n        <mat-list-item (click)=deleteProject()>\n            <mat-icon matListIcon>delete</mat-icon>\n            <span matLine>Delete Project</span>\n        </mat-list-item>\n    </span>\n    <mat-list-item *ngIf=\"project.contributors?.length > 1\">\n        <mat-slide-toggle (click)=filterTasks()>\n        <span matLine class=item> &nbsp; &nbsp; My Tasks Only</span>\n        </mat-slide-toggle>\n    </mat-list-item>\n</mat-nav-list>\n\n</span>"

/***/ }),

/***/ "../../../../../src/app/components/main/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_edit_project_edit_project_component__ = __webpack_require__("../../../../../src/app/components/project/edit-project/edit-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_new_task_new_task_component__ = __webpack_require__("../../../../../src/app/components/task/new-task/new-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SidebarComponent = (function () {
    function SidebarComponent(_ps, _dialog, _router, _tdDialog) {
        this._ps = _ps;
        this._dialog = _dialog;
        this._router = _router;
        this._tdDialog = _tdDialog;
        this.filter = false; // only show assigned items
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.project$ = this._ps.project$
            .subscribe(function (project) { return _this.project = project; });
    };
    SidebarComponent.prototype.filterTasks = function () {
        if (!this.filter) {
            this.filter = true;
            this._ps.filterProject(this.project._id);
        }
        else {
            this.filter = false;
            this._ps.updateProject(this.project._id);
        }
    };
    SidebarComponent.prototype.openNewTask = function () {
        var _this = this;
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_5__task_new_task_new_task_component__["a" /* NewTaskComponent */], {
            width: '50%',
            data: {
                lane_id: this.project.grid[0]._id,
                contributors: this.project['contributors'],
                userID: this.user._id,
                ownerID: this.project['creator']._id
            }
        });
        dialogRef.beforeClose().subscribe(function (result) {
            if (result) {
                _this._ps.updateProject(_this.project._id);
            }
        });
    };
    SidebarComponent.prototype.openEditProject = function () {
        var _this = this;
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_4__project_edit_project_edit_project_component__["a" /* EditProjectComponent */], {
            width: '500px',
            data: this.project
        });
        dialogRef.beforeClose().subscribe(function (result) {
            if (result) {
                _this._ps.updateProject(_this.project._id);
            }
        });
    };
    SidebarComponent.prototype.deleteProject = function () {
        var _this = this;
        this._tdDialog.openConfirm({
            message: "Are you sure you want to delete \"" + this.project.title + "\"?",
            title: "Delete \"" + this.project.title + "\" Lane",
            acceptButton: 'Delete',
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                _this._ps.remove(_this.project._id)
                    .subscribe(function (result) {
                    console.log(result);
                    _this._router.navigate(['dashboard']);
                    _this._ps.getUserProjects();
                });
            }
        });
    };
    SidebarComponent.prototype.renameAgenda = function () {
        var _this = this;
        this._tdDialog.openPrompt({
            message: '',
            title: "Rename \"" + this.project.title + "\"",
            value: "" + this.project.title,
            acceptButton: 'Rename',
        }).afterClosed().subscribe(function (title) {
            if (title && title.length > 2) {
                _this.project.title = title;
                _this._ps.update(_this.project)
                    .subscribe(function (result) { return _this._ps.getUserProjects(); });
            }
        });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.project$.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "user", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/main/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__covalent_core__["d" /* TdDialogService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project/edit-project/edit-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/edit-project/edit-project.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div layout=column layout-margin layout-padding>\n\n  <h2 mat-dialog-title align=center>Edit Project</h2>\n\n  <project-form\n  [project]=project\n  [action]=action\n  (send)=editProject($event)>\n  </project-form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/edit-project/edit-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EditProjectComponent = (function () {
    function EditProjectComponent(dialog, snackbar, _ps, project) {
        this.dialog = dialog;
        this.snackbar = snackbar;
        this._ps = _ps;
        this.project = project;
        this.action = 'Update Project';
    }
    EditProjectComponent.prototype.ngOnInit = function () {
    };
    EditProjectComponent.prototype.editProject = function (project) {
        var _this = this;
        this._ps.update(project)
            .subscribe(function (result) {
            _this.snackbar.open(result['msg'], 'x', { duration: 3000 });
            if (result['status']) {
                _this.dialog.close(true);
            }
        });
    };
    EditProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-project',
            template: __webpack_require__("../../../../../src/app/components/project/edit-project/edit-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project/edit-project/edit-project.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */], Object])
    ], EditProjectComponent);
    return EditProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project/join-project/join-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/join-project/join-project.component.html":
/***/ (function(module, exports) {

module.exports = "\n<span *ngIf=\"project\">\n\n<form (submit)=joinProject()>\n\n<div mat-dialog-content>\n\n    <h2 mat-dialog-title align=center>Join \"{{project.title}}\"</h2>\n\n    <mat-form-field>\n      <input [type]=\"hidePW ? 'password' : 'text'\"\n        matInput placeholder=\"Password\"\n        name=pw [(ngModel)]='attempt.pw' #pw='ngModel'>\n      <mat-icon matSuffix (click)=\"hidePW = !hidePW\">\n        {{hidePW ? 'visibility' : 'visibility_off'}}\n      </mat-icon>\n        <mat-hint align=end>Enter password to gain access.</mat-hint>\n    </mat-form-field>\n\n</div>\n\n<div mat-dialog-actions align=center>\n  <button type=submit mat-raised-button color=accent>Join</button>\n</div>\n\n</form>\n\n</span>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/project/join-project/join-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var JoinProjectComponent = (function () {
    function JoinProjectComponent(dialogRef, _ps, project, snackbar) {
        this.dialogRef = dialogRef;
        this._ps = _ps;
        this.project = project;
        this.snackbar = snackbar;
        this.hidePW = true;
        this.attempt = { pw: '' };
    }
    JoinProjectComponent.prototype.joinProject = function () {
        var _this = this;
        if (this.attempt.pw !== this.project['pw'])
            this.snackbar.open('Password invalid! Access denied.', 'x', { duration: 3000 });
        else {
            this._ps.join(this.project['_id'])
                .subscribe(function (result) {
                _this.snackbar.open(result['msg'], 'x', { duration: 3000 });
                _this.dialogRef.close();
                _this._ps.getUserProjects();
            });
        }
    };
    JoinProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-join-project',
            template: __webpack_require__("../../../../../src/app/components/project/join-project/join-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project/join-project/join-project.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */]])
    ], JoinProjectComponent);
    return JoinProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project/new-project/new-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/new-project/new-project.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div layout=column layout-margin layout-padding>\n\n    <h2 mat-dialog-title align=center>Create a New Project</h2>\n\n    <project-form\n    [project]=project\n    [action]=action\n    (send)=createProject($event)>\n    </project-form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/new-project/new-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewProjectComponent = (function () {
    function NewProjectComponent(dialog, snackbar, _ps) {
        this.dialog = dialog;
        this.snackbar = snackbar;
        this._ps = _ps;
        this.project = { title: '', description: '', notes: '', startDate: '', targetDate: '' };
        this.action = 'Create Project';
    }
    NewProjectComponent.prototype.ngOnInit = function () {
    };
    NewProjectComponent.prototype.createProject = function (project) {
        var _this = this;
        this._ps.create(project)
            .subscribe(function (result) {
            _this.snackbar.open(result['msg'], 'x', { duration: 3000 });
            if (result['status']) {
                if (project['type'] === 'Team')
                    _this._ps.list();
                _this.dialog.close(true);
            }
        });
    };
    NewProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-project',
            template: __webpack_require__("../../../../../src/app/components/project/new-project/new-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project/new-project/new-project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */]])
    ], NewProjectComponent);
    return NewProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project/project-form/project-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.headers-align .mat-expansion-panel-header-title, \n.headers-align .mat-expansion-panel-header-description {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n}\n\n.headers-align .mat-expansion-panel-header-description {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/project-form/project-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=ngForm (submit)=sendProject()>\n\n<div mat-dialog-content>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Project Title\"\n        name=title [(ngModel)]='project.title' #title='ngModel'\n        required minlength=5>\n        <mat-hint align=end>Minimum 5 characters</mat-hint>\n        <mat-error align=right *ngIf=title.errors [hidden]=!title.errors.minlength>\n          Must be 5 characters minimum.\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <textarea matInput placeholder=\"Description\"\n        name=description [(ngModel)]='project.description' #description='ngModel'\n        required minlength=10></textarea>\n        <mat-hint align=end>Minimum 10 characters</mat-hint>\n        <mat-error align=right *ngIf=description.errors [hidden]=!description.errors.minlength>\n          Must be 10 characters minimum.\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"action === 'Create Project' || (project.startDate !== '' && minDate < project.startDate)\">\n      <input matInput [matDatepicker]=\"startDate\" placeholder=\"Start Date\"\n        name=startDate [(ngModel)]='project.startDate'\n        #startDate='ngModel' required [min]=\"minDate\">\n      <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n      <mat-datepicker #startDate touchUi=true></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"targetDate\" placeholder=\"Target Date\"\n        name=targetDate [(ngModel)]='project.targetDate'\n        #targetDate='ngModel' required [min]=\"minDate\">\n      <mat-datepicker-toggle matSuffix [for]=\"targetDate\"></mat-datepicker-toggle>\n      <mat-datepicker #targetDate touchUi=true [startAt]=project.start_date></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"action === 'Create Project'\">\n      <mat-select name=type [(ngModel)]='project.type' #type='ngModel' placeholder=\"Project Type\" required>\n        <mat-option value=\"Individual\">Individual</mat-option>\n        <mat-option value=\"Team\">Team</mat-option>\n      </mat-select>\n      <mat-error align=right *ngIf=type.errors [hidden]=!type.errors.required>\n        Project type must be specified.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"project.type === 'Team'\">\n      <input [type]=\"hidePW ? 'password' : 'text'\"\n        matInput placeholder=\"Password\"\n        name=pw [(ngModel)]='project.pw' #pw='ngModel'\n        required minlength=5>\n      <mat-icon matSuffix (click)=\"hidePW = !hidePW\">\n        {{hidePW ? 'visibility' : 'visibility_off'}}\n      </mat-icon>\n        <mat-hint align=end>Minimum 5 characters</mat-hint>\n        <mat-error align=right *ngIf=pw.errors [hidden]=!pw.errors.minlength>\n          Must be 5 characters minimum.\n        </mat-error>\n    </mat-form-field>\n\n</div>\n\n<div mat-dialog-actions align=center>\n<button mat-raised-button *ngIf=!form.valid disabled>{{action}}</button>\n<button type=submit mat-raised-button color=accent *ngIf=form.valid>{{action}}</button>\n</div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/project/project-form/project-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectFormComponent = (function () {
    function ProjectFormComponent(_ps) {
        this._ps = _ps;
        this.send = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        this.minDate = new Date();
        this.hidePW = true;
    }
    ProjectFormComponent.prototype.ngOnInit = function () {
    };
    ProjectFormComponent.prototype.sendProject = function () {
        this.send.emit(this.project);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectFormComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectFormComponent.prototype, "action", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectFormComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectFormComponent.prototype, "send", void 0);
    ProjectFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-form',
            template: __webpack_require__("../../../../../src/app/components/project/project-form/project-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project/project-form/project-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]])
    ], ProjectFormComponent);
    return ProjectFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/task/edit-task/edit-task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/task/edit-task/edit-task.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2 mat-dialog-title align=center>Update Item</h2>\n\n<task-form\n[ownerID]=ownerID\n[userID]=userID\n[task]=task\n[action]=action\n[contributors]=contributors\n(send)=updateTask($event)\n></task-form>"

/***/ }),

/***/ "../../../../../src/app/components/task/edit-task/edit-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditTaskComponent = (function () {
    function EditTaskComponent(dialog, snackbar, _ts, data) {
        this.dialog = dialog;
        this.snackbar = snackbar;
        this._ts = _ts;
        this.data = data;
        this.action = 'Save Changes';
    }
    EditTaskComponent.prototype.ngOnInit = function () {
        this.task = this.data.task;
        this.userID = this.data.userID;
        this.ownerID = this.data.ownerID;
        this.contributors = this.data.contributors;
    };
    EditTaskComponent.prototype.updateTask = function (task) {
        var _this = this;
        this._ts.updateTask(task)
            .subscribe(function (result) {
            _this.snackbar.open(result['msg'], 'x', { duration: 3000 });
            if (result['status']) {
                _this.dialog.close(true);
            }
        });
    };
    EditTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-task',
            template: __webpack_require__("../../../../../src/app/components/task/edit-task/edit-task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/task/edit-task/edit-task.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */], Object])
    ], EditTaskComponent);
    return EditTaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/task/new-task/new-task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/task/new-task/new-task.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div layout=column>\n\n    <h2 mat-dialog-title align=center>New Item</h2>\n\n    <task-form\n    [ownerID]=ownerID\n    [userID]=userID\n    [task]=task\n    [action]=action\n    [contributors]=contributors\n    (send)=createTask($event)\n    ></task-form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/task/new-task/new-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NewTaskComponent = (function () {
    function NewTaskComponent(dialog, snackbar, _ts, data) {
        this.dialog = dialog;
        this.snackbar = snackbar;
        this._ts = _ts;
        this.data = data;
        this.task = { title: '', description: '', details: '', contributor: '' };
        this.action = 'Add Item';
    }
    NewTaskComponent.prototype.ngOnInit = function () {
        this.lane_id = this.data.lane_id;
        this.contributors = this.data.contributors;
        this.ownerID = this.data.ownerID;
        this.userID = this.data.userID;
    };
    NewTaskComponent.prototype.createTask = function (task) {
        var _this = this;
        if (this.ownerID !== this.userID)
            this.task.contributor = this.userID;
        this._ts.createTask(task, this.lane_id)
            .subscribe(function (result) {
            _this.snackbar.open(result['msg'], 'x', { duration: 3000 });
            if (result['status']) {
                _this.dialog.close(true);
            }
        });
    };
    NewTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-task',
            template: __webpack_require__("../../../../../src/app/components/task/new-task/new-task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/task/new-task/new-task.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */], Object])
    ], NewTaskComponent);
    return NewTaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/task/task-form/task-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/task/task-form/task-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=ngForm (submit)=sendTask()>\n\n<div layout=row layout-padding>\n\n  <div flex=35>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Title\"\n        name=title [(ngModel)]='task.title' #title='ngModel'\n        required maxlength=40>\n        <mat-error *ngIf=title.errors [hidden]=!title.errors.required align=right>\n          A title is required.\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <textarea matInput placeholder=\"Short Description\"\n        name=description [(ngModel)]='task.description' #description='ngModel'\n        rows=4 maxlength=100></textarea>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"ownerID === userID\">\n      <mat-select *ngIf=task.contributor name=contributor\n        [(ngModel)]='task.contributor' #contributor='ngModel' placeholder=\"Assigned to {{task.contributor.name}}\">\n        <mat-option *ngFor=\"let contributor of contributors\" value=\"{{contributor._id}}\">{{contributor.name}}</mat-option>\n      </mat-select>\n      <mat-select *ngIf=!task.contributor name=contributor\n        [(ngModel)]='task.contributor' #contributor='ngModel' placeholder=\"Assign to\">\n        <mat-option *ngFor=\"let contributor of contributors\" value=\"{{contributor._id}}\">{{contributor.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n  </div>\n\n  <div flex=65>\n    <mat-form-field>\n      <textarea matInput placeholder=\"Details\" name=details\n        [(ngModel)]='task.details' #details='ngModel' rows=12></textarea>\n    </mat-form-field>\n  </div>\n\n</div>\n\n<div mat-dialog-actions align=center>\n<button mat-raised-button *ngIf=!form.valid disabled>{{action}}</button>\n<button type=submit mat-raised-button color=accent *ngIf=form.valid>{{action}}</button>\n</div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/task/task-form/task-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskFormComponent = (function () {
    function TaskFormComponent(_ts, _us) {
        this._ts = _ts;
        this._us = _us;
        this.send = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
    }
    TaskFormComponent.prototype.sendTask = function () {
        this.send.emit(this.task);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TaskFormComponent.prototype, "ownerID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TaskFormComponent.prototype, "userID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TaskFormComponent.prototype, "task", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TaskFormComponent.prototype, "action", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TaskFormComponent.prototype, "contributors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TaskFormComponent.prototype, "send", void 0);
    TaskFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'task-form',
            template: __webpack_require__("../../../../../src/app/components/task/task-form/task-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/task/task-form/task-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], TaskFormComponent);
    return TaskFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Rxjs__ = __webpack_require__("../../../../Rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = (function () {
    function ProjectService(_http) {
        this._http = _http;
        this.project$ = new __WEBPACK_IMPORTED_MODULE_2_Rxjs__["Subject"]();
        this.projects$ = new __WEBPACK_IMPORTED_MODULE_2_Rxjs__["Subject"]();
        this.team_projects$ = new __WEBPACK_IMPORTED_MODULE_2_Rxjs__["Subject"]();
    }
    ProjectService.prototype.updateDemo = function (demo) {
        this.project$.next(demo);
    };
    ProjectService.prototype.updateProject = function (id) {
        var _this = this;
        this._http.get("/api/projects/" + id)
            .subscribe(function (project) {
            _this.project$.next(project);
        });
    };
    ProjectService.prototype.getAgenda = function () {
        var _this = this;
        this._http.get('/api/projects/agenda')
            .subscribe(function (agenda) {
            _this.project$.next(agenda);
        });
    };
    ProjectService.prototype.filterProject = function (id) {
        var _this = this;
        this._http.get("/api/projects/" + id + "/filter")
            .subscribe(function (project) {
            _this.project$.next(project);
        });
    };
    ProjectService.prototype.getUserProjects = function () {
        var _this = this;
        this._http.get('/api/projects')
            .subscribe(function (projects) {
            _this.projects$.next(projects);
        });
    };
    ProjectService.prototype.list = function () {
        var _this = this;
        this._http.get('api/projects/list')
            .subscribe(function (projects) {
            _this.team_projects$.next(projects);
        });
    };
    ProjectService.prototype.create = function (project) {
        return this._http.post('/api/projects', project);
    };
    ProjectService.prototype.updateUserProjects = function (project_ids) {
        return this._http.put('/api/projects', project_ids);
    };
    ProjectService.prototype.update = function (project) {
        return this._http.post("/api/projects/" + project._id, project);
    };
    ProjectService.prototype.join = function (id) {
        return this._http.put("/api/projects/" + id, null);
    };
    ProjectService.prototype.remove = function (id) {
        return this._http.delete("/api/projects/" + id);
    };
    ProjectService.prototype.ngOnDestroy = function () {
        this.project$.unsubscribe();
        this.projects$.unsubscribe();
        this.team_projects$.unsubscribe();
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "../../../../../src/app/services/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskService = (function () {
    function TaskService(_http) {
        this._http = _http;
    }
    TaskService.prototype.createTask = function (task, id) {
        return this._http.post("/api/projects/" + id + "/build", task);
    };
    TaskService.prototype.createLane = function (lane, id) {
        return this._http.put("/api/projects/" + id + "/build", lane);
    };
    TaskService.prototype.updateLane = function (lane) {
        return this._http.post("/api/lanes/" + lane._id, lane);
    };
    TaskService.prototype.updateLaneTasks = function (lane, id) {
        return this._http.put("/api/lanes/" + id, lane);
    };
    TaskService.prototype.removeLane = function (id) {
        return this._http.delete("/api/lanes/" + id);
    };
    TaskService.prototype.updateTask = function (task) {
        return this._http.post("/api/tasks/" + task._id, task);
    };
    TaskService.prototype.removeTask = function (id) {
        return this._http.delete("/api/tasks/" + id);
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Rxjs__ = __webpack_require__("../../../../Rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        // if not logged in, status$ = false
        // if logged in, status$ = user object
        this.status$ = new __WEBPACK_IMPORTED_MODULE_2_Rxjs__["Subject"]();
    }
    /*
      Account routes
    */
    UserService.prototype.updateStatus = function () {
        var _this = this;
        this._http.get('/api/account')
            .subscribe(function (result) {
            _this.status$.next(result);
        });
    };
    UserService.prototype.updateUser = function (user) {
        return this._http.post('/api/account', user);
    };
    UserService.prototype.updatePW = function (pw) {
        return this._http.put('/api/account', pw);
    };
    UserService.prototype.unregister = function (pw) {
        return this._http.delete('/api/account', pw);
    };
    /*
      Auth routes
    */
    UserService.prototype.register = function (user) {
        return this._http.post('/api/auth', user);
    };
    UserService.prototype.login = function (user) {
        return this._http.put('/api/auth', user);
    };
    UserService.prototype.logout = function () {
        this.status$.next({ status: false });
        return this._http.delete('/api/auth');
    };
    UserService.prototype.checkEmail = function (email) {
        var _this = this;
        return email
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(function (email) { return _this.check(email); });
    };
    UserService.prototype.check = function (email) {
        if (email === '') {
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(true);
        }
        return this._http.get("/api/auth/" + email);
    };
    /*
      User routes
    */
    UserService.prototype.list = function () {
        return this._http.get('/api/users');
    };
    UserService.prototype.lookup = function (id) {
        return this._http.get("/api/users/" + id);
    };
    UserService.prototype.promote = function (id) {
        return this._http.post("/api/m/users/" + id, null);
    };
    UserService.prototype.ngOnDestroy = function () {
        this.status$.unsubscribe();
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/ui/covalent.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CovalentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CovalentModule = (function () {
    function CovalentModule() {
    }
    CovalentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__covalent_core__["c" /* CovalentLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_1__covalent_core__["b" /* CovalentJsonFormatterModule */],
                __WEBPACK_IMPORTED_MODULE_1__covalent_core__["a" /* CovalentDialogsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__covalent_core__["c" /* CovalentLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_1__covalent_core__["b" /* CovalentJsonFormatterModule */],
                __WEBPACK_IMPORTED_MODULE_1__covalent_core__["a" /* CovalentDialogsModule */]
            ]
        })
    ], CovalentModule);
    return CovalentModule;
}());



/***/ }),

/***/ "../../../../../src/app/ui/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatExpansionModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatExpansionModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map