self["webpackHotUpdate_N_E"]("pages/[season]",{

/***/ "./components/home/ResultContainer.tsx":
/*!*********************************************!*\
  !*** ./components/home/ResultContainer.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_home_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/Loading */ "./components/home/Loading.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_colorStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/colorStore */ "./store/colorStore.ts");
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.tsx");
/* harmony import */ var _components_resultPage_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/resultPage/Header */ "./components/resultPage/Header.tsx");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/theme */ "./utils/theme.ts");
/* harmony import */ var _components_resultPage_ButtonWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/resultPage/ButtonWrapper */ "./components/resultPage/ButtonWrapper.tsx");
/* harmony import */ var _utils_shushuObj__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/shushuObj */ "./utils/shushuObj.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\Desktop\\Projects\\mycolor-shushu\\components\\home\\ResultContainer.tsx",
    _this = undefined,
    _s = $RefreshSig$();












var ResultContainer = function ResultContainer(_ref) {
  _s();

  var lang = _ref.lang;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  if (router.query.isShared) router.push('/');
  var season = router.query['season'];
  var Data = _pages_app__WEBPACK_IMPORTED_MODULE_6__.pageData.resultPageData.colorData[_utils_shushuObj__WEBPACK_IMPORTED_MODULE_10__.shushuToColor[season]];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!router.isReady) return;
    document.body.parentElement.style.fontSize = '14px'; // if (window.innerWidth < 1100) setSideAds(false);
    // window.addEventListener('resize', () => {
    //   if (window.innerWidth < 1100) setSideAds(false);
    //   else setSideAds(true);
    // });
    // axios
    //   .get(`/api/${lang}getResult`, {
    //     params: {
    //       season: Data.webInfo.query,
    //       isUpdate: router.query.isUpdate,
    //     },
    //   })
    //   .then(res => {
    //     dispatch(actionCreators.setResultData(res.data));
    //     lazyLoading();
    //   });

    dispatch(_store_colorStore__WEBPACK_IMPORTED_MODULE_5__.actionCreators.setSeasonInfo({
      colorName: Data.webInfo.colorName,
      query: Data.webInfo.query,
      seasonEngName: Data.webInfo.seasonEngName
    }));
  }, [router.isReady]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_theme__WEBPACK_IMPORTED_MODULE_8__.default.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Loading__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultPage_Header__WEBPACK_IMPORTED_MODULE_7__.default, {
      data: Data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultPage_ButtonWrapper__WEBPACK_IMPORTED_MODULE_9__.default, {
      data: Data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, _this);
};

_s(ResultContainer, "bjZflwr9yuHJ0eAg20MSTkw3ecc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch];
});

_c = ResultContainer;
/* harmony default export */ __webpack_exports__["default"] = (ResultContainer);

var _c;

