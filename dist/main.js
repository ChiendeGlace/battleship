/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/computer.js":
/*!*********************************!*\
  !*** ./src/modules/computer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var computerFactory = function computerFactory() {
  var turn = false;
  return {
    turn: turn
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computerFactory);

/***/ }),

/***/ "./src/modules/computerShipPlacement.js":
/*!**********************************************!*\
  !*** ./src/modules/computerShipPlacement.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeShipsRandomly": () => (/* binding */ placeShipsRandomly)
/* harmony export */ });
/* harmony import */ var _noAdjecent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noAdjecent */ "./src/modules/noAdjecent.js");

var placeShipsRandomly = function placeShipsRandomly(cboard, length, direction) {
  var index;
  var conditionsMet = function conditionsMet(index, direction) {
    if (direction == 'vertical') {
      for (var i = 0; i < length; i++) {
        if (cboard.board[index + i * 10].canHaveShip == false) {
          return false;
        }
      }
    } else if (direction == 'horizontal') {
      for (var _i = 0; _i < length; _i++) {
        if (cboard.board[index + _i].canHaveShip == false) {
          return false;
        }
      }
    }
    return true;
  };
  if (direction == 'vertical') {
    index = Math.round(Math.random() * 99);
    while (index + length * 10 > 100 || conditionsMet(index, 'vertical') == false) {
      index = Math.round(Math.random() * 99);
    }
    cboard.placeShips(index);
    for (var i = 1; i < length; i++) {
      cboard.placeShips(index + i * 10);
    }
  }
  if (direction == 'horizontal') {
    index = Math.round(Math.random() * 99);
    var condition2 = function condition2(index, length) {
      if (index <= 9) {
        console.log('here');
        if (index + (length - 1) >= 10) {
          return false;
        }
      }
      return true;
    };
    while (condition2(index, length) == false || index + (length - 1) >= index.toString().split('')[0] * 10 + 10 || conditionsMet(index, 'horizontal') == false) {
      index = Math.round(Math.random() * 99);
    }
    cboard.placeShips(index);
    for (var _i2 = 1; _i2 < length; _i2++) {
      cboard.placeShips(index + _i2);
    }
  }
  if (direction == 'vertical' && length == 5) {
    (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_0__.donotAllowShips)(cboard, index, [-10, -9, -11, -1], [0, 10, 20, 30, 40, 49, 50, 51, 39, 41, 29, 31, 19, 21, 11, 9, 1], 'vertical');
  } else if (direction == 'vertical' && length == 4) {
    (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_0__.donotAllowShips)(cboard, index, [-10, -9, -11, -1], [0, 10, 20, 30, 40, 39, 41, 29, 31, 19, 21, 11, 9, 1], 'vertical');
  } else if (direction == 'vertical' && length == 3) {
    (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_0__.donotAllowShips)(cboard, index, [-10, -9, -11, -1], [0, 10, 20, 30, 29, 31, 19, 21, 11, 9, 1], 'vertical');
  } else if (direction == 'vertical' && length == 2) {
    (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_0__.donotAllowShips)(cboard, index, [-10, -9, -11, -1], [0, 10, 20, 19, 21, 11, 9, 1], 'vertical');
  }
  if (direction == 'horizontal' && length == 5) {
    (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_0__.donotAllowShips)(cboard, index, [-1, -10, -11, -9, -8, -7, -6, -5], [5, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4], 'horizontal', 5);
  } else if (direction == 'horizontal' && length == 4) {
    (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_0__.donotAllowShips)(cboard, index, [-1, -10, -11, -9, -8, -7, -6], [4, 9, 10, 11, 12, 13, 14, 0, 1, 2, 3], 'horizontal', 4);
  } else if (direction == 'horizontal' && length == 3) {
    (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_0__.donotAllowShips)(cboard, index, [-1, -10, -11, -9, -8, -7], [9, 10, 11, 12, 13, 0, 1, 2, 3], 'horizontal', 3);
  } else if (direction == 'horizontal' && length == 2) {
    (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_0__.donotAllowShips)(cboard, index, [-1, -10, -11, -9, -8], [9, 10, 11, 12, 0, 1, 2], 'horizontal', 2);
  }
  return index;
};

/***/ }),

/***/ "./src/modules/displayGame.js":
/*!************************************!*\
  !*** ./src/modules/displayGame.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/modules/header.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computer */ "./src/modules/computer.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _updatePlayerBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updatePlayerBoard */ "./src/modules/updatePlayerBoard.js");
/* harmony import */ var _updateComputerBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateComputerBoard */ "./src/modules/updateComputerBoard.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage */ "./src/modules/homepage.js");
/* harmony import */ var _computerShipPlacement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./computerShipPlacement */ "./src/modules/computerShipPlacement.js");









