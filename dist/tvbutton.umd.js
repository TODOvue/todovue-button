(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tvbutton"] = factory(require("vue"));
	else
		root["tvbutton"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 301:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(481);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(400);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@600&family=Lato:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*[data-v-56bf52fe]{box-sizing:border-box;margin:0;padding:0}.tv-icon-account[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Faccount.svg?alt=media&token=0c85e01b-b840-487d-abea-be9a641e4480)}.tv-icon-alert[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Falert.svg?alt=media&token=d7f899d9-6c89-451e-abc1-2eacd9f7306a)}.tv-icon-arrow-down[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Farrow-down.svg?alt=media&token=4021c6b4-b71d-42d0-bf58-0b643da9e58f)}.tv-icon-arrow-left[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Farrow-left.svg?alt=media&token=fd702c4f-9b00-4edf-88f6-7a53306f1884)}.tv-icon-arrow-right[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Farrow-right.svg?alt=media&token=6ae5f38c-bfb2-476e-887c-3b57e2758fca)}.tv-icon-arrow-up[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Farrow-up.svg?alt=media&token=82a32e0b-1fba-49ba-ace6-1fb153984dee)}.tv-icon-cancel[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fcancel.svg?alt=media&token=d6409978-0540-483d-8ee7-4d2ea64529ba)}.tv-icon-cancel-light[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fcancel-light.svg?alt=media&token=89913bdb-00ea-4296-a341-6de501ccec15)}.tv-icon-edit[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fedit.svg?alt=media&token=088cf30d-9945-46f8-bf27-650287dba73a)}.tv-icon-dark[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fdark.svg?alt=media&token=4675b6ef-d85a-4989-b3ea-dd76755cfc56)}.tv-icon-favorite[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Ffavorite.svg?alt=media&token=38136d70-105e-42f8-8cbe-44cd36eb5705)}.tv-icon-help[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fhelp.svg?alt=media&token=7781a3fe-7c6a-4634-be11-2e066c0ccf7d)}.tv-icon-light[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Flight.svg?alt=media&token=4b6485a2-6853-41b7-89a1-17c466947f59)}.tv-icon-menu[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fmenu.svg?alt=media&token=0f0b18c3-5bd6-40ee-95ee-5492347d7ae7)}.tv-icon-menu-light[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fmenu-light.svg?alt=media&token=9faaaec2-e2fd-4689-9723-1b1901fb42a3)}.tv-icon-minus[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fminus.svg?alt=media&token=99f03afc-6307-45d9-bd64-0036462ae06e)}.tv-icon-plus[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fplus.svg?alt=media&token=4f7912a2-4508-45b0-ab28-c301cfaa701f)}.tv-icon-remove[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fremove.svg?alt=media&token=d1b5c767-0a7b-4aad-bc0e-140fbf55a6c2)}.tv-icon-search[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fsearch.svg?alt=media&token=a3ebec80-8cfe-4ea5-b8ab-defa440c9a23)}.tv-icon-search-light[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fsearch-light.svg?alt=media&token=398b1f34-9376-4aa3-86ed-cfd040bf080b)}.tv-icon-settings[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fsettings.svg?alt=media&token=be7070c0-6cb1-4bd0-8932-4e6d208c9768)}.tv-icon-share[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fshare.svg?alt=media&token=0762b95f-0520-4cf4-98ca-fe3a76f6d0f8)}.tv-icon-star[data-v-56bf52fe]{background-image:url(https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/icons%2Fstar.svg?alt=media&token=f41c443e-1b89-4733-b766-1c7f82a8ff8a)}.tv-icon[data-v-56bf52fe]{height:18px;width:18px;background-position:50%;background-repeat:no-repeat;background-size:cover}.tv-icon-position-left[data-v-56bf52fe]{float:left;margin-right:8px}.tv-icon-position-right[data-v-56bf52fe]{float:right;margin-left:8px}.tv-btn[data-v-56bf52fe]{border:none;cursor:pointer;display:inline-block;font-size:14px;min-width:110px;padding:.8rem 1.2rem;transition:all .1s ease-out;width:auto}.tv-btn i.tv-btn-icon[data-v-56bf52fe]{height:18px;width:18px;background-position:50%;background-repeat:no-repeat;background-size:cover}.tv-btn.tv-btn-full[data-v-56bf52fe]{width:100%}.tv-btn.tv-btn-rounded[data-v-56bf52fe]{border-radius:10px}.tv-btn.tv-btn-small[data-v-56bf52fe]{font-size:10px;min-width:80px;padding:.7rem .5rem;white-space:nowrap;width:auto}.tv-btn.tv-btn-large[data-v-56bf52fe]{font-size:16px;min-width:180px;padding:1rem 1.5rem;white-space:nowrap;width:auto}.tv-btn.tv-btn[data-v-56bf52fe]{background-color:#ef233c;color:#f4faff;box-shadow:0 0 5px #ef233c}.tv-btn.tv-btn[data-v-56bf52fe]:hover{background-color:#d00f27;box-shadow:none}.tv-btn.tv-btn[data-v-56bf52fe]:active{background-color:#b80d22;box-shadow:none;transform:perspective(1px) scale(.95)}.tv-btn.tv-btn.tv-btn-outlined[data-v-56bf52fe]{background-color:transparent;color:#ef233c;border:1px solid #ef233c}.tv-btn.tv-btn.tv-btn-outlined[data-v-56bf52fe]:hover{background-color:#ef233c;color:#f4faff}.tv-btn.tv-btn.tv-btn-outlined.tv-btn-disabled[data-v-56bf52fe]:hover,.tv-btn.tv-btn.tv-btn-text[data-v-56bf52fe]{background-color:transparent;color:#ef233c}.tv-btn.tv-btn.tv-btn-text[data-v-56bf52fe]{border:none;box-shadow:none}.tv-btn.tv-btn.tv-btn-text[data-v-56bf52fe]:hover{background-color:transparent;color:#d00f27}.tv-btn.tv-btn.tv-btn-text[data-v-56bf52fe]:active{background-color:transparent;color:#b80d22;transform:none}.tv-btn.tv-btn.tv-btn-disabled[data-v-56bf52fe]{background-color:#ef233c;color:#f4faff;box-shadow:none;cursor:not-allowed;opacity:.5;transform:none}.tv-btn.tv-btn-success[data-v-56bf52fe]{background-color:#00600f;color:#f1f9f9;box-shadow:0 0 5px #00600f}.tv-btn.tv-btn-success[data-v-56bf52fe]:hover{background-color:#002d07;box-shadow:none}.tv-btn.tv-btn-success[data-v-56bf52fe]:active{background-color:#001403;box-shadow:none;transform:perspective(1px) scale(.95)}.tv-btn.tv-btn-success.tv-btn-outlined[data-v-56bf52fe]{background-color:transparent;color:#00600f;border:1px solid #00600f}.tv-btn.tv-btn-success.tv-btn-outlined[data-v-56bf52fe]:hover{background-color:#00600f;color:#f1f9f9}.tv-btn.tv-btn-success.tv-btn-outlined.tv-btn-disabled[data-v-56bf52fe]:hover,.tv-btn.tv-btn-success.tv-btn-text[data-v-56bf52fe]{background-color:transparent;color:#00600f}.tv-btn.tv-btn-success.tv-btn-text[data-v-56bf52fe]{border:none;box-shadow:none}.tv-btn.tv-btn-success.tv-btn-text[data-v-56bf52fe]:hover{background-color:transparent;color:#002d07}.tv-btn.tv-btn-success.tv-btn-text[data-v-56bf52fe]:active{background-color:transparent;color:#001403;transform:none}.tv-btn.tv-btn-success.tv-btn-disabled[data-v-56bf52fe]{background-color:#00600f;color:#f1f9f9;box-shadow:none;cursor:not-allowed;opacity:.5;transform:none}.tv-btn.tv-btn-error[data-v-56bf52fe]{background-color:#ff0020;color:#f1f9f9;box-shadow:0 0 5px #ff0020}.tv-btn.tv-btn-error[data-v-56bf52fe]:hover{background-color:#cc001a;box-shadow:none}.tv-btn.tv-btn-error[data-v-56bf52fe]:active{background-color:#b30016;box-shadow:none;transform:perspective(1px) scale(.95)}.tv-btn.tv-btn-error.tv-btn-outlined[data-v-56bf52fe]{background-color:transparent;color:#ff0020;border:1px solid #ff0020}.tv-btn.tv-btn-error.tv-btn-outlined[data-v-56bf52fe]:hover{background-color:#ff0020;color:#f1f9f9}.tv-btn.tv-btn-error.tv-btn-outlined.tv-btn-disabled[data-v-56bf52fe]:hover,.tv-btn.tv-btn-error.tv-btn-text[data-v-56bf52fe]{background-color:transparent;color:#ff0020}.tv-btn.tv-btn-error.tv-btn-text[data-v-56bf52fe]{border:none;box-shadow:none}.tv-btn.tv-btn-error.tv-btn-text[data-v-56bf52fe]:hover{background-color:transparent;color:#cc001a}.tv-btn.tv-btn-error.tv-btn-text[data-v-56bf52fe]:active{background-color:transparent;color:#b30016;transform:none}.tv-btn.tv-btn-error.tv-btn-disabled[data-v-56bf52fe]{background-color:#ff0020;color:#f1f9f9;box-shadow:none;cursor:not-allowed;opacity:.5;transform:none}.tv-btn.tv-btn-warning[data-v-56bf52fe]{background-color:#f2c94c;color:#f1f9f9;box-shadow:0 0 5px #f2c94c}.tv-btn.tv-btn-warning[data-v-56bf52fe]:hover{background-color:#efbb1c;box-shadow:none}.tv-btn.tv-btn-warning[data-v-56bf52fe]:active{background-color:#e1ae10;box-shadow:none;transform:perspective(1px) scale(.95)}.tv-btn.tv-btn-warning.tv-btn-outlined[data-v-56bf52fe]{background-color:transparent;color:#f2c94c;border:1px solid #f2c94c}.tv-btn.tv-btn-warning.tv-btn-outlined[data-v-56bf52fe]:hover{background-color:#f2c94c;color:#f1f9f9}.tv-btn.tv-btn-warning.tv-btn-outlined.tv-btn-disabled[data-v-56bf52fe]:hover,.tv-btn.tv-btn-warning.tv-btn-text[data-v-56bf52fe]{background-color:transparent;color:#f2c94c}.tv-btn.tv-btn-warning.tv-btn-text[data-v-56bf52fe]{border:none;box-shadow:none}.tv-btn.tv-btn-warning.tv-btn-text[data-v-56bf52fe]:hover{background-color:transparent;color:#efbb1c}.tv-btn.tv-btn-warning.tv-btn-text[data-v-56bf52fe]:active{background-color:transparent;color:#e1ae10;transform:none}.tv-btn.tv-btn-warning.tv-btn-disabled[data-v-56bf52fe]{background-color:#f2c94c;color:#f1f9f9;box-shadow:none;cursor:not-allowed;opacity:.5;transform:none}.tv-btn.tv-btn-info[data-v-56bf52fe]{background-color:#2f80ed;color:#f1f9f9;box-shadow:0 0 5px #2f80ed}.tv-btn.tv-btn-info[data-v-56bf52fe]:hover{background-color:#1366d6;box-shadow:none}.tv-btn.tv-btn-info[data-v-56bf52fe]:active{background-color:#115bbf;box-shadow:none;transform:perspective(1px) scale(.95)}.tv-btn.tv-btn-info.tv-btn-outlined[data-v-56bf52fe]{background-color:transparent;color:#2f80ed;border:1px solid #2f80ed}.tv-btn.tv-btn-info.tv-btn-outlined[data-v-56bf52fe]:hover{background-color:#2f80ed;color:#f1f9f9}.tv-btn.tv-btn-info.tv-btn-outlined.tv-btn-disabled[data-v-56bf52fe]:hover,.tv-btn.tv-btn-info.tv-btn-text[data-v-56bf52fe]{background-color:transparent;color:#2f80ed}.tv-btn.tv-btn-info.tv-btn-text[data-v-56bf52fe]{border:none;box-shadow:none}.tv-btn.tv-btn-info.tv-btn-text[data-v-56bf52fe]:hover{background-color:transparent;color:#1366d6}.tv-btn.tv-btn-info.tv-btn-text[data-v-56bf52fe]:active{background-color:transparent;color:#115bbf;transform:none}.tv-btn.tv-btn-info.tv-btn-disabled[data-v-56bf52fe]{background-color:#2f80ed;color:#f1f9f9;box-shadow:none;cursor:not-allowed;opacity:.5;transform:none}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 400:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 481:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 343:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(546);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(43)/* ["default"] */ .Z)
var update = add("2eb8b175", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 43:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ addStylesClient; }
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
}
;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 203:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvButton.vue?vue&type=template&id=56bf52fe&scoped=true

