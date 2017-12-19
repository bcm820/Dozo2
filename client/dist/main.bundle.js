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

/***/ "../../../../../src/app/_models/question.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question(text, support) {
        if (text === void 0) { text = ''; }
        if (support === void 0) { support = ''; }
        this.text = text;
        this.support = support;
    }
    return Question;
}());



/***/ }),

/***/ "../../../../../src/app/_services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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



var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.user$ = new __WEBPACK_IMPORTED_MODULE_2_Rxjs__["Subject"]();
    }
    AuthService.prototype.login = function (user) { return this._http.post('/api/auth/login', user); };
    AuthService.prototype.logout = function () { return this._http.post('/api/auth/logout', true); };
    AuthService.prototype.updateUser = function () {
        var _this = this;
        this._http.get('/api/auth/confirm')
            .subscribe(function (result) { return _this.user$.next(result); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/qa.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QAService; });
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


var QAService = (function () {
    function QAService(_http) {
        this._http = _http;
    }
    QAService.prototype.list = function () {
        return this._http.get('/api/questions');
    };
    QAService.prototype.create = function (question) {
        return this._http.post("/api/questions", question);
    };
    QAService.prototype.show = function (id) {
        return this._http.get("/api/questions/" + id);
    };
    QAService.prototype.answer = function (id, answer) {
        return this._http.post("/api/questions/" + id, answer);
    };
    QAService.prototype.like = function (id) {
        return this._http.post("/api/questions/a/" + id, 'hi');
    };
    QAService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QAService);
    return QAService;
}());



/***/ }),

