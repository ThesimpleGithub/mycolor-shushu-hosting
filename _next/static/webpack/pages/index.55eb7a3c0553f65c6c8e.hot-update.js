self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/VideoCanvas.tsx":
/*!************************************!*\
  !*** ./components/VideoCanvas.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _tensorflow_tfjs_backend_webgl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tensorflow/tfjs-backend-webgl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/index.js");
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_drawFaceLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/drawFaceLine */ "./utils/drawFaceLine.ts");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/theme */ "./utils/theme.ts");
/* harmony import */ var _home_Portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/Portal */ "./components/home/Portal.tsx");
/* harmony import */ var _home_ML_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/ML_Loading */ "./components/home/ML_Loading.tsx");
/* harmony import */ var _home_ProgressBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/ProgressBar */ "./components/home/ProgressBar.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_drawLip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/drawLip */ "./utils/drawLip.ts");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\Desktop\\Projects\\mycolor-shushu\\components\\VideoCanvas.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject6() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: opacity 0.5s;\n  z-index: 100003;\n  opacity: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  display: flex;\n  height: calc(var(--vh, 1vh) * 100);\n  width: 100vw;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 3;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  height: 100%;\n  width: auto;\n  z-index: 100;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  opacity: 0;\n  max-width: 100vw;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  /* width: 100vw; */\n  position: fixed;\n  top: 0;\n  /* transform: scale(-1, 1); */\n  transition: 0.125s linear;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  white-space: pre-wrap;\n  background: rgb(230, 230, 230);\n  padding: 1.5vh;\n  color: black;\n  font-size: 1.7vh;\n  margin-top: 0.5vh;\n  margin-bottom: 1vmin;\n  text-align: center;\n  position: relative;\n  white-space: nowrap;\n  @media (max-width: 720px) {\n    padding: 2vw;\n    font-size: 2.42vw;\n  }\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // const FaceMeshComponent = dynamic(() => import('@mediapipe/face_mesh'), {
//   ssr: false,
// });
// import * as Stats from 'stats.js';










var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.div(_templateObject(), _utils_theme__WEBPACK_IMPORTED_MODULE_8__.default.borderRadius);
_c = Wrapper;
var VideoCss = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__.css)(_templateObject2());
var Video = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.video(_templateObject3(), VideoCss);
_c2 = Video;
var Canvas = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.canvas(_templateObject4(), VideoCss);
_c3 = Canvas;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.div(_templateObject5());
_c4 = Container;
var BottomWrapper = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.div(_templateObject6(), function (props) {
  return props.isLoading ? 0 : 1;
});
_c5 = BottomWrapper;

var VideoCanvas = function VideoCanvas(_ref) {
  _s();

  var stream = _ref.stream;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('인공지능을 불러오는 중이에요'),
      explain = _useState[0],
      setExplain = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      isCalculated = _useState3[0],
      setIsCalculating = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      isScanEnd = _useState4[0],
      setScanEnd = _useState4[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)(); // const stats = useRef();

  var canvas = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
  var video = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
  var drawCanvas = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
  var detector = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
  var rafID = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();

  var scanDraw = function scanDraw(positions) {
    drawCanvas.current.draw(positions);
  };

  var animate = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var _drawCanvas$current, _detector$current, predictions, _, positions, srcObj;

      return C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              (_drawCanvas$current = drawCanvas.current) === null || _drawCanvas$current === void 0 ? void 0 : _drawCanvas$current.clearAndDraw();
              _context.next = 4;
              return (_detector$current = detector.current) === null || _detector$current === void 0 ? void 0 : _detector$current.estimateFaces(video.current, {
                flipHorizontal: false
              });

            case 4:
              predictions = _context.sent;
              setIsLoading(false);

              if (predictions.length != 0) {
                positions = (_ = predictions[0]) === null || _ === void 0 ? void 0 : _.keypoints;

                if (positions) {
                  scanDraw(positions);
                }
              } else {
                setExplain('얼굴이 감지되지 않았어요. 카메라에 얼굴을 비춰주세요.');
              } // stats.current.end();


              srcObj = video.current.srcObject;
              if (srcObj.active) rafID.current = requestAnimationFrame(animate);
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              alert('에러가 발생했습니다. 다시 시도해 주세요.');

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function animate() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (isScanEnd) {
      drawCanvas.current = new _utils_drawLip__WEBPACK_IMPORTED_MODULE_13__.default();
      drawCanvas.current.init(canvas.current, video.current);
    }
  }, [isScanEnd]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    try {
      video.current.srcObject = stream;
      video.current.play().then( /*#__PURE__*/(0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        var faceLandmarksDetection, model;
        return C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __webpack_require__.e(/*! import() */ "vendors-node_modules_tensorflow-models_face-landmarks-detection_dist_face-landmarks-detection-51a30a").then(__webpack_require__.bind(__webpack_require__, /*! @tensorflow-models/face-landmarks-detection */ "./node_modules/@tensorflow-models/face-landmarks-detection/dist/face-landmarks-detection.esm.js"));

              case 2:
                faceLandmarksDetection = _context2.sent;
                model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
                _context2.next = 6;
                return faceLandmarksDetection.createDetector(model, {
                  runtime: 'mediapipe',
                  refineLandmarks: false,
                  solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh'
                });

              case 6:
                detector.current = _context2.sent;
                drawCanvas.current = new _utils_drawFaceLine__WEBPACK_IMPORTED_MODULE_7__.drawFaceLine(setExplain, setIsCalculating, router);
                drawCanvas.current.init(canvas.current, video.current);
                animate();

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
    } catch (error) {
      alert('before detected ');
    }

    return function () {
      return cancelAnimationFrame(rafID.current);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Canvas, {
      id: "canvas",
      ref: canvas
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Video, {
      muted: true,
      playsInline: true,
      id: "video",
      ref: video
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_Portal__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [isCalculated && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_ML_Loading__WEBPACK_IMPORTED_MODULE_10__.default, {
          text: "\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694",
          title: "\uD37C\uC2A4\uB110\uCEEC\uB7EC\uB97C \uCE21\uC815 \uC911\uC774\uC5D0\uC694!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }, _this), isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_ML_Loading__WEBPACK_IMPORTED_MODULE_10__.default, {
          text: "\uAE30\uAE30\uC5D0 \uB530\uB77C \uCD5C\uB300 1\uBD84 \uAC00\uAE4C\uC774 \uC18C\uC694\uB420 \uC218 \uC788\uC5B4\uC694",
          title: "\uC778\uACF5\uC9C0\uB2A5\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\uC774\uC5D0\uC694"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BottomWrapper, {
      isLoading: isLoading,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_ProgressBar__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
        id: "testExplain",
        children: explain
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 5
  }, _this);
};

_s(VideoCanvas, "D4YZzsgjLOnAZiFjzgdW1v4SN4s=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter];
});

_c6 = VideoCanvas;
/* harmony default export */ __webpack_exports__["default"] = (VideoCanvas);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Video");
$RefreshReg$(_c3, "Canvas");
$RefreshReg$(_c4, "Container");
$RefreshReg$(_c5, "BottomWrapper");
$RefreshReg$(_c6, "VideoCanvas");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./utils/dE00.js":
/*!***********************!*\
  !*** ./utils/dE00.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);

/**
 * @class dE00
 * @classdesc
 * The CIE2000 color difference algorithm.
 * http://en.wikipedia.org/wiki/Color_difference#CIEDE2000
 * @constructs dE00
 * @memberOf DeltaE
 * @property {object} x1 The LAB color configuration object.
 * @property {number} x1.L The lightness value, on scale of 0-100.
 * @property {number} x1.A The chroma value, on scale of -128 to 128.
 * @property {number} x1.B The hue value, on scale of -128 to 128.
 * @property {object} x2 The LAB color configuration object.
 * @property {number} x2.L The lightness value, on scale of 0-100.
 * @property {number} x2.A The chroma value, on scale of -128 to 128.
 * @property {number} x2.B The hue value, on scale of -128 to 128.
 * @property {object} weights The weights configuration object.
 * @property {number} weights.lightness A weight factor to apply to lightness.
 * @property {number} weights.chroma A weight factor to apply to chroma.
 * @property {number} weights.hue A weight factor to apply to hue.
 * @example
 * var deltaE = new dE00(
 *     {L:50, A:50, B:50},
 *     {L:100, A:50, B:50},
 * );
 * console.log(deltaE.getDeltaE());
 */

function dE00(x1, x2, weights) {
  var sqrt = Math.sqrt;
  var pow = Math.pow;
  this.x1 = x1;
  this.x2 = x2;
  this.weights = weights || {};
  this.ksubL = this.weights.lightness || 1;
  this.ksubC = this.weights.chroma || 1;
  this.ksubH = this.weights.hue || 1; // Delta L Prime

  this.deltaLPrime = x2.L - x1.L; // L Bar

  this.LBar = (x1.L + x2.L) / 2; // C1 & C2

  this.C1 = sqrt(pow(x1.A, 2) + pow(x1.B, 2));
  this.C2 = sqrt(pow(x2.A, 2) + pow(x2.B, 2)); // C Bar

  this.CBar = (this.C1 + this.C2) / 2; // A Prime 1

  this.aPrime1 = x1.A + x1.A / 2 * (1 - sqrt(pow(this.CBar, 7) / (pow(this.CBar, 7) + pow(25, 7)))); // A Prime 2

  this.aPrime2 = x2.A + x2.A / 2 * (1 - sqrt(pow(this.CBar, 7) / (pow(this.CBar, 7) + pow(25, 7)))); // C Prime 1

  this.CPrime1 = sqrt(pow(this.aPrime1, 2) + pow(x1.B, 2)); // C Prime 2

  this.CPrime2 = sqrt(pow(this.aPrime2, 2) + pow(x2.B, 2)); // C Bar Prime

  this.CBarPrime = (this.CPrime1 + this.CPrime2) / 2; // Delta C Prime

  this.deltaCPrime = this.CPrime2 - this.CPrime1; // S sub L

  this.SsubL = 1 + 0.015 * pow(this.LBar - 50, 2) / sqrt(20 + pow(this.LBar - 50, 2)); // S sub C

  this.SsubC = 1 + 0.045 * this.CBarPrime;
  /**
   * Properties set in getDeltaE method, for access to convenience functions
   */
  // h Prime 1

  this.hPrime1 = 0; // h Prime 2

  this.hPrime2 = 0; // Delta h Prime

  this.deltahPrime = 0; // Delta H Prime

  this.deltaHPrime = 0; // H Bar Prime

  this.HBarPrime = 0; // T

  this.T = 0; // S sub H

  this.SsubH = 0; // R sub T

  this.RsubT = 0;
}
/**
 * Returns the deltaE value.
 * @method
 * @returns {number}
 */


dE00.prototype.getDeltaE = function () {
  var sqrt = Math.sqrt;
  var sin = Math.sin;
  var pow = Math.pow; // h Prime 1

  this.hPrime1 = this.gethPrime1(); // h Prime 2

  this.hPrime2 = this.gethPrime2(); // Delta h Prime

  this.deltahPrime = this.getDeltahPrime(); // Delta H Prime

  this.deltaHPrime = 2 * sqrt(this.CPrime1 * this.CPrime2) * sin(this.degreesToRadians(this.deltahPrime) / 2); // H Bar Prime

  this.HBarPrime = this.getHBarPrime(); // T

  this.T = this.getT(); // S sub H

  this.SsubH = 1 + 0.015 * this.CBarPrime * this.T; // R sub T

  this.RsubT = this.getRsubT(); // Put it all together!

  var lightness = this.deltaLPrime / (this.ksubL * this.SsubL);
  var chroma = this.deltaCPrime / (this.ksubC * this.SsubC);
  var hue = this.deltaHPrime / (this.ksubH * this.SsubH);
  return sqrt(pow(lightness, 2) + pow(chroma, 2) + pow(hue, 2) + this.RsubT * chroma * hue);
};
/**
 * Returns the RT variable calculation.
 * @method
 * @returns {number}
 */


dE00.prototype.getRsubT = function () {
  var sin = Math.sin;
  var sqrt = Math.sqrt;
  var pow = Math.pow;
  var exp = Math.exp;
  return -2 * sqrt(pow(this.CBarPrime, 7) / (pow(this.CBarPrime, 7) + pow(25, 7))) * sin(this.degreesToRadians(60 * exp(-pow((this.HBarPrime - 275) / 25, 2))));
};
/**
 * Returns the T variable calculation.
 * @method
 * @returns {number}
 */


dE00.prototype.getT = function () {
  var cos = Math.cos;
  return 1 - 0.17 * cos(this.degreesToRadians(this.HBarPrime - 30)) + 0.24 * cos(this.degreesToRadians(2 * this.HBarPrime)) + 0.32 * cos(this.degreesToRadians(3 * this.HBarPrime + 6)) - 0.2 * cos(this.degreesToRadians(4 * this.HBarPrime - 63));
};
/**
 * Returns the H Bar Prime variable calculation.
 * @method
 * @returns {number}
 */


dE00.prototype.getHBarPrime = function () {
  var abs = Math.abs;

  if (abs(this.hPrime1 - this.hPrime2) > 180) {
    return (this.hPrime1 + this.hPrime2 + 360) / 2;
  }

  return (this.hPrime1 + this.hPrime2) / 2;
};
/**
 * Returns the Delta h Prime variable calculation.
 * @method
 * @returns {number}
 */


dE00.prototype.getDeltahPrime = function () {
  var abs = Math.abs; // When either C��1 or C��2 is zero, then ��h�� is irrelevant and may be set to
  // zero.

  if (0 === this.C1 || 0 === this.C2) {
    return 0;
  }

  if (abs(this.hPrime1 - this.hPrime2) <= 180) {
    return this.hPrime2 - this.hPrime1;
  }

  if (this.hPrime2 <= this.hPrime1) {
    return this.hPrime2 - this.hPrime1 + 360;
  } else {
    return this.hPrime2 - this.hPrime1 - 360;
  }
};
/**
 * Returns the h Prime 1 variable calculation.
 * @method
 * @returns {number}
 */


dE00.prototype.gethPrime1 = function () {
  return this._gethPrimeFn(this.x1.B, this.aPrime1);
};
/**
 * Returns the h Prime 2 variable calculation.
 * @method
 * @returns {number}
 */


dE00.prototype.gethPrime2 = function () {
  return this._gethPrimeFn(this.x2.B, this.aPrime2);
};
/**
 * A helper function to calculate the h Prime 1 and h Prime 2 values.
 * @method
 * @private
 * @returns {number}
 */


dE00.prototype._gethPrimeFn = function (x, y) {
  var hueAngle;

  if (x === 0 && y === 0) {
    return 0;
  }

  hueAngle = this.radiansToDegrees(Math.atan2(x, y));

  if (hueAngle >= 0) {
    return hueAngle;
  } else {
    return hueAngle + 360;
  }
};
/**
 * Gives the radian equivalent of a specified degree angle.
 * @method
 * @returns {number}
 */


dE00.prototype.radiansToDegrees = function (radians) {
  return radians * (180 / Math.PI);
};
/**
 * Gives the degree equivalent of a specified radian.
 * @method
 * @returns {number}
 */


dE00.prototype.degreesToRadians = function (degrees) {
  return degrees * (Math.PI / 180);
};

/* harmony default export */ __webpack_exports__["default"] = (dE00);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./utils/drawFaceLine.ts":
/*!*******************************!*\
  !*** ./utils/drawFaceLine.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawFaceLine": function() { return /* binding */ drawFaceLine; }
/* harmony export */ });
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _drawParent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drawParent */ "./utils/drawParent.ts");
/* harmony import */ var _getFaceData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getFaceData */ "./utils/getFaceData.ts");
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.tsx");
/* harmony import */ var _shushuObj__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shushuObj */ "./utils/shushuObj.ts");
/* module decorator */ module = __webpack_require__.hmd(module);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var drawFaceLine = /*#__PURE__*/function (_drawParent) {
  (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(drawFaceLine, _drawParent);

  var _super = _createSuper(drawFaceLine);

  function drawFaceLine(setExplain, setIsCalculating, router) {
    var _this;

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, drawFaceLine);

    _this = _super.call(this);
    _this.setExplain = setExplain;
    _this.setIsCalculating = setIsCalculating;
    _this.router = router;

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "warmColors", ['springLight', 'springBright', 'fallDepp', 'fallStrong', 'fallMute']);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "PI", Math.PI * 2);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "dotPos", void 0);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "radius", void 0);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "isDetected", false);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "drawLineIdx", 0);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "isCompleted", false);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "progressBar", void 0);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "percent", void 0);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "progressContainer", void 0);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "progressCnt", void 0);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "getFaceData", null);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "calCount", void 0);

    _this.progressBar = document.getElementById('progressBar');
    _this.percent = document.getElementById('progressPercent');
    _this.progressContainer = document.getElementById('progressContainer');
    _this.radius = 2;
    _this.progressCnt = 0;
    _this.dotPos = [132, 58, 172, 93, 127, 234, 288, 361, 323, 454, 356, 359, 467, 260, 259, 379, 365, 397, 28, 27, 29, 136, 150, 149, 176, 148, 152, 414, 190, 56, 257, 258, 286, 195, 5, 4, 30, 247, 197, 85, 180, 90, 320, 404, 315, 76, 74, 73, 303, 304, 306, 400, 377, 378, 1, 72, 302];
    _this.calCount = new Set();

    while (_this.calCount.size < 5) {
      _this.calCount.add(Math.floor(Math.random() * 91) + 10);
    }

    return _this;
  }

  (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(drawFaceLine, [{
    key: "progress",
    value: function progress() {
      if (this.progressCnt >= 99) {
        this.progressBar.style.width = '100%';
        this.percent.innerText = '100%';
      } else {
        this.progressContainer.style.display = 'inline-flex';
        var progressUnit = this.progressCnt;
        this.progressBar.style.width = progressUnit + '%';
        this.percent.innerText = progressUnit + '%';
      }
    }
  }, {
    key: "draw",
    value: function draw(positions) {
      var _this$getFaceData,
          _this2 = this;

      (_this$getFaceData = this.getFaceData) !== null && _this$getFaceData !== void 0 ? _this$getFaceData : this.getFaceData = new _getFaceData__WEBPACK_IMPORTED_MODULE_8__.default(this.video);
      this.setExplain('퍼스널컬러를 측정 중이에요!');
      this.progressCnt += 1;
      this.progress();

      if (this.progressCnt <= 100) {
        if (this.calCount.has(this.progressCnt)) this.getFaceData.getData(positions);
        this.dotPos.forEach(function (i, _idx) {
          //x축 y축 모두 얼굴위치와 같다면 count업 전부 카운트가 올라가면 얼굴과 딱 맞게 된 것
          _this2.ctx.beginPath();

          _this2.ctx.arc(positions[i].x, positions[i].y, _this2.radius, _this2.PI, 0, false);

          _this2.ctx.closePath();

          _this2.ctx.fill();

          _this2.ctx.stroke();
        });
      } else if (!this.isCompleted) {
        this.isCompleted = true;
        this.setIsCalculating(true); // const getFace = new getFaceData(this.video, positions);

        var _this$getFaceData$get = this.getFaceData.getSeason(this.calCount.size),
            result = _this$getFaceData$get.result;

        setTimeout(function () {
          var stream = _this2.video.srcObject; //비디오 스트림

          var tracks = stream.getTracks(); //트랙

          tracks[0].stop(); //스트림 중단

          result = _shushuObj__WEBPACK_IMPORTED_MODULE_10__.colorToShushu[result];

          _this2.router.push(_pages_app__WEBPACK_IMPORTED_MODULE_9__.pathName + result);
        }, 1000);
      }
    } // drawPath(
    //   ctx: CanvasRenderingContext2D,
    //   points: number[][],
    //   closePath: boolean,
    // ) {
    //   const region = new Path2D();
    //   region.moveTo(points[0][0], points[0][1]);
    //   for (let i = 1; i < points.length; i++) {
    //     const point = points[i];
    //     region.lineTo(point[0], point[1]);
    //   }
    //   if (closePath) {
    //     region.closePath();
    //   }
    //   ctx.stroke(region);
    // }

  }]);

  return drawFaceLine;
}(_drawParent__WEBPACK_IMPORTED_MODULE_7__.default);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./utils/getFaceData.ts":
/*!******************************!*\
  !*** ./utils/getFaceData.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _dE00__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dE00 */ "./utils/dE00.js");
/* harmony import */ var _rgbToLabObj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rgbToLabObj */ "./utils/rgbToLabObj.js");
/* module decorator */ module = __webpack_require__.hmd(module);




