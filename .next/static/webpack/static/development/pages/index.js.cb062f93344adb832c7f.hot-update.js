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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/danielcender/Documents/GitHub/next-ts/components/ArticleList.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __jsx("li", {
    key: post.id,
    className: "jsx-1341333550",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(post.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1341333550",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, post.title, post.text && " - Text Embedded")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1341333550",
    __self: this
  }, "li.jsx-1341333550{list-style:none;margin:5px 0;}a.jsx-1341333550{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:'Arial';}a.jsx-1341333550:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxjZW5kZXIvRG9jdW1lbnRzL0dpdEh1Yi9uZXh0LXRzL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUd5QixBQUtLLEFBTVQsWUFDZCxJQVhlLGFBQ2YscUJBSWEsV0FDUyxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2RhbmllbGNlbmRlci9Eb2N1bWVudHMvR2l0SHViL25leHQtdHMvY29tcG9uZW50cy9BcnRpY2xlTGlzdC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBQb3N0TGluazogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBwb3N0OiBQb3N0VHlwZSB9PiA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICA8TGluayBocmVmPScvcC9baWRdJyBhcz17YC9wLyR7cG9zdC5pZH1gfT5cbiAgICAgIDxhPlxuICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAge3Bvc3QudGV4dCAmJiBgIC0gVGV4dCBFbWJlZGRlZGB9XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbik7XG5cbmNvbnN0IEFydGljbGVMaXN0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7IGFydGljbGVJRHM6IG51bWJlcltdIH0+ID0gcHJvcHMgPT4ge1xuICBjb25zdCBidWZmZXJTaXplID0gNTA7IC8vIGxvYWRzIDUwIGFydGljbGVzIGF0IGEgdGltZVxuICBjb25zdCB7IGFydGljbGVJRHMgfSA9IHByb3BzO1xuICBjb25zdCBbY3VycmVudExpc3RJZHgsIHNldEN1cnJlbnRMaXN0SWR4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIC8vYXJ0aWNsZUlEcy5sZW5ndGggPj0gYnVmZmVyU2l6ZSA/IGJ1ZmZlclNpemUgOiBhcnRpY2xlSURzLmxlbmd0aFxuXG4gIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGU8UG9zdFR5cGVbXT4oW10pO1xuICBjb25zdCBbZXJyLCBzZXRFcnJdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gZ2VuZXJpYyBkZWZpbmVzIHRoZSByZXN1bHRpbmcgb2JqZWN0IGZyb20gcmVzb2x2ZWQgcHJvbWlzZVxuICAgIGFydGljbGVJRHMuc2xpY2UoY3VycmVudExpc3RJZHgsIGJ1ZmZlclNpemUpLm1hcChpZCA9PlxuICAgICAgZmV0Y2goYGh0dHBzOi8vaGFja2VyLW5ld3MuZmlyZWJhc2Vpby5jb20vdjAvaXRlbS8ke2lkfS5qc29uP3ByaW50PXByZXR0eWApXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgc2V0QXJ0aWNsZXMocHJldiA9PiB7XG4gICAgICAgICAgICBzZXRDdXJyZW50TGlzdElkeChhcnRpY2xlcy5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIHJldHVybiBbLi4ucHJldiwgcmVzXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGUgPT4gc2V0RXJyKGUubWVzc2FnZSkpXG4gICAgKTtcbiAgfSk7XG5cbiAgaWYgKGVycikge1xuICAgIHJldHVybiA8ZGl2PnsnLS0tIEVycm9yIE9jY3VycmVkIC0tLSd9PC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHVsPlxuICAgICAgICB7YXJ0aWNsZXMubWFwKGFydGljbGUgPT4gKFxuICAgICAgICAgIDxQb3N0TGluayBwb3N0PXthcnRpY2xlfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudExpc3RJZHgoY3VycmVudExpc3RJZHggKyBidWZmZXJTaXplKX0+XG4gICAgICAgIDxwPkxvYWQgbW9yZS4uLjwvcD5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaDEsXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUxpc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/danielcender/Documents/GitHub/next-ts/components/ArticleList.tsx */"));
};