var gameInterface = document.querySelector('.game-interface');
var gameInfo = document.querySelector('.info');
var header = document.querySelector('header');
var toHomepage = function toHomepage() {
  (0,_game__WEBPACK_IMPORTED_MODULE_0__.changeGameStatus)();
  header.textContent = '';
  gameInfo.textContent = '';
  gameInterface.textContent = '';
  header.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
  (0,_homepage__WEBPACK_IMPORTED_MODULE_7__["default"])();
};
var randomDir = function randomDir() {
  if (Math.random() > 0.5) {
    return 'vertical';
  } else {
    return 'horizontal';
  }
};
var displayGame = function displayGame(playerName, playerBoard) {
  var goBackButton = document.createElement('button');
  goBackButton.textContent = 'To main menu';
  header.appendChild(goBackButton);
  goBackButton.addEventListener('click', toHomepage);
  var player = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(playerName);
  player.turn = true;
  var computer = (0,_computer__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var direction;
  direction = randomDir();
  (0,_computerShipPlacement__WEBPACK_IMPORTED_MODULE_8__.placeShipsRandomly)(computerBoard, 5, 'horizontal');
  direction = randomDir();
  (0,_computerShipPlacement__WEBPACK_IMPORTED_MODULE_8__.placeShipsRandomly)(computerBoard, 4, 'horizontal');
  for (var i = 0; i < 3; i++) {
    direction = randomDir();
    (0,_computerShipPlacement__WEBPACK_IMPORTED_MODULE_8__.placeShipsRandomly)(computerBoard, 3, 'horizontal');
  }
  for (var _i = 0; _i < 2; _i++) {
    direction = randomDir();
    (0,_computerShipPlacement__WEBPACK_IMPORTED_MODULE_8__.placeShipsRandomly)(computerBoard, 2, 'horizontal');
  }
  gameInterface.textContent = '';
  gameInfo.classList.remove('homepage-info');
  gameInterface.classList.remove('homepage-board');
  gameInterface.appendChild((0,_updatePlayerBoard__WEBPACK_IMPORTED_MODULE_5__["default"])(playerBoard));
  gameInterface.appendChild((0,_updateComputerBoard__WEBPACK_IMPORTED_MODULE_6__["default"])(computerBoard, computer, player));
  (0,_game__WEBPACK_IMPORTED_MODULE_0__.changeGameStatus)();
  (0,_game__WEBPACK_IMPORTED_MODULE_0__.startGame)(player, computer, playerBoard, computerBoard);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayGame);

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeGameStatus": () => (/* binding */ changeGameStatus),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _updatePlayerBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatePlayerBoard */ "./src/modules/updatePlayerBoard.js");
/* harmony import */ var _updateComputerBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateComputerBoard */ "./src/modules/updateComputerBoard.js");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info */ "./src/modules/info.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var gameStatus = 0;
var changeGameStatus = function changeGameStatus() {
  if (gameStatus == 0) {
    gameStatus = 1;
  } else {
    gameStatus = 0;
  }
};
var getUserMove = function getUserMove(computerBoard) {
  return new Promise(function (resolve, reject) {
    for (var i = 0; i < 100; i++) {
      if (computerBoard.board[i].isHit == false && computerBoard.board[i].isMissed == false) {
        var square = document.getElementById(i);
        square.addEventListener('click', function (e) {
          resolve(e.target.id);
        });
      }
    }
  });
};
var gameInterface = document.querySelector('.game-interface');
var gameInfo = document.querySelector('.info');
var startGame = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(player, computer, playerBoard, computerBoard) {
    var _loop, _ret;
    return _regeneratorRuntime().wrap(function _callee$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
            var userMove, result, changePlayer, turn, possibleCords, i, getRandomCords, randomCords, _result, _changePlayer, _turn;
            return _regeneratorRuntime().wrap(function _loop$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!player.turn) {
                    _context.next = 21;
                    break;
                  }
                  gameInfo.textContent = '';
                  gameInfo.appendChild((0,_info__WEBPACK_IMPORTED_MODULE_2__["default"])(player.name, playerBoard, computerBoard, "".concat(player.name, " is attempting an attack...")));
                  _context.next = 5;
                  return getUserMove(computerBoard);
                case 5:
                  userMove = _context.sent;
                  if (!(gameStatus == 0)) {
                    _context.next = 8;
                    break;
                  }
                  return _context.abrupt("return", {
                    v: void 0
                  });
                case 8:
                  gameInfo.textContent = '';
                  gameInterface.textContent = '';
                  result = computerBoard.recieveAttack(userMove);
                  if (result == 'You missed') {
                    gameInfo.appendChild((0,_info__WEBPACK_IMPORTED_MODULE_2__["default"])(player.name, playerBoard, computerBoard, "".concat(player.name, " missed!")));
                  } else if (result == "You managed to hit a ship on square ".concat(userMove)) {
                    gameInfo.appendChild((0,_info__WEBPACK_IMPORTED_MODULE_2__["default"])(player.name, playerBoard, computerBoard, "".concat(player.name, " managed to hit a ship on square ").concat(userMove)));
                  }
                  gameInterface.appendChild((0,_updatePlayerBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(playerBoard));
                  gameInterface.appendChild((0,_updateComputerBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(computerBoard, computer, player));
                  changePlayer = function changePlayer() {
                    return new Promise(function (resolve, reject) {
                      setTimeout(function () {
                        resolve('computer');
                      }, 1500);
                    });
                  };
                  _context.next = 17;
                  return changePlayer();
                case 17:
                  turn = _context.sent;
                  if (turn == 'computer') {
                    player.turn = false;
                    computer.turn = true;
                  }
                  _context.next = 43;
                  break;
                case 21:
                  if (!computer.turn) {
                    _context.next = 43;
                    break;
                  }
                  gameInfo.textContent = '';
                  gameInfo.appendChild((0,_info__WEBPACK_IMPORTED_MODULE_2__["default"])(player.name, playerBoard, computerBoard, "Computer is attempting an attack..."));
                  possibleCords = [];
                  for (i = 0; i < 100; i++) {
                    if (playerBoard.board[i].isHit == false && playerBoard.board[i].isMissed == false) {
                      possibleCords.push(i);
                    }
                  }
                  getRandomCords = function getRandomCords() {
                    return new Promise(function (resolve, reject) {
                      setTimeout(function () {
                        var index = Math.floor(Math.random() * 100);
                        while (possibleCords.filter(function (cord) {
                          return cord == index;
                        }) == false) {
                          index = Math.floor(Math.random() * 100);
                        }
                        resolve(index);
                      }, 2500);
                    });
                  };
                  _context.next = 29;
                  return getRandomCords();
                case 29:
                  randomCords = _context.sent;
                  _result = playerBoard.recieveAttack(randomCords);
                  if (!(gameStatus == 0)) {
                    _context.next = 33;
                    break;
                  }
                  return _context.abrupt("return", {
                    v: void 0
                  });
                case 33:
                  gameInfo.textContent = '';
                  gameInterface.textContent = '';
                  if (_result == 'You missed') {
                    gameInfo.appendChild((0,_info__WEBPACK_IMPORTED_MODULE_2__["default"])(player.name, playerBoard, computerBoard, "Computer missed!"));
                  } else if (_result == "You managed to hit a ship on square ".concat(randomCords)) {
                    gameInfo.appendChild((0,_info__WEBPACK_IMPORTED_MODULE_2__["default"])(player.name, playerBoard, computerBoard, "Computer managed to hit a ship on square ".concat(randomCords)));
                  }
                  gameInterface.appendChild((0,_updatePlayerBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(playerBoard));
                  gameInterface.appendChild((0,_updateComputerBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(computerBoard, computer, player));
                  _changePlayer = function _changePlayer() {
                    return new Promise(function (resolve, reject) {
                      setTimeout(function () {
                        resolve('player');
                      }, 1500);
                    });
                  };
                  _context.next = 41;
                  return _changePlayer();
                case 41:
                  _turn = _context.sent;
                  if (_turn == 'player') {
                    player.turn = true;
                    computer.turn = false;
                  }
                case 43:
                  if (!playerBoard.areAllSunk()) {
                    _context.next = 47;
                    break;
                  }
                  gameInfo.textContent = '';
                  gameInfo.appendChild((0,_info__WEBPACK_IMPORTED_MODULE_2__["default"])(player.name, playerBoard, computerBoard, "Computer won!"));
                  return _context.abrupt("return", {
                    v: void 0
                  });
                case 47:
                  if (!computerBoard.areAllSunk()) {
                    _context.next = 51;
                    break;
                  }
                  gameInfo.textContent = '';
                  gameInfo.appendChild((0,_info__WEBPACK_IMPORTED_MODULE_2__["default"])(player.name, playerBoard, computerBoard, "".concat(player.name, " won!")));
                  return _context.abrupt("return", {
                    v: void 0
                  });
                case 51:
                case "end":
                  return _context.stop();
              }
            }, _loop);
          });
        case 1:
          if (!(playerBoard.areAllSunk() == false && computerBoard.areAllSunk() == false)) {
            _context2.next = 8;
            break;
          }
          return _context2.delegateYield(_loop(), "t0", 3);
        case 3:
          _ret = _context2.t0;
          if (!(_typeof(_ret) === "object")) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", _ret.v);
        case 6:
          _context2.next = 1;
          break;
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee);
  }));
  return function startGame(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var gameboardFactory = function gameboardFactory() {
  var board = [];
  var hit = [];
  var missed = [];
  for (var i = 0; i < 100; i++) {
    board.push({
      isHit: false,
      hasShip: false,
      isMissed: false,
      canHaveShip: true
    });
  }
  var placeShips = function placeShips(cords) {
    if (board[cords].hasShip == false) {
      board[cords].hasShip = true;
      return board[cords];
    }
    return 'Ship already placed';
  };
  var recieveAttack = function recieveAttack(cords) {
    if (cords < 0 || cords > 99) {
      return 'No such cords';
    }
    if (board[cords].hasShip == true && board[cords].isHit == false) {
      board[cords].isHit = true;
      hit.push(cords);
      return "You managed to hit a ship on square ".concat(cords);
    } else if (board[cords].hasShip == false && board[cords].isHit == false) {
      board[cords].isMissed = true;
      missed.push(cords);
      return 'You missed';
    }
    return 'Square already attacked';
  };
  var areAllSunk = function areAllSunk() {
    for (var _i = 0; _i < 100; _i++) {
      if (board[_i].hasShip == true) {
        if (board[_i].isHit == false) {
          return false;
        }
      }
    }
    return true;
  };
  return {
    board: board,
    missed: missed,
    hit: hit,
    placeShips: placeShips,
    recieveAttack: recieveAttack,
    areAllSunk: areAllSunk
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardFactory);

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var header = document.querySelector('header');
var createHeader = function createHeader() {
  var pageTitle = document.createElement('h1');
  pageTitle.textContent = "Battleship";
  return pageTitle;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "direction": () => (/* binding */ direction)
/* harmony export */ });
/* harmony import */ var _displayGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayGame */ "./src/modules/displayGame.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _updatePlayerBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updatePlayerBoard */ "./src/modules/updatePlayerBoard.js");
/* harmony import */ var _placingShips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placingShips */ "./src/modules/placingShips.js");
/* harmony import */ var _noAdjecent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noAdjecent */ "./src/modules/noAdjecent.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var direction = 'vertical';
var gameInterface = document.querySelector('.game-interface');
var gameInfo = document.querySelector('.info');
var createHomepage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var directionChange, playerForm, playerFormLabel, playerFormInput, playerFormSubmit, playerBoard, countShips, changeDirection, shipPlacementGuide, carrierCords, battleshipCords, cruiserCords, i, destroyerCords, _i, runGame;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          directionChange = document.createElement('button');
          directionChange.classList.add('direction');
          directionChange.textContent = 'Rotate the ship';
          playerForm = document.createElement('form');
          playerFormLabel = document.createElement('label');
          playerFormLabel.textContent = 'Input player name';
          playerFormInput = document.createElement('input');
          playerFormInput.maxLength = '20';
          playerFormInput.placeholder = 'Johnny';
          playerFormSubmit = document.createElement('button');
          playerFormSubmit.textContent = 'Start game';
          playerForm.append(playerFormLabel, playerFormInput, playerFormSubmit);
          playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
          gameInfo.classList.add('homepage-info');
          gameInterface.classList.add('homepage-board');
          countShips = function countShips() {
            var shipCount = 0;
            for (var i = 0; i < 100; i++) {
              if (playerBoard.board[i].hasShip) {
                shipCount += 1;
              }
            }
            return shipCount;
          };
          changeDirection = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (direction == 'vertical') {
                      direction = 'horizontal';
                    } else {
                      direction = 'vertical';
                    }
                    if (!(carrierCords == undefined)) {
                      _context.next = 7;
                      break;
                    }
                    _context.next = 4;
                    return (0,_placingShips__WEBPACK_IMPORTED_MODULE_3__["default"])(playerBoard, 5, direction);
                  case 4:
                    carrierCords = _context.sent;
                    _context.next = 22;
                    break;
                  case 7:
                    if (!(battleshipCords == undefined)) {
                      _context.next = 13;
                      break;
                    }
                    _context.next = 10;
                    return (0,_placingShips__WEBPACK_IMPORTED_MODULE_3__["default"])(playerBoard, 4, direction);
                  case 10:
                    battleshipCords = _context.sent;
                    _context.next = 22;
                    break;
                  case 13:
                    if (!(cruiserCords == undefined || countShips() < 18)) {
                      _context.next = 19;
                      break;
                    }
                    _context.next = 16;
                    return (0,_placingShips__WEBPACK_IMPORTED_MODULE_3__["default"])(playerBoard, 3, direction);
                  case 16:
                    cruiserCords = _context.sent;
                    _context.next = 22;
                    break;
                  case 19:
                    _context.next = 21;
                    return (0,_placingShips__WEBPACK_IMPORTED_MODULE_3__["default"])(playerBoard, 2, direction);
                  case 21:
                    destroyerCords = _context.sent;
                  case 22:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function changeDirection(_x) {
              return _ref2.apply(this, arguments);
            };
          }();
          directionChange.addEventListener('click', changeDirection);
          shipPlacementGuide = document.createElement('h3');
          shipPlacementGuide.classList.add('ship-guide');
          shipPlacementGuide.textContent = 'Place your carrier';
          gameInterface.append(shipPlacementGuide, directionChange);
          gameInterface.appendChild((0,_updatePlayerBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(playerBoard));
          _context2.next = 25;
          return (0,_placingShips__WEBPACK_IMPORTED_MODULE_3__["default"])(playerBoard, 5, direction);
        case 25:
          carrierCords = _context2.sent;
          playerBoard.placeShips(carrierCords);
          if (direction == 'vertical') {
            playerBoard.placeShips(carrierCords + 10);
            playerBoard.placeShips(carrierCords + 20);
            playerBoard.placeShips(carrierCords + 30);
            playerBoard.placeShips(carrierCords + 40);
            (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_4__.donotAllowShips)(playerBoard, carrierCords, [-10, -9, -11, -1], [0, 10, 20, 30, 40, 49, 50, 51, 39, 41, 29, 31, 19, 21, 11, 9, 1], 'vertical');
          } else {
            playerBoard.placeShips(carrierCords + 1);
            playerBoard.placeShips(carrierCords + 2);
            playerBoard.placeShips(carrierCords + 3);
            playerBoard.placeShips(carrierCords + 4);
            (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_4__.donotAllowShips)(playerBoard, carrierCords, [-1, -10, -11, -9, -8, -7, -6, -5], [5, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4], 'horizontal', 5);
          }
          gameInterface.textContent = '';
          gameInterface.append(shipPlacementGuide, directionChange);
          gameInterface.appendChild((0,_updatePlayerBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(playerBoard));
          shipPlacementGuide.textContent = 'Place your battleship';
          _context2.next = 34;
          return (0,_placingShips__WEBPACK_IMPORTED_MODULE_3__["default"])(playerBoard, 4, direction);
        case 34:
          battleshipCords = _context2.sent;
          playerBoard.placeShips(battleshipCords);
          if (direction == 'vertical') {
            playerBoard.placeShips(battleshipCords + 10);
            playerBoard.placeShips(battleshipCords + 20);
            playerBoard.placeShips(battleshipCords + 30);
            (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_4__.donotAllowShips)(playerBoard, battleshipCords, [-10, -9, -11, -1], [0, 10, 20, 30, 40, 39, 41, 29, 31, 19, 21, 11, 9, 1], 'vertical');
          } else {
            playerBoard.placeShips(battleshipCords + 1);
            playerBoard.placeShips(battleshipCords + 2);
            playerBoard.placeShips(battleshipCords + 3);
            (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_4__.donotAllowShips)(playerBoard, battleshipCords, [-1, -10, -11, -9, -8, -7, -6], [4, 9, 10, 11, 12, 13, 14, 0, 1, 2, 3], 'horizontal', 4);
          }
          gameInterface.textContent = '';
          gameInterface.append(shipPlacementGuide, directionChange);
          gameInterface.appendChild((0,_updatePlayerBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(playerBoard));
          i = 0;
        case 41:
          if (!(i < 3)) {
            _context2.next = 55;
            break;
          }
          cruiserCords = undefined;
          shipPlacementGuide.textContent = 'Place your cruisers';
          _context2.next = 46;
          return (0,_placingShips__WEBPACK_IMPORTED_MODULE_3__["default"])(playerBoard, 3, direction);
        case 46:
          cruiserCords = _context2.sent;
          playerBoard.placeShips(cruiserCords);
          if (direction == 'vertical') {
            playerBoard.placeShips(cruiserCords + 10);
            playerBoard.placeShips(cruiserCords + 20);
            (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_4__.donotAllowShips)(playerBoard, cruiserCords, [-10, -9, -11, -1], [0, 10, 20, 30, 29, 31, 19, 21, 11, 9, 1], 'vertical');
          } else {
            playerBoard.placeShips(cruiserCords + 1);
            playerBoard.placeShips(cruiserCords + 2);
            (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_4__.donotAllowShips)(playerBoard, cruiserCords, [-1, -10, -11, -9, -8, -7], [9, 10, 11, 12, 13, 0, 1, 2, 3], 'horizontal', 3);
          }
          gameInterface.textContent = '';
          gameInterface.append(shipPlacementGuide, directionChange);
          gameInterface.appendChild((0,_updatePlayerBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(playerBoard));
        case 52:
          i++;
          _context2.next = 41;
          break;
        case 55:
          _i = 0;
        case 56:
          if (!(_i < 2)) {
            _context2.next = 69;
            break;
          }
          shipPlacementGuide.textContent = 'Place your destroyers';
          _context2.next = 60;
          return (0,_placingShips__WEBPACK_IMPORTED_MODULE_3__["default"])(playerBoard, 2, direction);
        case 60:
          destroyerCords = _context2.sent;
          playerBoard.placeShips(destroyerCords);
          if (direction == 'vertical') {
            playerBoard.placeShips(destroyerCords + 10);
            (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_4__.donotAllowShips)(playerBoard, destroyerCords, [-10, -9, -11, -1], [0, 10, 20, 19, 21, 11, 9, 1], 'vertical');
          } else {
            playerBoard.placeShips(destroyerCords + 1);
            (0,_noAdjecent__WEBPACK_IMPORTED_MODULE_4__.donotAllowShips)(playerBoard, destroyerCords, [-1, -10, -11, -9, -8], [9, 10, 11, 12, 0, 1, 2], 'horizontal', 2);
          }
          gameInterface.textContent = '';
          if (_i !== 3) {
            gameInterface.append(shipPlacementGuide, directionChange);
          }
          gameInterface.appendChild((0,_updatePlayerBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(playerBoard));
        case 66:
          _i++;
          _context2.next = 56;
          break;
        case 69:
          gameInterface.textContent = '';
          gameInterface.appendChild((0,_updatePlayerBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(playerBoard));
          gameInfo.appendChild(playerForm);
          runGame = function runGame(e) {
            e.preventDefault();
            if (playerFormInput.value.length > 0) {
              (0,_displayGame__WEBPACK_IMPORTED_MODULE_0__["default"])(playerFormInput.value, playerBoard);
            }
          };
          playerForm.addEventListener('submit', runGame);
        case 74:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function createHomepage() {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomepage);

/***/ }),

/***/ "./src/modules/info.js":
/*!*****************************!*\
  !*** ./src/modules/info.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shipsCount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipsCount */ "./src/modules/shipsCount.js");

var updateInformation = function updateInformation(playerName, playerBoard, computerBoard, message) {
  var gameInfo = document.createElement('div');
  var playerInfo = document.createElement('div');
  playerInfo.classList.add('player-info');
  var pShipsLeft = document.createElement('p');
  var pShipsCount = 0;
  for (var i = 0; i < 100; i++) {
    if (playerBoard.board[i].hasShip && playerBoard.board[i].isHit == false) {
      pShipsCount += 1;
    }
  }
  pShipsLeft.textContent = 'Ships left: ' + ((0,_shipsCount__WEBPACK_IMPORTED_MODULE_0__.countVerticalShips)(playerBoard).shipsCount + (0,_shipsCount__WEBPACK_IMPORTED_MODULE_0__.countHorizontalShips)(playerBoard).shipsCount);
  var pName = document.createElement('h3');
  pName.textContent = playerName;
  playerInfo.append(pName, pShipsLeft);
  var computerInfo = document.createElement('div');
  computerInfo.classList.add('computer-info');
  var cShipsLeft = document.createElement('p');
  var cShipsCount = 0;
  for (var _i = 0; _i < 100; _i++) {
    if (computerBoard.board[_i].hasShip && computerBoard.board[_i].isHit == false) {
      cShipsCount += 1;
    }
  }
  cShipsLeft.textContent = 'Ships left: ' + ((0,_shipsCount__WEBPACK_IMPORTED_MODULE_0__.countVerticalShips)(computerBoard).shipsCount + (0,_shipsCount__WEBPACK_IMPORTED_MODULE_0__.countHorizontalShips)(computerBoard).shipsCount);
  var cName = document.createElement('h3');
  cName.textContent = 'Computer';
  computerInfo.append(cName, cShipsLeft);
  var gameInfoDiv = document.createElement('div');
  var currentGameInfo = document.createElement('h3');
  gameInfoDiv.appendChild(currentGameInfo);
  gameInfoDiv.classList.add('game-info');
  currentGameInfo.textContent = message;
  gameInfo.append(playerInfo, gameInfoDiv, computerInfo);
  return gameInfo;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateInformation);

/***/ }),

/***/ "./src/modules/noAdjecent.js":
/*!***********************************!*\
  !*** ./src/modules/noAdjecent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "donotAllowShips": () => (/* binding */ donotAllowShips)
