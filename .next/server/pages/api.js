module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/constants.ts":
/*!**************************!*\
  !*** ./lib/constants.ts ***!
  \**************************/
/*! exports provided: credentials, endpoints, dbQueries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"credentials\", function() { return credentials; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"endpoints\", function() { return endpoints; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dbQueries\", function() { return dbQueries; });\nconst credentials = {\n  twitter: {\n    apiKey: \"DKBc6y9fnYHFFzxFMVYEBOSsP\",\n    apiSecret: \"UIzGupPB3rDqpROTfCyhS9yL47wsyTOVIKN5K2zQQE5KeUrgrA\",\n    bearerToken: \"AAAAAAAAAAAAAAAAAAAAAItkGwEAAAAA9YdYsZ5r%2BSrR6mBSjzlD8YE%2FUaM%3DStc1by5IFosfpY2T9MlQEwSu1R2skRdp7qiPkc9o9gnWmdeBTs\",\n    accessToken: \"1295088347342352385-w1hMqE7gKjyAtWkVBK4B96RSk5RCRu\",\n    accessTokenSecret: \"B8bxannPE43N2uzcQeUuu4JLJI3TE2KRItRHodAVnvqf6\"\n  }\n};\nconst endpoints = {\n  twitter: {\n    getTweets: \"https://api.twitter.com/2/tweets/search/recent?query=newsweek&tweet.fields=created_at\",\n    replyToTweet: targetTweetId => encodeURI(`https://api.twitter.com/1.1/statuses/update.json?status=Newsweek was bought and turned into a clickbait farm meant to take advantage of the reputable name. It no longer holds the same editorial standards it once did.&in_reply_to_status=${targetTweetId}`)\n  },\n  db: \"https://watch-this-db-1.herokuapp.com/v1/graphql\"\n};\nconst dbQueries = {\n  getPeristentVariablesQuery: JSON.stringify({\n    query: `\n    query MyQuery {\n      newsweek_bot_constants {\n        key\n        value\n      }\n    }\n  `\n  }),\n  setTimeOfLastActionTaken: newTime => JSON.stringify({\n    query: `\n  mutation MyMutation {\n    update_newsweek_bot_constants(\n      where: {}\n      _set: {\n        key: \"TIME_OF_LAST_ACTION_TAKEN\"\n        value: \"${newTime}\"\n      }\n    ) {\n      returning {\n        key\n        value\n      }\n    }\n  }\n`\n  })\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29uc3RhbnRzLnRzPzYzMjUiXSwibmFtZXMiOlsiY3JlZGVudGlhbHMiLCJ0d2l0dGVyIiwiYXBpS2V5IiwiYXBpU2VjcmV0IiwiYmVhcmVyVG9rZW4iLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc1Rva2VuU2VjcmV0IiwiZW5kcG9pbnRzIiwiZ2V0VHdlZXRzIiwicmVwbHlUb1R3ZWV0IiwidGFyZ2V0VHdlZXRJZCIsImVuY29kZVVSSSIsImRiIiwiZGJRdWVyaWVzIiwiZ2V0UGVyaXN0ZW50VmFyaWFibGVzUXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJzZXRUaW1lT2ZMYXN0QWN0aW9uVGFrZW4iLCJuZXdUaW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLFdBQVcsR0FBRztBQUN6QkMsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRSwyQkFERDtBQUVQQyxhQUFTLEVBQUUsb0RBRko7QUFHUEMsZUFBVyxFQUNULHNIQUpLO0FBS1BDLGVBQVcsRUFBRSxvREFMTjtBQU1QQyxxQkFBaUIsRUFBRTtBQU5aO0FBRGdCLENBQXBCO0FBV0EsTUFBTUMsU0FBUyxHQUFHO0FBQ3ZCTixTQUFPLEVBQUU7QUFDUE8sYUFBUyxFQUNQLHVGQUZLO0FBR1BDLGdCQUFZLEVBQUdDLGFBQUQsSUFDWkMsU0FBUyxDQUNOLCtPQUE4T0QsYUFBYyxFQUR0UDtBQUpKLEdBRGM7QUFTdkJFLElBQUUsRUFBRTtBQVRtQixDQUFsQjtBQVlBLE1BQU1DLFNBQVMsR0FBRztBQUN2QkMsNEJBQTBCLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3pDQyxTQUFLLEVBQUc7Ozs7Ozs7O0FBRGlDLEdBQWYsQ0FETDtBQVd2QkMsMEJBQXdCLEVBQUdDLE9BQUQsSUFDeEJKLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2JDLFNBQUssRUFBRzs7Ozs7O2tCQU1JRSxPQUFROzs7Ozs7Ozs7O0FBUFAsR0FBZjtBQVpxQixDQUFsQiIsImZpbGUiOiIuL2xpYi9jb25zdGFudHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY3JlZGVudGlhbHMgPSB7XG4gIHR3aXR0ZXI6IHtcbiAgICBhcGlLZXk6IFwiREtCYzZ5OWZuWUhGRnp4Rk1WWUVCT1NzUFwiLFxuICAgIGFwaVNlY3JldDogXCJVSXpHdXBQQjNyRHFwUk9UZkN5aFM5eUw0N3dzeVRPVklLTjVLMnpRUUU1S2VVcmdyQVwiLFxuICAgIGJlYXJlclRva2VuOlxuICAgICAgXCJBQUFBQUFBQUFBQUFBQUFBQUFBQUFJdGtHd0VBQUFBQTlZZFlzWjVyJTJCU3JSNm1CU2p6bEQ4WUUlMkZVYU0lM0RTdGMxYnk1SUZvc2ZwWTJUOU1sUUV3U3UxUjJza1JkcDdxaVBrYzlvOWduV21kZUJUc1wiLFxuICAgIGFjY2Vzc1Rva2VuOiBcIjEyOTUwODgzNDczNDIzNTIzODUtdzFoTXFFN2dLanlBdFdrVkJLNEI5NlJTazVSQ1J1XCIsXG4gICAgYWNjZXNzVG9rZW5TZWNyZXQ6IFwiQjhieGFublBFNDNOMnV6Y1FlVXV1NEpMSkkzVEUyS1JJdFJIb2RBVm52cWY2XCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZW5kcG9pbnRzID0ge1xuICB0d2l0dGVyOiB7XG4gICAgZ2V0VHdlZXRzOlxuICAgICAgXCJodHRwczovL2FwaS50d2l0dGVyLmNvbS8yL3R3ZWV0cy9zZWFyY2gvcmVjZW50P3F1ZXJ5PW5ld3N3ZWVrJnR3ZWV0LmZpZWxkcz1jcmVhdGVkX2F0XCIsXG4gICAgcmVwbHlUb1R3ZWV0OiAodGFyZ2V0VHdlZXRJZDogc3RyaW5nKSA9PlxuICAgICAgZW5jb2RlVVJJKFxuICAgICAgICBgaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vMS4xL3N0YXR1c2VzL3VwZGF0ZS5qc29uP3N0YXR1cz1OZXdzd2VlayB3YXMgYm91Z2h0IGFuZCB0dXJuZWQgaW50byBhIGNsaWNrYmFpdCBmYXJtIG1lYW50IHRvIHRha2UgYWR2YW50YWdlIG9mIHRoZSByZXB1dGFibGUgbmFtZS4gSXQgbm8gbG9uZ2VyIGhvbGRzIHRoZSBzYW1lIGVkaXRvcmlhbCBzdGFuZGFyZHMgaXQgb25jZSBkaWQuJmluX3JlcGx5X3RvX3N0YXR1cz0ke3RhcmdldFR3ZWV0SWR9YFxuICAgICAgKSxcbiAgfSxcbiAgZGI6IFwiaHR0cHM6Ly93YXRjaC10aGlzLWRiLTEuaGVyb2t1YXBwLmNvbS92MS9ncmFwaHFsXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZGJRdWVyaWVzID0ge1xuICBnZXRQZXJpc3RlbnRWYXJpYWJsZXNRdWVyeTogSlNPTi5zdHJpbmdpZnkoe1xuICAgIHF1ZXJ5OiBgXG4gICAgcXVlcnkgTXlRdWVyeSB7XG4gICAgICBuZXdzd2Vla19ib3RfY29uc3RhbnRzIHtcbiAgICAgICAga2V5XG4gICAgICAgIHZhbHVlXG4gICAgICB9XG4gICAgfVxuICBgLFxuICB9KSxcbiAgc2V0VGltZU9mTGFzdEFjdGlvblRha2VuOiAobmV3VGltZTogc3RyaW5nKSA9PlxuICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBgXG4gIG11dGF0aW9uIE15TXV0YXRpb24ge1xuICAgIHVwZGF0ZV9uZXdzd2Vla19ib3RfY29uc3RhbnRzKFxuICAgICAgd2hlcmU6IHt9XG4gICAgICBfc2V0OiB7XG4gICAgICAgIGtleTogXCJUSU1FX09GX0xBU1RfQUNUSU9OX1RBS0VOXCJcbiAgICAgICAgdmFsdWU6IFwiJHtuZXdUaW1lfVwiXG4gICAgICB9XG4gICAgKSB7XG4gICAgICByZXR1cm5pbmcge1xuICAgICAgICBrZXlcbiAgICAgICAgdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmAsXG4gICAgfSksXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/constants.ts\n");

/***/ }),

