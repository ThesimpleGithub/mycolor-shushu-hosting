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
    new three__WEBPACK_IMPORTED_MODULE_10__.TextureLoader().load("".concat("http://localhost:3000", "/filterImgs/").concat(selectedFilter.filterImg), function (texture) {
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
          if (confirm('가상 메이크업을 종료하시겠습니까?')) setIsStarted(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bHRQYWdlL0ZpbHRlci50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiVUlfV3JhcHBlciIsIkJ0bldyYXBwZXIiLCJTa2VsZXRvbiIsIlByb2R1Y3REaXYiLCJQcm9kdWN0V3JhcHBlciIsIkNhcHR1cmVCRyIsIklNRyIsIndhcm1Db2xvcnMiLCJGaWx0ZXIiLCJzZXRJc1N0YXJ0ZWQiLCJwcm9kdWN0VHlwZSIsImNvbG9yTmFtZSIsImlzQWxsRGF0YSIsInVzZVN0YXRlIiwiaXNIaWRlZCIsInNldElzSGlkZWQiLCJzZWxlY3RlZFR5cGUiLCJzZXRTZWxlY3RlZFR5cGUiLCJmaWx0ZXJJbWciLCJjb21wYW55IiwidHlwZSIsInByb2R1Y3RJbWciLCJyZ2IiLCJocmVmIiwib3JkZXIiLCJzZWxlY3RlZEZpbHRlciIsInNldFNlbGVjZXRlZEZpbHRlciIsImZpbHRlclR5cGVzIiwidXNlUmVmIiwiY29zbWV0aWNUeXBlQXJyIiwiZmlsdGVyRGF0YSIsIkNvbnRhaW5lclJlZiIsIlNsaWRlclJlZiIsImZhY2VNZXNoIiwibWluZGFyVGhyZWUiLCJpc0NhcHR1cmUiLCJDYXB0dXJlX0JHX1JlZiIsInByZXZGaWx0ZXJJbWciLCJnZXRDaGFuZ2VkQ2FudmFzIiwidGV4dHVyZSIsImhleCIsImNvcHlDYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwidGVtcENhbnZhcyIsInRlbXBDdHgiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImhhbmRsZUNoYW5nZVR5cGUiLCJjdXJyZW50IiwiaGFuZGxlQ2hhbmdlRmlsdGVyIiwidXNlQ2FsbGJhY2siLCJyZURyYXdGaWx0ZXIiLCJUSFJFRSIsImxvYWQiLCJwcm9jZXNzIiwibWF0ZXJpYWwiLCJtYXAiLCJpbWFnZSIsImNvbG9yIiwic2V0SGV4IiwicGFyc2VJbnQiLCJ1c2VFZmZlY3QiLCJNaW5kQVJUaHJlZSIsImNvbnRhaW5lciIsInJlbmRlcmVyIiwic2NlbmUiLCJjYW1lcmEiLCJsaWdodCIsImFkZCIsImFkZEZhY2VNZXNoIiwidHJhbnNwYXJlbnQiLCJzdGFydCIsImNhcHR1cmVDYW52YXMiLCJjdHgiLCJ2aWRlbyIsInF1ZXJ5U2VsZWN0b3IiLCJkb21FbGVtZW50IiwidHJhbnNsYXRlIiwic2NhbGUiLCJzZXRBbmltYXRpb25Mb29wIiwicmVuZGVyIiwiY2xlYXJSZWN0IiwibGluayIsImRvd25sb2FkIiwiRGF0ZSIsInRvRGF0YVVSTCIsImNsaWNrIiwicmVtb3ZlIiwib3BhY2l0eSIsImZldGNoRGF0YSIsImF4aW9zIiwiZmV0Y2hlZERhdGEiLCJkYXRhIiwi66a9IiwiZmlsdGVyRGF0YXMiLCJmaWx0ZXIiLCJpZHgiLCJmaW5kSW5kZXgiLCJkYXRhMiIsInNvcnQiLCJhIiwiYiIsIuu4lOufrOyFlCIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInN0b3AiLCJjb25maXJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQywwREFBSCxtQkFBZjtLQUFNRCxTO0FBa0JOLElBQU1FLFVBQVUsR0FBR0QsMERBQUgsb0JBQWhCO0FBTUEsSUFBTUUsVUFBVSxHQUFHRiwwREFBSCxvQkFBaEI7QUErQkEsSUFBTUcsUUFBUSxHQUFHSCwwREFBSCxvQkFBZDtBQThDQSxJQUFNSSxVQUFVLEdBQUdKLDBEQUFILG9CQUFoQjtBQXFEQSxJQUFNSyxjQUFjLEdBQUdMLDZEQUFILG9CQUFwQjtBQVdBLElBQU1N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LFdBQVcsQ0FBQ3FCLE9BQVosQ0FBb0IwRCxJQUFwQixFQUFOO0FBQUEsS0FBUDtBQUNELEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLFNBQUQ7QUFBVyxTQUFHLEVBQUVsRixZQUFoQjtBQUFBLDhCQUNFLDhEQUFDLFNBQUQ7QUFBVyxXQUFHLEVBQUVLO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQWlFR1gsY0FBYyxDQUFDSCxHQUFmLGlCQUNDLDhEQUFDLGtEQUFEO0FBQ0UsY0FBTSxFQUFFLGtCQUFNO0FBQ1osY0FBSTRGLE9BQU8sQ0FBQyxvQkFBRCxDQUFYLEVBQW1DekcsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNwQyxTQUhIO0FBSUUsaUJBQVMsRUFBRUcsU0FKYjtBQUtFLGtCQUFVLEVBQUVrQixVQUFVLENBQUN5QixPQUx6QjtBQU1FLG1CQUFXLEVBQUU1QixXQUFXLENBQUM0QixPQU4zQjtBQU9FLGlCQUFTLEVBQUV2QixTQVBiO0FBUUUsaUJBQVMsRUFBRXJCLFNBUmI7QUFTRSxzQkFBYyxFQUFFYyxjQVRsQjtBQVVFLG9CQUFZLEVBQUVULFlBVmhCO0FBV0UsMEJBQWtCLEVBQUV3QyxrQkFYdEI7QUFZRSx3QkFBZ0IsRUFBRUY7QUFacEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXNGRCxDQWxRRDs7R0FBTTlDLE07O01BQUFBLE07QUFvUU4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3NlYXNvbl0uZTI0MWRjN2Q5YWYwOGJjZmRiN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1pbmRBUlRocmVlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWluZGFyLWZhY2UtdGhyZWUucHJvZCc7XHJcbmltcG9ydCB7IEFpT3V0bGluZUZ1bGxzY3JlZW5FeGl0LCBBaU91dGxpbmVGdWxsc2NyZWVuLCBBaUZpbGxDYW1lcmEgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCB7IFJ4RXhpdCB9IGZyb20gJ3JlYWN0LWljb25zL3J4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgRmlsdGVyU2xpZGVyIGZyb20gJy4vRmlsdGVyU2xpZGVyJztcclxuaW1wb3J0IHsgZmV0Y2hGaWx0ZXJUeXBlLCBmaWx0ZXJUeXBlcywgSUZpbHRlciwgcHJvZHVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vZGF0YXMvZmlsdGVySW50ZXJmYWNlJztcclxuaW1wb3J0IHsgY29zbWV0aWNUeXBlQXJyLCBjb3NtZXRpY1R5cGVzIH0gZnJvbSAnLi4vLi4vZGF0YXMvY29zbWV0aWNEYXRhJztcclxuaW1wb3J0IHsgbWFza1R5cGVBcnIsIG1hc2tUeXBlcyB9IGZyb20gJy4uLy4uL2RhdGFzL21hc2tEYXRhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAzO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGNhbnZhcyB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIHZpZGVvLFxyXG4gIGNhbnZhcyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFVJX1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHotaW5kZXg6IDM7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMzMlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5jb25zdCBCdG5XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyM3B4IDEzcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgYnV0dG9uOm50aC1jaGlsZCgxKSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg1IDE4NSAxODUpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgOmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYig2MiA2MiA2MiAvIDkwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNzIwcHgpLFxyXG4gICAgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LWhlaWdodDogNzIwcHgpIHtcclxuICAgIHBhZGRpbmc6IDE2cHggOXB4O1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNrZWxldG9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICB3aWR0aDogNjhweDtcclxuICAgIGhlaWdodDogNjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDNkMmQyO1xyXG4gIH1cclxuICA+IGRpdjpsYXN0LW9mLXR5cGUge1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIG1heC13aWR0aDogMjg1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgID4gZGl2OmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgID4gOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkM2QyZDI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICB9XHJcbiAgICAgID4gOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkM2QyZDI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICA+IDpsYXN0LW9mLXR5cGUge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkM2QyZDI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0RGl2ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIG1heC13aWR0aDogMjg1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgZGl2IHtcclxuICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNmM2O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDIzLjdweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdQcmV0ZW5kYXJkIFZhcmlhYmxlJztcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFByb2R1Y3RXcmFwcGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBwYWRkaW5nOiA4cHggNXB4O1xyXG5gO1xyXG5jb25zdCBDYXB0dXJlQkcgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAyO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbmA7XHJcbmNvbnN0IElNRyA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgcHJvcHMge1xyXG4gIGNvbG9yTmFtZTogc3RyaW5nO1xyXG4gIHNldElzU3RhcnRlZDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG4gIHByb2R1Y3RUeXBlOiBwcm9kdWN0VHlwZXM7XHJcbiAgaXNBbGxEYXRhPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3Qgd2FybUNvbG9ycyA9IFsnc3ByaW5nTGlnaHQnLCAnc3ByaW5nQnJpZ2h0JywgJ2ZhbGxEZXBwJywgJ2ZhbGxTdHJvbmcnLCAnZmFsbE11dGUnXTtcclxuXHJcbmNvbnN0IEZpbHRlciA9ICh7IHNldElzU3RhcnRlZCwgcHJvZHVjdFR5cGUsIGNvbG9yTmFtZSwgaXNBbGxEYXRhIH06IHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2lzSGlkZWQsIHNldElzSGlkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFR5cGUsIHNldFNlbGVjdGVkVHlwZV0gPSB1c2VTdGF0ZTxjb3NtZXRpY1R5cGVzIHwgbWFza1R5cGVzPign66a9Jyk7XHJcbiAgY29uc3QgW3NlbGVjdGVkRmlsdGVyLCBzZXRTZWxlY2V0ZWRGaWx0ZXJdID0gdXNlU3RhdGU8SUZpbHRlcj4oe1xyXG4gICAgY29sb3JOYW1lOiAn7YG0656Y7IucJyxcclxuICAgIGZpbHRlckltZzogJycsXHJcbiAgICBjb21wYW55OiAnJyxcclxuICAgIHR5cGU6ICcnLFxyXG4gICAgcHJvZHVjdEltZzogJycsXHJcbiAgICByZ2I6ICcnLFxyXG4gICAgaHJlZjogJycsXHJcbiAgICBvcmRlcjogMCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZmlsdGVyVHlwZXMgPSB1c2VSZWY8dHlwZW9mIGNvc21ldGljVHlwZUFyciB8IHR5cGVvZiBtYXNrVHlwZUFycj4oY29zbWV0aWNUeXBlQXJyKTtcclxuICBjb25zdCBmaWx0ZXJEYXRhID0gdXNlUmVmPGZldGNoRmlsdGVyVHlwZT4oe30pO1xyXG4gIGNvbnN0IENvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgU2xpZGVyUmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBmYWNlTWVzaCA9IHVzZVJlZjxUSFJFRS5NZXNoPFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4+KCk7XHJcbiAgY29uc3QgbWluZGFyVGhyZWUgPSB1c2VSZWY8TWluZEFSVGhyZWU+KHt9KTtcclxuICBjb25zdCBpc0NhcHR1cmUgPSB1c2VSZWY8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IENhcHR1cmVfQkdfUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBwcmV2RmlsdGVySW1nID0gdXNlUmVmPHN0cmluZz4oc2VsZWN0ZWRGaWx0ZXIucHJvZHVjdEltZyk7XHJcblxyXG4gIGNvbnN0IGdldENoYW5nZWRDYW52YXMgPSAodGV4dHVyZTogQ2FudmFzSW1hZ2VTb3VyY2UsIGhleDogc3RyaW5nKSA9PiB7XHJcbiAgICBoZXggPSAnIycgKyBoZXg7XHJcbiAgICBjb25zdCBjb3B5Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb3B5Q2FudmFzLndpZHRoID0gNTAwO1xyXG4gICAgY29weUNhbnZhcy5oZWlnaHQgPSA1MDA7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gY29weUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRleHR1cmUsIDAsIDAsIGNvcHlDYW52YXMud2lkdGgsIGNvcHlDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBjb25zdCB0ZW1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb25zdCB0ZW1wQ3R4ID0gdGVtcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHRlbXBDYW52YXMud2lkdGggPSBjb3B5Q2FudmFzLndpZHRoO1xyXG4gICAgdGVtcENhbnZhcy5oZWlnaHQgPSBjb3B5Q2FudmFzLmhlaWdodDtcclxuXHJcbiAgICB0ZW1wQ3R4LmRyYXdJbWFnZSh0ZXh0dXJlLCAwLCAwLCBjb3B5Q2FudmFzLndpZHRoLCBjb3B5Q2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgdGVtcEN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLWF0b3AnO1xyXG4gICAgdGVtcEN0eC5maWxsU3R5bGUgPSBoZXg7XHJcbiAgICB0ZW1wQ3R4LmZpbGxSZWN0KDAsIDAsIHRlbXBDYW52YXMud2lkdGgsIHRlbXBDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XHJcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0ZW1wQ2FudmFzLCAwLCAwLCBjb3B5Q2FudmFzLndpZHRoLCBjb3B5Q2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgdGVtcEN0eC5kcmF3SW1hZ2UodGV4dHVyZSwgMCwgMCwgY29weUNhbnZhcy53aWR0aCwgY29weUNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGVtcEN0eC5maWxsU3R5bGUgPSBoZXg7XHJcbiAgICB0ZW1wQ3R4LmZpbGxSZWN0KDAsIDAsIHRlbXBDYW52YXMud2lkdGgsIHRlbXBDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0ZW1wQ2FudmFzLCAwLCAwLCBjb3B5Q2FudmFzLndpZHRoLCBjb3B5Q2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgcmV0dXJuIGNvcHlDYW52YXM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVHlwZSA9ICh0eXBlOiBmaWx0ZXJUeXBlcykgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRUeXBlKHR5cGUpO1xyXG4gICAgc2V0U2VsZWNldGVkRmlsdGVyKGZpbHRlckRhdGEuY3VycmVudFt0eXBlXSFbMF0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUZpbHRlciA9IHVzZUNhbGxiYWNrKChmaWx0ZXJEYXRhOiBJRmlsdGVyKSA9PiB7XHJcbiAgICBzZXRTZWxlY2V0ZWRGaWx0ZXIoZmlsdGVyRGF0YSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCByZURyYXdGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoXHJcbiAgICAgIGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9L2ZpbHRlckltZ3MvJHtzZWxlY3RlZEZpbHRlci5maWx0ZXJJbWd9YCxcclxuICAgICAgdGV4dHVyZSA9PiB7XHJcbiAgICAgICAgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwubWFwID1cclxuICAgICAgICAgIHByb2R1Y3RUeXBlID09PSAnbWFzaydcclxuICAgICAgICAgICAgPyBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShnZXRDaGFuZ2VkQ2FudmFzKHRleHR1cmUuaW1hZ2UsIHNlbGVjdGVkRmlsdGVyLnJnYikpXHJcbiAgICAgICAgICAgIDogdGV4dHVyZTtcclxuICAgICAgICBpZiAocHJvZHVjdFR5cGUgPT09ICdjb3NtZXRpYycpIHtcclxuICAgICAgICAgIHByZXZGaWx0ZXJJbWcuY3VycmVudCA9IHNlbGVjdGVkRmlsdGVyLmZpbHRlckltZztcclxuICAgICAgICAgIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLmNvbG9yLnNldEhleChwYXJzZUludChzZWxlY3RlZEZpbHRlci5yZ2IsIDE2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWZhY2VNZXNoLmN1cnJlbnQpIHtcclxuICAgICAgbWluZGFyVGhyZWUuY3VycmVudCA9IG5ldyBNaW5kQVJUaHJlZSh7XHJcbiAgICAgICAgY29udGFpbmVyOiBDb250YWluZXJSZWYuY3VycmVudCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgcmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEgfSA9IG1pbmRhclRocmVlLmN1cnJlbnQ7XHJcbiAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodChzZWxlY3RlZEZpbHRlci5yZ2IsIDEpO1xyXG4gICAgICBzY2VuZS5hZGQobGlnaHQpO1xyXG4gICAgICBmYWNlTWVzaC5jdXJyZW50ID0gbWluZGFyVGhyZWUuY3VycmVudC5hZGRGYWNlTWVzaCgpO1xyXG4gICAgICBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHN0YXJ0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IG1pbmRhclRocmVlLmN1cnJlbnQuc3RhcnQoKTtcclxuICAgICAgICBjb25zdCBjYXB0dXJlQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FwdHVyZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XHJcbiAgICAgICAgY2FwdHVyZUNhbnZhcy53aWR0aCA9IHJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGg7XHJcbiAgICAgICAgY2FwdHVyZUNhbnZhcy5oZWlnaHQgPSByZW5kZXJlci5kb21FbGVtZW50LmhlaWdodDtcclxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhcHR1cmVDYW52YXMhO1xyXG4gICAgICAgIGN0eCEudHJhbnNsYXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgY3R4IS5zY2FsZSgtMSwgMSk7XHJcbiAgICAgICAgY3R4IS50cmFuc2xhdGUoLXdpZHRoIC8gMiwgLWhlaWdodCAvIDIpO1xyXG5cclxuICAgICAgICByZW5kZXJlci5zZXRBbmltYXRpb25Mb29wKCgpID0+IHtcclxuICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICAgICAgICAgIGlmIChpc0NhcHR1cmUuY3VycmVudCkge1xyXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHZpZGVvISwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocmVuZGVyZXIuZG9tRWxlbWVudCwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGxpbmsuZG93bmxvYWQgPSBuZXcgRGF0ZSgpICsgJ+2NvOyKpOuEkOy7rOufrC5wbmcnO1xyXG4gICAgICAgICAgICBsaW5rLmhyZWYgPSBjYXB0dXJlQ2FudmFzIS50b0RhdGFVUkwoKTtcclxuICAgICAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgICAgICBsaW5rLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBpc0NhcHR1cmUuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBzY2VuZS5hZGQoZmFjZU1lc2guY3VycmVudCEpO1xyXG4gICAgICBzdGFydCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkRmlsdGVyLmNvbXBhbnkgPT09ICdOT05FJykgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwub3BhY2l0eSA9IDA7XHJcbiAgICBlbHNlIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLm9wYWNpdHkgPSAxO1xyXG5cclxuICAgIGlmICghKHByb2R1Y3RUeXBlID09PSAnY29zbWV0aWMnICYmIHByZXZGaWx0ZXJJbWcuY3VycmVudCA9PT0gc2VsZWN0ZWRGaWx0ZXIuZmlsdGVySW1nKSlcclxuICAgICAgcmVEcmF3RmlsdGVyKCk7XHJcbiAgICBlbHNlIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLmNvbG9yLnNldEhleChwYXJzZUludChzZWxlY3RlZEZpbHRlci5yZ2IsIDE2KSk7XHJcbiAgfSwgW3NlbGVjdGVkRmlsdGVyXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAoIWZhY2VNZXNoLmN1cnJlbnQpIHJldHVybjtcclxuICAvLyAgIGlmIChzZWxlY3RlZEZpbHRlci5jb21wYW55ID09PSAnTk9ORScpIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLm9wYWNpdHkgPSAwO1xyXG4gIC8vICAgZWxzZSBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5vcGFjaXR5ID0gMTtcclxuICAvLyAgIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLmNvbG9yLnNldEhleChwYXJzZUludChzZWxlY3RlZEZpbHRlci5yZ2IucmVwbGFjZSgnIycsICcnKSwgMTYpKTtcclxuICAvLyB9LCBbc2VsZWN0ZWRGaWx0ZXJdKTtcclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBmZXRjaGVkRGF0YSA9IChhd2FpdCBheGlvcy5nZXQoYC9kYXRhcy8ke2NvbG9yTmFtZX0uanNvbmApKS5kYXRhO1xyXG4gICAgICBmaWx0ZXJEYXRhLmN1cnJlbnQgPSB7XHJcbiAgICAgICAg66a9OiBmZXRjaGVkRGF0YS5maWx0ZXJEYXRhc1sn66a9J11cclxuICAgICAgICAgID8uZmlsdGVyKFxyXG4gICAgICAgICAgICAoZGF0YTogeyByZ2I6IGFueSB9LCBpZHg6IGFueSkgPT5cclxuICAgICAgICAgICAgICBmZXRjaGVkRGF0YS5maWx0ZXJEYXRhc1sn66a9J10/LmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgIChkYXRhMjogeyByZ2I6IGFueSB9KSA9PiBkYXRhMi5yZ2IgPT09IGRhdGEucmdiLFxyXG4gICAgICAgICAgICAgICkgPT09IGlkeCxcclxuICAgICAgICAgIClcclxuICAgICAgICAgID8uc29ydCgoYTogeyBvcmRlcjogbnVtYmVyIH0sIGI6IHsgb3JkZXI6IG51bWJlciB9KSA9PiBhLm9yZGVyIC0gYi5vcmRlciksXHJcbiAgICAgICAg67iU65+s7IWUOiBmZXRjaGVkRGF0YS5maWx0ZXJEYXRhc1sn67iU65+s7IWUJ11cclxuICAgICAgICAgID8uZmlsdGVyKFxyXG4gICAgICAgICAgICAoZGF0YTogeyByZ2I6IGFueSB9LCBpZHg6IGFueSkgPT5cclxuICAgICAgICAgICAgICBmZXRjaGVkRGF0YS5maWx0ZXJEYXRhc1sn67iU65+s7IWUJ10/LmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgIChkYXRhMjogeyByZ2I6IGFueSB9KSA9PiBkYXRhMi5yZ2IgPT09IGRhdGEucmdiLFxyXG4gICAgICAgICAgICAgICkgPT09IGlkeCxcclxuICAgICAgICAgIClcclxuICAgICAgICAgID8uc29ydCgoYTogeyBvcmRlcjogbnVtYmVyIH0sIGI6IHsgb3JkZXI6IG51bWJlciB9KSA9PiBhLm9yZGVyIC0gYi5vcmRlciksXHJcbiAgICAgIH07XHJcbiAgICAgIGZpbHRlclR5cGVzLmN1cnJlbnQgPSBmZXRjaGVkRGF0YS5maWx0ZXJUeXBlcy5zb3J0KCk7XHJcbiAgICAgIHNldFNlbGVjZXRlZEZpbHRlcihmaWx0ZXJEYXRhLmN1cnJlbnRbZmlsdGVyVHlwZXMuY3VycmVudFswXV0hWzBdKTtcclxuICAgICAgc2V0U2VsZWN0ZWRUeXBlKGZldGNoZWREYXRhLmZpbHRlclR5cGVzWzBdKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgYWxlcnQoJ+yXkOufrOqwgCDrsJzsg53tlojsirXri4jri6QuIOuEpO2KuOybjO2BrOulvCDtmZXsnbjtlbTrs7Tsi5zqs6Ag64uk7IucIOyLnOuPhO2VtOyjvOyEuOyalCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaERhdGEoKTtcclxuXHJcbiAgICAvLyByZW5kZXJlci5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ/Lmluc2VydEJlZm9yZShjYW52YXMsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgcmV0dXJuICgpID0+IG1pbmRhclRocmVlLmN1cnJlbnQuc3RvcCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXIgcmVmPXtDb250YWluZXJSZWZ9PlxyXG4gICAgICAgIDxDYXB0dXJlQkcgcmVmPXtDYXB0dXJlX0JHX1JlZn0gLz5cclxuICAgICAgICB7Lyoge3NlbGVjdGVkRmlsdGVyLmNvbXBhbnkgPT09ICdOT05FJyB8fCAoXHJcbiAgICAgICAgICA8UHJvZHVjdFdyYXBwZXIgcmVmPXtQcm9kdWN0UmVmfT5cclxuICAgICAgICAgICAge3NlbGVjdGVkRmlsdGVyLmhyZWYgPyAoXHJcbiAgICAgICAgICAgICAgPFByb2R1Y3REaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2VsZWN0ZWRGaWx0ZXIucHJvZHVjdEltZ30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGgzPntzZWxlY3RlZEZpbHRlci5jb21wYW55ICsgJyAnICsgc2VsZWN0ZWRGaWx0ZXIudHlwZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntzZWxlY3RlZEZpbHRlci5jb2xvck5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL2xpbmsuY291cGFuZy5jb20vYS8ke3NlbGVjdGVkRmlsdGVyLmhyZWZ9YH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPuyekOyEuO2eiOuztOq4sCB7Jz4nfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwPuKAuyDsv6DtjKEg7YyM7Yq464SI7IqkIO2ZnOuPmeydhCDthrXtlbQg7J287KCV7JWh7J2YIOyImOyImOujjOulvCDsoJzqs7XrsJvsnYQg7IiYIOyeiOyKteuLiOuLpC48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1Byb2R1Y3REaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU2tlbGV0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L1Byb2R1Y3RXcmFwcGVyPlxyXG4gICAgICAgICl9ICovfVxyXG4gICAgICAgIHsvKiA8SU1HIHNyYz17cHJvY2Vzcy5lbnYuUEFUSCArICcvaW1hZ2VzL3Rlc3RJbWcuanBnJ30gLz4gKi99XHJcbiAgICAgICAgey8qIDxVSV9XcmFwcGVyPlxyXG4gICAgICAgICAgPEJ0bldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpc0NhcHR1cmUuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtID0gQ2FwdHVyZV9CR19SZWYuY3VycmVudCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcuNyc7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IChlbGVtLnN0eWxlLm9wYWNpdHkgPSAnMCcpLCAyMDApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QWlGaWxsQ2FtZXJhIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BhY2l0eSA9IGlzSGlkZWQgPyAnMScgOiAnMCc7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoc2VsZWN0ZWRGaWx0ZXIuY29tcGFueSAhPT0gJ05PTkUnKSBQcm9kdWN0UmVmLmN1cnJlbnQhLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgU2xpZGVyUmVmLmN1cnJlbnQhLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgc2V0SXNIaWRlZCghaXNIaWRlZCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0hpZGVkID8gPEFpT3V0bGluZUZ1bGxzY3JlZW5FeGl0IC8+IDogPEFpT3V0bGluZUZ1bGxzY3JlZW4gLz59XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uZmlybSgn6rCA7IOBIOuplOydtO2BrOyXheydhCDsooXro4ztlZjsi5zqsqDsirXri4jquYw/JykgJiYgc2V0SXNTdGFydGVkKGZhbHNlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxSeEV4aXQgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0J0bldyYXBwZXI+XHJcbiAgICAgICAgICA8VXRpbEJ1dHRvbiAvPlxyXG4gICAgICAgIDwvVUlfV3JhcHBlcj4gKi99XHJcbiAgICAgICAge3NlbGVjdGVkRmlsdGVyLnJnYiAmJiAoXHJcbiAgICAgICAgICA8RmlsdGVyU2xpZGVyXHJcbiAgICAgICAgICAgIG9uRXhpdD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChjb25maXJtKCfqsIDsg4Eg66mU7J207YGs7JeF7J2EIOyiheujjO2VmOyLnOqyoOyKteuLiOq5jD8nKSkgc2V0SXNTdGFydGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaXNBbGxEYXRhPXtpc0FsbERhdGF9XHJcbiAgICAgICAgICAgIGZpbHRlckRhdGE9e2ZpbHRlckRhdGEuY3VycmVudH1cclxuICAgICAgICAgICAgZmlsdGVyVHlwZXM9e2ZpbHRlclR5cGVzLmN1cnJlbnR9XHJcbiAgICAgICAgICAgIFNsaWRlclJlZj17U2xpZGVyUmVmfVxyXG4gICAgICAgICAgICBjb2xvck5hbWU9e2NvbG9yTmFtZX1cclxuICAgICAgICAgICAgc2VsZWN0ZWRGaWx0ZXI9e3NlbGVjdGVkRmlsdGVyfVxyXG4gICAgICAgICAgICBzZWxlY3RlZFR5cGU9e3NlbGVjdGVkVHlwZX1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlRmlsdGVyPXtoYW5kbGVDaGFuZ2VGaWx0ZXJ9XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZVR5cGU9e2hhbmRsZUNoYW5nZVR5cGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==