/* harmony export */ });
var donotAllowShips = function donotAllowShips(playerBoard, cords, cordsMinus, cordsPlus, direction, length) {
  var index;
  if (direction == 'vertical') {
    for (var i = 0; i < cordsMinus.length; i++) {
      index = cords + cordsMinus[i];
      if (index >= 0) {
        if (cords == 0 || cords.toString().split('')[1] == 0) {
          if (index.toString().split('')[1] < 9 || index < 9) {
            playerBoard.board[index].canHaveShip = false;
          }
        } else if (cords == 9 || cords.toString().split('')[1] == 9) {
          if (index.toString().split('')[1] == 0 || index == 0) {
            continue;
          } else {
            playerBoard.board[index].canHaveShip = false;
          }
        } else {
          playerBoard.board[index].canHaveShip = false;
        }
      }
    }
    for (var _i = 0; _i < cordsPlus.length; _i++) {
      index = cords + cordsPlus[_i];
      if (index <= 99) {
        if (cords == 0 || cords.toString().split('')[1] == 0) {
          if (index.toString().split('')[1] < 9 || index < 9) {
            playerBoard.board[index].canHaveShip = false;
          }
        } else if (cords == 9 || cords.toString().split('')[1] == 9) {
          if (index.toString().split('')[1] == 0 || index == 0) {
            continue;
          } else {
            playerBoard.board[index].canHaveShip = false;
          }
        } else {
          playerBoard.board[index].canHaveShip = false;
        }
      }
    }
  } else if (direction == 'horizontal') {
    for (var _i2 = 0; _i2 < cordsMinus.length; _i2++) {
      index = cords + cordsMinus[_i2];
      if (index >= 0) {
        if (cords == 0 || cords.toString().split('')[1] == 0) {
          if (index.toString().split('')[1] < 9 || index < 9) {
            playerBoard.board[index].canHaveShip = false;
          }
        } else if (cords + length - 1 == 9 || Number(cords.toString().split('')[1]) + length - 1 == 9) {
          if (index.toString().split('')[1] == 0 || index == 0) {
            continue;
          } else {
            playerBoard.board[index].canHaveShip = false;
          }
        } else {
          playerBoard.board[index].canHaveShip = false;
        }
      }
    }
    for (var _i3 = 0; _i3 < cordsPlus.length; _i3++) {
      index = cords + cordsPlus[_i3];
      if (index <= 99) {
        if (cords == 0 || cords.toString().split('')[1] == 0) {
          if (index.toString().split('')[1] < 9 || index < 9) {
            playerBoard.board[index].canHaveShip = false;
          }
        } else if (cords + length - 1 == 9 || Number(cords.toString().split('')[1]) + length - 1 == 9) {
          if (index.toString().split('')[1] == 0 || index == 0) {
            continue;
          } else {
            playerBoard.board[index].canHaveShip = false;
          }
        } else {
          playerBoard.board[index].canHaveShip = false;
        }
      }
    }
  }
};

/***/ }),

/***/ "./src/modules/placingShips.js":
/*!*************************************!*\
  !*** ./src/modules/placingShips.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/modules/homepage.js");

var conditionsMet = function conditionsMet(index, direction) {
  if (direction == 'vertical') {
    for (var i = 0; i < length; i++) {
      if (cboard.board[index + i * 10].canHaveShip == false) {
        return false;
      }
    }
  } else if (direction == 'horizontal') {
    for (var _i = 0; _i < length; _i++) {
      if (cboard.board[index + _i].canHaveShip == false) {
        return false;
      }
    }
  }
  return true;
};
var placeShipHomepage = function placeShipHomepage(playerBoard, length) {
  return new Promise(function (resolve, reject) {
    var shipDirection = _homepage__WEBPACK_IMPORTED_MODULE_0__.direction;
    var _loop = function _loop(i) {
      var square = document.getElementById("player".concat(i));
      if (playerBoard.board[i].hasShip == false && playerBoard.board[i].canHaveShip == true) {
        if (shipDirection == 'vertical' && i + (length - 1) * 10 < 100) {
          square.addEventListener('mouseover', function (e) {
            if (shipDirection !== _homepage__WEBPACK_IMPORTED_MODULE_0__.direction) {
              return;
            }
            if (playerBoard.board[i + (length - 1) * 10].canHaveShip && _homepage__WEBPACK_IMPORTED_MODULE_0__.direction == 'vertical') {
              e.target.style.backgroundColor = 'red';
              for (var j = 0; j < length; j++) {
                var nextSquare = document.getElementById("player".concat(i + j * 10));
                nextSquare.style.backgroundColor = 'red';
              }
            }
          });
          square.addEventListener('mouseleave', function (e) {
            if (playerBoard.board[i + (length - 1) * 10].canHaveShip && _homepage__WEBPACK_IMPORTED_MODULE_0__.direction == 'vertical') {
              e.target.style.backgroundColor = '#0369a1';
              for (var j = 0; j < length; j++) {
                var nextSquare = document.getElementById("player".concat(i + j * 10));
                nextSquare.style.backgroundColor = '#0369a1';
              }
            }
          });
        } else if (_homepage__WEBPACK_IMPORTED_MODULE_0__.direction == 'horizontal' && i + (length - 1) < i.toString().split('')[0] * 10 + 10) {
          if (i < 9 && i + length - 1 < 10 || i > 9) {
            square.addEventListener('mouseover', function (e) {
              if (shipDirection !== _homepage__WEBPACK_IMPORTED_MODULE_0__.direction) {
                return;
              }
              if (playerBoard.board[i + length - 1].canHaveShip && _homepage__WEBPACK_IMPORTED_MODULE_0__.direction == 'horizontal') {
                e.target.style.backgroundColor = 'red';
                for (var j = 0; j < length; j++) {
                  var nextSquare = document.getElementById("player".concat(i + j));
                  nextSquare.style.backgroundColor = 'red';
                }
              }
            });
            square.addEventListener('mouseleave', function (e) {
              if (playerBoard.board[i + length - 1].canHaveShip && _homepage__WEBPACK_IMPORTED_MODULE_0__.direction == 'horizontal') {
                e.target.style.backgroundColor = '#0369a1';
                for (var j = 0; j < length; j++) {
                  var nextSquare = document.getElementById("player".concat(i + j));
                  nextSquare.style.backgroundColor = '#0369a1';
                }
              }
            });
          }
        }
        square.addEventListener('click', function (e) {
          if ((i < 9 && i + length - 1 < 10 || i > 9) && playerBoard.board[i + length - 1].canHaveShip && i + (length - 1) < i.toString().split('')[0] * 10 + 10 && _homepage__WEBPACK_IMPORTED_MODULE_0__.direction == 'horizontal') {
            resolve(i);
          } else if (_homepage__WEBPACK_IMPORTED_MODULE_0__.direction == 'vertical' && playerBoard.board[i + (length - 1) * 10].canHaveShip && i + (length - 1) * 10 < 100) {
            resolve(i);
          }
        });
      }
    };
    for (var i = 0; i < 100; i++) {
      _loop(i);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placeShipHomepage);

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var playerFactory = function playerFactory(name) {
  var turn = false;
  return {
    name: name,
    turn: turn
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerFactory);

/***/ }),

/***/ "./src/modules/shipsCount.js":
/*!***********************************!*\
  !*** ./src/modules/shipsCount.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countHorizontalShips": () => (/* binding */ countHorizontalShips),
/* harmony export */   "countVerticalShips": () => (/* binding */ countVerticalShips)
/* harmony export */ });
var countVerticalShips = function countVerticalShips(uboard) {
  var columnIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var shipsCount = 0;
  var shipCords = {};
  var ships = [];
  for (var x in columnIndex) {
    for (var i = columnIndex[x]; i <= columnIndex[x] + 10 + 80; i = i + 10) {
      if (uboard.board[i].hasShip == true && (uboard.board[i + 10] && uboard.board[i + 10].hasShip || uboard.board[i - 10] && uboard.board[i - 10].hasShip)) {
        if (!shipCords[columnIndex[x]]) {
          shipCords[columnIndex[x]] = [];
          shipCords[columnIndex[x]].push(i);
        } else {
          shipCords[columnIndex[x]].push(i);
        }
      }
    }
  }
  for (var key in shipCords) {
    for (var _i = 0; _i < shipCords[key].length; _i++) {
      ships.push([shipCords[key][_i]]);
      while (shipCords[key][_i + 1] == shipCords[key][_i] + 10) {
        _i++;
        ships[ships.length - 1].push(shipCords[key][_i]);
      }
    }
  }
  shipsCount = ships.length;
  for (var _i2 = 0; _i2 < ships.length; _i2++) {
    if (ships[_i2].every(function (cords) {
      return uboard.board[cords].isHit == true;
    })) {
      shipsCount -= 1;
    }
  }
  return {
    shipsCount: shipsCount
  };
};
var countHorizontalShips = function countHorizontalShips(uboard) {
  var columnIndex = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  var shipsCount = 0;
  var shipCords = {};
  var ships = [];
  for (var x in columnIndex) {
    for (var i = columnIndex[x]; i <= columnIndex[x] + 9; i = i + 1) {
      if (uboard.board[i].hasShip == true && (uboard.board[i + 1] && uboard.board[i + 1].hasShip && i + 1 <= columnIndex[x] + 9 || uboard.board[i - 1] && uboard.board[i - 1].hasShip && i - 1 >= columnIndex[x])) {
        if (!shipCords[columnIndex[x]]) {
          shipCords[columnIndex[x]] = [];
          shipCords[columnIndex[x]].push(i);
        } else {
          shipCords[columnIndex[x]].push(i);
        }
      }
    }
  }
  for (var key in shipCords) {
    for (var _i3 = 0; _i3 < shipCords[key].length; _i3++) {
      ships.push([shipCords[key][_i3]]);
      while (shipCords[key][_i3 + 1] == shipCords[key][_i3] + 1) {
        _i3++;
        ships[ships.length - 1].push(shipCords[key][_i3]);
      }
    }
  }
  shipsCount = ships.length;
  for (var _i4 = 0; _i4 < ships.length; _i4++) {
    if (ships[_i4].every(function (cords) {
      return uboard.board[cords].isHit == true;
    })) {
      shipsCount -= 1;
    }
  }
  return {
    shipsCount: shipsCount
  };
};

/***/ }),

/***/ "./src/modules/updateComputerBoard.js":
/*!********************************************!*\
  !*** ./src/modules/updateComputerBoard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var updateComputerBoard = function updateComputerBoard(computerBoard) {
  var computerBoardInterface = document.createElement('div');
  computerBoardInterface.classList.add('computer-board');
  for (var i = 0; i < 100; i++) {
    var square = document.createElement('div');
    var icon = document.createElement('i');
    square.appendChild(icon);
    square.style.width = '30px';
    square.style.height = '30px';
    square.style.border = '2px solid white';
    square.classList.add('square');
    square.setAttribute('id', i);
    if (computerBoard.board[i].isHit) {
      square.style.backgroundColor = 'red';
    }
    if (computerBoard.board[i].isMissed) {
      square.style.backgroundColor = 'white';
    }
    computerBoardInterface.appendChild(square);
  }
  computerBoardInterface.style.display = 'grid';
  computerBoardInterface.style.gridTemplateColumns = 'repeat(10, 30px)';
  computerBoardInterface.style.gap = '4px';
  return computerBoardInterface;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateComputerBoard);

/***/ }),