// import dE00 from './dE00';
// import rgbToLab from './rgbToLabObj';
// // const canvas = createCanvas(200, 200)
// // const ctx = canvas.getContext('2d')
// interface faceDataType {
//   afterArr: number[];
//   kelvin: number;
//   saturation: number;
//   brightness: number;
// }
// class getFaceData {
//   rgb: number[] = [0, 0, 0];
//   kelvin = 0;
//   brightness = 0;
//   saturation = 0;
//   canvas: HTMLCanvasElement;
//   ctx: CanvasRenderingContext2D;
//   warmColor = [
//     //봄
//     { L: 93.24308501707372, A: 1.8831653918775504, B: 20.718646292445865 },
//     { L: 90.52289128383626, A: 3.233666015118153, B: 28.307937546766237 },
//     { L: 87.86424337552954, A: 5.039781815103062, B: 35.51057954854002 },
//     { L: 84.02555434458635, A: 7.303593750393079, B: 32.35239498551059 },
//     //가을
//     { L: 88.01422576423417, A: 0.44469105936484343, B: 22.066594327876565 },
//     { L: 85.40709355772393, A: 2.6280755544423884, B: 28.39518318891747 },
//     { L: 79.77375484413481, A: 7.765231163705922, B: 31.730027579476207 },
//     { L: 75.76154718068078, A: 7.23321668208865, B: 40.38007858135049 },
//   ];
//   coolColor = [
//     //여름
//     { L: 94.50167496851937, A: 4.139834223156058, B: 7.996009480649668 },
//     { L: 92.13269969033836, A: 7.406843133354157, B: 10.332405216677664 },
//     { L: 90.69511899883976, A: 8.506748645930816, B: 13.506314388479757 },
//     { L: 86.45273910781171, A: 11.28147997114498, B: 17.43590092164615 },
//     //겨울
//     { L: 92.35725352107004, A: 3.850753074886304, B: 9.013026210042252 },
//     { L: 91.2734226421461, A: 5.028273762088087, B: 11.6465909405429 },
//     { L: 88.21365467347522, A: 6.757624702209474, B: 15.649915754155597 },
//     { L: 84.31331292028791, A: 6.67861946731424, B: 17.951879223826882 },
//   ];
//   colorList = [
//     this.warmColor[0],
//     this.warmColor[1],
//     this.warmColor[2],
//     this.warmColor[3],
//     this.warmColor[4],
//     this.warmColor[5],
//     this.warmColor[6],
//     this.warmColor[7],
//     this.coolColor[0],
//     this.coolColor[1],
//     this.coolColor[2],
//     this.coolColor[3],
//     this.coolColor[4],
//     this.coolColor[5],
//     this.coolColor[6],
//     this.coolColor[7],
//   ];
//   yellowPink = [
//     // { L: 90.12279435211623, A: 5.315896411028698, B: 20.486226616182137 },
//     // { L: 85.60469561149115, A: 8.065526517962995, B: 30.390042069517676 },
//     // { L: 90.12279435211623, A: 13.253369539532322, B: 14.926472176540528 },
//     // { L: 85.60469561149115, A: 19.34814493046583, B: 20.358313334058376 },
//     { L: 85.5122403464317, A: 7.679204467076206, B: 30.250076263657498 },
//     { L: 88.40876508913684, A: 5.470028061985987, B: 21.702315167831966 },
//     { L: 91.68717912578411, A: 2.062453047442514, B: 12.19028377091007 },
//     { L: 85.5122403464317, A: 18.137708804345344, B: 23.745681239127926 },
//     { L: 88.40876508913684, A: 12.744345093609056, B: 16.957058415292448 },
//     { L: 91.68717912578411, A: 6.1801254207661245, B: 9.370586773584844 },
//   ];
//   label = [
//     'null',
//     'null',
//     'null',
//     'null',
//     'springLight',
//     'springBright',
//     'summerLight',
//     'summerMute',
//     'summerBright',
//     'fallMute',
//     'fallStrong',
//     'fallDeep',
//     'winterBright',
//     'winterDeep',
//   ];
//   labelKor = [
//     'null',
//     'null',
//     'null',
//     'null',
//     '봄 라이트',
//     '봄 브라이트',
//     '여름 라이트',
//     '여름 뮤트',
//     '여름 브라이트',
//     '가을 뮤트',
//     '가을 스트롱',
//     '가을 딥',
//     '겨울 브라이트',
//     '겨울 딥',
//   ];
//   constructor(private video: HTMLVideoElement, private positions: { x: number; y: number }[]) {
//     this.canvas = document.createElement('canvas') as HTMLCanvasElement;
//     this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
//     this.canvas.width = video.videoWidth / 2;
//     this.canvas.height = video.videoHeight / 2;
//     this.video = video;
//     positions = positions;
//   }
//   getData(): faceDataType {
//     this.ctx.save();
//     this.ctx.beginPath();
//     // this.ctx.moveTo(positions[10].x/3, positions[10].y/3)
//     // this.ctx.lineTo(positions[338].x/3, positions[338].y/3)
//     // this.ctx.lineTo(positions[297].x/3, positions[297].y/3)
//     // this.ctx.lineTo(positions[332].x/3, positions[332].y/3)
//     // this.ctx.lineTo(positions[284].x/3, positions[284].y/3)
//     // this.ctx.lineTo(positions[251].x/3, positions[251].y/3)
//     // this.ctx.lineTo(positions[389].x/3, positions[389].y/3)
//     // this.ctx.lineTo(positions[356].x/3, positions[356].y/3)
//     this.ctx.moveTo(positions[454].x / 4, positions[454].y / 4);
//     this.ctx.lineTo(positions[323].x / 4, positions[323].y / 4);
//     this.ctx.lineTo(positions[361].x / 4, positions[361].y / 4);
//     this.ctx.lineTo(positions[288].x / 4, positions[288].y / 4);
//     this.ctx.lineTo(positions[397].x / 4, positions[397].y / 4);
//     this.ctx.lineTo(positions[365].x / 4, positions[365].y / 4);
//     this.ctx.lineTo(positions[379].x / 4, positions[379].y / 4);
//     this.ctx.lineTo(positions[378].x / 4, positions[378].y / 4);
//     this.ctx.lineTo(positions[400].x / 4, positions[400].y / 4);
//     this.ctx.lineTo(positions[377].x / 4, positions[377].y / 4);
//     this.ctx.lineTo(positions[152].x / 4, positions[152].y / 4);
//     this.ctx.lineTo(positions[148].x / 4, positions[148].y / 4);
//     this.ctx.lineTo(positions[176].x / 4, positions[176].y / 4);
//     this.ctx.lineTo(positions[149].x / 4, positions[149].y / 4);
//     this.ctx.lineTo(positions[150].x / 4, positions[150].y / 4);
//     this.ctx.lineTo(positions[136].x / 4, positions[136].y / 4);
//     this.ctx.lineTo(positions[172].x / 4, positions[172].y / 4);
//     this.ctx.lineTo(positions[58].x / 4, positions[58].y / 4);
//     this.ctx.lineTo(positions[132].x / 4, positions[132].y / 4);
//     this.ctx.lineTo(positions[93].x / 4, positions[93].y / 4);
//     this.ctx.lineTo(positions[234].x / 4, positions[234].y / 4);
//     this.ctx.lineTo(positions[454].x / 4, positions[454].y / 4);
//     // this.ctx.lineTo(positions[127].x/3, positions[127].y/3)
//     // this.ctx.lineTo(positions[162].x/3, positions[162].y/3)
//     // this.ctx.lineTo(positions[21].x/3, positions[21].y/3)
//     // this.ctx.lineTo(positions[54].x/3, positions[54].y/3)
//     // this.ctx.lineTo(positions[103].x/3, positions[103].y/3)
//     // this.ctx.lineTo(positions[67].x/3, positions[67].y/3)
//     // this.ctx.lineTo(positions[109].x/3, positions[109].y/3)
//     // this.ctx.lineTo(positions[10].x/3, positions[10].y/3)
//     this.ctx.closePath();
//     this.ctx.clip();
//     // let ctx2 = canvas.getContext('2d')
//     this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
//     this.ctx.restore();
//     this.ctx.save();
//     this.ctx.beginPath();
//     this.ctx.moveTo(positions[61].x / 4, positions[61].y / 4);
//     this.ctx.lineTo(positions[185].x / 4, positions[185].y / 4);
//     this.ctx.lineTo(positions[40].x / 4, positions[40].y / 4);
//     this.ctx.lineTo(positions[39].x / 4, positions[39].y / 4);
//     this.ctx.lineTo(positions[37].x / 4, positions[37].y / 4);
//     this.ctx.lineTo(positions[0].x / 4, positions[0].y / 4);
//     this.ctx.lineTo(positions[267].x / 4, positions[267].y / 4);
//     this.ctx.lineTo(positions[269].x / 4, positions[269].y / 4);
//     this.ctx.lineTo(positions[270].x / 4, positions[270].y / 4);
//     this.ctx.lineTo(positions[409].x / 4, positions[409].y / 4);
//     this.ctx.lineTo(positions[291].x / 4, positions[291].y / 4);
//     this.ctx.lineTo(positions[375].x / 4, positions[375].y / 4);
//     this.ctx.lineTo(positions[321].x / 4, positions[321].y / 4);
//     this.ctx.lineTo(positions[405].x / 4, positions[405].y / 4);
//     this.ctx.lineTo(positions[314].x / 4, positions[314].y / 4);
//     this.ctx.lineTo(positions[17].x / 4, positions[17].y / 4);
//     this.ctx.lineTo(positions[84].x / 4, positions[84].y / 4);
//     this.ctx.lineTo(positions[181].x / 4, positions[181].y / 4);
//     this.ctx.lineTo(positions[91].x / 4, positions[91].y / 4);
//     this.ctx.lineTo(positions[146].x / 4, positions[146].y / 4);
//     this.ctx.lineTo(positions[61].x / 4, positions[61].y / 4);
//     this.ctx.moveTo(positions[97].x / 4, positions[97].y / 4);
//     this.ctx.lineTo(positions[99].x / 4, positions[99].y / 4);
//     this.ctx.lineTo(positions[75].x / 4, positions[75].y / 4);
//     this.ctx.lineTo(positions[59].x / 4, positions[59].y / 4);
//     this.ctx.lineTo(positions[166].x / 4, positions[166].y / 4);
//     this.ctx.lineTo(positions[79].x / 4, positions[79].y / 4);
//     this.ctx.lineTo(positions[239].x / 4, positions[239].y / 4);
//     this.ctx.lineTo(positions[238].x / 4, positions[238].y / 4);
//     this.ctx.lineTo(positions[458].x / 4, positions[458].y / 4);
//     this.ctx.lineTo(positions[459].x / 4, positions[459].y / 4);
//     this.ctx.lineTo(positions[309].x / 4, positions[309].y / 4);
//     this.ctx.lineTo(positions[392].x / 4, positions[392].y / 4);
//     this.ctx.lineTo(positions[289].x / 4, positions[289].y / 4);
//     this.ctx.lineTo(positions[305].x / 4, positions[305].y / 4);
//     this.ctx.lineTo(positions[290].x / 4, positions[290].y / 4);
//     this.ctx.lineTo(positions[328].x / 4, positions[328].y / 4);
//     this.ctx.lineTo(positions[326].x / 4, positions[326].y / 4);
//     this.ctx.lineTo(positions[97].x / 4, positions[97].y / 4);
//     this.ctx.closePath();
//     this.ctx.clip();
//     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     this.ctx.restore();
//     //1차 크롭된 이미지크기의 새 캔버스를 만들어 이미지를 복사한다.
//     //크롭한 캔버스를 그대로 사용하면 캔버스 크기는 그대로기 때문에 반복문에서 불필요한 반복이 많아지기 때문
//     // const betterHigh =
//     //   positions[234].y/3 > positions[454].y/3 ? positions[454].y/3 : positions[234].y/3;
//     // const width = positions[454].x/3 - positions[234].x/3;
//     // const height = positions[152].y/3 - betterHigh;
//     // console.log(width, height);
//     // if (width <= 0 || height <= 0) return { err: 'face not detected' };
//     // const canvas2 = createCanvas(width, height);
//     // const ctx2 = canvas2.getContext('2d');
//     // const imageData = this.ctx.getImageData(positions[234].x/3, betterHigh, width, height);
//     // ctx2.putImageData(imageData, 0, 0);
//     let arr = [0, 0, 0];
//     let arr2 = [0, 0, 0];
//     let cnt = 0;
//     const whiteLab = {
//       L: 100,
//       A: 0.00526049995830391,
//       B: -0.010408184525267927,
//     };
//     const dataArr = [];
//     const rgbArr = [];
//     this.ctx.fillStyle = 'blue';
//     for (let x = 0; x <= this.canvas.width; x++) {
//       for (let y = 0; y <= this.canvas.height; y++) {
//         const data = this.ctx.getImageData(x, y, 1, 1).data;
//         rgbArr.push(data);
//         if (data.every(i => i != 0)) {
//           const rgbData = [...data.slice(0, 3)];
//           const LAB = rgbToLab(rgbData);
//           const colorDiff = new dE00(whiteLab, LAB);
//           cnt++;
//           arr.forEach((_i, idx) => (arr[idx] += data[idx]));
//           dataArr.push({
//             x: x,
//             y: y,
//             color: colorDiff.getDeltaE(),
//             rgb: data.slice(0, 3),
//           });
//         }
//       }
//     }
//     arr = arr.map(i => i / cnt);
//     const lab = rgbToLab(arr);
//     const diff = new dE00(whiteLab, lab).getDeltaE();
//     const whiteClear = diff + 1;
//     const blackClear = diff * 2.7;
//     const blackClear2 = diff + diff * 0.2;
//     const whiteClear2 = diff - diff * 0.2;
//     const newData: any = [];
//     [...dataArr].forEach(i => {
//       if (diff < 15) {
//         if (i.color < whiteClear || i.color > blackClear) {
//           this.ctx.clearRect(i.x, i.y, 1, 1);
//           // dataArr.splice(dataArr.indexOf(i),1)
//         } else newData.push(i);
//       } else {
//         if (i.color < whiteClear2 || i.color > blackClear2) {
//           this.ctx.clearRect(i.x, i.y, 1, 1);
//           // dataArr.splice(dataArr.indexOf(i),1)
//         } else newData.push(i);
//       }
//     });
//     // this.ctx.scale(-1, 1);
//     // document.body.appendChild(this.canvas);
//     newData.forEach((data: any) => {
//       arr2.forEach((_i, idx) => (arr2[idx] += data.rgb[idx]));
//     });
//     arr2 = arr2.map(i => i / newData.length);
//     // console.log("광원 및 그림자 제거 후 RGB = ", arr2);
//     // out2.on("finish", () => {
//     const brightness = this.CalculateLightness(arr2);
//     const saturation = this.CalculateSaturation(arr2);
//     const kelvin = this.rgbToTemp(arr2);
//     // });
//     // fs.readFile('rgb.json',(err,data)=>{
//     //     console.log(JSON.parse(data));
//     // })
//     // fs.writeFile('rgb2.json', JSON.stringify(rgbArr), (err) => {
//     //     console.log(err);
//     // })
//     this.rgb = arr2.map((num, idx) => num + this.rgb[idx]);
//     this.kelvin += kelvin;
//     this.saturation += saturation;
//     this.brightness += brightness;
//     return {
//       afterArr: arr2,
//       kelvin,
//       saturation: Math.round(saturation * 100),
//       brightness: Math.round(brightness * 100),
//     };
//   }
//   getSeason(rgbData: faceDataType) {
//     const { brightness, saturation, afterArr, kelvin } = rgbData;
//     const yellowPink = this.isYellowPink(afterArr);
//     const kelvinScore = this.getKelvinScore(kelvin, yellowPink);
//     console.log('==============kelvinScore ====================');
//     console.log(kelvinScore);
//     // let saturationRate = kelvinScore[0] > kelvinScore[1] ? 35 : 15;
//     // let lightScore = (brightness - 55) * (100 / 45);
//     // lightScore = Math.abs(lightScore) > 100 ? 100 : lightScore;
//     // let saturationScore = (saturation - saturationRate) * (100 / saturationRate);
//     // saturationScore = Math.abs(saturationScore) > 100 ? 100 : saturationScore;
//     let toneName;
//     if (saturation <= 25) {
//       if (brightness >= 71.5)
//         //페일
//         toneName = kelvinScore[0] > kelvinScore[1] ? 'springLight' : 'summerLight';
//       else if (brightness >= 50.3)
//         //라이트 그레이시, 그레이시
//         toneName = kelvinScore[0] > kelvinScore[1] ? 'fallMute' : 'summerMute';
//       //다크 그레이시
//       else toneName = kelvinScore[0] > kelvinScore[1] ? 'fallDeep' : 'winterDeep';
//     } else if (saturation <= 35) {
//       //라이트
//       if (brightness >= 70) {
//         if (kelvinScore[0] > kelvinScore[1]) toneName = 'springLight';
//         else toneName = saturation <= 30.5 ? 'summerLight' : 'summerBright';
//       }
//       //소프트, 덜
//       else if (brightness >= 50)
//         toneName = kelvinScore[0] > kelvinScore[1] ? 'fallMute' : 'summerMute';
//       //다크
//       else toneName = kelvinScore[0] > kelvinScore[1] ? 'fallDeep' : 'winterDeep';
//     } else if (saturation <= 45) {
//       //브라이트
//       if (brightness >= 63.7)
//         toneName = kelvinScore[0] > kelvinScore[1] ? 'springBright' : 'summerBright';
//       //스트롱
//       else if (brightness >= 53.7)
//         toneName = kelvinScore[0] > kelvinScore[1] ? 'fallStrong' : 'winterBright';
//       //딥
//       else toneName = kelvinScore[0] > kelvinScore[1] ? 'fallDeep' : 'winterDeep';
//     }
//     //비비드
//     else toneName = kelvinScore[0] > kelvinScore[1] ? 'springBright' : 'winterBright';
//     let faceX = ((saturation - 15) / 40) * 4;
//     let faceY = ((brightness - 40) / 40) * 4;
//     faceX = faceX > 4 ? 4 : faceX;
//     faceX = faceX < 0 ? 0 : faceX;
//     faceY = faceY > 4 ? 4 : faceY;
//     faceY = faceY < 0 ? 0 : faceY;
//     return {
//       // left: Math.round(springSummer),
//       // right: Math.round(fallWinter),
//       userPos: {
//         faceX,
//         faceY,
//       },
//       kelvinScore,
//       result: toneName,
//       resultKor: this.labelKor[this.label.indexOf(toneName)],
//       brightness: brightness < 50 ? 0 : brightness < 70 ? 1 : 2,
//       saturation: saturation < 25 ? 0 : saturation < 45 ? 1 : 2,
//     };
//   }
//   isYellowPink(arr: any) {
//     const labColor = rgbToLab(arr);
//     let yellow = 0;
//     let pink = 0;
//     for (let i = 0; i < this.yellowPink.length; i++) {
//       const delta = new dE00(labColor, this.yellowPink[i]);
//       if (i < 3) yellow += 103.5 - delta.getDeltaE();
//       else pink += 100 - delta.getDeltaE();
//     }
//     const yellowResult = yellow / 3;
//     const pinkResult = pink / 3;
//     const sum = yellowResult + pinkResult;
//     const yellowPercent = (yellowResult / sum) * 100;
//     const pinkPercent = (pinkResult / sum) * 100;
//     return [parseFloat(yellowPercent.toFixed(2)), parseFloat(pinkPercent.toFixed(2))];
//   }
//   getKelvinScore(kelvin: number, baseColor: any[]) {
//     console.log('==============baseColor ====================');
//     console.log(baseColor);
//     const avg = 4070;
//     const cal = avg - kelvin;
//     if (cal < 0) return [baseColor[0], baseColor[1] + Math.abs(cal / 4070) * 8];
//     return [baseColor[0] + Math.abs(cal / 4070) * 8, baseColor[1]];
//   }
//   CalculateLightness(arr: any[]) {
//     const R = arr[0];
//     const G = arr[1];
//     const B = arr[2];
//     let Max = 0.0;
//     let Min = 0.0;
//     const fR = R / 255.0;
//     const fG = G / 255.0;
//     const fB = B / 255.0;
//     if (fR >= fG && fR >= fB) Max = fR;
//     else if (fG >= fB && fG >= fR) Max = fG;
//     else if (fB >= fG && fB >= fR) Max = fB;
//     if (fR <= fG && fR <= fB) Min = fR;
//     else if (fG <= fB && fG <= fR) Min = fG;
//     else if (fB <= fG && fB <= fR) Min = fB;
//     const Lightness = (Min + Max) / 2.0;
//     return Lightness;
//   }
//   //RGB값을 통해 채도값 구하기
//   //@param : RGB 배열
//   CalculateSaturation(arr: any[]) {
//     const R = arr[0];
//     const G = arr[1];
//     const B = arr[2];
//     let Max = 0.0;
//     let Min = 0.0;
//     const fR = R / 255.0;
//     const fG = G / 255.0;
//     const fB = B / 255.0;
//     if (fR >= fG && fR >= fB) Max = fR;
//     else if (fG >= fB && fG >= fR) Max = fG;
//     else if (fB >= fG && fB >= fR) Max = fB;
//     if (fR <= fG && fR <= fB) Min = fR;
//     else if (fG <= fB && fG <= fR) Min = fG;
//     else if (fB <= fG && fB <= fR) Min = fB;
//     const Lightness = this.CalculateLightness([R, G, B]);
//     let Saturation;
//     if (Max == Min) {
//       Saturation = -1.0;
//     } else {
//       if (Lightness < 0.5) {
//         Saturation = (Max - Min) / (Max + Min);
//       } else {
//         Saturation = (Max - Min) / (2.0 - Max - Min);
//       }
//     }
//     return Saturation;
//   }
//   rgbToTemp(rgb: number[]) {
//     let temperature = 0;
//     let testRGB;
//     const epsilon = 0.4;
//     let minTemperature = 1000;
//     let maxTemperature = 12000;
//     while (maxTemperature - minTemperature > epsilon) {
//       temperature = (maxTemperature + minTemperature) / 2;
//       testRGB = this.colorTemperature2rgb(temperature);
//       if (testRGB[2] / testRGB[0] >= rgb[2] / rgb[0]) {
//         maxTemperature = temperature;
//       } else {
//         minTemperature = temperature;
//       }
//     }
//     return Math.round(temperature);
//   }
//   colorTemperature2rgb(kelvin: number) {
//     const temperature = kelvin / 100.0;
//     let red, green, blue;
//     if (temperature < 66.0) {
//       red = 255;
//     } else {
//       // a + b x + c Log[x] /.
//       // {a -> 351.97690566805693`,
//       // b -> 0.114206453784165`,
//       // c -> -40.25366309332127
//       //x -> (kelvin/100) - 55}
//       red = temperature - 55.0;
//       red = 351.97690566805693 + 0.114206453784165 * red - 40.25366309332127 * Math.log(red);
//       if (red < 0) red = 0;
//       if (red > 255) red = 255;
//     }
//     /* Calculate green */
//     if (temperature < 66.0) {
//       // a + b x + c Log[x] /.
//       // {a -> -155.25485562709179`,
//       // b -> -0.44596950469579133`,
//       // c -> 104.49216199393888`,
//       // x -> (kelvin/100) - 2}
//       green = temperature - 2;
//       green =
//         -155.25485562709179 - 0.44596950469579133 * green + 104.49216199393888 * Math.log(green);
//       if (green < 0) green = 0;
//       if (green > 255) green = 255;
//     } else {
//       // a + b x + c Log[x] /.
//       // {a -> 325.4494125711974`,
//       // b -> 0.07943456536662342`,
//       // c -> -28.0852963507957`,
//       // x -> (kelvin/100) - 50}
//       green = temperature - 50.0;
//       green = 325.4494125711974 + 0.07943456536662342 * green - 28.0852963507957 * Math.log(green);
//       if (green < 0) green = 0;
//       if (green > 255) green = 255;
//     }
//     /* Calculate blue */
//     if (temperature >= 66.0) {
//       blue = 255;
//     } else {
//       if (temperature <= 20.0) {
//         blue = 0;
//       } else {
//         // a + b x + c Log[x] /.
//         // {a -> -254.76935184120902`,
//         // b -> 0.8274096064007395`,
//         // c -> 115.67994401066147`,
//         // x -> kelvin/100 - 10}
//         blue = temperature - 10;
//         blue =
//           -254.76935184120902 + 0.8274096064007395 * blue + 115.67994401066147 * Math.log(blue);
//         if (blue < 0) blue = 0;
//         if (blue > 255) blue = 255;
//       }
//     }
//     return [Math.round(red), Math.round(green), Math.round(blue)];
//   }
// }
// export default getFaceData;

 // const canvas = createCanvas(200, 200)
// const ctx = canvas.getContext('2d')

