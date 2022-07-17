"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemagicalmirai2022"]("Live2D",{

/***/ "./src/Live2D/lappview.ts":
/*!********************************!*\
  !*** ./src/Live2D/lappview.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.LAppView = void 0;\r\nvar cubismmatrix44_1 = __webpack_require__(/*! @framework/math/cubismmatrix44 */ \"./src/CubismSdk/Framework/src/math/cubismmatrix44.ts\");\r\nvar cubismviewmatrix_1 = __webpack_require__(/*! @framework/math/cubismviewmatrix */ \"./src/CubismSdk/Framework/src/math/cubismviewmatrix.ts\");\r\nvar LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ \"./src/Live2D/lappdefine.ts\"));\r\nvar lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ \"./src/Live2D/lappdelegate.ts\");\r\nvar lapplive2dmanager_1 = __webpack_require__(/*! ./lapplive2dmanager */ \"./src/Live2D/lapplive2dmanager.ts\");\r\nvar lapppal_1 = __webpack_require__(/*! ./lapppal */ \"./src/Live2D/lapppal.ts\");\r\nvar lappsprite_1 = __webpack_require__(/*! ./lappsprite */ \"./src/Live2D/lappsprite.ts\");\r\nvar touchmanager_1 = __webpack_require__(/*! ./touchmanager */ \"./src/Live2D/touchmanager.ts\");\r\nvar LAppView = (function () {\r\n    function LAppView() {\r\n        this._programId = null;\r\n        this._back = null;\r\n        this._gear = null;\r\n        this._touchManager = new touchmanager_1.TouchManager();\r\n        this._deviceToScreen = new cubismmatrix44_1.CubismMatrix44();\r\n        this._viewMatrix = new cubismviewmatrix_1.CubismViewMatrix();\r\n    }\r\n    LAppView.prototype.initialize = function () {\r\n        var width = lappdelegate_1.canvas.width, height = lappdelegate_1.canvas.height;\r\n        var ratio = width / height;\r\n        var left = -ratio;\r\n        var right = ratio;\r\n        var bottom = LAppDefine.ViewLogicalLeft;\r\n        var top = LAppDefine.ViewLogicalRight;\r\n        this._viewMatrix.setScreenRect(left, right, bottom, top);\r\n        this._viewMatrix.scale(LAppDefine.ViewScale, LAppDefine.ViewScale);\r\n        this._deviceToScreen.loadIdentity();\r\n        if (width > height) {\r\n            var screenW = Math.abs(right - left);\r\n            this._deviceToScreen.scaleRelative(screenW / width, -screenW / width);\r\n        }\r\n        else {\r\n            var screenH = Math.abs(top - bottom);\r\n            this._deviceToScreen.scaleRelative(screenH / height, -screenH / height);\r\n        }\r\n        this._deviceToScreen.translateRelative(-width * 0.5, -height * 0.5);\r\n        this._viewMatrix.setMaxScale(LAppDefine.ViewMaxScale);\r\n        this._viewMatrix.setMinScale(LAppDefine.ViewMinScale);\r\n        this._viewMatrix.setMaxScreenRect(LAppDefine.ViewLogicalMaxLeft, LAppDefine.ViewLogicalMaxRight, LAppDefine.ViewLogicalMaxBottom, LAppDefine.ViewLogicalMaxTop);\r\n    };\r\n    LAppView.prototype.release = function () {\r\n        this._viewMatrix = null;\r\n        this._touchManager = null;\r\n        this._deviceToScreen = null;\r\n        this._gear.release();\r\n        this._gear = null;\r\n        this._back.release();\r\n        this._back = null;\r\n        lappdelegate_1.gl.deleteProgram(this._programId);\r\n        this._programId = null;\r\n    };\r\n    LAppView.prototype.render = function () {\r\n        lappdelegate_1.gl.useProgram(this._programId);\r\n        if (this._back) {\r\n            this._back.render(this._programId);\r\n        }\r\n        if (this._gear) {\r\n            this._gear.render(this._programId);\r\n        }\r\n        lappdelegate_1.gl.flush();\r\n        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();\r\n        live2DManager.setViewMatrix(this._viewMatrix);\r\n        live2DManager.onUpdate();\r\n    };\r\n    LAppView.prototype.initializeSprite = function () {\r\n        var _this = this;\r\n        var width = lappdelegate_1.canvas.width;\r\n        var height = lappdelegate_1.canvas.height;\r\n        var textureManager = lappdelegate_1.LAppDelegate.getInstance().getTextureManager();\r\n        var resourcesPath = LAppDefine.ResourcesPath;\r\n        var imageName = '';\r\n        imageName = LAppDefine.BackImageName;\r\n        var initBackGroundTexture = function (textureInfo) {\r\n            var x = width * 0.5;\r\n            var y = height * 0.5;\r\n            var fwidth = textureInfo.width * 2.0;\r\n            var fheight = height * 0.95;\r\n            _this._back = new lappsprite_1.LAppSprite(x, y, fwidth, fheight, textureInfo.id);\r\n        };\r\n        textureManager.createTextureFromPngFile(resourcesPath + imageName, false, initBackGroundTexture);\r\n        if (this._programId == null) {\r\n            this._programId = lappdelegate_1.LAppDelegate.getInstance().createShader();\r\n        }\r\n    };\r\n    LAppView.prototype.onTouchesBegan = function (pointX, pointY) {\r\n        this._touchManager.touchesBegan(pointX, pointY);\r\n    };\r\n    LAppView.prototype.onTouchesMoved = function (pointX, pointY) {\r\n        var viewX = this.transformViewX(this._touchManager.getX());\r\n        var viewY = this.transformViewY(this._touchManager.getY());\r\n        this._touchManager.touchesMoved(pointX, pointY);\r\n        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();\r\n        live2DManager.onDrag(viewX, viewY);\r\n    };\r\n    LAppView.prototype.onTouchesEnded = function (pointX, pointY) {\r\n        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();\r\n        live2DManager.onDrag(0.0, 0.0);\r\n        {\r\n            var x = this._deviceToScreen.transformX(this._touchManager.getX());\r\n            var y = this._deviceToScreen.transformY(this._touchManager.getY());\r\n            if (LAppDefine.DebugTouchLogEnable) {\r\n                lapppal_1.LAppPal.printMessage(\"[APP]touchesEnded x: \".concat(x, \" y: \").concat(y));\r\n            }\r\n            live2DManager.onTap(x, y);\r\n            if (this._gear.isHit(pointX, pointY)) {\r\n                live2DManager.nextScene();\r\n            }\r\n        }\r\n    };\r\n    LAppView.prototype.transformViewX = function (deviceX) {\r\n        var screenX = this._deviceToScreen.transformX(deviceX);\r\n        return this._viewMatrix.invertTransformX(screenX);\r\n    };\r\n    LAppView.prototype.transformViewY = function (deviceY) {\r\n        var screenY = this._deviceToScreen.transformY(deviceY);\r\n        return this._viewMatrix.invertTransformY(screenY);\r\n    };\r\n    LAppView.prototype.transformScreenX = function (deviceX) {\r\n        return this._deviceToScreen.transformX(deviceX);\r\n    };\r\n    LAppView.prototype.transformScreenY = function (deviceY) {\r\n        return this._deviceToScreen.transformY(deviceY);\r\n    };\r\n    return LAppView;\r\n}());\r\nexports.LAppView = LAppView;\r\n\n\n//# sourceURL=webpack://magicalmirai2022/./src/Live2D/lappview.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "952e5e917e806200bd85"; }
/******/ }();
/******/ 
/******/ }
);