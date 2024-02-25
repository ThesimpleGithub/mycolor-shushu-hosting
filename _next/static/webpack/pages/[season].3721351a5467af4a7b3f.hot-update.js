self["webpackHotUpdate_N_E"]("pages/[season]",{

/***/ "./components/resultPage/Filter.tsx":
/*!******************************************!*\
  !*** ./components/resultPage/Filter.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _utils_mindar_face_three_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/mindar-face-three.prod */ "./utils/mindar-face-three.prod.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _FilterSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterSlider */ "./components/resultPage/FilterSlider.tsx");
/* harmony import */ var _datas_cosmeticData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../datas/cosmeticData */ "./datas/cosmeticData.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\Desktop\\Projects\\mycolor-shushu\\components\\resultPage\\Filter.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject8() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  z-index: 1;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  opacity: 0;\n  transition: opacity 0.2s;\n  background-color: #ffffff;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  transition: opacity 0.5s ease;\n  background-color: rgba(0, 0, 0, 0.25);\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  z-index: 3;\n  color: white;\n\n  padding: 8px 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  img {\n    width: 68px;\n    height: 68px;\n    border-radius: 15px;\n    margin-right: 10px;\n  }\n  div:last-child {\n    width: 55%;\n    max-width: 285px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    h3 {\n      margin: 0;\n      display: -webkit-box;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      font-size: 16px;\n      font-weight: bold;\n    }\n    div {\n      margin: 5px 0px;\n      display: flex;\n      align-items: center;\n    }\n    span {\n      font-size: 14px;\n      font-weight: 100;\n    }\n    p {\n      font-size: 10px;\n      font-weight: 100;\n    }\n    button {\n      margin-left: 10px;\n      padding-top: 0px;\n      font-size: 10px;\n      font-weight: 900;\n      background-color: #ffc6c6;\n      color: black;\n      border-radius: 20px;\n      width: 80px;\n      height: 23.7px;\n      font-family: 'Pretendard Variable';\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  > div:first-of-type {\n    width: 68px;\n    height: 68px;\n    border-radius: 15px;\n    margin-right: 10px;\n    background: #d3d2d2;\n  }\n  > div:last-of-type {\n    width: 55%;\n    max-width: 285px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    > div:first-of-type {\n      width: 100%;\n      margin: 10px 0px;\n      display: flex;\n      justify-content: space-around;\n      align-items: center;\n      > :first-of-type {\n        height: 15px;\n        width: 30%;\n        background: #d3d2d2;\n        border-radius: 2px;\n      }\n      > :last-child {\n        width: 40%;\n        height: 15px;\n        background: #d3d2d2;\n        border-radius: 2px;\n      }\n    }\n    > :last-of-type {\n      width: 90%;\n      height: 15px;\n      background: #d3d2d2;\n      border-radius: 2px;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  padding: 23px 13px;\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 18px;\n  button:nth-child(1) {\n    margin-top: 0px;\n  }\n  button {\n    margin-top: 16px;\n    font-size: 29px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    border-radius: 100px;\n    position: relative;\n    background: rgb(185 185 185) !important;\n    color: #ffffff !important;\n    :active {\n      background: rgb(62 62 62 / 90%);\n    }\n  }\n  @media (orientation: portrait) and (max-width: 720px),\n    (orientation: landscape) and (max-height: 720px) {\n    padding: 16px 9px;\n    button {\n      font-size: 22px;\n      margin-top: 10px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  z-index: 3;\n  position: fixed;\n  top: 33%;\n  right: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  width: 100vw;\n  height: calc(var(--vh, 1vh) * 100);\n  position: fixed;\n  overflow: hidden;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  canvas {\n    z-index: 1;\n    display: block;\n    position: absolute;\n  }\n  video,\n  canvas {\n    transform: scale(-1, 1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Container = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject());
_c = Container;
var UI_Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject2());
var BtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject3());
var Skeleton = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject4());
var ProductDiv = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject5());
var ProductWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.header(_templateObject6());
var CaptureBG = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject7());
_c2 = CaptureBG;
var IMG = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.img(_templateObject8());
var warmColors = ['springLight', 'springBright', 'fallDepp', 'fallStrong', 'fallMute'];

