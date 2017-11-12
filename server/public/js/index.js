/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// {
//   let ajax=function(callback){
//     console.log('执行');
//     setTimeout(function() {
//       callback&&callback.call()
//     },1000)
//   };
//   ajax(function(){
//     console.log('timeOUt1');
//   })
// }
// {
//   let ajax=function () {
//     console.log('执行2')
//     return new Promise(function(resolve,reject){
//       setTimeout(function () {
//         resolve()
//       }, 1000);
//     })
//   }
//   ajax().then(function () {
//     console.log('promise','tiemout2')
//   })
// }
//
//
// {
//   let ajax=function () {
//     console.log('执行3')
//     return new Promise(function(resolve,reject){
//       setTimeout(function () {
//         resolve()
//       }, 1000);
//     })
//   }
//   ajax()
//     .then(function () {
//         return new Promise(function(resolve,reject){
//           setTimeout(function () {
//               resolve();
//           }, 2000)
//         })
//       })
//     .then(function(){
//       console.log('tiemout3')
//     })
// }
//
//
//
// {
//   let ajax=function (num) {
//     console.log('执行4')
//     return new Promise(function(resolve,reject){
//       if(num>5){
//         resolve()
//       }else{
//         throw Error('出错了')
//       }
//     })
//   }
//   ajax(6).then(function(){
//     console.log(6);
//   }).catch(function (err) {
//     console.log('错误',err)
//   })
//
//
//
//   ajax(3).then(function(){
//     console.log(3);
//   }).catch(function (err) {
//     console.log('错误',err)
//   })
// }

{
  // 搜有图片加载完加载页面
  var loadImg = function loadImg(src) {
    return new Promise(function (resolve, reject) {
      return function () {
        var img = document.createElemet('img');
        img.src = src;
        img.onload = function () {
          resolve();
        };
        img.onerror = function () {
          reject();
        };
      };
    });
  };

  var showImgs = function showImgs(imgs) {
    console.log('imgs', imgs);
    imgs.forEach(function (img) {
      document.body.createElemet(img);
    });
  };

  Promise.all([loadImg('https://s17.mogucdn.com/mlcdn/33449f/171111_3de33j7390chlele2fh7kg9kde182_564x282.jpg'), loadImg('https://s17.mogucdn.com/mlcdn/33449f/171111_3de33j7390chlele2fh7kg9kde182_564x282.jpg'), loadImg('https://s17.mogucdn.com/mlcdn/33449f/171111_3de33j7390chlele2fh7kg9kde182_564x282.jpg')]).then(console.log(111));
}

/***/ })
/******/ ]);