/***/ "./src/modules/updatePlayerBoard.js":
/*!******************************************!*\
  !*** ./src/modules/updatePlayerBoard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var updatePlayerBoard = function updatePlayerBoard(playerBoard) {
  var playerBoardInterface = document.createElement('div');
  playerBoardInterface.classList.add('player-board');
  for (var i = 0; i < 100; i++) {
    var square = document.createElement('div');
    square.style.width = '30px';
    square.style.height = '30px';
    square.style.border = '2px solid white';
    square.classList.add('square');
    square.setAttribute('id', "player".concat(i));
    if (playerBoard.board[i].hasShip) {
      square.style.backgroundColor = 'blue';
    }
    if (playerBoard.board[i].isHit) {
      square.style.backgroundColor = 'red';
    }
    if (playerBoard.board[i].isMissed) {
      square.style.backgroundColor = 'white';
    }
    playerBoardInterface.appendChild(square);
  }
  playerBoardInterface.style.display = 'grid';
  playerBoardInterface.style.gridTemplateColumns = 'repeat(10, 30px)';
  playerBoardInterface.style.gap = '4px';
  return playerBoardInterface;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updatePlayerBoard);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".game-interface {\n  margin: 2em 0;\n  display: flex;\n  justify-content: space-between;\n  margin-inline: auto;\n  width: 50em;\n}\n.game-interface h3 {\n  font-size: 1.5rem;\n  color: white;\n}\n.game-interface button {\n  font-size: 16px;\n  padding: 0.25em 1em;\n}\n\n.homepage-board {\n  flex-direction: column;\n  align-items: center;\n  order: 1;\n  gap: 16px;\n}\n\n@media screen and (max-width: 850px) {\n  .game-interface {\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n  }\n}\nheader {\n  padding: 4em 3em;\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\nheader h1 {\n  font-size: 3rem;\n  color: white;\n  font-family: \"Oswald\", sans-serif;\n}\nheader button {\n  position: absolute;\n  text-align: center;\n  font-size: 16px;\n  padding: 0.25em 1em;\n  cursor: pointer;\n  right: 3em;\n}\n\n@media screen and (max-width: 850px) {\n  header {\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n  }\n  header button {\n    position: relative;\n    right: 0;\n  }\n}\n.info {\n  display: flex;\n  width: 50em;\n  margin-inline: auto;\n  justify-content: center;\n}\n.info form {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 16px;\n}\n.info form label {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: white;\n}\n.info form input {\n  font-size: 16px;\n  padding: 0.25em 1em;\n  outline: none;\n}\n.info form button {\n  font-size: 16px;\n  padding: 0.25em 1em;\n}\n.info div {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  color: white;\n  gap: 16px;\n}\n.info div h3 {\n  font-size: 1.5rem;\n}\n.info div p {\n  font-size: 16px;\n}\n.info div .game-info {\n  display: flex;\n  justify-content: center;\n}\n.info div .player-info {\n  gap: 4px;\n  display: flex;\n  flex-direction: column;\n  flex-basis: 20%;\n}\n.info div .computer-info {\n  gap: 4px;\n  align-items: flex-end;\n  flex-direction: column;\n  flex-basis: 20%;\n  display: flex;\n}\n\n.homepage-info {\n  order: 2;\n}\n\n@media screen and (max-width: 850px) {\n  .info {\n    width: 100%;\n    margin: 0;\n  }\n  .info div {\n    flex-direction: column;\n    align-items: center;\n  }\n  .info div .computer-info {\n    align-items: center;\n  }\n}\n.container {\n  display: flex;\n  flex-direction: column;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: \"Lato\", sans-serif;\n}\n\n.container {\n  background-color: #0369a1;\n  width: 100%;\n  height: 100vh;\n}\n\n@media screen and (max-width: 850px) {\n  .container {\n    height: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/board.scss","webpack://./src/main.scss","webpack://./src/styles/header.scss","webpack://./src/styles/homepage.scss","webpack://./src/styles/index.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;ACCJ;ADAI;EACI,iBAAA;EACA,YAAA;ACER;ADAI;EACI,eAAA;EACA,mBAAA;ACER;;ADEA;EACI,sBAAA;EACA,mBAAA;EACA,QAAA;EACA,SAAA;ACCJ;;ADEA;EACI;IACI,WAAA;IACA,sBAAA;IACA,mBAAA;IACA,SAAA;ECCN;AACF;AC9BA;EACI,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;ADgCJ;AC/BI;EACI,eAAA;EACA,YAAA;EACA,iCAAA;ADiCR;AC/BI;EACI,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,eAAA;EACA,UAAA;ADiCR;;AC7BA;EACI;IACI,sBAAA;IACA,mBAAA;IACA,SAAA;EDgCN;EC/BM;IACI,kBAAA;IACA,QAAA;EDiCV;AACF;AE7DA;EACI,aAAA;EACA,WAAA;EACA,mBAAA;EACA,uBAAA;AF+DJ;AE9DI;EACI,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,SAAA;AFgER;AE/DQ;EACI,iBAAA;EACA,iBAAA;EACA,YAAA;AFiEZ;AE/DQ;EACI,eAAA;EACA,mBAAA;EACA,aAAA;AFiEZ;AE/DQ;EACI,eAAA;EACA,mBAAA;AFiEZ;AE9DI;EACI,aAAA;EACA,WAAA;EACA,8BAAA;EACA,YAAA;EACA,SAAA;AFgER;AE/DQ;EACI,iBAAA;AFiEZ;AE/DQ;EACI,eAAA;AFiEZ;AE/DQ;EACI,aAAA;EACA,uBAAA;AFiEZ;AE/DQ;EACI,QAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;AFiEZ;AE/DQ;EACI,QAAA;EACA,qBAAA;EACA,sBAAA;EACA,eAAA;EACA,aAAA;AFiEZ;;AE5DA;EACI,QAAA;AF+DJ;;AE3DA;EACI;IACI,WAAA;IACA,SAAA;EF8DN;EE7DM;IACI,sBAAA;IACA,mBAAA;EF+DV;EE9DU;IACI,mBAAA;EFgEd;AACF;AGnIA;EACI,aAAA;EACA,sBAAA;AHqIJ;;AAzIA;EACI,sBAAA;EACA,UAAA;EACA,SAAA;EACA,+BAAA;AA4IJ;;AA1IA;EACI,yBAAA;EACA,WAAA;EACA,aAAA;AA6IJ;;AA1IA;EACI;IACI,YAAA;EA6IN;AACF","sourcesContent":[".game-interface {\n    margin: 2em 0;\n    display: flex;\n    justify-content: space-between;\n    margin-inline: auto;\n    width: 50em;\n    h3 {\n        font-size: 1.5rem;\n        color: white;\n    }\n    button {\n        font-size: 16px;\n        padding: 0.25em 1em;\n    }\n}\n\n.homepage-board {\n    flex-direction: column;\n    align-items: center;\n    order: 1;\n    gap: 16px;\n}\n\n@media screen and (max-width: 850px) {\n    .game-interface {\n        width: 100%;\n        flex-direction: column;\n        align-items: center;\n        gap: 16px;\n    }\n}\n","@use './styles';\n\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Lato', sans-serif;\n}\n.container {\n    background-color: #0369a1;\n    width: 100%;\n    height: 100vh;\n}\n\n@media screen and (max-width: 850px) {\n    .container {\n        height: 100%;\n    }\n}\n","header {\n    padding: 4em 3em;\n    display: flex;\n    justify-content: center;\n    position: relative;\n    h1 {\n        font-size: 3rem;\n        color: white;\n        font-family: 'Oswald', sans-serif;\n    }\n    button {\n        position: absolute;\n        text-align: center;\n        font-size: 16px;\n        padding: 0.25em 1em;\n        cursor: pointer;\n        right: 3em;\n    }\n}\n\n@media screen and (max-width: 850px) {\n    header {\n        flex-direction: column;\n        align-items: center;\n        gap: 16px;\n        button {\n            position: relative;\n            right: 0;\n        }\n    }\n}\n",".info {\n    display: flex;\n    width: 50em;\n    margin-inline: auto;\n    justify-content: center;\n    form {\n        display: flex;\n        flex-direction: column;\n        text-align: center;\n        gap: 16px;\n        label {\n            font-size: 1.5rem;\n            font-weight: bold;\n            color: white;\n        }\n        input {\n            font-size: 16px;\n            padding: 0.25em 1em;\n            outline: none;\n        }\n        button {\n            font-size: 16px;\n            padding: 0.25em 1em;\n        }\n    }\n    div {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        color: white;\n        gap: 16px;\n        h3 {\n            font-size: 1.5rem;\n        }\n        p {\n            font-size: 16px;\n        }\n        .game-info {\n            display: flex;\n            justify-content: center;\n        }\n        .player-info {\n            gap: 4px;\n            display: flex;\n            flex-direction: column;\n            flex-basis: 20%;\n        }\n        .computer-info {\n            gap: 4px;\n            align-items: flex-end;\n            flex-direction: column;\n            flex-basis: 20%;\n            display: flex;\n        }\n    }\n}\n\n.homepage-info {\n    order: 2;\n}\n\n\n@media screen and (max-width: 850px) {\n    .info {\n        width: 100%;\n        margin: 0;\n        div {\n            flex-direction: column;\n            align-items: center;\n            .computer-info {\n                align-items: center;\n            }\n        }\n    }   \n}","@forward './board.scss';\n@forward './header.scss';\n@forward './homepage.scss';\n\n.container {\n    display: flex;\n    flex-direction: column;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ "./src/modules/header.js");
/* harmony import */ var _modules_homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/homepage */ "./src/modules/homepage.js");



