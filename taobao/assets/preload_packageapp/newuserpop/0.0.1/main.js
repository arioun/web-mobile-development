/******/ (function(modules) { // webpackBootstrap
/******/    // The module cache
/******/    var installedModules = {};
/******/
/******/    // The require function
/******/    function __webpack_require__(moduleId) {
/******/
/******/        // Check if module is in cache
/******/        if(installedModules[moduleId])
/******/            return installedModules[moduleId].exports;
/******/
/******/        // Create a new module (and put it into the cache)
/******/        var module = installedModules[moduleId] = {
/******/            exports: {},
/******/            id: moduleId,
/******/            loaded: false
/******/        };
/******/
/******/        // Execute the module function
/******/        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/        // Flag the module as loaded
/******/        module.loaded = true;
/******/
/******/        // Return the exports of the module
/******/        return module.exports;
/******/    }
/******/
/******/
/******/    // expose the modules object (__webpack_modules__)
/******/    __webpack_require__.m = modules;
/******/
/******/    // expose the module cache
/******/    __webpack_require__.c = installedModules;
/******/
/******/    // __webpack_public_path__
/******/    __webpack_require__.p = "../dist/";
/******/
/******/    // Load entry module and return exports
/******/    return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

    module.exports = __webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

    window.REM_UNIT = 75 // NEED CONFIG IN EACH PROJECT

    console.log(window.REM_UNIT, window.devicePixelRatio)

    addEventListener('DOMContentLoaded', function () {

      // var Vue = require('vue')
      window.onerror = function (msg,url,l) {
        //window.alert('msg:' + msg + ' url:' + url + 'line:' + l);
      };
      var opt = __webpack_require__(7)
      var app = new Vue(opt).$mount('#app')

      window.app = app
    })


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

    __webpack_require__(8)
    module.exports = __webpack_require__(12)

    if (module.exports.__esModule) module.exports = module.exports.default
    ;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(34)
    if (false) {(function () {  module.hot.accept()
      var hotAPI = require("vue-hot-reload-api")
      hotAPI.install(require("vue"), true)
      if (!hotAPI.compatible) return
      var id = "/Users/fanye/new-user/src/main.vue"
      if (!module.hot.data) {
        hotAPI.createRecord(id, module.exports)
      } else {
        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
      }
    })()}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag

    // load the styles
    var content = __webpack_require__(9);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(11)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2ef1a043&file=main.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue", function() {
                var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2ef1a043&file=main.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(10)();
    // imports


    // module
    exports.push([module.id, "html {\n  height: 100%;\n  background: rgba(0,0,0,0.7);\n}\n\nbody {\n  height: 100%;\n}\n\n#app-container {\n  //width: 10rem;\n  height: 100%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n\n#app {\n  line-height: 48px;\n  margin: 0 auto;\n}\n\n[data-dpr=\"1\"] #app {\n  font-size: 16px;\n}\n\n[data-dpr=\"2\"] #app {\n  font-size: 32px;\n}\n\n[data-dpr=\"3\"] #app {\n  font-size: 48px;\n}", ""]);

    // exports


/***/ },
/* 10 */
/***/ function(module, exports) {

    /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    module.exports = function() {
        var list = [];

        // return the list of modules as css string
        list.toString = function toString() {
            var result = [];
            for(var i = 0; i < this.length; i++) {
                var item = this[i];
                if(item[2]) {
                    result.push("@media " + item[2] + "{" + item[1] + "}");
                } else {
                    result.push(item[1]);
                }
            }
            return result.join("");
        };

        // import a list of modules into the list
        list.i = function(modules, mediaQuery) {
            if(typeof modules === "string")
                modules = [[null, modules, ""]];
            var alreadyImportedModules = {};
            for(var i = 0; i < this.length; i++) {
                var id = this[i][0];
                if(typeof id === "number")
                    alreadyImportedModules[id] = true;
            }
            for(i = 0; i < modules.length; i++) {
                var item = modules[i];
                // skip already imported module
                // this implementation is not 100% perfect for weird media query combinations
                //  when a module is imported multiple times with different media queries.
                //  I hope this will never occur (Hey this way we have smaller bundles)
                if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                    if(mediaQuery && !item[2]) {
                        item[2] = mediaQuery;
                    } else if(mediaQuery) {
                        item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                    }
                    list.push(item);
                }
            }
        };
        return list;
    };


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

    /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
    */
    var stylesInDom = {},
        memoize = function(fn) {
            var memo;
            return function () {
                if (typeof memo === "undefined") memo = fn.apply(this, arguments);
                return memo;
            };
        },
        isOldIE = memoize(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
        }),
        getHeadElement = memoize(function () {
            return document.head || document.getElementsByTagName("head")[0];
        }),
        singletonElement = null,
        singletonCounter = 0,
        styleElementsInsertedAtTop = [];

    module.exports = function(list, options) {
        if(false) {
            if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
        }

        options = options || {};
        // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page
        if (typeof options.singleton === "undefined") options.singleton = isOldIE();

        // By default, add <style> tags to the bottom of <head>.
        if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

        var styles = listToStyles(list);
        addStylesToDom(styles, options);

        return function update(newList) {
            var mayRemove = [];
            for(var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
                domStyle.refs--;
                mayRemove.push(domStyle);
            }
            if(newList) {
                var newStyles = listToStyles(newList);
                addStylesToDom(newStyles, options);
            }
            for(var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if(domStyle.refs === 0) {
                    for(var j = 0; j < domStyle.parts.length; j++)
                        domStyle.parts[j]();
                    delete stylesInDom[domStyle.id];
                }
            }
        };
    }

    function addStylesToDom(styles, options) {
        for(var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];
            if(domStyle) {
                domStyle.refs++;
                for(var j = 0; j < domStyle.parts.length; j++) {
                    domStyle.parts[j](item.parts[j]);
                }
                for(; j < item.parts.length; j++) {
                    domStyle.parts.push(addStyle(item.parts[j], options));
                }
            } else {
                var parts = [];
                for(var j = 0; j < item.parts.length; j++) {
                    parts.push(addStyle(item.parts[j], options));
                }
                stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
            }
        }
    }

    function listToStyles(list) {
        var styles = [];
        var newStyles = {};
        for(var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = item[0];
            var css = item[1];
            var media = item[2];
            var sourceMap = item[3];
            var part = {css: css, media: media, sourceMap: sourceMap};
            if(!newStyles[id])
                styles.push(newStyles[id] = {id: id, parts: [part]});
            else
                newStyles[id].parts.push(part);
        }
        return styles;
    }

    function insertStyleElement(options, styleElement) {
        var head = getHeadElement();
        var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
        if (options.insertAt === "top") {
            if(!lastStyleElementInsertedAtTop) {
                head.insertBefore(styleElement, head.firstChild);
            } else if(lastStyleElementInsertedAtTop.nextSibling) {
                head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
            } else {
                head.appendChild(styleElement);
            }
            styleElementsInsertedAtTop.push(styleElement);
        } else if (options.insertAt === "bottom") {
            head.appendChild(styleElement);
        } else {
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        }
    }

    function removeStyleElement(styleElement) {
        styleElement.parentNode.removeChild(styleElement);
        var idx = styleElementsInsertedAtTop.indexOf(styleElement);
        if(idx >= 0) {
            styleElementsInsertedAtTop.splice(idx, 1);
        }
    }

    function createStyleElement(options) {
        var styleElement = document.createElement("style");
        styleElement.type = "text/css";
        insertStyleElement(options, styleElement);
        return styleElement;
    }

    function createLinkElement(options) {
        var linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        insertStyleElement(options, linkElement);
        return linkElement;
    }

    function addStyle(obj, options) {
        var styleElement, update, remove;

        if (options.singleton) {
            var styleIndex = singletonCounter++;
            styleElement = singletonElement || (singletonElement = createStyleElement(options));
            update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
            remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
        } else if(obj.sourceMap &&
            typeof URL === "function" &&
            typeof URL.createObjectURL === "function" &&
            typeof URL.revokeObjectURL === "function" &&
            typeof Blob === "function" &&
            typeof btoa === "function") {
            styleElement = createLinkElement(options);
            update = updateLink.bind(null, styleElement);
            remove = function() {
                removeStyleElement(styleElement);
                if(styleElement.href)
                    URL.revokeObjectURL(styleElement.href);
            };
        } else {
            styleElement = createStyleElement(options);
            update = applyToTag.bind(null, styleElement);
            remove = function() {
                removeStyleElement(styleElement);
            };
        }

        update(obj);

        return function updateStyle(newObj) {
            if(newObj) {
                if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
                    return;
                update(obj = newObj);
            } else {
                remove();
            }
        };
    }

    var replaceText = (function () {
        var textStore = [];

        return function (index, replacement) {
            textStore[index] = replacement;
            return textStore.filter(Boolean).join('\n');
        };
    })();

    function applyToSingletonTag(styleElement, index, remove, obj) {
        var css = remove ? "" : obj.css;

        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = replaceText(index, css);
        } else {
            var cssNode = document.createTextNode(css);
            var childNodes = styleElement.childNodes;
            if (childNodes[index]) styleElement.removeChild(childNodes[index]);
            if (childNodes.length) {
                styleElement.insertBefore(cssNode, childNodes[index]);
            } else {
                styleElement.appendChild(cssNode);
            }
        }
    }

    function applyToTag(styleElement, obj) {
        var css = obj.css;
        var media = obj.media;

        if(media) {
            styleElement.setAttribute("media", media)
        }

        if(styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
        } else {
            while(styleElement.firstChild) {
                styleElement.removeChild(styleElement.firstChild);
            }
            styleElement.appendChild(document.createTextNode(css));
        }
    }

    function updateLink(linkElement, obj) {
        var css = obj.css;
        var sourceMap = obj.sourceMap;

        if(sourceMap) {
            // http://stackoverflow.com/a/26603875
            css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }

        var blob = new Blob([css], { type: "text/css" });

        var oldSrc = linkElement.href;

        linkElement.href = URL.createObjectURL(blob);

        if(oldSrc)
            URL.revokeObjectURL(oldSrc);
    }


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    // <style>
    //   html {
    //     height: 100%;
    //     background: rgba(0,0,0,0.7);
    //   }
    //   body {
    //     height: 100%;
    //   }

    //   #app-container {
    //     //width: 750px;
    //     height: 100%;
    //     margin: 0 auto;
    //     display: flex;
    //     justify-content: center;
    //     flex-direction: column;
    //   }

    //   #app {
    //     font-size: 32px; /*px*/
    //     line-height: 48px; /*no*/
    //     margin: 0 auto;
    //   }
    // </style>

    // <template>
    //   <div id="app-container">
    //     <pay v-if="type == 0"></pay>
    //     <phone v-if="type == 1"></phone>
    //     <def v-if="type == 2"></def>
    //     <guest v-if="type == 3"></guest>
    //   </div>
    // </template>

    // <script>
    var cdn = __webpack_require__(13);
    module.exports = {
      components: {
        'guest': __webpack_require__(14),
        'pay': __webpack_require__(19),
        'phone': __webpack_require__(24),
        'def': __webpack_require__(29)
      },
      data: {
        type: -1
      },
      computed: {},
      methods: {
        loadData: function loadData(data) {}
      },
      created: function created() {},
      ready: function ready() {
        var self = this;
        try {
          var url = new lib.httpurl(window.location.href);
          self.type = url.params.viewtype;
        } catch (err) {
          // 异常兜底
          self.type = 2;
        }
      }
    };
    // </script>