const _withScopeId = n => (_pushScopeId("data-v-56bf52fe"), n = n(), _popScopeId(), n);
const _hoisted_1 = ["disabled", "role", "type"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("button", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)([$setup.buttonClasses, "tv-btn"]),
    disabled: $props.isDisabled,
    onClick: _cache[0] || (_cache[0] = function () {
      return $setup.handleClick && $setup.handleClick(...arguments);
    }),
    onMouseleave: _cache[1] || (_cache[1] = $event => $setup.manageHover(false)),
    onMouseover: _cache[2] || (_cache[2] = $event => $setup.manageHover(true)),
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)([$setup.buttonStyleCustom.backgroundColor, $setup.buttonStyleCustom.color, $setup.isHover ? $setup.buttonStyleHover : '']),
    role: $props.type,
    type: $props.type
  }, [$props.icon ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("i", {
    key: 0,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["tv-btn-icon", `tv-icon-${$props.icon} tv-icon-position-${$props.iconPosition}`])
  }, null, 2)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $props.buttonText ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
    key: 1
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.buttonText), 1)], 64)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default", {
    key: 2
  }, undefined, true)], 46, _hoisted_1);
}
;// CONCATENATED MODULE: ./src/component/TvButton.vue?vue&type=template&id=56bf52fe&scoped=true