/***/ "./pages/api/index.ts":
/*!****************************!*\
  !*** ./pages/api/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/constants */ \"./lib/constants.ts\");\n/* harmony import */ var twit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twit */ \"twit\");\n/* harmony import */ var twit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(twit__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  res.send(\"ACK\");\n  const T = new twit__WEBPACK_IMPORTED_MODULE_1___default.a({\n    consumer_key: lib_constants__WEBPACK_IMPORTED_MODULE_0__[\"credentials\"].twitter.apiKey,\n    consumer_secret: lib_constants__WEBPACK_IMPORTED_MODULE_0__[\"credentials\"].twitter.apiSecret,\n    access_token: lib_constants__WEBPACK_IMPORTED_MODULE_0__[\"credentials\"].twitter.accessToken,\n    access_token_secret: lib_constants__WEBPACK_IMPORTED_MODULE_0__[\"credentials\"].twitter.accessTokenSecret,\n    timeout_ms: 10000,\n    strictSSL: true\n  });\n  const stream = T.stream(\"statuses/filter\", {\n    track: [\"newsweek\"]\n  });\n  setTimeout(() => {\n    stream.stop();\n    console.log(\"stream stopped\");\n  }, 10000);\n  stream.on(\"tweet\", function (tweet) {\n    console.log(tweet);\n    if (tweet.user.screen_name != \"NewsweekBot\") T.post(\"statuses/update\", {\n      in_reply_to_status_id: tweet.id_str,\n      auto_populate_reply_metadata: true,\n      status: `Just FYI, Newsweek was bought in 2010, and has since changed its editorial standards. Its historic reputation is no longer an accurate representation of its current reporting.`\n    }, function (_, data) {\n      console.log(data);\n    });\n  });\n}); // function respondToTweet(id) {\n//   https.request(\n//     endpoints.twitter.replyToTweet(id),\n//     {\n//       headers: { Authorization: `Bearer ${credentials.twitter.bearerToken}` },\n//       method: \"POST\",\n//     },\n//     (twitterRes) => {\n//       let body = \"\";\n//       twitterRes.on(\"data\", (chunk) => (body += chunk));\n//       twitterRes.on(\"end\", () => {\n//         console.log(JSON.parse(body));\n//       });\n//       //   twitterRes.on(\"error\", (err) => console.error(err));\n//     }\n//   );\n// }\n// function respondToTweets(\n//   tweets: { id: string; text: string; created_at: string }[],\n//   persistentVariables: { key: string; value: string }[],\n//   res: NextApiResponse\n// ) {\n//   if (tweets === undefined || persistentVariables === undefined) return;\n//   const minimumAge = new Date(\n//     persistentVariables.filter(\n//       ({ key }) => key === \"TIME_OF_LAST_ACTION_TAKEN\"\n//     )[0].value\n//   );\n//   let newMinimumAge = minimumAge;\n//   tweets\n//     .map((tweet) => ({ ...tweet, created_at: new Date(tweet.created_at) }))\n//     .forEach((tweet) => {\n//       if (tweet.created_at > minimumAge) {\n//         respondToTweet(tweet.id);\n//         if (tweet.created_at > newMinimumAge) newMinimumAge = tweet.created_at;\n//       }\n//     });\n//   if (newMinimumAge != minimumAge) {\n//     let dbReq = https.request(\n//       endpoints.db,\n//       {\n//         headers: {\n//           \"Content-Type\": \"application/json\",\n//           \"Content-Length\": Buffer.byteLength(\n//             dbQueries.setTimeOfLastActionTaken(newMinimumAge.toString())\n//           ),\n//         },\n//         method: \"POST\",\n//       },\n//       (dbRes) => {\n//         let body = \"\";\n//         dbRes.on(\"data\", (chunk) => (body += chunk));\n//         dbRes.on(\"end\", () => {\n//           res.json({ all: \"good\" }); // done\n//         });\n//       }\n//     );\n//     dbReq.write(dbQueries.setTimeOfLastActionTaken(newMinimumAge.toString()));\n//     dbReq.end();\n//   } else res.json({ all: \"good\" }); // done\n// }\n// export default (req: NextApiRequest, res: NextApiResponse) => {\n//   let persistentVariables = undefined;\n//   let tweets = undefined;\n//   let dbReq = https.request(\n//     endpoints.db,\n//     {\n//       headers: {\n//         \"Content-Type\": \"application/json\",\n//         \"Content-Length\": Buffer.byteLength(\n//           dbQueries.getPeristentVariablesQuery\n//         ),\n//       },\n//       method: \"POST\",\n//     },\n//     (dbRes) => {\n//       let body = \"\";\n//       dbRes.on(\"data\", (chunk) => (body += chunk));\n//       dbRes.on(\"end\", () => {\n//         persistentVariables = JSON.parse(body).data.newsweek_bot_constants;\n//         respondToTweets(tweets, persistentVariables, res);\n//       });\n//     }\n//   );\n//   dbReq.write(dbQueries.getPeristentVariablesQuery);\n//   dbReq.end();\n//   https.get(\n//     endpoints.twitter.getTweets,\n//     {\n//       headers: { Authorization: `Bearer ${credentials.twitter.bearerToken}` },\n//     },\n//     (twitterRes) => {\n//       let body = \"\";\n//       twitterRes.on(\"data\", (chunk) => (body += chunk));\n//       twitterRes.on(\"end\", () => {\n//         tweets = JSON.parse(body).data;\n//         respondToTweets(tweets, persistentVariables, res);\n//       });\n//     }\n//   );\n// };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaW5kZXgudHM/MjNjZiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJzZW5kIiwiVCIsIlR3aXQiLCJjb25zdW1lcl9rZXkiLCJjcmVkZW50aWFscyIsInR3aXR0ZXIiLCJhcGlLZXkiLCJjb25zdW1lcl9zZWNyZXQiLCJhcGlTZWNyZXQiLCJhY2Nlc3NfdG9rZW4iLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbl9zZWNyZXQiLCJhY2Nlc3NUb2tlblNlY3JldCIsInRpbWVvdXRfbXMiLCJzdHJpY3RTU0wiLCJzdHJlYW0iLCJ0cmFjayIsInNldFRpbWVvdXQiLCJzdG9wIiwiY29uc29sZSIsImxvZyIsIm9uIiwidHdlZXQiLCJ1c2VyIiwic2NyZWVuX25hbWUiLCJwb3N0IiwiaW5fcmVwbHlfdG9fc3RhdHVzX2lkIiwiaWRfc3RyIiwiYXV0b19wb3B1bGF0ZV9yZXBseV9tZXRhZGF0YSIsInN0YXR1cyIsIl8iLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSxnRUFBQ0EsR0FBRCxFQUFzQkMsR0FBdEIsS0FBK0M7QUFDNURBLEtBQUcsQ0FBQ0MsSUFBSixDQUFTLEtBQVQ7QUFFQSxRQUFNQyxDQUFDLEdBQUcsSUFBSUMsMkNBQUosQ0FBUztBQUNqQkMsZ0JBQVksRUFBRUMseURBQVcsQ0FBQ0MsT0FBWixDQUFvQkMsTUFEakI7QUFFakJDLG1CQUFlLEVBQUVILHlEQUFXLENBQUNDLE9BQVosQ0FBb0JHLFNBRnBCO0FBR2pCQyxnQkFBWSxFQUFFTCx5REFBVyxDQUFDQyxPQUFaLENBQW9CSyxXQUhqQjtBQUlqQkMsdUJBQW1CLEVBQUVQLHlEQUFXLENBQUNDLE9BQVosQ0FBb0JPLGlCQUp4QjtBQUtqQkMsY0FBVSxFQUFFLEtBTEs7QUFNakJDLGFBQVMsRUFBRTtBQU5NLEdBQVQsQ0FBVjtBQVNBLFFBQU1DLE1BQU0sR0FBR2QsQ0FBQyxDQUFDYyxNQUFGLENBQVMsaUJBQVQsRUFBNEI7QUFBRUMsU0FBSyxFQUFFLENBQUMsVUFBRDtBQUFULEdBQTVCLENBQWY7QUFDQUMsWUFBVSxDQUFDLE1BQU07QUFDZkYsVUFBTSxDQUFDRyxJQUFQO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0QsR0FIUyxFQUdQLEtBSE8sQ0FBVjtBQUlBTCxRQUFNLENBQUNNLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQVVDLEtBQVYsRUFBaUI7QUFDbENILFdBQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaO0FBQ0EsUUFBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFdBQVgsSUFBMEIsYUFBOUIsRUFDRXZCLENBQUMsQ0FBQ3dCLElBQUYsQ0FDRSxpQkFERixFQUVFO0FBQ0VDLDJCQUFxQixFQUFFSixLQUFLLENBQUNLLE1BRC9CO0FBRUVDLGtDQUE0QixFQUFFLElBRmhDO0FBR0VDLFlBQU0sRUFBRztBQUhYLEtBRkYsRUFPRSxVQUFVQyxDQUFWLEVBQWFDLElBQWIsRUFBbUI7QUFDakJaLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVyxJQUFaO0FBQ0QsS0FUSDtBQVdILEdBZEQ7QUFlRCxDQWhDRCxFLENBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGNyZWRlbnRpYWxzIH0gZnJvbSBcImxpYi9jb25zdGFudHNcIjtcbmltcG9ydCBUd2l0IGZyb20gXCJ0d2l0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICByZXMuc2VuZChcIkFDS1wiKTtcblxuICBjb25zdCBUID0gbmV3IFR3aXQoe1xuICAgIGNvbnN1bWVyX2tleTogY3JlZGVudGlhbHMudHdpdHRlci5hcGlLZXksXG4gICAgY29uc3VtZXJfc2VjcmV0OiBjcmVkZW50aWFscy50d2l0dGVyLmFwaVNlY3JldCxcbiAgICBhY2Nlc3NfdG9rZW46IGNyZWRlbnRpYWxzLnR3aXR0ZXIuYWNjZXNzVG9rZW4sXG4gICAgYWNjZXNzX3Rva2VuX3NlY3JldDogY3JlZGVudGlhbHMudHdpdHRlci5hY2Nlc3NUb2tlblNlY3JldCxcbiAgICB0aW1lb3V0X21zOiAxMDAwMCxcbiAgICBzdHJpY3RTU0w6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IHN0cmVhbSA9IFQuc3RyZWFtKFwic3RhdHVzZXMvZmlsdGVyXCIsIHsgdHJhY2s6IFtcIm5ld3N3ZWVrXCJdIH0pO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzdHJlYW0uc3RvcCgpO1xuICAgIGNvbnNvbGUubG9nKFwic3RyZWFtIHN0b3BwZWRcIik7XG4gIH0sIDEwMDAwKTtcbiAgc3RyZWFtLm9uKFwidHdlZXRcIiwgZnVuY3Rpb24gKHR3ZWV0KSB7XG4gICAgY29uc29sZS5sb2codHdlZXQpO1xuICAgIGlmICh0d2VldC51c2VyLnNjcmVlbl9uYW1lICE9IFwiTmV3c3dlZWtCb3RcIilcbiAgICAgIFQucG9zdChcbiAgICAgICAgXCJzdGF0dXNlcy91cGRhdGVcIixcbiAgICAgICAge1xuICAgICAgICAgIGluX3JlcGx5X3RvX3N0YXR1c19pZDogdHdlZXQuaWRfc3RyLFxuICAgICAgICAgIGF1dG9fcG9wdWxhdGVfcmVwbHlfbWV0YWRhdGE6IHRydWUsXG4gICAgICAgICAgc3RhdHVzOiBgSnVzdCBGWUksIE5ld3N3ZWVrIHdhcyBib3VnaHQgaW4gMjAxMCwgYW5kIGhhcyBzaW5jZSBjaGFuZ2VkIGl0cyBlZGl0b3JpYWwgc3RhbmRhcmRzLiBJdHMgaGlzdG9yaWMgcmVwdXRhdGlvbiBpcyBubyBsb25nZXIgYW4gYWNjdXJhdGUgcmVwcmVzZW50YXRpb24gb2YgaXRzIGN1cnJlbnQgcmVwb3J0aW5nLmAsXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChfLCBkYXRhKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH0pO1xufTtcblxuLy8gZnVuY3Rpb24gcmVzcG9uZFRvVHdlZXQoaWQpIHtcbi8vICAgaHR0cHMucmVxdWVzdChcbi8vICAgICBlbmRwb2ludHMudHdpdHRlci5yZXBseVRvVHdlZXQoaWQpLFxuLy8gICAgIHtcbi8vICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2NyZWRlbnRpYWxzLnR3aXR0ZXIuYmVhcmVyVG9rZW59YCB9LFxuLy8gICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbi8vICAgICB9LFxuLy8gICAgICh0d2l0dGVyUmVzKSA9PiB7XG4vLyAgICAgICBsZXQgYm9keSA9IFwiXCI7XG4vLyAgICAgICB0d2l0dGVyUmVzLm9uKFwiZGF0YVwiLCAoY2h1bmspID0+IChib2R5ICs9IGNodW5rKSk7XG4vLyAgICAgICB0d2l0dGVyUmVzLm9uKFwiZW5kXCIsICgpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShib2R5KSk7XG4vLyAgICAgICB9KTtcbi8vICAgICAgIC8vICAgdHdpdHRlclJlcy5vbihcImVycm9yXCIsIChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4vLyAgICAgfVxuLy8gICApO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiByZXNwb25kVG9Ud2VldHMoXG4vLyAgIHR3ZWV0czogeyBpZDogc3RyaW5nOyB0ZXh0OiBzdHJpbmc7IGNyZWF0ZWRfYXQ6IHN0cmluZyB9W10sXG4vLyAgIHBlcnNpc3RlbnRWYXJpYWJsZXM6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfVtdLFxuLy8gICByZXM6IE5leHRBcGlSZXNwb25zZVxuLy8gKSB7XG4vLyAgIGlmICh0d2VldHMgPT09IHVuZGVmaW5lZCB8fCBwZXJzaXN0ZW50VmFyaWFibGVzID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuLy8gICBjb25zdCBtaW5pbXVtQWdlID0gbmV3IERhdGUoXG4vLyAgICAgcGVyc2lzdGVudFZhcmlhYmxlcy5maWx0ZXIoXG4vLyAgICAgICAoeyBrZXkgfSkgPT4ga2V5ID09PSBcIlRJTUVfT0ZfTEFTVF9BQ1RJT05fVEFLRU5cIlxuLy8gICAgIClbMF0udmFsdWVcbi8vICAgKTtcblxuLy8gICBsZXQgbmV3TWluaW11bUFnZSA9IG1pbmltdW1BZ2U7XG5cbi8vICAgdHdlZXRzXG4vLyAgICAgLm1hcCgodHdlZXQpID0+ICh7IC4uLnR3ZWV0LCBjcmVhdGVkX2F0OiBuZXcgRGF0ZSh0d2VldC5jcmVhdGVkX2F0KSB9KSlcbi8vICAgICAuZm9yRWFjaCgodHdlZXQpID0+IHtcbi8vICAgICAgIGlmICh0d2VldC5jcmVhdGVkX2F0ID4gbWluaW11bUFnZSkge1xuLy8gICAgICAgICByZXNwb25kVG9Ud2VldCh0d2VldC5pZCk7XG4vLyAgICAgICAgIGlmICh0d2VldC5jcmVhdGVkX2F0ID4gbmV3TWluaW11bUFnZSkgbmV3TWluaW11bUFnZSA9IHR3ZWV0LmNyZWF0ZWRfYXQ7XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG5cbi8vICAgaWYgKG5ld01pbmltdW1BZ2UgIT0gbWluaW11bUFnZSkge1xuLy8gICAgIGxldCBkYlJlcSA9IGh0dHBzLnJlcXVlc3QoXG4vLyAgICAgICBlbmRwb2ludHMuZGIsXG4vLyAgICAgICB7XG4vLyAgICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbi8vICAgICAgICAgICBcIkNvbnRlbnQtTGVuZ3RoXCI6IEJ1ZmZlci5ieXRlTGVuZ3RoKFxuLy8gICAgICAgICAgICAgZGJRdWVyaWVzLnNldFRpbWVPZkxhc3RBY3Rpb25UYWtlbihuZXdNaW5pbXVtQWdlLnRvU3RyaW5nKCkpXG4vLyAgICAgICAgICAgKSxcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbi8vICAgICAgIH0sXG4vLyAgICAgICAoZGJSZXMpID0+IHtcbi8vICAgICAgICAgbGV0IGJvZHkgPSBcIlwiO1xuLy8gICAgICAgICBkYlJlcy5vbihcImRhdGFcIiwgKGNodW5rKSA9PiAoYm9keSArPSBjaHVuaykpO1xuLy8gICAgICAgICBkYlJlcy5vbihcImVuZFwiLCAoKSA9PiB7XG4vLyAgICAgICAgICAgcmVzLmpzb24oeyBhbGw6IFwiZ29vZFwiIH0pOyAvLyBkb25lXG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgfVxuLy8gICAgICk7XG4vLyAgICAgZGJSZXEud3JpdGUoZGJRdWVyaWVzLnNldFRpbWVPZkxhc3RBY3Rpb25UYWtlbihuZXdNaW5pbXVtQWdlLnRvU3RyaW5nKCkpKTtcbi8vICAgICBkYlJlcS5lbmQoKTtcbi8vICAgfSBlbHNlIHJlcy5qc29uKHsgYWxsOiBcImdvb2RcIiB9KTsgLy8gZG9uZVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbi8vICAgbGV0IHBlcnNpc3RlbnRWYXJpYWJsZXMgPSB1bmRlZmluZWQ7XG4vLyAgIGxldCB0d2VldHMgPSB1bmRlZmluZWQ7XG5cbi8vICAgbGV0IGRiUmVxID0gaHR0cHMucmVxdWVzdChcbi8vICAgICBlbmRwb2ludHMuZGIsXG4vLyAgICAge1xuLy8gICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbi8vICAgICAgICAgXCJDb250ZW50LUxlbmd0aFwiOiBCdWZmZXIuYnl0ZUxlbmd0aChcbi8vICAgICAgICAgICBkYlF1ZXJpZXMuZ2V0UGVyaXN0ZW50VmFyaWFibGVzUXVlcnlcbi8vICAgICAgICAgKSxcbi8vICAgICAgIH0sXG4vLyAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuLy8gICAgIH0sXG4vLyAgICAgKGRiUmVzKSA9PiB7XG4vLyAgICAgICBsZXQgYm9keSA9IFwiXCI7XG4vLyAgICAgICBkYlJlcy5vbihcImRhdGFcIiwgKGNodW5rKSA9PiAoYm9keSArPSBjaHVuaykpO1xuLy8gICAgICAgZGJSZXMub24oXCJlbmRcIiwgKCkgPT4ge1xuLy8gICAgICAgICBwZXJzaXN0ZW50VmFyaWFibGVzID0gSlNPTi5wYXJzZShib2R5KS5kYXRhLm5ld3N3ZWVrX2JvdF9jb25zdGFudHM7XG4vLyAgICAgICAgIHJlc3BvbmRUb1R3ZWV0cyh0d2VldHMsIHBlcnNpc3RlbnRWYXJpYWJsZXMsIHJlcyk7XG4vLyAgICAgICB9KTtcbi8vICAgICB9XG4vLyAgICk7XG4vLyAgIGRiUmVxLndyaXRlKGRiUXVlcmllcy5nZXRQZXJpc3RlbnRWYXJpYWJsZXNRdWVyeSk7XG4vLyAgIGRiUmVxLmVuZCgpO1xuXG4vLyAgIGh0dHBzLmdldChcbi8vICAgICBlbmRwb2ludHMudHdpdHRlci5nZXRUd2VldHMsXG4vLyAgICAge1xuLy8gICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y3JlZGVudGlhbHMudHdpdHRlci5iZWFyZXJUb2tlbn1gIH0sXG4vLyAgICAgfSxcbi8vICAgICAodHdpdHRlclJlcykgPT4ge1xuLy8gICAgICAgbGV0IGJvZHkgPSBcIlwiO1xuLy8gICAgICAgdHdpdHRlclJlcy5vbihcImRhdGFcIiwgKGNodW5rKSA9PiAoYm9keSArPSBjaHVuaykpO1xuLy8gICAgICAgdHdpdHRlclJlcy5vbihcImVuZFwiLCAoKSA9PiB7XG4vLyAgICAgICAgIHR3ZWV0cyA9IEpTT04ucGFyc2UoYm9keSkuZGF0YTtcbi8vICAgICAgICAgcmVzcG9uZFRvVHdlZXRzKHR3ZWV0cywgcGVyc2lzdGVudFZhcmlhYmxlcywgcmVzKTtcbi8vICAgICAgIH0pO1xuLy8gICAgIH1cbi8vICAgKTtcbi8vIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/index.ts\n");

/***/ }),

/***/ "twit":
/*!***********************!*\
  !*** external "twit" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"twit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0d2l0XCI/MmZiZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ0d2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHdpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///twit\n");

/***/ })

/******/ });