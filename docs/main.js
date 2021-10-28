(self["webpackChunkexport_image_test"] = self["webpackChunkexport_image_test"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 4422:
/*!************************************!*\
  !*** ./dist/core/fesm2015/core.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackdropDirective": () => (/* binding */ BackdropDirective),
/* harmony export */   "BytesPipe": () => (/* binding */ BytesPipe),
/* harmony export */   "Components": () => (/* binding */ Components),
/* harmony export */   "ConfirmDialog": () => (/* binding */ ConfirmDialog),
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule),
/* harmony export */   "CoreService": () => (/* binding */ CoreService),
/* harmony export */   "Dialogs": () => (/* binding */ Dialogs),
/* harmony export */   "Directives": () => (/* binding */ Directives),
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule),
/* harmony export */   "Pipes": () => (/* binding */ Pipes),
/* harmony export */   "SnackerService": () => (/* binding */ SnackerService),
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService),
/* harmony export */   "TruncatePipe": () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3399);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3792);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ 8662);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 7896);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 395);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 5924);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ 330);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 6322);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ 3894);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ 2323);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slider */ 3616);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ 5381);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/stepper */ 8210);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tree */ 5473);















































const Components = [];

class ConfirmDialog {
  constructor(data) {
    this.data = data;
  }

  ngOnInit() {
    if (this.data) {
      this.data.title = this.data.title ? this.data.title : 'Confirm Action?';
      this.data.content = this.data.content ? this.data.content : 'Are you sure you would like to perform this action?';
    } else {
      this.data = {
        title: 'Confirm Action?',
        content: 'Are you sure you would like to perform this action?'
      };
    }
  }

}

ConfirmDialog.ɵfac = function ConfirmDialog_Factory(t) {
  return new (t || ConfirmDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};

ConfirmDialog.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ConfirmDialog,
  selectors: [["confirm-dialog"]],
  decls: 11,
  vars: 4,
  consts: [[1, "mat-typography"], ["mat-dialog-title", ""], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "color", "warn", 3, "mat-dialog-close"]],
  template: function ConfirmDialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Confirm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.content);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'confirm-dialog',
      templateUrl: 'confirm.dialog.html'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA]
      }]
    }];
  }, null);
})();

const Dialogs = [ConfirmDialog];

class BackdropDirective {
  constructor(el) {
    this.el = el;
    this.filters = 'blur(30px) brightness(1.8)';
    this.hover = 'blur(30px) brightness(1.8)';
  }

  ngOnInit() {
    this.el.nativeElement.style.backdropFilter = this.filters;
    this.el.nativeElement.classList.add('backdropped');
  }

  onMouseEnter() {
    this.el.nativeElement.style.backdropFilter = this.hover;
  }

  onMouseLeave() {
    this.el.nativeElement.style.backdropFilter = this.filters;
  }

}

BackdropDirective.ɵfac = function BackdropDirective_Factory(t) {
  return new (t || BackdropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

BackdropDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: BackdropDirective,
  selectors: [["", "backdrop", ""]],
  hostBindings: function BackdropDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function BackdropDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function BackdropDirective_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  },
  inputs: {
    filters: "filters",
    hover: "hover"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackdropDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[backdrop]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    filters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onMouseEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseenter']
    }],
    onMouseLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseleave']
    }]
  });
})();

const Directives = [BackdropDirective];

class BytesPipe {
  transform(value, precision = 2) {
    if (!value || value === 0) return '0 Bytes';
    const k = 1024,
          dm = precision <= 0 ? 0 : precision || 2,
          sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(value) / Math.log(k));
    return parseFloat((value / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}

BytesPipe.ɵfac = function BytesPipe_Factory(t) {
  return new (t || BytesPipe)();
};

BytesPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "bytes",
  type: BytesPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BytesPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'bytes'
    }]
  }], null, null);
})();

class TruncatePipe {
  transform(value, limit = 50, ellipses = '...') {
    if (!value) return '';
    return value.length <= limit ? value : `${value.substr(0, limit)}${ellipses}`;
  }

}

TruncatePipe.ɵfac = function TruncatePipe_Factory(t) {
  return new (t || TruncatePipe)();
};

TruncatePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "truncate",
  type: TruncatePipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'truncate'
    }]
  }], null, null);
})();

