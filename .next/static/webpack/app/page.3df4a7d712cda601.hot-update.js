"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/TextToSpeech.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/TextToSpeech.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TextToSpeech: function() { return /* binding */ TextToSpeech; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ TextToSpeech auto */ \nvar _s = $RefreshSig$();\n\nconst TextToSpeech = ()=>{\n    _s();\n    const [userText, setUserText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const synth =  true ? window.speechSynthesis : 0;\n    const voices = synth === null || synth === void 0 ? void 0 : synth.getVoices();\n    const handleUserText = (e)=>{\n        e.preventDefault();\n        console.log(\"e\", e);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relatice top-0 z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleUserText,\n            className: \"absolute top-[800px] left-[30px] space-x-2 pt-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: userText,\n                    onChange: (e)=>setUserText(e.target.value),\n                    className: \"bg-transparent w-[510px] border border-[#b00c3f]/80 outline-none rounded-lg placeholder:text-[#b00c3f] p-2 text-[#b00c3f]\",\n                    type: \"text\",\n                    placeholder: \"What do you want to know human...\"\n                }, void 0, false, {\n                    fileName: \"/Users/geonwoopaeng/Dev/tea_curator/src/app/components/TextToSpeech.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"text-[#b00c3f] p-2 border-[#b00c3f] rounded-lg disabled:text-blue-100 disabled:cursor-not-allowed disabled:bg-gray-500 hover:scale-110 hover:text-black hover:bg-[#b00c3f] duration-300 transition-all\",\n                    children: \"Ask\"\n                }, void 0, false, {\n                    fileName: \"/Users/geonwoopaeng/Dev/tea_curator/src/app/components/TextToSpeech.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/geonwoopaeng/Dev/tea_curator/src/app/components/TextToSpeech.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/geonwoopaeng/Dev/tea_curator/src/app/components/TextToSpeech.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TextToSpeech, \"Cb94gpQl9100uWPApAyJBeM6ZHo=\");\n_c = TextToSpeech;\nvar _c;\n$RefreshReg$(_c, \"TextToSpeech\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UZXh0VG9TcGVlY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtRDtBQUU1QyxNQUFNRSxlQUFlOztJQUMxQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1NLFFBQVEsS0FBa0IsR0FBY0MsT0FBT0MsZUFBZSxHQUFHLENBQUk7SUFDM0UsTUFBTUMsU0FBU0gsa0JBQUFBLDRCQUFBQSxNQUFPSSxTQUFTO0lBRy9CLE1BQU1DLGlCQUFpQixDQUFDQztRQUN0QkEsRUFBRUMsY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDLEtBQUtIO0lBQ25CO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQ0NDLFVBQVVSO1lBQ1ZNLFdBQVU7OzhCQUVWLDhEQUFDRztvQkFDQ0MsT0FBT25CO29CQUNQb0IsVUFBVSxDQUFDVixJQUFNVCxZQUFZUyxFQUFFVyxNQUFNLENBQUNGLEtBQUs7b0JBQzNDSixXQUFVO29CQUVWTyxNQUFLO29CQUNMQyxhQUFZOzs7Ozs7OEJBRWQsOERBQUNDO29CQUNDVCxXQUFVOzhCQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1ULEVBQUU7R0FwQ1doQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGV4dFRvU3BlZWNoLnRzeD9hZWQ3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgVGV4dFRvU3BlZWNoID0gKCkgPT4ge1xuICBjb25zdCBbdXNlclRleHQsIHNldFVzZXJUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzeW50aCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LnNwZWVjaFN5bnRoZXNpcyA6IG51bGw7XG4gIGNvbnN0IHZvaWNlcyA9IHN5bnRoPy5nZXRWb2ljZXMoKTtcblxuICBcbiAgY29uc3QgaGFuZGxlVXNlclRleHQgPSAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJ2UnLCBlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGljZSB0b3AtMCB6LTUwJz5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVVc2VyVGV4dH1cbiAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtWzgwMHB4XSBsZWZ0LVszMHB4XSBzcGFjZS14LTIgcHQtMidcbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e3VzZXJUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlclRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT0nYmctdHJhbnNwYXJlbnQgdy1bNTEwcHhdIGJvcmRlciBib3JkZXItWyNiMDBjM2ZdLzgwIG91dGxpbmUtbm9uZSByb3VuZGVkLWxnIHBsYWNlaG9sZGVyOnRleHQtWyNiMDBjM2ZdXG4gICAgICAgICAgcC0yIHRleHQtWyNiMDBjM2ZdJ1xuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1doYXQgZG8geW91IHdhbnQgdG8ga25vdyBodW1hbi4uLidcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1bI2IwMGMzZl0gcC0yIGJvcmRlci1bI2IwMGMzZl0gcm91bmRlZC1sZyBkaXNhYmxlZDp0ZXh0LWJsdWUtMTAwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpiZy1ncmF5LTUwMFxuICAgICAgICBob3ZlcjpzY2FsZS0xMTAgaG92ZXI6dGV4dC1ibGFjayBob3ZlcjpiZy1bI2IwMGMzZl0gZHVyYXRpb24tMzAwIHRyYW5zaXRpb24tYWxsJ1xuICAgICAgICA+XG4gICAgICAgICAgQXNrXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVGV4dFRvU3BlZWNoIiwidXNlclRleHQiLCJzZXRVc2VyVGV4dCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInN5bnRoIiwid2luZG93Iiwic3BlZWNoU3ludGhlc2lzIiwidm9pY2VzIiwiZ2V0Vm9pY2VzIiwiaGFuZGxlVXNlclRleHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TextToSpeech.tsx\n"));

/***/ })

});