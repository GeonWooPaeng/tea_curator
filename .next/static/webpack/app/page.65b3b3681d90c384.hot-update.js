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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TextToSpeech: function() { return /* binding */ TextToSpeech; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ TextToSpeech auto */ \nvar _s = $RefreshSig$();\n\nconst TextToSpeech = ()=>{\n    _s();\n    const [userText, setUserText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const synth =  true ? window.speechSynthesis : 0;\n    const voices = synth === null || synth === void 0 ? void 0 : synth.getVoices();\n    console.log(\">>>\", \"object\", synth, voices);\n    const handleUserText = (e)=>{\n        e.preventDefault();\n        console.log(\"e\", e);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relatice top-0 z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleUserText,\n            className: \"absolute top-[800px] left-[30px] space-x-2 pt-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: userText,\n                    onChange: (e)=>setUserText(e.target.value),\n                    className: \"bg-transparent w-[510px] border border-[#b00c3f]/80 outline-none rounded-lg placeholder:text-[#b00c3f] p-2 text-[#b00c3f]\",\n                    type: \"text\",\n                    placeholder: \"What do you want to know human...\"\n                }, void 0, false, {\n                    fileName: \"/Users/geonwoopaeng/Dev/tea_curator/src/app/components/TextToSpeech.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"text-[#b00c3f] p-2 border-[#b00c3f] rounded-lg disabled:text-blue-100 disabled:cursor-not-allowed disabled:bg-gray-500 hover:scale-110 hover:text-black hover:bg-[#b00c3f] duration-300 transition-all\",\n                    children: \"Ask\"\n                }, void 0, false, {\n                    fileName: \"/Users/geonwoopaeng/Dev/tea_curator/src/app/components/TextToSpeech.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/geonwoopaeng/Dev/tea_curator/src/app/components/TextToSpeech.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/geonwoopaeng/Dev/tea_curator/src/app/components/TextToSpeech.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TextToSpeech, \"Cb94gpQl9100uWPApAyJBeM6ZHo=\");\n_c = TextToSpeech;\nvar _c;\n$RefreshReg$(_c, \"TextToSpeech\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UZXh0VG9TcGVlY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtRDtBQUU1QyxNQUFNRSxlQUFlOztJQUMxQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1NLFFBQVEsS0FBa0IsR0FBY0MsT0FBT0MsZUFBZSxHQUFHLENBQUk7SUFDM0UsTUFBTUMsU0FBU0gsa0JBQUFBLDRCQUFBQSxNQUFPSSxTQUFTO0lBQy9CQyxRQUFRQyxHQUFHLENBQUMsT0FBTyxVQUFlTixPQUFPRztJQUV6QyxNQUFNSSxpQkFBaUIsQ0FBQ0M7UUFDdEJBLEVBQUVDLGNBQWM7UUFDaEJKLFFBQVFDLEdBQUcsQ0FBQyxLQUFLRTtJQUNuQjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUNDQyxVQUFVTjtZQUNWSSxXQUFVOzs4QkFFViw4REFBQ0c7b0JBQ0NDLE9BQU9uQjtvQkFDUG9CLFVBQVUsQ0FBQ1IsSUFBTVgsWUFBWVcsRUFBRVMsTUFBTSxDQUFDRixLQUFLO29CQUMzQ0osV0FBVTtvQkFFVk8sTUFBSztvQkFDTEMsYUFBWTs7Ozs7OzhCQUVkLDhEQUFDQztvQkFDQ1QsV0FBVTs4QkFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVCxFQUFFO0dBcENXaEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1RleHRUb1NwZWVjaC50c3g/YWVkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFRleHRUb1NwZWVjaCA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJUZXh0LCBzZXRVc2VyVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc3ludGggPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5zcGVlY2hTeW50aGVzaXMgOiBudWxsO1xuICBjb25zdCB2b2ljZXMgPSBzeW50aD8uZ2V0Vm9pY2VzKCk7XG4gIGNvbnNvbGUubG9nKCc+Pj4nLCB0eXBlb2Ygd2luZG93LCBzeW50aCwgdm9pY2VzKTtcblxuICBjb25zdCBoYW5kbGVVc2VyVGV4dCA9IChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnZScsIGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aWNlIHRvcC0wIHotNTAnPlxuICAgICAgPGZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVVzZXJUZXh0fVxuICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC1bODAwcHhdIGxlZnQtWzMwcHhdIHNwYWNlLXgtMiBwdC0yJ1xuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17dXNlclRleHR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyVGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPSdiZy10cmFuc3BhcmVudCB3LVs1MTBweF0gYm9yZGVyIGJvcmRlci1bI2IwMGMzZl0vODAgb3V0bGluZS1ub25lIHJvdW5kZWQtbGcgcGxhY2Vob2xkZXI6dGV4dC1bI2IwMGMzZl1cbiAgICAgICAgICBwLTIgdGV4dC1bI2IwMGMzZl0nXG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nV2hhdCBkbyB5b3Ugd2FudCB0byBrbm93IGh1bWFuLi4uJ1xuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LVsjYjAwYzNmXSBwLTIgYm9yZGVyLVsjYjAwYzNmXSByb3VuZGVkLWxnIGRpc2FibGVkOnRleHQtYmx1ZS0xMDAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOmJnLWdyYXktNTAwXG4gICAgICAgIGhvdmVyOnNjYWxlLTExMCBob3Zlcjp0ZXh0LWJsYWNrIGhvdmVyOmJnLVsjYjAwYzNmXSBkdXJhdGlvbi0zMDAgdHJhbnNpdGlvbi1hbGwnXG4gICAgICAgID5cbiAgICAgICAgICBBc2tcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUZXh0VG9TcGVlY2giLCJ1c2VyVGV4dCIsInNldFVzZXJUZXh0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic3ludGgiLCJ3aW5kb3ciLCJzcGVlY2hTeW50aGVzaXMiLCJ2b2ljZXMiLCJnZXRWb2ljZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlVXNlclRleHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TextToSpeech.tsx\n"));

/***/ })

});