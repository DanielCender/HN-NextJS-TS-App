webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ArticleList.tsx":
/*!************************************!*\
  !*** ./components/ArticleList.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostLink */ "./components/PostLink.tsx");

var _jsxFileName = "/Users/danielcender/Documents/GitHub/next-ts/components/ArticleList.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var ArticleList = function ArticleList(_ref) {
  var articleIDs = _ref.articleIDs;
  var bufferSize = 50; // loads 50 articles at a time

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      currentListIdx = _useState[0],
      setCurrentListIdx = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      articles = _useState2[0],
      setArticles = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      err = _useState3[0],
      setErr = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    articleIDs.slice(currentListIdx, currentListIdx + bufferSize).map(function (id) {
      return fetch("https://hacker-news.firebaseio.com/v0/item/".concat(id, ".json?print=pretty")).then(function (res) {
        return res.json();
      }).then(function (res) {
        return setArticles(function (prev) {
          return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev), [res]);
        });
      })["catch"](function (e) {
        return setErr(e.message);
      });
    });
  }, [currentListIdx]);

  if (err) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, '--- Error Occurred ---');
  }

  if (articles.length === 0) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, '--- Loading ---');
  }

  return __jsx("div", {
    className: "jsx-1989883731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1989883731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, articles.map(function (article) {
    return __jsx(_PostLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      post: article,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    });
  })), __jsx("button", {
    type: "button",
    onClick: function onClick() {
      return setCurrentListIdx(function (prev) {
        return prev + bufferSize;
      });
    },
    className: "jsx-1989883731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1989883731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Load more...")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1989883731",
    __self: this
  }, "h1,a{font-family:'Arial';}ul{padding:0;}li{list-style:none;margin:10px 0;}a{-webkit-text-decoration:none;text-decoration:none;color:blue;}a:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxjZW5kZXIvRG9jdW1lbnRzL0dpdEh1Yi9uZXh0LXRzL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDeUIsQUFJK0IsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZ0IsSUFSaEIsVUFTQSxvQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWxjZW5kZXIvRG9jdW1lbnRzL0dpdEh1Yi9uZXh0LXRzL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQb3N0TGluayBmcm9tICcuL1Bvc3RMaW5rJztcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBBcnRpY2xlTGlzdDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBhcnRpY2xlSURzOiBudW1iZXJbXSB9PiA9ICh7IGFydGljbGVJRHMgfSkgPT4ge1xuICBjb25zdCBidWZmZXJTaXplID0gNTA7IC8vIGxvYWRzIDUwIGFydGljbGVzIGF0IGEgdGltZVxuICBjb25zdCBbY3VycmVudExpc3RJZHgsIHNldEN1cnJlbnRMaXN0SWR4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGU8UG9zdFR5cGVbXT4oW10pO1xuICBjb25zdCBbZXJyLCBzZXRFcnJdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXJ0aWNsZUlEcy5zbGljZShjdXJyZW50TGlzdElkeCwgY3VycmVudExpc3RJZHggKyBidWZmZXJTaXplKS5tYXAoaWQgPT5cbiAgICAgIGZldGNoKGBodHRwczovL2hhY2tlci1uZXdzLmZpcmViYXNlaW8uY29tL3YwL2l0ZW0vJHtpZH0uanNvbj9wcmludD1wcmV0dHlgKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHNldEFydGljbGVzKHByZXYgPT4gWy4uLnByZXYsIHJlc10pKVxuICAgICAgICAuY2F0Y2goZSA9PiBzZXRFcnIoZS5tZXNzYWdlKSlcbiAgICApO1xuICB9LCBbY3VycmVudExpc3RJZHhdKTtcblxuICBpZiAoZXJyKSB7XG4gICAgcmV0dXJuIDxkaXY+eyctLS0gRXJyb3IgT2NjdXJyZWQgLS0tJ308L2Rpdj47XG4gIH1cblxuICBpZiAoYXJ0aWNsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxkaXY+eyctLS0gTG9hZGluZyAtLS0nfTwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge2FydGljbGVzLm1hcChhcnRpY2xlID0+IChcbiAgICAgICAgICA8UG9zdExpbmsgcG9zdD17YXJ0aWNsZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRMaXN0SWR4KHByZXYgPT4gcHJldiArIGJ1ZmZlclNpemUpfT5cbiAgICAgICAgPHA+TG9hZCBtb3JlLi4uPC9wPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBoMSxcbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlTGlzdDtcbiJdfQ== */\n/*@ sourceURL=/Users/danielcender/Documents/GitHub/next-ts/components/ArticleList.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ })

})
//# sourceMappingURL=index.js.d10c3e3701423c53ea50.hot-update.js.map