var ArticleList = function ArticleList(props) {
  var bufferSize = 50; // loads 50 articles at a time

  var articleIDs = props.articleIDs;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      currentListIdx = _useState[0],
      setCurrentListIdx = _useState[1]; //articleIDs.length >= bufferSize ? bufferSize : articleIDs.length


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      articles = _useState2[0],
      setArticles = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      err = _useState3[0],
      setErr = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // generic defines the resulting object from resolved promise
    articleIDs.slice(currentListIdx, bufferSize).map(function (id) {
      return fetch("https://hacker-news.firebaseio.com/v0/item/".concat(id, ".json?print=pretty")).then(function (res) {
        return res.json();
      }).then(function (res) {
        console.log(res);
        setArticles(function (prev) {
          setCurrentListIdx(articles.length + 1);
          return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev), [res]);
        });
      })["catch"](function (e) {
        return setErr(e.message);
      });
    });
  });

  if (err) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, '--- Error Occurred ---');
  }

  return __jsx("div", {
    className: "jsx-1989883731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1989883731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, articles.map(function (article) {
    return __jsx(PostLink, {
      post: article,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    });
  })), __jsx("button", {
    type: "button",
    onClick: function onClick() {
      return setCurrentListIdx(currentListIdx + bufferSize);
    },
    className: "jsx-1989883731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1989883731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Load more...")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1989883731",
    __self: this
  }, "h1,a{font-family:'Arial';}ul{padding:0;}li{list-style:none;margin:10px 0;}a{-webkit-text-decoration:none;text-decoration:none;color:blue;}a:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxjZW5kZXIvRG9jdW1lbnRzL0dpdEh1Yi9uZXh0LXRzL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFeUIsQUFJK0IsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZ0IsSUFSaEIsVUFTQSxvQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWxjZW5kZXIvRG9jdW1lbnRzL0dpdEh1Yi9uZXh0LXRzL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgUG9zdExpbms6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHsgcG9zdDogUG9zdFR5cGUgfT4gPSAoeyBwb3N0IH0pID0+IChcbiAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgPExpbmsgaHJlZj0nL3AvW2lkXScgYXM9e2AvcC8ke3Bvc3QuaWR9YH0+XG4gICAgICA8YT5cbiAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgIHtwb3N0LnRleHQgJiYgYCAtIFRleHQgRW1iZWRkZWRgfVxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pO1xuXG5jb25zdCBBcnRpY2xlTGlzdDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBhcnRpY2xlSURzOiBudW1iZXJbXSB9PiA9IHByb3BzID0+IHtcbiAgY29uc3QgYnVmZmVyU2l6ZSA9IDUwOyAvLyBsb2FkcyA1MCBhcnRpY2xlcyBhdCBhIHRpbWVcbiAgY29uc3QgeyBhcnRpY2xlSURzIH0gPSBwcm9wcztcbiAgY29uc3QgW2N1cnJlbnRMaXN0SWR4LCBzZXRDdXJyZW50TGlzdElkeF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICAvL2FydGljbGVJRHMubGVuZ3RoID49IGJ1ZmZlclNpemUgPyBidWZmZXJTaXplIDogYXJ0aWNsZUlEcy5sZW5ndGhcblxuICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlPFBvc3RUeXBlW10+KFtdKTtcbiAgY29uc3QgW2Vyciwgc2V0RXJyXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGdlbmVyaWMgZGVmaW5lcyB0aGUgcmVzdWx0aW5nIG9iamVjdCBmcm9tIHJlc29sdmVkIHByb21pc2VcbiAgICBhcnRpY2xlSURzLnNsaWNlKGN1cnJlbnRMaXN0SWR4LCBidWZmZXJTaXplKS5tYXAoaWQgPT5cbiAgICAgIGZldGNoKGBodHRwczovL2hhY2tlci1uZXdzLmZpcmViYXNlaW8uY29tL3YwL2l0ZW0vJHtpZH0uanNvbj9wcmludD1wcmV0dHlgKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgIHNldEFydGljbGVzKHByZXYgPT4ge1xuICAgICAgICAgICAgc2V0Q3VycmVudExpc3RJZHgoYXJ0aWNsZXMubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnByZXYsIHJlc107XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlID0+IHNldEVycihlLm1lc3NhZ2UpKVxuICAgICk7XG4gIH0pO1xuXG4gIGlmIChlcnIpIHtcbiAgICByZXR1cm4gPGRpdj57Jy0tLSBFcnJvciBPY2N1cnJlZCAtLS0nfTwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge2FydGljbGVzLm1hcChhcnRpY2xlID0+IChcbiAgICAgICAgICA8UG9zdExpbmsgcG9zdD17YXJ0aWNsZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRMaXN0SWR4KGN1cnJlbnRMaXN0SWR4ICsgYnVmZmVyU2l6ZSl9PlxuICAgICAgICA8cD5Mb2FkIG1vcmUuLi48L3A+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGgxLFxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVMaXN0O1xuIl19 */\n/*@ sourceURL=/Users/danielcender/Documents/GitHub/next-ts/components/ArticleList.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ })

})
//# sourceMappingURL=index.js.cb062f93344adb832c7f.hot-update.js.map