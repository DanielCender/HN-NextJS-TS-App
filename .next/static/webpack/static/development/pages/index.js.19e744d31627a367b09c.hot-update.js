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
    // generic defines the resulting object from resolved promise
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
        lineNumber: 22
      },
      __self: this
    }, '--- Error Occurred ---');
  }

  if (articles.length === 0) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, '--- Loading ---');
  }

  return __jsx("div", {
    className: "jsx-1989883731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1989883731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, articles.map(function (article) {
    return __jsx(_PostLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      post: article,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
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
      lineNumber: 36
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1989883731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Load more...")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1989883731",
    __self: this
  }, "h1,a{font-family:'Arial';}ul{padding:0;}li{list-style:none;margin:10px 0;}a{-webkit-text-decoration:none;text-decoration:none;color:blue;}a:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxjZW5kZXIvRG9jdW1lbnRzL0dpdEh1Yi9uZXh0LXRzL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDeUIsQUFJK0IsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZ0IsSUFSaEIsVUFTQSxvQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWxjZW5kZXIvRG9jdW1lbnRzL0dpdEh1Yi9uZXh0LXRzL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQb3N0TGluayBmcm9tICcuL1Bvc3RMaW5rJztcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBBcnRpY2xlTGlzdDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBhcnRpY2xlSURzOiBudW1iZXJbXSB9PiA9ICh7IGFydGljbGVJRHMgfSkgPT4ge1xuICBjb25zdCBidWZmZXJTaXplID0gNTA7IC8vIGxvYWRzIDUwIGFydGljbGVzIGF0IGEgdGltZVxuICBjb25zdCBbY3VycmVudExpc3RJZHgsIHNldEN1cnJlbnRMaXN0SWR4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGU8UG9zdFR5cGVbXT4oW10pO1xuICBjb25zdCBbZXJyLCBzZXRFcnJdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gZ2VuZXJpYyBkZWZpbmVzIHRoZSByZXN1bHRpbmcgb2JqZWN0IGZyb20gcmVzb2x2ZWQgcHJvbWlzZVxuICAgIGFydGljbGVJRHMuc2xpY2UoY3VycmVudExpc3RJZHgsIGN1cnJlbnRMaXN0SWR4ICsgYnVmZmVyU2l6ZSkubWFwKGlkID0+XG4gICAgICBmZXRjaChgaHR0cHM6Ly9oYWNrZXItbmV3cy5maXJlYmFzZWlvLmNvbS92MC9pdGVtLyR7aWR9Lmpzb24/cHJpbnQ9cHJldHR5YClcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlcyA9PiBzZXRBcnRpY2xlcyhwcmV2ID0+IFsuLi5wcmV2LCByZXNdKSlcbiAgICAgICAgLmNhdGNoKGUgPT4gc2V0RXJyKGUubWVzc2FnZSkpXG4gICAgKTtcbiAgfSwgW2N1cnJlbnRMaXN0SWR4XSk7XG5cbiAgaWYgKGVycikge1xuICAgIHJldHVybiA8ZGl2PnsnLS0tIEVycm9yIE9jY3VycmVkIC0tLSd9PC9kaXY+O1xuICB9XG5cbiAgaWYgKGFydGljbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiA8ZGl2PnsnLS0tIExvYWRpbmcgLS0tJ308L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dWw+XG4gICAgICAgIHthcnRpY2xlcy5tYXAoYXJ0aWNsZSA9PiAoXG4gICAgICAgICAgPFBvc3RMaW5rIHBvc3Q9e2FydGljbGV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50TGlzdElkeChwcmV2ID0+IHByZXYgKyBidWZmZXJTaXplKX0+XG4gICAgICAgIDxwPkxvYWQgbW9yZS4uLjwvcD5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaDEsXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUxpc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/danielcender/Documents/GitHub/next-ts/components/ArticleList.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ }),

/***/ "./components/PostLink.tsx":
/*!*********************************!*\
  !*** ./components/PostLink.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danielcender/Documents/GitHub/next-ts/components/PostLink.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __jsx("li", {
    key: post.id,
    className: "jsx-1341333550",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(post.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1341333550",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, post.title, post.text && " - Text Embedded")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1341333550",
    __self: this
  }, "li.jsx-1341333550{list-style:none;margin:5px 0;}a.jsx-1341333550{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:'Arial';}a.jsx-1341333550:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxjZW5kZXIvRG9jdW1lbnRzL0dpdEh1Yi9uZXh0LXRzL2NvbXBvbmVudHMvUG9zdExpbmsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdnQixBQUd5QixBQUtLLEFBTVQsWUFDZCxJQVhlLGFBQ2YscUJBSWEsV0FDUyxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2RhbmllbGNlbmRlci9Eb2N1bWVudHMvR2l0SHViL25leHQtdHMvY29tcG9uZW50cy9Qb3N0TGluay50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgUG9zdFR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IFBvc3RMaW5rOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7IHBvc3Q6IFBvc3RUeXBlIH0+ID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxsaSBrZXk9e3Bvc3QuaWR9PlxuICAgIDxMaW5rIGhyZWY9Jy9wL1tpZF0nIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxuICAgICAgPGE+XG4gICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICB7cG9zdC50ZXh0ICYmIGAgLSBUZXh0IEVtYmVkZGVkYH1cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdExpbms7XG4iXX0= */\n/*@ sourceURL=/Users/danielcender/Documents/GitHub/next-ts/components/PostLink.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (PostLink);

/***/ })

})
//# sourceMappingURL=index.js.19e744d31627a367b09c.hot-update.js.map