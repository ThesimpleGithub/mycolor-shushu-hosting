self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/canStream.ts":
/*!****************************!*\
  !*** ./utils/canStream.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ canStream; }
/* harmony export */ });
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* module decorator */ module = __webpack_require__.hmd(module);


// import ImageUpload from './ImageUpload';
function canStream(_x) {
  return _canStream.apply(this, arguments);
}

function _canStream() {
  _canStream = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(faceBoard) {
    var ua, videoStream, floatOs, osInfo, realOs, afterHeight, width, height, option, noCam;
    return C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            noCam = function _noCam() {
              var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

              // loading.style.display = 'none';
              if (faceBoard != 'scan') {// ImageUpload(faceBoard);
              }

              var isMobile = /mobile/i.test(ua);
              if (/crios/i.test(ua)) alert('지원하지 않는 브라우저입니다. safari로 접속해주세요.');else if (/denied/i.test(err)) {
                if (/kakaotalk/i.test(ua)) {
                  if (confirm('지원하지 않는 브라우저거나 카메라 권한을 차단하셨습니다. 외부 브라우저로 연결하시겠습니까?')) {
                    if (/iphone|ipad/i.test(ua)) {
                      window.open('https://urlopen.link/mycolor.kr');
                    } else window.open('intent://mycolor.kr#Intent;scheme=http;package=com.android.chrome;end');
                  }
                } else alert('카메라 권한을 차단하셨습니다. 브라우저 설정에서 허용으로 바꿔주세요.');
              } else if (isMobile) {
                if (confirm('지원하지 않는 브라우저거나 카메라 권한을 차단하셨습니다. 외부 브라우저로 연결하시겠습니까?')) {
                  if (/iphone|ipad/i.test(ua)) {
                    window.open('https://urlopen.link/mycolor.kr');
                  } else window.open('intent://mycolor.kr#Intent;scheme=http;package=com.android.chrome;end');
                }
              } else {// ImageUpload(faceBoard);
              }
            };

            ua = navigator.userAgent;

            if (/fb/i.test(ua) && !/fbios/i.test(ua)) {
              floatOs = 0;

              if (ua.indexOf('FBSV') > -1) {
                osInfo = ua.split('FBSV')[1];
                realOs = osInfo.substring(1, 3) + '.' + osInfo.substring(4, 5);
                floatOs = parseFloat(realOs);
              } else {
                osInfo = ua.split('OS')[1];
                realOs = osInfo.substring(1, 3) + '.' + osInfo.substring(4, 5); //ios버전 추출해서 실수형으로.

                floatOs = parseFloat(realOs);
              }

              if (floatOs < 13.4) {
                window.open('x-web-search://?mycolor.kr');
              }
            }

            if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
              _context.next = 25;
              break;
            }

            _context.prev = 4;
            afterHeight = innerHeight;
            width = (innerWidth < afterHeight ? 720 : innerWidth * 720 / afterHeight) * 0.7;
            height = (innerWidth > afterHeight ? 720 : afterHeight * 720 / innerWidth) * 0.7;
            option = {
              width: /mobile/i.test(ua) ? height : width,
              height: /mobile/i.test(ua) ? width : height,
              frameRate: {
                ideal: 60
              },
              facingMode: 'user'
            };

            if (!(ua.indexOf('Safari') != -1 && ua.indexOf('Chrome') == -1)) {
              _context.next = 15;
              break;
            }

            _context.next = 12;
            return navigator.mediaDevices.getUserMedia({
              video: option
            });

          case 12:
            return _context.abrupt("return", _context.sent);

          case 15:
            _context.next = 17;
            return navigator.mediaDevices.getUserMedia({
              video: option
            });

          case 17:
            return _context.abrupt("return", _context.sent);

          case 18:
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](4);
            noCam(_context.t0);

          case 23:
            _context.next = 26;
            break;

          case 25:
            noCam();

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 20]]);
  }));
  return _canStream.apply(this, arguments);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY2FuU3RyZWFtLnRzIl0sIm5hbWVzIjpbImNhblN0cmVhbSIsImZhY2VCb2FyZCIsIm5vQ2FtIiwiZXJyIiwiaXNNb2JpbGUiLCJ0ZXN0IiwidWEiLCJhbGVydCIsImNvbmZpcm0iLCJ3aW5kb3ciLCJvcGVuIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZmxvYXRPcyIsImluZGV4T2YiLCJvc0luZm8iLCJzcGxpdCIsInJlYWxPcyIsInN1YnN0cmluZyIsInBhcnNlRmxvYXQiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhZnRlckhlaWdodCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0Iiwib3B0aW9uIiwiZnJhbWVSYXRlIiwiaWRlYWwiLCJmYWNpbmdNb2RlIiwidmlkZW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQWVBLFNBQTlCO0FBQUE7QUFBQTs7O3VXQUFlLGlCQUF5QkMsU0FBekI7QUFBQSxzRkF5SEpDLEtBekhJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5SEpBLGlCQXpISSxxQkF5SG1CO0FBQUEsa0JBQWpCQyxHQUFpQix1RUFBWCxTQUFXOztBQUM5QjtBQUNBLGtCQUFJRixTQUFTLElBQUksTUFBakIsRUFBeUIsQ0FDdkI7QUFDRDs7QUFDRCxrQkFBTUcsUUFBUSxHQUFHLFVBQVVDLElBQVYsQ0FBZUMsRUFBZixDQUFqQjtBQUNBLGtCQUFJLFNBQVNELElBQVQsQ0FBY0MsRUFBZCxDQUFKLEVBQXVCQyxLQUFLLENBQUMsa0NBQUQsQ0FBTCxDQUF2QixLQUNLLElBQUksVUFBVUYsSUFBVixDQUFlRixHQUFmLENBQUosRUFBeUI7QUFDNUIsb0JBQUksYUFBYUUsSUFBYixDQUFrQkMsRUFBbEIsQ0FBSixFQUEyQjtBQUN6QixzQkFDRUUsT0FBTyxDQUNMLG9EQURLLENBRFQsRUFJRTtBQUNBLHdCQUFJLGVBQWVILElB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QUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQXdDTUgsU0FBUyxDQUFDUyxZQUFWLENBQXVCQyxZQUF2QixDQUFvQztBQUMvQ1UsbUJBQUssRUFBRUo7QUFEd0MsYUFBcEMsQ0F4Q047O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBNkNNaEIsU0FBUyxDQUFDUyxZQUFWLENBQXVCQyxZQUF2QixDQUFvQztBQUMvQ1UsbUJBQUssRUFBRUo7QUFEd0MsYUFBcEMsQ0E3Q047O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBa0RUekIsaUJBQUssYUFBTDs7QUFsRFM7QUFBQTtBQUFBOztBQUFBO0FBc0hYQSxpQkFBSzs7QUF0SE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZGIxNDRhMDY5YmVmZTEyZTE1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEltYWdlVXBsb2FkIGZyb20gJy4vSW1hZ2VVcGxvYWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY2FuU3RyZWFtKGZhY2VCb2FyZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkIHwgTWVkaWFTdHJlYW0+IHtcclxuICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgbGV0IHZpZGVvU3RyZWFtO1xyXG5cclxuICBpZiAoL2ZiL2kudGVzdCh1YSkgJiYgIS9mYmlvcy9pLnRlc3QodWEpKSB7XHJcbiAgICBsZXQgZmxvYXRPcyA9IDA7XHJcbiAgICBsZXQgb3NJbmZvO1xyXG4gICAgbGV0IHJlYWxPcztcclxuICAgIGlmICh1YS5pbmRleE9mKCdGQlNWJykgPiAtMSkge1xyXG4gICAgICBvc0luZm8gPSB1YS5zcGxpdCgnRkJTVicpWzFdO1xyXG4gICAgICByZWFsT3MgPSBvc0luZm8uc3Vic3RyaW5nKDEsIDMpICsgJy4nICsgb3NJbmZvLnN1YnN0cmluZyg0LCA1KTtcclxuICAgICAgZmxvYXRPcyA9IHBhcnNlRmxvYXQocmVhbE9zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9zSW5mbyA9IHVhLnNwbGl0KCdPUycpWzFdO1xyXG4gICAgICByZWFsT3MgPSBvc0luZm8uc3Vic3RyaW5nKDEsIDMpICsgJy4nICsgb3NJbmZvLnN1YnN0cmluZyg0LCA1KTtcclxuXHJcbiAgICAgIC8vaW9z67KE7KCEIOy2lOy2nO2VtOyEnCDsi6TsiJjtmJXsnLzroZwuXHJcbiAgICAgIGZsb2F0T3MgPSBwYXJzZUZsb2F0KHJlYWxPcyk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmxvYXRPcyA8IDEzLjQpIHtcclxuICAgICAgd2luZG93Lm9wZW4oJ3gtd2ViLXNlYXJjaDovLz9teWNvbG9yLmtyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKSB7XHJcbiAgICAvL+yCrO2MjOumrOuKlCDtlbTsg4Hrj4TqsIAg7J6Q64+Z7Jy866GcIOyhsOygiOuQmOq4sOuVjOusuOyXkCDtlbTsg4Hrj4Trpbwg7ISk7KCV7ZW07KO866m0IOyXkOufrOqwgOuCnOuLpC4g6re4656Y7IScIOyCrO2MjOumrOuKlCDshKTsoJXsnYQg7JWI7ZW07KSY7JW87ZWY64qU642wLFxyXG4gICAgLy/quLDquLAg7KCV67O066W8IOuwm+yVhOyYrOuVjCDtgazroazsl5DripQg7IKs7YyM66asIO2BrOuhrOydtCDri6Qg7KCB7ZiA7J6I6rOgLCDsgqztjIzrpqzsl5DripQg7IKs7YyM66as66eMIOygge2YgOyeiOycvOuvgOuhnCDsgqztjIzrpqzrpbwg7Yq57KCV7ZWY6riwIOychO2VtOyEnOuKlFxyXG4gICAgLy/sgqztjIzrpqwg66y47J6Q66W8IO2PrO2VqO2VmOqzoCDtgazroawg66y47J6Q66W8IO2PrO2VqO2VmOyngOyViuuKlCDsobDqsbTsnYQg7Lap7KGx7Iuc7Lyc7KSY7JW87ZWc64ukXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhZnRlckhlaWdodCA9IGlubmVySGVpZ2h0O1xyXG4gICAgICBjb25zdCB3aWR0aCA9IChpbm5lcldpZHRoIDwgYWZ0ZXJIZWlnaHQgPyA3MjAgOiAoaW5uZXJXaWR0aCAqIDcyMCkgLyBhZnRlckhlaWdodCkgKiAwLjc7XHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IChpbm5lcldpZHRoID4gYWZ0ZXJIZWlnaHQgPyA3MjAgOiAoYWZ0ZXJIZWlnaHQgKiA3MjApIC8gaW5uZXJXaWR0aCkgKiAwLjc7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IHtcclxuICAgICAgICB3aWR0aDogL21vYmlsZS9pLnRlc3QodWEpID8gaGVpZ2h0IDogd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiAvbW9iaWxlL2kudGVzdCh1YSkgPyB3aWR0aCA6IGhlaWdodCxcclxuICAgICAgICBmcmFtZVJhdGU6IHtcclxuICAgICAgICAgIGlkZWFsOiA2MCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhY2luZ01vZGU6ICd1c2VyJyxcclxuICAgICAgfTtcclxuICAgICAgaWYgKHVhLmluZGV4T2YoJ1NhZmFyaScpICE9IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgICAgIHZpZGVvOiBvcHRpb24sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gTm90IGFkZGluZyBgeyBhdWRpbzogdHJ1ZSB9YCBzaW5jZSB3ZSBvbmx5IHdhbnQgdmlkZW8gbm93XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgICAgIHZpZGVvOiBvcHRpb24sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgbm9DYW0oZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBlbHNlIGlmIChuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhKSB7XHJcbiAgLy8gICAvLyBTdGFuZGFyZFxyXG5cclxuICAvLyAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEoXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICB2aWRlbzoge1xyXG4gIC8vICAgICAgICAgd2lkdGg6IHsgbWluOiAwLCBpZGVhbDogMTI4MCwgbWF4OiAyNTYwIH0sXHJcbiAgLy8gICAgICAgICBoZWlnaHQ6IHsgbWluOiAwLCBpZGVhbDogODk0LCBtYXg6IDE3ODggfSxcclxuICAvLyAgICAgICAgIGZhY2luZ01vZGU6ICd1c2VyJyxcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBmdW5jdGlvbiAoc3RyZWFtKSB7XHJcbiAgLy8gICAgICAgdmlkZW8uc3JjID0gc3RyZWFtO1xyXG4gIC8vICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAvLyAgICAgICBTdHJlYW1DYW52YXMoZmFjZUJvYXJkKTtcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZXJyID0+IHtcclxuICAvLyAgICAgICBlcnIgKz0gJyc7XHJcbiAgLy8gICAgICAgbm9DYW0oZXJyKTtcclxuICAvLyAgICAgfSxcclxuICAvLyAgICk7XHJcbiAgLy8gfSBlbHNlIGlmIChuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhKSB7XHJcbiAgLy8gICAvLyBXZWJLaXQtcHJlZml4ZWRcclxuXHJcbiAgLy8gICBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhKFxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgdmlkZW86IHtcclxuICAvLyAgICAgICAgIHdpZHRoOiB7IG1pbjogMCwgaWRlYWw6IDEyODAsIG1heDogMjU2MCB9LFxyXG4gIC8vICAgICAgICAgaGVpZ2h0OiB7IG1pbjogMCwgaWRlYWw6IDg5NCwgbWF4OiAxNzg4IH0sXHJcbiAgLy8gICAgICAgICBmYWNpbmdNb2RlOiAndXNlcicsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZnVuY3Rpb24gKHN0cmVhbSkge1xyXG4gIC8vICAgICAgIHZpZGVvLnNyYyA9IHdpbmRvdy53ZWJraXRVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XHJcbiAgLy8gICAgICAgdmlkZW8ucGxheSgpO1xyXG4gIC8vICAgICAgIFN0cmVhbUNhbnZhcyhmYWNlQm9hcmQpO1xyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBlcnIgPT4ge1xyXG4gIC8vICAgICAgIGVyciArPSAnJztcclxuICAvLyAgICAgICBub0NhbShlcnIpO1xyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgKTtcclxuICAvLyB9IGVsc2UgaWYgKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcclxuICAvLyAgIC8vIE1vemlsbGEtcHJlZml4ZWRcclxuXHJcbiAgLy8gICBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKFxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgdmlkZW86IHtcclxuICAvLyAgICAgICAgIHdpZHRoOiB7IG1pbjogMCwgaWRlYWw6IDEyODAsIG1heDogMjU2MCB9LFxyXG4gIC8vICAgICAgICAgaGVpZ2h0OiB7IG1pbjogMCwgaWRlYWw6IDg5NCwgbWF4OiAxNzg4IH0sXHJcbiAgLy8gICAgICAgICBmYWNpbmdNb2RlOiAndXNlcicsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZnVuY3Rpb24gKHN0cmVhbSkge1xyXG4gIC8vICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAvLyAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgLy8gICAgICAgU3RyZWFtQ2FudmFzKGZhY2VCb2FyZCk7XHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGVyciA9PiB7XHJcbiAgLy8gICAgICAgZXJyICs9ICcnO1xyXG4gIC8vICAgICAgIG5vQ2FtKGVycik7XHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuICBlbHNlIHtcclxuICAgIG5vQ2FtKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBub0NhbShlcnIgPSAnZGVmYXVsdCcpIHtcclxuICAgIC8vIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGlmIChmYWNlQm9hcmQgIT0gJ3NjYW4nKSB7XHJcbiAgICAgIC8vIEltYWdlVXBsb2FkKGZhY2VCb2FyZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpc01vYmlsZSA9IC9tb2JpbGUvaS50ZXN0KHVhKTtcclxuICAgIGlmICgvY3Jpb3MvaS50ZXN0KHVhKSkgYWxlcnQoJ+yngOybkO2VmOyngCDslYrripQg67iM65287Jqw7KCA7J6F64uI64ukLiBzYWZhcmnroZwg7KCR7IaN7ZW07KO87IS47JqULicpO1xyXG4gICAgZWxzZSBpZiAoL2RlbmllZC9pLnRlc3QoZXJyKSkge1xyXG4gICAgICBpZiAoL2tha2FvdGFsay9pLnRlc3QodWEpKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgY29uZmlybShcclxuICAgICAgICAgICAgJ+yngOybkO2VmOyngCDslYrripQg67iM65287Jqw7KCA6rGw64KYIOy5tOuplOudvCDqtoztlZzsnYQg7LCo64uo7ZWY7IWo7Iq164uI64ukLiDsmbjrtoAg67iM65287Jqw7KCA66GcIOyXsOqysO2VmOyLnOqyoOyKteuLiOq5jD8nLFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKC9pcGhvbmV8aXBhZC9pLnRlc3QodWEpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL3VybG9wZW4ubGluay9teWNvbG9yLmtyJyk7XHJcbiAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oJ2ludGVudDovL215Y29sb3Iua3IjSW50ZW50O3NjaGVtZT1odHRwO3BhY2thZ2U9Y29tLmFuZHJvaWQuY2hyb21lO2VuZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGFsZXJ0KCfsubTrqZTrnbwg6raM7ZWc7J2EIOywqOuLqO2VmOyFqOyKteuLiOuLpC4g67iM65287Jqw7KCAIOyEpOygleyXkOyEnCDtl4jsmqnsnLzroZwg67CU6r+U7KO87IS47JqULicpO1xyXG4gICAgfSBlbHNlIGlmIChpc01vYmlsZSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgY29uZmlybShcclxuICAgICAgICAgICfsp4Dsm5DtlZjsp4Ag7JWK64qUIOu4jOudvOyasOyggOqxsOuCmCDsubTrqZTrnbwg6raM7ZWc7J2EIOywqOuLqO2VmOyFqOyKteuLiOuLpC4g7Jm467aAIOu4jOudvOyasOyggOuhnCDsl7DqsrDtlZjsi5zqsqDsirXri4jquYw/JyxcclxuICAgICAgICApXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmICgvaXBob25lfGlwYWQvaS50ZXN0KHVhKSkge1xyXG4gICAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vdXJsb3Blbi5saW5rL215Y29sb3Iua3InKTtcclxuICAgICAgICB9IGVsc2Ugd2luZG93Lm9wZW4oJ2ludGVudDovL215Y29sb3Iua3IjSW50ZW50O3NjaGVtZT1odHRwO3BhY2thZ2U9Y29tLmFuZHJvaWQuY2hyb21lO2VuZCcpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJbWFnZVVwbG9hZChmYWNlQm9hcmQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9