const Pipes = [BytesPipe, TruncatePipe];

class CoreService {
  constructor() {
    this.ssnPattern = /^(?!(000|666|9))\d{3}-(?!(00))\d{2}-(?!(0000))\d{4}$/g;

    this.getUploadOptions = () => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
      headers.set('Accept', 'application/json');
      headers.delete('Content-Type');
      return headers;
    };

    this.getTextOptions = () => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
      headers.set('Content-Type', 'text/plain');
      headers.delete('Pragma');
      return headers;
    };

    this.urlEncode = value => {
      const regex = /[^a-zA-Z0-9-.]/gi;
      let newValue = value.replace(/\s/g, '-').toLowerCase();
      newValue = newValue.replace(regex, '');
      return newValue;
    };

    this.generateInputObservable = input => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(input.nativeElement, 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(event => event.target.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)());
  }

}

CoreService.ɵfac = function CoreService_Factory(t) {
  return new (t || CoreService)();
};

CoreService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CoreService,
  factory: CoreService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class SnackerService {
  constructor(snackbar) {
    this.snackbar = snackbar;
    this.config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarConfig();

    this.sendMessage = message => this.snackbar.open(message, 'Close', this.config);

    this.setClasses = classes => {
      classes.push('snacker');
      this.config.panelClass = classes;
    };

    this.sendColorMessage = (message, colors) => {
      this.setClasses(colors);
      this.sendMessage(message);
    };

    this.sendErrorMessage = message => {
      this.setClasses(['snacker-red']);
      this.sendMessage(message);
    };

    this.sendWarningMessage = message => {
      this.setClasses(['snacker-orange']);
      this.sendMessage(message);
    };

    this.sendSuccessMessage = message => {
      this.setClasses(['snacker-green']);
      this.sendMessage(message);
    };

    this.config.duration = 5000;
    this.config.panelClass = [];
  }

  setDuration(duration) {
    this.config.duration = duration;
  }

}

SnackerService.ɵfac = function SnackerService_Factory(t) {
  return new (t || SnackerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar));
};

SnackerService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: SnackerService,
  factory: SnackerService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar
    }];
  }, null);
})();

class ThemeService {
  constructor(overlay) {
    this.overlay = overlay;
    this.isLight = false;

    this.setOverlayContainerTheme = () => {
      if (this.isLight) {
        this.overlay.getContainerElement().classList.remove('app-dark');
        this.overlay.getContainerElement().classList.add('app-light');
      } else {
        this.overlay.getContainerElement().classList.remove('app-light');
        this.overlay.getContainerElement().classList.add('app-dark');
      }
    };

    this.toggleTheme = () => {
      this.isLight = !this.isLight;
      this.setOverlayContainerTheme();
    };

    this.isLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => this.isLight = e.matches);
    this.setOverlayContainerTheme();
  }

}

ThemeService.ɵfac = function ThemeService_Factory(t) {
  return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayContainer));
};

ThemeService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ThemeService,
  factory: ThemeService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayContainer
    }];
  }, null);
})();

class MaterialModule {}

MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};

MaterialModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.GridModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatLineModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOptionModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatPseudoCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_34__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_39__.MatStepperModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_40__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__.MatTreeModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.GridModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatLineModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOptionModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatPseudoCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_34__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_39__.MatStepperModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_40__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__.MatTreeModule]
    }]
  }], null, null);
})();

class CoreModule {}

CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)();
};

CoreModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule, MaterialModule], MaterialModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [...Components, ...Dialogs, ...Directives, ...Pipes],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule, MaterialModule],
      exports: [...Components, ...Dialogs, ...Directives, ...Pipes, MaterialModule]
    }]
  }], null, null);
})();
/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 9146:
/*!****************************************************!*\
  !*** ./src/export-image-test/app/app.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ 4422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 2529);








function AppComponent_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "brightness_5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "brightness_3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(themer) {
        this.themer = themer;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](core__WEBPACK_IMPORTED_MODULE_1__.ThemeService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 6, consts: [[1, "mat-typography", "mat-app-background", "app-frame", 3, "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "p8"], ["fxFlex", "", 1, "mat-title", "m8"], ["mat-icon-button", "", "fxFlexAlign", "end", 3, "ngClass", "click"], [4, "ngIf"], [1, "app-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Export Image Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.themer.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_mat_icon_5_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_mat_icon_6_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "app-light" : "app-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "color-amber" : "color-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.themer.isLight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.themer.isLight);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultClassDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], encapsulation: 2 });


/***/ }),

