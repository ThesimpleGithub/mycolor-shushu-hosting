self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/home/MainContainer.tsx":
/*!*******************************************!*\
  !*** ./components/home/MainContainer.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Video": function() { return /* binding */ Video; },
/* harmony export */   "Canvas": function() { return /* binding */ Canvas; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/Router */ "./components/home/Router.tsx");
/* harmony import */ var _home_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/Header */ "./components/home/Header.tsx");
/* harmony import */ var _home_VideoMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/VideoMode */ "./components/home/VideoMode.tsx");
/* harmony import */ var _resultPage_FilterContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resultPage/FilterContainer */ "./components/resultPage/FilterContainer.tsx");
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\Desktop\\Projects\\mycolor-shushu\\components\\home\\MainContainer.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject4() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  left: 0;\n  transform: scale(-1, 1);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  object-fit: fill;\n  transform: scale(-1, 1);\n  display: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  flex-direction: column;\n  align-items: center;\n  transition: all 0.5s ease-in;\n  display: flex;\n  > img {\n    margin-bottom: 7vh;\n    width: 50vh;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: flex;\n  width: 100vw;\n  flex-direction: column;\n  align-items: center;\n  height: calc(var(--vh, 1vh) * 100);\n  background-color: #f7c8d1;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position-y: -17px;\n  max-height: 100vh;\n  @media (max-height: 568px) {\n    height: unset;\n    min-height: calc(var(--vh, 1vh) * 100);\n    justify-content: unset;\n    padding-bottom: 60px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var MainBody = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.section(_templateObject());
_c = MainBody;
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div(_templateObject2());
_c2 = HeaderWrapper;
var Video = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.video(_templateObject3());
var Canvas = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.canvas(_templateObject4());

var MainContainer = function MainContainer() {
  _s();

  var mainPageData = _pages_app__WEBPACK_IMPORTED_MODULE_7__.pageData.mainPageData;

  var resizeHeight = function resizeHeight() {
    return document.documentElement.style.setProperty('--vh', "".concat(window.innerHeight * 0.01, "px"));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    document.body.parentElement.style.fontSize = '10px';
    var img = new Image();
    img.src = "".concat("", "/images/background.png");

    img.onload = function () {
      var body = document.getElementById('mainBody');
      body.style.backgroundImage = "url(".concat(img.src, ")");
      body.style.display = 'flex';
    };

    resizeHeight();
    window.addEventListener('resize', resizeHeight);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainBody, {
    id: "mainBody",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_Router__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderWrapper, {
        id: "headerWrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "".concat("", "/images/mainLogo.png")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_VideoMode__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_resultPage_FilterContainer__WEBPACK_IMPORTED_MODULE_6__.default, {
            mainBtnText: mainPageData.makeUpText,
            mainBtnTitle: mainPageData.makeUpTitle,
            Icon: 'mirror_icon.svg',
            productType: "cosmetic",
            isAllData: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, _this);
};

_s(MainContainer, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c3 = MainContainer;
/* harmony default export */ __webpack_exports__["default"] = (MainContainer);

var _c, _c2, _c3;

$RefreshReg$(_c, "MainBody");
$RefreshReg$(_c2, "HeaderWrapper");
$RefreshReg$(_c3, "MainContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL01haW5Db250YWluZXIudHN4Il0sIm5hbWVzIjpbIk1haW5Cb2R5Iiwic3R5bGVkIiwiSGVhZGVyV3JhcHBlciIsIlZpZGVvIiwiQ2FudmFzIiwiTWFpbkNvbnRhaW5lciIsIm1haW5QYWdlRGF0YSIsInBhZ2VEYXRhIiwicmVzaXplSGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ1c2VFZmZlY3QiLCJib2R5IiwicGFyZW50RWxlbWVudCIsImZvbnRTaXplIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJwcm9jZXNzIiwib25sb2FkIiwiZ2V0RWxlbWVudEJ5SWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VVcFRleHQiLCJtYWtlVXBUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFFBQVEsR0FBR0MsOERBQUgsbUJBQWQ7S0FBTUQsUTtBQW1CTixJQUFNRSxhQUFhLEdBQUdELDBEQUFILG9CQUFuQjtNQUFNQyxhO0FBVUMsSUFBTUMsS0FBSyxHQUFHRiw0REFBSCxvQkFBWDtBQUtBLElBQU1HLE1BQU0sR0FBR0gsNkRBQUgsb0JBQVo7O0FBS1AsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsTUFDbEJDLFlBRGtCLEdBQ0RDLDZEQURDOztBQUcxQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQ25CQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLEtBQXpCLENBQStCQyxXQUEvQixDQUEyQyxNQUEzQyxZQUFzREMsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLElBQTNFLFFBRG1CO0FBQUEsR0FBckI7O0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNkTixZQUFRLENBQUNPLElBQVQsQ0FBY0MsYUFBZCxDQUE2Qk4sS0FBN0IsQ0FBbUNPLFFBQW5DLEdBQThDLE1BQTlDO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUNBRCxPQUFHLENBQUNFLEdBQUosYUFBYUMsRUFBYjs7QUFDQUgsT0FBRyxDQUFDSSxNQUFKLEdBQWEsWUFBTTtBQUNqQixVQUFNUCxJQUFJLEdBQUdQLFFBQVEsQ0FBQ2UsY0FBVCxDQUF3QixVQUF4QixDQUFiO0FBQ0FSLFVBQUksQ0FBRUwsS0FBTixDQUFZYyxlQUFaLGlCQUFxQ04sR0FBRyxDQUFDRSxHQUF6QztBQUNBTCxVQUFJLENBQUVMLEtBQU4sQ0FBWWUsT0FBWixHQUFzQixNQUF0QjtBQUNELEtBSkQ7O0FBS0FsQixnQkFBWTtBQUNaSyxVQUFNLENBQUNjLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDbkIsWUFBbEM7QUFDRCxHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsc0JBQ0UsOERBQUMsUUFBRDtBQUFVLE1BQUUsRUFBQyxVQUFiO0FBQUEsNEJBQ0UsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSw2QkFDRSw4REFBQyxhQUFEO0FBQWUsVUFBRSxFQUFDLGVBQWxCO0FBQUEsZ0NBQ0UsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssYUFBRyxZQUFLYyxFQUFMO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsa0NBQ0UsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLGdFQUFEO0FBQ0UsdUJBQVcsRUFBRWhCLFlBQVksQ0FBQ3NCLFVBRDVCO0FBRUUsd0JBQVksRUFBRXRCLFlBQVksQ0FBQ3VCLFdBRjdCO0FBR0UsZ0JBQUksRUFBRSxpQkFIUjtBQUlFLHVCQUFXLEVBQUMsVUFKZDtBQUtFLHFCQUFTLEVBQUU7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQXZDRDs7R0FBTXhCLGE7O01BQUFBLGE7QUF3Q04sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGUzM2ZmNGZjMGYzMWFhYzQ5YWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vaG9tZS9Sb3V0ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hvbWUvSGVhZGVyJztcclxuaW1wb3J0IFZpZGVvTW9kZSBmcm9tICcuLi9ob21lL1ZpZGVvTW9kZSc7XHJcbmltcG9ydCBGaWx0ZXJDb250YWluZXIgZnJvbSAnLi4vcmVzdWx0UGFnZS9GaWx0ZXJDb250YWluZXInO1xyXG5pbXBvcnQgeyBwYWdlRGF0YSB9IGZyb20gJy4uLy4uL3BhZ2VzL19hcHAnO1xyXG5jb25zdCBNYWluQm9keSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2M4ZDE7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0xN3B4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIEBtZWRpYSAobWF4LWhlaWdodDogNTY4cHgpIHtcclxuICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcclxuICAgIGp1c3RpZnktY29udGVudDogdW5zZXQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gID4gaW1nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDd2aDtcclxuICAgIHdpZHRoOiA1MHZoO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFZpZGVvID0gc3R5bGVkLnZpZGVvYFxyXG4gIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IENhbnZhcyA9IHN0eWxlZC5jYW52YXNgXHJcbiAgbGVmdDogMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcclxuYDtcclxuXHJcbmNvbnN0IE1haW5Db250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBtYWluUGFnZURhdGEgfSA9IHBhZ2VEYXRhO1xyXG5cclxuICBjb25zdCByZXNpemVIZWlnaHQgPSAoKSA9PlxyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7d2luZG93LmlubmVySGVpZ2h0ICogMC4wMX1weGApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnBhcmVudEVsZW1lbnQhLnN0eWxlLmZvbnRTaXplID0gJzEwcHgnO1xyXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL2JhY2tncm91bmQucG5nYDtcclxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkJvZHknKTtcclxuICAgICAgYm9keSEuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltZy5zcmN9KWA7XHJcbiAgICAgIGJvZHkhLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9O1xyXG4gICAgcmVzaXplSGVpZ2h0KCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGVpZ2h0KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkJvZHkgaWQ9XCJtYWluQm9keVwiPlxyXG4gICAgICA8Um91dGVyIC8+XHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWRlcldyYXBwZXIgaWQ9XCJoZWFkZXJXcmFwcGVyXCI+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz17YCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL21haW5Mb2dvLnBuZ2B9IC8+XHJcbiAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPFZpZGVvTW9kZSAvPlxyXG4gICAgICAgICAgICA8RmlsdGVyQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgbWFpbkJ0blRleHQ9e21haW5QYWdlRGF0YS5tYWtlVXBUZXh0fVxyXG4gICAgICAgICAgICAgIG1haW5CdG5UaXRsZT17bWFpblBhZ2VEYXRhLm1ha2VVcFRpdGxlfVxyXG4gICAgICAgICAgICAgIEljb249eydtaXJyb3JfaWNvbi5zdmcnfVxyXG4gICAgICAgICAgICAgIHByb2R1Y3RUeXBlPVwiY29zbWV0aWNcIlxyXG4gICAgICAgICAgICAgIGlzQWxsRGF0YT17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L0hlYWRlcldyYXBwZXI+XHJcbiAgICAgIDwvPlxyXG4gICAgPC9NYWluQm9keT5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9