var getFaceData = /*#__PURE__*/function () {
  function getFaceData(video) {
    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, getFaceData);

    this.video = video;

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "rgb", [0, 0, 0]);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "kelvin", 0);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "brightness", 0);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "saturation", 0);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "canvas", void 0);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "ctx", void 0);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "warmColor", [//봄
    {
      L: 93.24308501707372,
      A: 1.8831653918775504,
      B: 20.718646292445865
    }, {
      L: 90.52289128383626,
      A: 3.233666015118153,
      B: 28.307937546766237
    }, {
      L: 87.86424337552954,
      A: 5.039781815103062,
      B: 35.51057954854002
    }, {
      L: 84.02555434458635,
      A: 7.303593750393079,
      B: 32.35239498551059
    }, //가을
    {
      L: 88.01422576423417,
      A: 0.44469105936484343,
      B: 22.066594327876565
    }, {
      L: 85.40709355772393,
      A: 2.6280755544423884,
      B: 28.39518318891747
    }, {
      L: 79.77375484413481,
      A: 7.765231163705922,
      B: 31.730027579476207
    }, {
      L: 75.76154718068078,
      A: 7.23321668208865,
      B: 40.38007858135049
    }]);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "coolColor", [//여름
    {
      L: 94.50167496851937,
      A: 4.139834223156058,
      B: 7.996009480649668
    }, {
      L: 92.13269969033836,
      A: 7.406843133354157,
      B: 10.332405216677664
    }, {
      L: 90.69511899883976,
      A: 8.506748645930816,
      B: 13.506314388479757
    }, {
      L: 86.45273910781171,
      A: 11.28147997114498,
      B: 17.43590092164615
    }, //겨울
    {
      L: 92.35725352107004,
      A: 3.850753074886304,
      B: 9.013026210042252
    }, {
      L: 91.2734226421461,
      A: 5.028273762088087,
      B: 11.6465909405429
    }, {
      L: 88.21365467347522,
      A: 6.757624702209474,
      B: 15.649915754155597
    }, {
      L: 84.31331292028791,
      A: 6.67861946731424,
      B: 17.951879223826882
    }]);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "colorList", [this.warmColor[0], this.warmColor[1], this.warmColor[2], this.warmColor[3], this.warmColor[4], this.warmColor[5], this.warmColor[6], this.warmColor[7], this.coolColor[0], this.coolColor[1], this.coolColor[2], this.coolColor[3], this.coolColor[4], this.coolColor[5], this.coolColor[6], this.coolColor[7]]);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "yellowPink", [// { L: 90.12279435211623, A: 5.315896411028698, B: 20.486226616182137 },
    // { L: 85.60469561149115, A: 8.065526517962995, B: 30.390042069517676 },
    // { L: 90.12279435211623, A: 13.253369539532322, B: 14.926472176540528 },
    // { L: 85.60469561149115, A: 19.34814493046583, B: 20.358313334058376 },
    {
      L: 85.5122403464317,
      A: 7.679204467076206,
      B: 30.250076263657498
    }, {
      L: 88.40876508913684,
      A: 5.470028061985987,
      B: 21.702315167831966
    }, {
      L: 91.68717912578411,
      A: 2.062453047442514,
      B: 12.19028377091007
    }, {
      L: 85.5122403464317,
      A: 18.137708804345344,
      B: 23.745681239127926
    }, {
      L: 88.40876508913684,
      A: 12.744345093609056,
      B: 16.957058415292448
    }, {
      L: 91.68717912578411,
      A: 6.1801254207661245,
      B: 9.370586773584844
    }]);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "label", ['null', 'null', 'null', 'null', 'springLight', 'springBright', 'summerLight', 'summerMute', 'summerBright', 'fallMute', 'fallStrong', 'fallDeep', 'winterBright', 'winterDeep']);

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "labelKor", ['null', 'null', 'null', 'null', '봄 라이트', '봄 브라이트', '여름 라이트', '여름 뮤트', '여름 브라이트', '가을 뮤트', '가을 스트롱', '가을 딥', '겨울 브라이트', '겨울 딥']);

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = video.videoWidth / 4;
    this.canvas.height = video.videoHeight / 4;
    this.video = video;
  }

  (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(getFaceData, [{
    key: "getData",
    value: function getData(positions) {
      var _this = this;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.save();
      this.ctx.beginPath(); // this.ctx.moveTo(positions[10].x/3, positions[10].y/3)
      // this.ctx.lineTo(positions[338].x/3, positions[338].y/3)
      // this.ctx.lineTo(positions[297].x/3, positions[297].y/3)
      // this.ctx.lineTo(positions[332].x/3, positions[332].y/3)
      // this.ctx.lineTo(positions[284].x/3, positions[284].y/3)
      // this.ctx.lineTo(positions[251].x/3, positions[251].y/3)
      // this.ctx.lineTo(positions[389].x/3, positions[389].y/3)
      // this.ctx.lineTo(positions[356].x/3, positions[356].y/3)

      this.ctx.moveTo(positions[454].x / 4, positions[454].y / 4);
      this.ctx.lineTo(positions[323].x / 4, positions[323].y / 4);
      this.ctx.lineTo(positions[361].x / 4, positions[361].y / 4);
      this.ctx.lineTo(positions[288].x / 4, positions[288].y / 4);
      this.ctx.lineTo(positions[397].x / 4, positions[397].y / 4);
      this.ctx.lineTo(positions[365].x / 4, positions[365].y / 4);
      this.ctx.lineTo(positions[379].x / 4, positions[379].y / 4);
      this.ctx.lineTo(positions[378].x / 4, positions[378].y / 4);
      this.ctx.lineTo(positions[400].x / 4, positions[400].y / 4);
      this.ctx.lineTo(positions[377].x / 4, positions[377].y / 4);
      this.ctx.lineTo(positions[152].x / 4, positions[152].y / 4);
      this.ctx.lineTo(positions[148].x / 4, positions[148].y / 4);
      this.ctx.lineTo(positions[176].x / 4, positions[176].y / 4);
      this.ctx.lineTo(positions[149].x / 4, positions[149].y / 4);
      this.ctx.lineTo(positions[150].x / 4, positions[150].y / 4);
      this.ctx.lineTo(positions[136].x / 4, positions[136].y / 4);
      this.ctx.lineTo(positions[172].x / 4, positions[172].y / 4);
      this.ctx.lineTo(positions[58].x / 4, positions[58].y / 4);
      this.ctx.lineTo(positions[132].x / 4, positions[132].y / 4);
      this.ctx.lineTo(positions[93].x / 4, positions[93].y / 4);
      this.ctx.lineTo(positions[234].x / 4, positions[234].y / 4);
      this.ctx.lineTo(positions[454].x / 4, positions[454].y / 4); // this.ctx.lineTo(positions[127].x/3, positions[127].y/3)
      // this.ctx.lineTo(positions[162].x/3, positions[162].y/3)
      // this.ctx.lineTo(positions[21].x/3, positions[21].y/3)
      // this.ctx.lineTo(positions[54].x/3, positions[54].y/3)
      // this.ctx.lineTo(positions[103].x/3, positions[103].y/3)
      // this.ctx.lineTo(positions[67].x/3, positions[67].y/3)
      // this.ctx.lineTo(positions[109].x/3, positions[109].y/3)
      // this.ctx.lineTo(positions[10].x/3, positions[10].y/3)

      this.ctx.closePath();
      this.ctx.clip(); // let ctx2 = canvas.getContext('2d')

      this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.restore();
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.moveTo(positions[61].x / 4, positions[61].y / 4);
      this.ctx.lineTo(positions[185].x / 4, positions[185].y / 4);
      this.ctx.lineTo(positions[40].x / 4, positions[40].y / 4);
      this.ctx.lineTo(positions[39].x / 4, positions[39].y / 4);
      this.ctx.lineTo(positions[37].x / 4, positions[37].y / 4);
      this.ctx.lineTo(positions[0].x / 4, positions[0].y / 4);
      this.ctx.lineTo(positions[267].x / 4, positions[267].y / 4);
      this.ctx.lineTo(positions[269].x / 4, positions[269].y / 4);
      this.ctx.lineTo(positions[270].x / 4, positions[270].y / 4);
      this.ctx.lineTo(positions[409].x / 4, positions[409].y / 4);
      this.ctx.lineTo(positions[291].x / 4, positions[291].y / 4);
      this.ctx.lineTo(positions[375].x / 4, positions[375].y / 4);
      this.ctx.lineTo(positions[321].x / 4, positions[321].y / 4);
      this.ctx.lineTo(positions[405].x / 4, positions[405].y / 4);
      this.ctx.lineTo(positions[314].x / 4, positions[314].y / 4);
      this.ctx.lineTo(positions[17].x / 4, positions[17].y / 4);
      this.ctx.lineTo(positions[84].x / 4, positions[84].y / 4);
      this.ctx.lineTo(positions[181].x / 4, positions[181].y / 4);
      this.ctx.lineTo(positions[91].x / 4, positions[91].y / 4);
      this.ctx.lineTo(positions[146].x / 4, positions[146].y / 4);
      this.ctx.lineTo(positions[61].x / 4, positions[61].y / 4);
      this.ctx.moveTo(positions[97].x / 4, positions[97].y / 4);
      this.ctx.lineTo(positions[99].x / 4, positions[99].y / 4);
      this.ctx.lineTo(positions[75].x / 4, positions[75].y / 4);
      this.ctx.lineTo(positions[59].x / 4, positions[59].y / 4);
      this.ctx.lineTo(positions[166].x / 4, positions[166].y / 4);
      this.ctx.lineTo(positions[79].x / 4, positions[79].y / 4);
      this.ctx.lineTo(positions[239].x / 4, positions[239].y / 4);
      this.ctx.lineTo(positions[238].x / 4, positions[238].y / 4);
      this.ctx.lineTo(positions[458].x / 4, positions[458].y / 4);
      this.ctx.lineTo(positions[459].x / 4, positions[459].y / 4);
      this.ctx.lineTo(positions[309].x / 4, positions[309].y / 4);
      this.ctx.lineTo(positions[392].x / 4, positions[392].y / 4);
      this.ctx.lineTo(positions[289].x / 4, positions[289].y / 4);
      this.ctx.lineTo(positions[305].x / 4, positions[305].y / 4);
      this.ctx.lineTo(positions[290].x / 4, positions[290].y / 4);
      this.ctx.lineTo(positions[328].x / 4, positions[328].y / 4);
      this.ctx.lineTo(positions[326].x / 4, positions[326].y / 4);
      this.ctx.lineTo(positions[97].x / 4, positions[97].y / 4);
      this.ctx.closePath();
      this.ctx.clip();
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.restore(); //1차 크롭된 이미지크기의 새 캔버스를 만들어 이미지를 복사한다.
      //크롭한 캔버스를 그대로 사용하면 캔버스 크기는 그대로기 때문에 반복문에서 불필요한 반복이 많아지기 때문
      // const betterHigh =
      //   positions[234].y/3 > positions[454].y/3 ? positions[454].y/3 : positions[234].y/3;
      // const width = positions[454].x/3 - positions[234].x/3;
      // const height = positions[152].y/3 - betterHigh;
      // console.log(width, height);
      // if (width <= 0 || height <= 0) return { err: 'face not detected' };
      // const canvas2 = createCanvas(width, height);
      // const ctx2 = canvas2.getContext('2d');
      // const imageData = this.ctx.getImageData(positions[234].x/3, betterHigh, width, height);
      // ctx2.putImageData(imageData, 0, 0);

      var arr = [0, 0, 0];
      var arr2 = [0, 0, 0];
      var cnt = 0;
      var whiteLab = {
        L: 100,
        A: 0.00526049995830391,
        B: -0.010408184525267927
      };
      var dataArr = [];
      var rgbArr = [];
      this.ctx.fillStyle = 'blue';

      for (var x = 0; x <= this.canvas.width; x++) {
        var _loop = function _loop(y) {
          var data = _this.ctx.getImageData(x, y, 1, 1).data;

          rgbArr.push(data);

          if (data.every(function (i) {
            return i != 0;
          })) {
            var rgbData = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data.slice(0, 3));

            var LAB = (0,_rgbToLabObj__WEBPACK_IMPORTED_MODULE_5__.default)(rgbData);
            var colorDiff = new _dE00__WEBPACK_IMPORTED_MODULE_4__.default(whiteLab, LAB);
            cnt++;
            arr.forEach(function (_i, idx) {
              return arr[idx] += data[idx];
            });
            dataArr.push({
              x: x,
              y: y,
              color: colorDiff.getDeltaE(),
              rgb: data.slice(0, 3)
            });
          }
        };

        for (var y = 0; y <= this.canvas.height; y++) {
          _loop(y);
        }
      }

      arr = arr.map(function (i) {
        return i / cnt;
      });
      var lab = (0,_rgbToLabObj__WEBPACK_IMPORTED_MODULE_5__.default)(arr);
      var diff = new _dE00__WEBPACK_IMPORTED_MODULE_4__.default(whiteLab, lab).getDeltaE();
      var whiteClear = diff + 1;
      var blackClear = diff * 2.7;
      var blackClear2 = diff + diff * 0.2;
      var whiteClear2 = diff - diff * 0.2;
      var newData = [];
      [].concat(dataArr).forEach(function (i) {
        if (diff < 15) {
          if (i.color < whiteClear || i.color > blackClear) {// this.ctx.clearRect(i.x, i.y, 1, 1);
            // dataArr.splice(dataArr.indexOf(i),1)
          } else newData.push(i);
        } else {
          if (i.color < whiteClear2 || i.color > blackClear2) {// this.ctx.clearRect(i.x, i.y, 1, 1);
            // dataArr.splice(dataArr.indexOf(i),1)
          } else newData.push(i);
        }
      }); // this.ctx.scale(-1, 1);
      // document.body.appendChild(this.canvas);

      newData.forEach(function (data) {
        arr2.forEach(function (_i, idx) {
          return arr2[idx] += data.rgb[idx];
        });
      });
      arr2 = arr2.map(function (i) {
        return i / newData.length;
      }); // console.log("광원 및 그림자 제거 후 RGB = ", arr2);
      // out2.on("finish", () => {

      var brightness = this.CalculateLightness(arr2);
      var saturation = this.CalculateSaturation(arr2);
      var kelvin = this.rgbToTemp(arr2); // });
      // fs.readFile('rgb.json',(err,data)=>{
      //     console.log(JSON.parse(data));
      // })
      // fs.writeFile('rgb2.json', JSON.stringify(rgbArr), (err) => {
      //     console.log(err);
      // })

      this.rgb = arr2.map(function (num, idx) {
        return num + _this.rgb[idx];
      });
      this.kelvin += kelvin;
      this.saturation += saturation;
      this.brightness += brightness; // document.body.appendChild(this.canvas);
      // console.log(this.rgb, this.kelvin, this.saturation, this.brightness);
    }
  }, {
    key: "getSeason",
    value: function getSeason(devide) {
      var brightness = Math.round(this.brightness / devide * 100);
      var saturation = Math.round(this.saturation / devide * 100);
      var afterArr = this.rgb.map(function (num) {
        return num / devide;
      });
      var kelvin = this.kelvin / devide; // console.log(this.rgb, this.kelvin, this.saturation, this.brightness);
      // console.log(afterArr, kelvin, saturation, brightness);

      var yellowPink = this.isYellowPink(afterArr);
      var kelvinScore = this.getKelvinScore(kelvin, yellowPink); // console.log('==============kelvinScore ====================');
      // console.log(kelvinScore);
      // let saturationRate = kelvinScore[0] > kelvinScore[1] ? 35 : 15;
      // let lightScore = (brightness - 55) * (100 / 45);
      // lightScore = Math.abs(lightScore) > 100 ? 100 : lightScore;
      // let saturationScore = (saturation - saturationRate) * (100 / saturationRate);
      // saturationScore = Math.abs(saturationScore) > 100 ? 100 : saturationScore;

      var toneName;

      if (saturation <= 25) {
        if (brightness >= 71.5) //페일
          toneName = kelvinScore[0] > kelvinScore[1] ? 'springLight' : 'summerLight';else if (brightness >= 50.3) //라이트 그레이시, 그레이시
          toneName = kelvinScore[0] > kelvinScore[1] ? 'fallMute' : 'summerMute'; //다크 그레이시
        else toneName = kelvinScore[0] > kelvinScore[1] ? 'fallDeep' : 'winterDeep';
      } else if (saturation <= 35) {
        //라이트
        if (brightness >= 70) {
          if (kelvinScore[0] > kelvinScore[1]) toneName = 'springLight';else toneName = saturation <= 30.5 ? 'summerLight' : 'summerBright';
        } //소프트, 덜
        else if (brightness >= 50) toneName = kelvinScore[0] > kelvinScore[1] ? 'fallMute' : 'summerMute'; //다크
          else toneName = kelvinScore[0] > kelvinScore[1] ? 'fallDeep' : 'winterDeep';
      } else if (saturation <= 45) {
        //브라이트
        if (brightness >= 63.7) toneName = kelvinScore[0] > kelvinScore[1] ? 'springBright' : 'summerBright'; //스트롱
        else if (brightness >= 53.7) // toneName = kelvinScore[0] > kelvinScore[1] ? 'fallStrong' : 'winterBright';
            toneName = kelvinScore[0] > kelvinScore[1] ? 'fallMute' : 'summerBright'; //딥
          else toneName = kelvinScore[0] > kelvinScore[1] ? 'fallDeep' : 'winterDeep';
      } //비비드
      // else toneName = kelvinScore[0] > kelvinScore[1] ? 'springBright' : 'winterBright';
      else toneName = kelvinScore[0] > kelvinScore[1] ? 'springBright' : 'summerBright';

      var faceX = (saturation - 15) / 40 * 4;
      var faceY = (brightness - 40) / 40 * 4;
      faceX = faceX > 4 ? 4 : faceX;
      faceX = faceX < 0 ? 0 : faceX;
      faceY = faceY > 4 ? 4 : faceY;
      faceY = faceY < 0 ? 0 : faceY;
      return {
        // left: Math.round(springSummer),
        // right: Math.round(fallWinter),
        userPos: {
          faceX: faceX,
          faceY: faceY
        },
        kelvinScore: kelvinScore,
        result: toneName,
        resultKor: this.labelKor[this.label.indexOf(toneName)],
        brightness: brightness < 50 ? 0 : brightness < 70 ? 1 : 2,
        saturation: saturation < 25 ? 0 : saturation < 45 ? 1 : 2
      };
    }
  }, {
    key: "isYellowPink",
    value: function isYellowPink(arr) {
      var labColor = (0,_rgbToLabObj__WEBPACK_IMPORTED_MODULE_5__.default)(arr);
      var yellow = 0;
      var pink = 0;

      for (var i = 0; i < this.yellowPink.length; i++) {
        var delta = new _dE00__WEBPACK_IMPORTED_MODULE_4__.default(labColor, this.yellowPink[i]);
        if (i < 3) yellow += 102.5 - delta.getDeltaE();else pink += 100 - delta.getDeltaE();
      }

      var yellowResult = yellow / 3;
      var pinkResult = pink / 3;
      var sum = yellowResult + pinkResult;
      var yellowPercent = yellowResult / sum * 100;
      var pinkPercent = pinkResult / sum * 100;
      return [parseFloat(yellowPercent.toFixed(2)), parseFloat(pinkPercent.toFixed(2))];
    }
  }, {
    key: "getKelvinScore",
    value: function getKelvinScore(kelvin, baseColor) {
      // console.log('==============baseColor ====================');
      // console.log(baseColor);
      var avg = 4070;
      var cal = avg - kelvin;
      if (cal < 0) return [baseColor[0], baseColor[1] + Math.abs(cal / 4070) * 8];
      return [baseColor[0] + Math.abs(cal / 4070) * 8, baseColor[1]];
    }
  }, {
    key: "CalculateLightness",
    value: function CalculateLightness(arr) {
      var R = arr[0];
      var G = arr[1];
      var B = arr[2];
      var Max = 0.0;
      var Min = 0.0;
      var fR = R / 255.0;
      var fG = G / 255.0;
      var fB = B / 255.0;
      if (fR >= fG && fR >= fB) Max = fR;else if (fG >= fB && fG >= fR) Max = fG;else if (fB >= fG && fB >= fR) Max = fB;
      if (fR <= fG && fR <= fB) Min = fR;else if (fG <= fB && fG <= fR) Min = fG;else if (fB <= fG && fB <= fR) Min = fB;
      var Lightness = (Min + Max) / 2.0;
      return Lightness;
    } //RGB값을 통해 채도값 구하기
    //@param : RGB 배열

  }, {
    key: "CalculateSaturation",
    value: function CalculateSaturation(arr) {
      var R = arr[0];
      var G = arr[1];
      var B = arr[2];
      var Max = 0.0;
      var Min = 0.0;
      var fR = R / 255.0;
      var fG = G / 255.0;
      var fB = B / 255.0;
      if (fR >= fG && fR >= fB) Max = fR;else if (fG >= fB && fG >= fR) Max = fG;else if (fB >= fG && fB >= fR) Max = fB;
      if (fR <= fG && fR <= fB) Min = fR;else if (fG <= fB && fG <= fR) Min = fG;else if (fB <= fG && fB <= fR) Min = fB;
      var Lightness = this.CalculateLightness([R, G, B]);
      var Saturation;

      if (Max == Min) {
        Saturation = -1.0;
      } else {
        if (Lightness < 0.5) {
          Saturation = (Max - Min) / (Max + Min);
        } else {
          Saturation = (Max - Min) / (2.0 - Max - Min);
        }
      }

      return Saturation;
    }
  }, {
    key: "rgbToTemp",
    value: function rgbToTemp(rgb) {
      var temperature = 0;
      var testRGB;
      var epsilon = 0.4;
      var minTemperature = 1000;
      var maxTemperature = 12000;

      while (maxTemperature - minTemperature > epsilon) {
        temperature = (maxTemperature + minTemperature) / 2;
        testRGB = this.colorTemperature2rgb(temperature);

        if (testRGB[2] / testRGB[0] >= rgb[2] / rgb[0]) {
          maxTemperature = temperature;
        } else {
          minTemperature = temperature;
        }
      }

      return Math.round(temperature);
    }
  }, {
    key: "colorTemperature2rgb",
    value: function colorTemperature2rgb(kelvin) {
      var temperature = kelvin / 100.0;
      var red, green, blue;

      if (temperature < 66.0) {
        red = 255;
      } else {
        // a + b x + c Log[x] /.
        // {a -> 351.97690566805693`,
        // b -> 0.114206453784165`,
        // c -> -40.25366309332127
        //x -> (kelvin/100) - 55}
        red = temperature - 55.0;
        red = 351.97690566805693 + 0.114206453784165 * red - 40.25366309332127 * Math.log(red);
        if (red < 0) red = 0;
        if (red > 255) red = 255;
      }
      /* Calculate green */


      if (temperature < 66.0) {
        // a + b x + c Log[x] /.
        // {a -> -155.25485562709179`,
        // b -> -0.44596950469579133`,
        // c -> 104.49216199393888`,
        // x -> (kelvin/100) - 2}
        green = temperature - 2;
        green = -155.25485562709179 - 0.44596950469579133 * green + 104.49216199393888 * Math.log(green);
        if (green < 0) green = 0;
        if (green > 255) green = 255;
      } else {
        // a + b x + c Log[x] /.
        // {a -> 325.4494125711974`,
        // b -> 0.07943456536662342`,
        // c -> -28.0852963507957`,
        // x -> (kelvin/100) - 50}
        green = temperature - 50.0;
        green = 325.4494125711974 + 0.07943456536662342 * green - 28.0852963507957 * Math.log(green);
        if (green < 0) green = 0;
        if (green > 255) green = 255;
      }
      /* Calculate blue */


      if (temperature >= 66.0) {
        blue = 255;
      } else {
        if (temperature <= 20.0) {
          blue = 0;
        } else {
          // a + b x + c Log[x] /.
          // {a -> -254.76935184120902`,
          // b -> 0.8274096064007395`,
          // c -> 115.67994401066147`,
          // x -> kelvin/100 - 10}
          blue = temperature - 10;
          blue = -254.76935184120902 + 0.8274096064007395 * blue + 115.67994401066147 * Math.log(blue);
          if (blue < 0) blue = 0;
          if (blue > 255) blue = 255;
        }
      }

      return [Math.round(red), Math.round(green), Math.round(blue)];
    }
  }]);

  return getFaceData;
}();