/***/ 3475:
/*!*************************************************!*\
  !*** ./src/export-image-test/app/app.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core */ 4422);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 9146);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ 5432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _routes_home_home_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/home/home.route */ 1560);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            core__WEBPACK_IMPORTED_MODULE_7__.CoreModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(_routes__WEBPACK_IMPORTED_MODULE_1__.Routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _routes_home_home_route__WEBPACK_IMPORTED_MODULE_2__.HomeRoute], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        core__WEBPACK_IMPORTED_MODULE_7__.CoreModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 1560:
/*!*************************************************************!*\
  !*** ./src/export-image-test/app/routes/home/home.route.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* binding */ HomeRoute)
/* harmony export */ });
/* harmony import */ var D_a_export_image_test_export_image_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-to-image */ 6991);
/* harmony import */ var html_to_image_lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-to-image/lib/util */ 4587);
/* harmony import */ var html_to_image_lib_util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_to_image_lib_util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html_to_image_lib_cloneNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-to-image/lib/cloneNode */ 3592);
/* harmony import */ var html_to_image_lib_cloneNode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_to_image_lib_cloneNode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html_to_image_lib_embedImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-to-image/lib/embedImages */ 5082);
/* harmony import */ var html_to_image_lib_embedImages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_to_image_lib_embedImages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_to_image_lib_applyStyleWithOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-to-image/lib/applyStyleWithOptions */ 5810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 2220);














const _c0 = ["image"];
const _c1 = ["svgHost"];
const _c2 = ["canvasHost"];

function HomeRoute_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", f_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](f_r6);
  }
}

function HomeRoute_p_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "SVG");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function HomeRoute_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Canvas");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