/***/ },
/* 13 */
/***/ function(module, exports) {

    ;(function (win, lib) {

      // Get file basename, borrowed from `browserify`
      var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      function splitPath(filename) {
        return splitPathRe.exec(filename).slice(1);
      }
      function basename(path, ext) {
        var f = splitPath(path)[2];
        if (ext && f.substr(-1 * ext.length) === ext) {
          f = f.substr(0, f.length - ext.length);
        }
        return f;
      }

      lib.cdnurl = function (path, pathMap) {
        var fileName = basename(path);
        pathMap = pathMap || win.CDN_URL;
        if (pathMap && pathMap[fileName]) {
          return pathMap[fileName];
        } else {
          return path;
        }
      }
    }) (window, window['lib'] || (window['lib'] = {}));

    module.exports = lib.cdnurl;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

    __webpack_require__(15)
    module.exports = __webpack_require__(17)

    if (module.exports.__esModule) module.exports = module.exports.default
    ;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(18)
    if (false) {(function () {  module.hot.accept()
      var hotAPI = require("vue-hot-reload-api")
      hotAPI.install(require("vue"), true)
      if (!hotAPI.compatible) return
      var id = "/Users/fanye/new-user/src/guest.vue"
      if (!module.hot.data) {
        hotAPI.createRecord(id, module.exports)
      } else {
        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
      }
    })()}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag

    // load the styles
    var content = __webpack_require__(16);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(11)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e82f5384&file=guest.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./guest.vue", function() {
                var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e82f5384&file=guest.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./guest.vue");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(10)();
    // imports


    // module
    exports.push([module.id, "#guest-container {\n  width: 7.933333rem;\n  height: 10rem;\n  margin: 0 auto;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n#guest-container .close-btn {\n  display: block;\n  width: 0.8rem;\n  height: 0.8rem;\n  margin-left: 6.533333rem;\n}\n\n#guest-container .btn {\n  display: block;\n  width: 3.666667rem;\n  height: 3.666667rem;\n  margin: 0 auto;\n  margin-top: 3.866667rem;\n  border-radius: 50%;\n}", ""]);

    // exports


/***/ },
/* 17 */
/***/ function(module, exports) {

    'use strict';

    // <template>
    //   <div id="guest-container" style="background-image: url('./images/new.png');" data-spm="4">
    //     <a href="#" v-on:click="close" class="close-btn"></a>
    //     <div v-on:click="onClick" class="btn"></div>
    //   </div>
    // </template>

    // <style>
    //   #guest-container {
    //     width: 595px;
    //     height: 750px;
    //     margin: 0 auto;
    //     background-repeat: no-repeat;
    //     background-size: 100%;
    //   }

    //   #guest-container .close-btn {
    //     display: block;
    //     width: 60px;
    //     height: 60px;
    //     margin-left: 490px;
    //   }

    //   #guest-container .btn {
    //     display: block;
    //     width: 275px;
    //     height: 275px;
    //     margin: 0 auto;
    //     margin-top: 290px;
    //     border-radius: 50%;
    //   }
    // </style>

    // <script>
    module.exports = {
      components: {},
      data: {},
      computed: {},
      methods: {
        close: function close(data) {},
        onClick: function onClick(data) {

          // 默认值
          var distUrl = 'https://h5.m.taobao.com/wt/m-cz-new/coupon/index.html?activityAlias=dtQWOyWA2E&clientSource=tb_newuser_h5&subSource=online_newuser_pop';
          // redirect
          try {
            var url = new lib.httpurl(window.location.href);
            if ('redirect' in url.params) {
              distUrl = url.params.redirect;
            }
          } catch (err) {}
          // 拼接spm
          try {
            var url = new lib.httpurl(distUrl);
            url.params.spm = g_SPM.spm(document.querySelector('#guest-container .btn'));
            distUrl = url.toString();
          } catch (e) {}
          // 跳转
          window.WindVane.call('HomePage', 'closeAnim', {
            data: {
              animType: 'fadeout',
              jumpUrl: distUrl
            }
          }, function (s) {
            // do something when success;
          }, function (e) {
            // do something when failed;
          });
        }
      },
      created: function created() {},
      ready: function ready() {
        var fun = function fun() {
          window.goldlog ? goldlog.record('/newvip.20.16', '', '', 'H46807200') : setTimeout(fun, 200);
        };
        fun();
      }
    };
    // </script>

/***/ },
/* 18 */
/***/ function(module, exports) {

    module.exports = "<div id=\"guest-container\" style=\"background-image: url('./images/new.png');\" data-spm=\"4\">\n    <a href=\"#\" v-on:click=\"close\" class=\"close-btn\"></a>\n    <div v-on:click=\"onClick\" class=\"btn\"></div>\n  </div>";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

    __webpack_require__(20)
    module.exports = __webpack_require__(22)

    if (module.exports.__esModule) module.exports = module.exports.default
    ;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(23)
    if (false) {(function () {  module.hot.accept()
      var hotAPI = require("vue-hot-reload-api")
      hotAPI.install(require("vue"), true)
      if (!hotAPI.compatible) return
      var id = "/Users/fanye/new-user/src/pay.vue"
      if (!module.hot.data) {
        hotAPI.createRecord(id, module.exports)
      } else {
        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
      }
    })()}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag

    // load the styles
    var content = __webpack_require__(21);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(11)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7bf7e6e4&file=pay.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pay.vue", function() {
                var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7bf7e6e4&file=pay.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pay.vue");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(10)();
    // imports


    // module
    exports.push([module.id, "#pay-container {\n  width: 7.933333rem;\n  height: 10rem;\n  margin: 0 auto;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n#pay-container .close-btn {\n  display: block;\n  width: 0.8rem;\n  height: 0.8rem;\n  margin-left: 6.64rem;\n  margin-top: 0.186667rem;\n}\n\n#pay-container .btn {\n  display: block;\n  width: 3.666667rem;\n  height: 3.666667rem;\n  margin: 0 auto;\n  margin-top: 3.173333rem;\n  border-radius: 50%;\n}", ""]);

    // exports


/***/ },
/* 22 */
/***/ function(module, exports) {

    'use strict';

    // <template>
    //   <div id="pay-container" style="background-image: url('./images/pay.png');" data-spm="1">
    //      <a href="#" v-on:click="close" class="close-btn"></a>
    //     <div v-on:click="onClick" class="btn"></div>
    //   </div>
    // </template>

    // <style>
    //   #pay-container {
    //      width: 595px;
    //     height: 750px;
    //     margin: 0 auto;
    //     background-repeat: no-repeat;
    //     background-size: 100%;
    //   }

    //   #pay-container .close-btn {
    //     display: block;
    //     width: 60px;
    //     height: 60px;
    //     margin-left: 498px;
    //     margin-top: 14px;
    //   }

    //   #pay-container .btn {
    //     display: block;
    //     width: 275px;
    //     height: 275px;
    //     margin: 0 auto;
    //     margin-top: 238px;
    //     border-radius: 50%;
    //   }

    // </style>

    // <script>
    module.exports = {
      components: {},
      data: {},
      computed: {},
      methods: {
        close: function close(data) {},
        onClick: function onClick(data) {

          var fun = function fun() {
            window.goldlog ? goldlog.record('/newvip.20.20', '', '', 'H46807173') : setTimeout(fun, 200);
          };
          fun();

          setTimeout(function () {
            // 默认值
            var distUrl = 'https://ds.alipay.com/fd-ilagr56a/index.html';
            // redirect
            try {
              var url = new lib.httpurl(window.location.href);
              if ('redirect' in url.params) {
                distUrl = url.params.redirect;
              }
            } catch (err) {}
            // 跳转
            window.WindVane.call('HomePage', 'closeAnim', {
              data: {
                animType: 'fadeout',
                jumpUrl: distUrl
              }
            }, function (s) {
              // do something when success;
            }, function (e) {
              // do something when failed;
            });
          }, 300);
        }
      },
      created: function created() {},
      ready: function ready() {
        var fun = function fun() {
          window.goldlog ? goldlog.record('/newvip.20.17', '', '', 'H46807201') : setTimeout(fun, 200);
        };
        fun();
      }
    };
    // </script>

/***/ },
/* 23 */
/***/ function(module, exports) {

    module.exports = "<div id=\"pay-container\" style=\"background-image: url('./images/pay.png');\" data-spm=\"1\">\n  \t<a href=\"#\" v-on:click=\"close\" class=\"close-btn\"></a>\n    <div v-on:click=\"onClick\" class=\"btn\"></div>\n  </div>";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

    __webpack_require__(25)
    module.exports = __webpack_require__(27)

    if (module.exports.__esModule) module.exports = module.exports.default
    ;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(28)
    if (false) {(function () {  module.hot.accept()
      var hotAPI = require("vue-hot-reload-api")
      hotAPI.install(require("vue"), true)
      if (!hotAPI.compatible) return
      var id = "/Users/fanye/new-user/src/phone.vue"
      if (!module.hot.data) {
        hotAPI.createRecord(id, module.exports)
      } else {
        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
      }
    })()}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag

    // load the styles
    var content = __webpack_require__(26);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(11)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f8f8aa58&file=phone.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./phone.vue", function() {
                var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f8f8aa58&file=phone.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./phone.vue");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(10)();
    // imports


    // module
    exports.push([module.id, "#phone-container {\n  width: 7.933333rem;\n  height: 10rem;\n  margin: 0 auto;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n#phone-container .close-btn {\n  display: block;\n  width: 0.8rem;\n  height: 0.8rem;\n  margin-left: 6.826667rem;\n  margin-top: 0.16rem;\n}\n\n#phone-container .btn {\n  display: block;\n  width: 3.666667rem;\n  height: 3.666667rem;\n  margin: 0 auto;\n  margin-top: 3.2rem;\n  border-radius: 50%;\n}", ""]);

    // exports


/***/ },
/* 27 */
/***/ function(module, exports) {

    'use strict';

    // <template>
    //   <div id="phone-container" style="background-image: url('./images/phone.png');" data-spm="2">
    //     <a href="#" v-on:click="close" class="close-btn"></a>
    //     <div v-on:click="onClick" class="btn"></div>
    //   </div>
    // </template>

    // <style>
    //   #phone-container {
    //     width: 595px;
    //     height: 750px;
    //     margin: 0 auto;
    //     background-repeat: no-repeat;
    //     background-size: 100%;
    //   }

    //   #phone-container .close-btn {
    //     display: block;
    //     width: 60px;
    //     height: 60px;
    //     margin-left: 512px;
    //     margin-top: 12px;
    //   }

    //   #phone-container .btn {
    //     display: block;
    //     width: 275px;
    //     height: 275px;
    //     margin: 0 auto;
    //     margin-top: 240px;
    //     border-radius: 50%;
    //   }

    // </style>

    // <script>
    module.exports = {
      components: {},
      data: {},
      computed: {},
      methods: {
        close: function close(data) {},
        onClick: function onClick(data) {
          // 默认值
          var distUrl = 'http://h5.m.taobao.com/wt/act/cz/laxin-taobao.html?clientSource=stlx_1';
          // redirect
          try {
            var url = new lib.httpurl(window.location.href);
            if ('redirect' in url.params) {
              distUrl = url.params.redirect;
            }
          } catch (err) {}
          // 拼接spm
          try {
            var url = new lib.httpurl(distUrl);
            url.params.spm = g_SPM.spm(document.querySelector('#phone-container .btn'));
            distUrl = url.toString();
          } catch (e) {}
          // 跳转
          window.WindVane.call('HomePage', 'closeAnim', {
            data: {
              animType: 'fadeout',
              jumpUrl: distUrl
            }
          }, function (s) {
            // do something when success;
          }, function (e) {
            // do something when failed;
          });
        }
      },
      created: function created() {},
      ready: function ready() {
        var fun = function fun() {
          window.goldlog ? goldlog.record('/newvip.20.18', '', '', 'H46807202') : setTimeout(fun, 200);
        };
        fun();
      }
    };
    // </script>

/***/ },
/* 28 */
/***/ function(module, exports) {

    module.exports = "<div id=\"phone-container\" style=\"background-image: url('./images/phone.png');\" data-spm=\"2\">\n    <a href=\"#\" v-on:click=\"close\" class=\"close-btn\"></a>\n    <div v-on:click=\"onClick\" class=\"btn\"></div>\n  </div>";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

    __webpack_require__(30)
    module.exports = __webpack_require__(32)

    if (module.exports.__esModule) module.exports = module.exports.default
    ;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(33)
    if (false) {(function () {  module.hot.accept()
      var hotAPI = require("vue-hot-reload-api")
      hotAPI.install(require("vue"), true)
      if (!hotAPI.compatible) return
      var id = "/Users/fanye/new-user/src/def.vue"
      if (!module.hot.data) {
        hotAPI.createRecord(id, module.exports)
      } else {
        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
      }
    })()}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag

    // load the styles
    var content = __webpack_require__(31);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(11)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4d00e96b&file=def.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./def.vue", function() {
                var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4d00e96b&file=def.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./def.vue");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(10)();
    // imports


    // module
    exports.push([module.id, "#def-container {\n  width: 7.933333rem;\n  height: 10rem;\n  margin: 0 auto;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n#def-container .close-btn {\n  display: block;\n  width: 0.8rem;\n  height: 0.8rem;\n  margin-left: 6.533333rem;\n}\n\n#def-container .btn {\n  display: block;\n  width: 3.666667rem;\n  height: 3.666667rem;\n  margin: 0 auto;\n  margin-top: 3.866667rem;\n  border-radius: 50%;\n}", ""]);

    // exports


/***/ },
/* 32 */
/***/ function(module, exports) {

    'use strict';

    // <template>
    //   <div id="def-container" style="background-image: url('./images/1fen.png');" data-spm="3">
    //      <a href="#" v-on:click="close" class="close-btn"></a>
    //     <div v-on:click="onClick" class="btn"></div>
    //   </div>
    // </template>

    // <style>
    //   #def-container {
    //     width: 595px;
    //     height: 750px;
    //     margin: 0 auto;
    //     background-repeat: no-repeat;
    //     background-size: 100%;
    //   }

    //   #def-container .close-btn {
    //     display: block;
    //     width: 60px;
    //     height: 60px;
    //     margin-left: 490px;
    //   }

    //   #def-container .btn {
    //     display: block;
    //     width: 275px;
    //     height: 275px;
    //     margin: 0 auto;
    //     margin-top: 290px;
    //     border-radius: 50%;
    //   }
    // </style>

    // <script>
    module.exports = {
      components: {},
      data: {},
      computed: {},
      methods: {
        close: function close(data) {},
        onClick: function onClick(data) {
          // 默认值
          var distUrl = 'https://h5.m.taobao.com/scan/v3/newbpage.html';
          // redirect
          try {
            var url = new lib.httpurl(window.location.href);
            if ('redirect' in url.params) {
              distUrl = url.params.redirect;
            }
          } catch (err) {}
          // 拼接spm
          try {
            var url = new lib.httpurl(distUrl);
            url.params.spm = g_SPM.spm(document.querySelector('#def-container .btn'));
            distUrl = url.toString();
          } catch (e) {}
          // 跳转
          window.WindVane.call('HomePage', 'closeAnim', {
            data: {
              animType: 'fadeout',
              jumpUrl: distUrl
            }
          }, function (s) {
            // do something when success;
          }, function (e) {
            // do something when failed;
          });
        }
      },
      created: function created() {},
      ready: function ready() {
        var fun = function fun() {
          window.goldlog ? goldlog.record('/newvip.20.19', '', '', 'H46807203') : setTimeout(fun, 200);
        };
        fun();
      }
    };
    // </script>

/***/ },
/* 33 */
/***/ function(module, exports) {

    module.exports = "<div id=\"def-container\" style=\"background-image: url('./images/1fen.png');\" data-spm=\"3\">\n  \t<a href=\"#\" v-on:click=\"close\" class=\"close-btn\"></a>\n    <div v-on:click=\"onClick\" class=\"btn\"></div>\n  </div>";

/***/ },
/* 34 */
/***/ function(module, exports) {

    module.exports = "<div id=\"app-container\">\n    <pay v-if=\"type == 0\"></pay>\n    <phone v-if=\"type == 1\"></phone>\n    <def v-if=\"type == 2\"></def>\n    <guest v-if=\"type == 3\"></guest>\n  </div>";

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map