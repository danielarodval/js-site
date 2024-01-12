"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/grid-item.js":
/*!*********************************!*\
  !*** ./components/grid-item.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GridItem: function() { return /* binding */ GridItem; },\n/* harmony export */   GridItemStyle: function() { return /* binding */ GridItemStyle; },\n/* harmony export */   WorkGridItem: function() { return /* binding */ WorkGridItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst GridItem = (param)=>{\n    let { children, href, title, thumbnail } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        w: \"100%\",\n        align: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.LinkBox, {\n            cursor: \"pointer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: thumbnail,\n                    alt: title,\n                    className: \"grid-item-thumbnail\",\n                    placeholder: \"blur\",\n                    loading: \"lazy\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\danma\\\\Documents\\\\GitHub\\\\js-site\\\\components\\\\grid-item.js\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.LinkOverlay, {\n                    href: href,\n                    target: \"_blank\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        mt: 2,\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\danma\\\\Documents\\\\GitHub\\\\js-site\\\\components\\\\grid-item.js\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\danma\\\\Documents\\\\GitHub\\\\js-site\\\\components\\\\grid-item.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    fontSize: 14,\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\danma\\\\Documents\\\\GitHub\\\\js-site\\\\components\\\\grid-item.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\danma\\\\Documents\\\\GitHub\\\\js-site\\\\components\\\\grid-item.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\danma\\\\Documents\\\\GitHub\\\\js-site\\\\components\\\\grid-item.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GridItem;\nconst WorkGridItem = (param)=>{\n    let { children, title, thumbnail, href } = param;\n    _s();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        w: \"100%\",\n        align: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.LinkBox, {\n            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link,\n            href: href,\n            scroll: false,\n            cursor: \"pointer\",\n            bg: undefined,\n            color: useColorModeValue(\"gray200\", \"whiteAlpha.900\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: thumbnail,\n                    alt: title,\n                    className: \"grid-item-thumbnail\",\n                    placeholder: \"blur\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\danma\\\\Documents\\\\GitHub\\\\js-site\\\\components\\\\grid-item.js\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.LinkOverlay, {\n                    as: \"div\",\n                    href: href,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        mt: 2,\n                        fontSize: 20,\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\danma\\\\Documents\\\\GitHub\\\\js-site\\\\components\\\\grid-item.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\danma\\\\Documents\\\\GitHub\\\\js-site\\\\components\\\\grid-item.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    fontSize: 14,\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\danma\\\\Documents\\\\GitHub\\\\js-site\\\\components\\\\grid-item.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\danma\\\\Documents\\\\GitHub\\\\js-site\\\\components\\\\grid-item.js\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\danma\\\\Documents\\\\GitHub\\\\js-site\\\\components\\\\grid-item.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WorkGridItem, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", true);\n_c1 = WorkGridItem;\nconst GridItemStyle = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.Global, {\n        styles: \"\\n        .grid-item-thumbnail {\\n            border-radius: 12px;\\n        }\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\danma\\\\Documents\\\\GitHub\\\\js-site\\\\components\\\\grid-item.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n_c2 = GridItemStyle;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GridItem\");\n$RefreshReg$(_c1, \"WorkGridItem\");\n$RefreshReg$(_c2, \"GridItemStyle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dyaWQtaXRlbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUMwQztBQUNqQztBQUVoQyxNQUFNTyxXQUFXO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFO3lCQUN6RCw4REFBQ1YsaURBQUdBO1FBQUNXLEdBQUU7UUFBT0MsT0FBTTtrQkFDaEIsNEVBQUNWLHFEQUFPQTtZQUFDVyxRQUFPOzs4QkFDWiw4REFBQ2QsbURBQUtBO29CQUFDZSxLQUFLSjtvQkFBV0ssS0FBS047b0JBQU9PLFdBQVU7b0JBQXNCQyxhQUFZO29CQUFPQyxTQUFROzs7Ozs7OEJBQzlGLDhEQUFDZix5REFBV0E7b0JBQUNLLE1BQU1BO29CQUFNVyxRQUFPOzhCQUM1Qiw0RUFBQ2xCLGtEQUFJQTt3QkFBQ21CLElBQUk7a0NBQUlYOzs7Ozs7Ozs7Ozs4QkFFbEIsOERBQUNSLGtEQUFJQTtvQkFBQ29CLFVBQVU7OEJBQUtkOzs7Ozs7Ozs7Ozs7Ozs7OztFQUdoQztLQVZZRDtBQVlOLE1BQU1nQixlQUFlO1FBQUMsRUFBRWYsUUFBUSxFQUFFRSxLQUFLLEVBQUVDLFNBQVMsRUFBRUYsSUFBSSxFQUFFOztJQUFLLHFCQUNsRSw4REFBQ1IsaURBQUdBO1FBQUNXLEdBQUU7UUFBT0MsT0FBTTtrQkFDaEIsNEVBQUNWLHFEQUFPQTtZQUNKcUIsSUFBSW5CLGtEQUFJQTtZQUNSSSxNQUFNQTtZQUNOZ0IsUUFBUTtZQUNSWCxRQUFPO1lBQ1BZLElBQUlDO1lBQ0pDLE9BQU9DLGtCQUFrQixXQUFXOzs4QkFFcEMsOERBQUM3QixtREFBS0E7b0JBQ0ZlLEtBQUtKO29CQUNMSyxLQUFLTjtvQkFDTE8sV0FBVTtvQkFDVkMsYUFBWTs7Ozs7OzhCQUNoQiw4REFBQ2QseURBQVdBO29CQUFDb0IsSUFBRztvQkFBTWYsTUFBTUE7OEJBQ3hCLDRFQUFDUCxrREFBSUE7d0JBQUNtQixJQUFJO3dCQUFHQyxVQUFVO2tDQUNsQlo7Ozs7Ozs7Ozs7OzhCQUdULDhEQUFDUixrREFBSUE7b0JBQUNvQixVQUFVOzhCQUNYZDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakIsRUFBQztHQXpCWWU7TUFBQUE7QUEyQk4sTUFBTU8sZ0JBQWdCLGtCQUN6Qiw4REFBQ3hCLGtEQUFNQTtRQUFDeUIsUUFBUzs7Ozs7a0JBS3BCO01BTllEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ3JpZC1pdGVtLmpzPzhmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IEJveCwgVGV4dCwgTGlua0JveCwgTGlua092ZXJsYXksIExpbmsgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkSXRlbSA9ICh7IGNoaWxkcmVuLCBocmVmLCB0aXRsZSwgdGh1bWJuYWlsIH0pID0+IChcclxuICAgIDxCb3ggdz1cIjEwMCVcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxMaW5rQm94IGN1cnNvcj1cInBvaW50ZXJcIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17dGh1bWJuYWlsfSBhbHQ9e3RpdGxlfSBjbGFzc05hbWU9XCJncmlkLWl0ZW0tdGh1bWJuYWlsXCIgcGxhY2Vob2xkZXI9XCJibHVyXCIgbG9hZGluZz1cImxhenlcIiAvPlxyXG4gICAgICAgICAgICA8TGlua092ZXJsYXkgaHJlZj17aHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBtdD17Mn0+e3RpdGxlfTwvVGV4dD5cclxuICAgICAgICAgICAgPC9MaW5rT3ZlcmxheT5cclxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9ezE0fT57Y2hpbGRyZW59PC9UZXh0PlxyXG4gICAgICAgIDwvTGlua0JveD5cclxuICAgIDwvQm94PlxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgV29ya0dyaWRJdGVtID0gKHsgY2hpbGRyZW4sIHRpdGxlLCB0aHVtYm5haWwsIGhyZWYgfSkgPT4gKFxyXG4gICAgPEJveCB3PVwiMTAwJVwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPExpbmtCb3hcclxuICAgICAgICAgICAgYXM9e0xpbmt9XHJcbiAgICAgICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgICAgIHNjcm9sbD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxyXG4gICAgICAgICAgICBiZz17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkyMDAnLCAnd2hpdGVBbHBoYS45MDAnKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz17dGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgYWx0PXt0aXRsZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZ3JpZC1pdGVtLXRodW1ibmFpbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdibHVyJyAvPlxyXG4gICAgICAgICAgICA8TGlua092ZXJsYXkgYXM9XCJkaXZcIiBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0IG10PXsyfSBmb250U2l6ZT17MjB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9MaW5rT3ZlcmxheT5cclxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9ezE0fT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvTGlua0JveD5cclxuICAgIDwvQm94PlxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgR3JpZEl0ZW1TdHlsZSA9ICgpID0+IChcclxuICAgIDxHbG9iYWwgc3R5bGVzPXtgXHJcbiAgICAgICAgLmdyaWQtaXRlbS10aHVtYm5haWwge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIH1gfVxyXG4gICAgLz5cclxuKSJdLCJuYW1lcyI6WyJJbWFnZSIsIkJveCIsIlRleHQiLCJMaW5rQm94IiwiTGlua092ZXJsYXkiLCJMaW5rIiwiR2xvYmFsIiwiR3JpZEl0ZW0iLCJjaGlsZHJlbiIsImhyZWYiLCJ0aXRsZSIsInRodW1ibmFpbCIsInciLCJhbGlnbiIsImN1cnNvciIsInNyYyIsImFsdCIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwibG9hZGluZyIsInRhcmdldCIsIm10IiwiZm9udFNpemUiLCJXb3JrR3JpZEl0ZW0iLCJhcyIsInNjcm9sbCIsImJnIiwidW5kZWZpbmVkIiwiY29sb3IiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkdyaWRJdGVtU3R5bGUiLCJzdHlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/grid-item.js\n"));

/***/ })

});