class HomeRoute {
  constructor() {
    var _this = this;

    this.filter = `contrast(1.4) brightness(1.8) opacity(0.5)`;
    this.backdrop = `blur(20px) brightness(1.8) contrast(1.4)`;
    this.format = 'png';
    this.formats = ['png', 'jpg', 'svg'];

    this.getImage = /*#__PURE__*/function () {
      var _ref = (0,D_a_export_image_test_export_image_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (node) {
        const {
          width,
          height
        } = _this.getImageSize(node);

        let el = yield (0,html_to_image_lib_cloneNode__WEBPACK_IMPORTED_MODULE_3__.cloneNode)(node, {}, true);
        el = yield (0,html_to_image_lib_embedImages__WEBPACK_IMPORTED_MODULE_4__.embedImages)(el, {});
        el = (0,html_to_image_lib_applyStyleWithOptions__WEBPACK_IMPORTED_MODULE_5__.applyStyleWithOptions)(el, {});
        const url = yield (0,html_to_image_lib_util__WEBPACK_IMPORTED_MODULE_2__.nodeToDataURL)(el, width, height);
        console.log(url);
        const img = yield (0,html_to_image_lib_util__WEBPACK_IMPORTED_MODULE_2__.createImage)(url);
        return img;
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.getCanvas = /*#__PURE__*/function () {
      var _ref2 = (0,D_a_export_image_test_export_image_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (node, img) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const ratio = (0,html_to_image_lib_util__WEBPACK_IMPORTED_MODULE_2__.getPixelRatio)();

        const {
          width,
          height
        } = _this.getImageSize(node);

        const canvasWidth = width;
        const canvasHeight = height;
        canvas.width = canvasWidth * ratio;
        canvas.height = canvasHeight * ratio;
        canvas.style.width = `${canvasWidth}`;
        canvas.style.height = `${canvasHeight}`;
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        return canvas;
      });

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.generate = /*#__PURE__*/(0,D_a_export_image_test_export_image_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let img;

      switch (_this.format) {
        case 'jpg':
          img = yield (0,html_to_image__WEBPACK_IMPORTED_MODULE_1__.toJpeg)(_this.image.nativeElement);
          break;

        case 'svg':
          img = yield (0,html_to_image__WEBPACK_IMPORTED_MODULE_1__.toSvg)(_this.image.nativeElement);
          break;

        case 'png':
        default:
          img = yield (0,html_to_image__WEBPACK_IMPORTED_MODULE_1__.toPng)(_this.image.nativeElement);
          break;
      }

      _this.download(`test.${_this.format}`, img);
    });

    this.download = (name, url) => {
      const link = document.createElement('a');
      link.download = name;
      link.href = url;
      link.click();
    };

    this.custom = /*#__PURE__*/(0,D_a_export_image_test_export_image_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.img = yield _this.getImage(_this.image.nativeElement);
      if (_this.svgHost) _this.svgHost.nativeElement.appendChild(_this.img);
      _this.canvas = yield _this.getCanvas(_this.image.nativeElement, _this.img);
      if (_this.canvasHost) _this.canvasHost.nativeElement.appendChild(_this.canvas);
    });
  }

  getImageSize(node) {
    const width = (0,html_to_image_lib_util__WEBPACK_IMPORTED_MODULE_2__.getNodeWidth)(node);
    const height = (0,html_to_image_lib_util__WEBPACK_IMPORTED_MODULE_2__.getNodeHeight)(node);
    return {
      width,
      height
    };
  }

}

HomeRoute.ɵfac = function HomeRoute_Factory(t) {
  return new (t || HomeRoute)();
};

HomeRoute.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: HomeRoute,
  selectors: [["home-route"]],
  viewQuery: function HomeRoute_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.image = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.svgHost = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.canvasHost = _t.first);
    }
  },
  decls: 27,
  vars: 22,
  consts: [["fxLayout", "column", "fxLayoutAlign", "start start", 1, "p16"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "my4", "mx16"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", "color", "primary", 1, "my4", "mx8", 3, "click"], ["mat-stroked-button", "", 1, "my4", "mx8", 3, "click"], ["fxLayout", "row | wrap", "fxLayoutAlign", "start start"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "m8"], [1, "mat-title", "m4"], [1, "rounded", "container-bg"], ["image", ""], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "center center"], [1, "card-outline-divider", "el-12", "rounded"], ["class", "mat-title m4", 4, "ngIf"], ["svgHost", ""], ["canvasHost", ""], [3, "value"]],
  template: function HomeRoute_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "format");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function HomeRoute_Template_mat_select_ngModelChange_5_listener($event) {
        return ctx.format = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, HomeRoute_mat_option_6_Template, 2, 2, "mat-option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HomeRoute_Template_button_click_7_listener() {
        return ctx.generate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Download");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HomeRoute_Template_button_click_9_listener() {
        return ctx.custom();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Custom");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Source");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "section", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "section", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, HomeRoute_p_20_Template, 2, 0, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "section", null, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, HomeRoute_p_24_Template, 2, 0, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "section", null, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.format);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.formats);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", 400, "px")("height", 400, "px")("background-color", "#f7f7f7");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("backdrop-filter", ctx.backdrop)("-webkit-backdrop-filter", ctx.backdrop);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", 360, "px")("height", 360, "px")("filter", ctx.filter)("background-color", "#f7f7f7");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.img);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.canvas);
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption],
  styles: [".container-bg[_ngcontent-%COMP%] {\r\n  background-image: url('/assets/psychedelic.jpg');\r\n  background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucm91dGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0RBQWdEO0VBQ2hELHNCQUFzQjtBQUN4QiIsImZpbGUiOiJob21lLnJvdXRlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItYmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9wc3ljaGVkZWxpYy5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 9752:
/*!********************************************************!*\
  !*** ./src/export-image-test/app/routes/home/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* reexport safe */ _home_route__WEBPACK_IMPORTED_MODULE_0__.HomeRoute)
/* harmony export */ });
/* harmony import */ var _home_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.route */ 1560);



/***/ }),

/***/ 5432:
/*!***************************************************!*\
  !*** ./src/export-image-test/app/routes/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteComponents": () => (/* binding */ RouteComponents),
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ 9752);

const RouteComponents = [
    _home__WEBPACK_IMPORTED_MODULE_0__.HomeRoute
];
const Routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_0__.HomeRoute },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ 494:
/*!***********************************************************!*\
  !*** ./src/export-image-test/environments/environment.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 6491:
/*!***************************************!*\
  !*** ./src/export-image-test/main.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 3475);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 494);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6491)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map