;// CONCATENATED MODULE: ./src/composable/useButton.js

const useButton = props => {
  const instance = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.getCurrentInstance)();
  const isHover = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
  const handleClick = () => {
    instance.emit("clickButton", {});
  };
  const manageHover = value => {
    isHover.value = value;
  };
  const _getDarkerColor = colorHex => {
    if (!colorHex) return;
    if (colorHex[0] === "#") {
      const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorHex);
      let r = parseInt(rgb[1], 16);
      let g = parseInt(rgb[2], 16);
      let b = parseInt(rgb[3], 16);
      r = Math.floor(r * 0.9);
      g = Math.floor(g * 0.9);
      b = Math.floor(b * 0.9);
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }
    return colorHex;
  };
  const buttonClasses = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
    return {
      "tv-btn-rounded": props.isRounded,
      "tv-btn-full": props.isFull,
      "tv-btn-outlined": props.isOutlined,
      "tv-btn-small": props.isSmall,
      "tv-btn-large": props.isLarge,
      "tv-btn-success": props.isSuccess,
      "tv-btn-info": props.isInfo,
      "tv-btn-warning": props.isWarning,
      "tv-btn-error": props.isError,
      "tv-btn-disabled": props.isDisabled,
      "tv-btn-text": props.isText
    };
  });
  const buttonStyleCustom = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
    if (!props.customStyle) {
      return {};
    }
    if (props.isOutlined) {
      return {
        backgroundColor: {
          backgroundColor: "transparent",
          boxShadow: `0 0 5px ${props.customStyle?.backgroundColor}`,
          border: `1px solid ${props.customStyle?.backgroundColor}`
        },
        color: {
          color: props.customStyle?.backgroundColor
        }
      };
    }
    return {
      backgroundColor: {
        backgroundColor: props.customStyle?.backgroundColor,
        boxShadow: `0 0 5px ${props.customStyle?.backgroundColor}`
      },
      color: {
        color: props.customStyle?.color
      }
    };
  });
  const buttonStyleHover = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
    if (!props.customStyle) {
      return {};
    }
    if (props.isOutlined) {
      return {
        backgroundColor: props.customStyle?.backgroundColor,
        color: props.customStyle?.color
      };
    }
    return {
      backgroundColor: _getDarkerColor(props.customStyle?.backgroundColor),
      boxShadow: "none"
    };
  });
  return {
    isHover,
    handleClick,
    manageHover,
    buttonClasses,
    buttonStyleCustom,
    buttonStyleHover
  };
};
/* harmony default export */ var composable_useButton = (useButton);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvButton.vue?vue&type=script&lang=js