/* harmony default export */ __webpack_exports__["default"] = (getFaceData);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./utils/rgbToLabObj.js":
/*!******************************!*\
  !*** ./utils/rgbToLabObj.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
function rgbToLabObj(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      x,
      y,
      z;
  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
  x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0;
  z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
  return {
    L: 116 * y - 16,
    A: 500 * (x - y),
    B: 200 * (y - z)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (rgbToLabObj);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWRlb0NhbnZhcy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2RFMDAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2RyYXdGYWNlTGluZS50cyIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZ2V0RmFjZURhdGEudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL3JnYlRvTGFiT2JqLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJ0aGVtZSIsIlZpZGVvQ3NzIiwiY3NzIiwiVmlkZW8iLCJDYW52YXMiLCJDb250YWluZXIiLCJCb3R0b21XcmFwcGVyIiwicHJvcHMiLCJpc0xvYWRpbmciLCJWaWRlb0NhbnZhcyIsInN0cmVhbSIsInVzZVN0YXRlIiwiZXhwbGFpbiIsInNldEV4cGxhaW4iLCJzZXRJc0xvYWRpbmciLCJpc0NhbGN1bGF0ZWQiLCJzZXRJc0NhbGN1bGF0aW5nIiwiaXNTY2FuRW5kIiwic2V0U2NhbkVuZCIsInJvdXRlciIsInVzZVJvdXRlciIsImNhbnZhcyIsInVzZVJlZiIsInZpZGVvIiwiZHJhd0NhbnZhcyIsImRldGVjdG9yIiwicmFmSUQiLCJzY2FuRHJhdyIsInBvc2l0aW9ucyIsImN1cnJlbnQiLCJkcmF3IiwiYW5pbWF0ZSIsImNsZWFyQW5kRHJhdyIsImVzdGltYXRlRmFjZXMiLCJmbGlwSG9yaXpvbnRhbCIsInByZWRpY3Rpb25zIiwibGVuZ3RoIiwia2V5cG9pbnRzIiwic3JjT2JqIiwic3JjT2JqZWN0IiwiYWN0aXZlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwidXNlRWZmZWN0IiwiZHJhd0xpcCIsImluaXQiLCJwbGF5IiwidGhlbiIsImZhY2VMYW5kbWFya3NEZXRlY3Rpb24iLCJtb2RlbCIsIlN1cHBvcnRlZE1vZGVscyIsIk1lZGlhUGlwZUZhY2VNZXNoIiwiY3JlYXRlRGV0ZWN0b3IiLCJydW50aW1lIiwicmVmaW5lTGFuZG1hcmtzIiwic29sdXRpb25QYXRoIiwiZHJhd0ZhY2VMaW5lIiwiZXJyb3IiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRFMDAiLCJ4MSIsIngyIiwid2VpZ2h0cyIsInNxcnQiLCJNYXRoIiwicG93Iiwia3N1YkwiLCJsaWdodG5lc3MiLCJrc3ViQyIsImNocm9tYSIsImtzdWJIIiwiaHVlIiwiZGVsdGFMUHJpbWUiLCJMIiwiTEJhciIsIkMxIiwiQSIsIkIiLCJDMiIsIkNCYXIiLCJhUHJpbWUxIiwiYVByaW1lMiIsIkNQcmltZTEiLCJDUHJpbWUyIiwiQ0JhclByaW1lIiwiZGVsdGFDUHJpbWUiLCJTc3ViTCIsIlNzdWJDIiwiaFByaW1lMSIsImhQcmltZTIiLCJkZWx0YWhQcmltZSIsImRlbHRhSFByaW1lIiwiSEJhclByaW1lIiwiVCIsIlNzdWJIIiwiUnN1YlQiLCJwcm90b3R5cGUiLCJnZXREZWx0YUUiLCJzaW4iLCJnZXRoUHJpbWUxIiwiZ2V0aFByaW1lMiIsImdldERlbHRhaFByaW1lIiwiZGVncmVlc1RvUmFkaWFucyIsImdldEhCYXJQcmltZSIsImdldFQiLCJnZXRSc3ViVCIsImV4cCIsImNvcyIsImFicyIsIl9nZXRoUHJpbWVGbiIsIngiLCJ5IiwiaHVlQW5nbGUiLCJyYWRpYW5zVG9EZWdyZWVzIiwiYXRhbjIiLCJyYWRpYW5zIiwiUEkiLCJkZWdyZWVzIiwicHJvZ3Jlc3NCYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGVyY2VudCIsInByb2dyZXNzQ29udGFpbmVyIiwicmFkaXVzIiwicHJvZ3Jlc3NDbnQiLCJkb3RQb3MiLCJjYWxDb3VudCIsIlNldCIsInNpemUiLCJhZGQiLCJmbG9vciIsInJhbmRvbSIsInN0eWxlIiwid2lkdGgiLCJpbm5lclRleHQiLCJkaXNwbGF5IiwicHJvZ3Jlc3NVbml0IiwiZ2V0RmFjZURhdGEiLCJwcm9ncmVzcyIsImhhcyIsImdldERhdGEiLCJmb3JFYWNoIiwiaSIsIl9pZHgiLCJjdHgiLCJiZWdpblBhdGgiLCJhcmMiLCJjbG9zZVBhdGgiLCJmaWxsIiwic3Ryb2tlIiwiaXNDb21wbGV0ZWQiLCJnZXRTZWFzb24iLCJyZXN1bHQiLCJzZXRUaW1lb3V0IiwidHJhY2tzIiwiZ2V0VHJhY2tzIiwic3RvcCIsImNvbG9yVG9TaHVzaHUiLCJwdXNoIiwicGF0aE5hbWUiLCJkcmF3UGFyZW50Iiwid2FybUNvbG9yIiwiY29vbENvbG9yIiwiY3JlYXRlRWxlbWVudCIsImdldENvbnRleHQiLCJ2aWRlb1dpZHRoIiwiaGVpZ2h0IiwidmlkZW9IZWlnaHQiLCJjbGVhclJlY3QiLCJzYXZlIiwibW92ZVRvIiwibGluZVRvIiwiY2xpcCIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJhcnIiLCJhcnIyIiwiY250Iiwid2hpdGVMYWIiLCJkYXRhQXJyIiwicmdiQXJyIiwiZmlsbFN0eWxlIiwiZGF0YSIsImdldEltYWdlRGF0YSIsImV2ZXJ5IiwicmdiRGF0YSIsInNsaWNlIiwiTEFCIiwicmdiVG9MYWIiLCJjb2xvckRpZmYiLCJfaSIsImlkeCIsImNvbG9yIiwicmdiIiwibWFwIiwibGFiIiwiZGlmZiIsIndoaXRlQ2xlYXIiLCJibGFja0NsZWFyIiwiYmxhY2tDbGVhcjIiLCJ3aGl0ZUNsZWFyMiIsIm5ld0RhdGEiLCJicmlnaHRuZXNzIiwiQ2FsY3VsYXRlTGlnaHRuZXNzIiwic2F0dXJhdGlvbiIsIkNhbGN1bGF0ZVNhdHVyYXRpb24iLCJrZWx2aW4iLCJyZ2JUb1RlbXAiLCJudW0iLCJkZXZpZGUiLCJyb3VuZCIsImFmdGVyQXJyIiwieWVsbG93UGluayIsImlzWWVsbG93UGluayIsImtlbHZpblNjb3JlIiwiZ2V0S2VsdmluU2NvcmUiLCJ0b25lTmFtZSIsImZhY2VYIiwiZmFjZVkiLCJ1c2VyUG9zIiwicmVzdWx0S29yIiwibGFiZWxLb3IiLCJsYWJlbCIsImluZGV4T2YiLCJsYWJDb2xvciIsInllbGxvdyIsInBpbmsiLCJkZWx0YSIsInllbGxvd1Jlc3VsdCIsInBpbmtSZXN1bHQiLCJzdW0iLCJ5ZWxsb3dQZXJjZW50IiwicGlua1BlcmNlbnQiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImJhc2VDb2xvciIsImF2ZyIsImNhbCIsIlIiLCJHIiwiTWF4IiwiTWluIiwiZlIiLCJmRyIsImZCIiwiTGlnaHRuZXNzIiwiU2F0dXJhdGlvbiIsInRlbXBlcmF0dXJlIiwidGVzdFJHQiIsImVwc2lsb24iLCJtaW5UZW1wZXJhdHVyZSIsIm1heFRlbXBlcmF0dXJlIiwiY29sb3JUZW1wZXJhdHVyZTJyZ2IiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJyZ2JUb0xhYk9iaiIsInIiLCJnIiwiYiIsInoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtDQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLE9BQU8sR0FBR0MsMkRBQUgsb0JBZVRDLDhEQWZTLENBQWI7S0FBTUYsTztBQWtCTixJQUFNRyxRQUFRLEdBQUdDLHVEQUFILG9CQUFkO0FBT0EsSUFBTUMsS0FBSyxHQUFHSiw2REFBSCxxQkFHUEUsUUFITyxDQUFYO01BQU1FLEs7QUFLTixJQUFNQyxNQUFNLEdBQUdMLDhEQUFILHFCQUlSRSxRQUpRLENBQVo7TUFBTUcsTTtBQU1OLElBQU1DLFNBQVMsR0FBR04sMkRBQUgsb0JBQWY7TUFBTU0sUztBQWFOLElBQU1DLGFBQWEsR0FBR1AsMkRBQUgscUJBTU4sVUFBQVEsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsU0FBTixHQUFrQixDQUFsQixHQUFzQixDQUEzQjtBQUFBLENBTkMsQ0FBbkI7TUFBTUYsYTs7QUFjTixJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7O0FBQUEsa0JB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QyxHQUFQO0FBQ0Q7O0FBRUQsK0RBQWVKLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTVlYjdhM2MwNTUzZjY1YzZjOGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRmFjZUxhbmRtYXJrc0RldGVjdG9yLFxyXG4gIEZhY2VMYW5kbWFya3NEZXRlY3RvcklucHV0LFxyXG59IGZyb20gJ0B0ZW5zb3JmbG93LW1vZGVscy9mYWNlLWxhbmRtYXJrcy1kZXRlY3Rpb24nO1xyXG5pbXBvcnQgJ0B0ZW5zb3JmbG93L3RmanMtYmFja2VuZC13ZWJnbCc7XHJcbmltcG9ydCAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcclxuLy8gY29uc3QgRmFjZU1lc2hDb21wb25lbnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnQG1lZGlhcGlwZS9mYWNlX21lc2gnKSwge1xyXG4vLyAgIHNzcjogZmFsc2UsXHJcbi8vIH0pO1xyXG4vLyBpbXBvcnQgKiBhcyBTdGF0cyBmcm9tICdzdGF0cy5qcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGRyYXdGYWNlTGluZSB9IGZyb20gJy4uL3V0aWxzL2RyYXdGYWNlTGluZSc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi91dGlscy90aGVtZSc7XHJcbmltcG9ydCBNb2RhbFBvcnRhbCBmcm9tICcuL2hvbWUvUG9ydGFsJztcclxuaW1wb3J0IE1MX0xvYWRpbmcgZnJvbSAnLi9ob21lL01MX0xvYWRpbmcnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9ob21lL1Byb2dyZXNzQmFyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZHJhd0xpcCBmcm9tICcuLi91dGlscy9kcmF3TGlwJztcclxuZXhwb3J0IGludGVyZmFjZSBwZXJzb25hbENvbG9yIHtcclxuICByZXN1bHQ6IHN0cmluZztcclxuICByZXN1bHRLb3I6IHN0cmluZztcclxufVxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gIHBhZGRpbmc6IDEuNXZoO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDEuN3ZoO1xyXG4gIG1hcmdpbi10b3A6IDAuNXZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDF2bWluO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIHBhZGRpbmc6IDJ2dztcclxuICAgIGZvbnQtc2l6ZTogMi40MnZ3O1xyXG4gIH1cclxuICAke3RoZW1lLmJvcmRlclJhZGl1c31cclxuYDtcclxuXHJcbmNvbnN0IFZpZGVvQ3NzID0gY3NzYFxyXG4gIC8qIHdpZHRoOiAxMDB2dzsgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIC8qIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpOyAqL1xyXG4gIHRyYW5zaXRpb246IDAuMTI1cyBsaW5lYXI7XHJcbmA7XHJcbmNvbnN0IFZpZGVvID0gc3R5bGVkLnZpZGVvYFxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICAke1ZpZGVvQ3NzfVxyXG5gO1xyXG5jb25zdCBDYW52YXMgPSBzdHlsZWQuY2FudmFzYFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogYXV0bztcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgJHtWaWRlb0Nzc31cclxuYDtcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAzO1xyXG5gO1xyXG5cclxuY29uc3QgQm90dG9tV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBpc0xvYWRpbmc6IGJvb2xlYW4gfT5gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xyXG4gIHotaW5kZXg6IDEwMDAwMztcclxuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5pc0xvYWRpbmcgPyAwIDogMSl9O1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIHByb3BzIHtcclxuICBkcmF3TWV0aG9kPzogc3RyaW5nO1xyXG4gIHN0cmVhbTogTWVkaWFTdHJlYW07XHJcbn1cclxuXHJcbmNvbnN0IFZpZGVvQ2FudmFzID0gKHsgc3RyZWFtIH06IHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2V4cGxhaW4sIHNldEV4cGxhaW5dID0gdXNlU3RhdGU8c3RyaW5nPign7J246rO17KeA64ql7J2EIOu2iOufrOyYpOuKlCDspJHsnbTsl5DsmpQnKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgY29uc3QgW2lzQ2FsY3VsYXRlZCwgc2V0SXNDYWxjdWxhdGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzU2NhbkVuZCwgc2V0U2NhbkVuZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgLy8gY29uc3Qgc3RhdHMgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjYW52YXMgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHZpZGVvID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGRyYXdDYW52YXMgPSB1c2VSZWY8ZHJhd0ZhY2VMaW5lIHwgZHJhd0xpcD4oKTtcclxuICBjb25zdCBkZXRlY3RvciA9IHVzZVJlZjxGYWNlTGFuZG1hcmtzRGV0ZWN0b3I+KCk7XHJcbiAgY29uc3QgcmFmSUQgPSB1c2VSZWY8bnVtYmVyPigpO1xyXG5cclxuICBjb25zdCBzY2FuRHJhdyA9IChwb3NpdGlvbnM6IGFueSkgPT4ge1xyXG4gICAgKGRyYXdDYW52YXMuY3VycmVudCEgYXMgZHJhd0ZhY2VMaW5lKS5kcmF3KHBvc2l0aW9ucyk7XHJcbiAgfTtcclxuICBjb25zdCBhbmltYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gc3RhdHMuY3VycmVudC5iZWdpbigpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGRyYXdDYW52YXMuY3VycmVudD8uY2xlYXJBbmREcmF3KCk7XHJcbiAgICAgIGNvbnN0IHByZWRpY3Rpb25zID0gYXdhaXQgZGV0ZWN0b3IuY3VycmVudD8uZXN0aW1hdGVGYWNlcyhcclxuICAgICAgICB2aWRlby5jdXJyZW50IGFzIEZhY2VMYW5kbWFya3NEZXRlY3RvcklucHV0LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZsaXBIb3Jpem9udGFsOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgaWYgKHByZWRpY3Rpb25zIS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHByZWRpY3Rpb25zIVswXT8ua2V5cG9pbnRzO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbnMpIHtcclxuICAgICAgICAgIHNjYW5EcmF3KHBvc2l0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEV4cGxhaW4oJ+yWvOq1tOydtCDqsJDsp4DrkJjsp4Ag7JWK7JWY7Ja07JqULiDsubTrqZTrnbzsl5Ag7Ja86rW07J2EIOu5hOy2sOyjvOyEuOyalC4nKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBzdGF0cy5jdXJyZW50LmVuZCgpO1xyXG4gICAgICBjb25zdCBzcmNPYmo6IGFueSA9IHZpZGVvLmN1cnJlbnQhLnNyY09iamVjdDtcclxuICAgICAgaWYgKHNyY09iai5hY3RpdmUpIHJhZklELmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgYWxlcnQoJ+yXkOufrOqwgCDrsJzsg53tlojsirXri4jri6QuIOuLpOyLnCDsi5zrj4TtlbQg7KO87IS47JqULicpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc1NjYW5FbmQpIHtcclxuICAgICAgZHJhd0NhbnZhcy5jdXJyZW50ID0gbmV3IGRyYXdMaXAoKTtcclxuICAgICAgZHJhd0NhbnZhcy5jdXJyZW50IS5pbml0KGNhbnZhcy5jdXJyZW50ISwgdmlkZW8uY3VycmVudCEpO1xyXG4gICAgfVxyXG4gIH0sIFtpc1NjYW5FbmRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZpZGVvLmN1cnJlbnQhLnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgdmlkZW8uY3VycmVudCEucGxheSgpLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIHN0YXRzLmN1cnJlbnQgPSBuZXcgU3RhdHMoKTtcclxuICAgICAgICAvLyBzdGF0cy5jdXJyZW50IS5zaG93UGFuZWwoMCk7IC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXHJcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5jdXJyZW50IS5kb20pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZhY2VMYW5kbWFya3NEZXRlY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IGZhY2VMYW5kbWFya3NEZXRlY3Rpb24gPSBhd2FpdCBpbXBvcnQoJ0B0ZW5zb3JmbG93LW1vZGVscy9mYWNlLWxhbmRtYXJrcy1kZXRlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBtb2RlbCA9IGZhY2VMYW5kbWFya3NEZXRlY3Rpb24uU3VwcG9ydGVkTW9kZWxzLk1lZGlhUGlwZUZhY2VNZXNoO1xyXG4gICAgICAgIGRldGVjdG9yLmN1cnJlbnQgPSBhd2FpdCBmYWNlTGFuZG1hcmtzRGV0ZWN0aW9uLmNyZWF0ZURldGVjdG9yKG1vZGVsLCB7XHJcbiAgICAgICAgICBydW50aW1lOiAnbWVkaWFwaXBlJyxcclxuICAgICAgICAgIHJlZmluZUxhbmRtYXJrczogZmFsc2UsXHJcbiAgICAgICAgICBzb2x1dGlvblBhdGg6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0BtZWRpYXBpcGUvZmFjZV9tZXNoJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkcmF3Q2FudmFzLmN1cnJlbnQgPSBuZXcgZHJhd0ZhY2VMaW5lKHNldEV4cGxhaW4sIHNldElzQ2FsY3VsYXRpbmcsIHJvdXRlcik7XHJcbiAgICAgICAgZHJhd0NhbnZhcy5jdXJyZW50LmluaXQoY2FudmFzLmN1cnJlbnQhLCB2aWRlby5jdXJyZW50ISk7XHJcblxyXG4gICAgICAgIGFuaW1hdGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGFsZXJ0KCdiZWZvcmUgZGV0ZWN0ZWQgJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSUQuY3VycmVudCEpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxDYW52YXMgaWQ9XCJjYW52YXNcIiByZWY9e2NhbnZhc30gLz5cclxuICAgICAgPFZpZGVvIG11dGVkIHBsYXlzSW5saW5lIGlkPVwidmlkZW9cIiByZWY9e3ZpZGVvfSAvPlxyXG4gICAgICA8TW9kYWxQb3J0YWw+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtpc0NhbGN1bGF0ZWQgJiYgKFxyXG4gICAgICAgICAgICA8TUxfTG9hZGluZyB0ZXh0PVwi7J6g7Iuc66eMIOq4sOuLpOugpOyjvOyEuOyalFwiIHRpdGxlPVwi7Y287Iqk64SQ7Lus65+s66W8IOy4oeyglSDspJHsnbTsl5DsmpQhXCIgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7aXNMb2FkaW5nICYmIChcclxuICAgICAgICAgICAgPE1MX0xvYWRpbmdcclxuICAgICAgICAgICAgICB0ZXh0PVwi6riw6riw7JeQIOuUsOudvCDstZzrjIAgMeu2hCDqsIDquYzsnbQg7IaM7JqU65CgIOyImCDsnojslrTsmpRcIlxyXG4gICAgICAgICAgICAgIHRpdGxlPVwi7J246rO17KeA64ql7J2EIOu2iOufrOyYpOuKlCDspJHsnbTsl5DsmpRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9Nb2RhbFBvcnRhbD5cclxuICAgICAgPEJvdHRvbVdyYXBwZXIgaXNMb2FkaW5nPXtpc0xvYWRpbmd9PlxyXG4gICAgICAgIDxQcm9ncmVzc0JhciAvPlxyXG4gICAgICAgIDxXcmFwcGVyIGlkPVwidGVzdEV4cGxhaW5cIj57ZXhwbGFpbn08L1dyYXBwZXI+XHJcbiAgICAgIDwvQm90dG9tV3JhcHBlcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlb0NhbnZhcztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBkRTAwXHJcbiAqIEBjbGFzc2Rlc2NcclxuICogVGhlIENJRTIwMDAgY29sb3IgZGlmZmVyZW5jZSBhbGdvcml0aG0uXHJcbiAqIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29sb3JfZGlmZmVyZW5jZSNDSUVERTIwMDBcclxuICogQGNvbnN0cnVjdHMgZEUwMFxyXG4gKiBAbWVtYmVyT2YgRGVsdGFFXHJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSB4MSBUaGUgTEFCIGNvbG9yIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0geDEuTCBUaGUgbGlnaHRuZXNzIHZhbHVlLCBvbiBzY2FsZSBvZiAwLTEwMC5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHgxLkEgVGhlIGNocm9tYSB2YWx1ZSwgb24gc2NhbGUgb2YgLTEyOCB0byAxMjguXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4MS5CIFRoZSBodWUgdmFsdWUsIG9uIHNjYWxlIG9mIC0xMjggdG8gMTI4LlxyXG4gKiBAcHJvcGVydHkge29iamVjdH0geDIgVGhlIExBQiBjb2xvciBjb25maWd1cmF0aW9uIG9iamVjdC5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHgyLkwgVGhlIGxpZ2h0bmVzcyB2YWx1ZSwgb24gc2NhbGUgb2YgMC0xMDAuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4Mi5BIFRoZSBjaHJvbWEgdmFsdWUsIG9uIHNjYWxlIG9mIC0xMjggdG8gMTI4LlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0geDIuQiBUaGUgaHVlIHZhbHVlLCBvbiBzY2FsZSBvZiAtMTI4IHRvIDEyOC5cclxuICogQHByb3BlcnR5IHtvYmplY3R9IHdlaWdodHMgVGhlIHdlaWdodHMgY29uZmlndXJhdGlvbiBvYmplY3QuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3ZWlnaHRzLmxpZ2h0bmVzcyBBIHdlaWdodCBmYWN0b3IgdG8gYXBwbHkgdG8gbGlnaHRuZXNzLlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2VpZ2h0cy5jaHJvbWEgQSB3ZWlnaHQgZmFjdG9yIHRvIGFwcGx5IHRvIGNocm9tYS5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHdlaWdodHMuaHVlIEEgd2VpZ2h0IGZhY3RvciB0byBhcHBseSB0byBodWUuXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciBkZWx0YUUgPSBuZXcgZEUwMChcclxuICogICAgIHtMOjUwLCBBOjUwLCBCOjUwfSxcclxuICogICAgIHtMOjEwMCwgQTo1MCwgQjo1MH0sXHJcbiAqICk7XHJcbiAqIGNvbnNvbGUubG9nKGRlbHRhRS5nZXREZWx0YUUoKSk7XHJcbiAqL1xyXG5mdW5jdGlvbiBkRTAwKHgxLCB4Miwgd2VpZ2h0cykge1xyXG4gIHZhciBzcXJ0ID0gTWF0aC5zcXJ0O1xyXG4gIHZhciBwb3cgPSBNYXRoLnBvdztcclxuXHJcbiAgdGhpcy54MSA9IHgxO1xyXG4gIHRoaXMueDIgPSB4MjtcclxuXHJcbiAgdGhpcy53ZWlnaHRzID0gd2VpZ2h0cyB8fCB7fTtcclxuICB0aGlzLmtzdWJMID0gdGhpcy53ZWlnaHRzLmxpZ2h0bmVzcyB8fCAxO1xyXG4gIHRoaXMua3N1YkMgPSB0aGlzLndlaWdodHMuY2hyb21hIHx8IDE7XHJcbiAgdGhpcy5rc3ViSCA9IHRoaXMud2VpZ2h0cy5odWUgfHwgMTtcclxuXHJcbiAgLy8gRGVsdGEgTCBQcmltZVxyXG4gIHRoaXMuZGVsdGFMUHJpbWUgPSB4Mi5MIC0geDEuTDtcclxuXHJcbiAgLy8gTCBCYXJcclxuICB0aGlzLkxCYXIgPSAoeDEuTCArIHgyLkwpIC8gMjtcclxuXHJcbiAgLy8gQzEgJiBDMlxyXG4gIHRoaXMuQzEgPSBzcXJ0KHBvdyh4MS5BLCAyKSArIHBvdyh4MS5CLCAyKSk7XHJcbiAgdGhpcy5DMiA9IHNxcnQocG93KHgyLkEsIDIpICsgcG93KHgyLkIsIDIpKTtcclxuXHJcbiAgLy8gQyBCYXJcclxuICB0aGlzLkNCYXIgPSAodGhpcy5DMSArIHRoaXMuQzIpIC8gMjtcclxuXHJcbiAgLy8gQSBQcmltZSAxXHJcbiAgdGhpcy5hUHJpbWUxID1cclxuICAgIHgxLkEgKyAoeDEuQSAvIDIpICogKDEgLSBzcXJ0KHBvdyh0aGlzLkNCYXIsIDcpIC8gKHBvdyh0aGlzLkNCYXIsIDcpICsgcG93KDI1LCA3KSkpKTtcclxuXHJcbiAgLy8gQSBQcmltZSAyXHJcbiAgdGhpcy5hUHJpbWUyID1cclxuICAgIHgyLkEgKyAoeDIuQSAvIDIpICogKDEgLSBzcXJ0KHBvdyh0aGlzLkNCYXIsIDcpIC8gKHBvdyh0aGlzLkNCYXIsIDcpICsgcG93KDI1LCA3KSkpKTtcclxuXHJcbiAgLy8gQyBQcmltZSAxXHJcbiAgdGhpcy5DUHJpbWUxID0gc3FydChwb3codGhpcy5hUHJpbWUxLCAyKSArIHBvdyh4MS5CLCAyKSk7XHJcblxyXG4gIC8vIEMgUHJpbWUgMlxyXG4gIHRoaXMuQ1ByaW1lMiA9IHNxcnQocG93KHRoaXMuYVByaW1lMiwgMikgKyBwb3coeDIuQiwgMikpO1xyXG5cclxuICAvLyBDIEJhciBQcmltZVxyXG4gIHRoaXMuQ0JhclByaW1lID0gKHRoaXMuQ1ByaW1lMSArIHRoaXMuQ1ByaW1lMikgLyAyO1xyXG5cclxuICAvLyBEZWx0YSBDIFByaW1lXHJcbiAgdGhpcy5kZWx0YUNQcmltZSA9IHRoaXMuQ1ByaW1lMiAtIHRoaXMuQ1ByaW1lMTtcclxuXHJcbiAgLy8gUyBzdWIgTFxyXG4gIHRoaXMuU3N1YkwgPSAxICsgKDAuMDE1ICogcG93KHRoaXMuTEJhciAtIDUwLCAyKSkgLyBzcXJ0KDIwICsgcG93KHRoaXMuTEJhciAtIDUwLCAyKSk7XHJcblxyXG4gIC8vIFMgc3ViIENcclxuICB0aGlzLlNzdWJDID0gMSArIDAuMDQ1ICogdGhpcy5DQmFyUHJpbWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnRpZXMgc2V0IGluIGdldERlbHRhRSBtZXRob2QsIGZvciBhY2Nlc3MgdG8gY29udmVuaWVuY2UgZnVuY3Rpb25zXHJcbiAgICovXHJcbiAgLy8gaCBQcmltZSAxXHJcbiAgdGhpcy5oUHJpbWUxID0gMDtcclxuXHJcbiAgLy8gaCBQcmltZSAyXHJcbiAgdGhpcy5oUHJpbWUyID0gMDtcclxuXHJcbiAgLy8gRGVsdGEgaCBQcmltZVxyXG4gIHRoaXMuZGVsdGFoUHJpbWUgPSAwO1xyXG5cclxuICAvLyBEZWx0YSBIIFByaW1lXHJcbiAgdGhpcy5kZWx0YUhQcmltZSA9IDA7XHJcblxyXG4gIC8vIEggQmFyIFByaW1lXHJcbiAgdGhpcy5IQmFyUHJpbWUgPSAwO1xyXG5cclxuICAvLyBUXHJcbiAgdGhpcy5UID0gMDtcclxuXHJcbiAgLy8gUyBzdWIgSFxyXG4gIHRoaXMuU3N1YkggPSAwO1xyXG5cclxuICAvLyBSIHN1YiBUXHJcbiAgdGhpcy5Sc3ViVCA9IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkZWx0YUUgdmFsdWUuXHJcbiAqIEBtZXRob2RcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmRFMDAucHJvdG90eXBlLmdldERlbHRhRSA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgc3FydCA9IE1hdGguc3FydDtcclxuICB2YXIgc2luID0gTWF0aC5zaW47XHJcbiAgdmFyIHBvdyA9IE1hdGgucG93O1xyXG5cclxuICAvLyBoIFByaW1lIDFcclxuICB0aGlzLmhQcmltZTEgPSB0aGlzLmdldGhQcmltZTEoKTtcclxuXHJcbiAgLy8gaCBQcmltZSAyXHJcbiAgdGhpcy5oUHJpbWUyID0gdGhpcy5nZXRoUHJpbWUyKCk7XHJcblxyXG4gIC8vIERlbHRhIGggUHJpbWVcclxuICB0aGlzLmRlbHRhaFByaW1lID0gdGhpcy5nZXREZWx0YWhQcmltZSgpO1xyXG5cclxuICAvLyBEZWx0YSBIIFByaW1lXHJcbiAgdGhpcy5kZWx0YUhQcmltZSA9XHJcbiAgICAyICogc3FydCh0aGlzLkNQcmltZTEgKiB0aGlzLkNQcmltZTIpICogc2luKHRoaXMuZGVncmVlc1RvUmFkaWFucyh0aGlzLmRlbHRhaFByaW1lKSAvIDIpO1xyXG5cclxuICAvLyBIIEJhciBQcmltZVxyXG4gIHRoaXMuSEJhclByaW1lID0gdGhpcy5nZXRIQmFyUHJpbWUoKTtcclxuXHJcbiAgLy8gVFxyXG4gIHRoaXMuVCA9IHRoaXMuZ2V0VCgpO1xyXG5cclxuICAvLyBTIHN1YiBIXHJcbiAgdGhpcy5Tc3ViSCA9IDEgKyAwLjAxNSAqIHRoaXMuQ0JhclByaW1lICogdGhpcy5UO1xyXG5cclxuICAvLyBSIHN1YiBUXHJcbiAgdGhpcy5Sc3ViVCA9IHRoaXMuZ2V0UnN1YlQoKTtcclxuXHJcbiAgLy8gUHV0IGl0IGFsbCB0b2dldGhlciFcclxuICB2YXIgbGlnaHRuZXNzID0gdGhpcy5kZWx0YUxQcmltZSAvICh0aGlzLmtzdWJMICogdGhpcy5Tc3ViTCk7XHJcbiAgdmFyIGNocm9tYSA9IHRoaXMuZGVsdGFDUHJpbWUgLyAodGhpcy5rc3ViQyAqIHRoaXMuU3N1YkMpO1xyXG4gIHZhciBodWUgPSB0aGlzLmRlbHRhSFByaW1lIC8gKHRoaXMua3N1YkggKiB0aGlzLlNzdWJIKTtcclxuXHJcbiAgcmV0dXJuIHNxcnQocG93KGxpZ2h0bmVzcywgMikgKyBwb3coY2hyb21hLCAyKSArIHBvdyhodWUsIDIpICsgdGhpcy5Sc3ViVCAqIGNocm9tYSAqIGh1ZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgUlQgdmFyaWFibGUgY2FsY3VsYXRpb24uXHJcbiAqIEBtZXRob2RcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmRFMDAucHJvdG90eXBlLmdldFJzdWJUID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBzaW4gPSBNYXRoLnNpbjtcclxuICB2YXIgc3FydCA9IE1hdGguc3FydDtcclxuICB2YXIgcG93ID0gTWF0aC5wb3c7XHJcbiAgdmFyIGV4cCA9IE1hdGguZXhwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLTIgKlxyXG4gICAgc3FydChwb3codGhpcy5DQmFyUHJpbWUsIDcpIC8gKHBvdyh0aGlzLkNCYXJQcmltZSwgNykgKyBwb3coMjUsIDcpKSkgKlxyXG4gICAgc2luKHRoaXMuZGVncmVlc1RvUmFkaWFucyg2MCAqIGV4cCgtcG93KCh0aGlzLkhCYXJQcmltZSAtIDI3NSkgLyAyNSwgMikpKSlcclxuICApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIFQgdmFyaWFibGUgY2FsY3VsYXRpb24uXHJcbiAqIEBtZXRob2RcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmRFMDAucHJvdG90eXBlLmdldFQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGNvcyA9IE1hdGguY29zO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgMSAtXHJcbiAgICAwLjE3ICogY29zKHRoaXMuZGVncmVlc1RvUmFkaWFucyh0aGlzLkhCYXJQcmltZSAtIDMwKSkgK1xyXG4gICAgMC4yNCAqIGNvcyh0aGlzLmRlZ3JlZXNUb1JhZGlhbnMoMiAqIHRoaXMuSEJhclByaW1lKSkgK1xyXG4gICAgMC4zMiAqIGNvcyh0aGlzLmRlZ3JlZXNUb1JhZGlhbnMoMyAqIHRoaXMuSEJhclByaW1lICsgNikpIC1cclxuICAgIDAuMiAqIGNvcyh0aGlzLmRlZ3JlZXNUb1JhZGlhbnMoNCAqIHRoaXMuSEJhclByaW1lIC0gNjMpKVxyXG4gICk7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgSCBCYXIgUHJpbWUgdmFyaWFibGUgY2FsY3VsYXRpb24uXHJcbiAqIEBtZXRob2RcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmRFMDAucHJvdG90eXBlLmdldEhCYXJQcmltZSA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYWJzID0gTWF0aC5hYnM7XHJcblxyXG4gIGlmIChhYnModGhpcy5oUHJpbWUxIC0gdGhpcy5oUHJpbWUyKSA+IDE4MCkge1xyXG4gICAgcmV0dXJuICh0aGlzLmhQcmltZTEgKyB0aGlzLmhQcmltZTIgKyAzNjApIC8gMjtcclxuICB9XHJcblxyXG4gIHJldHVybiAodGhpcy5oUHJpbWUxICsgdGhpcy5oUHJpbWUyKSAvIDI7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgRGVsdGEgaCBQcmltZSB2YXJpYWJsZSBjYWxjdWxhdGlvbi5cclxuICogQG1ldGhvZFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZEUwMC5wcm90b3R5cGUuZ2V0RGVsdGFoUHJpbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGFicyA9IE1hdGguYWJzO1xyXG5cclxuICAvLyBXaGVuIGVpdGhlciBD77+977+9MSBvciBD77+977+9MiBpcyB6ZXJvLCB0aGVuIO+/ve+/vWjvv73vv70gaXMgaXJyZWxldmFudCBhbmQgbWF5IGJlIHNldCB0b1xyXG4gIC8vIHplcm8uXHJcbiAgaWYgKDAgPT09IHRoaXMuQzEgfHwgMCA9PT0gdGhpcy5DMikge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICBpZiAoYWJzKHRoaXMuaFByaW1lMSAtIHRoaXMuaFByaW1lMikgPD0gMTgwKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oUHJpbWUyIC0gdGhpcy5oUHJpbWUxO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRoaXMuaFByaW1lMiA8PSB0aGlzLmhQcmltZTEpIHtcclxuICAgIHJldHVybiB0aGlzLmhQcmltZTIgLSB0aGlzLmhQcmltZTEgKyAzNjA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB0aGlzLmhQcmltZTIgLSB0aGlzLmhQcmltZTEgLSAzNjA7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGggUHJpbWUgMSB2YXJpYWJsZSBjYWxjdWxhdGlvbi5cclxuICogQG1ldGhvZFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZEUwMC5wcm90b3R5cGUuZ2V0aFByaW1lMSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5fZ2V0aFByaW1lRm4odGhpcy54MS5CLCB0aGlzLmFQcmltZTEpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGggUHJpbWUgMiB2YXJpYWJsZSBjYWxjdWxhdGlvbi5cclxuICogQG1ldGhvZFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZEUwMC5wcm90b3R5cGUuZ2V0aFByaW1lMiA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5fZ2V0aFByaW1lRm4odGhpcy54Mi5CLCB0aGlzLmFQcmltZTIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgaCBQcmltZSAxIGFuZCBoIFByaW1lIDIgdmFsdWVzLlxyXG4gKiBAbWV0aG9kXHJcbiAqIEBwcml2YXRlXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5kRTAwLnByb3RvdHlwZS5fZ2V0aFByaW1lRm4gPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gIHZhciBodWVBbmdsZTtcclxuXHJcbiAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICBodWVBbmdsZSA9IHRoaXMucmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKHgsIHkpKTtcclxuXHJcbiAgaWYgKGh1ZUFuZ2xlID49IDApIHtcclxuICAgIHJldHVybiBodWVBbmdsZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGh1ZUFuZ2xlICsgMzYwO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBHaXZlcyB0aGUgcmFkaWFuIGVxdWl2YWxlbnQgb2YgYSBzcGVjaWZpZWQgZGVncmVlIGFuZ2xlLlxyXG4gKiBAbWV0aG9kXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5kRTAwLnByb3RvdHlwZS5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcclxuICByZXR1cm4gcmFkaWFucyAqICgxODAgLyBNYXRoLlBJKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHaXZlcyB0aGUgZGVncmVlIGVxdWl2YWxlbnQgb2YgYSBzcGVjaWZpZWQgcmFkaWFuLlxyXG4gKiBAbWV0aG9kXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5kRTAwLnByb3RvdHlwZS5kZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcclxuICByZXR1cm4gZGVncmVlcyAqIChNYXRoLlBJIC8gMTgwKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRFMDA7XHJcbiIsImltcG9ydCBkcmF3UGFyZW50IGZyb20gJy4vZHJhd1BhcmVudCc7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGdldEZhY2VEYXRhIGZyb20gJy4vZ2V0RmFjZURhdGEnO1xyXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBwYXRoTmFtZSB9IGZyb20gJy4uL3BhZ2VzL19hcHAnO1xyXG5pbXBvcnQgeyBjb2xvclRvU2h1c2h1IH0gZnJvbSAnLi9zaHVzaHVPYmonO1xyXG5leHBvcnQgY2xhc3MgZHJhd0ZhY2VMaW5lIGV4dGVuZHMgZHJhd1BhcmVudCB7XHJcbiAgd2FybUNvbG9ycyA9IFsnc3ByaW5nTGlnaHQnLCAnc3ByaW5nQnJpZ2h0JywgJ2ZhbGxEZXBwJywgJ2ZhbGxTdHJvbmcnLCAnZmFsbE11dGUnXTtcclxuICBQSTogbnVtYmVyID0gTWF0aC5QSSAqIDI7XHJcbiAgZG90UG9zITogbnVtYmVyW107XHJcbiAgcmFkaXVzOiBudW1iZXI7XHJcbiAgaXNEZXRlY3RlZCA9IGZhbHNlO1xyXG4gIGRyYXdMaW5lSWR4ID0gMDtcclxuICBpc0NvbXBsZXRlZCA9IGZhbHNlO1xyXG4gIHByb2dyZXNzQmFyOiBIVE1MRWxlbWVudDtcclxuICBwZXJjZW50OiBIVE1MRWxlbWVudDtcclxuICBwcm9ncmVzc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJvZ3Jlc3NDbnQ6IG51bWJlcjtcclxuICBnZXRGYWNlRGF0YTogZ2V0RmFjZURhdGEgfCBudWxsID0gbnVsbDtcclxuICBjYWxDb3VudDogU2V0PG51bWJlcj47XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNldEV4cGxhaW46IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+LFxyXG4gICAgcHJpdmF0ZSBzZXRJc0NhbGN1bGF0aW5nOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4sXHJcbiAgICBwcml2YXRlIHJvdXRlcjogTmV4dFJvdXRlcixcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnByb2dyZXNzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzQmFyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB0aGlzLnBlcmNlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NQZXJjZW50JykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB0aGlzLnByb2dyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzQ29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB0aGlzLnJhZGl1cyA9IDI7XHJcbiAgICB0aGlzLnByb2dyZXNzQ250ID0gMDtcclxuICAgIHRoaXMuZG90UG9zID0gW1xyXG4gICAgICAxMzIsIDU4LCAxNzIsIDkzLCAxMjcsIDIzNCwgMjg4LCAzNjEsIDMyMywgNDU0LCAzNTYsIDM1OSwgNDY3LCAyNjAsIDI1OSwgMzc5LCAzNjUsIDM5NywgMjgsXHJcbiAgICAgIDI3LCAyOSwgMTM2LCAxNTAsIDE0OSwgMTc2LCAxNDgsIDE1MiwgNDE0LCAxOTAsIDU2LCAyNTcsIDI1OCwgMjg2LCAxOTUsIDUsIDQsIDMwLCAyNDcsIDE5NyxcclxuICAgICAgODUsIDE4MCwgOTAsIDMyMCwgNDA0LCAzMTUsIDc2LCA3NCwgNzMsIDMwMywgMzA0LCAzMDYsIDQwMCwgMzc3LCAzNzgsIDEsIDcyLCAzMDIsXHJcbiAgICBdO1xyXG4gICAgdGhpcy5jYWxDb3VudCA9IG5ldyBTZXQoKTtcclxuICAgIHdoaWxlICh0aGlzLmNhbENvdW50LnNpemUgPCA1KSB0aGlzLmNhbENvdW50LmFkZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MSkgKyAxMCk7XHJcbiAgfVxyXG5cclxuICBwcm9ncmVzcygpIHtcclxuICAgIGlmICh0aGlzLnByb2dyZXNzQ250ID49IDk5KSB7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgIHRoaXMucGVyY2VudC5pbm5lclRleHQgPSAnMTAwJSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnByb2dyZXNzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xyXG4gICAgICBjb25zdCBwcm9ncmVzc1VuaXQgPSB0aGlzLnByb2dyZXNzQ250O1xyXG4gICAgICB0aGlzLnByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gcHJvZ3Jlc3NVbml0ICsgJyUnO1xyXG4gICAgICB0aGlzLnBlcmNlbnQuaW5uZXJUZXh0ID0gcHJvZ3Jlc3NVbml0ICsgJyUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdyhwb3NpdGlvbnM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldEZhY2VEYXRhID8/PSBuZXcgZ2V0RmFjZURhdGEodGhpcy52aWRlbyk7XHJcbiAgICB0aGlzLnNldEV4cGxhaW4oJ+2NvOyKpOuEkOy7rOufrOulvCDsuKHsoJUg7KSR7J207JeQ7JqUIScpO1xyXG4gICAgdGhpcy5wcm9ncmVzc0NudCArPSAxO1xyXG4gICAgdGhpcy5wcm9ncmVzcygpO1xyXG4gICAgaWYgKHRoaXMucHJvZ3Jlc3NDbnQgPD0gMTAwKSB7XHJcbiAgICAgIGlmICh0aGlzLmNhbENvdW50Lmhhcyh0aGlzLnByb2dyZXNzQ250KSkgdGhpcy5nZXRGYWNlRGF0YS5nZXREYXRhKHBvc2l0aW9ucyk7XHJcbiAgICAgIHRoaXMuZG90UG9zLmZvckVhY2goKGksIF9pZHgpID0+IHtcclxuICAgICAgICAvL3jstpUgeey2lSDrqqjrkZAg7Ja86rW07JyE7LmY7JmAIOqwmeuLpOuptCBjb3VudOyXhSDsoITrtoAg7Lm07Jq07Yq46rCAIOyYrOudvOqwgOuptCDslrzqtbTqs7wg65SxIOunnuqyjCDrkJwg6rKDXHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHBvc2l0aW9uc1tpXS54LCBwb3NpdGlvbnNbaV0ueSwgdGhpcy5yYWRpdXMsIHRoaXMuUEksIDAsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNDb21wbGV0ZWQpIHtcclxuICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2V0SXNDYWxjdWxhdGluZyh0cnVlKTtcclxuICAgICAgLy8gY29uc3QgZ2V0RmFjZSA9IG5ldyBnZXRGYWNlRGF0YSh0aGlzLnZpZGVvLCBwb3NpdGlvbnMpO1xyXG4gICAgICBsZXQgeyByZXN1bHQgfSA9IHRoaXMuZ2V0RmFjZURhdGEuZ2V0U2Vhc29uKHRoaXMuY2FsQ291bnQuc2l6ZSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMudmlkZW8uc3JjT2JqZWN0IGFzIE1lZGlhU3RyZWFtOyAvL+u5hOuUlOyYpCDsiqTtirjrprxcclxuICAgICAgICBjb25zdCB0cmFja3MgPSBzdHJlYW0hLmdldFRyYWNrcygpOyAvL+2KuOuemVxyXG4gICAgICAgIHRyYWNrc1swXS5zdG9wKCk7IC8v7Iqk7Yq466a8IOykkeuLqFxyXG4gICAgICAgIHJlc3VsdCA9IGNvbG9yVG9TaHVzaHVbcmVzdWx0XTtcclxuICAgICAgICB0aGlzLnJvdXRlci5wdXNoKHBhdGhOYW1lICsgcmVzdWx0KTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBkcmF3UGF0aChcclxuICAvLyAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gIC8vICAgcG9pbnRzOiBudW1iZXJbXVtdLFxyXG4gIC8vICAgY2xvc2VQYXRoOiBib29sZWFuLFxyXG4gIC8vICkge1xyXG4gIC8vICAgY29uc3QgcmVnaW9uID0gbmV3IFBhdGgyRCgpO1xyXG4gIC8vICAgcmVnaW9uLm1vdmVUbyhwb2ludHNbMF1bMF0sIHBvaW50c1swXVsxXSk7XHJcbiAgLy8gICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gIC8vICAgICBjb25zdCBwb2ludCA9IHBvaW50c1tpXTtcclxuICAvLyAgICAgcmVnaW9uLmxpbmVUbyhwb2ludFswXSwgcG9pbnRbMV0pO1xyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIGlmIChjbG9zZVBhdGgpIHtcclxuICAvLyAgICAgcmVnaW9uLmNsb3NlUGF0aCgpO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgY3R4LnN0cm9rZShyZWdpb24pO1xyXG4gIC8vIH1cclxufVxyXG4iLCIvLyBpbXBvcnQgZEUwMCBmcm9tICcuL2RFMDAnO1xyXG4vLyBpbXBvcnQgcmdiVG9MYWIgZnJvbSAnLi9yZ2JUb0xhYk9iaic7XHJcblxyXG4vLyAvLyBjb25zdCBjYW52YXMgPSBjcmVhdGVDYW52YXMoMjAwLCAyMDApXHJcbi8vIC8vIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIGludGVyZmFjZSBmYWNlRGF0YVR5cGUge1xyXG4vLyAgIGFmdGVyQXJyOiBudW1iZXJbXTtcclxuLy8gICBrZWx2aW46IG51bWJlcjtcclxuLy8gICBzYXR1cmF0aW9uOiBudW1iZXI7XHJcbi8vICAgYnJpZ2h0bmVzczogbnVtYmVyO1xyXG4vLyB9XHJcbi8vIGNsYXNzIGdldEZhY2VEYXRhIHtcclxuLy8gICByZ2I6IG51bWJlcltdID0gWzAsIDAsIDBdO1xyXG4vLyAgIGtlbHZpbiA9IDA7XHJcbi8vICAgYnJpZ2h0bmVzcyA9IDA7XHJcbi8vICAgc2F0dXJhdGlvbiA9IDA7XHJcbi8vICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuLy8gICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuLy8gICB3YXJtQ29sb3IgPSBbXHJcbi8vICAgICAvL+u0hFxyXG4vLyAgICAgeyBMOiA5My4yNDMwODUwMTcwNzM3MiwgQTogMS44ODMxNjUzOTE4Nzc1NTA0LCBCOiAyMC43MTg2NDYyOTI0NDU4NjUgfSxcclxuLy8gICAgIHsgTDogOTAuNTIyODkxMjgzODM2MjYsIEE6IDMuMjMzNjY2MDE1MTE4MTUzLCBCOiAyOC4zMDc5Mzc1NDY3NjYyMzcgfSxcclxuLy8gICAgIHsgTDogODcuODY0MjQzMzc1NTI5NTQsIEE6IDUuMDM5NzgxODE1MTAzMDYyLCBCOiAzNS41MTA1Nzk1NDg1NDAwMiB9LFxyXG4vLyAgICAgeyBMOiA4NC4wMjU1NTQzNDQ1ODYzNSwgQTogNy4zMDM1OTM3NTAzOTMwNzksIEI6IDMyLjM1MjM5NDk4NTUxMDU5IH0sXHJcbi8vICAgICAvL+qwgOydhFxyXG4vLyAgICAgeyBMOiA4OC4wMTQyMjU3NjQyMzQxNywgQTogMC40NDQ2OTEwNTkzNjQ4NDM0MywgQjogMjIuMDY2NTk0MzI3ODc2NTY1IH0sXHJcbi8vICAgICB7IEw6IDg1LjQwNzA5MzU1NzcyMzkzLCBBOiAyLjYyODA3NTU1NDQ0MjM4ODQsIEI6IDI4LjM5NTE4MzE4ODkxNzQ3IH0sXHJcbi8vICAgICB7IEw6IDc5Ljc3Mzc1NDg0NDEzNDgxLCBBOiA3Ljc2NTIzMTE2MzcwNTkyMiwgQjogMzEuNzMwMDI3NTc5NDc2MjA3IH0sXHJcbi8vICAgICB7IEw6IDc1Ljc2MTU0NzE4MDY4MDc4LCBBOiA3LjIzMzIxNjY4MjA4ODY1LCBCOiA0MC4zODAwNzg1ODEzNTA0OSB9LFxyXG4vLyAgIF07XHJcbi8vICAgY29vbENvbG9yID0gW1xyXG4vLyAgICAgLy/sl6zrpoRcclxuLy8gICAgIHsgTDogOTQuNTAxNjc0OTY4NTE5MzcsIEE6IDQuMTM5ODM0MjIzMTU2MDU4LCBCOiA3Ljk5NjAwOTQ4MDY0OTY2OCB9LFxyXG4vLyAgICAgeyBMOiA5Mi4xMzI2OTk2OTAzMzgzNiwgQTogNy40MDY4NDMxMzMzNTQxNTcsIEI6IDEwLjMzMjQwNTIxNjY3NzY2NCB9LFxyXG4vLyAgICAgeyBMOiA5MC42OTUxMTg5OTg4Mzk3NiwgQTogOC41MDY3NDg2NDU5MzA4MTYsIEI6IDEzLjUwNjMxNDM4ODQ3OTc1NyB9LFxyXG4vLyAgICAgeyBMOiA4Ni40NTI3MzkxMDc4MTE3MSwgQTogMTEuMjgxNDc5OTcxMTQ0OTgsIEI6IDE3LjQzNTkwMDkyMTY0NjE1IH0sXHJcbi8vICAgICAvL+qyqOyauFxyXG4vLyAgICAgeyBMOiA5Mi4zNTcyNTM1MjEwNzAwNCwgQTogMy44NTA3NTMwNzQ4ODYzMDQsIEI6IDkuMDEzMDI2MjEwMDQyMjUyIH0sXHJcbi8vICAgICB7IEw6IDkxLjI3MzQyMjY0MjE0NjEsIEE6IDUuMDI4MjczNzYyMDg4MDg3LCBCOiAxMS42NDY1OTA5NDA1NDI5IH0sXHJcbi8vICAgICB7IEw6IDg4LjIxMzY1NDY3MzQ3NTIyLCBBOiA2Ljc1NzYyNDcwMjIwOTQ3NCwgQjogMTUuNjQ5OTE1NzU0MTU1NTk3IH0sXHJcbi8vICAgICB7IEw6IDg0LjMxMzMxMjkyMDI4NzkxLCBBOiA2LjY3ODYxOTQ2NzMxNDI0LCBCOiAxNy45NTE4NzkyMjM4MjY4ODIgfSxcclxuLy8gICBdO1xyXG5cclxuLy8gICBjb2xvckxpc3QgPSBbXHJcbi8vICAgICB0aGlzLndhcm1Db2xvclswXSxcclxuLy8gICAgIHRoaXMud2FybUNvbG9yWzFdLFxyXG4vLyAgICAgdGhpcy53YXJtQ29sb3JbMl0sXHJcbi8vICAgICB0aGlzLndhcm1Db2xvclszXSxcclxuLy8gICAgIHRoaXMud2FybUNvbG9yWzRdLFxyXG4vLyAgICAgdGhpcy53YXJtQ29sb3JbNV0sXHJcbi8vICAgICB0aGlzLndhcm1Db2xvcls2XSxcclxuLy8gICAgIHRoaXMud2FybUNvbG9yWzddLFxyXG4vLyAgICAgdGhpcy5jb29sQ29sb3JbMF0sXHJcbi8vICAgICB0aGlzLmNvb2xDb2xvclsxXSxcclxuLy8gICAgIHRoaXMuY29vbENvbG9yWzJdLFxyXG4vLyAgICAgdGhpcy5jb29sQ29sb3JbM10sXHJcbi8vICAgICB0aGlzLmNvb2xDb2xvcls0XSxcclxuLy8gICAgIHRoaXMuY29vbENvbG9yWzVdLFxyXG4vLyAgICAgdGhpcy5jb29sQ29sb3JbNl0sXHJcbi8vICAgICB0aGlzLmNvb2xDb2xvcls3XSxcclxuLy8gICBdO1xyXG5cclxuLy8gICB5ZWxsb3dQaW5rID0gW1xyXG4vLyAgICAgLy8geyBMOiA5MC4xMjI3OTQzNTIxMTYyMywgQTogNS4zMTU4OTY0MTEwMjg2OTgsIEI6IDIwLjQ4NjIyNjYxNjE4MjEzNyB9LFxyXG4vLyAgICAgLy8geyBMOiA4NS42MDQ2OTU2MTE0OTExNSwgQTogOC4wNjU1MjY1MTc5NjI5OTUsIEI6IDMwLjM5MDA0MjA2OTUxNzY3NiB9LFxyXG4vLyAgICAgLy8geyBMOiA5MC4xMjI3OTQzNTIxMTYyMywgQTogMTMuMjUzMzY5NTM5NTMyMzIyLCBCOiAxNC45MjY0NzIxNzY1NDA1MjggfSxcclxuLy8gICAgIC8vIHsgTDogODUuNjA0Njk1NjExNDkxMTUsIEE6IDE5LjM0ODE0NDkzMDQ2NTgzLCBCOiAyMC4zNTgzMTMzMzQwNTgzNzYgfSxcclxuLy8gICAgIHsgTDogODUuNTEyMjQwMzQ2NDMxNywgQTogNy42NzkyMDQ0NjcwNzYyMDYsIEI6IDMwLjI1MDA3NjI2MzY1NzQ5OCB9LFxyXG4vLyAgICAgeyBMOiA4OC40MDg3NjUwODkxMzY4NCwgQTogNS40NzAwMjgwNjE5ODU5ODcsIEI6IDIxLjcwMjMxNTE2NzgzMTk2NiB9LFxyXG4vLyAgICAgeyBMOiA5MS42ODcxNzkxMjU3ODQxMSwgQTogMi4wNjI0NTMwNDc0NDI1MTQsIEI6IDEyLjE5MDI4Mzc3MDkxMDA3IH0sXHJcbi8vICAgICB7IEw6IDg1LjUxMjI0MDM0NjQzMTcsIEE6IDE4LjEzNzcwODgwNDM0NTM0NCwgQjogMjMuNzQ1NjgxMjM5MTI3OTI2IH0sXHJcbi8vICAgICB7IEw6IDg4LjQwODc2NTA4OTEzNjg0LCBBOiAxMi43NDQzNDUwOTM2MDkwNTYsIEI6IDE2Ljk1NzA1ODQxNTI5MjQ0OCB9LFxyXG4vLyAgICAgeyBMOiA5MS42ODcxNzkxMjU3ODQxMSwgQTogNi4xODAxMjU0MjA3NjYxMjQ1LCBCOiA5LjM3MDU4Njc3MzU4NDg0NCB9LFxyXG4vLyAgIF07XHJcblxyXG4vLyAgIGxhYmVsID0gW1xyXG4vLyAgICAgJ251bGwnLFxyXG4vLyAgICAgJ251bGwnLFxyXG4vLyAgICAgJ251bGwnLFxyXG4vLyAgICAgJ251bGwnLFxyXG4vLyAgICAgJ3NwcmluZ0xpZ2h0JyxcclxuLy8gICAgICdzcHJpbmdCcmlnaHQnLFxyXG4vLyAgICAgJ3N1bW1lckxpZ2h0JyxcclxuLy8gICAgICdzdW1tZXJNdXRlJyxcclxuLy8gICAgICdzdW1tZXJCcmlnaHQnLFxyXG4vLyAgICAgJ2ZhbGxNdXRlJyxcclxuLy8gICAgICdmYWxsU3Ryb25nJyxcclxuLy8gICAgICdmYWxsRGVlcCcsXHJcbi8vICAgICAnd2ludGVyQnJpZ2h0JyxcclxuLy8gICAgICd3aW50ZXJEZWVwJyxcclxuLy8gICBdO1xyXG4vLyAgIGxhYmVsS29yID0gW1xyXG4vLyAgICAgJ251bGwnLFxyXG4vLyAgICAgJ251bGwnLFxyXG4vLyAgICAgJ251bGwnLFxyXG4vLyAgICAgJ251bGwnLFxyXG4vLyAgICAgJ+u0hCDrnbzsnbTtirgnLFxyXG4vLyAgICAgJ+u0hCDruIzrnbzsnbTtirgnLFxyXG4vLyAgICAgJ+yXrOumhCDrnbzsnbTtirgnLFxyXG4vLyAgICAgJ+yXrOumhCDrrqTtirgnLFxyXG4vLyAgICAgJ+yXrOumhCDruIzrnbzsnbTtirgnLFxyXG4vLyAgICAgJ+qwgOydhCDrrqTtirgnLFxyXG4vLyAgICAgJ+qwgOydhCDsiqTtirjrobEnLFxyXG4vLyAgICAgJ+qwgOydhCDrlKUnLFxyXG4vLyAgICAgJ+qyqOyauCDruIzrnbzsnbTtirgnLFxyXG4vLyAgICAgJ+qyqOyauCDrlKUnLFxyXG4vLyAgIF07XHJcbi8vICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCwgcHJpdmF0ZSBwb3NpdGlvbnM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdKSB7XHJcbi8vICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4vLyAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuLy8gICAgIHRoaXMuY2FudmFzLndpZHRoID0gdmlkZW8udmlkZW9XaWR0aCAvIDI7XHJcbi8vICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodCAvIDI7XHJcbi8vICAgICB0aGlzLnZpZGVvID0gdmlkZW87XHJcbi8vICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnM7XHJcbi8vICAgfVxyXG5cclxuLy8gICBnZXREYXRhKCk6IGZhY2VEYXRhVHlwZSB7XHJcbi8vICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbi8vICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuLy8gICAgIC8vIHRoaXMuY3R4Lm1vdmVUbyhwb3NpdGlvbnNbMTBdLngvMywgcG9zaXRpb25zWzEwXS55LzMpXHJcbi8vICAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzMzOF0ueC8zLCBwb3NpdGlvbnNbMzM4XS55LzMpXHJcbi8vICAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzI5N10ueC8zLCBwb3NpdGlvbnNbMjk3XS55LzMpXHJcbi8vICAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzMzMl0ueC8zLCBwb3NpdGlvbnNbMzMyXS55LzMpXHJcbi8vICAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzI4NF0ueC8zLCBwb3NpdGlvbnNbMjg0XS55LzMpXHJcbi8vICAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzI1MV0ueC8zLCBwb3NpdGlvbnNbMjUxXS55LzMpXHJcbi8vICAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzM4OV0ueC8zLCBwb3NpdGlvbnNbMzg5XS55LzMpXHJcbi8vICAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzM1Nl0ueC8zLCBwb3NpdGlvbnNbMzU2XS55LzMpXHJcbi8vICAgICB0aGlzLmN0eC5tb3ZlVG8ocG9zaXRpb25zWzQ1NF0ueCAvIDQsIHBvc2l0aW9uc1s0NTRdLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMzIzXS54IC8gNCwgcG9zaXRpb25zWzMyM10ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1szNjFdLnggLyA0LCBwb3NpdGlvbnNbMzYxXS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzI4OF0ueCAvIDQsIHBvc2l0aW9uc1syODhdLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMzk3XS54IC8gNCwgcG9zaXRpb25zWzM5N10ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1szNjVdLnggLyA0LCBwb3NpdGlvbnNbMzY1XS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzM3OV0ueCAvIDQsIHBvc2l0aW9uc1szNzldLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMzc4XS54IC8gNCwgcG9zaXRpb25zWzM3OF0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s0MDBdLnggLyA0LCBwb3NpdGlvbnNbNDAwXS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzM3N10ueCAvIDQsIHBvc2l0aW9uc1szNzddLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTUyXS54IC8gNCwgcG9zaXRpb25zWzE1Ml0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1sxNDhdLnggLyA0LCBwb3NpdGlvbnNbMTQ4XS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzE3Nl0ueCAvIDQsIHBvc2l0aW9uc1sxNzZdLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTQ5XS54IC8gNCwgcG9zaXRpb25zWzE0OV0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1sxNTBdLnggLyA0LCBwb3NpdGlvbnNbMTUwXS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzEzNl0ueCAvIDQsIHBvc2l0aW9uc1sxMzZdLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTcyXS54IC8gNCwgcG9zaXRpb25zWzE3Ml0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s1OF0ueCAvIDQsIHBvc2l0aW9uc1s1OF0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1sxMzJdLnggLyA0LCBwb3NpdGlvbnNbMTMyXS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzkzXS54IC8gNCwgcG9zaXRpb25zWzkzXS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzIzNF0ueCAvIDQsIHBvc2l0aW9uc1syMzRdLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbNDU0XS54IC8gNCwgcG9zaXRpb25zWzQ1NF0ueSAvIDQpO1xyXG5cclxuLy8gICAgIC8vIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTI3XS54LzMsIHBvc2l0aW9uc1sxMjddLnkvMylcclxuLy8gICAgIC8vIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTYyXS54LzMsIHBvc2l0aW9uc1sxNjJdLnkvMylcclxuLy8gICAgIC8vIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMjFdLngvMywgcG9zaXRpb25zWzIxXS55LzMpXHJcbi8vICAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzU0XS54LzMsIHBvc2l0aW9uc1s1NF0ueS8zKVxyXG4vLyAgICAgLy8gdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1sxMDNdLngvMywgcG9zaXRpb25zWzEwM10ueS8zKVxyXG4vLyAgICAgLy8gdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s2N10ueC8zLCBwb3NpdGlvbnNbNjddLnkvMylcclxuLy8gICAgIC8vIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTA5XS54LzMsIHBvc2l0aW9uc1sxMDldLnkvMylcclxuLy8gICAgIC8vIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTBdLngvMywgcG9zaXRpb25zWzEwXS55LzMpXHJcbi8vICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuLy8gICAgIHRoaXMuY3R4LmNsaXAoKTtcclxuLy8gICAgIC8vIGxldCBjdHgyID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuLy8gICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnZpZGVvLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuLy8gICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuXHJcbi8vICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbi8vICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuLy8gICAgIHRoaXMuY3R4Lm1vdmVUbyhwb3NpdGlvbnNbNjFdLnggLyA0LCBwb3NpdGlvbnNbNjFdLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTg1XS54IC8gNCwgcG9zaXRpb25zWzE4NV0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s0MF0ueCAvIDQsIHBvc2l0aW9uc1s0MF0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1szOV0ueCAvIDQsIHBvc2l0aW9uc1szOV0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1szN10ueCAvIDQsIHBvc2l0aW9uc1szN10ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1swXS54IC8gNCwgcG9zaXRpb25zWzBdLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMjY3XS54IC8gNCwgcG9zaXRpb25zWzI2N10ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1syNjldLnggLyA0LCBwb3NpdGlvbnNbMjY5XS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzI3MF0ueCAvIDQsIHBvc2l0aW9uc1syNzBdLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbNDA5XS54IC8gNCwgcG9zaXRpb25zWzQwOV0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1syOTFdLnggLyA0LCBwb3NpdGlvbnNbMjkxXS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzM3NV0ueCAvIDQsIHBvc2l0aW9uc1szNzVdLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMzIxXS54IC8gNCwgcG9zaXRpb25zWzMyMV0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s0MDVdLnggLyA0LCBwb3NpdGlvbnNbNDA1XS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzMxNF0ueCAvIDQsIHBvc2l0aW9uc1szMTRdLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTddLnggLyA0LCBwb3NpdGlvbnNbMTddLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbODRdLnggLyA0LCBwb3NpdGlvbnNbODRdLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTgxXS54IC8gNCwgcG9zaXRpb25zWzE4MV0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s5MV0ueCAvIDQsIHBvc2l0aW9uc1s5MV0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1sxNDZdLnggLyA0LCBwb3NpdGlvbnNbMTQ2XS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzYxXS54IC8gNCwgcG9zaXRpb25zWzYxXS55IC8gNCk7XHJcblxyXG4vLyAgICAgdGhpcy5jdHgubW92ZVRvKHBvc2l0aW9uc1s5N10ueCAvIDQsIHBvc2l0aW9uc1s5N10ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s5OV0ueCAvIDQsIHBvc2l0aW9uc1s5OV0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s3NV0ueCAvIDQsIHBvc2l0aW9uc1s3NV0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s1OV0ueCAvIDQsIHBvc2l0aW9uc1s1OV0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1sxNjZdLnggLyA0LCBwb3NpdGlvbnNbMTY2XS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzc5XS54IC8gNCwgcG9zaXRpb25zWzc5XS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzIzOV0ueCAvIDQsIHBvc2l0aW9uc1syMzldLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMjM4XS54IC8gNCwgcG9zaXRpb25zWzIzOF0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s0NThdLnggLyA0LCBwb3NpdGlvbnNbNDU4XS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzQ1OV0ueCAvIDQsIHBvc2l0aW9uc1s0NTldLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMzA5XS54IC8gNCwgcG9zaXRpb25zWzMwOV0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1szOTJdLnggLyA0LCBwb3NpdGlvbnNbMzkyXS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzI4OV0ueCAvIDQsIHBvc2l0aW9uc1syODldLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMzA1XS54IC8gNCwgcG9zaXRpb25zWzMwNV0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1syOTBdLnggLyA0LCBwb3NpdGlvbnNbMjkwXS55IC8gNCk7XHJcbi8vICAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzMyOF0ueCAvIDQsIHBvc2l0aW9uc1szMjhdLnkgLyA0KTtcclxuLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMzI2XS54IC8gNCwgcG9zaXRpb25zWzMyNl0ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s5N10ueCAvIDQsIHBvc2l0aW9uc1s5N10ueSAvIDQpO1xyXG4vLyAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbi8vICAgICB0aGlzLmN0eC5jbGlwKCk7XHJcbi8vICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbi8vICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcblxyXG4vLyAgICAgLy8x7LCoIO2BrOuhreuQnCDsnbTrr7jsp4DtgazquLDsnZgg7IOIIOy6lOuyhOyKpOulvCDrp4zrk6TslrQg7J2066+47KeA66W8IOuzteyCrO2VnOuLpC5cclxuLy8gICAgIC8v7YGs66Gt7ZWcIOy6lOuyhOyKpOulvCDqt7jrjIDroZwg7IKs7Jqp7ZWY66m0IOy6lOuyhOyKpCDtgazquLDripQg6re464yA66Gc6riwIOuVjOusuOyXkCDrsJjrs7XrrLjsl5DshJwg67aI7ZWE7JqU7ZWcIOuwmOuzteydtCDrp47slYTsp4DquLAg65WM66y4XHJcbi8vICAgICAvLyBjb25zdCBiZXR0ZXJIaWdoID1cclxuLy8gICAgIC8vICAgcG9zaXRpb25zWzIzNF0ueS8zID4gcG9zaXRpb25zWzQ1NF0ueS8zID8gcG9zaXRpb25zWzQ1NF0ueS8zIDogcG9zaXRpb25zWzIzNF0ueS8zO1xyXG4vLyAgICAgLy8gY29uc3Qgd2lkdGggPSBwb3NpdGlvbnNbNDU0XS54LzMgLSBwb3NpdGlvbnNbMjM0XS54LzM7XHJcbi8vICAgICAvLyBjb25zdCBoZWlnaHQgPSBwb3NpdGlvbnNbMTUyXS55LzMgLSBiZXR0ZXJIaWdoO1xyXG4vLyAgICAgLy8gY29uc29sZS5sb2cod2lkdGgsIGhlaWdodCk7XHJcbi8vICAgICAvLyBpZiAod2lkdGggPD0gMCB8fCBoZWlnaHQgPD0gMCkgcmV0dXJuIHsgZXJyOiAnZmFjZSBub3QgZGV0ZWN0ZWQnIH07XHJcbi8vICAgICAvLyBjb25zdCBjYW52YXMyID0gY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xyXG4vLyAgICAgLy8gY29uc3QgY3R4MiA9IGNhbnZhczIuZ2V0Q29udGV4dCgnMmQnKTtcclxuLy8gICAgIC8vIGNvbnN0IGltYWdlRGF0YSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YShwb3NpdGlvbnNbMjM0XS54LzMsIGJldHRlckhpZ2gsIHdpZHRoLCBoZWlnaHQpO1xyXG4vLyAgICAgLy8gY3R4Mi5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuXHJcbi8vICAgICBsZXQgYXJyID0gWzAsIDAsIDBdO1xyXG4vLyAgICAgbGV0IGFycjIgPSBbMCwgMCwgMF07XHJcblxyXG4vLyAgICAgbGV0IGNudCA9IDA7XHJcbi8vICAgICBjb25zdCB3aGl0ZUxhYiA9IHtcclxuLy8gICAgICAgTDogMTAwLFxyXG4vLyAgICAgICBBOiAwLjAwNTI2MDQ5OTk1ODMwMzkxLFxyXG4vLyAgICAgICBCOiAtMC4wMTA0MDgxODQ1MjUyNjc5MjcsXHJcbi8vICAgICB9O1xyXG4vLyAgICAgY29uc3QgZGF0YUFyciA9IFtdO1xyXG4vLyAgICAgY29uc3QgcmdiQXJyID0gW107XHJcbi8vICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XHJcbi8vICAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSB0aGlzLmNhbnZhcy53aWR0aDsgeCsrKSB7XHJcbi8vICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDw9IHRoaXMuY2FudmFzLmhlaWdodDsgeSsrKSB7XHJcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YSh4LCB5LCAxLCAxKS5kYXRhO1xyXG4vLyAgICAgICAgIHJnYkFyci5wdXNoKGRhdGEpO1xyXG4vLyAgICAgICAgIGlmIChkYXRhLmV2ZXJ5KGkgPT4gaSAhPSAwKSkge1xyXG4vLyAgICAgICAgICAgY29uc3QgcmdiRGF0YSA9IFsuLi5kYXRhLnNsaWNlKDAsIDMpXTtcclxuLy8gICAgICAgICAgIGNvbnN0IExBQiA9IHJnYlRvTGFiKHJnYkRhdGEpO1xyXG4vLyAgICAgICAgICAgY29uc3QgY29sb3JEaWZmID0gbmV3IGRFMDAod2hpdGVMYWIsIExBQik7XHJcbi8vICAgICAgICAgICBjbnQrKztcclxuLy8gICAgICAgICAgIGFyci5mb3JFYWNoKChfaSwgaWR4KSA9PiAoYXJyW2lkeF0gKz0gZGF0YVtpZHhdKSk7XHJcbi8vICAgICAgICAgICBkYXRhQXJyLnB1c2goe1xyXG4vLyAgICAgICAgICAgICB4OiB4LFxyXG4vLyAgICAgICAgICAgICB5OiB5LFxyXG4vLyAgICAgICAgICAgICBjb2xvcjogY29sb3JEaWZmLmdldERlbHRhRSgpLFxyXG4vLyAgICAgICAgICAgICByZ2I6IGRhdGEuc2xpY2UoMCwgMyksXHJcbi8vICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGFyciA9IGFyci5tYXAoaSA9PiBpIC8gY250KTtcclxuLy8gICAgIGNvbnN0IGxhYiA9IHJnYlRvTGFiKGFycik7XHJcbi8vICAgICBjb25zdCBkaWZmID0gbmV3IGRFMDAod2hpdGVMYWIsIGxhYikuZ2V0RGVsdGFFKCk7XHJcbi8vICAgICBjb25zdCB3aGl0ZUNsZWFyID0gZGlmZiArIDE7XHJcbi8vICAgICBjb25zdCBibGFja0NsZWFyID0gZGlmZiAqIDIuNztcclxuLy8gICAgIGNvbnN0IGJsYWNrQ2xlYXIyID0gZGlmZiArIGRpZmYgKiAwLjI7XHJcbi8vICAgICBjb25zdCB3aGl0ZUNsZWFyMiA9IGRpZmYgLSBkaWZmICogMC4yO1xyXG4vLyAgICAgY29uc3QgbmV3RGF0YTogYW55ID0gW107XHJcbi8vICAgICBbLi4uZGF0YUFycl0uZm9yRWFjaChpID0+IHtcclxuLy8gICAgICAgaWYgKGRpZmYgPCAxNSkge1xyXG4vLyAgICAgICAgIGlmIChpLmNvbG9yIDwgd2hpdGVDbGVhciB8fCBpLmNvbG9yID4gYmxhY2tDbGVhcikge1xyXG4vLyAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KGkueCwgaS55LCAxLCAxKTtcclxuLy8gICAgICAgICAgIC8vIGRhdGFBcnIuc3BsaWNlKGRhdGFBcnIuaW5kZXhPZihpKSwxKVxyXG4vLyAgICAgICAgIH0gZWxzZSBuZXdEYXRhLnB1c2goaSk7XHJcbi8vICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgaWYgKGkuY29sb3IgPCB3aGl0ZUNsZWFyMiB8fCBpLmNvbG9yID4gYmxhY2tDbGVhcjIpIHtcclxuLy8gICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdChpLngsIGkueSwgMSwgMSk7XHJcbi8vICAgICAgICAgICAvLyBkYXRhQXJyLnNwbGljZShkYXRhQXJyLmluZGV4T2YoaSksMSlcclxuLy8gICAgICAgICB9IGVsc2UgbmV3RGF0YS5wdXNoKGkpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gICAgIC8vIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcclxuLy8gICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG4vLyAgICAgbmV3RGF0YS5mb3JFYWNoKChkYXRhOiBhbnkpID0+IHtcclxuLy8gICAgICAgYXJyMi5mb3JFYWNoKChfaSwgaWR4KSA9PiAoYXJyMltpZHhdICs9IGRhdGEucmdiW2lkeF0pKTtcclxuLy8gICAgIH0pO1xyXG4vLyAgICAgYXJyMiA9IGFycjIubWFwKGkgPT4gaSAvIG5ld0RhdGEubGVuZ3RoKTtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwi6rSR7JuQIOuwjyDqt7jrprzsnpAg7KCc6rGwIO2bhCBSR0IgPSBcIiwgYXJyMik7XHJcbi8vICAgICAvLyBvdXQyLm9uKFwiZmluaXNoXCIsICgpID0+IHtcclxuXHJcbi8vICAgICBjb25zdCBicmlnaHRuZXNzID0gdGhpcy5DYWxjdWxhdGVMaWdodG5lc3MoYXJyMik7XHJcbi8vICAgICBjb25zdCBzYXR1cmF0aW9uID0gdGhpcy5DYWxjdWxhdGVTYXR1cmF0aW9uKGFycjIpO1xyXG4vLyAgICAgY29uc3Qga2VsdmluID0gdGhpcy5yZ2JUb1RlbXAoYXJyMik7XHJcbi8vICAgICAvLyB9KTtcclxuLy8gICAgIC8vIGZzLnJlYWRGaWxlKCdyZ2IuanNvbicsKGVycixkYXRhKT0+e1xyXG4vLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZGF0YSkpO1xyXG4vLyAgICAgLy8gfSlcclxuLy8gICAgIC8vIGZzLndyaXRlRmlsZSgncmdiMi5qc29uJywgSlNPTi5zdHJpbmdpZnkocmdiQXJyKSwgKGVycikgPT4ge1xyXG4vLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICAvLyB9KVxyXG4vLyAgICAgdGhpcy5yZ2IgPSBhcnIyLm1hcCgobnVtLCBpZHgpID0+IG51bSArIHRoaXMucmdiW2lkeF0pO1xyXG4vLyAgICAgdGhpcy5rZWx2aW4gKz0ga2VsdmluO1xyXG4vLyAgICAgdGhpcy5zYXR1cmF0aW9uICs9IHNhdHVyYXRpb247XHJcbi8vICAgICB0aGlzLmJyaWdodG5lc3MgKz0gYnJpZ2h0bmVzcztcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIGFmdGVyQXJyOiBhcnIyLFxyXG4vLyAgICAgICBrZWx2aW4sXHJcbi8vICAgICAgIHNhdHVyYXRpb246IE1hdGgucm91bmQoc2F0dXJhdGlvbiAqIDEwMCksXHJcbi8vICAgICAgIGJyaWdodG5lc3M6IE1hdGgucm91bmQoYnJpZ2h0bmVzcyAqIDEwMCksXHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuLy8gICBnZXRTZWFzb24ocmdiRGF0YTogZmFjZURhdGFUeXBlKSB7XHJcbi8vICAgICBjb25zdCB7IGJyaWdodG5lc3MsIHNhdHVyYXRpb24sIGFmdGVyQXJyLCBrZWx2aW4gfSA9IHJnYkRhdGE7XHJcbi8vICAgICBjb25zdCB5ZWxsb3dQaW5rID0gdGhpcy5pc1llbGxvd1BpbmsoYWZ0ZXJBcnIpO1xyXG4vLyAgICAgY29uc3Qga2VsdmluU2NvcmUgPSB0aGlzLmdldEtlbHZpblNjb3JlKGtlbHZpbiwgeWVsbG93UGluayk7XHJcbi8vICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT1rZWx2aW5TY29yZSA9PT09PT09PT09PT09PT09PT09PScpO1xyXG4vLyAgICAgY29uc29sZS5sb2coa2VsdmluU2NvcmUpO1xyXG4vLyAgICAgLy8gbGV0IHNhdHVyYXRpb25SYXRlID0ga2VsdmluU2NvcmVbMF0gPiBrZWx2aW5TY29yZVsxXSA/IDM1IDogMTU7XHJcbi8vICAgICAvLyBsZXQgbGlnaHRTY29yZSA9IChicmlnaHRuZXNzIC0gNTUpICogKDEwMCAvIDQ1KTtcclxuLy8gICAgIC8vIGxpZ2h0U2NvcmUgPSBNYXRoLmFicyhsaWdodFNjb3JlKSA+IDEwMCA/IDEwMCA6IGxpZ2h0U2NvcmU7XHJcbi8vICAgICAvLyBsZXQgc2F0dXJhdGlvblNjb3JlID0gKHNhdHVyYXRpb24gLSBzYXR1cmF0aW9uUmF0ZSkgKiAoMTAwIC8gc2F0dXJhdGlvblJhdGUpO1xyXG4vLyAgICAgLy8gc2F0dXJhdGlvblNjb3JlID0gTWF0aC5hYnMoc2F0dXJhdGlvblNjb3JlKSA+IDEwMCA/IDEwMCA6IHNhdHVyYXRpb25TY29yZTtcclxuLy8gICAgIGxldCB0b25lTmFtZTtcclxuLy8gICAgIGlmIChzYXR1cmF0aW9uIDw9IDI1KSB7XHJcbi8vICAgICAgIGlmIChicmlnaHRuZXNzID49IDcxLjUpXHJcbi8vICAgICAgICAgLy/tjpjsnbxcclxuLy8gICAgICAgICB0b25lTmFtZSA9IGtlbHZpblNjb3JlWzBdID4ga2VsdmluU2NvcmVbMV0gPyAnc3ByaW5nTGlnaHQnIDogJ3N1bW1lckxpZ2h0JztcclxuLy8gICAgICAgZWxzZSBpZiAoYnJpZ2h0bmVzcyA+PSA1MC4zKVxyXG4vLyAgICAgICAgIC8v65287J207Yq4IOq3uOugiOydtOyLnCwg6re466CI7J207IucXHJcbi8vICAgICAgICAgdG9uZU5hbWUgPSBrZWx2aW5TY29yZVswXSA+IGtlbHZpblNjb3JlWzFdID8gJ2ZhbGxNdXRlJyA6ICdzdW1tZXJNdXRlJztcclxuLy8gICAgICAgLy/ri6Ttgawg6re466CI7J207IucXHJcbi8vICAgICAgIGVsc2UgdG9uZU5hbWUgPSBrZWx2aW5TY29yZVswXSA+IGtlbHZpblNjb3JlWzFdID8gJ2ZhbGxEZWVwJyA6ICd3aW50ZXJEZWVwJztcclxuLy8gICAgIH0gZWxzZSBpZiAoc2F0dXJhdGlvbiA8PSAzNSkge1xyXG4vLyAgICAgICAvL+udvOydtO2KuFxyXG4vLyAgICAgICBpZiAoYnJpZ2h0bmVzcyA+PSA3MCkge1xyXG4vLyAgICAgICAgIGlmIChrZWx2aW5TY29yZVswXSA+IGtlbHZpblNjb3JlWzFdKSB0b25lTmFtZSA9ICdzcHJpbmdMaWdodCc7XHJcbi8vICAgICAgICAgZWxzZSB0b25lTmFtZSA9IHNhdHVyYXRpb24gPD0gMzAuNSA/ICdzdW1tZXJMaWdodCcgOiAnc3VtbWVyQnJpZ2h0JztcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAvL+yGjO2UhO2KuCwg642cXHJcbi8vICAgICAgIGVsc2UgaWYgKGJyaWdodG5lc3MgPj0gNTApXHJcbi8vICAgICAgICAgdG9uZU5hbWUgPSBrZWx2aW5TY29yZVswXSA+IGtlbHZpblNjb3JlWzFdID8gJ2ZhbGxNdXRlJyA6ICdzdW1tZXJNdXRlJztcclxuLy8gICAgICAgLy/ri6TtgaxcclxuLy8gICAgICAgZWxzZSB0b25lTmFtZSA9IGtlbHZpblNjb3JlWzBdID4ga2VsdmluU2NvcmVbMV0gPyAnZmFsbERlZXAnIDogJ3dpbnRlckRlZXAnO1xyXG4vLyAgICAgfSBlbHNlIGlmIChzYXR1cmF0aW9uIDw9IDQ1KSB7XHJcbi8vICAgICAgIC8v67iM65287J207Yq4XHJcbi8vICAgICAgIGlmIChicmlnaHRuZXNzID49IDYzLjcpXHJcbi8vICAgICAgICAgdG9uZU5hbWUgPSBrZWx2aW5TY29yZVswXSA+IGtlbHZpblNjb3JlWzFdID8gJ3NwcmluZ0JyaWdodCcgOiAnc3VtbWVyQnJpZ2h0JztcclxuLy8gICAgICAgLy/siqTtirjrobFcclxuLy8gICAgICAgZWxzZSBpZiAoYnJpZ2h0bmVzcyA+PSA1My43KVxyXG4vLyAgICAgICAgIHRvbmVOYW1lID0ga2VsdmluU2NvcmVbMF0gPiBrZWx2aW5TY29yZVsxXSA/ICdmYWxsU3Ryb25nJyA6ICd3aW50ZXJCcmlnaHQnO1xyXG4vLyAgICAgICAvL+uUpVxyXG4vLyAgICAgICBlbHNlIHRvbmVOYW1lID0ga2VsdmluU2NvcmVbMF0gPiBrZWx2aW5TY29yZVsxXSA/ICdmYWxsRGVlcCcgOiAnd2ludGVyRGVlcCc7XHJcbi8vICAgICB9XHJcbi8vICAgICAvL+u5hOu5hOuTnFxyXG4vLyAgICAgZWxzZSB0b25lTmFtZSA9IGtlbHZpblNjb3JlWzBdID4ga2VsdmluU2NvcmVbMV0gPyAnc3ByaW5nQnJpZ2h0JyA6ICd3aW50ZXJCcmlnaHQnO1xyXG5cclxuLy8gICAgIGxldCBmYWNlWCA9ICgoc2F0dXJhdGlvbiAtIDE1KSAvIDQwKSAqIDQ7XHJcbi8vICAgICBsZXQgZmFjZVkgPSAoKGJyaWdodG5lc3MgLSA0MCkgLyA0MCkgKiA0O1xyXG4vLyAgICAgZmFjZVggPSBmYWNlWCA+IDQgPyA0IDogZmFjZVg7XHJcbi8vICAgICBmYWNlWCA9IGZhY2VYIDwgMCA/IDAgOiBmYWNlWDtcclxuLy8gICAgIGZhY2VZID0gZmFjZVkgPiA0ID8gNCA6IGZhY2VZO1xyXG4vLyAgICAgZmFjZVkgPSBmYWNlWSA8IDAgPyAwIDogZmFjZVk7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAvLyBsZWZ0OiBNYXRoLnJvdW5kKHNwcmluZ1N1bW1lciksXHJcbi8vICAgICAgIC8vIHJpZ2h0OiBNYXRoLnJvdW5kKGZhbGxXaW50ZXIpLFxyXG4vLyAgICAgICB1c2VyUG9zOiB7XHJcbi8vICAgICAgICAgZmFjZVgsXHJcbi8vICAgICAgICAgZmFjZVksXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIGtlbHZpblNjb3JlLFxyXG4vLyAgICAgICByZXN1bHQ6IHRvbmVOYW1lLFxyXG4vLyAgICAgICByZXN1bHRLb3I6IHRoaXMubGFiZWxLb3JbdGhpcy5sYWJlbC5pbmRleE9mKHRvbmVOYW1lKV0sXHJcbi8vICAgICAgIGJyaWdodG5lc3M6IGJyaWdodG5lc3MgPCA1MCA/IDAgOiBicmlnaHRuZXNzIDwgNzAgPyAxIDogMixcclxuLy8gICAgICAgc2F0dXJhdGlvbjogc2F0dXJhdGlvbiA8IDI1ID8gMCA6IHNhdHVyYXRpb24gPCA0NSA/IDEgOiAyLFxyXG4vLyAgICAgfTtcclxuLy8gICB9XHJcbi8vICAgaXNZZWxsb3dQaW5rKGFycjogYW55KSB7XHJcbi8vICAgICBjb25zdCBsYWJDb2xvciA9IHJnYlRvTGFiKGFycik7XHJcbi8vICAgICBsZXQgeWVsbG93ID0gMDtcclxuLy8gICAgIGxldCBwaW5rID0gMDtcclxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy55ZWxsb3dQaW5rLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgIGNvbnN0IGRlbHRhID0gbmV3IGRFMDAobGFiQ29sb3IsIHRoaXMueWVsbG93UGlua1tpXSk7XHJcbi8vICAgICAgIGlmIChpIDwgMykgeWVsbG93ICs9IDEwMy41IC0gZGVsdGEuZ2V0RGVsdGFFKCk7XHJcbi8vICAgICAgIGVsc2UgcGluayArPSAxMDAgLSBkZWx0YS5nZXREZWx0YUUoKTtcclxuLy8gICAgIH1cclxuLy8gICAgIGNvbnN0IHllbGxvd1Jlc3VsdCA9IHllbGxvdyAvIDM7XHJcbi8vICAgICBjb25zdCBwaW5rUmVzdWx0ID0gcGluayAvIDM7XHJcbi8vICAgICBjb25zdCBzdW0gPSB5ZWxsb3dSZXN1bHQgKyBwaW5rUmVzdWx0O1xyXG4vLyAgICAgY29uc3QgeWVsbG93UGVyY2VudCA9ICh5ZWxsb3dSZXN1bHQgLyBzdW0pICogMTAwO1xyXG4vLyAgICAgY29uc3QgcGlua1BlcmNlbnQgPSAocGlua1Jlc3VsdCAvIHN1bSkgKiAxMDA7XHJcbi8vICAgICByZXR1cm4gW3BhcnNlRmxvYXQoeWVsbG93UGVyY2VudC50b0ZpeGVkKDIpKSwgcGFyc2VGbG9hdChwaW5rUGVyY2VudC50b0ZpeGVkKDIpKV07XHJcbi8vICAgfVxyXG5cclxuLy8gICBnZXRLZWx2aW5TY29yZShrZWx2aW46IG51bWJlciwgYmFzZUNvbG9yOiBhbnlbXSkge1xyXG4vLyAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09YmFzZUNvbG9yID09PT09PT09PT09PT09PT09PT09Jyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhiYXNlQ29sb3IpO1xyXG4vLyAgICAgY29uc3QgYXZnID0gNDA3MDtcclxuLy8gICAgIGNvbnN0IGNhbCA9IGF2ZyAtIGtlbHZpbjtcclxuLy8gICAgIGlmIChjYWwgPCAwKSByZXR1cm4gW2Jhc2VDb2xvclswXSwgYmFzZUNvbG9yWzFdICsgTWF0aC5hYnMoY2FsIC8gNDA3MCkgKiA4XTtcclxuLy8gICAgIHJldHVybiBbYmFzZUNvbG9yWzBdICsgTWF0aC5hYnMoY2FsIC8gNDA3MCkgKiA4LCBiYXNlQ29sb3JbMV1dO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgQ2FsY3VsYXRlTGlnaHRuZXNzKGFycjogYW55W10pIHtcclxuLy8gICAgIGNvbnN0IFIgPSBhcnJbMF07XHJcbi8vICAgICBjb25zdCBHID0gYXJyWzFdO1xyXG4vLyAgICAgY29uc3QgQiA9IGFyclsyXTtcclxuLy8gICAgIGxldCBNYXggPSAwLjA7XHJcbi8vICAgICBsZXQgTWluID0gMC4wO1xyXG5cclxuLy8gICAgIGNvbnN0IGZSID0gUiAvIDI1NS4wO1xyXG4vLyAgICAgY29uc3QgZkcgPSBHIC8gMjU1LjA7XHJcbi8vICAgICBjb25zdCBmQiA9IEIgLyAyNTUuMDtcclxuXHJcbi8vICAgICBpZiAoZlIgPj0gZkcgJiYgZlIgPj0gZkIpIE1heCA9IGZSO1xyXG4vLyAgICAgZWxzZSBpZiAoZkcgPj0gZkIgJiYgZkcgPj0gZlIpIE1heCA9IGZHO1xyXG4vLyAgICAgZWxzZSBpZiAoZkIgPj0gZkcgJiYgZkIgPj0gZlIpIE1heCA9IGZCO1xyXG5cclxuLy8gICAgIGlmIChmUiA8PSBmRyAmJiBmUiA8PSBmQikgTWluID0gZlI7XHJcbi8vICAgICBlbHNlIGlmIChmRyA8PSBmQiAmJiBmRyA8PSBmUikgTWluID0gZkc7XHJcbi8vICAgICBlbHNlIGlmIChmQiA8PSBmRyAmJiBmQiA8PSBmUikgTWluID0gZkI7XHJcblxyXG4vLyAgICAgY29uc3QgTGlnaHRuZXNzID0gKE1pbiArIE1heCkgLyAyLjA7XHJcblxyXG4vLyAgICAgcmV0dXJuIExpZ2h0bmVzcztcclxuLy8gICB9XHJcbi8vICAgLy9SR0LqsJLsnYQg7Ya17ZW0IOyxhOuPhOqwkiDqtaztlZjquLBcclxuLy8gICAvL0BwYXJhbSA6IFJHQiDrsLDsl7RcclxuXHJcbi8vICAgQ2FsY3VsYXRlU2F0dXJhdGlvbihhcnI6IGFueVtdKSB7XHJcbi8vICAgICBjb25zdCBSID0gYXJyWzBdO1xyXG4vLyAgICAgY29uc3QgRyA9IGFyclsxXTtcclxuLy8gICAgIGNvbnN0IEIgPSBhcnJbMl07XHJcbi8vICAgICBsZXQgTWF4ID0gMC4wO1xyXG4vLyAgICAgbGV0IE1pbiA9IDAuMDtcclxuXHJcbi8vICAgICBjb25zdCBmUiA9IFIgLyAyNTUuMDtcclxuLy8gICAgIGNvbnN0IGZHID0gRyAvIDI1NS4wO1xyXG4vLyAgICAgY29uc3QgZkIgPSBCIC8gMjU1LjA7XHJcblxyXG4vLyAgICAgaWYgKGZSID49IGZHICYmIGZSID49IGZCKSBNYXggPSBmUjtcclxuLy8gICAgIGVsc2UgaWYgKGZHID49IGZCICYmIGZHID49IGZSKSBNYXggPSBmRztcclxuLy8gICAgIGVsc2UgaWYgKGZCID49IGZHICYmIGZCID49IGZSKSBNYXggPSBmQjtcclxuXHJcbi8vICAgICBpZiAoZlIgPD0gZkcgJiYgZlIgPD0gZkIpIE1pbiA9IGZSO1xyXG4vLyAgICAgZWxzZSBpZiAoZkcgPD0gZkIgJiYgZkcgPD0gZlIpIE1pbiA9IGZHO1xyXG4vLyAgICAgZWxzZSBpZiAoZkIgPD0gZkcgJiYgZkIgPD0gZlIpIE1pbiA9IGZCO1xyXG5cclxuLy8gICAgIGNvbnN0IExpZ2h0bmVzcyA9IHRoaXMuQ2FsY3VsYXRlTGlnaHRuZXNzKFtSLCBHLCBCXSk7XHJcblxyXG4vLyAgICAgbGV0IFNhdHVyYXRpb247XHJcblxyXG4vLyAgICAgaWYgKE1heCA9PSBNaW4pIHtcclxuLy8gICAgICAgU2F0dXJhdGlvbiA9IC0xLjA7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBpZiAoTGlnaHRuZXNzIDwgMC41KSB7XHJcbi8vICAgICAgICAgU2F0dXJhdGlvbiA9IChNYXggLSBNaW4pIC8gKE1heCArIE1pbik7XHJcbi8vICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgU2F0dXJhdGlvbiA9IChNYXggLSBNaW4pIC8gKDIuMCAtIE1heCAtIE1pbik7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4gU2F0dXJhdGlvbjtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJnYlRvVGVtcChyZ2I6IG51bWJlcltdKSB7XHJcbi8vICAgICBsZXQgdGVtcGVyYXR1cmUgPSAwO1xyXG4vLyAgICAgbGV0IHRlc3RSR0I7XHJcbi8vICAgICBjb25zdCBlcHNpbG9uID0gMC40O1xyXG4vLyAgICAgbGV0IG1pblRlbXBlcmF0dXJlID0gMTAwMDtcclxuLy8gICAgIGxldCBtYXhUZW1wZXJhdHVyZSA9IDEyMDAwO1xyXG4vLyAgICAgd2hpbGUgKG1heFRlbXBlcmF0dXJlIC0gbWluVGVtcGVyYXR1cmUgPiBlcHNpbG9uKSB7XHJcbi8vICAgICAgIHRlbXBlcmF0dXJlID0gKG1heFRlbXBlcmF0dXJlICsgbWluVGVtcGVyYXR1cmUpIC8gMjtcclxuLy8gICAgICAgdGVzdFJHQiA9IHRoaXMuY29sb3JUZW1wZXJhdHVyZTJyZ2IodGVtcGVyYXR1cmUpO1xyXG4vLyAgICAgICBpZiAodGVzdFJHQlsyXSAvIHRlc3RSR0JbMF0gPj0gcmdiWzJdIC8gcmdiWzBdKSB7XHJcbi8vICAgICAgICAgbWF4VGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTtcclxuLy8gICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBtaW5UZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gTWF0aC5yb3VuZCh0ZW1wZXJhdHVyZSk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBjb2xvclRlbXBlcmF0dXJlMnJnYihrZWx2aW46IG51bWJlcikge1xyXG4vLyAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBrZWx2aW4gLyAxMDAuMDtcclxuLy8gICAgIGxldCByZWQsIGdyZWVuLCBibHVlO1xyXG5cclxuLy8gICAgIGlmICh0ZW1wZXJhdHVyZSA8IDY2LjApIHtcclxuLy8gICAgICAgcmVkID0gMjU1O1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgLy8gYSArIGIgeCArIGMgTG9nW3hdIC8uXHJcbi8vICAgICAgIC8vIHthIC0+IDM1MS45NzY5MDU2NjgwNTY5M2AsXHJcbi8vICAgICAgIC8vIGIgLT4gMC4xMTQyMDY0NTM3ODQxNjVgLFxyXG4vLyAgICAgICAvLyBjIC0+IC00MC4yNTM2NjMwOTMzMjEyN1xyXG4vLyAgICAgICAvL3ggLT4gKGtlbHZpbi8xMDApIC0gNTV9XHJcbi8vICAgICAgIHJlZCA9IHRlbXBlcmF0dXJlIC0gNTUuMDtcclxuLy8gICAgICAgcmVkID0gMzUxLjk3NjkwNTY2ODA1NjkzICsgMC4xMTQyMDY0NTM3ODQxNjUgKiByZWQgLSA0MC4yNTM2NjMwOTMzMjEyNyAqIE1hdGgubG9nKHJlZCk7XHJcbi8vICAgICAgIGlmIChyZWQgPCAwKSByZWQgPSAwO1xyXG4vLyAgICAgICBpZiAocmVkID4gMjU1KSByZWQgPSAyNTU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLyogQ2FsY3VsYXRlIGdyZWVuICovXHJcblxyXG4vLyAgICAgaWYgKHRlbXBlcmF0dXJlIDwgNjYuMCkge1xyXG4vLyAgICAgICAvLyBhICsgYiB4ICsgYyBMb2dbeF0gLy5cclxuLy8gICAgICAgLy8ge2EgLT4gLTE1NS4yNTQ4NTU2MjcwOTE3OWAsXHJcbi8vICAgICAgIC8vIGIgLT4gLTAuNDQ1OTY5NTA0Njk1NzkxMzNgLFxyXG4vLyAgICAgICAvLyBjIC0+IDEwNC40OTIxNjE5OTM5Mzg4OGAsXHJcbi8vICAgICAgIC8vIHggLT4gKGtlbHZpbi8xMDApIC0gMn1cclxuLy8gICAgICAgZ3JlZW4gPSB0ZW1wZXJhdHVyZSAtIDI7XHJcbi8vICAgICAgIGdyZWVuID1cclxuLy8gICAgICAgICAtMTU1LjI1NDg1NTYyNzA5MTc5IC0gMC40NDU5Njk1MDQ2OTU3OTEzMyAqIGdyZWVuICsgMTA0LjQ5MjE2MTk5MzkzODg4ICogTWF0aC5sb2coZ3JlZW4pO1xyXG4vLyAgICAgICBpZiAoZ3JlZW4gPCAwKSBncmVlbiA9IDA7XHJcbi8vICAgICAgIGlmIChncmVlbiA+IDI1NSkgZ3JlZW4gPSAyNTU7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAvLyBhICsgYiB4ICsgYyBMb2dbeF0gLy5cclxuLy8gICAgICAgLy8ge2EgLT4gMzI1LjQ0OTQxMjU3MTE5NzRgLFxyXG4vLyAgICAgICAvLyBiIC0+IDAuMDc5NDM0NTY1MzY2NjIzNDJgLFxyXG4vLyAgICAgICAvLyBjIC0+IC0yOC4wODUyOTYzNTA3OTU3YCxcclxuLy8gICAgICAgLy8geCAtPiAoa2VsdmluLzEwMCkgLSA1MH1cclxuLy8gICAgICAgZ3JlZW4gPSB0ZW1wZXJhdHVyZSAtIDUwLjA7XHJcbi8vICAgICAgIGdyZWVuID0gMzI1LjQ0OTQxMjU3MTE5NzQgKyAwLjA3OTQzNDU2NTM2NjYyMzQyICogZ3JlZW4gLSAyOC4wODUyOTYzNTA3OTU3ICogTWF0aC5sb2coZ3JlZW4pO1xyXG4vLyAgICAgICBpZiAoZ3JlZW4gPCAwKSBncmVlbiA9IDA7XHJcbi8vICAgICAgIGlmIChncmVlbiA+IDI1NSkgZ3JlZW4gPSAyNTU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLyogQ2FsY3VsYXRlIGJsdWUgKi9cclxuXHJcbi8vICAgICBpZiAodGVtcGVyYXR1cmUgPj0gNjYuMCkge1xyXG4vLyAgICAgICBibHVlID0gMjU1O1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgaWYgKHRlbXBlcmF0dXJlIDw9IDIwLjApIHtcclxuLy8gICAgICAgICBibHVlID0gMDtcclxuLy8gICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAvLyBhICsgYiB4ICsgYyBMb2dbeF0gLy5cclxuLy8gICAgICAgICAvLyB7YSAtPiAtMjU0Ljc2OTM1MTg0MTIwOTAyYCxcclxuLy8gICAgICAgICAvLyBiIC0+IDAuODI3NDA5NjA2NDAwNzM5NWAsXHJcbi8vICAgICAgICAgLy8gYyAtPiAxMTUuNjc5OTQ0MDEwNjYxNDdgLFxyXG4vLyAgICAgICAgIC8vIHggLT4ga2VsdmluLzEwMCAtIDEwfVxyXG4vLyAgICAgICAgIGJsdWUgPSB0ZW1wZXJhdHVyZSAtIDEwO1xyXG4vLyAgICAgICAgIGJsdWUgPVxyXG4vLyAgICAgICAgICAgLTI1NC43NjkzNTE4NDEyMDkwMiArIDAuODI3NDA5NjA2NDAwNzM5NSAqIGJsdWUgKyAxMTUuNjc5OTQ0MDEwNjYxNDcgKiBNYXRoLmxvZyhibHVlKTtcclxuLy8gICAgICAgICBpZiAoYmx1ZSA8IDApIGJsdWUgPSAwO1xyXG4vLyAgICAgICAgIGlmIChibHVlID4gMjU1KSBibHVlID0gMjU1O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmV0dXJuIFtNYXRoLnJvdW5kKHJlZCksIE1hdGgucm91bmQoZ3JlZW4pLCBNYXRoLnJvdW5kKGJsdWUpXTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGdldEZhY2VEYXRhO1xyXG5pbXBvcnQgZEUwMCBmcm9tICcuL2RFMDAnO1xyXG5pbXBvcnQgcmdiVG9MYWIgZnJvbSAnLi9yZ2JUb0xhYk9iaic7XHJcblxyXG4vLyBjb25zdCBjYW52YXMgPSBjcmVhdGVDYW52YXMoMjAwLCAyMDApXHJcbi8vIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcbmludGVyZmFjZSBmYWNlRGF0YVR5cGUge1xyXG4gIGFmdGVyQXJyOiBudW1iZXJbXTtcclxuICBrZWx2aW46IG51bWJlcjtcclxuICBzYXR1cmF0aW9uOiBudW1iZXI7XHJcbiAgYnJpZ2h0bmVzczogbnVtYmVyO1xyXG59XHJcbmNsYXNzIGdldEZhY2VEYXRhIHtcclxuICByZ2I6IG51bWJlcltdID0gWzAsIDAsIDBdO1xyXG4gIGtlbHZpbiA9IDA7XHJcbiAgYnJpZ2h0bmVzcyA9IDA7XHJcbiAgc2F0dXJhdGlvbiA9IDA7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICB3YXJtQ29sb3IgPSBbXHJcbiAgICAvL+u0hFxyXG4gICAgeyBMOiA5My4yNDMwODUwMTcwNzM3MiwgQTogMS44ODMxNjUzOTE4Nzc1NTA0LCBCOiAyMC43MTg2NDYyOTI0NDU4NjUgfSxcclxuICAgIHsgTDogOTAuNTIyODkxMjgzODM2MjYsIEE6IDMuMjMzNjY2MDE1MTE4MTUzLCBCOiAyOC4zMDc5Mzc1NDY3NjYyMzcgfSxcclxuICAgIHsgTDogODcuODY0MjQzMzc1NTI5NTQsIEE6IDUuMDM5NzgxODE1MTAzMDYyLCBCOiAzNS41MTA1Nzk1NDg1NDAwMiB9LFxyXG4gICAgeyBMOiA4NC4wMjU1NTQzNDQ1ODYzNSwgQTogNy4zMDM1OTM3NTAzOTMwNzksIEI6IDMyLjM1MjM5NDk4NTUxMDU5IH0sXHJcbiAgICAvL+qwgOydhFxyXG4gICAgeyBMOiA4OC4wMTQyMjU3NjQyMzQxNywgQTogMC40NDQ2OTEwNTkzNjQ4NDM0MywgQjogMjIuMDY2NTk0MzI3ODc2NTY1IH0sXHJcbiAgICB7IEw6IDg1LjQwNzA5MzU1NzcyMzkzLCBBOiAyLjYyODA3NTU1NDQ0MjM4ODQsIEI6IDI4LjM5NTE4MzE4ODkxNzQ3IH0sXHJcbiAgICB7IEw6IDc5Ljc3Mzc1NDg0NDEzNDgxLCBBOiA3Ljc2NTIzMTE2MzcwNTkyMiwgQjogMzEuNzMwMDI3NTc5NDc2MjA3IH0sXHJcbiAgICB7IEw6IDc1Ljc2MTU0NzE4MDY4MDc4LCBBOiA3LjIzMzIxNjY4MjA4ODY1LCBCOiA0MC4zODAwNzg1ODEzNTA0OSB9LFxyXG4gIF07XHJcbiAgY29vbENvbG9yID0gW1xyXG4gICAgLy/sl6zrpoRcclxuICAgIHsgTDogOTQuNTAxNjc0OTY4NTE5MzcsIEE6IDQuMTM5ODM0MjIzMTU2MDU4LCBCOiA3Ljk5NjAwOTQ4MDY0OTY2OCB9LFxyXG4gICAgeyBMOiA5Mi4xMzI2OTk2OTAzMzgzNiwgQTogNy40MDY4NDMxMzMzNTQxNTcsIEI6IDEwLjMzMjQwNTIxNjY3NzY2NCB9LFxyXG4gICAgeyBMOiA5MC42OTUxMTg5OTg4Mzk3NiwgQTogOC41MDY3NDg2NDU5MzA4MTYsIEI6IDEzLjUwNjMxNDM4ODQ3OTc1NyB9LFxyXG4gICAgeyBMOiA4Ni40NTI3MzkxMDc4MTE3MSwgQTogMTEuMjgxNDc5OTcxMTQ0OTgsIEI6IDE3LjQzNTkwMDkyMTY0NjE1IH0sXHJcbiAgICAvL+qyqOyauFxyXG4gICAgeyBMOiA5Mi4zNTcyNTM1MjEwNzAwNCwgQTogMy44NTA3NTMwNzQ4ODYzMDQsIEI6IDkuMDEzMDI2MjEwMDQyMjUyIH0sXHJcbiAgICB7IEw6IDkxLjI3MzQyMjY0MjE0NjEsIEE6IDUuMDI4MjczNzYyMDg4MDg3LCBCOiAxMS42NDY1OTA5NDA1NDI5IH0sXHJcbiAgICB7IEw6IDg4LjIxMzY1NDY3MzQ3NTIyLCBBOiA2Ljc1NzYyNDcwMjIwOTQ3NCwgQjogMTUuNjQ5OTE1NzU0MTU1NTk3IH0sXHJcbiAgICB7IEw6IDg0LjMxMzMxMjkyMDI4NzkxLCBBOiA2LjY3ODYxOTQ2NzMxNDI0LCBCOiAxNy45NTE4NzkyMjM4MjY4ODIgfSxcclxuICBdO1xyXG5cclxuICBjb2xvckxpc3QgPSBbXHJcbiAgICB0aGlzLndhcm1Db2xvclswXSxcclxuICAgIHRoaXMud2FybUNvbG9yWzFdLFxyXG4gICAgdGhpcy53YXJtQ29sb3JbMl0sXHJcbiAgICB0aGlzLndhcm1Db2xvclszXSxcclxuICAgIHRoaXMud2FybUNvbG9yWzRdLFxyXG4gICAgdGhpcy53YXJtQ29sb3JbNV0sXHJcbiAgICB0aGlzLndhcm1Db2xvcls2XSxcclxuICAgIHRoaXMud2FybUNvbG9yWzddLFxyXG4gICAgdGhpcy5jb29sQ29sb3JbMF0sXHJcbiAgICB0aGlzLmNvb2xDb2xvclsxXSxcclxuICAgIHRoaXMuY29vbENvbG9yWzJdLFxyXG4gICAgdGhpcy5jb29sQ29sb3JbM10sXHJcbiAgICB0aGlzLmNvb2xDb2xvcls0XSxcclxuICAgIHRoaXMuY29vbENvbG9yWzVdLFxyXG4gICAgdGhpcy5jb29sQ29sb3JbNl0sXHJcbiAgICB0aGlzLmNvb2xDb2xvcls3XSxcclxuICBdO1xyXG5cclxuICB5ZWxsb3dQaW5rID0gW1xyXG4gICAgLy8geyBMOiA5MC4xMjI3OTQzNTIxMTYyMywgQTogNS4zMTU4OTY0MTEwMjg2OTgsIEI6IDIwLjQ4NjIyNjYxNjE4MjEzNyB9LFxyXG4gICAgLy8geyBMOiA4NS42MDQ2OTU2MTE0OTExNSwgQTogOC4wNjU1MjY1MTc5NjI5OTUsIEI6IDMwLjM5MDA0MjA2OTUxNzY3NiB9LFxyXG4gICAgLy8geyBMOiA5MC4xMjI3OTQzNTIxMTYyMywgQTogMTMuMjUzMzY5NTM5NTMyMzIyLCBCOiAxNC45MjY0NzIxNzY1NDA1MjggfSxcclxuICAgIC8vIHsgTDogODUuNjA0Njk1NjExNDkxMTUsIEE6IDE5LjM0ODE0NDkzMDQ2NTgzLCBCOiAyMC4zNTgzMTMzMzQwNTgzNzYgfSxcclxuICAgIHsgTDogODUuNTEyMjQwMzQ2NDMxNywgQTogNy42NzkyMDQ0NjcwNzYyMDYsIEI6IDMwLjI1MDA3NjI2MzY1NzQ5OCB9LFxyXG4gICAgeyBMOiA4OC40MDg3NjUwODkxMzY4NCwgQTogNS40NzAwMjgwNjE5ODU5ODcsIEI6IDIxLjcwMjMxNTE2NzgzMTk2NiB9LFxyXG4gICAgeyBMOiA5MS42ODcxNzkxMjU3ODQxMSwgQTogMi4wNjI0NTMwNDc0NDI1MTQsIEI6IDEyLjE5MDI4Mzc3MDkxMDA3IH0sXHJcbiAgICB7IEw6IDg1LjUxMjI0MDM0NjQzMTcsIEE6IDE4LjEzNzcwODgwNDM0NTM0NCwgQjogMjMuNzQ1NjgxMjM5MTI3OTI2IH0sXHJcbiAgICB7IEw6IDg4LjQwODc2NTA4OTEzNjg0LCBBOiAxMi43NDQzNDUwOTM2MDkwNTYsIEI6IDE2Ljk1NzA1ODQxNTI5MjQ0OCB9LFxyXG4gICAgeyBMOiA5MS42ODcxNzkxMjU3ODQxMSwgQTogNi4xODAxMjU0MjA3NjYxMjQ1LCBCOiA5LjM3MDU4Njc3MzU4NDg0NCB9LFxyXG4gIF07XHJcblxyXG4gIGxhYmVsID0gW1xyXG4gICAgJ251bGwnLFxyXG4gICAgJ251bGwnLFxyXG4gICAgJ251bGwnLFxyXG4gICAgJ251bGwnLFxyXG4gICAgJ3NwcmluZ0xpZ2h0JyxcclxuICAgICdzcHJpbmdCcmlnaHQnLFxyXG4gICAgJ3N1bW1lckxpZ2h0JyxcclxuICAgICdzdW1tZXJNdXRlJyxcclxuICAgICdzdW1tZXJCcmlnaHQnLFxyXG4gICAgJ2ZhbGxNdXRlJyxcclxuICAgICdmYWxsU3Ryb25nJyxcclxuICAgICdmYWxsRGVlcCcsXHJcbiAgICAnd2ludGVyQnJpZ2h0JyxcclxuICAgICd3aW50ZXJEZWVwJyxcclxuICBdO1xyXG4gIGxhYmVsS29yID0gW1xyXG4gICAgJ251bGwnLFxyXG4gICAgJ251bGwnLFxyXG4gICAgJ251bGwnLFxyXG4gICAgJ251bGwnLFxyXG4gICAgJ+u0hCDrnbzsnbTtirgnLFxyXG4gICAgJ+u0hCDruIzrnbzsnbTtirgnLFxyXG4gICAgJ+yXrOumhCDrnbzsnbTtirgnLFxyXG4gICAgJ+yXrOumhCDrrqTtirgnLFxyXG4gICAgJ+yXrOumhCDruIzrnbzsnbTtirgnLFxyXG4gICAgJ+qwgOydhCDrrqTtirgnLFxyXG4gICAgJ+qwgOydhCDsiqTtirjrobEnLFxyXG4gICAgJ+qwgOydhCDrlKUnLFxyXG4gICAgJ+qyqOyauCDruIzrnbzsnbTtirgnLFxyXG4gICAgJ+qyqOyauCDrlKUnLFxyXG4gIF07XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHZpZGVvLnZpZGVvV2lkdGggLyA0O1xyXG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQgLyA0O1xyXG4gICAgdGhpcy52aWRlbyA9IHZpZGVvO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YShwb3NpdGlvbnM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdKSB7XHJcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIC8vIHRoaXMuY3R4Lm1vdmVUbyhwb3NpdGlvbnNbMTBdLngvMywgcG9zaXRpb25zWzEwXS55LzMpXHJcbiAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzMzOF0ueC8zLCBwb3NpdGlvbnNbMzM4XS55LzMpXHJcbiAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzI5N10ueC8zLCBwb3NpdGlvbnNbMjk3XS55LzMpXHJcbiAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzMzMl0ueC8zLCBwb3NpdGlvbnNbMzMyXS55LzMpXHJcbiAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzI4NF0ueC8zLCBwb3NpdGlvbnNbMjg0XS55LzMpXHJcbiAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzI1MV0ueC8zLCBwb3NpdGlvbnNbMjUxXS55LzMpXHJcbiAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzM4OV0ueC8zLCBwb3NpdGlvbnNbMzg5XS55LzMpXHJcbiAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzM1Nl0ueC8zLCBwb3NpdGlvbnNbMzU2XS55LzMpXHJcbiAgICB0aGlzLmN0eC5tb3ZlVG8ocG9zaXRpb25zWzQ1NF0ueCAvIDQsIHBvc2l0aW9uc1s0NTRdLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMzIzXS54IC8gNCwgcG9zaXRpb25zWzMyM10ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1szNjFdLnggLyA0LCBwb3NpdGlvbnNbMzYxXS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzI4OF0ueCAvIDQsIHBvc2l0aW9uc1syODhdLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMzk3XS54IC8gNCwgcG9zaXRpb25zWzM5N10ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1szNjVdLnggLyA0LCBwb3NpdGlvbnNbMzY1XS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzM3OV0ueCAvIDQsIHBvc2l0aW9uc1szNzldLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMzc4XS54IC8gNCwgcG9zaXRpb25zWzM3OF0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s0MDBdLnggLyA0LCBwb3NpdGlvbnNbNDAwXS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzM3N10ueCAvIDQsIHBvc2l0aW9uc1szNzddLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTUyXS54IC8gNCwgcG9zaXRpb25zWzE1Ml0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1sxNDhdLnggLyA0LCBwb3NpdGlvbnNbMTQ4XS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzE3Nl0ueCAvIDQsIHBvc2l0aW9uc1sxNzZdLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTQ5XS54IC8gNCwgcG9zaXRpb25zWzE0OV0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1sxNTBdLnggLyA0LCBwb3NpdGlvbnNbMTUwXS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzEzNl0ueCAvIDQsIHBvc2l0aW9uc1sxMzZdLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTcyXS54IC8gNCwgcG9zaXRpb25zWzE3Ml0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s1OF0ueCAvIDQsIHBvc2l0aW9uc1s1OF0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1sxMzJdLnggLyA0LCBwb3NpdGlvbnNbMTMyXS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzkzXS54IC8gNCwgcG9zaXRpb25zWzkzXS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzIzNF0ueCAvIDQsIHBvc2l0aW9uc1syMzRdLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbNDU0XS54IC8gNCwgcG9zaXRpb25zWzQ1NF0ueSAvIDQpO1xyXG5cclxuICAgIC8vIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTI3XS54LzMsIHBvc2l0aW9uc1sxMjddLnkvMylcclxuICAgIC8vIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTYyXS54LzMsIHBvc2l0aW9uc1sxNjJdLnkvMylcclxuICAgIC8vIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMjFdLngvMywgcG9zaXRpb25zWzIxXS55LzMpXHJcbiAgICAvLyB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzU0XS54LzMsIHBvc2l0aW9uc1s1NF0ueS8zKVxyXG4gICAgLy8gdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1sxMDNdLngvMywgcG9zaXRpb25zWzEwM10ueS8zKVxyXG4gICAgLy8gdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s2N10ueC8zLCBwb3NpdGlvbnNbNjddLnkvMylcclxuICAgIC8vIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTA5XS54LzMsIHBvc2l0aW9uc1sxMDldLnkvMylcclxuICAgIC8vIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTBdLngvMywgcG9zaXRpb25zWzEwXS55LzMpXHJcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmNsaXAoKTtcclxuICAgIC8vIGxldCBjdHgyID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnZpZGVvLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4Lm1vdmVUbyhwb3NpdGlvbnNbNjFdLnggLyA0LCBwb3NpdGlvbnNbNjFdLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTg1XS54IC8gNCwgcG9zaXRpb25zWzE4NV0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s0MF0ueCAvIDQsIHBvc2l0aW9uc1s0MF0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1szOV0ueCAvIDQsIHBvc2l0aW9uc1szOV0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1szN10ueCAvIDQsIHBvc2l0aW9uc1szN10ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1swXS54IC8gNCwgcG9zaXRpb25zWzBdLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMjY3XS54IC8gNCwgcG9zaXRpb25zWzI2N10ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1syNjldLnggLyA0LCBwb3NpdGlvbnNbMjY5XS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzI3MF0ueCAvIDQsIHBvc2l0aW9uc1syNzBdLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbNDA5XS54IC8gNCwgcG9zaXRpb25zWzQwOV0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1syOTFdLnggLyA0LCBwb3NpdGlvbnNbMjkxXS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzM3NV0ueCAvIDQsIHBvc2l0aW9uc1szNzVdLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMzIxXS54IC8gNCwgcG9zaXRpb25zWzMyMV0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s0MDVdLnggLyA0LCBwb3NpdGlvbnNbNDA1XS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzMxNF0ueCAvIDQsIHBvc2l0aW9uc1szMTRdLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTddLnggLyA0LCBwb3NpdGlvbnNbMTddLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbODRdLnggLyA0LCBwb3NpdGlvbnNbODRdLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMTgxXS54IC8gNCwgcG9zaXRpb25zWzE4MV0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s5MV0ueCAvIDQsIHBvc2l0aW9uc1s5MV0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1sxNDZdLnggLyA0LCBwb3NpdGlvbnNbMTQ2XS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzYxXS54IC8gNCwgcG9zaXRpb25zWzYxXS55IC8gNCk7XHJcblxyXG4gICAgdGhpcy5jdHgubW92ZVRvKHBvc2l0aW9uc1s5N10ueCAvIDQsIHBvc2l0aW9uc1s5N10ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s5OV0ueCAvIDQsIHBvc2l0aW9uc1s5OV0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s3NV0ueCAvIDQsIHBvc2l0aW9uc1s3NV0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s1OV0ueCAvIDQsIHBvc2l0aW9uc1s1OV0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1sxNjZdLnggLyA0LCBwb3NpdGlvbnNbMTY2XS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzc5XS54IC8gNCwgcG9zaXRpb25zWzc5XS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzIzOV0ueCAvIDQsIHBvc2l0aW9uc1syMzldLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMjM4XS54IC8gNCwgcG9zaXRpb25zWzIzOF0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s0NThdLnggLyA0LCBwb3NpdGlvbnNbNDU4XS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzQ1OV0ueCAvIDQsIHBvc2l0aW9uc1s0NTldLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMzA5XS54IC8gNCwgcG9zaXRpb25zWzMwOV0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1szOTJdLnggLyA0LCBwb3NpdGlvbnNbMzkyXS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzI4OV0ueCAvIDQsIHBvc2l0aW9uc1syODldLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMzA1XS54IC8gNCwgcG9zaXRpb25zWzMwNV0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1syOTBdLnggLyA0LCBwb3NpdGlvbnNbMjkwXS55IC8gNCk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zaXRpb25zWzMyOF0ueCAvIDQsIHBvc2l0aW9uc1szMjhdLnkgLyA0KTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3NpdGlvbnNbMzI2XS54IC8gNCwgcG9zaXRpb25zWzMyNl0ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvc2l0aW9uc1s5N10ueCAvIDQsIHBvc2l0aW9uc1s5N10ueSAvIDQpO1xyXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5jbGlwKCk7XHJcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgLy8x7LCoIO2BrOuhreuQnCDsnbTrr7jsp4DtgazquLDsnZgg7IOIIOy6lOuyhOyKpOulvCDrp4zrk6TslrQg7J2066+47KeA66W8IOuzteyCrO2VnOuLpC5cclxuICAgIC8v7YGs66Gt7ZWcIOy6lOuyhOyKpOulvCDqt7jrjIDroZwg7IKs7Jqp7ZWY66m0IOy6lOuyhOyKpCDtgazquLDripQg6re464yA66Gc6riwIOuVjOusuOyXkCDrsJjrs7XrrLjsl5DshJwg67aI7ZWE7JqU7ZWcIOuwmOuzteydtCDrp47slYTsp4DquLAg65WM66y4XHJcbiAgICAvLyBjb25zdCBiZXR0ZXJIaWdoID1cclxuICAgIC8vICAgcG9zaXRpb25zWzIzNF0ueS8zID4gcG9zaXRpb25zWzQ1NF0ueS8zID8gcG9zaXRpb25zWzQ1NF0ueS8zIDogcG9zaXRpb25zWzIzNF0ueS8zO1xyXG4gICAgLy8gY29uc3Qgd2lkdGggPSBwb3NpdGlvbnNbNDU0XS54LzMgLSBwb3NpdGlvbnNbMjM0XS54LzM7XHJcbiAgICAvLyBjb25zdCBoZWlnaHQgPSBwb3NpdGlvbnNbMTUyXS55LzMgLSBiZXR0ZXJIaWdoO1xyXG4gICAgLy8gY29uc29sZS5sb2cod2lkdGgsIGhlaWdodCk7XHJcbiAgICAvLyBpZiAod2lkdGggPD0gMCB8fCBoZWlnaHQgPD0gMCkgcmV0dXJuIHsgZXJyOiAnZmFjZSBub3QgZGV0ZWN0ZWQnIH07XHJcbiAgICAvLyBjb25zdCBjYW52YXMyID0gY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgLy8gY29uc3QgY3R4MiA9IGNhbnZhczIuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIC8vIGNvbnN0IGltYWdlRGF0YSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YShwb3NpdGlvbnNbMjM0XS54LzMsIGJldHRlckhpZ2gsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgLy8gY3R4Mi5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuXHJcbiAgICBsZXQgYXJyID0gWzAsIDAsIDBdO1xyXG4gICAgbGV0IGFycjIgPSBbMCwgMCwgMF07XHJcblxyXG4gICAgbGV0IGNudCA9IDA7XHJcbiAgICBjb25zdCB3aGl0ZUxhYiA9IHtcclxuICAgICAgTDogMTAwLFxyXG4gICAgICBBOiAwLjAwNTI2MDQ5OTk1ODMwMzkxLFxyXG4gICAgICBCOiAtMC4wMTA0MDgxODQ1MjUyNjc5MjcsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGF0YUFyciA9IFtdO1xyXG4gICAgY29uc3QgcmdiQXJyID0gW107XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSB0aGlzLmNhbnZhcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDw9IHRoaXMuY2FudmFzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YSh4LCB5LCAxLCAxKS5kYXRhO1xyXG4gICAgICAgIHJnYkFyci5wdXNoKGRhdGEpO1xyXG4gICAgICAgIGlmIChkYXRhLmV2ZXJ5KGkgPT4gaSAhPSAwKSkge1xyXG4gICAgICAgICAgY29uc3QgcmdiRGF0YSA9IFsuLi5kYXRhLnNsaWNlKDAsIDMpXTtcclxuICAgICAgICAgIGNvbnN0IExBQiA9IHJnYlRvTGFiKHJnYkRhdGEpO1xyXG4gICAgICAgICAgY29uc3QgY29sb3JEaWZmID0gbmV3IGRFMDAod2hpdGVMYWIsIExBQik7XHJcbiAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgIGFyci5mb3JFYWNoKChfaSwgaWR4KSA9PiAoYXJyW2lkeF0gKz0gZGF0YVtpZHhdKSk7XHJcbiAgICAgICAgICBkYXRhQXJyLnB1c2goe1xyXG4gICAgICAgICAgICB4OiB4LFxyXG4gICAgICAgICAgICB5OiB5LFxyXG4gICAgICAgICAgICBjb2xvcjogY29sb3JEaWZmLmdldERlbHRhRSgpLFxyXG4gICAgICAgICAgICByZ2I6IGRhdGEuc2xpY2UoMCwgMyksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFyciA9IGFyci5tYXAoaSA9PiBpIC8gY250KTtcclxuICAgIGNvbnN0IGxhYiA9IHJnYlRvTGFiKGFycik7XHJcbiAgICBjb25zdCBkaWZmID0gbmV3IGRFMDAod2hpdGVMYWIsIGxhYikuZ2V0RGVsdGFFKCk7XHJcbiAgICBjb25zdCB3aGl0ZUNsZWFyID0gZGlmZiArIDE7XHJcbiAgICBjb25zdCBibGFja0NsZWFyID0gZGlmZiAqIDIuNztcclxuICAgIGNvbnN0IGJsYWNrQ2xlYXIyID0gZGlmZiArIGRpZmYgKiAwLjI7XHJcbiAgICBjb25zdCB3aGl0ZUNsZWFyMiA9IGRpZmYgLSBkaWZmICogMC4yO1xyXG4gICAgY29uc3QgbmV3RGF0YTogYW55ID0gW107XHJcbiAgICBbLi4uZGF0YUFycl0uZm9yRWFjaChpID0+IHtcclxuICAgICAgaWYgKGRpZmYgPCAxNSkge1xyXG4gICAgICAgIGlmIChpLmNvbG9yIDwgd2hpdGVDbGVhciB8fCBpLmNvbG9yID4gYmxhY2tDbGVhcikge1xyXG4gICAgICAgICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KGkueCwgaS55LCAxLCAxKTtcclxuICAgICAgICAgIC8vIGRhdGFBcnIuc3BsaWNlKGRhdGFBcnIuaW5kZXhPZihpKSwxKVxyXG4gICAgICAgIH0gZWxzZSBuZXdEYXRhLnB1c2goaSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGkuY29sb3IgPCB3aGl0ZUNsZWFyMiB8fCBpLmNvbG9yID4gYmxhY2tDbGVhcjIpIHtcclxuICAgICAgICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdChpLngsIGkueSwgMSwgMSk7XHJcbiAgICAgICAgICAvLyBkYXRhQXJyLnNwbGljZShkYXRhQXJyLmluZGV4T2YoaSksMSlcclxuICAgICAgICB9IGVsc2UgbmV3RGF0YS5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcclxuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG4gICAgbmV3RGF0YS5mb3JFYWNoKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgYXJyMi5mb3JFYWNoKChfaSwgaWR4KSA9PiAoYXJyMltpZHhdICs9IGRhdGEucmdiW2lkeF0pKTtcclxuICAgIH0pO1xyXG4gICAgYXJyMiA9IGFycjIubWFwKGkgPT4gaSAvIG5ld0RhdGEubGVuZ3RoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwi6rSR7JuQIOuwjyDqt7jrprzsnpAg7KCc6rGwIO2bhCBSR0IgPSBcIiwgYXJyMik7XHJcbiAgICAvLyBvdXQyLm9uKFwiZmluaXNoXCIsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBicmlnaHRuZXNzID0gdGhpcy5DYWxjdWxhdGVMaWdodG5lc3MoYXJyMik7XHJcbiAgICBjb25zdCBzYXR1cmF0aW9uID0gdGhpcy5DYWxjdWxhdGVTYXR1cmF0aW9uKGFycjIpO1xyXG4gICAgY29uc3Qga2VsdmluID0gdGhpcy5yZ2JUb1RlbXAoYXJyMik7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGZzLnJlYWRGaWxlKCdyZ2IuanNvbicsKGVycixkYXRhKT0+e1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZGF0YSkpO1xyXG4gICAgLy8gfSlcclxuICAgIC8vIGZzLndyaXRlRmlsZSgncmdiMi5qc29uJywgSlNPTi5zdHJpbmdpZnkocmdiQXJyKSwgKGVycikgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAvLyB9KVxyXG4gICAgdGhpcy5yZ2IgPSBhcnIyLm1hcCgobnVtLCBpZHgpID0+IG51bSArIHRoaXMucmdiW2lkeF0pO1xyXG4gICAgdGhpcy5rZWx2aW4gKz0ga2VsdmluO1xyXG4gICAgdGhpcy5zYXR1cmF0aW9uICs9IHNhdHVyYXRpb247XHJcbiAgICB0aGlzLmJyaWdodG5lc3MgKz0gYnJpZ2h0bmVzcztcclxuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucmdiLCB0aGlzLmtlbHZpbiwgdGhpcy5zYXR1cmF0aW9uLCB0aGlzLmJyaWdodG5lc3MpO1xyXG4gIH1cclxuICBnZXRTZWFzb24oZGV2aWRlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGJyaWdodG5lc3MgPSBNYXRoLnJvdW5kKCh0aGlzLmJyaWdodG5lc3MgLyBkZXZpZGUpICogMTAwKTtcclxuICAgIGNvbnN0IHNhdHVyYXRpb24gPSBNYXRoLnJvdW5kKCh0aGlzLnNhdHVyYXRpb24gLyBkZXZpZGUpICogMTAwKTtcclxuICAgIGNvbnN0IGFmdGVyQXJyID0gdGhpcy5yZ2IubWFwKG51bSA9PiBudW0gLyBkZXZpZGUpO1xyXG4gICAgY29uc3Qga2VsdmluID0gdGhpcy5rZWx2aW4gLyBkZXZpZGU7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJnYiwgdGhpcy5rZWx2aW4sIHRoaXMuc2F0dXJhdGlvbiwgdGhpcy5icmlnaHRuZXNzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGFmdGVyQXJyLCBrZWx2aW4sIHNhdHVyYXRpb24sIGJyaWdodG5lc3MpO1xyXG4gICAgY29uc3QgeWVsbG93UGluayA9IHRoaXMuaXNZZWxsb3dQaW5rKGFmdGVyQXJyKTtcclxuICAgIGNvbnN0IGtlbHZpblNjb3JlID0gdGhpcy5nZXRLZWx2aW5TY29yZShrZWx2aW4sIHllbGxvd1BpbmspO1xyXG4gICAgLy8gY29uc29sZS5sb2coJz09PT09PT09PT09PT09a2VsdmluU2NvcmUgPT09PT09PT09PT09PT09PT09PT0nKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGtlbHZpblNjb3JlKTtcclxuICAgIC8vIGxldCBzYXR1cmF0aW9uUmF0ZSA9IGtlbHZpblNjb3JlWzBdID4ga2VsdmluU2NvcmVbMV0gPyAzNSA6IDE1O1xyXG4gICAgLy8gbGV0IGxpZ2h0U2NvcmUgPSAoYnJpZ2h0bmVzcyAtIDU1KSAqICgxMDAgLyA0NSk7XHJcbiAgICAvLyBsaWdodFNjb3JlID0gTWF0aC5hYnMobGlnaHRTY29yZSkgPiAxMDAgPyAxMDAgOiBsaWdodFNjb3JlO1xyXG4gICAgLy8gbGV0IHNhdHVyYXRpb25TY29yZSA9IChzYXR1cmF0aW9uIC0gc2F0dXJhdGlvblJhdGUpICogKDEwMCAvIHNhdHVyYXRpb25SYXRlKTtcclxuICAgIC8vIHNhdHVyYXRpb25TY29yZSA9IE1hdGguYWJzKHNhdHVyYXRpb25TY29yZSkgPiAxMDAgPyAxMDAgOiBzYXR1cmF0aW9uU2NvcmU7XHJcbiAgICBsZXQgdG9uZU5hbWU7XHJcbiAgICBpZiAoc2F0dXJhdGlvbiA8PSAyNSkge1xyXG4gICAgICBpZiAoYnJpZ2h0bmVzcyA+PSA3MS41KVxyXG4gICAgICAgIC8v7Y6Y7J28XHJcbiAgICAgICAgdG9uZU5hbWUgPSBrZWx2aW5TY29yZVswXSA+IGtlbHZpblNjb3JlWzFdID8gJ3NwcmluZ0xpZ2h0JyA6ICdzdW1tZXJMaWdodCc7XHJcbiAgICAgIGVsc2UgaWYgKGJyaWdodG5lc3MgPj0gNTAuMylcclxuICAgICAgICAvL+udvOydtO2KuCDqt7jroIjsnbTsi5wsIOq3uOugiOydtOyLnFxyXG4gICAgICAgIHRvbmVOYW1lID0ga2VsdmluU2NvcmVbMF0gPiBrZWx2aW5TY29yZVsxXSA/ICdmYWxsTXV0ZScgOiAnc3VtbWVyTXV0ZSc7XHJcbiAgICAgIC8v64uk7YGsIOq3uOugiOydtOyLnFxyXG4gICAgICBlbHNlIHRvbmVOYW1lID0ga2VsdmluU2NvcmVbMF0gPiBrZWx2aW5TY29yZVsxXSA/ICdmYWxsRGVlcCcgOiAnd2ludGVyRGVlcCc7XHJcbiAgICB9IGVsc2UgaWYgKHNhdHVyYXRpb24gPD0gMzUpIHtcclxuICAgICAgLy/rnbzsnbTtirhcclxuICAgICAgaWYgKGJyaWdodG5lc3MgPj0gNzApIHtcclxuICAgICAgICBpZiAoa2VsdmluU2NvcmVbMF0gPiBrZWx2aW5TY29yZVsxXSkgdG9uZU5hbWUgPSAnc3ByaW5nTGlnaHQnO1xyXG4gICAgICAgIGVsc2UgdG9uZU5hbWUgPSBzYXR1cmF0aW9uIDw9IDMwLjUgPyAnc3VtbWVyTGlnaHQnIDogJ3N1bW1lckJyaWdodCc7XHJcbiAgICAgIH1cclxuICAgICAgLy/shoztlITtirgsIOuNnFxyXG4gICAgICBlbHNlIGlmIChicmlnaHRuZXNzID49IDUwKVxyXG4gICAgICAgIHRvbmVOYW1lID0ga2VsdmluU2NvcmVbMF0gPiBrZWx2aW5TY29yZVsxXSA/ICdmYWxsTXV0ZScgOiAnc3VtbWVyTXV0ZSc7XHJcbiAgICAgIC8v64uk7YGsXHJcbiAgICAgIGVsc2UgdG9uZU5hbWUgPSBrZWx2aW5TY29yZVswXSA+IGtlbHZpblNjb3JlWzFdID8gJ2ZhbGxEZWVwJyA6ICd3aW50ZXJEZWVwJztcclxuICAgIH0gZWxzZSBpZiAoc2F0dXJhdGlvbiA8PSA0NSkge1xyXG4gICAgICAvL+u4jOudvOydtO2KuFxyXG4gICAgICBpZiAoYnJpZ2h0bmVzcyA+PSA2My43KVxyXG4gICAgICAgIHRvbmVOYW1lID0ga2VsdmluU2NvcmVbMF0gPiBrZWx2aW5TY29yZVsxXSA/ICdzcHJpbmdCcmlnaHQnIDogJ3N1bW1lckJyaWdodCc7XHJcbiAgICAgIC8v7Iqk7Yq466GxXHJcbiAgICAgIGVsc2UgaWYgKGJyaWdodG5lc3MgPj0gNTMuNylcclxuICAgICAgICAvLyB0b25lTmFtZSA9IGtlbHZpblNjb3JlWzBdID4ga2VsdmluU2NvcmVbMV0gPyAnZmFsbFN0cm9uZycgOiAnd2ludGVyQnJpZ2h0JztcclxuICAgICAgICB0b25lTmFtZSA9IGtlbHZpblNjb3JlWzBdID4ga2VsdmluU2NvcmVbMV0gPyAnZmFsbE11dGUnIDogJ3N1bW1lckJyaWdodCc7XHJcbiAgICAgIC8v65SlXHJcbiAgICAgIGVsc2UgdG9uZU5hbWUgPSBrZWx2aW5TY29yZVswXSA+IGtlbHZpblNjb3JlWzFdID8gJ2ZhbGxEZWVwJyA6ICd3aW50ZXJEZWVwJztcclxuICAgIH1cclxuICAgIC8v67mE67mE65OcXHJcbiAgICAvLyBlbHNlIHRvbmVOYW1lID0ga2VsdmluU2NvcmVbMF0gPiBrZWx2aW5TY29yZVsxXSA/ICdzcHJpbmdCcmlnaHQnIDogJ3dpbnRlckJyaWdodCc7XHJcbiAgICBlbHNlIHRvbmVOYW1lID0ga2VsdmluU2NvcmVbMF0gPiBrZWx2aW5TY29yZVsxXSA/ICdzcHJpbmdCcmlnaHQnIDogJ3N1bW1lckJyaWdodCc7XHJcblxyXG4gICAgbGV0IGZhY2VYID0gKChzYXR1cmF0aW9uIC0gMTUpIC8gNDApICogNDtcclxuICAgIGxldCBmYWNlWSA9ICgoYnJpZ2h0bmVzcyAtIDQwKSAvIDQwKSAqIDQ7XHJcbiAgICBmYWNlWCA9IGZhY2VYID4gNCA/IDQgOiBmYWNlWDtcclxuICAgIGZhY2VYID0gZmFjZVggPCAwID8gMCA6IGZhY2VYO1xyXG4gICAgZmFjZVkgPSBmYWNlWSA+IDQgPyA0IDogZmFjZVk7XHJcbiAgICBmYWNlWSA9IGZhY2VZIDwgMCA/IDAgOiBmYWNlWTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vIGxlZnQ6IE1hdGgucm91bmQoc3ByaW5nU3VtbWVyKSxcclxuICAgICAgLy8gcmlnaHQ6IE1hdGgucm91bmQoZmFsbFdpbnRlciksXHJcbiAgICAgIHVzZXJQb3M6IHtcclxuICAgICAgICBmYWNlWCxcclxuICAgICAgICBmYWNlWSxcclxuICAgICAgfSxcclxuICAgICAga2VsdmluU2NvcmUsXHJcbiAgICAgIHJlc3VsdDogdG9uZU5hbWUsXHJcbiAgICAgIHJlc3VsdEtvcjogdGhpcy5sYWJlbEtvclt0aGlzLmxhYmVsLmluZGV4T2YodG9uZU5hbWUpXSxcclxuICAgICAgYnJpZ2h0bmVzczogYnJpZ2h0bmVzcyA8IDUwID8gMCA6IGJyaWdodG5lc3MgPCA3MCA/IDEgOiAyLFxyXG4gICAgICBzYXR1cmF0aW9uOiBzYXR1cmF0aW9uIDwgMjUgPyAwIDogc2F0dXJhdGlvbiA8IDQ1ID8gMSA6IDIsXHJcbiAgICB9O1xyXG4gIH1cclxuICBpc1llbGxvd1BpbmsoYXJyOiBhbnkpIHtcclxuICAgIGNvbnN0IGxhYkNvbG9yID0gcmdiVG9MYWIoYXJyKTtcclxuICAgIGxldCB5ZWxsb3cgPSAwO1xyXG4gICAgbGV0IHBpbmsgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnllbGxvd1BpbmsubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZGVsdGEgPSBuZXcgZEUwMChsYWJDb2xvciwgdGhpcy55ZWxsb3dQaW5rW2ldKTtcclxuICAgICAgaWYgKGkgPCAzKSB5ZWxsb3cgKz0gMTAyLjUgLSBkZWx0YS5nZXREZWx0YUUoKTtcclxuICAgICAgZWxzZSBwaW5rICs9IDEwMCAtIGRlbHRhLmdldERlbHRhRSgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeWVsbG93UmVzdWx0ID0geWVsbG93IC8gMztcclxuICAgIGNvbnN0IHBpbmtSZXN1bHQgPSBwaW5rIC8gMztcclxuICAgIGNvbnN0IHN1bSA9IHllbGxvd1Jlc3VsdCArIHBpbmtSZXN1bHQ7XHJcbiAgICBjb25zdCB5ZWxsb3dQZXJjZW50ID0gKHllbGxvd1Jlc3VsdCAvIHN1bSkgKiAxMDA7XHJcbiAgICBjb25zdCBwaW5rUGVyY2VudCA9IChwaW5rUmVzdWx0IC8gc3VtKSAqIDEwMDtcclxuICAgIHJldHVybiBbcGFyc2VGbG9hdCh5ZWxsb3dQZXJjZW50LnRvRml4ZWQoMikpLCBwYXJzZUZsb2F0KHBpbmtQZXJjZW50LnRvRml4ZWQoMikpXTtcclxuICB9XHJcblxyXG4gIGdldEtlbHZpblNjb3JlKGtlbHZpbjogbnVtYmVyLCBiYXNlQ29sb3I6IGFueVtdKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT1iYXNlQ29sb3IgPT09PT09PT09PT09PT09PT09PT0nKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGJhc2VDb2xvcik7XHJcbiAgICBjb25zdCBhdmcgPSA0MDcwO1xyXG4gICAgY29uc3QgY2FsID0gYXZnIC0ga2VsdmluO1xyXG4gICAgaWYgKGNhbCA8IDApIHJldHVybiBbYmFzZUNvbG9yWzBdLCBiYXNlQ29sb3JbMV0gKyBNYXRoLmFicyhjYWwgLyA0MDcwKSAqIDhdO1xyXG4gICAgcmV0dXJuIFtiYXNlQ29sb3JbMF0gKyBNYXRoLmFicyhjYWwgLyA0MDcwKSAqIDgsIGJhc2VDb2xvclsxXV07XHJcbiAgfVxyXG5cclxuICBDYWxjdWxhdGVMaWdodG5lc3MoYXJyOiBhbnlbXSkge1xyXG4gICAgY29uc3QgUiA9IGFyclswXTtcclxuICAgIGNvbnN0IEcgPSBhcnJbMV07XHJcbiAgICBjb25zdCBCID0gYXJyWzJdO1xyXG4gICAgbGV0IE1heCA9IDAuMDtcclxuICAgIGxldCBNaW4gPSAwLjA7XHJcblxyXG4gICAgY29uc3QgZlIgPSBSIC8gMjU1LjA7XHJcbiAgICBjb25zdCBmRyA9IEcgLyAyNTUuMDtcclxuICAgIGNvbnN0IGZCID0gQiAvIDI1NS4wO1xyXG5cclxuICAgIGlmIChmUiA+PSBmRyAmJiBmUiA+PSBmQikgTWF4ID0gZlI7XHJcbiAgICBlbHNlIGlmIChmRyA+PSBmQiAmJiBmRyA+PSBmUikgTWF4ID0gZkc7XHJcbiAgICBlbHNlIGlmIChmQiA+PSBmRyAmJiBmQiA+PSBmUikgTWF4ID0gZkI7XHJcblxyXG4gICAgaWYgKGZSIDw9IGZHICYmIGZSIDw9IGZCKSBNaW4gPSBmUjtcclxuICAgIGVsc2UgaWYgKGZHIDw9IGZCICYmIGZHIDw9IGZSKSBNaW4gPSBmRztcclxuICAgIGVsc2UgaWYgKGZCIDw9IGZHICYmIGZCIDw9IGZSKSBNaW4gPSBmQjtcclxuXHJcbiAgICBjb25zdCBMaWdodG5lc3MgPSAoTWluICsgTWF4KSAvIDIuMDtcclxuXHJcbiAgICByZXR1cm4gTGlnaHRuZXNzO1xyXG4gIH1cclxuICAvL1JHQuqwkuydhCDthrXtlbQg7LGE64+E6rCSIOq1rO2VmOq4sFxyXG4gIC8vQHBhcmFtIDogUkdCIOuwsOyXtFxyXG5cclxuICBDYWxjdWxhdGVTYXR1cmF0aW9uKGFycjogYW55W10pIHtcclxuICAgIGNvbnN0IFIgPSBhcnJbMF07XHJcbiAgICBjb25zdCBHID0gYXJyWzFdO1xyXG4gICAgY29uc3QgQiA9IGFyclsyXTtcclxuICAgIGxldCBNYXggPSAwLjA7XHJcbiAgICBsZXQgTWluID0gMC4wO1xyXG5cclxuICAgIGNvbnN0IGZSID0gUiAvIDI1NS4wO1xyXG4gICAgY29uc3QgZkcgPSBHIC8gMjU1LjA7XHJcbiAgICBjb25zdCBmQiA9IEIgLyAyNTUuMDtcclxuXHJcbiAgICBpZiAoZlIgPj0gZkcgJiYgZlIgPj0gZkIpIE1heCA9IGZSO1xyXG4gICAgZWxzZSBpZiAoZkcgPj0gZkIgJiYgZkcgPj0gZlIpIE1heCA9IGZHO1xyXG4gICAgZWxzZSBpZiAoZkIgPj0gZkcgJiYgZkIgPj0gZlIpIE1heCA9IGZCO1xyXG5cclxuICAgIGlmIChmUiA8PSBmRyAmJiBmUiA8PSBmQikgTWluID0gZlI7XHJcbiAgICBlbHNlIGlmIChmRyA8PSBmQiAmJiBmRyA8PSBmUikgTWluID0gZkc7XHJcbiAgICBlbHNlIGlmIChmQiA8PSBmRyAmJiBmQiA8PSBmUikgTWluID0gZkI7XHJcblxyXG4gICAgY29uc3QgTGlnaHRuZXNzID0gdGhpcy5DYWxjdWxhdGVMaWdodG5lc3MoW1IsIEcsIEJdKTtcclxuXHJcbiAgICBsZXQgU2F0dXJhdGlvbjtcclxuXHJcbiAgICBpZiAoTWF4ID09IE1pbikge1xyXG4gICAgICBTYXR1cmF0aW9uID0gLTEuMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChMaWdodG5lc3MgPCAwLjUpIHtcclxuICAgICAgICBTYXR1cmF0aW9uID0gKE1heCAtIE1pbikgLyAoTWF4ICsgTWluKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBTYXR1cmF0aW9uID0gKE1heCAtIE1pbikgLyAoMi4wIC0gTWF4IC0gTWluKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBTYXR1cmF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcmdiVG9UZW1wKHJnYjogbnVtYmVyW10pIHtcclxuICAgIGxldCB0ZW1wZXJhdHVyZSA9IDA7XHJcbiAgICBsZXQgdGVzdFJHQjtcclxuICAgIGNvbnN0IGVwc2lsb24gPSAwLjQ7XHJcbiAgICBsZXQgbWluVGVtcGVyYXR1cmUgPSAxMDAwO1xyXG4gICAgbGV0IG1heFRlbXBlcmF0dXJlID0gMTIwMDA7XHJcbiAgICB3aGlsZSAobWF4VGVtcGVyYXR1cmUgLSBtaW5UZW1wZXJhdHVyZSA+IGVwc2lsb24pIHtcclxuICAgICAgdGVtcGVyYXR1cmUgPSAobWF4VGVtcGVyYXR1cmUgKyBtaW5UZW1wZXJhdHVyZSkgLyAyO1xyXG4gICAgICB0ZXN0UkdCID0gdGhpcy5jb2xvclRlbXBlcmF0dXJlMnJnYih0ZW1wZXJhdHVyZSk7XHJcbiAgICAgIGlmICh0ZXN0UkdCWzJdIC8gdGVzdFJHQlswXSA+PSByZ2JbMl0gLyByZ2JbMF0pIHtcclxuICAgICAgICBtYXhUZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1pblRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHRlbXBlcmF0dXJlKTtcclxuICB9XHJcblxyXG4gIGNvbG9yVGVtcGVyYXR1cmUycmdiKGtlbHZpbjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGtlbHZpbiAvIDEwMC4wO1xyXG4gICAgbGV0IHJlZCwgZ3JlZW4sIGJsdWU7XHJcblxyXG4gICAgaWYgKHRlbXBlcmF0dXJlIDwgNjYuMCkge1xyXG4gICAgICByZWQgPSAyNTU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBhICsgYiB4ICsgYyBMb2dbeF0gLy5cclxuICAgICAgLy8ge2EgLT4gMzUxLjk3NjkwNTY2ODA1NjkzYCxcclxuICAgICAgLy8gYiAtPiAwLjExNDIwNjQ1Mzc4NDE2NWAsXHJcbiAgICAgIC8vIGMgLT4gLTQwLjI1MzY2MzA5MzMyMTI3XHJcbiAgICAgIC8veCAtPiAoa2VsdmluLzEwMCkgLSA1NX1cclxuICAgICAgcmVkID0gdGVtcGVyYXR1cmUgLSA1NS4wO1xyXG4gICAgICByZWQgPSAzNTEuOTc2OTA1NjY4MDU2OTMgKyAwLjExNDIwNjQ1Mzc4NDE2NSAqIHJlZCAtIDQwLjI1MzY2MzA5MzMyMTI3ICogTWF0aC5sb2cocmVkKTtcclxuICAgICAgaWYgKHJlZCA8IDApIHJlZCA9IDA7XHJcbiAgICAgIGlmIChyZWQgPiAyNTUpIHJlZCA9IDI1NTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDYWxjdWxhdGUgZ3JlZW4gKi9cclxuXHJcbiAgICBpZiAodGVtcGVyYXR1cmUgPCA2Ni4wKSB7XHJcbiAgICAgIC8vIGEgKyBiIHggKyBjIExvZ1t4XSAvLlxyXG4gICAgICAvLyB7YSAtPiAtMTU1LjI1NDg1NTYyNzA5MTc5YCxcclxuICAgICAgLy8gYiAtPiAtMC40NDU5Njk1MDQ2OTU3OTEzM2AsXHJcbiAgICAgIC8vIGMgLT4gMTA0LjQ5MjE2MTk5MzkzODg4YCxcclxuICAgICAgLy8geCAtPiAoa2VsdmluLzEwMCkgLSAyfVxyXG4gICAgICBncmVlbiA9IHRlbXBlcmF0dXJlIC0gMjtcclxuICAgICAgZ3JlZW4gPVxyXG4gICAgICAgIC0xNTUuMjU0ODU1NjI3MDkxNzkgLSAwLjQ0NTk2OTUwNDY5NTc5MTMzICogZ3JlZW4gKyAxMDQuNDkyMTYxOTkzOTM4ODggKiBNYXRoLmxvZyhncmVlbik7XHJcbiAgICAgIGlmIChncmVlbiA8IDApIGdyZWVuID0gMDtcclxuICAgICAgaWYgKGdyZWVuID4gMjU1KSBncmVlbiA9IDI1NTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGEgKyBiIHggKyBjIExvZ1t4XSAvLlxyXG4gICAgICAvLyB7YSAtPiAzMjUuNDQ5NDEyNTcxMTk3NGAsXHJcbiAgICAgIC8vIGIgLT4gMC4wNzk0MzQ1NjUzNjY2MjM0MmAsXHJcbiAgICAgIC8vIGMgLT4gLTI4LjA4NTI5NjM1MDc5NTdgLFxyXG4gICAgICAvLyB4IC0+IChrZWx2aW4vMTAwKSAtIDUwfVxyXG4gICAgICBncmVlbiA9IHRlbXBlcmF0dXJlIC0gNTAuMDtcclxuICAgICAgZ3JlZW4gPSAzMjUuNDQ5NDEyNTcxMTk3NCArIDAuMDc5NDM0NTY1MzY2NjIzNDIgKiBncmVlbiAtIDI4LjA4NTI5NjM1MDc5NTcgKiBNYXRoLmxvZyhncmVlbik7XHJcbiAgICAgIGlmIChncmVlbiA8IDApIGdyZWVuID0gMDtcclxuICAgICAgaWYgKGdyZWVuID4gMjU1KSBncmVlbiA9IDI1NTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDYWxjdWxhdGUgYmx1ZSAqL1xyXG5cclxuICAgIGlmICh0ZW1wZXJhdHVyZSA+PSA2Ni4wKSB7XHJcbiAgICAgIGJsdWUgPSAyNTU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGVtcGVyYXR1cmUgPD0gMjAuMCkge1xyXG4gICAgICAgIGJsdWUgPSAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGEgKyBiIHggKyBjIExvZ1t4XSAvLlxyXG4gICAgICAgIC8vIHthIC0+IC0yNTQuNzY5MzUxODQxMjA5MDJgLFxyXG4gICAgICAgIC8vIGIgLT4gMC44Mjc0MDk2MDY0MDA3Mzk1YCxcclxuICAgICAgICAvLyBjIC0+IDExNS42Nzk5NDQwMTA2NjE0N2AsXHJcbiAgICAgICAgLy8geCAtPiBrZWx2aW4vMTAwIC0gMTB9XHJcbiAgICAgICAgYmx1ZSA9IHRlbXBlcmF0dXJlIC0gMTA7XHJcbiAgICAgICAgYmx1ZSA9XHJcbiAgICAgICAgICAtMjU0Ljc2OTM1MTg0MTIwOTAyICsgMC44Mjc0MDk2MDY0MDA3Mzk1ICogYmx1ZSArIDExNS42Nzk5NDQwMTA2NjE0NyAqIE1hdGgubG9nKGJsdWUpO1xyXG4gICAgICAgIGlmIChibHVlIDwgMCkgYmx1ZSA9IDA7XHJcbiAgICAgICAgaWYgKGJsdWUgPiAyNTUpIGJsdWUgPSAyNTU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW01hdGgucm91bmQocmVkKSwgTWF0aC5yb3VuZChncmVlbiksIE1hdGgucm91bmQoYmx1ZSldO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0RmFjZURhdGE7XHJcbiIsImZ1bmN0aW9uIHJnYlRvTGFiT2JqKHJnYikge1xyXG4gIHZhciByID0gcmdiWzBdIC8gMjU1LFxyXG4gICAgZyA9IHJnYlsxXSAvIDI1NSxcclxuICAgIGIgPSByZ2JbMl0gLyAyNTUsXHJcbiAgICB4LFxyXG4gICAgeSxcclxuICAgIHo7XHJcblxyXG4gIHIgPSByID4gMC4wNDA0NSA/IE1hdGgucG93KChyICsgMC4wNTUpIC8gMS4wNTUsIDIuNCkgOiByIC8gMTIuOTI7XHJcbiAgZyA9IGcgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKGcgKyAwLjA1NSkgLyAxLjA1NSwgMi40KSA6IGcgLyAxMi45MjtcclxuICBiID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoYiArIDAuMDU1KSAvIDEuMDU1LCAyLjQpIDogYiAvIDEyLjkyO1xyXG5cclxuICB4ID0gKHIgKiAwLjQxMjQgKyBnICogMC4zNTc2ICsgYiAqIDAuMTgwNSkgLyAwLjk1MDQ3O1xyXG4gIHkgPSAociAqIDAuMjEyNiArIGcgKiAwLjcxNTIgKyBiICogMC4wNzIyKSAvIDEuMDtcclxuICB6ID0gKHIgKiAwLjAxOTMgKyBnICogMC4xMTkyICsgYiAqIDAuOTUwNSkgLyAxLjA4ODgzO1xyXG5cclxuICB4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogNy43ODcgKiB4ICsgMTYgLyAxMTY7XHJcbiAgeSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6IDcuNzg3ICogeSArIDE2IC8gMTE2O1xyXG4gIHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiA3Ljc4NyAqIHogKyAxNiAvIDExNjtcclxuXHJcbiAgcmV0dXJuIHsgTDogMTE2ICogeSAtIDE2LCBBOiA1MDAgKiAoeCAtIHkpLCBCOiAyMDAgKiAoeSAtIHopIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJnYlRvTGFiT2JqO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9