var header = document.querySelector('header');
(0,_modules_homepage__WEBPACK_IMPORTED_MODULE_2__["default"])();
header.appendChild((0,_modules_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNsQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM3QyxZQUFZLEVBQ1osQ0FBQyxDQUNKO0VBQ0wsQ0FBQyxNQUFNLElBQUlELFNBQVMsSUFBSSxZQUFZLElBQUlELE1BQU0sSUFBSSxDQUFDLEVBQUU7SUFDakRILDREQUFlLENBQ1hFLE1BQU0sRUFDTkcsS0FBSyxFQUNMLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3RDLFlBQVksRUFDWixDQUFDLENBQ0o7RUFDTCxDQUFDLE1BQU0sSUFBSUQsU0FBUyxJQUFJLFlBQVksSUFBSUQsTUFBTSxJQUFJLENBQUMsRUFBRTtJQUNqREgsNERBQWUsQ0FDWEUsTUFBTSxFQUNORyxLQUFLLEVBQ0wsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUMxQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQy9CLFlBQVksRUFDWixDQUFDLENBQ0o7RUFDTCxDQUFDLE1BQU0s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QUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3VCO0FBQ0k7QUFFaEQsSUFBTU8sTUFBTSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFFL0NILDZEQUFjLEVBQUU7QUFDaEJLLE1BQU0sQ0FBQ0csV0FBVyxDQUFDYiwyREFBWSxFQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY29tcHV0ZXJTaGlwUGxhY2VtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5R2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2hvbWVwYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9pbmZvLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ub0FkamVjZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGFjaW5nU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcHNDb3VudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdXBkYXRlQ29tcHV0ZXJCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdXBkYXRlUGxheWVyQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5zY3NzPzRlNTMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbXB1dGVyRmFjdG9yeSA9ICgpID0+IHtcbiAgICBsZXQgdHVybiA9IGZhbHNlO1xuICAgIHJldHVybiB7IHR1cm4gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXB1dGVyRmFjdG9yeTtcbiIsImltcG9ydCB7IGRvbm90QWxsb3dTaGlwcyB9IGZyb20gJy4vbm9BZGplY2VudCc7XG5leHBvcnQgY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKGNib2FyZCwgbGVuZ3RoLCBkaXJlY3Rpb24pID0+IHtcbiAgICBsZXQgaW5kZXg7XG4gICAgY29uc3QgY29uZGl0aW9uc01ldCA9IChpbmRleCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjYm9hcmQuYm9hcmRbaW5kZXggKyBpICogMTBdLmNhbkhhdmVTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjYm9hcmQuYm9hcmRbaW5kZXggKyBpXS5jYW5IYXZlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgaWYgKGRpcmVjdGlvbiA9PSAndmVydGljYWwnKSB7XG4gICAgICAgIGluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOTkpO1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBpbmRleCArIGxlbmd0aCAqIDEwID4gMTAwIHx8XG4gICAgICAgICAgICBjb25kaXRpb25zTWV0KGluZGV4LCAndmVydGljYWwnKSA9PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOTkpO1xuICAgICAgICB9XG4gICAgICAgIGNib2FyZC5wbGFjZVNoaXBzKGluZGV4KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2JvYXJkLnBsYWNlU2hpcHMoaW5kZXggKyBpICogMTApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOTkpO1xuICAgICAgICBjb25zdCBjb25kaXRpb24yID0gKGluZGV4LCBsZW5ndGgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA8PSA5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUnKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggKyAobGVuZ3RoIC0gMSkgPj0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBjb25kaXRpb24yKGluZGV4LCBsZW5ndGgpID09IGZhbHNlIHx8XG4gICAgICAgICAgICBpbmRleCArIChsZW5ndGggLSAxKSA+PSBpbmRleC50b1N0cmluZygpLnNwbGl0KCcnKVswXSAqIDEwICsgMTAgfHxcbiAgICAgICAgICAgIGNvbmRpdGlvbnNNZXQoaW5kZXgsICdob3Jpem9udGFsJykgPT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDk5KTtcbiAgICAgICAgfVxuICAgICAgICBjYm9hcmQucGxhY2VTaGlwcyhpbmRleCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNib2FyZC5wbGFjZVNoaXBzKGluZGV4ICsgaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PSAndmVydGljYWwnICYmIGxlbmd0aCA9PSA1KSB7XG4gICAgICAgIGRvbm90QWxsb3dTaGlwcyhcbiAgICAgICAgICAgIGNib2FyZCxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgWy0xMCwgLTksIC0xMSwgLTFdLFxuICAgICAgICAgICAgWzAsIDEwLCAyMCwgMzAsIDQwLCA0OSwgNTAsIDUxLCAzOSwgNDEsIDI5LCAzMSwgMTksIDIxLCAxMSwgOSwgMV0sXG4gICAgICAgICAgICAndmVydGljYWwnXG4gICAgICAgICk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ3ZlcnRpY2FsJyAmJiBsZW5ndGggPT0gNCkge1xuICAgICAgICBkb25vdEFsbG93U2hpcHMoXG4gICAgICAgICAgICBjYm9hcmQsXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIFstMTAsIC05LCAtMTEsIC0xXSxcbiAgICAgICAgICAgIFswLCAxMCwgMjAsIDMwLCA0MCwgMzksIDQxLCAyOSwgMzEsIDE5LCAyMSwgMTEsIDksIDFdLFxuICAgICAgICAgICAgJ3ZlcnRpY2FsJ1xuICAgICAgICApO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09ICd2ZXJ0aWNhbCcgJiYgbGVuZ3RoID09IDMpIHtcbiAgICAgICAgZG9ub3RBbGxvd1NoaXBzKFxuICAgICAgICAgICAgY2JvYXJkLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBbLTEwLCAtOSwgLTExLCAtMV0sXG4gICAgICAgICAgICBbMCwgMTAsIDIwLCAzMCwgMjksIDMxLCAxOSwgMjEsIDExLCA5LCAxXSxcbiAgICAgICAgICAgICd2ZXJ0aWNhbCdcbiAgICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAndmVydGljYWwnICYmIGxlbmd0aCA9PSAyKSB7XG4gICAgICAgIGRvbm90QWxsb3dTaGlwcyhcbiAgICAgICAgICAgIGNib2FyZCxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgWy0xMCwgLTksIC0xMSwgLTFdLFxuICAgICAgICAgICAgWzAsIDEwLCAyMCwgMTksIDIxLCAxMSwgOSwgMV0sXG4gICAgICAgICAgICAndmVydGljYWwnXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnICYmIGxlbmd0aCA9PSA1KSB7XG4gICAgICAgIGRvbm90QWxsb3dTaGlwcyhcbiAgICAgICAgICAgIGNib2FyZCxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgWy0xLCAtMTAsIC0xMSwgLTksIC04LCAtNywgLTYsIC01XSxcbiAgICAgICAgICAgIFs1LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAwLCAxLCAyLCAzLCA0XSxcbiAgICAgICAgICAgICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIDVcbiAgICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAnaG9yaXpvbnRhbCcgJiYgbGVuZ3RoID09IDQpIHtcbiAgICAgICAgZG9ub3RBbGxvd1NoaXBzKFxuICAgICAgICAgICAgY2JvYXJkLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBbLTEsIC0xMCwgLTExLCAtOSwgLTgsIC03LCAtNl0sXG4gICAgICAgICAgICBbNCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAwLCAxLCAyLCAzXSxcbiAgICAgICAgICAgICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIDRcbiAgICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAnaG9yaXpvbnRhbCcgJiYgbGVuZ3RoID09IDMpIHtcbiAgICAgICAgZG9ub3RBbGxvd1NoaXBzKFxuICAgICAgICAgICAgY2JvYXJkLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBbLTEsIC0xMCwgLTExLCAtOSwgLTgsIC03XSxcbiAgICAgICAgICAgIFs5LCAxMCwgMTEsIDEyLCAxMywgMCwgMSwgMiwgM10sXG4gICAgICAgICAgICAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICAzXG4gICAgICAgICk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnICYmIGxlbmd0aCA9PSAyKSB7XG4gICAgICAgIGRvbm90QWxsb3dTaGlwcyhcbiAgICAgICAgICAgIGNib2FyZCxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgWy0xLCAtMTAsIC0xMSwgLTksIC04XSxcbiAgICAgICAgICAgIFs5LCAxMCwgMTEsIDEyLCAwLCAxLCAyXSxcbiAgICAgICAgICAgICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIDJcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xufTtcbiIsImltcG9ydCB7IGNoYW5nZUdhbWVTdGF0dXMsIHN0YXJ0R2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBwbGF5ZXJGYWN0b3J5IGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBjb21wdXRlckZhY3RvcnkgZnJvbSAnLi9jb21wdXRlcic7XG5pbXBvcnQgZ2FtZWJvYXJkRmFjdG9yeSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgdXBkYXRlUGxheWVyQm9hcmQgZnJvbSAnLi91cGRhdGVQbGF5ZXJCb2FyZCc7XG5pbXBvcnQgdXBkYXRlQ29tcHV0ZXJCb2FyZCBmcm9tICcuL3VwZGF0ZUNvbXB1dGVyQm9hcmQnO1xuaW1wb3J0IGNyZWF0ZUhvbWVwYWdlIGZyb20gJy4vaG9tZXBhZ2UnO1xuaW1wb3J0IHsgcGxhY2VTaGlwc1JhbmRvbWx5IH0gZnJvbSAnLi9jb21wdXRlclNoaXBQbGFjZW1lbnQnO1xuXG5jb25zdCBnYW1lSW50ZXJmYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtaW50ZXJmYWNlJyk7XG5jb25zdCBnYW1lSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcblxuY29uc3QgdG9Ib21lcGFnZSA9ICgpID0+IHtcbiAgICBjaGFuZ2VHYW1lU3RhdHVzKCk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgZ2FtZUluZm8udGV4dENvbnRlbnQgPSAnJztcbiAgICBnYW1lSW50ZXJmYWNlLnRleHRDb250ZW50ID0gJyc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBjcmVhdGVIb21lcGFnZSgpO1xufTtcblxuY29uc3QgcmFuZG9tRGlyID0gKCkgPT4ge1xuICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XG4gICAgfVxufTtcblxuY29uc3QgZGlzcGxheUdhbWUgPSAocGxheWVyTmFtZSwgcGxheWVyQm9hcmQpID0+IHtcbiAgICBjb25zdCBnb0JhY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBnb0JhY2tCdXR0b24udGV4dENvbnRlbnQgPSAnVG8gbWFpbiBtZW51JztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZ29CYWNrQnV0dG9uKTtcbiAgICBnb0JhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b0hvbWVwYWdlKTtcbiAgICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJGYWN0b3J5KHBsYXllck5hbWUpO1xuICAgIHBsYXllci50dXJuID0gdHJ1ZTtcbiAgICBjb25zdCBjb21wdXRlciA9IGNvbXB1dGVyRmFjdG9yeSgpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4gICAgbGV0IGRpcmVjdGlvbjtcbiAgICBkaXJlY3Rpb24gPSByYW5kb21EaXIoKTtcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHkoY29tcHV0ZXJCb2FyZCwgNSwgJ2hvcml6b250YWwnKTtcbiAgICBkaXJlY3Rpb24gPSByYW5kb21EaXIoKTtcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHkoY29tcHV0ZXJCb2FyZCwgNCwgJ2hvcml6b250YWwnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBkaXJlY3Rpb24gPSByYW5kb21EaXIoKTtcbiAgICAgICAgcGxhY2VTaGlwc1JhbmRvbWx5KGNvbXB1dGVyQm9hcmQsIDMsICdob3Jpem9udGFsJyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9IHJhbmRvbURpcigpO1xuICAgICAgICBwbGFjZVNoaXBzUmFuZG9tbHkoY29tcHV0ZXJCb2FyZCwgMiwgJ2hvcml6b250YWwnKTtcbiAgICB9XG5cblxuICAgIGdhbWVJbnRlcmZhY2UudGV4dENvbnRlbnQgPSAnJztcbiAgICBnYW1lSW5mby5jbGFzc0xpc3QucmVtb3ZlKCdob21lcGFnZS1pbmZvJyk7XG4gICAgZ2FtZUludGVyZmFjZS5jbGFzc0xpc3QucmVtb3ZlKCdob21lcGFnZS1ib2FyZCcpO1xuICAgIGdhbWVJbnRlcmZhY2UuYXBwZW5kQ2hpbGQodXBkYXRlUGxheWVyQm9hcmQocGxheWVyQm9hcmQpKTtcbiAgICBnYW1lSW50ZXJmYWNlLmFwcGVuZENoaWxkKFxuICAgICAgICB1cGRhdGVDb21wdXRlckJvYXJkKGNvbXB1dGVyQm9hcmQsIGNvbXB1dGVyLCBwbGF5ZXIpXG4gICAgKTtcbiAgICBjaGFuZ2VHYW1lU3RhdHVzKCk7XG4gICAgc3RhcnRHYW1lKHBsYXllciwgY29tcHV0ZXIsIHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlHYW1lO1xuIiwiaW1wb3J0IHVwZGF0ZVBsYXllckJvYXJkIGZyb20gJy4vdXBkYXRlUGxheWVyQm9hcmQnO1xuaW1wb3J0IHVwZGF0ZUNvbXB1dGVyQm9hcmQgZnJvbSAnLi91cGRhdGVDb21wdXRlckJvYXJkJztcbmltcG9ydCB1cGRhdGVJbmZvcm1hdGlvbiBmcm9tICcuL2luZm8nO1xuXG5sZXQgZ2FtZVN0YXR1cyA9IDA7XG5leHBvcnQgY29uc3QgY2hhbmdlR2FtZVN0YXR1cyA9ICgpID0+IHtcbiAgICBpZiAoZ2FtZVN0YXR1cyA9PSAwKSB7XG4gICAgICAgIGdhbWVTdGF0dXMgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWVTdGF0dXMgPSAwO1xuICAgIH1cbn07XG5cbmNvbnN0IGdldFVzZXJNb3ZlID0gKGNvbXB1dGVyQm9hcmQpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5ib2FyZFtpXS5pc0hpdCA9PSBmYWxzZSAmJlxuICAgICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuYm9hcmRbaV0uaXNNaXNzZWQgPT0gZmFsc2VcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGUudGFyZ2V0LmlkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuY29uc3QgZ2FtZUludGVyZmFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWludGVyZmFjZScpO1xuY29uc3QgZ2FtZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRHYW1lID0gYXN5bmMgKFxuICAgIHBsYXllcixcbiAgICBjb21wdXRlcixcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBjb21wdXRlckJvYXJkXG4pID0+IHtcbiAgICB3aGlsZSAoXG4gICAgICAgIHBsYXllckJvYXJkLmFyZUFsbFN1bmsoKSA9PSBmYWxzZSAmJlxuICAgICAgICBjb21wdXRlckJvYXJkLmFyZUFsbFN1bmsoKSA9PSBmYWxzZVxuICAgICkge1xuICAgICAgICBpZiAocGxheWVyLnR1cm4pIHtcbiAgICAgICAgICAgIGdhbWVJbmZvLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBnYW1lSW5mby5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICB1cGRhdGVJbmZvcm1hdGlvbihcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkLFxuICAgICAgICAgICAgICAgICAgICBgJHtwbGF5ZXIubmFtZX0gaXMgYXR0ZW1wdGluZyBhbiBhdHRhY2suLi5gXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCB1c2VyTW92ZSA9IGF3YWl0IGdldFVzZXJNb3ZlKGNvbXB1dGVyQm9hcmQpO1xuICAgICAgICAgICAgaWYgKGdhbWVTdGF0dXMgPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdhbWVJbmZvLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBnYW1lSW50ZXJmYWNlLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY29tcHV0ZXJCb2FyZC5yZWNpZXZlQXR0YWNrKHVzZXJNb3ZlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gJ1lvdSBtaXNzZWQnKSB7XG4gICAgICAgICAgICAgICAgZ2FtZUluZm8uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUluZm9ybWF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtwbGF5ZXIubmFtZX0gbWlzc2VkIWBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PSBgWW91IG1hbmFnZWQgdG8gaGl0IGEgc2hpcCBvbiBzcXVhcmUgJHt1c2VyTW92ZX1gXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBnYW1lSW5mby5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlSW5mb3JtYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJCb2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3BsYXllci5uYW1lfSBtYW5hZ2VkIHRvIGhpdCBhIHNoaXAgb24gc3F1YXJlICR7dXNlck1vdmV9YFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdhbWVJbnRlcmZhY2UuYXBwZW5kQ2hpbGQodXBkYXRlUGxheWVyQm9hcmQocGxheWVyQm9hcmQpKTtcbiAgICAgICAgICAgIGdhbWVJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgdXBkYXRlQ29tcHV0ZXJCb2FyZChjb21wdXRlckJvYXJkLCBjb21wdXRlciwgcGxheWVyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZVBsYXllciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJ2NvbXB1dGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCB0dXJuID0gYXdhaXQgY2hhbmdlUGxheWVyKCk7XG4gICAgICAgICAgICBpZiAodHVybiA9PSAnY29tcHV0ZXInKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb21wdXRlci50dXJuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb21wdXRlci50dXJuKSB7XG4gICAgICAgICAgICBnYW1lSW5mby50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgZ2FtZUluZm8uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgdXBkYXRlSW5mb3JtYXRpb24oXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJCb2FyZCxcbiAgICAgICAgICAgICAgICAgICAgYENvbXB1dGVyIGlzIGF0dGVtcHRpbmcgYW4gYXR0YWNrLi4uYFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgcG9zc2libGVDb3JkcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQuYm9hcmRbaV0uaXNIaXQgPT0gZmFsc2UgJiZcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQuYm9hcmRbaV0uaXNNaXNzZWQgPT0gZmFsc2VcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDb3Jkcy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGdldFJhbmRvbUNvcmRzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNvcmRzLmZpbHRlcigoY29yZCkgPT4gY29yZCA9PSBpbmRleCkgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDI1MDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCByYW5kb21Db3JkcyA9IGF3YWl0IGdldFJhbmRvbUNvcmRzKCk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcGxheWVyQm9hcmQucmVjaWV2ZUF0dGFjayhyYW5kb21Db3Jkcyk7XG4gICAgICAgICAgICBpZiAoZ2FtZVN0YXR1cyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZUluZm8udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGdhbWVJbnRlcmZhY2UudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gJ1lvdSBtaXNzZWQnKSB7XG4gICAgICAgICAgICAgICAgZ2FtZUluZm8uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUluZm9ybWF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBgQ29tcHV0ZXIgbWlzc2VkIWBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PSBgWW91IG1hbmFnZWQgdG8gaGl0IGEgc2hpcCBvbiBzcXVhcmUgJHtyYW5kb21Db3Jkc31gXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBnYW1lSW5mby5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlSW5mb3JtYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJCb2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGBDb21wdXRlciBtYW5hZ2VkIHRvIGhpdCBhIHNoaXAgb24gc3F1YXJlICR7cmFuZG9tQ29yZHN9YFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdhbWVJbnRlcmZhY2UuYXBwZW5kQ2hpbGQodXBkYXRlUGxheWVyQm9hcmQocGxheWVyQm9hcmQpKTtcbiAgICAgICAgICAgIGdhbWVJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgdXBkYXRlQ29tcHV0ZXJCb2FyZChjb21wdXRlckJvYXJkLCBjb21wdXRlciwgcGxheWVyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZVBsYXllciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJ3BsYXllcicpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgdHVybiA9IGF3YWl0IGNoYW5nZVBsYXllcigpO1xuICAgICAgICAgICAgaWYgKHR1cm4gPT0gJ3BsYXllcicpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29tcHV0ZXIudHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5hcmVBbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIGdhbWVJbmZvLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBnYW1lSW5mby5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICB1cGRhdGVJbmZvcm1hdGlvbihcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkLFxuICAgICAgICAgICAgICAgICAgICBgQ29tcHV0ZXIgd29uIWBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wdXRlckJvYXJkLmFyZUFsbFN1bmsoKSkge1xuICAgICAgICAgICAgZ2FtZUluZm8udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGdhbWVJbmZvLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIHVwZGF0ZUluZm9ybWF0aW9uKFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQsXG4gICAgICAgICAgICAgICAgICAgIGAke3BsYXllci5uYW1lfSB3b24hYFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgIGNvbnN0IGhpdCA9IFtdO1xuICAgIGNvbnN0IG1pc3NlZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgYm9hcmQucHVzaCh7IGlzSGl0OiBmYWxzZSwgaGFzU2hpcDogZmFsc2UsIGlzTWlzc2VkOiBmYWxzZSwgY2FuSGF2ZVNoaXA6IHRydWUgfSk7XG4gICAgfVxuICAgIGNvbnN0IHBsYWNlU2hpcHMgPSAoY29yZHMpID0+IHtcbiAgICAgICAgaWYgKGJvYXJkW2NvcmRzXS5oYXNTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICBib2FyZFtjb3Jkc10uaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmRbY29yZHNdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnU2hpcCBhbHJlYWR5IHBsYWNlZCc7XG4gICAgfTtcbiAgICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGNvcmRzKSA9PiB7XG4gICAgICAgIGlmIChjb3JkcyA8IDAgfHwgY29yZHMgPiA5OSkge1xuICAgICAgICAgICAgcmV0dXJuICdObyBzdWNoIGNvcmRzJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9hcmRbY29yZHNdLmhhc1NoaXAgPT0gdHJ1ZSAmJiBib2FyZFtjb3Jkc10uaXNIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJvYXJkW2NvcmRzXS5pc0hpdCA9IHRydWU7XG4gICAgICAgICAgICBoaXQucHVzaChjb3Jkcyk7XG4gICAgICAgICAgICByZXR1cm4gYFlvdSBtYW5hZ2VkIHRvIGhpdCBhIHNoaXAgb24gc3F1YXJlICR7Y29yZHN9YDtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGJvYXJkW2NvcmRzXS5oYXNTaGlwID09IGZhbHNlICYmXG4gICAgICAgICAgICBib2FyZFtjb3Jkc10uaXNIaXQgPT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBib2FyZFtjb3Jkc10uaXNNaXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgbWlzc2VkLnB1c2goY29yZHMpO1xuICAgICAgICAgICAgcmV0dXJuICdZb3UgbWlzc2VkJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ1NxdWFyZSBhbHJlYWR5IGF0dGFja2VkJztcbiAgICB9O1xuICAgIGNvbnN0IGFyZUFsbFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChib2FyZFtpXS5oYXNTaGlwID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV0uaXNIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIHJldHVybiB7IGJvYXJkLCBtaXNzZWQsIGhpdCwgcGxhY2VTaGlwcywgcmVjaWV2ZUF0dGFjaywgYXJlQWxsU3VuayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkRmFjdG9yeTtcbiIsImNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBcIlxuICAgIHJldHVybiBwYWdlVGl0bGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyOyIsImltcG9ydCBkaXNwbGF5R2FtZSBmcm9tICcuL2Rpc3BsYXlHYW1lJztcbmltcG9ydCBnYW1lYm9hcmRGYWN0b3J5IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB1cGRhdGVQbGF5ZXJCb2FyZCBmcm9tICcuL3VwZGF0ZVBsYXllckJvYXJkJztcbmltcG9ydCBwbGFjZVNoaXBIb21lcGFnZSBmcm9tICcuL3BsYWNpbmdTaGlwcyc7XG5pbXBvcnQgeyBkb25vdEFsbG93U2hpcHMgfSBmcm9tICcuL25vQWRqZWNlbnQnO1xuXG5leHBvcnQgbGV0IGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XG5jb25zdCBnYW1lSW50ZXJmYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtaW50ZXJmYWNlJyk7XG5jb25zdCBnYW1lSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJyk7XG5cbmNvbnN0IGNyZWF0ZUhvbWVwYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbkNoYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRpcmVjdGlvbkNoYW5nZS5jbGFzc0xpc3QuYWRkKCdkaXJlY3Rpb24nKTtcbiAgICBkaXJlY3Rpb25DaGFuZ2UudGV4dENvbnRlbnQgPSAnUm90YXRlIHRoZSBzaGlwJztcbiAgICBjb25zdCBwbGF5ZXJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IHBsYXllckZvcm1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcGxheWVyRm9ybUxhYmVsLnRleHRDb250ZW50ID0gJ0lucHV0IHBsYXllciBuYW1lJztcbiAgICBjb25zdCBwbGF5ZXJGb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHBsYXllckZvcm1JbnB1dC5tYXhMZW5ndGggPSAnMjAnO1xuICAgIHBsYXllckZvcm1JbnB1dC5wbGFjZWhvbGRlciA9ICdKb2hubnknO1xuICAgIGNvbnN0IHBsYXllckZvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwbGF5ZXJGb3JtU3VibWl0LnRleHRDb250ZW50ID0gJ1N0YXJ0IGdhbWUnO1xuICAgIHBsYXllckZvcm0uYXBwZW5kKHBsYXllckZvcm1MYWJlbCwgcGxheWVyRm9ybUlucHV0LCBwbGF5ZXJGb3JtU3VibWl0KTtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbiAgICBnYW1lSW5mby5jbGFzc0xpc3QuYWRkKCdob21lcGFnZS1pbmZvJyk7XG4gICAgZ2FtZUludGVyZmFjZS5jbGFzc0xpc3QuYWRkKCdob21lcGFnZS1ib2FyZCcpO1xuXG4gICAgY29uc3QgY291bnRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHNoaXBDb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtpXS5oYXNTaGlwKSB7XG4gICAgICAgICAgICAgICAgc2hpcENvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBDb3VudDtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hhbmdlRGlyZWN0aW9uID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYXJyaWVyQ29yZHMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjYXJyaWVyQ29yZHMgPSBhd2FpdCBwbGFjZVNoaXBIb21lcGFnZShwbGF5ZXJCb2FyZCwgNSwgZGlyZWN0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChiYXR0bGVzaGlwQ29yZHMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBiYXR0bGVzaGlwQ29yZHMgPSBhd2FpdCBwbGFjZVNoaXBIb21lcGFnZShcbiAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChjcnVpc2VyQ29yZHMgPT0gdW5kZWZpbmVkIHx8IGNvdW50U2hpcHMoKSA8IDE4KSB7XG4gICAgICAgICAgICBjcnVpc2VyQ29yZHMgPSBhd2FpdCBwbGFjZVNoaXBIb21lcGFnZShwbGF5ZXJCb2FyZCwgMywgZGlyZWN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3Ryb3llckNvcmRzID0gYXdhaXQgcGxhY2VTaGlwSG9tZXBhZ2UocGxheWVyQm9hcmQsIDIsIGRpcmVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGRpcmVjdGlvbkNoYW5nZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZURpcmVjdGlvbik7XG4gICAgY29uc3Qgc2hpcFBsYWNlbWVudEd1aWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzaGlwUGxhY2VtZW50R3VpZGUuY2xhc3NMaXN0LmFkZCgnc2hpcC1ndWlkZScpO1xuICAgIHNoaXBQbGFjZW1lbnRHdWlkZS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIGNhcnJpZXInO1xuICAgIGdhbWVJbnRlcmZhY2UuYXBwZW5kKHNoaXBQbGFjZW1lbnRHdWlkZSwgZGlyZWN0aW9uQ2hhbmdlKTtcbiAgICBnYW1lSW50ZXJmYWNlLmFwcGVuZENoaWxkKHVwZGF0ZVBsYXllckJvYXJkKHBsYXllckJvYXJkKSk7XG4gICAgbGV0IGNhcnJpZXJDb3JkcyA9IGF3YWl0IHBsYWNlU2hpcEhvbWVwYWdlKHBsYXllckJvYXJkLCA1LCBkaXJlY3Rpb24pO1xuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcHMoY2FycmllckNvcmRzKTtcbiAgICBpZiAoZGlyZWN0aW9uID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwcyhjYXJyaWVyQ29yZHMgKyAxMCk7XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcHMoY2FycmllckNvcmRzICsgMjApO1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBzKGNhcnJpZXJDb3JkcyArIDMwKTtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwcyhjYXJyaWVyQ29yZHMgKyA0MCk7XG4gICAgICAgIGRvbm90QWxsb3dTaGlwcyhcbiAgICAgICAgICAgIHBsYXllckJvYXJkLFxuICAgICAgICAgICAgY2FycmllckNvcmRzLFxuICAgICAgICAgICAgWy0xMCwgLTksIC0xMSwgLTFdLFxuICAgICAgICAgICAgWzAsIDEwLCAyMCwgMzAsIDQwLCA0OSwgNTAsIDUxLCAzOSwgNDEsIDI5LCAzMSwgMTksIDIxLCAxMSwgOSwgMV0sXG4gICAgICAgICAgICAndmVydGljYWwnXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwcyhjYXJyaWVyQ29yZHMgKyAxKTtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwcyhjYXJyaWVyQ29yZHMgKyAyKTtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwcyhjYXJyaWVyQ29yZHMgKyAzKTtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwcyhjYXJyaWVyQ29yZHMgKyA0KTtcbiAgICAgICAgZG9ub3RBbGxvd1NoaXBzKFxuICAgICAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgICAgICBjYXJyaWVyQ29yZHMsXG4gICAgICAgICAgICBbLTEsIC0xMCwgLTExLCAtOSwgLTgsIC03LCAtNiwgLTVdLFxuICAgICAgICAgICAgWzUsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDAsIDEsIDIsIDMsIDRdLFxuICAgICAgICAgICAgJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgNVxuICAgICAgICApO1xuICAgIH1cbiAgICBnYW1lSW50ZXJmYWNlLnRleHRDb250ZW50ID0gJyc7XG4gICAgZ2FtZUludGVyZmFjZS5hcHBlbmQoc2hpcFBsYWNlbWVudEd1aWRlLCBkaXJlY3Rpb25DaGFuZ2UpO1xuICAgIGdhbWVJbnRlcmZhY2UuYXBwZW5kQ2hpbGQodXBkYXRlUGxheWVyQm9hcmQocGxheWVyQm9hcmQpKTtcblxuICAgIHNoaXBQbGFjZW1lbnRHdWlkZS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIGJhdHRsZXNoaXAnO1xuICAgIGxldCBiYXR0bGVzaGlwQ29yZHMgPSBhd2FpdCBwbGFjZVNoaXBIb21lcGFnZShwbGF5ZXJCb2FyZCwgNCwgZGlyZWN0aW9uKTtcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBzKGJhdHRsZXNoaXBDb3Jkcyk7XG4gICAgaWYgKGRpcmVjdGlvbiA9PSAndmVydGljYWwnKSB7XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcHMoYmF0dGxlc2hpcENvcmRzICsgMTApO1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBzKGJhdHRsZXNoaXBDb3JkcyArIDIwKTtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwcyhiYXR0bGVzaGlwQ29yZHMgKyAzMCk7XG4gICAgICAgIGRvbm90QWxsb3dTaGlwcyhcbiAgICAgICAgICAgIHBsYXllckJvYXJkLFxuICAgICAgICAgICAgYmF0dGxlc2hpcENvcmRzLFxuICAgICAgICAgICAgWy0xMCwgLTksIC0xMSwgLTFdLFxuICAgICAgICAgICAgWzAsIDEwLCAyMCwgMzAsIDQwLCAzOSwgNDEsIDI5LCAzMSwgMTksIDIxLCAxMSwgOSwgMV0sXG4gICAgICAgICAgICAndmVydGljYWwnXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwcyhiYXR0bGVzaGlwQ29yZHMgKyAxKTtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwcyhiYXR0bGVzaGlwQ29yZHMgKyAyKTtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwcyhiYXR0bGVzaGlwQ29yZHMgKyAzKTtcbiAgICAgICAgZG9ub3RBbGxvd1NoaXBzKFxuICAgICAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgICAgICBiYXR0bGVzaGlwQ29yZHMsXG4gICAgICAgICAgICBbLTEsIC0xMCwgLTExLCAtOSwgLTgsIC03LCAtNl0sXG4gICAgICAgICAgICBbNCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAwLCAxLCAyLCAzXSxcbiAgICAgICAgICAgICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIDRcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZ2FtZUludGVyZmFjZS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGdhbWVJbnRlcmZhY2UuYXBwZW5kKHNoaXBQbGFjZW1lbnRHdWlkZSwgZGlyZWN0aW9uQ2hhbmdlKTtcbiAgICBnYW1lSW50ZXJmYWNlLmFwcGVuZENoaWxkKHVwZGF0ZVBsYXllckJvYXJkKHBsYXllckJvYXJkKSk7XG5cbiAgICBsZXQgY3J1aXNlckNvcmRzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNydWlzZXJDb3JkcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgc2hpcFBsYWNlbWVudEd1aWRlLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgY3J1aXNlcnMnO1xuICAgICAgICBjcnVpc2VyQ29yZHMgPSBhd2FpdCBwbGFjZVNoaXBIb21lcGFnZShwbGF5ZXJCb2FyZCwgMywgZGlyZWN0aW9uKTtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwcyhjcnVpc2VyQ29yZHMpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcHMoY3J1aXNlckNvcmRzICsgMTApO1xuICAgICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwcyhjcnVpc2VyQ29yZHMgKyAyMCk7XG4gICAgICAgICAgICBkb25vdEFsbG93U2hpcHMoXG4gICAgICAgICAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgICAgICAgICAgY3J1aXNlckNvcmRzLFxuICAgICAgICAgICAgICAgIFstMTAsIC05LCAtMTEsIC0xXSxcbiAgICAgICAgICAgICAgICBbMCwgMTAsIDIwLCAzMCwgMjksIDMxLCAxOSwgMjEsIDExLCA5LCAxXSxcbiAgICAgICAgICAgICAgICAndmVydGljYWwnXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwcyhjcnVpc2VyQ29yZHMgKyAxKTtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcHMoY3J1aXNlckNvcmRzICsgMik7XG4gICAgICAgICAgICBkb25vdEFsbG93U2hpcHMoXG4gICAgICAgICAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgICAgICAgICAgY3J1aXNlckNvcmRzLFxuICAgICAgICAgICAgICAgIFstMSwgLTEwLCAtMTEsIC05LCAtOCwgLTddLFxuICAgICAgICAgICAgICAgIFs5LCAxMCwgMTEsIDEyLCAxMywgMCwgMSwgMiwgM10sXG4gICAgICAgICAgICAgICAgJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZUludGVyZmFjZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBnYW1lSW50ZXJmYWNlLmFwcGVuZChzaGlwUGxhY2VtZW50R3VpZGUsIGRpcmVjdGlvbkNoYW5nZSk7XG4gICAgICAgIGdhbWVJbnRlcmZhY2UuYXBwZW5kQ2hpbGQodXBkYXRlUGxheWVyQm9hcmQocGxheWVyQm9hcmQpKTtcbiAgICB9XG4gICAgbGV0IGRlc3Ryb3llckNvcmRzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIHNoaXBQbGFjZW1lbnRHdWlkZS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIGRlc3Ryb3llcnMnO1xuICAgICAgICBkZXN0cm95ZXJDb3JkcyA9IGF3YWl0IHBsYWNlU2hpcEhvbWVwYWdlKHBsYXllckJvYXJkLCAyLCBkaXJlY3Rpb24pO1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBzKGRlc3Ryb3llckNvcmRzKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBzKGRlc3Ryb3llckNvcmRzICsgMTApO1xuICAgICAgICAgICAgZG9ub3RBbGxvd1NoaXBzKFxuICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLFxuICAgICAgICAgICAgICAgIGRlc3Ryb3llckNvcmRzLFxuICAgICAgICAgICAgICAgIFstMTAsIC05LCAtMTEsIC0xXSxcbiAgICAgICAgICAgICAgICBbMCwgMTAsIDIwLCAxOSwgMjEsIDExLCA5LCAxXSxcbiAgICAgICAgICAgICAgICAndmVydGljYWwnXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwcyhkZXN0cm95ZXJDb3JkcyArIDEpO1xuICAgICAgICAgICAgZG9ub3RBbGxvd1NoaXBzKFxuICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLFxuICAgICAgICAgICAgICAgIGRlc3Ryb3llckNvcmRzLFxuICAgICAgICAgICAgICAgIFstMSwgLTEwLCAtMTEsIC05LCAtOF0sXG4gICAgICAgICAgICAgICAgWzksIDEwLCAxMSwgMTIsIDAsIDEsIDJdLFxuICAgICAgICAgICAgICAgICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGdhbWVJbnRlcmZhY2UudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgaWYgKGkgIT09IDMpIHtcbiAgICAgICAgICAgIGdhbWVJbnRlcmZhY2UuYXBwZW5kKHNoaXBQbGFjZW1lbnRHdWlkZSwgZGlyZWN0aW9uQ2hhbmdlKTtcbiAgICAgICAgfVxuICAgICAgICBnYW1lSW50ZXJmYWNlLmFwcGVuZENoaWxkKHVwZGF0ZVBsYXllckJvYXJkKHBsYXllckJvYXJkKSk7XG4gICAgfVxuICAgIFxuICAgIGdhbWVJbnRlcmZhY2UudGV4dENvbnRlbnQgPSAnJztcbiAgICBnYW1lSW50ZXJmYWNlLmFwcGVuZENoaWxkKHVwZGF0ZVBsYXllckJvYXJkKHBsYXllckJvYXJkKSk7XG4gICAgZ2FtZUluZm8uYXBwZW5kQ2hpbGQocGxheWVyRm9ybSk7XG4gICAgY29uc3QgcnVuR2FtZSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHBsYXllckZvcm1JbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkaXNwbGF5R2FtZShwbGF5ZXJGb3JtSW5wdXQudmFsdWUsIHBsYXllckJvYXJkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcGxheWVyRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBydW5HYW1lKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVwYWdlO1xuIiwiaW1wb3J0IHsgY291bnRIb3Jpem9udGFsU2hpcHMsIGNvdW50VmVydGljYWxTaGlwcyB9IGZyb20gJy4vc2hpcHNDb3VudCc7XG5cbmNvbnN0IHVwZGF0ZUluZm9ybWF0aW9uID0gKHBsYXllck5hbWUsIHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkLCBtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgZ2FtZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwbGF5ZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVySW5mby5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItaW5mbycpO1xuICAgIGNvbnN0IHBTaGlwc0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IHBTaGlwc0NvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYXllckJvYXJkLmJvYXJkW2ldLmhhc1NoaXAgJiZcbiAgICAgICAgICAgIHBsYXllckJvYXJkLmJvYXJkW2ldLmlzSGl0ID09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcFNoaXBzQ291bnQgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwU2hpcHNMZWZ0LnRleHRDb250ZW50ID1cbiAgICAgICAgJ1NoaXBzIGxlZnQ6ICcgK1xuICAgICAgICAoY291bnRWZXJ0aWNhbFNoaXBzKHBsYXllckJvYXJkKS5zaGlwc0NvdW50ICtcbiAgICAgICAgICAgIGNvdW50SG9yaXpvbnRhbFNoaXBzKHBsYXllckJvYXJkKS5zaGlwc0NvdW50KTtcbiAgICBjb25zdCBwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcE5hbWUudGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lO1xuICAgIHBsYXllckluZm8uYXBwZW5kKHBOYW1lLCBwU2hpcHNMZWZ0KTtcbiAgICBjb25zdCBjb21wdXRlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21wdXRlckluZm8uY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItaW5mbycpO1xuICAgIGNvbnN0IGNTaGlwc0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGNTaGlwc0NvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuYm9hcmRbaV0uaGFzU2hpcCAmJlxuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5ib2FyZFtpXS5pc0hpdCA9PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNTaGlwc0NvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY1NoaXBzTGVmdC50ZXh0Q29udGVudCA9XG4gICAgICAgICdTaGlwcyBsZWZ0OiAnICtcbiAgICAgICAgKGNvdW50VmVydGljYWxTaGlwcyhjb21wdXRlckJvYXJkKS5zaGlwc0NvdW50ICtcbiAgICAgICAgICAgIGNvdW50SG9yaXpvbnRhbFNoaXBzKGNvbXB1dGVyQm9hcmQpLnNoaXBzQ291bnQpO1xuICAgIGNvbnN0IGNOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjTmFtZS50ZXh0Q29udGVudCA9ICdDb21wdXRlcic7XG4gICAgY29tcHV0ZXJJbmZvLmFwcGVuZChjTmFtZSwgY1NoaXBzTGVmdCk7XG4gICAgY29uc3QgZ2FtZUluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjdXJyZW50R2FtZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGdhbWVJbmZvRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRHYW1lSW5mbyk7XG4gICAgZ2FtZUluZm9EaXYuY2xhc3NMaXN0LmFkZCgnZ2FtZS1pbmZvJyk7XG4gICAgY3VycmVudEdhbWVJbmZvLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICBnYW1lSW5mby5hcHBlbmQocGxheWVySW5mbywgZ2FtZUluZm9EaXYsIGNvbXB1dGVySW5mbyk7XG4gICAgcmV0dXJuIGdhbWVJbmZvO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlSW5mb3JtYXRpb247XG4iLCJleHBvcnQgY29uc3QgZG9ub3RBbGxvd1NoaXBzID0gKFxuICAgIHBsYXllckJvYXJkLFxuICAgIGNvcmRzLFxuICAgIGNvcmRzTWludXMsXG4gICAgY29yZHNQbHVzLFxuICAgIGRpcmVjdGlvbixcbiAgICBsZW5ndGhcbikgPT4ge1xuICAgIGxldCBpbmRleDtcbiAgICBpZiAoZGlyZWN0aW9uID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3Jkc01pbnVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbmRleCA9IGNvcmRzICsgY29yZHNNaW51c1tpXTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvcmRzID09IDAgfHwgY29yZHMudG9TdHJpbmcoKS5zcGxpdCgnJylbMV0gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXgudG9TdHJpbmcoKS5zcGxpdCgnJylbMV0gPCA5IHx8IGluZGV4IDwgOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQuYm9hcmRbaW5kZXhdLmNhbkhhdmVTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvcmRzID09IDkgfHwgY29yZHMudG9TdHJpbmcoKS5zcGxpdCgnJylbMV0gPT0gOSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXgudG9TdHJpbmcoKS5zcGxpdCgnJylbMV0gPT0gMCB8fCBpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLmJvYXJkW2luZGV4XS5jYW5IYXZlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQuYm9hcmRbaW5kZXhdLmNhbkhhdmVTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29yZHNQbHVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbmRleCA9IGNvcmRzICsgY29yZHNQbHVzW2ldO1xuICAgICAgICAgICAgaWYgKGluZGV4IDw9IDk5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvcmRzID09IDAgfHwgY29yZHMudG9TdHJpbmcoKS5zcGxpdCgnJylbMV0gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXgudG9TdHJpbmcoKS5zcGxpdCgnJylbMV0gPCA5IHx8IGluZGV4IDwgOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQuYm9hcmRbaW5kZXhdLmNhbkhhdmVTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvcmRzID09IDkgfHwgY29yZHMudG9TdHJpbmcoKS5zcGxpdCgnJylbMV0gPT0gOSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXgudG9TdHJpbmcoKS5zcGxpdCgnJylbMV0gPT0gMCB8fCBpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLmJvYXJkW2luZGV4XS5jYW5IYXZlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQuYm9hcmRbaW5kZXhdLmNhbkhhdmVTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29yZHNNaW51cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5kZXggPSBjb3JkcyArIGNvcmRzTWludXNbaV07XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChjb3JkcyA9PSAwIHx8IGNvcmRzLnRvU3RyaW5nKCkuc3BsaXQoJycpWzFdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4LnRvU3RyaW5nKCkuc3BsaXQoJycpWzFdIDwgOSB8fCBpbmRleCA8IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLmJvYXJkW2luZGV4XS5jYW5IYXZlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3JkcyArIGxlbmd0aCAtIDEgPT0gOSB8fCBOdW1iZXIoY29yZHMudG9TdHJpbmcoKS5zcGxpdCgnJylbMV0pICsgbGVuZ3RoIC0gMT09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4LnRvU3RyaW5nKCkuc3BsaXQoJycpWzFdID09IDAgfHwgaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5ib2FyZFtpbmRleF0uY2FuSGF2ZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLmJvYXJkW2luZGV4XS5jYW5IYXZlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvcmRzUGx1cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5kZXggPSBjb3JkcyArIGNvcmRzUGx1c1tpXTtcbiAgICAgICAgICAgIGlmIChpbmRleCA8PSA5OSkge1xuICAgICAgICAgICAgICAgIGlmIChjb3JkcyA9PSAwIHx8IGNvcmRzLnRvU3RyaW5nKCkuc3BsaXQoJycpWzFdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4LnRvU3RyaW5nKCkuc3BsaXQoJycpWzFdIDwgOSB8fCBpbmRleCA8IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLmJvYXJkW2luZGV4XS5jYW5IYXZlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3JkcyArIGxlbmd0aCAtIDEgPT0gOSB8fCBOdW1iZXIoY29yZHMudG9TdHJpbmcoKS5zcGxpdCgnJylbMV0pICsgbGVuZ3RoIC0gMSA9PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleC50b1N0cmluZygpLnNwbGl0KCcnKVsxXSA9PSAwIHx8IGluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQuYm9hcmRbaW5kZXhdLmNhbkhhdmVTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5ib2FyZFtpbmRleF0uY2FuSGF2ZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgZGlyZWN0aW9uIH0gZnJvbSAnLi9ob21lcGFnZSc7XG5cbmNvbnN0IGNvbmRpdGlvbnNNZXQgPSAoaW5kZXgsIGRpcmVjdGlvbikgPT4ge1xuICAgIGlmIChkaXJlY3Rpb24gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2JvYXJkLmJvYXJkW2luZGV4ICsgaSAqIDEwXS5jYW5IYXZlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2JvYXJkLmJvYXJkW2luZGV4ICsgaV0uY2FuSGF2ZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBwbGFjZVNoaXBIb21lcGFnZSA9IChwbGF5ZXJCb2FyZCwgbGVuZ3RoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IHNoaXBEaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheWVyJHtpfWApO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLmJvYXJkW2ldLmhhc1NoaXAgPT0gZmFsc2UgJiZcbiAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5ib2FyZFtpXS5jYW5IYXZlU2hpcCA9PSB0cnVlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHNoaXBEaXJlY3Rpb24gPT0gJ3ZlcnRpY2FsJyAmJlxuICAgICAgICAgICAgICAgICAgICBpICsgKGxlbmd0aCAtIDEpICogMTAgPCAxMDBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcERpcmVjdGlvbiAhPT0gZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLmJvYXJkW2kgKyAobGVuZ3RoIC0gMSkgKiAxMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbkhhdmVTaGlwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID09ICd2ZXJ0aWNhbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBwbGF5ZXIke2kgKyBqICogMTB9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5ib2FyZFtpICsgKGxlbmd0aCAtIDEpICogMTBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYW5IYXZlU2hpcCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PSAndmVydGljYWwnXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAzNjlhMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHBsYXllciR7aSArIGogKiAxMH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMzY5YTEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID09ICdob3Jpem9udGFsJyAmJlxuICAgICAgICAgICAgICAgICAgICBpICsgKGxlbmd0aCAtIDEpIDwgaS50b1N0cmluZygpLnNwbGl0KCcnKVswXSAqIDEwICsgMTBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpIDwgOSAmJiBpICsgbGVuZ3RoIC0gMSA8IDEwKSB8fCBpID4gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBEaXJlY3Rpb24gIT09IGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQuYm9hcmRbaSArIGxlbmd0aCAtIDFdLmNhbkhhdmVTaGlwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PSAnaG9yaXpvbnRhbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHBsYXllciR7aSArIGp9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLmJvYXJkW2kgKyBsZW5ndGggLSAxXS5jYW5IYXZlU2hpcCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDM2OWExJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgcGxheWVyJHtpICsgan1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcjMDM2OWExJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICgoaSA8IDkgJiYgaSArIGxlbmd0aCAtIDEgPCAxMCkgfHwgaSA+IDkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5ib2FyZFtpICsgbGVuZ3RoIC0gMV0uY2FuSGF2ZVNoaXAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKyAobGVuZ3RoIC0gMSkgPFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkudG9TdHJpbmcoKS5zcGxpdCgnJylbMF0gKiAxMCArIDEwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PSAndmVydGljYWwnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5ib2FyZFtpICsgKGxlbmd0aCAtIDEpICogMTBdLmNhbkhhdmVTaGlwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBpICsgKGxlbmd0aCAtIDEpICogMTAgPCAxMDBcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYWNlU2hpcEhvbWVwYWdlO1xuIiwiY29uc3QgcGxheWVyRmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHR1cm4gPSBmYWxzZTtcbiAgICByZXR1cm4geyBuYW1lLCB0dXJuIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXJGYWN0b3J5O1xuICAgICAgICAgIiwiZXhwb3J0IGNvbnN0IGNvdW50VmVydGljYWxTaGlwcyA9ICh1Ym9hcmQpID0+IHtcbiAgICBjb25zdCBjb2x1bW5JbmRleCA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcbiAgICBsZXQgc2hpcHNDb3VudCA9IDA7XG4gICAgY29uc3Qgc2hpcENvcmRzID0ge307XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGZvciAobGV0IHggaW4gY29sdW1uSW5kZXgpIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICAgIGxldCBpID0gY29sdW1uSW5kZXhbeF07XG4gICAgICAgICAgICBpIDw9IGNvbHVtbkluZGV4W3hdICsgMTAgKyA4MDtcbiAgICAgICAgICAgIGkgPSBpICsgMTBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdWJvYXJkLmJvYXJkW2ldLmhhc1NoaXAgPT0gdHJ1ZSAmJlxuICAgICAgICAgICAgICAgICgodWJvYXJkLmJvYXJkW2kgKyAxMF0gJiYgdWJvYXJkLmJvYXJkW2kgKyAxMF0uaGFzU2hpcCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHVib2FyZC5ib2FyZFtpIC0gMTBdICYmIHVib2FyZC5ib2FyZFtpIC0gMTBdLmhhc1NoaXApKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzaGlwQ29yZHNbY29sdW1uSW5kZXhbeF1dKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBDb3Jkc1tjb2x1bW5JbmRleFt4XV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcENvcmRzW2NvbHVtbkluZGV4W3hdXS5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBDb3Jkc1tjb2x1bW5JbmRleFt4XV0ucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQga2V5IGluIHNoaXBDb3Jkcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb3Jkc1trZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzaGlwcy5wdXNoKFtzaGlwQ29yZHNba2V5XVtpXV0pO1xuICAgICAgICAgICAgd2hpbGUgKHNoaXBDb3Jkc1trZXldW2kgKyAxXSA9PSBzaGlwQ29yZHNba2V5XVtpXSArIDEwKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIHNoaXBzW3NoaXBzLmxlbmd0aCAtIDFdLnB1c2goc2hpcENvcmRzW2tleV1baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNoaXBzQ291bnQgPSBzaGlwcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2hpcHNbaV0uZXZlcnkoKGNvcmRzKSA9PiB1Ym9hcmQuYm9hcmRbY29yZHNdLmlzSGl0ID09IHRydWUpKSB7XG4gICAgICAgICAgICBzaGlwc0NvdW50IC09IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgc2hpcHNDb3VudCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvdW50SG9yaXpvbnRhbFNoaXBzID0gKHVib2FyZCkgPT4ge1xuICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gWzAsIDEwLCAyMCwgMzAsIDQwLCA1MCwgNjAsIDcwLCA4MCwgOTBdO1xuICAgIGxldCBzaGlwc0NvdW50ID0gMDtcbiAgICBjb25zdCBzaGlwQ29yZHMgPSB7fTtcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgeCBpbiBjb2x1bW5JbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gY29sdW1uSW5kZXhbeF07IGkgPD0gY29sdW1uSW5kZXhbeF0gKyA5OyBpID0gaSArIDEpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB1Ym9hcmQuYm9hcmRbaV0uaGFzU2hpcCA9PSB0cnVlICYmXG4gICAgICAgICAgICAgICAgKCh1Ym9hcmQuYm9hcmRbaSArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIHVib2FyZC5ib2FyZFtpICsgMV0uaGFzU2hpcCAmJlxuICAgICAgICAgICAgICAgICAgICBpICsgMSA8PSBjb2x1bW5JbmRleFt4XSArIDkpIHx8XG4gICAgICAgICAgICAgICAgICAgICh1Ym9hcmQuYm9hcmRbaSAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB1Ym9hcmQuYm9hcmRbaSAtIDFdLmhhc1NoaXAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgLSAxID49IGNvbHVtbkluZGV4W3hdKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmICghc2hpcENvcmRzW2NvbHVtbkluZGV4W3hdXSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwQ29yZHNbY29sdW1uSW5kZXhbeF1dID0gW107XG4gICAgICAgICAgICAgICAgICAgIHNoaXBDb3Jkc1tjb2x1bW5JbmRleFt4XV0ucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaGlwQ29yZHNbY29sdW1uSW5kZXhbeF1dLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGtleSBpbiBzaGlwQ29yZHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29yZHNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2hpcHMucHVzaChbc2hpcENvcmRzW2tleV1baV1dKTtcbiAgICAgICAgICAgIHdoaWxlIChzaGlwQ29yZHNba2V5XVtpICsgMV0gPT0gc2hpcENvcmRzW2tleV1baV0gKyAxKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIHNoaXBzW3NoaXBzLmxlbmd0aCAtIDFdLnB1c2goc2hpcENvcmRzW2tleV1baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNoaXBzQ291bnQgPSBzaGlwcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2hpcHNbaV0uZXZlcnkoKGNvcmRzKSA9PiB1Ym9hcmQuYm9hcmRbY29yZHNdLmlzSGl0ID09IHRydWUpKSB7XG4gICAgICAgICAgICBzaGlwc0NvdW50IC09IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgc2hpcHNDb3VudCB9O1xufTtcbiIsImNvbnN0IHVwZGF0ZUNvbXB1dGVyQm9hcmQgPSAoY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21wdXRlckJvYXJkSW50ZXJmYWNlLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLWJvYXJkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIHNxdWFyZS5zdHlsZS53aWR0aCA9ICczMHB4JztcbiAgICAgICAgc3F1YXJlLnN0eWxlLmhlaWdodCA9ICczMHB4JztcbiAgICAgICAgc3F1YXJlLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgd2hpdGUnO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgaSk7XG4gICAgICAgIGlmIChjb21wdXRlckJvYXJkLmJvYXJkW2ldLmlzSGl0KSB7XG4gICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXB1dGVyQm9hcmQuYm9hcmRbaV0uaXNNaXNzZWQpIHtcbiAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB9XG4gICAgICAgIGNvbXB1dGVyQm9hcmRJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gICAgY29tcHV0ZXJCb2FyZEludGVyZmFjZS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIGNvbXB1dGVyQm9hcmRJbnRlcmZhY2Uuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICdyZXBlYXQoMTAsIDMwcHgpJztcbiAgICBjb21wdXRlckJvYXJkSW50ZXJmYWNlLnN0eWxlLmdhcCA9ICc0cHgnO1xuICAgIHJldHVybiBjb21wdXRlckJvYXJkSW50ZXJmYWNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQ29tcHV0ZXJCb2FyZDtcbiIsImNvbnN0IHVwZGF0ZVBsYXllckJvYXJkID0gKHBsYXllckJvYXJkKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQm9hcmRJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXJCb2FyZEludGVyZmFjZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItYm9hcmQnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlLnN0eWxlLndpZHRoID0gJzMwcHgnO1xuICAgICAgICBzcXVhcmUuc3R5bGUuaGVpZ2h0ID0gJzMwcHgnO1xuICAgICAgICBzcXVhcmUuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCB3aGl0ZSc7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnaWQnLCBgcGxheWVyJHtpfWApO1xuICAgICAgICBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV0uaGFzU2hpcCkge1xuICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV0uaXNIaXQpIHtcbiAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV0uaXNNaXNzZWQpIHtcbiAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllckJvYXJkSW50ZXJmYWNlLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICAgIHBsYXllckJvYXJkSW50ZXJmYWNlLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgcGxheWVyQm9hcmRJbnRlcmZhY2Uuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICdyZXBlYXQoMTAsIDMwcHgpJztcbiAgICBwbGF5ZXJCb2FyZEludGVyZmFjZS5zdHlsZS5nYXAgPSAnNHB4JztcbiAgICByZXR1cm4gcGxheWVyQm9hcmRJbnRlcmZhY2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVQbGF5ZXJCb2FyZDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWUtaW50ZXJmYWNlIHtcXG4gIG1hcmdpbjogMmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHdpZHRoOiA1MGVtO1xcbn1cXG4uZ2FtZS1pbnRlcmZhY2UgaDMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5nYW1lLWludGVyZmFjZSBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMC4yNWVtIDFlbTtcXG59XFxuXFxuLmhvbWVwYWdlLWJvYXJkIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3JkZXI6IDE7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICAuZ2FtZS1pbnRlcmZhY2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgfVxcbn1cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogNGVtIDNlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuaGVhZGVyIGJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcmlnaHQ6IDNlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gIH1cXG4gIGhlYWRlciBidXR0b24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgfVxcbn1cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDUwZW07XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5pbmZvIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBnYXA6IDE2cHg7XFxufVxcbi5pbmZvIGZvcm0gbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmluZm8gZm9ybSBpbnB1dCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmluZm8gZm9ybSBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMC4yNWVtIDFlbTtcXG59XFxuLmluZm8gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMTZweDtcXG59XFxuLmluZm8gZGl2IGgzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4uaW5mbyBkaXYgcCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5pbmZvIGRpdiAuZ2FtZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmluZm8gZGl2IC5wbGF5ZXItaW5mbyB7XFxuICBnYXA6IDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1iYXNpczogMjAlO1xcbn1cXG4uaW5mbyBkaXYgLmNvbXB1dGVyLWluZm8ge1xcbiAgZ2FwOiA0cHg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1iYXNpczogMjAlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhvbWVwYWdlLWluZm8ge1xcbiAgb3JkZXI6IDI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICAuaW5mbyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICAuaW5mbyBkaXYge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmluZm8gZGl2IC5jb21wdXRlci1pbmZvIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzNjlhMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYm9hcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9ob21lcGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0o7QURBSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNFUjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7RUNDTjtBQUNGO0FDOUJBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBRGdDSjtBQy9CSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QURpQ1I7QUMvQkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QURpQ1I7O0FDN0JBO0VBQ0k7SUFDSSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtFRGdDTjtFQy9CTTtJQUNJLGtCQUFBO0lBQ0EsUUFBQTtFRGlDVjtBQUNGO0FFN0RBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FGK0RKO0FFOURJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FGZ0VSO0FFL0RRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUZpRVo7QUUvRFE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FGaUVaO0FFL0RRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FGaUVaO0FFOURJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FGZ0VSO0FFL0RRO0VBQ0ksaUJBQUE7QUZpRVo7QUUvRFE7RUFDSSxlQUFBO0FGaUVaO0FFL0RRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FGaUVaO0FFL0RRO0VBQ0ksUUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUZpRVo7QUUvRFE7RUFDSSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FGaUVaOztBRTVEQTtFQUNJLFFBQUE7QUYrREo7O0FFM0RBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsU0FBQTtFRjhETjtFRTdETTtJQUNJLHNCQUFBO0lBQ0EsbUJBQUE7RUYrRFY7RUU5RFU7SUFDSSxtQkFBQTtFRmdFZDtBQUNGO0FHbklBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FIcUlKOztBQXpJQTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtBQTRJSjs7QUExSUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBNklKOztBQTFJQTtFQUNJO0lBQ0ksWUFBQTtFQTZJTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lLWludGVyZmFjZSB7XFxuICAgIG1hcmdpbjogMmVtIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgd2lkdGg6IDUwZW07XFxuICAgIGgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xcbiAgICB9XFxufVxcblxcbi5ob21lcGFnZS1ib2FyZCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9yZGVyOiAxO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICAgIC5nYW1lLWludGVyZmFjZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxNnB4O1xcbiAgICB9XFxufVxcblwiLFwiQHVzZSAnLi9zdHlsZXMnO1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxufVxcbi5jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2OWExO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG59XFxuXCIsXCJoZWFkZXIge1xcbiAgICBwYWRkaW5nOiA0ZW0gM2VtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxuICAgIH1cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbSAxZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICByaWdodDogM2VtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICAgIGhlYWRlciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTZweDtcXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLmluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNTBlbTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvcm0ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgfVxcbiAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGRpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICBoMyB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICB9XFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZ2FtZS1pbmZvIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnBsYXllci1pbmZvIHtcXG4gICAgICAgICAgICBnYXA6IDRweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZmxleC1iYXNpczogMjAlO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmNvbXB1dGVyLWluZm8ge1xcbiAgICAgICAgICAgIGdhcDogNHB4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDIwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5ob21lcGFnZS1pbmZvIHtcXG4gICAgb3JkZXI6IDI7XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICAgIC5pbmZvIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgLmNvbXB1dGVyLWluZm8ge1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfSAgIFxcbn1cIixcIkBmb3J3YXJkICcuL2JvYXJkLnNjc3MnO1xcbkBmb3J3YXJkICcuL2hlYWRlci5zY3NzJztcXG5AZm9yd2FyZCAnLi9ob21lcGFnZS5zY3NzJztcXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vbWFpbi5zY3NzJztcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi9tb2R1bGVzL2hlYWRlcic7XG5pbXBvcnQgY3JlYXRlSG9tZXBhZ2UgZnJvbSAnLi9tb2R1bGVzL2hvbWVwYWdlJztcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5cbmNyZWF0ZUhvbWVwYWdlKCk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuIl0sIm5hbWVzIjpbImNvbXB1dGVyRmFjdG9yeSIsInR1cm4iLCJkb25vdEFsbG93U2hpcHMiLCJwbGFjZVNoaXBzUmFuZG9tbHkiLCJjYm9hcmQiLCJsZW5ndGgiLCJkaXJlY3Rpb24iLCJpbmRleCIsImNvbmRpdGlvbnNNZXQiLCJpIiwiYm9hcmQiLCJjYW5IYXZlU2hpcCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInBsYWNlU2hpcHMiLCJjb25kaXRpb24yIiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwic3BsaXQiLCJjaGFuZ2VHYW1lU3RhdHVzIiwic3RhcnRHYW1lIiwiY3JlYXRlSGVhZGVyIiwicGxheWVyRmFjdG9yeSIsImdhbWVib2FyZEZhY3RvcnkiLCJ1cGRhdGVQbGF5ZXJCb2FyZCIsInVwZGF0ZUNvbXB1dGVyQm9hcmQiLCJjcmVhdGVIb21lcGFnZSIsImdhbWVJbnRlcmZhY2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYW1lSW5mbyIsImhlYWRlciIsInRvSG9tZXBhZ2UiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwicmFuZG9tRGlyIiwiZGlzcGxheUdhbWUiLCJwbGF5ZXJOYW1lIiwicGxheWVyQm9hcmQiLCJnb0JhY2tCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXllciIsImNvbXB1dGVyIiwiY29tcHV0ZXJCb2FyZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInVwZGF0ZUluZm9ybWF0aW9uIiwiZ2FtZVN0YXR1cyIsImdldFVzZXJNb3ZlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpc0hpdCIsImlzTWlzc2VkIiwic3F1YXJlIiwiZ2V0RWxlbWVudEJ5SWQiLCJlIiwidGFyZ2V0IiwiaWQiLCJuYW1lIiwidXNlck1vdmUiLCJyZXN1bHQiLCJyZWNpZXZlQXR0YWNrIiwiY2hhbmdlUGxheWVyIiwic2V0VGltZW91dCIsInBvc3NpYmxlQ29yZHMiLCJwdXNoIiwiZ2V0UmFuZG9tQ29yZHMiLCJmbG9vciIsImZpbHRlciIsImNvcmQiLCJyYW5kb21Db3JkcyIsImFyZUFsbFN1bmsiLCJoaXQiLCJtaXNzZWQiLCJoYXNTaGlwIiwiY29yZHMiLCJwYWdlVGl0bGUiLCJwbGFjZVNoaXBIb21lcGFnZSIsImRpcmVjdGlvbkNoYW5nZSIsImFkZCIsInBsYXllckZvcm0iLCJwbGF5ZXJGb3JtTGFiZWwiLCJwbGF5ZXJGb3JtSW5wdXQiLCJtYXhMZW5ndGgiLCJwbGFjZWhvbGRlciIsInBsYXllckZvcm1TdWJtaXQiLCJhcHBlbmQiLCJjb3VudFNoaXBzIiwic2hpcENvdW50IiwiY2hhbmdlRGlyZWN0aW9uIiwiY2FycmllckNvcmRzIiwidW5kZWZpbmVkIiwiYmF0dGxlc2hpcENvcmRzIiwiY3J1aXNlckNvcmRzIiwiZGVzdHJveWVyQ29yZHMiLCJzaGlwUGxhY2VtZW50R3VpZGUiLCJydW5HYW1lIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImNvdW50SG9yaXpvbnRhbFNoaXBzIiwiY291bnRWZXJ0aWNhbFNoaXBzIiwibWVzc2FnZSIsInBsYXllckluZm8iLCJwU2hpcHNMZWZ0IiwicFNoaXBzQ291bnQiLCJzaGlwc0NvdW50IiwicE5hbWUiLCJjb21wdXRlckluZm8iLCJjU2hpcHNMZWZ0IiwiY1NoaXBzQ291bnQiLCJjTmFtZSIsImdhbWVJbmZvRGl2IiwiY3VycmVudEdhbWVJbmZvIiwiY29yZHNNaW51cyIsImNvcmRzUGx1cyIsIk51bWJlciIsInNoaXBEaXJlY3Rpb24iLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImoiLCJuZXh0U3F1YXJlIiwidWJvYXJkIiwiY29sdW1uSW5kZXgiLCJzaGlwQ29yZHMiLCJzaGlwcyIsIngiLCJrZXkiLCJldmVyeSIsImNvbXB1dGVyQm9hcmRJbnRlcmZhY2UiLCJpY29uIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJzZXRBdHRyaWJ1dGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdhcCIsInBsYXllckJvYXJkSW50ZXJmYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==