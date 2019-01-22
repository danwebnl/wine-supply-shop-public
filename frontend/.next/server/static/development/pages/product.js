module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ErrorMessage.tsx":
/*!*************************************!*\
  !*** ./components/ErrorMessage.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

 // interface IError {
//   message: string;
//   networkError: {
//     result: {
//       errors: [{
//         message: string
//       }]
//     }
//   }
// }

var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "pxxhcc-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Error!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Error!"), error.message.replace('GraphQL error: ', '')));
};

/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/PropertyAndValue.tsx":
/*!*****************************************!*\
  !*** ./components/PropertyAndValue.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PropertyAndValue__Container",
  componentId: "sc-1961l64-0"
})(["display:flex;"]);
var Property = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PropertyAndValue__Property",
  componentId: "sc-1961l64-1"
})(["width:150px;font-family:'Roboto',sans-serif;font-weight:bold;"]);
var Value = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PropertyAndValue__Value",
  componentId: "sc-1961l64-2"
})(["width:100%;font-family:'Roboto',sans-serif;font-weight:normal;"]);

var PropertyAndValue = function PropertyAndValue(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Property, null, props.property), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Value, null, props.value));
};

/* harmony default export */ __webpack_exports__["default"] = (PropertyAndValue);

/***/ }),

/***/ "./components/SingleItem.tsx":
/*!***********************************!*\
  !*** ./components/SingleItem.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.tsx");
/* harmony import */ var _PropertyAndValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PropertyAndValue */ "./components/PropertyAndValue.tsx");
/* harmony import */ var _styles_DottedSeparation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/DottedSeparation */ "./components/styles/DottedSeparation.tsx");
/* harmony import */ var _WineCategories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WineCategories */ "./components/WineCategories.tsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    product(where: { id: $id }) {\n      id\n      name\n      price\n      country\n      category\n      description\n      taste\n      food\n      image\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var SingleItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "SingleItem__SingleItemStyles",
  componentId: "sc-1f7ygmx-0"
})(["max-width:", ";margin:2rem auto;box-shadow:", ";display:grid;grid-auto-columns:1fr;grid-auto-flow:column;min-height:500px;img{width:100%;height:100%;object-fit:contain;background-color:", ";}.details{margin:3rem;font-size:2rem;}"], function (props) {
  return props.theme.maxWidth;
}, function (props) {
  return props.theme.bs;
}, function (props) {
  return props.theme.grey;
});
var Details = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "SingleItem__Details",
  componentId: "sc-1f7ygmx-1"
})(["text-align:left;width:100%;height:100%;font-size:14px;"]);
var PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span.withConfig({
  displayName: "SingleItem__PriceTag",
  componentId: "sc-1f7ygmx-2"
})(["font-family:'Lora',serif;background:", ";color:white;border-radius:7px;font-weight:600;padding:5px;line-height:1;font-size:3rem;bottom:20px;"], function (props) {
  return props.theme.red;
});
var SINGLE_PRODUCT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var SingleItem =
/*#__PURE__*/
function (_Component) {
  _inherits(SingleItem, _Component);

  function SingleItem() {
    _classCallCheck(this, SingleItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SingleItem).apply(this, arguments));
  }

  _createClass(SingleItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: SINGLE_PRODUCT_QUERY,
        variables: {
          id: this.props.id
        }
      }, function (_ref) {
        var error = _ref.error,
            loading = _ref.loading,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
          error: error
        });
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading...");
        if (!data.product) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "No Item Found for ", _this.props.id);
        var item = data.product;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleItemStyles, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Wine Supply Shop| ", item.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: item.image,
          alt: item.title
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "details"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PriceTag, null, "\u20AC ", item.price), item.description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_DottedSeparation__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Details, null, item.category && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PropertyAndValue__WEBPACK_IMPORTED_MODULE_6__["default"], {
          property: "Category",
          value: _WineCategories__WEBPACK_IMPORTED_MODULE_8__["wineCategoriesNamesEnum"][item.category]
        }), item.country && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PropertyAndValue__WEBPACK_IMPORTED_MODULE_6__["default"], {
          property: "Country",
          value: item.country
        }), item.year && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PropertyAndValue__WEBPACK_IMPORTED_MODULE_6__["default"], {
          property: "year",
          value: item.year
        }), item.taste && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PropertyAndValue__WEBPACK_IMPORTED_MODULE_6__["default"], {
          property: "Taste",
          value: item.taste
        }), item.food && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PropertyAndValue__WEBPACK_IMPORTED_MODULE_6__["default"], {
          property: "Delicious with",
          value: item.food
        }))));
      });
    }
  }]);

  return SingleItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleItem);

/***/ }),

/***/ "./components/WineCategories.tsx":
/*!***************************************!*\
  !*** ./components/WineCategories.tsx ***!
  \***************************************/
/*! exports provided: default, wineCategoriesNamesEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wineCategoriesNamesEnum", function() { return wineCategoriesNamesEnum; });
var wineCategoriesCodesEnum;

(function (wineCategoriesCodesEnum) {
  wineCategoriesCodesEnum["Red"] = "red";
  wineCategoriesCodesEnum["White"] = "white";
  wineCategoriesCodesEnum["Rose"] = "rose";
  wineCategoriesCodesEnum["Sparkling"] = "sparkling";
  wineCategoriesCodesEnum["Dessert"] = "dessert";
})(wineCategoriesCodesEnum || (wineCategoriesCodesEnum = {}));

var wineCategoriesNamesEnum;

(function (wineCategoriesNamesEnum) {
  wineCategoriesNamesEnum["red"] = "Red Wine";
  wineCategoriesNamesEnum["white"] = "White Wine";
  wineCategoriesNamesEnum["rose"] = "Ros\xE9";
  wineCategoriesNamesEnum["sparkling"] = "Sparkling Wine";
  wineCategoriesNamesEnum["dessert"] = "Dessert Wine";
})(wineCategoriesNamesEnum || (wineCategoriesNamesEnum = {}));

/* harmony default export */ __webpack_exports__["default"] = (wineCategoriesCodesEnum);


/***/ }),

/***/ "./components/styles/DottedSeparation.tsx":
/*!************************************************!*\
  !*** ./components/styles/DottedSeparation.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var DottedSeparation = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.hr.withConfig({
  displayName: "DottedSeparation",
  componentId: "sc-141c64m-0"
})(["border:none;border-top:2px dotted ", ";color:#fff;background-color:#fff;height:1px;width:100%;"], function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ __webpack_exports__["default"] = (DottedSeparation);

/***/ }),

/***/ "./pages/product.tsx":
/*!***************************!*\
  !*** ./pages/product.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SingleItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SingleItem */ "./components/SingleItem.tsx");



var Product = function Product(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SingleItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: props.query.id
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/product.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/product.tsx */"./pages/product.tsx");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=product.js.map