$RefreshReg$(_c, "ResultContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL1Jlc3VsdENvbnRhaW5lci50c3giXSwibmFtZXMiOlsiUmVzdWx0Q29udGFpbmVyIiwibGFuZyIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiaXNTaGFyZWQiLCJwdXNoIiwic2Vhc29uIiwiRGF0YSIsInBhZ2VEYXRhIiwic2h1c2h1VG9Db2xvciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJpc1JlYWR5IiwiZG9jdW1lbnQiLCJib2R5IiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwiZm9udFNpemUiLCJhY3Rpb25DcmVhdG9ycyIsImNvbG9yTmFtZSIsIndlYkluZm8iLCJzZWFzb25FbmdOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUlBO0FBRUE7QUFHQTtBQUdBO0FBRUE7O0FBQ0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUE4QztBQUFBOztBQUFBLE1BQTNDQyxJQUEyQyxRQUEzQ0EsSUFBMkM7QUFDcEUsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQUlELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxRQUFqQixFQUEyQkgsTUFBTSxDQUFDSSxJQUFQLENBQVksR0FBWjtBQUMzQixNQUFNQyxNQUFNLEdBQUdMLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLFFBQWIsQ0FBZjtBQUNBLE1BQU1JLElBQUksR0FBR0MseUVBQUEsQ0FBa0NDLDREQUFhLENBQUNILE1BQUQsQ0FBL0MsQ0FBYjtBQUNBLE1BQU1JLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7QUFDQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDWCxNQUFNLENBQUNZLE9BQVosRUFBcUI7QUFDckJDLFlBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxhQUFkLENBQTZCQyxLQUE3QixDQUFtQ0MsUUFBbkMsR0FBOEMsTUFBOUMsQ0FGYyxDQUlkO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBUixZQUFRLENBQ05TLDJFQUFBLENBQTZCO0FBQzNCQyxlQUFTLEVBQUViLElBQUksQ0FBQ2MsT0FBTCxDQUFhRCxTQURHO0FBRTNCakIsV0FBSyxFQUFFSSxJQUFJLENBQUNjLE9BQUwsQ0FBYWxCLEtBRk87QUFHM0JtQixtQkFBYSxFQUFFZixJQUFJLENBQUNjLE9BQUwsQ0FBYUM7QUFIRCxLQUE3QixDQURNLENBQVI7QUFPRCxHQTdCUSxFQTZCTixDQUFDckIsTUFBTSxDQUFDWSxPQUFSLENBN0JNLENBQVQ7QUErQkEsc0JBQ0UsOERBQUMsMkRBQUQ7QUFBQSw0QkFNRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFPRSw4REFBQyxrRUFBRDtBQUFRLFVBQUksRUFBRU47QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFRRSw4REFBQyx5RUFBRDtBQUFlLFVBQUksRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBMUREOztHQUFNUixlO1VBQ1dHLGtELEVBSUVTLG9EOzs7S0FMYlosZTtBQTRETiwrREFBZUEsZUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bc2Vhc29uXS5hNTMwMTYxYmMyZWFjYmE3YzQwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb3BTY3JvbGwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yZXN1bHRQYWdlL1RvcFNjcm9sbCc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS9Mb2FkaW5nJztcclxuaW1wb3J0IENoYXJ0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmVzdWx0UGFnZS9DaGFydCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyB9IGZyb20gJy4uLy4uL3N0b3JlL2NvbG9yU3RvcmUnO1xyXG5pbXBvcnQgbGF6eUxvYWRpbmcgZnJvbSAnLi4vLi4vdXRpbHMvbGF6eUxvYWRpbmcnO1xyXG5pbXBvcnQgQ2xvdGhlc1JlY29tbWVuZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Jlc3VsdFBhZ2UvQ2xvdGhlc1JlY29tbWVuZCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yZXN1bHRQYWdlL0Zvb3Rlcic7XHJcbmltcG9ydCB7IHBhZ2VEYXRhIH0gZnJvbSAnLi4vLi4vcGFnZXMvX2FwcCc7XHJcbmltcG9ydCBDb2xvckluZm9TZWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmVzdWx0UGFnZS9Db2xvckluZm9TZWN0aW9uJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Jlc3VsdFBhZ2UvSGVhZGVyJztcclxuaW1wb3J0IEFkc2Vuc2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BZHNlbnNlJztcclxuaW1wb3J0IHsgTGVmdEFkLCBSaWdodEFkIH0gZnJvbSAnLi4vLi4vcGFnZXMvZXhwbGFpbic7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi91dGlscy90aGVtZSc7XHJcbmltcG9ydCBSZXN1bHRfT2dfZ3JhcGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SZXN1bHRfT2dfZ3JhcGgnO1xyXG5pbXBvcnQgRXhwbGFpbk5hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0V4cGxhaW5OYXYnO1xyXG5pbXBvcnQgQnV0dG9uV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Jlc3VsdFBhZ2UvQnV0dG9uV3JhcHBlcic7XHJcbmltcG9ydCBDZWxlYkNvbnRhaW5lciBmcm9tICcuLi9yZXN1bHRQYWdlL0NlbGViQ29udGFpbmVyJztcclxuaW1wb3J0IHsgY29sb3JUb1NodXNodSwgc2h1c2h1VG9Db2xvciB9IGZyb20gJy4uLy4uL3V0aWxzL3NodXNodU9iaic7XHJcbmNvbnN0IFJlc3VsdENvbnRhaW5lciA9ICh7IGxhbmcgfTogeyBsYW5nOiBzdHJpbmcgfSk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgaWYgKHJvdXRlci5xdWVyeS5pc1NoYXJlZCkgcm91dGVyLnB1c2goJy8nKTtcclxuICBjb25zdCBzZWFzb24gPSByb3V0ZXIucXVlcnlbJ3NlYXNvbiddIGFzIHN0cmluZztcclxuICBjb25zdCBEYXRhID0gcGFnZURhdGEucmVzdWx0UGFnZURhdGEuY29sb3JEYXRhW3NodXNodVRvQ29sb3Jbc2Vhc29uXV07XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XHJcbiAgICBkb2N1bWVudC5ib2R5LnBhcmVudEVsZW1lbnQhLnN0eWxlLmZvbnRTaXplID0gJzE0cHgnO1xyXG5cclxuICAgIC8vIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDExMDApIHNldFNpZGVBZHMoZmFsc2UpO1xyXG5cclxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAvLyAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDExMDApIHNldFNpZGVBZHMoZmFsc2UpO1xyXG4gICAgLy8gICBlbHNlIHNldFNpZGVBZHModHJ1ZSk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBheGlvc1xyXG4gICAgLy8gICAuZ2V0KGAvYXBpLyR7bGFuZ31nZXRSZXN1bHRgLCB7XHJcbiAgICAvLyAgICAgcGFyYW1zOiB7XHJcbiAgICAvLyAgICAgICBzZWFzb246IERhdGEud2ViSW5mby5xdWVyeSxcclxuICAgIC8vICAgICAgIGlzVXBkYXRlOiByb3V0ZXIucXVlcnkuaXNVcGRhdGUsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLnRoZW4ocmVzID0+IHtcclxuICAgIC8vICAgICBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5zZXRSZXN1bHREYXRhKHJlcy5kYXRhKSk7XHJcbiAgICAvLyAgICAgbGF6eUxvYWRpbmcoKTtcclxuICAgIC8vICAgfSk7XHJcbiAgICBkaXNwYXRjaChcclxuICAgICAgYWN0aW9uQ3JlYXRvcnMuc2V0U2Vhc29uSW5mbyh7XHJcbiAgICAgICAgY29sb3JOYW1lOiBEYXRhLndlYkluZm8uY29sb3JOYW1lLFxyXG4gICAgICAgIHF1ZXJ5OiBEYXRhLndlYkluZm8ucXVlcnksXHJcbiAgICAgICAgc2Vhc29uRW5nTmFtZTogRGF0YS53ZWJJbmZvLnNlYXNvbkVuZ05hbWUsXHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICB9LCBbcm91dGVyLmlzUmVhZHldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx0aGVtZS5Db250YWluZXI+XHJcbiAgICAgIHsvKiA8UmVzdWx0X09nX2dyYXBoXHJcbiAgICAgICAgY29sb3JOYW1lPXtEYXRhLndlYkluZm8uY29sb3JOYW1lfVxyXG4gICAgICAgIHNlYXNvbkVuZ05hbWU9e0RhdGEud2ViSW5mby5zZWFzb25FbmdOYW1lfVxyXG4gICAgICAgIHVybD17YC8ke2xhbmcgKyBEYXRhLndlYkluZm8ucXVlcnl9YH1cclxuICAgICAgLz4gKi99XHJcbiAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgIDxIZWFkZXIgZGF0YT17RGF0YX0gLz5cclxuICAgICAgPEJ1dHRvbldyYXBwZXIgZGF0YT17RGF0YX0gLz5cclxuXHJcbiAgICAgIHsvKiA8Q29sb3JJbmZvU2VjdGlvbiBkYXRhPXtEYXRhLmluZm9TZWN0aW9ufSB3ZWJJbmZvPXtEYXRhLndlYkluZm99IC8+XHJcblxyXG4gICAgICA8Q2xvdGhlc1JlY29tbWVuZD48L0Nsb3RoZXNSZWNvbW1lbmQ+XHJcbiAgICAgIDxVc2VySXRlbVNjb3JlIC8+XHJcbiAgICAgIDxDZWxlYkNvbnRhaW5lciAvPlxyXG4gICAgICA8Q2hhcnQgLz5cclxuICAgICAgPEZvb3RlciB3ZWJJbmZvPXtEYXRhLndlYkluZm99IC8+XHJcbiAgICAgIDxUb3BTY3JvbGwgLz4gKi99XHJcbiAgICA8L3RoZW1lLkNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0Q29udGFpbmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9