// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slides = void 0;
var slides = [{
  text: "I am a software engineer with 7 years of experience",
  image: "data:image/jpeg;base64,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",
  name: "Hermione Granger",
  designation: "Senior Specialist at Education Sector"
}, {
  text: "I am an electrical engineer with 7 years of experience",
  image: "data:image/jpeg;base64,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",
  name: "Harry Poter",
  designation: "Senior Specialist at Electrical Sector"
}, {
  text: "I am a civil engineer with 7 years of experience",
  image: "data:image/jpeg;base64,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",
  name: "Spiderman",
  designation: "Senior Specialist at Construction Sector"
}];
exports.slides = slides;
},{}],"src/components.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = Circle;
exports.Slide = Slide;
exports.SlideShow = SlideShow;
function Slide(_ref) {
  var text = _ref.text,
    image = _ref.image,
    name = _ref.name,
    designation = _ref.designation;
  var el = document.createElement("template");
  el.innerHTML = "\n  <div class=\"slide bg-aqua\">\n    <p class=\"text\">\n      ".concat(text, "\n    </p>\n    <img\n      class=\"profile\"\n      src=\"").concat(image, "\"\n    />\n    <h4 class=\"name\">").concat(name, "</h4> \n    <h4 class=\"designation\">").concat(designation, "</h4>\n    <Button class=\"view-cv\">View CV Sample</Botton>\n  </div>\n  ").trim();
  return el.content.firstChild;
}
function Circle() {
  var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var el = document.createElement("span");
  el.className = "circle ".concat(active ? "active" : "");
  return el;
}
function SlideShow() {
  var el = document.createElement("template");
  el.innerHTML = "\n    <div class=\"slide-show\">\n      <div class=\"slide-show-container\">\n        <div class=\"arrow left\"><</div>\n        <div class=\"arrow right\">></div>\n        <div class=\"slides\"></div>\n      </div>\n      <div class=\"pagination\" />\n    </div>\n  ".trim();
  return el.content.firstChild;
}
},{}],"src/slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;
var _components = require("./components");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Slider = /*#__PURE__*/function () {
  function Slider(data) {
    _classCallCheck(this, Slider);
    this.data = data;
    this.init();
  }
  _createClass(Slider, [{
    key: "init",
    value: function init() {
      this.slider = new _components.SlideShow();
      var app = document.querySelector("#app");
      app.appendChild(this.slider);
      this.getDomObjects();
      this.initProps();
      this.addSlides();
      this.addEvents();
      this.resetTimer();
    }
  }, {
    key: "initProps",
    value: function initProps() {
      this.activeSlide = 0;
      this.slides = [];
      this.circles = [];
    }
  }, {
    key: "getDomObjects",
    value: function getDomObjects() {
      this.slidesDomObject = this.slider.querySelector(".slides");
      this.paginationDomObject = this.slider.querySelector(".pagination");
      this.leftDomObject = this.slider.querySelector(".left");
      this.rightDomObject = this.slider.querySelector(".right");
    }
  }, {
    key: "addSlides",
    value: function addSlides() {
      var _this = this;
      this.data.forEach(function (s, index) {
        _this.slides.push(new _components.Slide(s));
        _this.circles.push(new _components.Circle(index === _this.activeSlide));
        _this.slidesDomObject.appendChild(_this.slides[index]);
        _this.paginationDomObject.appendChild(_this.circles[index]);
      });
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this2 = this;
      this.leftDomObject.addEventListener("click", function () {
        _this2.moveLeft();
        _this2.resetTimer();
      });
      this.rightDomObject.addEventListener("click", function () {
        _this2.moveRight();
        _this2.resetTimer();
      });
      this.circles.forEach(function (circle, index) {
        circle.addEventListener("click", function () {
          _this2.move(index);
          _this2.resetTimer();
        });
      });
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.move(this.activeSlide > 0 ? this.activeSlide - 1 : this.slides.length - 1);
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.move(this.activeSlide < this.slides.length - 1 ? this.activeSlide + 1 : 0);
    }
  }, {
    key: "move",
    value: function move(index) {
      this.circles[this.activeSlide].className = "circle";
      this.activeSlide = index;
      this.circles[this.activeSlide].className = "circle active";
      this.slidesDomObject.style.left = "".concat(this.activeSlide * -100, "vw");
    }
  }, {
    key: "timer",
    value: function timer() {
      var _this3 = this;
      this.interval = setInterval(function () {
        _this3.moveRight();
      }, 3000);
    }
  }, {
    key: "resetTimer",
    value: function resetTimer() {
      clearInterval(this.interval);
      this.timer();
    }
  }]);
  return Slider;
}();
exports.Slider = Slider;
},{"./components":"src/components.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _data = require("./data");
var _slider = require("./slider");
new _slider.Slider(_data.slides);
},{"./data":"src/data.js","./slider":"src/slider.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43321" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map