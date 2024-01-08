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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/theme */ "./utils/theme.ts");
/* harmony import */ var _home_Portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/Portal */ "./components/home/Portal.tsx");
/* harmony import */ var _home_ML_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/ML_Loading */ "./components/home/ML_Loading.tsx");
/* harmony import */ var _home_ProgressBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/ProgressBar */ "./components/home/ProgressBar.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_drawLip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/drawLip */ "./utils/drawLip.ts");
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









var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.div(_templateObject(), _utils_theme__WEBPACK_IMPORTED_MODULE_7__.default.borderRadius);
_c = Wrapper;
var VideoCss = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__.css)(_templateObject2());
var Video = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.video(_templateObject3(), VideoCss);
_c2 = Video;
var Canvas = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.canvas(_templateObject4(), VideoCss);
_c3 = Canvas;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.div(_templateObject5());
_c4 = Container;
var BottomWrapper = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.div(_templateObject6(), function (props) {
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

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)(); // const stats = useRef();

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
      drawCanvas.current = new _utils_drawLip__WEBPACK_IMPORTED_MODULE_12__.default();
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
                drawCanvas.current = new drawFatceLine(setExplain, setIsCalculating, router);
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_Portal__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [isCalculated && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_ML_Loading__WEBPACK_IMPORTED_MODULE_9__.default, {
          text: "\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694",
          title: "\uD37C\uC2A4\uB110\uCEEC\uB7EC\uB97C \uCE21\uC815 \uC911\uC774\uC5D0\uC694!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }, _this), isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_ML_Loading__WEBPACK_IMPORTED_MODULE_9__.default, {
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_ProgressBar__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
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
  return [next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter];
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWRlb0NhbnZhcy50c3giXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsInRoZW1lIiwiVmlkZW9Dc3MiLCJjc3MiLCJWaWRlbyIsIkNhbnZhcyIsIkNvbnRhaW5lciIsIkJvdHRvbVdyYXBwZXIiLCJwcm9wcyIsImlzTG9hZGluZyIsIlZpZGVvQ2FudmFzIiwic3RyZWFtIiwidXNlU3RhdGUiLCJleHBsYWluIiwic2V0RXhwbGFpbiIsInNldElzTG9hZGluZyIsImlzQ2FsY3VsYXRlZCIsInNldElzQ2FsY3VsYXRpbmciLCJpc1NjYW5FbmQiLCJzZXRTY2FuRW5kIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2FudmFzIiwidXNlUmVmIiwidmlkZW8iLCJkcmF3Q2FudmFzIiwiZGV0ZWN0b3IiLCJyYWZJRCIsInNjYW5EcmF3IiwicG9zaXRpb25zIiwiY3VycmVudCIsImRyYXciLCJhbmltYXRlIiwiY2xlYXJBbmREcmF3IiwiZXN0aW1hdGVGYWNlcyIsImZsaXBIb3Jpem9udGFsIiwicHJlZGljdGlvbnMiLCJsZW5ndGgiLCJrZXlwb2ludHMiLCJzcmNPYmoiLCJzcmNPYmplY3QiLCJhY3RpdmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJ1c2VFZmZlY3QiLCJkcmF3TGlwIiwiaW5pdCIsInBsYXkiLCJ0aGVuIiwiZmFjZUxhbmRtYXJrc0RldGVjdGlvbiIsIm1vZGVsIiwiU3VwcG9ydGVkTW9kZWxzIiwiTWVkaWFQaXBlRmFjZU1lc2giLCJjcmVhdGVEZXRlY3RvciIsInJ1bnRpbWUiLCJyZWZpbmVMYW5kbWFya3MiLCJzb2x1dGlvblBhdGgiLCJkcmF3RmF0Y2VMaW5lIiwiZXJyb3IiLCJjYW5jZWxBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBUyxVQUFFLEVBQUMsYUFBWjtBQUFBLGtCQUEyQkk7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQXJHRDs7R0FBTUgsVztVQUtXVyxtRDs7O01BTFhYLFc7QUF1R04sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWUzOGM1NjgxMjBhNTY3ZGYxZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRmFjZUxhbmRtYXJrc0RldGVjdG9yLFxyXG4gIEZhY2VMYW5kbWFya3NEZXRlY3RvcklucHV0LFxyXG59IGZyb20gJ0B0ZW5zb3JmbG93LW1vZGVscy9mYWNlLWxhbmRtYXJrcy1kZXRlY3Rpb24nO1xyXG5pbXBvcnQgJ0B0ZW5zb3JmbG93L3RmanMtYmFja2VuZC13ZWJnbCc7XHJcbmltcG9ydCAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcclxuLy8gY29uc3QgRmFjZU1lc2hDb21wb25lbnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnQG1lZGlhcGlwZS9mYWNlX21lc2gnKSwge1xyXG4vLyAgIHNzcjogZmFsc2UsXHJcbi8vIH0pO1xyXG4vLyBpbXBvcnQgKiBhcyBTdGF0cyBmcm9tICdzdGF0cy5qcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGRyYXdGYWNlTGluZSB9IGZyb20gJy4uL3V0aWxzL2RyYXdGYWNlTGluZSc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi91dGlscy90aGVtZSc7XHJcbmltcG9ydCBNb2RhbFBvcnRhbCBmcm9tICcuL2hvbWUvUG9ydGFsJztcclxuaW1wb3J0IE1MX0xvYWRpbmcgZnJvbSAnLi9ob21lL01MX0xvYWRpbmcnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9ob21lL1Byb2dyZXNzQmFyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZHJhd0xpcCBmcm9tICcuLi91dGlscy9kcmF3TGlwJztcclxuZXhwb3J0IGludGVyZmFjZSBwZXJzb25hbENvbG9yIHtcclxuICByZXN1bHQ6IHN0cmluZztcclxuICByZXN1bHRLb3I6IHN0cmluZztcclxufVxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gIHBhZGRpbmc6IDEuNXZoO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDEuN3ZoO1xyXG4gIG1hcmdpbi10b3A6IDAuNXZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDF2bWluO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIHBhZGRpbmc6IDJ2dztcclxuICAgIGZvbnQtc2l6ZTogMi40MnZ3O1xyXG4gIH1cclxuICAke3RoZW1lLmJvcmRlclJhZGl1c31cclxuYDtcclxuXHJcbmNvbnN0IFZpZGVvQ3NzID0gY3NzYFxyXG4gIC8qIHdpZHRoOiAxMDB2dzsgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIC8qIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpOyAqL1xyXG4gIHRyYW5zaXRpb246IDAuMTI1cyBsaW5lYXI7XHJcbmA7XHJcbmNvbnN0IFZpZGVvID0gc3R5bGVkLnZpZGVvYFxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICAke1ZpZGVvQ3NzfVxyXG5gO1xyXG5jb25zdCBDYW52YXMgPSBzdHlsZWQuY2FudmFzYFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogYXV0bztcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgJHtWaWRlb0Nzc31cclxuYDtcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAzO1xyXG5gO1xyXG5cclxuY29uc3QgQm90dG9tV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBpc0xvYWRpbmc6IGJvb2xlYW4gfT5gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xyXG4gIHotaW5kZXg6IDEwMDAwMztcclxuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5pc0xvYWRpbmcgPyAwIDogMSl9O1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIHByb3BzIHtcclxuICBkcmF3TWV0aG9kPzogc3RyaW5nO1xyXG4gIHN0cmVhbTogTWVkaWFTdHJlYW07XHJcbn1cclxuXHJcbmNvbnN0IFZpZGVvQ2FudmFzID0gKHsgc3RyZWFtIH06IHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2V4cGxhaW4sIHNldEV4cGxhaW5dID0gdXNlU3RhdGU8c3RyaW5nPign7J246rO17KeA64ql7J2EIOu2iOufrOyYpOuKlCDspJHsnbTsl5DsmpQnKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgY29uc3QgW2lzQ2FsY3VsYXRlZCwgc2V0SXNDYWxjdWxhdGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzU2NhbkVuZCwgc2V0U2NhbkVuZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgLy8gY29uc3Qgc3RhdHMgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjYW52YXMgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHZpZGVvID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGRyYXdDYW52YXMgPSB1c2VSZWY8ZHJhd0ZhY2VMaW5lIHwgZHJhd0xpcD4oKTtcclxuICBjb25zdCBkZXRlY3RvciA9IHVzZVJlZjxGYWNlTGFuZG1hcmtzRGV0ZWN0b3I+KCk7XHJcbiAgY29uc3QgcmFmSUQgPSB1c2VSZWY8bnVtYmVyPigpO1xyXG5cclxuICBjb25zdCBzY2FuRHJhdyA9IChwb3NpdGlvbnM6IGFueSkgPT4ge1xyXG4gICAgKGRyYXdDYW52YXMuY3VycmVudCEgYXMgZHJhd0ZhY2VMaW5lKS5kcmF3KHBvc2l0aW9ucyk7XHJcbiAgfTtcclxuICBjb25zdCBhbmltYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gc3RhdHMuY3VycmVudC5iZWdpbigpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGRyYXdDYW52YXMuY3VycmVudD8uY2xlYXJBbmREcmF3KCk7XHJcbiAgICAgIGNvbnN0IHByZWRpY3Rpb25zID0gYXdhaXQgZGV0ZWN0b3IuY3VycmVudD8uZXN0aW1hdGVGYWNlcyhcclxuICAgICAgICB2aWRlby5jdXJyZW50IGFzIEZhY2VMYW5kbWFya3NEZXRlY3RvcklucHV0LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZsaXBIb3Jpem9udGFsOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgaWYgKHByZWRpY3Rpb25zIS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHByZWRpY3Rpb25zIVswXT8ua2V5cG9pbnRzO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbnMpIHtcclxuICAgICAgICAgIHNjYW5EcmF3KHBvc2l0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEV4cGxhaW4oJ+yWvOq1tOydtCDqsJDsp4DrkJjsp4Ag7JWK7JWY7Ja07JqULiDsubTrqZTrnbzsl5Ag7Ja86rW07J2EIOu5hOy2sOyjvOyEuOyalC4nKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBzdGF0cy5jdXJyZW50LmVuZCgpO1xyXG4gICAgICBjb25zdCBzcmNPYmo6IGFueSA9IHZpZGVvLmN1cnJlbnQhLnNyY09iamVjdDtcclxuICAgICAgaWYgKHNyY09iai5hY3RpdmUpIHJhZklELmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgYWxlcnQoJ+yXkOufrOqwgCDrsJzsg53tlojsirXri4jri6QuIOuLpOyLnCDsi5zrj4TtlbQg7KO87IS47JqULicpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc1NjYW5FbmQpIHtcclxuICAgICAgZHJhd0NhbnZhcy5jdXJyZW50ID0gbmV3IGRyYXdMaXAoKTtcclxuICAgICAgZHJhd0NhbnZhcy5jdXJyZW50IS5pbml0KGNhbnZhcy5jdXJyZW50ISwgdmlkZW8uY3VycmVudCEpO1xyXG4gICAgfVxyXG4gIH0sIFtpc1NjYW5FbmRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZpZGVvLmN1cnJlbnQhLnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgdmlkZW8uY3VycmVudCEucGxheSgpLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIHN0YXRzLmN1cnJlbnQgPSBuZXcgU3RhdHMoKTtcclxuICAgICAgICAvLyBzdGF0cy5jdXJyZW50IS5zaG93UGFuZWwoMCk7IC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXHJcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5jdXJyZW50IS5kb20pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZhY2VMYW5kbWFya3NEZXRlY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IGZhY2VMYW5kbWFya3NEZXRlY3Rpb24gPSBhd2FpdCBpbXBvcnQoJ0B0ZW5zb3JmbG93LW1vZGVscy9mYWNlLWxhbmRtYXJrcy1kZXRlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBtb2RlbCA9IGZhY2VMYW5kbWFya3NEZXRlY3Rpb24uU3VwcG9ydGVkTW9kZWxzLk1lZGlhUGlwZUZhY2VNZXNoO1xyXG4gICAgICAgIGRldGVjdG9yLmN1cnJlbnQgPSBhd2FpdCBmYWNlTGFuZG1hcmtzRGV0ZWN0aW9uLmNyZWF0ZURldGVjdG9yKG1vZGVsLCB7XHJcbiAgICAgICAgICBydW50aW1lOiAnbWVkaWFwaXBlJyxcclxuICAgICAgICAgIHJlZmluZUxhbmRtYXJrczogZmFsc2UsXHJcbiAgICAgICAgICBzb2x1dGlvblBhdGg6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0BtZWRpYXBpcGUvZmFjZV9tZXNoJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkcmF3Q2FudmFzLmN1cnJlbnQgPSBuZXcgZHJhd0ZhdGNlTGluZShzZXRFeHBsYWluLCBzZXRJc0NhbGN1bGF0aW5nLCByb3V0ZXIpO1xyXG4gICAgICAgIGRyYXdDYW52YXMuY3VycmVudC5pbml0KGNhbnZhcy5jdXJyZW50ISwgdmlkZW8uY3VycmVudCEpO1xyXG5cclxuICAgICAgICBhbmltYXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBhbGVydCgnYmVmb3JlIGRldGVjdGVkICcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZklELmN1cnJlbnQhKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Q2FudmFzIGlkPVwiY2FudmFzXCIgcmVmPXtjYW52YXN9IC8+XHJcbiAgICAgIDxWaWRlbyBtdXRlZCBwbGF5c0lubGluZSBpZD1cInZpZGVvXCIgcmVmPXt2aWRlb30gLz5cclxuICAgICAgPE1vZGFsUG9ydGFsPlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7aXNDYWxjdWxhdGVkICYmIChcclxuICAgICAgICAgICAgPE1MX0xvYWRpbmcgdGV4dD1cIuyeoOyLnOunjCDquLDri6TroKTso7zshLjsmpRcIiB0aXRsZT1cIu2NvOyKpOuEkOy7rOufrOulvCDsuKHsoJUg7KSR7J207JeQ7JqUIVwiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2lzTG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgIDxNTF9Mb2FkaW5nXHJcbiAgICAgICAgICAgICAgdGV4dD1cIuq4sOq4sOyXkCDrlLDrnbwg7LWc64yAIDHrtoQg6rCA6rmM7J20IOyGjOyalOuQoCDsiJgg7J6I7Ja07JqUXCJcclxuICAgICAgICAgICAgICB0aXRsZT1cIuyduOqzteyngOuKpeydhCDrtojrn6zsmKTripQg7KSR7J207JeQ7JqUXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvTW9kYWxQb3J0YWw+XHJcbiAgICAgIDxCb3R0b21XcmFwcGVyIGlzTG9hZGluZz17aXNMb2FkaW5nfT5cclxuICAgICAgICA8UHJvZ3Jlc3NCYXIgLz5cclxuICAgICAgICA8V3JhcHBlciBpZD1cInRlc3RFeHBsYWluXCI+e2V4cGxhaW59PC9XcmFwcGVyPlxyXG4gICAgICA8L0JvdHRvbVdyYXBwZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW9DYW52YXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=