/***/ "../../../../../src/app/_tools/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(function (singleItem) { return singleItem[field].toLowerCase().includes(value.toLowerCase()); });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'filter' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/answer/answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav>\n    <button class=\"btn btn-default\" (click)=\"home()\">Home</button>\n    <button class=\"btn btn-default\" (click)=\"question()\">Back to Question</button>\n</nav>\n\n<h3>Add Answer to:</h3>\n<h2>\"{{q.text}}\"</h2>\n<h4>{{q.support}}</h4>\n\n<form #form=\"ngForm\">\n\n<div class=col-sm-8>\n  <div class=form-group>\n    <textarea required minlength=5\n    name=text [(ngModel)]=answer.text #text='ngModel'\n    class=form-control placeholder=\"Answer\"></textarea>\n    <span *ngIf=\"text.errors && text.dirty\">\n    <span [hidden]=!text.errors.required>Required!</span>\n    <span [hidden]=!text.errors.minlength>Minlength is 5!</span>\n    </span>\n  </div>\n  <div class=form-group>\n    <textarea name=support [(ngModel)]=answer.support #support='ngModel'\n    class=form-control placeholder=\"Supporting details (optional)\"></textarea>\n  </div>\n  <div class=form-group>\n    <button (click)=cancel() class=\"btn btn-default\">Cancel</button>\n    <button (click)=submit() [disabled]=\"!form.valid\" class=\"btn btn-default\">Submit</button>\n  </div>\n\n  <div *ngIf=\"flashes\" class=\"form-group text-center\">\n    <div class=col-sm-6>\n      <div class=\"alert alert-danger\">\n        <span *ngFor=\"let flash of flashes\">{{flash}}<br></span>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_qa_service__ = __webpack_require__("../../../../../src/app/_services/qa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnswerComponent = (function () {
    function AnswerComponent(_rt, _router, _as, _qa) {
        this._rt = _rt;
        this._router = _router;
        this._as = _as;
        this._qa = _qa;
        this.q = { text: '', support: '' };
        this.answer = { text: '', support: '', author: '' };
    }
    AnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._rt.paramMap.subscribe(function (param) {
            _this.qid = param.get('id');
            _this._qa.show(_this.qid).subscribe(function (q) {
                _this.q = q;
            });
        });
        this._as.updateUser();
        this._as.user$.subscribe(function (user) {
            _this.user = user;
        });
    };
    AnswerComponent.prototype.home = function () {
        this._router.navigate(['']);
    };
    AnswerComponent.prototype.cancel = function () {
        this.answer = { text: '', support: '', author: '' };
    };
    AnswerComponent.prototype.question = function () {
        this._router.navigate(['question', this.qid]);
    };
    AnswerComponent.prototype.submit = function () {
        var _this = this;
        this.answer.author = this.user.name;
        this._qa.answer(this.qid, this.answer)
            .subscribe(function (result) {
            if (Array.isArray(result)) {
                _this.flashes = result;
            }
            else {
                _this._router.navigate(['']);
            }
        });
    };
    AnswerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-answer',
            template: __webpack_require__("../../../../../src/app/answer/answer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/answer/answer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_qa_service__["a" /* QAService */]])
    ], AnswerComponent);
    return AnswerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questions_questions_component__ = __webpack_require__("../../../../../src/app/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_create_component__ = __webpack_require__("../../../../../src/app/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_show_component__ = __webpack_require__("../../../../../src/app/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__answer_answer_component__ = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__questions_questions_component__["a" /* QuestionsComponent */] },
    { path: 'new_question', component: __WEBPACK_IMPORTED_MODULE_3__create_create_component__["a" /* CreateComponent */] },
    { path: 'question/:id', component: __WEBPACK_IMPORTED_MODULE_4__show_show_component__["a" /* ShowComponent */] },
    { path: 'question/:id/new_answer', component: __WEBPACK_IMPORTED_MODULE_5__answer_answer_component__["a" /* AnswerComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.valid {color:green}\n.error {color:red}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<span *ngIf=\"!user\">\n\n<h2>Q&A</h2>\n<form (submit)=\"login()\" #form=\"ngForm\" class=form-horizontal>\n\n  <div class=form-group>\n    <div class=\"col-sm-4 text-right\"><label class=\"control-label\">Name:</label></div>\n    <div class=col-sm-4>\n      <input class=form-control type=text name=name required\n      [(ngModel)]='guest.name' #name='ngModel'/>\n    </div>\n    <div class=\"col-sm-4 form-control-static\">\n      <span *ngIf=\"name.errors && name.dirty\">\n        <span class=\"error glyphicon glyphicon-remove\" [hidden]=\"!name.errors\"></span>\n        <span class=error [hidden]=\"!name.errors.required\">Name required</span>\n      </span>\n      <span *ngIf=\"name.valid\" class=\"glyphicon glyphicon-ok valid\"></span>\n    </div>\n  </div>\n\n  <div class=form-group>\n    <div class=col-sm-4></div>\n    <div class=col-sm-4>\n      <input *ngIf=\"!form.valid\" type=submit value=Enter class=\"btn btn-block btn-danger disabled\" [disabled]=\"!form.valid\">\n      <input *ngIf=\"form.valid\" type=submit value=Enter class=\"btn btn-block btn-primary\">\n    </div>\n  </div>\n\n  <div *ngIf=\"flashes\" class=\"form-group text-center\">\n    <div class=col-sm-3></div>\n    <div class=col-sm-6>\n      <div class=\"alert alert-danger\">\n        <span *ngFor=\"let flash of flashes\">{{flash}}<br></span>\n      </div>\n    </div>\n    <div class=col-sm-3></div>\n  </div>\n\n</form>\n\n</span>\n\n<span *ngIf=\"user\">\n<div class=row>\n  <div class=text-right>\n    <a href=# (click)=logout()>Logout</a>\n  </div>\n  <div class=col-sm-12>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n</span>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
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
    function AppComponent(_as, _router) {
        this._as = _as;
        this._router = _router;
        // auth
        this.guest = { name: '' };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flashes = false;
        this._as.updateUser();
        this._as.user$.subscribe(function (user) {
            _this.user = user;
        });
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        this._as.login(this.guest)
            .subscribe(function (res) {
            if (Array.isArray(res)) {
                _this.flashes = res;
            }
            else {
                _this._as.updateUser();
                console.log('User logged in');
            }
        });
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this._as.logout()
            .subscribe(function (res) {
            _this._as.updateUser();
            console.log('User logged out');
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_filter_pipe__ = __webpack_require__("../../../../../src/app/_tools/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_qa_service__ = __webpack_require__("../../../../../src/app/_services/qa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__questions_questions_component__ = __webpack_require__("../../../../../src/app/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__create_create_component__ = __webpack_require__("../../../../../src/app/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__show_show_component__ = __webpack_require__("../../../../../src/app/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__answer_answer_component__ = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tools_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_9__questions_questions_component__["a" /* QuestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_11__show_show_component__["a" /* ShowComponent */],
                __WEBPACK_IMPORTED_MODULE_12__answer_answer_component__["a" /* AnswerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__services_qa_service__["a" /* QAService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['']\">Home</a>\n\n<form #form=\"ngForm\">\n\n<div class=col-sm-8>\n  <h3>New Question</h3>\n  <div class=form-group>\n    <textarea required minlength=10\n    name=text [(ngModel)]=question.text #text='ngModel'\n    class=form-control placeholder=\"Question\"></textarea>\n    <span *ngIf=\"text.errors && text.dirty\">\n    <span [hidden]=!text.errors.required>Required!</span>\n    <span [hidden]=!text.errors.minlength>Minlength is 10!</span>\n    </span>\n  </div>\n  <div class=form-group>\n    <textarea name=support [(ngModel)]=question.support #support='ngModel'\n    class=form-control placeholder=\"Description (Optional)\"></textarea>\n  </div>\n  <div class=form-group>\n    <button (click)=cancel() class=\"btn btn-default\">Cancel</button>\n    <button (click)=create() [disabled]=\"!form.valid\" class=\"btn btn-default\">Submit</button>\n  </div>\n\n  <div *ngIf=\"flashes\" class=\"form-group text-center\">\n    <div class=col-sm-6>\n      <div class=\"alert alert-danger\">\n        <span *ngFor=\"let flash of flashes\">{{flash}}<br></span>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_qa_service__ = __webpack_require__("../../../../../src/app/_services/qa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_question_model__ = __webpack_require__("../../../../../src/app/_models/question.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateComponent = (function () {
    function CreateComponent(_as, _qa, _router) {
        this._as = _as;
        this._qa = _qa;
        this._router = _router;
        this.question = new __WEBPACK_IMPORTED_MODULE_4__models_question_model__["a" /* Question */]();
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.cancel = function () {
        this.question = new __WEBPACK_IMPORTED_MODULE_4__models_question_model__["a" /* Question */]();
    };
    CreateComponent.prototype.create = function () {
        var _this = this;
        this._qa.create(this.question)
            .subscribe(function (result) {
            if (Array.isArray(result)) {
                _this.flashes = result;
            }
            else {
                _this._router.navigate(['']);
            }
        });
    };
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create',
            template: __webpack_require__("../../../../../src/app/create/create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_qa_service__["a" /* QAService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/questions/questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2>Hi {{user.name}}!</h2>\n\n<a [routerLink]=\"['new_question']\">Add a Question</a>\n<hr>\n<form>\n<div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" name=search\n    placeholder=\"Type to search...\" [(ngModel)]=\"search\">\n</div>\n</form>\n<hr>\n\n\n\n\n<div class=row>\n    <div class=col-sm-6>Question</div>\n    <div class=col-sm-3>Answers</div>\n    <div class=col-sm-3>Actions</div>\n</div>\n<span *ngIf=\"search === ''\">\n<div class=row *ngFor=\"let q of questions\">\n    <div class=col-sm-6>{{q.text}}</div>\n    <div class=col-sm-3>{{q.count}}</div>\n    <div class=col-sm-3>\n        <button class=\"btn btn-default\" (click)=show(q._id)>Show</button>\n        <button class=\"btn btn-default\" (click)=answer(q._id)>Answer</button>\n    </div>\n</div>\n</span>\n<span *ngIf=\"search !== ''\">\n<div class=row *ngFor=\"let q of questions | filter:'text' : search\">\n    <div class=col-sm-6>{{q.text}}</div>\n    <div class=col-sm-3>{{q.count}}</div>\n    <div class=col-sm-3>\n        <button class=\"btn btn-default\" (click)=show(q._id)>Show</button>\n        <button class=\"btn btn-default\" (click)=answer(q._id)>Answer</button>\n    </div>\n</div> \n</span>"

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_qa_service__ = __webpack_require__("../../../../../src/app/_services/qa.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionsComponent = (function () {
    function QuestionsComponent(_as, _qa, _router) {
        this._as = _as;
        this._qa = _qa;
        this._router = _router;
        this.user = { name: '' };
        this.search = '';
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listQuestions();
        this._as.updateUser();
        this._as.user$.subscribe(function (user) {
            _this.user = user;
        });
    };
    QuestionsComponent.prototype.listQuestions = function () {
        var _this = this;
        this._qa.list().subscribe(function (list) {
            _this.questions = list;
        });
    };
    QuestionsComponent.prototype.show = function (id) {
        this._router.navigate(['question', id]);
    };
    QuestionsComponent.prototype.answer = function (id) {
        this._router.navigate(['question', id, 'new_answer']);
    };
    QuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-questions',
            template: __webpack_require__("../../../../../src/app/questions/questions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questions/questions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_qa_service__["a" /* QAService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/show/show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav>\n    <button class=\"btn btn-default\" (click)=\"home()\">Home</button>\n    <button class=\"btn btn-default\" (click)=\"answer(question._id)\">Answer This</button>\n</nav>\n\n<h2>{{question.text}}</h2>\n<h4>{{question.support}}</h4>\n\n<span *ngIf=\"question.answers.length > 0\">\n<span *ngFor=\"let a of question.answers\">\n<div class=row>\n<div class=col-sm-6>\n    {{a.author}}<br>\n    {{a.text}}<br>\n    {{a.support}}\n</div>\n<div class=col-sm-3>\n    {{a.likes}} likes\n</div>\n<div class=col-sm-3>\n    <button class=\"btn btn-default\" (click)=like(a._id)>Like!</button>\n</div>\n</div>\n</span>\n</span>"

/***/ }),

/***/ "../../../../../src/app/show/show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_qa_service__ = __webpack_require__("../../../../../src/app/_services/qa.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowComponent = (function () {
    function ShowComponent(_rt, _router, _qa) {
        this._rt = _rt;
        this._router = _router;
        this._qa = _qa;
        this.question = { text: '', support: '', answers: [] };
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._rt.paramMap.subscribe(function (param) {
            var id = param.get('id');
            _this._qa.show(id).subscribe(function (q) {
                _this.question = q;
            });
        });
    };
    ShowComponent.prototype.home = function () {
        this._router.navigate(['']);
    };
    ShowComponent.prototype.answer = function (id) {
        this._router.navigate(['question', id, 'new_answer']);
    };
    ShowComponent.prototype.like = function (id) {
        var _this = this;
        this._qa.like(id).subscribe(function (q) {
            _this.question = q;
            _this.question.answers = _this.compare(_this.question.answers, 'likes');
        });
    };
    ShowComponent.prototype.compare = function (array, field) {
        array.sort(function (a, b) {
            if (a[field] < b[field]) {
                return 1;
            }
            else if (a[field] > b[field]) {
                return -1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    ShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-show',
            template: __webpack_require__("../../../../../src/app/show/show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/show/show.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_qa_service__["a" /* QAService */]])
    ], ShowComponent);
    return ShowComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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