var Filter = function Filter(_ref) {
  _s();

  var setIsStarted = _ref.setIsStarted,
      productType = _ref.productType,
      colorName = _ref.colorName,
      isAllData = _ref.isAllData;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      isHided = _useState[0],
      setIsHided = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('립'),
      selectedType = _useState2[0],
      setSelectedType = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    colorName: '클래시',
    filterImg: '',
    company: '',
    type: '',
    productImg: '',
    rgb: '',
    href: '',
    order: 0
  }),
      selectedFilter = _useState3[0],
      setSelecetedFilter = _useState3[1];

  var filterTypes = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(_datas_cosmeticData__WEBPACK_IMPORTED_MODULE_7__.cosmeticTypeArr);
  var filterData = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)({});
  var ContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  var SliderRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  var faceMesh = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
  var mindarThree = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)({});
  var isCapture = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(false);
  var Capture_BG_Ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  var prevFilterImg = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(selectedFilter.productImg);

  var getChangedCanvas = function getChangedCanvas(texture, hex) {
    hex = '#' + hex;
    var copyCanvas = document.createElement('canvas');
    copyCanvas.width = 500;
    copyCanvas.height = 500;
    var context = copyCanvas.getContext('2d');
    context.drawImage(texture, 0, 0, copyCanvas.width, copyCanvas.height);
    var tempCanvas = document.createElement('canvas');
    var tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = copyCanvas.width;
    tempCanvas.height = copyCanvas.height;
    tempCtx.drawImage(texture, 0, 0, copyCanvas.width, copyCanvas.height);
    tempCtx.globalCompositeOperation = 'source-atop';
    tempCtx.fillStyle = hex;
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    context.globalCompositeOperation = 'multiply';
    context.drawImage(tempCanvas, 0, 0, copyCanvas.width, copyCanvas.height);
    tempCtx.drawImage(texture, 0, 0, copyCanvas.width, copyCanvas.height);
    tempCtx.fillStyle = hex;
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    context.drawImage(tempCanvas, 0, 0, copyCanvas.width, copyCanvas.height);
    return copyCanvas;
  };

  var handleChangeType = function handleChangeType(type) {
    setSelectedType(type);
    setSelecetedFilter(filterData.current[type][0]);
  };

  var handleChangeFilter = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function (filterData) {
    setSelecetedFilter(filterData);
  }, []);

  var reDrawFilter = function reDrawFilter() {
    new three__WEBPACK_IMPORTED_MODULE_10__.TextureLoader().load("".concat("http://localhost:3000", "/serverImages/").concat(selectedFilter.filterImg), function (texture) {
      faceMesh.current.material.map = productType === 'mask' ? new three__WEBPACK_IMPORTED_MODULE_10__.CanvasTexture(getChangedCanvas(texture.image, selectedFilter.rgb)) : texture;

      if (productType === 'cosmetic') {
        prevFilterImg.current = selectedFilter.filterImg;
        faceMesh.current.material.color.setHex(parseInt(selectedFilter.rgb, 16));
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (!faceMesh.current) {
      mindarThree.current = new _utils_mindar_face_three_prod__WEBPACK_IMPORTED_MODULE_4__.MindARThree({
        container: ContainerRef.current
      });
      var _mindarThree$current = mindarThree.current,
          renderer = _mindarThree$current.renderer,
          scene = _mindarThree$current.scene,
          camera = _mindarThree$current.camera;
      var light = new three__WEBPACK_IMPORTED_MODULE_10__.AmbientLight(selectedFilter.rgb, 1);
      scene.add(light);
      faceMesh.current = mindarThree.current.addFaceMesh();
      faceMesh.current.material.transparent = true;

      var start = /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          var captureCanvas, ctx, video, _ref3, width, height;

          return C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return mindarThree.current.start();

                case 2:
                  captureCanvas = document.createElement('canvas');
                  ctx = captureCanvas.getContext('2d');
                  video = document.querySelector('video');
                  captureCanvas.width = renderer.domElement.width;
                  captureCanvas.height = renderer.domElement.height;
                  _ref3 = captureCanvas, width = _ref3.width, height = _ref3.height;
                  ctx.translate(width / 2, height / 2);
                  ctx.scale(-1, 1);
                  ctx.translate(-width / 2, -height / 2);
                  renderer.setAnimationLoop(function () {
                    renderer.render(scene, camera);

                    if (isCapture.current) {
                      ctx.clearRect(0, 0, width, height);
                      ctx.drawImage(video, 0, 0, width, height);
                      ctx.drawImage(renderer.domElement, 0, 0, width, height);
                      var link = document.createElement('a');
                      link.download = new Date() + '퍼스널컬러.png';
                      link.href = captureCanvas.toDataURL();
                      link.click();
                      link.remove();
                      isCapture.current = false;
                    }
                  });

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function start() {
          return _ref2.apply(this, arguments);
        };
      }();

      scene.add(faceMesh.current);
      start();
      return;
    }

    if (selectedFilter.company === 'NONE') faceMesh.current.material.opacity = 0;else faceMesh.current.material.opacity = 1;
    if (!(productType === 'cosmetic' && prevFilterImg.current === selectedFilter.filterImg)) reDrawFilter();else faceMesh.current.material.color.setHex(parseInt(selectedFilter.rgb, 16));
  }, [selectedFilter]); // useEffect(() => {
  //   if (!faceMesh.current) return;
  //   if (selectedFilter.company === 'NONE') faceMesh.current!.material.opacity = 0;
  //   else faceMesh.current!.material.opacity = 1;
  //   faceMesh.current!.material.color.setHex(parseInt(selectedFilter.rgb.replace('#', ''), 16));
  // }, [selectedFilter]);

  var fetchData = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var _fetchedData$filterDa, _fetchedData$filterDa2, _fetchedData$filterDa4, _fetchedData$filterDa5, fetchedData;

      return C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().get("/datas/".concat(colorName, ".json"));

            case 3:
              fetchedData = _context2.sent.data;
              filterData.current = {
                립: (_fetchedData$filterDa = fetchedData.filterDatas['립']) === null || _fetchedData$filterDa === void 0 ? void 0 : (_fetchedData$filterDa2 = _fetchedData$filterDa.filter(function (data, idx) {
                  var _fetchedData$filterDa3;

                  return ((_fetchedData$filterDa3 = fetchedData.filterDatas['립']) === null || _fetchedData$filterDa3 === void 0 ? void 0 : _fetchedData$filterDa3.findIndex(function (data2) {
                    return data2.rgb === data.rgb;
                  })) === idx;
                })) === null || _fetchedData$filterDa2 === void 0 ? void 0 : _fetchedData$filterDa2.sort(function (a, b) {
                  return a.order - b.order;
                }),
                블러셔: (_fetchedData$filterDa4 = fetchedData.filterDatas['블러셔']) === null || _fetchedData$filterDa4 === void 0 ? void 0 : (_fetchedData$filterDa5 = _fetchedData$filterDa4.filter(function (data, idx) {
                  var _fetchedData$filterDa6;

                  return ((_fetchedData$filterDa6 = fetchedData.filterDatas['블러셔']) === null || _fetchedData$filterDa6 === void 0 ? void 0 : _fetchedData$filterDa6.findIndex(function (data2) {
                    return data2.rgb === data.rgb;
                  })) === idx;
                })) === null || _fetchedData$filterDa5 === void 0 ? void 0 : _fetchedData$filterDa5.sort(function (a, b) {
                  return a.order - b.order;
                })
              };
              filterTypes.current = fetchedData.filterTypes.sort();
              setSelecetedFilter(filterData.current[filterTypes.current[0]][0]);
              setSelectedType(fetchedData.filterTypes[0]);
              _context2.next = 14;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              alert('에러가 발생했습니다. 네트워크를 확인해보시고 다시 시도해주세요');

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function fetchData() {
      return _ref4.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    fetchData(); // renderer.domElement.parentElement?.insertBefore(canvas, renderer.domElement);

    return function () {
      return mindarThree.current.stop();
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
      ref: ContainerRef,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CaptureBG, {
        ref: Capture_BG_Ref
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 9
      }, _this), selectedFilter.rgb && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterSlider__WEBPACK_IMPORTED_MODULE_6__.default, {
        onExit: function onExit() {
          confirm('가상 메이크업을 종료하시겠습니까?') && setIsStarted(false);
        },
        isAllData: isAllData,
        filterData: filterData.current,
        filterTypes: filterTypes.current,
        SliderRef: SliderRef,
        colorName: colorName,
        selectedFilter: selectedFilter,
        selectedType: selectedType,
        handleChangeFilter: handleChangeFilter,
        handleChangeType: handleChangeType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Filter, "3B+JEXZJvp/yGXuByonepCLUalw=");

_c3 = Filter;
/* harmony default export */ __webpack_exports__["default"] = (Filter);

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "CaptureBG");
$RefreshReg$(_c3, "Filter");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bHRQYWdlL0ZpbHRlci50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiVUlfV3JhcHBlciIsIkJ0bldyYXBwZXIiLCJTa2VsZXRvbiIsIlByb2R1Y3REaXYiLCJQcm9kdWN0V3JhcHBlciIsIkNhcHR1cmVCRyIsIklNRyIsIndhcm1Db2xvcnMiLCJGaWx0ZXIiLCJzZXRJc1N0YXJ0ZWQiLCJwcm9kdWN0VHlwZSIsImNvbG9yTmFtZSIsImlzQWxsRGF0YSIsInVzZVN0YXRlIiwiaXNIaWRlZCIsInNldElzSGlkZWQiLCJzZWxlY3RlZFR5cGUiLCJzZXRTZWxlY3RlZFR5cGUiLCJmaWx0ZXJJbWciLCJjb21wYW55IiwidHlwZSIsInByb2R1Y3RJbWciLCJyZ2IiLCJocmVmIiwib3JkZXIiLCJzZWxlY3RlZEZpbHRlciIsInNldFNlbGVjZXRlZEZpbHRlciIsImZpbHRlclR5cGVzIiwidXNlUmVmIiwiY29zbWV0aWNUeXBlQXJyIiwiZmlsdGVyRGF0YSIsIkNvbnRhaW5lclJlZiIsIlNsaWRlclJlZiIsImZhY2VNZXNoIiwibWluZGFyVGhyZWUiLCJpc0NhcHR1cmUiLCJDYXB0dXJlX0JHX1JlZiIsInByZXZGaWx0ZXJJbWciLCJnZXRDaGFuZ2VkQ2FudmFzIiwidGV4dHVyZSIsImhleCIsImNvcHlDYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwidGVtcENhbnZhcyIsInRlbXBDdHgiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImhhbmRsZUNoYW5nZVR5cGUiLCJjdXJyZW50IiwiaGFuZGxlQ2hhbmdlRmlsdGVyIiwidXNlQ2FsbGJhY2siLCJyZURyYXdGaWx0ZXIiLCJUSFJFRSIsImxvYWQiLCJwcm9jZXNzIiwibWF0ZXJpYWwiLCJtYXAiLCJpbWFnZSIsImNvbG9yIiwic2V0SGV4IiwicGFyc2VJbnQiLCJ1c2VFZmZlY3QiLCJNaW5kQVJUaHJlZSIsImNvbnRhaW5lciIsInJlbmRlcmVyIiwic2NlbmUiLCJjYW1lcmEiLCJsaWdodCIsImFkZCIsImFkZEZhY2VNZXNoIiwidHJhbnNwYXJlbnQiLCJzdGFydCIsImNhcHR1cmVDYW52YXMiLCJjdHgiLCJ2aWRlbyIsInF1ZXJ5U2VsZWN0b3IiLCJkb21FbGVtZW50IiwidHJhbnNsYXRlIiwic2NhbGUiLCJzZXRBbmltYXRpb25Mb29wIiwicmVuZGVyIiwiY2xlYXJSZWN0IiwibGluayIsImRvd25sb2FkIiwiRGF0ZSIsInRvRGF0YVVSTCIsImNsaWNrIiwicmVtb3ZlIiwib3BhY2l0eSIsImZldGNoRGF0YSIsImF4aW9zIiwiZmV0Y2hlZERhdGEiLCJkYXRhIiwi66a9IiwiZmlsdGVyRGF0YXMiLCJmaWx0ZXIiLCJpZHgiLCJmaW5kSW5kZXgiLCJkYXRhMiIsInNvcnQiLCJhIiwiYiIsIuu4lOufrOyFlCIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInN0b3AiLCJjb25maXJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQywwREFBSCxtQkFBZjtLQUFNRCxTO0FBa0JOLElBQU1FLFVBQVUsR0FBR0QsMERBQUgsb0JBQWhCO0FBTUEsSUFBTUUsVUFBVSxHQUFHRiwwREFBSCxvQkFBaEI7QUErQkEsSUFBTUcsUUFBUSxHQUFHSCwwREFBSCxvQkFBZDtBQThDQSxJQUFNSSxVQUFVLEdBQUdKLDBEQUFILG9CQUFoQjtBQXFEQSxJQUFNSyxjQUFjLEdBQUdMLDZEQUFILG9CQUFwQjtBQVdBLElBQU1N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LFdBQVcsQ0FBQ3FCLE9BQVosQ0FBb0IwRCxJQUFwQixFQUFOO0FBQUEsS0FBUDtBQUNELEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLFNBQUQ7QUFBVyxTQUFHLEVBQUVsRixZQUFoQjtBQUFBLDhCQUNFLDhEQUFDLFNBQUQ7QUFBVyxXQUFHLEVBQUVLO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQWlFR1gsY0FBYyxDQUFDSCxHQUFmLGlCQUNDLDhEQUFDLGtEQUFEO0FBQ0UsY0FBTSxFQUFFLGtCQUFNO0FBQ1o0RixpQkFBTyxDQUFDLG9CQUFELENBQVAsSUFBaUN6RyxZQUFZLENBQUMsS0FBRCxDQUE3QztBQUNELFNBSEg7QUFJRSxpQkFBUyxFQUFFRyxTQUpiO0FBS0Usa0JBQVUsRUFBRWtCLFVBQVUsQ0FBQ3lCLE9BTHpCO0FBTUUsbUJBQVcsRUFBRTVCLFdBQVcsQ0FBQzRCLE9BTjNCO0FBT0UsaUJBQVMsRUFBRXZCLFNBUGI7QUFRRSxpQkFBUyxFQUFFckIsU0FSYjtBQVNFLHNCQUFjLEVBQUVjLGNBVGxCO0FBVUUsb0JBQVksRUFBRVQsWUFWaEI7QUFXRSwwQkFBa0IsRUFBRXdDLGtCQVh0QjtBQVlFLHdCQUFnQixFQUFFRjtBQVpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBc0ZELENBbFFEOztHQUFNOUMsTTs7TUFBQUEsTTtBQW9RTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bc2Vhc29uXS4zNzIxMzUxYTU0NjdhZjRhN2IzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWluZEFSVGhyZWUgfSBmcm9tICcuLi8uLi91dGlscy9taW5kYXItZmFjZS10aHJlZS5wcm9kJztcclxuaW1wb3J0IHsgQWlPdXRsaW5lRnVsbHNjcmVlbkV4aXQsIEFpT3V0bGluZUZ1bGxzY3JlZW4sIEFpRmlsbENhbWVyYSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHsgUnhFeGl0IH0gZnJvbSAncmVhY3QtaWNvbnMvcngnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCBGaWx0ZXJTbGlkZXIgZnJvbSAnLi9GaWx0ZXJTbGlkZXInO1xyXG5pbXBvcnQgeyBmZXRjaEZpbHRlclR5cGUsIGZpbHRlclR5cGVzLCBJRmlsdGVyLCBwcm9kdWN0VHlwZXMgfSBmcm9tICcuLi8uLi9kYXRhcy9maWx0ZXJJbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBjb3NtZXRpY1R5cGVBcnIsIGNvc21ldGljVHlwZXMgfSBmcm9tICcuLi8uLi9kYXRhcy9jb3NtZXRpY0RhdGEnO1xyXG5pbXBvcnQgeyBtYXNrVHlwZUFyciwgbWFza1R5cGVzIH0gZnJvbSAnLi4vLi4vZGF0YXMvbWFza0RhdGEnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgY2FudmFzIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgdmlkZW8sXHJcbiAgY2FudmFzIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG4gIH1cclxuYDtcclxuY29uc3QgVUlfV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgei1pbmRleDogMztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzMyU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbmA7XHJcbmNvbnN0IEJ0bldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDIzcHggMTNweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBidXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxODUgMTg1IDE4NSkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICA6YWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDYyIDYyIDYyIC8gOTAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA3MjBweCksXHJcbiAgICAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiA3MjBweCkge1xyXG4gICAgcGFkZGluZzogMTZweCA5cHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2tlbGV0b24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICA+IGRpdjpmaXJzdC1vZi10eXBlIHtcclxuICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkM2QyZDI7XHJcbiAgfVxyXG4gID4gZGl2Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWF4LXdpZHRoOiAyODVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgPiA6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2QzZDJkMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIH1cclxuICAgICAgPiA6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2QzZDJkMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgID4gOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgYmFja2dyb3VuZDogI2QzZDJkMjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3REaXYgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDY4cHg7XHJcbiAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWF4LXdpZHRoOiAyODVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM2YzY7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogMjMuN3B4O1xyXG4gICAgICBmb250LWZhbWlseTogJ1ByZXRlbmRhcmQgVmFyaWFibGUnO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgUHJvZHVjdFdyYXBwZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMztcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIHBhZGRpbmc6IDhweCA1cHg7XHJcbmA7XHJcbmNvbnN0IENhcHR1cmVCRyA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuYDtcclxuY29uc3QgSU1HID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBwcm9wcyB7XHJcbiAgY29sb3JOYW1lOiBzdHJpbmc7XHJcbiAgc2V0SXNTdGFydGVkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XHJcbiAgcHJvZHVjdFR5cGU6IHByb2R1Y3RUeXBlcztcclxuICBpc0FsbERhdGE/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCB3YXJtQ29sb3JzID0gWydzcHJpbmdMaWdodCcsICdzcHJpbmdCcmlnaHQnLCAnZmFsbERlcHAnLCAnZmFsbFN0cm9uZycsICdmYWxsTXV0ZSddO1xyXG5cclxuY29uc3QgRmlsdGVyID0gKHsgc2V0SXNTdGFydGVkLCBwcm9kdWN0VHlwZSwgY29sb3JOYW1lLCBpc0FsbERhdGEgfTogcHJvcHMpID0+IHtcclxuICBjb25zdCBbaXNIaWRlZCwgc2V0SXNIaWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkVHlwZSwgc2V0U2VsZWN0ZWRUeXBlXSA9IHVzZVN0YXRlPGNvc21ldGljVHlwZXMgfCBtYXNrVHlwZXM+KCfrpr0nKTtcclxuICBjb25zdCBbc2VsZWN0ZWRGaWx0ZXIsIHNldFNlbGVjZXRlZEZpbHRlcl0gPSB1c2VTdGF0ZTxJRmlsdGVyPih7XHJcbiAgICBjb2xvck5hbWU6ICftgbTrnpjsi5wnLFxyXG4gICAgZmlsdGVySW1nOiAnJyxcclxuICAgIGNvbXBhbnk6ICcnLFxyXG4gICAgdHlwZTogJycsXHJcbiAgICBwcm9kdWN0SW1nOiAnJyxcclxuICAgIHJnYjogJycsXHJcbiAgICBocmVmOiAnJyxcclxuICAgIG9yZGVyOiAwLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmaWx0ZXJUeXBlcyA9IHVzZVJlZjx0eXBlb2YgY29zbWV0aWNUeXBlQXJyIHwgdHlwZW9mIG1hc2tUeXBlQXJyPihjb3NtZXRpY1R5cGVBcnIpO1xyXG4gIGNvbnN0IGZpbHRlckRhdGEgPSB1c2VSZWY8ZmV0Y2hGaWx0ZXJUeXBlPih7fSk7XHJcbiAgY29uc3QgQ29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBTbGlkZXJSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGZhY2VNZXNoID0gdXNlUmVmPFRIUkVFLk1lc2g8VEhSRUUuQnVmZmVyR2VvbWV0cnksIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPj4oKTtcclxuICBjb25zdCBtaW5kYXJUaHJlZSA9IHVzZVJlZjxNaW5kQVJUaHJlZT4oe30pO1xyXG4gIGNvbnN0IGlzQ2FwdHVyZSA9IHVzZVJlZjxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgQ2FwdHVyZV9CR19SZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHByZXZGaWx0ZXJJbWcgPSB1c2VSZWY8c3RyaW5nPihzZWxlY3RlZEZpbHRlci5wcm9kdWN0SW1nKTtcclxuXHJcbiAgY29uc3QgZ2V0Q2hhbmdlZENhbnZhcyA9ICh0ZXh0dXJlOiBDYW52YXNJbWFnZVNvdXJjZSwgaGV4OiBzdHJpbmcpID0+IHtcclxuICAgIGhleCA9ICcjJyArIGhleDtcclxuICAgIGNvbnN0IGNvcHlDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvcHlDYW52YXMud2lkdGggPSA1MDA7XHJcbiAgICBjb3B5Q2FudmFzLmhlaWdodCA9IDUwMDtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjb3B5Q2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGV4dHVyZSwgMCwgMCwgY29weUNhbnZhcy53aWR0aCwgY29weUNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGNvbnN0IHRlbXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IHRlbXBDdHggPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgdGVtcENhbnZhcy53aWR0aCA9IGNvcHlDYW52YXMud2lkdGg7XHJcbiAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGNvcHlDYW52YXMuaGVpZ2h0O1xyXG5cclxuICAgIHRlbXBDdHguZHJhd0ltYWdlKHRleHR1cmUsIDAsIDAsIGNvcHlDYW52YXMud2lkdGgsIGNvcHlDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICB0ZW1wQ3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2UtYXRvcCc7XHJcbiAgICB0ZW1wQ3R4LmZpbGxTdHlsZSA9IGhleDtcclxuICAgIHRlbXBDdHguZmlsbFJlY3QoMCwgMCwgdGVtcENhbnZhcy53aWR0aCwgdGVtcENhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcclxuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRlbXBDYW52YXMsIDAsIDAsIGNvcHlDYW52YXMud2lkdGgsIGNvcHlDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICB0ZW1wQ3R4LmRyYXdJbWFnZSh0ZXh0dXJlLCAwLCAwLCBjb3B5Q2FudmFzLndpZHRoLCBjb3B5Q2FudmFzLmhlaWdodCk7XHJcbiAgICB0ZW1wQ3R4LmZpbGxTdHlsZSA9IGhleDtcclxuICAgIHRlbXBDdHguZmlsbFJlY3QoMCwgMCwgdGVtcENhbnZhcy53aWR0aCwgdGVtcENhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRlbXBDYW52YXMsIDAsIDAsIGNvcHlDYW52YXMud2lkdGgsIGNvcHlDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gY29weUNhbnZhcztcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUeXBlID0gKHR5cGU6IGZpbHRlclR5cGVzKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFR5cGUodHlwZSk7XHJcbiAgICBzZXRTZWxlY2V0ZWRGaWx0ZXIoZmlsdGVyRGF0YS5jdXJyZW50W3R5cGVdIVswXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRmlsdGVyID0gdXNlQ2FsbGJhY2soKGZpbHRlckRhdGE6IElGaWx0ZXIpID0+IHtcclxuICAgIHNldFNlbGVjZXRlZEZpbHRlcihmaWx0ZXJEYXRhKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJlRHJhd0ZpbHRlciA9ICgpID0+IHtcclxuICAgIG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChcclxuICAgICAgYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vc2VydmVySW1hZ2VzLyR7c2VsZWN0ZWRGaWx0ZXIuZmlsdGVySW1nfWAsXHJcbiAgICAgIHRleHR1cmUgPT4ge1xyXG4gICAgICAgIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLm1hcCA9XHJcbiAgICAgICAgICBwcm9kdWN0VHlwZSA9PT0gJ21hc2snXHJcbiAgICAgICAgICAgID8gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoZ2V0Q2hhbmdlZENhbnZhcyh0ZXh0dXJlLmltYWdlLCBzZWxlY3RlZEZpbHRlci5yZ2IpKVxyXG4gICAgICAgICAgICA6IHRleHR1cmU7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RUeXBlID09PSAnY29zbWV0aWMnKSB7XHJcbiAgICAgICAgICBwcmV2RmlsdGVySW1nLmN1cnJlbnQgPSBzZWxlY3RlZEZpbHRlci5maWx0ZXJJbWc7XHJcbiAgICAgICAgICBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5jb2xvci5zZXRIZXgocGFyc2VJbnQoc2VsZWN0ZWRGaWx0ZXIucmdiLCAxNikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFmYWNlTWVzaC5jdXJyZW50KSB7XHJcbiAgICAgIG1pbmRhclRocmVlLmN1cnJlbnQgPSBuZXcgTWluZEFSVGhyZWUoe1xyXG4gICAgICAgIGNvbnRhaW5lcjogQ29udGFpbmVyUmVmLmN1cnJlbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IHJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhIH0gPSBtaW5kYXJUaHJlZS5jdXJyZW50O1xyXG4gICAgICBjb25zdCBsaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoc2VsZWN0ZWRGaWx0ZXIucmdiLCAxKTtcclxuICAgICAgc2NlbmUuYWRkKGxpZ2h0KTtcclxuICAgICAgZmFjZU1lc2guY3VycmVudCA9IG1pbmRhclRocmVlLmN1cnJlbnQuYWRkRmFjZU1lc2goKTtcclxuICAgICAgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG4gICAgICBjb25zdCBzdGFydCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBtaW5kYXJUaHJlZS5jdXJyZW50LnN0YXJ0KCk7XHJcbiAgICAgICAgY29uc3QgY2FwdHVyZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhcHR1cmVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xyXG4gICAgICAgIGNhcHR1cmVDYW52YXMud2lkdGggPSByZW5kZXJlci5kb21FbGVtZW50LndpZHRoO1xyXG4gICAgICAgIGNhcHR1cmVDYW52YXMuaGVpZ2h0ID0gcmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYXB0dXJlQ2FudmFzITtcclxuICAgICAgICBjdHghLnRyYW5zbGF0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgIGN0eCEuc2NhbGUoLTEsIDEpO1xyXG4gICAgICAgIGN0eCEudHJhbnNsYXRlKC13aWR0aCAvIDIsIC1oZWlnaHQgLyAyKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuc2V0QW5pbWF0aW9uTG9vcCgoKSA9PiB7XHJcbiAgICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgICAgICAgICBpZiAoaXNDYXB0dXJlLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh2aWRlbyEsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHJlbmRlcmVyLmRvbUVsZW1lbnQsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBsaW5rLmRvd25sb2FkID0gbmV3IERhdGUoKSArICftjbzsiqTrhJDsu6zrn6wucG5nJztcclxuICAgICAgICAgICAgbGluay5ocmVmID0gY2FwdHVyZUNhbnZhcyEudG9EYXRhVVJMKCk7XHJcbiAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICAgICAgbGluay5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaXNDYXB0dXJlLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgc2NlbmUuYWRkKGZhY2VNZXNoLmN1cnJlbnQhKTtcclxuICAgICAgc3RhcnQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWxlY3RlZEZpbHRlci5jb21wYW55ID09PSAnTk9ORScpIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxzZSBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5vcGFjaXR5ID0gMTtcclxuXHJcbiAgICBpZiAoIShwcm9kdWN0VHlwZSA9PT0gJ2Nvc21ldGljJyAmJiBwcmV2RmlsdGVySW1nLmN1cnJlbnQgPT09IHNlbGVjdGVkRmlsdGVyLmZpbHRlckltZykpXHJcbiAgICAgIHJlRHJhd0ZpbHRlcigpO1xyXG4gICAgZWxzZSBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5jb2xvci5zZXRIZXgocGFyc2VJbnQoc2VsZWN0ZWRGaWx0ZXIucmdiLCAxNikpO1xyXG4gIH0sIFtzZWxlY3RlZEZpbHRlcl0pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgaWYgKCFmYWNlTWVzaC5jdXJyZW50KSByZXR1cm47XHJcbiAgLy8gICBpZiAoc2VsZWN0ZWRGaWx0ZXIuY29tcGFueSA9PT0gJ05PTkUnKSBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5vcGFjaXR5ID0gMDtcclxuICAvLyAgIGVsc2UgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwub3BhY2l0eSA9IDE7XHJcbiAgLy8gICBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5jb2xvci5zZXRIZXgocGFyc2VJbnQoc2VsZWN0ZWRGaWx0ZXIucmdiLnJlcGxhY2UoJyMnLCAnJyksIDE2KSk7XHJcbiAgLy8gfSwgW3NlbGVjdGVkRmlsdGVyXSk7XHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZmV0Y2hlZERhdGEgPSAoYXdhaXQgYXhpb3MuZ2V0KGAvZGF0YXMvJHtjb2xvck5hbWV9Lmpzb25gKSkuZGF0YTtcclxuICAgICAgZmlsdGVyRGF0YS5jdXJyZW50ID0ge1xyXG4gICAgICAgIOumvTogZmV0Y2hlZERhdGEuZmlsdGVyRGF0YXNbJ+umvSddXHJcbiAgICAgICAgICA/LmZpbHRlcihcclxuICAgICAgICAgICAgKGRhdGE6IHsgcmdiOiBhbnkgfSwgaWR4OiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgZmV0Y2hlZERhdGEuZmlsdGVyRGF0YXNbJ+umvSddPy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAoZGF0YTI6IHsgcmdiOiBhbnkgfSkgPT4gZGF0YTIucmdiID09PSBkYXRhLnJnYixcclxuICAgICAgICAgICAgICApID09PSBpZHgsXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICA/LnNvcnQoKGE6IHsgb3JkZXI6IG51bWJlciB9LCBiOiB7IG9yZGVyOiBudW1iZXIgfSkgPT4gYS5vcmRlciAtIGIub3JkZXIpLFxyXG4gICAgICAgIOu4lOufrOyFlDogZmV0Y2hlZERhdGEuZmlsdGVyRGF0YXNbJ+u4lOufrOyFlCddXHJcbiAgICAgICAgICA/LmZpbHRlcihcclxuICAgICAgICAgICAgKGRhdGE6IHsgcmdiOiBhbnkgfSwgaWR4OiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgZmV0Y2hlZERhdGEuZmlsdGVyRGF0YXNbJ+u4lOufrOyFlCddPy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAoZGF0YTI6IHsgcmdiOiBhbnkgfSkgPT4gZGF0YTIucmdiID09PSBkYXRhLnJnYixcclxuICAgICAgICAgICAgICApID09PSBpZHgsXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICA/LnNvcnQoKGE6IHsgb3JkZXI6IG51bWJlciB9LCBiOiB7IG9yZGVyOiBudW1iZXIgfSkgPT4gYS5vcmRlciAtIGIub3JkZXIpLFxyXG4gICAgICB9O1xyXG4gICAgICBmaWx0ZXJUeXBlcy5jdXJyZW50ID0gZmV0Y2hlZERhdGEuZmlsdGVyVHlwZXMuc29ydCgpO1xyXG4gICAgICBzZXRTZWxlY2V0ZWRGaWx0ZXIoZmlsdGVyRGF0YS5jdXJyZW50W2ZpbHRlclR5cGVzLmN1cnJlbnRbMF1dIVswXSk7XHJcbiAgICAgIHNldFNlbGVjdGVkVHlwZShmZXRjaGVkRGF0YS5maWx0ZXJUeXBlc1swXSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGFsZXJ0KCfsl5Drn6zqsIAg67Cc7IOd7ZaI7Iq164uI64ukLiDrhKTtirjsm4ztgazrpbwg7ZmV7J247ZW067O07Iuc6rOgIOuLpOyLnCDsi5zrj4TtlbTso7zshLjsmpQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgLy8gcmVuZGVyZXIuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50Py5pbnNlcnRCZWZvcmUoY2FudmFzLCByZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIHJldHVybiAoKSA9PiBtaW5kYXJUaHJlZS5jdXJyZW50LnN0b3AoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyIHJlZj17Q29udGFpbmVyUmVmfT5cclxuICAgICAgICA8Q2FwdHVyZUJHIHJlZj17Q2FwdHVyZV9CR19SZWZ9IC8+XHJcbiAgICAgICAgey8qIHtzZWxlY3RlZEZpbHRlci5jb21wYW55ID09PSAnTk9ORScgfHwgKFxyXG4gICAgICAgICAgPFByb2R1Y3RXcmFwcGVyIHJlZj17UHJvZHVjdFJlZn0+XHJcbiAgICAgICAgICAgIHtzZWxlY3RlZEZpbHRlci5ocmVmID8gKFxyXG4gICAgICAgICAgICAgIDxQcm9kdWN0RGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NlbGVjdGVkRmlsdGVyLnByb2R1Y3RJbWd9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz57c2VsZWN0ZWRGaWx0ZXIuY29tcGFueSArICcgJyArIHNlbGVjdGVkRmlsdGVyLnR5cGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2VsZWN0ZWRGaWx0ZXIuY29sb3JOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly9saW5rLmNvdXBhbmcuY29tL2EvJHtzZWxlY3RlZEZpbHRlci5ocmVmfWB9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj7snpDshLjtnojrs7TquLAgeyc+J308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD7igLsg7L+g7YyhIO2MjO2KuOuEiOyKpCDtmZzrj5nsnYQg7Ya17ZW0IOydvOygleyVoeydmCDsiJjsiJjro4zrpbwg7KCc6rO167Cb7J2EIOyImCDsnojsirXri4jri6QuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Qcm9kdWN0RGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1NrZWxldG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Qcm9kdWN0V3JhcHBlcj5cclxuICAgICAgICApfSAqL31cclxuICAgICAgICB7LyogPElNRyBzcmM9e3Byb2Nlc3MuZW52LlBBVEggKyAnL2ltYWdlcy90ZXN0SW1nLmpwZyd9IC8+ICovfVxyXG4gICAgICAgIHsvKiA8VUlfV3JhcHBlcj5cclxuICAgICAgICAgIDxCdG5XcmFwcGVyPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXNDYXB0dXJlLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbSA9IENhcHR1cmVfQkdfUmVmLmN1cnJlbnQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAnLjcnO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAoZWxlbS5zdHlsZS5vcGFjaXR5ID0gJzAnKSwgMjAwKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFpRmlsbENhbWVyYSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wYWNpdHkgPSBpc0hpZGVkID8gJzEnIDogJzAnO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHNlbGVjdGVkRmlsdGVyLmNvbXBhbnkgIT09ICdOT05FJykgUHJvZHVjdFJlZi5jdXJyZW50IS5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgIFNsaWRlclJlZi5jdXJyZW50IS5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgIHNldElzSGlkZWQoIWlzSGlkZWQpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXNIaWRlZCA/IDxBaU91dGxpbmVGdWxsc2NyZWVuRXhpdCAvPiA6IDxBaU91dGxpbmVGdWxsc2NyZWVuIC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbmZpcm0oJ+qwgOyDgSDrqZTsnbTtgazsl4XsnYQg7KKF66OM7ZWY7Iuc6rKg7Iq164uI6rmMPycpICYmIHNldElzU3RhcnRlZChmYWxzZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UnhFeGl0IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9CdG5XcmFwcGVyPlxyXG4gICAgICAgICAgPFV0aWxCdXR0b24gLz5cclxuICAgICAgICA8L1VJX1dyYXBwZXI+ICovfVxyXG4gICAgICAgIHtzZWxlY3RlZEZpbHRlci5yZ2IgJiYgKFxyXG4gICAgICAgICAgPEZpbHRlclNsaWRlclxyXG4gICAgICAgICAgICBvbkV4aXQ9eygpID0+IHtcclxuICAgICAgICAgICAgICBjb25maXJtKCfqsIDsg4Eg66mU7J207YGs7JeF7J2EIOyiheujjO2VmOyLnOqyoOyKteuLiOq5jD8nKSAmJiBzZXRJc1N0YXJ0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpc0FsbERhdGE9e2lzQWxsRGF0YX1cclxuICAgICAgICAgICAgZmlsdGVyRGF0YT17ZmlsdGVyRGF0YS5jdXJyZW50fVxyXG4gICAgICAgICAgICBmaWx0ZXJUeXBlcz17ZmlsdGVyVHlwZXMuY3VycmVudH1cclxuICAgICAgICAgICAgU2xpZGVyUmVmPXtTbGlkZXJSZWZ9XHJcbiAgICAgICAgICAgIGNvbG9yTmFtZT17Y29sb3JOYW1lfVxyXG4gICAgICAgICAgICBzZWxlY3RlZEZpbHRlcj17c2VsZWN0ZWRGaWx0ZXJ9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVHlwZT17c2VsZWN0ZWRUeXBlfVxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2VGaWx0ZXI9e2hhbmRsZUNoYW5nZUZpbHRlcn1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlVHlwZT17aGFuZGxlQ2hhbmdlVHlwZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9