/* harmony default export */ var TvButtonvue_type_script_lang_js = ({
  name: "TvButton",
  props: {
    isRounded: {
      type: Boolean,
      default: false
    },
    isFull: {
      type: Boolean,
      default: false
    },
    isOutlined: {
      type: Boolean,
      default: false
    },
    isSmall: {
      type: Boolean,
      default: false
    },
    isLarge: {
      type: Boolean,
      default: false
    },
    isSuccess: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    isInfo: {
      type: Boolean,
      default: false
    },
    isWarning: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isCircle: {
      type: Boolean,
      default: false
    },
    isText: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: ""
    },
    iconPosition: {
      type: String,
      default: "right"
    },
    customStyle: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String,
      default: "button"
    }
  },
  setup(props) {
    const {
      isHover,
      handleClick,
      manageHover,
      buttonClasses,
      buttonStyleCustom,
      buttonStyleHover
    } = composable_useButton(props);
    return {
      isHover,
      handleClick,
      manageHover,
      buttonClasses,
      buttonStyleCustom,
      buttonStyleHover
    };
  },
  emits: ["clickButton"]
});
;// CONCATENATED MODULE: ./src/component/TvButton.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-64.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[4]!./src/assets/scss/style.scss?vue&type=style&index=0&id=56bf52fe&scoped=true&lang=scss
var stylevue_type_style_index_0_id_56bf52fe_scoped_true_lang_scss = __webpack_require__(343);
;// CONCATENATED MODULE: ./src/assets/scss/style.scss?vue&type=style&index=0&id=56bf52fe&scoped=true&lang=scss

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(301);
;// CONCATENATED MODULE: ./src/component/TvButton.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TvButtonvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-56bf52fe"]])

/* harmony default export */ var TvButton = (__exports__);
;// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src_0 = (TvButton);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=tvbutton.umd.js.map