(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kevin/Documents/GitHubTanvi/hownusng/hownus/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4JTs":
/*!********************************************************!*\
  !*** ./src/app/bonus-detail/bonus-detail.component.ts ***!
  \********************************************************/
/*! exports provided: BonusDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusDetailComponent", function() { return BonusDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class BonusDetailComponent {
    constructor(router, mLocation) {
        var _a;
        this.router = router;
        this.mLocation = mLocation;
        const state = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state;
        this.bonusItem = state;
        if (!this.bonusItem) {
            this.mLocation.back();
        }
    }
    ngOnInit() {
        console.log(this.bonusItem);
    }
    onExchangeClick() {
    }
}
BonusDetailComponent.ɵfac = function BonusDetailComponent_Factory(t) { return new (t || BonusDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
BonusDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BonusDetailComponent, selectors: [["app-bonus-detail"]], decls: 31, vars: 5, consts: [[1, "back"], [3, "routerLink"], ["src", "./assets/image/icon/back.png", "width", "20", "alt", "", 1, "back-icon"], ["width", "100%", "alt", "", 3, "src"], [1, "bg-orange"], [1, "text-center"], [1, "text-primary", "mb-0", 2, "font-size", "20px"], [1, "text-gray", "mb-0", 2, "color", "#686868"], [1, "product-title"], [1, "px-3"], [1, "sub-title"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-outline-primary", "my-3", "w-100", 3, "click"]], template: function BonusDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\uFF08\u76EE\u524D\u64C1\u6709100\u7A4D\u5206\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u5546\u54C1\u4ECB\u7D39/\u7A4D\u5206\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u5546\u54C1\u5361\u9762\u503C\u4E4B\u91D1\u984D\u7121\u4F7F\u7528\u671F\u9650\uFF0C\u53EF\u5206\u6B21\u4F7F\u7528\u81F3\u9762\u984D\u514C\u63DB\u5B8C\u7562\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u5546\u54C1\u5361\u9650\u4F7F\u7528\u65BC\u53F0\u7063\u5730\u5340\u958B\u7ACB\u7D71\u4E00\u8D85\u5546(\u80A1)\u767C\u7968\u4E4B7-ELEVEN\u9580\u5E02\u514C\u63DB\u5546\u54C1\u53CA\u67E5\u8A62\u9918\u984D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u53EF\u652F\u4ED8\u958B\u7ACB\u7D71\u4E00\u767C\u7968\u4E4B\u5546\u54C1/\u670D\u52D9\uFF1B\u975E\u958B\u7ACB\u7D71\u4E00\u8D85\u5546(\u80A1)\u767C\u7968\u4E4B7-ELEVEN\u9580\u5E02(\u7570\u696D\u9580\u5E02\u53CA\u95DC\u4FC2\u4F01\u696D)\u6055\u7121\u6CD5\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u6CE8\u610F\u4E8B\u9805");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u53E6\u56E0\u6CD5\u4EE4\u9650\u5236\uFF0C\u5546\u54C1\u5361\u76EE\u524D\u66AB\u7121\u6CD5\u652F\u4ED8\u4EE3\u6536\u3001\u4EE3\u552E\u7B49\u975E\u958B\u7ACB\u7D71\u4E00\u8D85\u5546(\u80A1)\u767C\u7968\u4E4B\u6D88\u8CBB\u53CA\u4F9D\u64DA\u83F8\u5BB3\u9632\u5236\u6CD5\u7B2C9\u689D\u7B2C3\u6B3E\u898F\u5B9A\uFF0C\u6055\u65BC\u672C\u516C\u53F8\u9580\u5E02\u7121\u6CD5\u4F7F\u7528\u5546\u54C1\u5361\u8CFC\u8CB7\u83F8\u54C1\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BonusDetailComponent_Template_button_click_29_listener() { return ctx.onExchangeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u78BA\u5B9A\u514C\u63DB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bonusItem.title, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bonusItem.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u4F7F\u7528", ctx.bonusItem.score, "\u7A4D\u5206");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bonusItem.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n.back[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  position: relative;\n}\n.back[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.bg-orange[_ngcontent-%COMP%] {\n  background-color: #FFF8F2;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.product-title[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n}\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #C16E00;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JvbnVzLWRldGFpbC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2N1c3RvbS1zZXR0aW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGFBQUE7QUFxQkEsWUFBQTtBQWNBLFlBQUE7QUFDQSxtQkFBQTtBQWlCQSxpQkFBQTtBQUVBLG9CQUFBO0FBbUJBLGtCQUFBO0FBRUEscUJBQUE7QUFvQkEsbUJBQUE7QUFhQSxpQkFBQTtBQUVBLHNCQUFBO0FBS0Esb0JBQUE7QURsSEE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVlKO0FBVkk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFZUjtBQVJBO0VBQ0kseUJDUG9CO0VEUXBCLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVdKO0FBUkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFXSjtBQVJBO0VBQ0ksZUFBQTtFQUNBLGNDckJjO0VEc0JkLGlCQUFBO0FBV0oiLCJmaWxlIjoiYm9udXMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2N1c3RvbS1zZXR0aW5nLnNjc3NcIjtcblxuLmJhY2sge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5iYWNrLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDRweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG59XG5cbi5iZy1vcmFuZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtdGl0bGUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiLyoqIOWfuuekjuWKn+iDveiJsuioreWumiAqL1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWRhcms6IHJnYmEoMCwgMCwgMCwgMC44KTtcbi8vIOa3uueBsFxuJGNvbG9yLWxpZ2h0LWdyYXk6ICNCREJEQkQ7XG5cbi8vIOS4u+imgeiJslxuJHByaW1hcnktY29sb3I6ICNGRjdDMDI7XG4vLyDkuLvopoHoibLororlvaJcbiRwcmltYXJ5LXZhcmlhbnQtY29sb3I6ICNGRkY4RjI7XG4vLyDmrKHopoHoibJcbiRzZWNvbmRhcnktY29sb3I6ICNDMTZFMDA7XG4vLyDmrKHopoHoibLororlvaJcbiRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjogI2U2ZjNmNztcbi8vIOesrOS4ieiJslxuJHRoaXJkLWNvbG9yOiAjODAwMDgwO1xuLy8g56ys5LiJ6Imy6K6K5b2iXG4kdGhpcmQtdmFyaWFudC1jb2xvcjogI2VlZDdlZDtcbi8vIGRhbmdlclxuJGRhbmdlci1jb2xvcjogI0U3M0Q0QTtcblxuLyoqIOWfuuekjuWFg+S7tuioreWumiAqL1xuJGZvbnQtc3o6IChcbiAgeGw6IDMwcHgsXG4gIGxnOiAxOHB4LFxuICBtZDogMTZweCxcbiAgc206IDE0cHgsXG4gIHhzOiAxMnB4LFxuKTtcblxuJGZvbnQtd2VpZ2h0OiAoXG4gIGZhdHR5OiA2MDAsXG4gIG5vcm1hbDogbm9ybWFsLFxuKTtcblxuLyoqIOW4uOeUqOWFg+S7tuioreWumiAqL1xuLyogYmFzZSBidG4gc3RhcnQgKi9cbiRidG46IChcbiAgYm9yZGVyLXJhZGl1czogN3B4LFxuICBzaGFkb3c6IDFweCAxcHggMnB4IDAgcmdiYSgyMSwgMjgsIDQyLCAwLjE3KSxcbik7XG4kYnRuLWhlaWdodDogKFxuICBsZzogNDBweCxcbiAgbWQ6IDM1cHgsXG4gIHNtOiAzMHB4LFxuKTtcbiRidG4td2lkdGg6IChcbiAgeGw6IDIwMHB4LFxuICBsZzogMTUwcHgsXG4gIG1kOiAxMjBweCxcbiAgc206IDkwcHgsXG4gIHhzOiA2MHB4LFxuKTtcbi8qIGJhc2UgYnRuIGVuZCAqL1xuXG4vKiogYmFzZSBjYXJkIHN0YXJ0Ki9cbiRiYXNlLWNhcmQ6IChcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLFxuICBib3gtc2hhZG93OiBub25lLFxuICBwYWRkaW5nOiAwLFxuICBib3JkZXI6IDAsXG4gIGJvcmRlci1yYWRpdXM6IDZweCxcbik7XG5cbiRiYXNlLWNhcmQtaGVhZGVyOiAoXG4gIGFsaWduLXNlbGY6IGNlbnRlcixcbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXN6LCBsZyksXG4gIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRmb250LXdlaWdodCwgZmF0dHkpLFxuICBwYWRkaW5nOiAwIDE1cHgsXG4pO1xuXG4kYmFzZS1jYXJkLWNvbnRlbnQ6IChcbiAgcGFkZGluZzogMTBweCAxNXB4LFxuKTtcbi8qKiBiYXNlIGNhcmQgZW5kKi9cblxuLyogYmFzZSB0YWJsZSBzdGFydCAqL1xuJGJhc2UtdGFibGU6IChcbiAgLy8gaG92ZXIg6aGP6ImyXG4gIGhvdmVyLWJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3ItbGlnaHQtZ3JheSwgMTUlKSxcbiAgLy8g6ZaT6ZqU6ImyXG4gIGV2ZW4tY29sLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheSxcbiAgLy8g5ZyT6KeSXG4gIHJhZGl1czogN3B4LFxuICAvLyDpmbDlvbFcbiAgc2hhZG93OiAxcHggMnB4IDRweCAjZDVkNWQ1LFxuICAvLyDooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malFxuICBwYWRkaW5nOiA0cHggOHB4LFxuICAvLyDmiYvmqZ/niYjooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malO+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIG1vLXBhZGRpbmc6IDEwcHggOHB4LFxuICAvLyDlub5weOS7peS4i+S9v+eUqOaJi+apn+eJiO+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIGJyZWFrLXBvaW50OiA5OTFweCxcbiAgLy8g5qyE5L2N5LiL5pa555qEYm9yZGVyLWJvdHRvbe+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIG1vLWJvcmRlci1ib3R0b20td2lkdGg6IDFweFxuKTtcblxuLyogYmFzZSB0YWIgc3RhcnQgKi9cbiRiYXNlLXRhYjogKFxuICAvLyDpoY/oibIobWVyYy10YWIg5pyq5YKz5YWlIG1lcmNUeXBlIOaZguacieaViClcbiAgdGFiLWNvbG9yOiAkcHJpbWFyeS1jb2xvcixcbiAgLy8gdGFiIOe3qOahhlxuICB0YWItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIC8vIGNvbnRlbnQg57eo5qGGXG4gIGNvbnRlbnQtYm9yZGVyLXdpZHRoOiAxMHB4LFxuICAvLyDlnJPop5JcbiAgcmFkaXVzOiA3cHgsXG4gIC8vIOWtl+mrlOWkp+Wwj1xuICBmb250LXNpemU6IG1hcC1nZXQoJGZvbnQtc3osIGxnKVxuKTtcbi8qIGJhc2UgdGFiIGVuZCAqL1xuXG4vKiBzbGlkZSBpbWFnZSBzdGFydCAqL1xuJHNsaWRlLWltYWdlOiAoXG4gIGltYWdlLWJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ncmF5LFxuICBmb2N1cy1ib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeS1jb2xvclxuKTtcbi8qIHNsaWRlIGltYWdlIGVuZCAqL1xuIl19 */"] });


/***/ }),

/***/ "5917":
/*!************************************************!*\
  !*** ./src/app/core/mercue-request.service.ts ***!
  \************************************************/
/*! exports provided: MercueRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MercueRequestService", function() { return MercueRequestService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class MercueRequestService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        /**
         * 是否已顯示無效訊息
         * - 用於判斷僅需彈跳一次
         */
        this.isPopupInvalidMsg = false;
        /**
         * for Status Code 200的情況 (response error) && backend throw exception
         * @param response : MercueResponse
         */
        this.handleResponse = (response) => {
            let hasResult = true;
            return hasResult;
        };
        /**
         * for Status Code 200的情況 (response error) && backend throw exception
         * @param response : MercueResponse
         */
        this.handleQueryProgressResponse = (response) => {
            let hasResult = true;
            if (!response) {
                hasResult = false;
            }
            return hasResult;
        };
        this.handleError = (error) => {
            console.log('handleError');
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
            }
            // return an observable with a user-facing error message
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
        };
    }
    /**
     * call HTTP 主要方法
     * @param method http method
     * @param requestParams request body
     * @param url api url
     */
    request(method, requestParams, url) {
        const httpHeaders = this.getHTTPHeaders();
        if ("post" /* POST */ === method) {
            return this.http
                .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_IP + url, requestParams, { headers: httpHeaders })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(this.handleResponse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
        else {
            return this.http
                .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_IP + "/MliOffice" /* HREF */ + url, { headers: httpHeaders, params: requestParams })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(this.handleResponse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
    }
    /**
     * 繞過 spring security 直接回驗
     * @param url api url
     */
    requestSsoServer(url) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem("ssoToken" /* SSO_TOKEN */)
        });
        return this.http
            .get(sessionStorage.getItem('ssoServerUrl') + url, { headers: httpHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(this.handleQueryProgressResponse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    /**
     * 取得json file
     * @param url file 路徑
     */
    getJSONfile(url) {
        return this.http.get(url);
    }
    getHTTPHeaders() {
        const result = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem("token" /* TOKEN */)
        });
        return result;
    }
    getQueryProgressHTTPHeaders() {
        const result = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });
        return result;
    }
}
MercueRequestService.ɵfac = function MercueRequestService_Factory(t) { return new (t || MercueRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
MercueRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MercueRequestService, factory: MercueRequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    DEFAULT_IP: 'https://hownus.com',
    MEDIA_IP: 'https://d2qsy0gfkzz89z.cloudfront.net/u/'
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'hownus';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UcG3":
/*!************************************************!*\
  !*** ./src/app/cat-view/cat-view.component.ts ***!
  \************************************************/
/*! exports provided: CatViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatViewComponent", function() { return CatViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lottie */ "DPnb");




class CatViewComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.defaultOptions = {
            path: './assets/image/defaultCat.json',
        };
        this.happyOtions = {
            path: './assets/image/FeedCatHappyEat.json',
        };
        this.styles = {
            maxWidth: '500px',
            margin: '0 auto',
        };
        /** 貓幣 */
        this.coin = 50;
    }
    ngOnInit() {
    }
    defaultAnimationCreated(animationItem) {
        animationItem.autoplay = false;
        this.defaultAnimationItem = animationItem;
    }
    happyAnimationCreated(animationItem) {
        animationItem.autoplay = false;
        this.happyAnimationItem = animationItem;
    }
    onDefaultLoopComplete() {
        console.log('default ok');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"].assertNotInAngularZone();
        this.defaultAnimationItem.stop();
    }
    onHappyLoopComplete() {
        console.log('happy ok');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"].assertNotInAngularZone();
        this.happyAnimationItem.stop();
        jquery__WEBPACK_IMPORTED_MODULE_1__('.cat-feed').fadeIn('3000');
    }
    // updateAnimation(): void {
    //   // ⚠️⚠️ Don't do this!
    //   this.options.assetsPath = 'https://assets5.lottiefiles.com/packages/lf20_zzytykf2.json';
    //   // ✔️✔️ Update `options` in this way
    //   this.options = {
    //     ...this.options, // In case you have other properties that you want to copy
    //     path: 'https://assets5.lottiefiles.com/packages/lf20_zzytykf2.json',
    //   };
    // }
    onFeedClick() {
        // $('#feedModal').show();
    }
    play() {
        // $('#feedModal').hide();
        //  有錢餵貓貓
        if (this.coin > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.cat-feed').fadeOut('3000');
            this.happyAnimationItem.play();
            setTimeout(() => {
                this.coin -= 50;
            }, 3200);
        }
        else {
            // 沒錢餵貓，貓哭哭
            this.defaultAnimationItem.play();
            jquery__WEBPACK_IMPORTED_MODULE_1__('#content').fadeIn('3000');
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_1__('#content').fadeOut('3000');
            }, 2000);
        }
        // this.ngZone.runOutsideAngular(() => {
        // });
    }
}
CatViewComponent.ɵfac = function CatViewComponent_Factory(t) { return new (t || CatViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
CatViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatViewComponent, selectors: [["app-cat-view"]], decls: 21, vars: 8, consts: [[1, "main-view"], [1, "p-2"], ["src", "./assets/image/cat_coin50.png", "width", "210", "alt", "", 3, "hidden"], ["src", "./assets/image/cat_coin0.png", "width", "210", "alt", "", 3, "hidden"], [1, "default-cat", 3, "hidden"], ["width", "250px", 3, "options", "styles", "loopComplete", "animationCreated"], [1, "happy-cat", 3, "hidden"], ["width", "350px", 3, "options", "styles", "loopComplete", "animationCreated"], [1, "cat-feed"], ["data-bs-toggle", "modal", "data-bs-target", "#feedModal"], ["src", "./assets/image/cat_feed.png", "width", "100", "alt", ""], ["id", "content", 1, "content", 2, "text-align", "center", "display", "none"], ["id", "feedModal", "tabindex", "-1", "aria-labelledby", "feedModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "cat-feed-modal"], ["src", "./assets/image/cat_pop.png", "width", "100%", "alt", ""], ["data-bs-dismiss", "modal", 1, "cat-cancel-btn"], ["src", "./assets/image/cat_cancel.png", "width", "100", "alt", ""], ["data-bs-dismiss", "modal", 1, "cat-feed-btn", 3, "click"], ["src", "./assets/image/cat_feed.png", "width", "105", "alt", ""]], template: function CatViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ng-lottie", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loopComplete", function CatViewComponent_Template_ng_lottie_loopComplete_5_listener() { return ctx.onDefaultLoopComplete(); })("animationCreated", function CatViewComponent_Template_ng_lottie_animationCreated_5_listener($event) { return ctx.defaultAnimationCreated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-lottie", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loopComplete", function CatViewComponent_Template_ng_lottie_loopComplete_7_listener() { return ctx.onHappyLoopComplete(); })("animationCreated", function CatViewComponent_Template_ng_lottie_animationCreated_7_listener($event) { return ctx.happyAnimationCreated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u60A8\u7684\u9EDE\u6578\u4E0D\u5920 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatViewComponent_Template_a_click_19_listener() { return ctx.play(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.coin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.coin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.coin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.defaultOptions)("styles", ctx.styles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.coin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.happyOtions)("styles", ctx.styles);
    } }, directives: [ngx_lottie__WEBPACK_IMPORTED_MODULE_2__["LottieComponent"]], styles: [".main-view[_ngcontent-%COMP%] {\n  height: calc(100% - 40px);\n  background-image: url('cat_room.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  position: relative;\n  overflow: hidden;\n}\n\n.default-cat[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n\n.happy-cat[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -91px;\n  right: -42px;\n}\n\n.cat-feed[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n}\n\n.content[_ngcontent-%COMP%] {\n  font-family: Noto Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n  \n  z-index: 999;\n  color: #ff7c02;\n  position: absolute;\n  width: 100%;\n  background-color: white;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 0;\n}\n\n.cat-feed-modal[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cat-feed-modal[_ngcontent-%COMP%]   .cat-cancel-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 20%;\n}\n\n.cat-feed-modal[_ngcontent-%COMP%]   .cat-feed-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -6px;\n  right: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhdC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUlBLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSw2QkFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBRkoiLCJmaWxlIjoiY2F0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi12aWV3IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL2NhdF9yb29tLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kZWZhdWx0LWNhdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmhhcHB5LWNhdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtOTFweDtcbiAgcmlnaHQ6IC00MnB4O1xufVxuXG4uY2F0LWZlZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMjBweDtcbn1cblxuLmNvbnRlbnQge1xuICBmb250LWZhbWlseTogTm90byBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIC8qIG9yIDE1MyUgKi9cbiAgei1pbmRleDogOTk5O1xuICBjb2xvcjogI2ZmN2MwMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgLy8gdG9wOjglO1xuICAvLyBsZWZ0OiA3NSU7XG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuXG4uY2F0LWZlZWQtbW9kYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5jYXQtY2FuY2VsLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAyMCU7XG4gIH1cblxuICAuY2F0LWZlZWQtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNnB4O1xuICAgIHJpZ2h0OiAyMCU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, playerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/zh */ "Kd/A");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _flow_flow_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./flow/flow.component */ "kdT/");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _cat_view_cat_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cat-view/cat-view.component */ "UcG3");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _bonus_bonus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bonus/bonus.component */ "yZYB");
/* harmony import */ var _bonus_detail_bonus_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bonus-detail/bonus-detail.component */ "4JTs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");



















Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["zh_TW"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_13__["LottieModule"].forRoot({ player: playerFactory })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _flow_flow_component__WEBPACK_IMPORTED_MODULE_10__["FlowComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _cat_view_cat_view_component__WEBPACK_IMPORTED_MODULE_12__["CatViewComponent"],
        _bonus_bonus_component__WEBPACK_IMPORTED_MODULE_14__["BonusComponent"],
        _bonus_detail_bonus_detail_component__WEBPACK_IMPORTED_MODULE_15__["BonusDetailComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_13__["LottieModule"]] }); })();
function playerFactory() {
    return __webpack_require__.e(/*! import() | lottie-web */ "lottie-web").then(__webpack_require__.t.bind(null, /*! lottie-web */ "lPHp", 7));
}


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, consts: [[1, "d-flex", "align-items-center", 2, "height", "40px"], ["src", "./assets/image/weblogo.png", "width", "120px"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "kdT/":
/*!****************************************!*\
  !*** ./src/app/flow/flow.component.ts ***!
  \****************************************/
/*! exports provided: FlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowComponent", function() { return FlowComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video.js */ "8OJ3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_mercue_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/mercue-request.service */ "5917");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function FlowComponent_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "button", 38);
} if (rf & 2) {
    const j_r7 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bs-target", "#carouselProducts" + i_r2)("data-bs-slide-to", j_r7)("aria-label", "Slide " + j_r7);
} }
function FlowComponent_div_1_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const file_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r11.videoPath + file_r9.photo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function FlowComponent_div_1_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "video", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const j_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "video" + i_r2 + j_r10);
} }
const _c0 = function (a0) { return { active: a0 }; };
function FlowComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FlowComponent_div_1_div_5_ng_container_1_Template, 2, 1, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FlowComponent_div_1_div_5_ng_container_2_Template, 2, 1, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, j_r10 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", file_r9.type == "photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", file_r9.type == "video");
} }
function FlowComponent_div_1_section_41_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" #", tag_r17, " ");
} }
function FlowComponent_div_1_section_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FlowComponent_div_1_section_41_span_2_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", slide_r1.item == null ? null : slide_r1.item.tags);
} }
function FlowComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FlowComponent_div_1_button_3_Template, 1, 3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FlowComponent_div_1_div_5_Template, 3, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " \u89BA\u5F97 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, FlowComponent_div_1_section_41_Template, 3, 1, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "section", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\u516C\u958B");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "section", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "\u8490\u85CF");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "section", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "carouselProducts" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", slide_r1.item == null ? null : slide_r1.item.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", slide_r1.item == null ? null : slide_r1.item.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bs-target", "#carouselProducts" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bs-target", "#carouselProducts" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.videoPath + (slide_r1.user == null ? null : slide_r1.user.photo), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](slide_r1.user == null ? null : slide_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", slide_r1.item == null ? null : slide_r1.item.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u71B1\u5EA6:", slide_r1.item == null ? null : slide_r1.item.pointHot, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", slide_r1.item == null ? null : slide_r1.item.countBuy, "\u4EBA\u8CB7\u904E");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](slide_r1.item == null ? null : slide_r1.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](slide_r1.item == null ? null : slide_r1.item.brief);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", slide_r1.item == null ? null : slide_r1.item.tags == null ? null : slide_r1.item.tags.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", slide_r1.item == null ? null : slide_r1.item.updatedAt, " \u767C\u5E03");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", slide_r1.item == null ? null : slide_r1.item.countAgree, "\u8B9A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", slide_r1.countComment, "\u5247\u7559\u8A00");
} }
class FlowComponent {
    constructor(mercueRequest, elementRef) {
        this.mercueRequest = mercueRequest;
        this.elementRef = elementRef;
        this.flowData = [];
        this.videoPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].MEDIA_IP;
        this.customOptions = {
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
        };
        this.videoJsConfigObj = {
            preload: 'metadata',
            controls: true,
            autoplay: true,
            overrideNative: true,
            techOrder: ['html5', 'flash'],
            html5: {
                nativeVideoTracks: false,
                nativeAudioTracks: false,
                nativeTextTracks: false,
                hls: {
                    withCredentials: false,
                    overrideNative: true,
                    debug: true
                }
            }
        };
        this.currentPage = 1;
        this.videos = document.getElementsByTagName('video');
    }
    onWindowScroll(event) {
        console.log('scrolling...');
        // this.scrollToPlayVideo();
        this.scrollBottomToLoadMore();
    }
    ngOnInit() {
        var id = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].MEDIA_IP;
    }
    ngAfterViewInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(() => {
            return this.getList(this.currentPage);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(array => this.flowData = this.flowData.concat(array))).subscribe(() => {
            setTimeout(() => {
                console.log(this.flowData);
                for (let i = 0; i < this.flowData.length; i++) {
                    for (let j = 0; j < this.flowData[i].item.items.length; j++) {
                        if (this.flowData[i].item.items[j].type === 'video') {
                            this.initVideoElement(i, j);
                        }
                    }
                }
                // this.flowData.forEach((data, i) => {
                //   data.item?.items?.forEach((item, j) => {
                //     if (item.type === 'video') {
                //       const options: VideoJsPlayerOptions = {
                //         sources: [{ src: this.videoPath + item.video }],
                //         // loop: true,
                //         muted: true,
                //         controls: true,
                //         autoplay: false
                //       };
                //       const player = videojs('video' + i + j, options);
                //       player.playsinline(true);
                //       player.on('touchstart', (e) => {
                //         if (e.target.nodeName === 'VIDEO') {
                //           if (player.paused()) {
                //             player.play();
                //           } else {
                //             player.pause();
                //           }
                //         }
                //       })
                //     }
                //   })
                // })
            });
        });
    }
    getList(page) {
        const dataF = {
            '_page': page,
            '_orderby': 'new',
            'id': null,
            'userID': null,
            'categoryIDs': [],
            'collectFromArticleTypeID': null,
            'content': '',
            'hashtags': [],
            'excludeIDs': [],
        };
        return this.mercueRequest.request('post', dataF, '/api/v3/article/getListing').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            this.currentPage++;
            return res.data.items;
        }));
    }
    initVideoElement(i, j) {
        const options = {
            sources: [{ src: this.videoPath + this.flowData[i].item.items[j].video }],
            // loop: true,
            muted: true,
            controls: true,
            autoplay: true
        };
        const player = Object(video_js__WEBPACK_IMPORTED_MODULE_2__["default"])('video' + i + j, options);
        player.playsinline(true);
        player.on('touchstart', (e) => {
            if (e.target.nodeName === 'VIDEO') {
                if (player.paused()) {
                    player.play();
                }
                else {
                    player.pause();
                }
            }
        });
    }
    scrollToPlayVideo() {
        var fraction = 0.8; // Play when 80% of the player is visible.
        for (var i = 0; i < this.videos.length; i++) {
            const video = this.videos[i];
            // console.log(video);
            let x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;
            // console.log(x, y, w, h, r, b);
            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));
            // console.log(visibleX, visibleY);
            visible = visibleX * visibleY / (w * h);
            // console.log(visible);
            if (visible > fraction) {
                video.play();
            }
            else {
                video.pause();
            }
        }
    }
    scrollBottomToLoadMore() {
        var D = document;
        const getDocHeight = Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight);
        if (window.scrollY + window.innerHeight === getDocHeight) {
            this.getList(this.currentPage).subscribe(array => {
                this.flowData = this.flowData.concat(array);
                const rawFlowData = this.flowData.slice(Math.max(this.flowData.length - 10, 1));
                for (let i = this.flowData.length - 10; i < this.flowData.length; i++) {
                    for (let j = 0; j < this.flowData[i].item.items.length; j++) {
                        if (this.flowData[i].item.items[j].type === 'video') {
                            setTimeout(() => {
                                this.initVideoElement(i, j);
                            }, 3000);
                        }
                    }
                }
            });
        }
    }
}
FlowComponent.ɵfac = function FlowComponent_Factory(t) { return new (t || FlowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_mercue_request_service__WEBPACK_IMPORTED_MODULE_5__["MercueRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
FlowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FlowComponent, selectors: [["app-flow"]], hostBindings: function FlowComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function FlowComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 1, consts: [[1, "inner-container", "mt"], [4, "ngFor", "ngForOf"], ["data-bs-ride", "carousel", "data-bs-interval", "false", 1, "carousel", "slide", 3, "id"], [1, "carousel-indicators"], ["type", "button", "class", "active", "aria-current", "true", "class", "active", 4, "ngFor", "ngForOf"], [1, "carousel-inner"], ["class", "carousel-item", "style", "height: 400px;", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "p-1", 2, "display", "flex", "align-items", "center"], ["width", "32px", 1, "user-img", "m-1", 3, "src"], [1, "user-name", "ms-2"], ["src", "./assets/image/icon/start.png", "width", "18px", 1, "pb-1"], [2, "font-weight", "bold"], [1, "ms-auto", "pe-3", "text-hot"], [1, "p-2"], [1, "p-3", "d-flex", "align-items-center", 2, "background-color", "#F6F6F6", "border-radius", "5px"], [1, "text-buy"], ["src", "./assets/image/icon/start.png", "width", "12px"], [1, "text-title"], [1, "text-content", "mb-0"], ["class", "p-2", 4, "ngIf"], [1, "p-2", "text-gray"], [1, "p-1"], [1, "p-2", "text-like"], [1, "row", "g-0"], [1, "col-4"], ["src", "./assets/image/icon/like_unactive.png", "width", "24px"], ["src", "./assets/image/icon/message.png", "width", "24px"], ["src", "./assets/image/icon/bookmark_unactive.png", "width", "24px"], [1, "p-2", "mb-2"], [1, "d-flex", "align-items-center"], ["src", "./assets/image/icon/profile.png", "height", "32px", 1, "me-2"], ["src", "./assets/image/userinput.png", "height", "35px"], ["src", "./assets//image/icon/send_black.png", "height", "25px", 1, "ms-auto", "me-2"], ["type", "button", "aria-current", "true", 1, "active"], [1, "carousel-item", 2, "height", "400px", 3, "ngClass"], [4, "ngIf"], ["alt", "", 1, "d-flex", "m-auto", 2, "max-width", "100%", "max-height", "100%", 3, "src"], ["data-setup", "", 1, "video-js", "vjs-big-play-centered", 2, "width", "100%", "height", "100%", "background", "white", 3, "id"], ["src", "./assets/image/icon/hashtag.png", "width", "20px", "height", "20px"], ["class", "tag-item p-1 m-1 ", 4, "ngFor", "ngForOf"], [1, "tag-item", "p-1", "m-1"]], template: function FlowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FlowComponent_div_1_Template, 65, 16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.flowData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".inner-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: auto;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-family: Noto Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 18px;\n  \n  letter-spacing: 0.2px;\n  \n  color: #333333;\n}\n\n.user-img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.text-hot[_ngcontent-%COMP%] {\n  font-family: Noto Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  \n  \n  color: #828282;\n}\n\n.text-buy[_ngcontent-%COMP%] {\n  font-family: SF Pro Display;\n  font-style: normal;\n  font-size: 17px;\n  line-height: 9px;\n}\n\n.text-title[_ngcontent-%COMP%] {\n  font-family: Noto Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 26px;\n  color: #ff7c02;\n}\n\n.text-content[_ngcontent-%COMP%] {\n  font-family: SF Pro Display;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 26px;\n  \n  color: #333333;\n}\n\n.tag-item[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n  border-radius: 6.81818px;\n  font-family: SF Pro Display;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 14px;\n  \n  text-align: center;\n  letter-spacing: 0.227273px;\n  text-transform: uppercase;\n  color: #060606;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  font-family: Noto Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 22px;\n  \n  display: flex;\n  align-items: center;\n  letter-spacing: -0.4px;\n  color: #bdbdbd;\n}\n\n.text-like[_ngcontent-%COMP%] {\n  font-family: Noto Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14.5px;\n  line-height: 24px;\n  letter-spacing: -0.263636px;\n  color: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zsb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBRUEscUJBQUE7RUFFQSxXQUFBO0VBRUEsY0FBQTtBQURKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBRUEsY0FBQTtBQUZKOztBQUlBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0Esd0JBQUE7RUFFQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtBQU5KOztBQVNBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtBQVJKOztBQVVBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLDJCQUFBO0VBRUEsY0FBQTtBQVZBIiwiZmlsZSI6ImZsb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXItY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi51c2VyLW5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMDYlICovXG5cbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG5cbiAgICAvKiBHcmF5IDEgKi9cblxuICAgIGNvbG9yOiAjMzMzMzMzO1xufVxuLnVzZXItaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50ZXh0LWhvdCB7XG4gICAgZm9udC1mYW1pbHk6IE5vdG8gU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgLyogb3IgMTI5JSAqL1xuXG4gICAgLyogR3JheSAzICovXG5cbiAgICBjb2xvcjogIzgyODI4Mjtcbn1cbi50ZXh0LWJ1eSB7XG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBEaXNwbGF5O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogOXB4O1xufVxuXG4udGV4dC10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE5vdG8gU2FucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgY29sb3I6ICNmZjdjMDI7XG59XG5cbi50ZXh0LWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiBTRiBQcm8gRGlzcGxheTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgLyogb3IgMTUzJSAqL1xuXG4gICAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi50YWctaXRlbSB7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBib3JkZXItcmFkaXVzOiA2LjgxODE4cHg7XG5cbiAgICBmb250LWZhbWlseTogU0YgUHJvIERpc3BsYXk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAvKiBvciA5NyUgKi9cblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yMjcyNzNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgY29sb3I6ICMwNjA2MDY7XG59XG5cbi50ZXh0LWdyYXkge1xuICAgIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIC8qIG9yIDE1NyUgKi9cblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuXG4gICAgY29sb3I6ICNiZGJkYmQ7XG59XG4udGV4dC1saWtle1xuXG5mb250LWZhbWlseTogTm90byBTYW5zO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IG5vcm1hbDtcbmZvbnQtc2l6ZTogMTQuNXB4O1xubGluZS1oZWlnaHQ6IDI0cHg7XG5cbmxldHRlci1zcGFjaW5nOiAtMC4yNjM2MzZweDtcblxuY29sb3I6ICM2NjY2NjY7XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _cat_view_cat_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-view/cat-view.component */ "UcG3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_flow_flow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/flow/flow.component */ "kdT/");
/* harmony import */ var _bonus_bonus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bonus/bonus.component */ "yZYB");
/* harmony import */ var _bonus_detail_bonus_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bonus-detail/bonus-detail.component */ "4JTs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'flow'
    },
    {
        path: 'flow',
        component: src_app_flow_flow_component__WEBPACK_IMPORTED_MODULE_2__["FlowComponent"]
    },
    {
        path: 'cat',
        component: _cat_view_cat_view_component__WEBPACK_IMPORTED_MODULE_0__["CatViewComponent"]
    },
    {
        path: 'bonus',
        component: _bonus_bonus_component__WEBPACK_IMPORTED_MODULE_3__["BonusComponent"]
    },
    {
        path: 'bonus-detail',
        component: _bonus_detail_bonus_detail_component__WEBPACK_IMPORTED_MODULE_4__["BonusDetailComponent"]
    },
    {
        path: '**',
        redirectTo: 'flow'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "yZYB":
/*!******************************************!*\
  !*** ./src/app/bonus/bonus.component.ts ***!
  \******************************************/
/*! exports provided: BonusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusComponent", function() { return BonusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BonusComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bonusItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bonusItem_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bonusItem_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", bonusItem_r2.score, "");
} }
function BonusComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BonusComponent_div_22_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onExchangeClick(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u514C\u63DB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u4F7F\u7528", item_r3.score, "\u7A4D\u5206");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class BonusComponent {
    constructor(router) {
        this.router = router;
        this.defaultOptions = {
            path: './assets/image/defaultCat.json',
        };
        this.styles = {
            maxWidth: '500px',
            margin: '0 auto',
        };
        this.bonusHistoryList = [
            {
                title: '發佈貼文',
                date: '2021-12-31 12:12:15',
                score: 30
            },
            {
                title: '回應貼文',
                date: '2021-12-31 12:12:15',
                score: 10
            },
            {
                title: '回應貼文',
                date: '2021-12-31 12:12:15',
                score: 10
            },
            {
                title: '回應貼文',
                date: '2021-12-31 12:12:15',
                score: 10
            },
            {
                title: '回應貼文',
                date: '2021-12-31 12:12:15',
                score: 10
            },
            {
                title: '回應貼文',
                date: '2021-12-31 12:12:15',
                score: 10
            },
            {
                title: '回應貼文',
                date: '2021-12-31 12:12:15',
                score: 10
            }
        ];
        this.bonusList = [
            {
                title: '7-11$100元禮卷',
                score: 50,
                imageUrl: './assets/image/711_bonus.jpg'
            },
            {
                title: '7-11$100元禮卷',
                score: 50,
                imageUrl: './assets/image/711_bonus.jpg'
            },
            {
                title: '7-11$100元禮卷',
                score: 50,
                imageUrl: './assets/image/711_bonus.jpg'
            },
            {
                title: '7-11$100元禮卷',
                score: 50,
                imageUrl: './assets/image/711_bonus.jpg'
            },
            {
                title: '7-11$100元禮卷',
                score: 50,
                imageUrl: './assets/image/711_bonus.jpg'
            },
            {
                title: '7-11$100元禮卷',
                score: 50,
                imageUrl: './assets/image/711_bonus.jpg'
            },
            {
                title: '7-11$100元禮卷',
                score: 50,
                imageUrl: './assets/image/711_bonus.jpg'
            },
        ];
    }
    ngOnInit() {
    }
    onExchangeClick(item) {
        this.router.navigate(['bonus-detail'], { state: item });
    }
}
BonusComponent.ɵfac = function BonusComponent_Factory(t) { return new (t || BonusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BonusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BonusComponent, selectors: [["app-bonus"]], decls: 23, vars: 5, consts: [[1, "bonus-history"], [1, "row", "g-0", "h-100"], [1, "col-5", "p-3", "d-flex", "justify-content-center", "align-items-center", "text-center"], [1, "mb-2"], ["width", "120%", 3, "options", "styles"], [3, "routerLink"], ["src", "./assets/image/cat_play.png", "width", "100", "alt", ""], [1, "col-7", "p-3", "h-100"], [1, "base-card", "h-100"], [1, "base-card-header"], [1, "base-card-content"], ["class", "bonus-item", 4, "ngFor", "ngForOf"], [1, "bonus-list"], [1, "bonus-list-title"], [1, "mb-0"], [1, "ms-auto"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", "text-white"], ["class", "bonus-list-item row g-0", 4, "ngFor", "ngForOf"], [1, "bonus-item"], [1, "mb-0", "bonus-date"], [1, "bonus-count"], [1, "bonus-list-item", "row", "g-0"], [1, "col-5", "d-flex", "align-items-center", "justify-content-center"], [1, "mb-0", 2, "color", "#C16E00"], [1, "col-3"], ["width", "100%", "alt", "", 3, "src"], [1, "col-4", "d-flex", "align-items-center", "justify-content-center"], ["type", "button", 1, "btn", "btn-outline-primary", 2, "width", "80px", 3, "click"]], template: function BonusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ng-lottie", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u7A4D\u5206\u7D00\u9304 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BonusComponent_div_13_Template, 8, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u514C\u63DB\u5217\u8868");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u5982\u4F55\u7372\u5F97\u7A4D\u5206");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BonusComponent_div_22_Template, 12, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.defaultOptions)("styles", ctx.styles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bonusHistoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bonusList);
    } }, directives: [ngx_lottie__WEBPACK_IMPORTED_MODULE_2__["LottieComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n.base-card[_ngcontent-%COMP%]   .base-card-header[_ngcontent-%COMP%] {\n  background-color: #FF7C02;\n  height: 30px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 7px 7px 0 0;\n}\n.base-card[_ngcontent-%COMP%]   .base-card-content[_ngcontent-%COMP%] {\n  border-radius: 0 0 7px 7px;\n  background-color: #fff;\n  height: calc(100% - 30px);\n  overflow: auto;\n}\n.bonus-history[_ngcontent-%COMP%] {\n  background-image: url('cat_bg.png');\n  height: 50%;\n}\n.bonus-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f0f0;\n  padding: 2px 10px;\n  margin: 0 6px;\n  position: relative;\n}\n.bonus-item[_ngcontent-%COMP%]   .bonus-date[_ngcontent-%COMP%] {\n  color: #BDBDBD;\n}\n.bonus-item[_ngcontent-%COMP%]   .bonus-count[_ngcontent-%COMP%] {\n  color: #FF7C02;\n  font-weight: bold;\n  font-size: 16px;\n  position: absolute;\n  right: 2px;\n  top: 0;\n}\n.bonus-list-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  border-bottom: 1px solid #f0f0f0;\n  box-shadow: 1px 1px 2px 0 rgba(21, 28, 42, 0.17);\n}\n.bonus-list-item[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.bonus-list-item[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #FFF8F2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JvbnVzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vY3VzdG9tLXNldHRpbmcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsYUFBQTtBQXFCQSxZQUFBO0FBY0EsWUFBQTtBQUNBLG1CQUFBO0FBaUJBLGlCQUFBO0FBRUEsb0JBQUE7QUFtQkEsa0JBQUE7QUFFQSxxQkFBQTtBQW9CQSxtQkFBQTtBQWFBLGlCQUFBO0FBRUEsc0JBQUE7QUFLQSxvQkFBQTtBRGpISTtFQUNJLHlCQ0dRO0VERlIsWUFBQTtFQUNBLFdDTE07RURNTixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBV1I7QUFSSTtFQUNJLDBCQUFBO0VBQ0Esc0JDZE07RURlTix5QkFBQTtFQUNBLGNBQUE7QUFVUjtBQU5BO0VBQ0ksbUNBQUE7RUFDQSxXQUFBO0FBU0o7QUFOQTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFTSjtBQVBJO0VBQ0ksY0M3Qlc7QURzQ25CO0FBTkk7RUFDSSxjQzlCUTtFRCtCUixpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0FBUVI7QUFKQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnREFBQTtBQU9KO0FBSkE7RUFDSSxhQUFBO0FBT0o7QUFMSTtFQUNJLHlCQ25EZ0I7QUQwRHhCIiwiZmlsZSI6ImJvbnVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2N1c3RvbS1zZXR0aW5nLnNjc3NcIjtcblxuLmJhc2UtY2FyZCB7XG4gICAgLmJhc2UtY2FyZC1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwIDA7XG4gICAgfVxuXG4gICAgLmJhc2UtY2FyZC1jb250ZW50IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDdweCA3cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxufVxuXG4uYm9udXMtaGlzdG9yeSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL2NhdF9iZy5wbmdcIik7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5cbi5ib251cy1pdGVtIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICBtYXJnaW46IDAgNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5ib251cy1kYXRlIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ncmF5O1xuICAgIH1cblxuICAgIC5ib251cy1jb3VudCB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMnB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxufVxuXG4uYm9udXMtbGlzdC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCByZ2IoMjEgMjggNDIgLyAxNyUpO1xufVxuXG4uYm9udXMtbGlzdC1pdGVtIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgIH1cbn1cbiIsIi8qKiDln7rnpI7lip/og73oibLoqK3lrpogKi9cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4vLyDmt7rngbBcbiRjb2xvci1saWdodC1ncmF5OiAjQkRCREJEO1xuXG4vLyDkuLvopoHoibJcbiRwcmltYXJ5LWNvbG9yOiAjRkY3QzAyO1xuLy8g5Li76KaB6Imy6K6K5b2iXG4kcHJpbWFyeS12YXJpYW50LWNvbG9yOiAjRkZGOEYyO1xuLy8g5qyh6KaB6ImyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzE2RTAwO1xuLy8g5qyh6KaB6Imy6K6K5b2iXG4kc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I6ICNlNmYzZjc7XG4vLyDnrKzkuInoibJcbiR0aGlyZC1jb2xvcjogIzgwMDA4MDtcbi8vIOesrOS4ieiJsuiuiuW9olxuJHRoaXJkLXZhcmlhbnQtY29sb3I6ICNlZWQ3ZWQ7XG4vLyBkYW5nZXJcbiRkYW5nZXItY29sb3I6ICNFNzNENEE7XG5cbi8qKiDln7rnpI7lhYPku7boqK3lrpogKi9cbiRmb250LXN6OiAoXG4gIHhsOiAzMHB4LFxuICBsZzogMThweCxcbiAgbWQ6IDE2cHgsXG4gIHNtOiAxNHB4LFxuICB4czogMTJweCxcbik7XG5cbiRmb250LXdlaWdodDogKFxuICBmYXR0eTogNjAwLFxuICBub3JtYWw6IG5vcm1hbCxcbik7XG5cbi8qKiDluLjnlKjlhYPku7boqK3lrpogKi9cbi8qIGJhc2UgYnRuIHN0YXJ0ICovXG4kYnRuOiAoXG4gIGJvcmRlci1yYWRpdXM6IDdweCxcbiAgc2hhZG93OiAxcHggMXB4IDJweCAwIHJnYmEoMjEsIDI4LCA0MiwgMC4xNyksXG4pO1xuJGJ0bi1oZWlnaHQ6IChcbiAgbGc6IDQwcHgsXG4gIG1kOiAzNXB4LFxuICBzbTogMzBweCxcbik7XG4kYnRuLXdpZHRoOiAoXG4gIHhsOiAyMDBweCxcbiAgbGc6IDE1MHB4LFxuICBtZDogMTIwcHgsXG4gIHNtOiA5MHB4LFxuICB4czogNjBweCxcbik7XG4vKiBiYXNlIGJ0biBlbmQgKi9cblxuLyoqIGJhc2UgY2FyZCBzdGFydCovXG4kYmFzZS1jYXJkOiAoXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZSxcbiAgYm94LXNoYWRvdzogbm9uZSxcbiAgcGFkZGluZzogMCxcbiAgYm9yZGVyOiAwLFxuICBib3JkZXItcmFkaXVzOiA2cHgsXG4pO1xuXG4kYmFzZS1jYXJkLWhlYWRlcjogKFxuICBhbGlnbi1zZWxmOiBjZW50ZXIsXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zeiwgbGcpLFxuICBmb250LXdlaWdodDogbWFwLWdldCgkZm9udC13ZWlnaHQsIGZhdHR5KSxcbiAgcGFkZGluZzogMCAxNXB4LFxuKTtcblxuJGJhc2UtY2FyZC1jb250ZW50OiAoXG4gIHBhZGRpbmc6IDEwcHggMTVweCxcbik7XG4vKiogYmFzZSBjYXJkIGVuZCovXG5cbi8qIGJhc2UgdGFibGUgc3RhcnQgKi9cbiRiYXNlLXRhYmxlOiAoXG4gIC8vIGhvdmVyIOmhj+iJslxuICBob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yLWxpZ2h0LWdyYXksIDE1JSksXG4gIC8vIOmWk+malOiJslxuICBldmVuLWNvbC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXksXG4gIC8vIOWck+inklxuICByYWRpdXM6IDdweCxcbiAgLy8g6Zmw5b2xXG4gIHNoYWRvdzogMXB4IDJweCA0cHggI2Q1ZDVkNSxcbiAgLy8g6KGo6aCt44CB5YWn5a6577yIdGjjgIF0ZO+8iSDplpPpmpRcbiAgcGFkZGluZzogNHB4IDhweCxcbiAgLy8g5omL5qmf54mI6KGo6aCt44CB5YWn5a6577yIdGjjgIF0ZO+8iSDplpPpmpTvvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxuICBtby1wYWRkaW5nOiAxMHB4IDhweCxcbiAgLy8g5bm+cHjku6XkuIvkvb/nlKjmiYvmqZ/niYjvvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxuICBicmVhay1wb2ludDogOTkxcHgsXG4gIC8vIOashOS9jeS4i+aWueeahGJvcmRlci1ib3R0b23vvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxuICBtby1ib3JkZXItYm90dG9tLXdpZHRoOiAxcHhcbik7XG5cbi8qIGJhc2UgdGFiIHN0YXJ0ICovXG4kYmFzZS10YWI6IChcbiAgLy8g6aGP6ImyKG1lcmMtdGFiIOacquWCs+WFpSBtZXJjVHlwZSDmmYLmnInmlYgpXG4gIHRhYi1jb2xvcjogJHByaW1hcnktY29sb3IsXG4gIC8vIHRhYiDnt6jmoYZcbiAgdGFiLWJvcmRlci13aWR0aDogMXB4LFxuICAvLyBjb250ZW50IOe3qOahhlxuICBjb250ZW50LWJvcmRlci13aWR0aDogMTBweCxcbiAgLy8g5ZyT6KeSXG4gIHJhZGl1czogN3B4LFxuICAvLyDlrZfpq5TlpKflsI9cbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXN6LCBsZylcbik7XG4vKiBiYXNlIHRhYiBlbmQgKi9cblxuLyogc2xpZGUgaW1hZ2Ugc3RhcnQgKi9cbiRzbGlkZS1pbWFnZTogKFxuICBpbWFnZS1iYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheSxcbiAgZm9jdXMtYm9yZGVyOiAycHggc29saWQgJHByaW1hcnktY29sb3Jcbik7XG4vKiBzbGlkZSBpbWFnZSBlbmQgKi9cbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map