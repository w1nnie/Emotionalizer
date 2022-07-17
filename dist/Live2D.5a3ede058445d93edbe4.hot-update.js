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

/***/ "./src/Live2D/lappmodel.ts":
/*!*********************************!*\
  !*** ./src/Live2D/lappmodel.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.LAppModel = void 0;\r\n__webpack_require__(/*! whatwg-fetch */ \"./node_modules/whatwg-fetch/fetch.js\");\r\nvar cubismdefaultparameterid_1 = __webpack_require__(/*! @framework/cubismdefaultparameterid */ \"./src/CubismSdk/Framework/src/cubismdefaultparameterid.ts\");\r\nvar cubismmodelsettingjson_1 = __webpack_require__(/*! @framework/cubismmodelsettingjson */ \"./src/CubismSdk/Framework/src/cubismmodelsettingjson.ts\");\r\nvar cubismbreath_1 = __webpack_require__(/*! @framework/effect/cubismbreath */ \"./src/CubismSdk/Framework/src/effect/cubismbreath.ts\");\r\nvar cubismeyeblink_1 = __webpack_require__(/*! @framework/effect/cubismeyeblink */ \"./src/CubismSdk/Framework/src/effect/cubismeyeblink.ts\");\r\nvar live2dcubismframework_1 = __webpack_require__(/*! @framework/live2dcubismframework */ \"./src/CubismSdk/Framework/src/live2dcubismframework.ts\");\r\nvar cubismusermodel_1 = __webpack_require__(/*! @framework/model/cubismusermodel */ \"./src/CubismSdk/Framework/src/model/cubismusermodel.ts\");\r\nvar acubismmotion_1 = __webpack_require__(/*! @framework/motion/acubismmotion */ \"./src/CubismSdk/Framework/src/motion/acubismmotion.ts\");\r\nvar cubismmotionqueuemanager_1 = __webpack_require__(/*! @framework/motion/cubismmotionqueuemanager */ \"./src/CubismSdk/Framework/src/motion/cubismmotionqueuemanager.ts\");\r\nvar csmmap_1 = __webpack_require__(/*! @framework/type/csmmap */ \"./src/CubismSdk/Framework/src/type/csmmap.ts\");\r\nvar csmvector_1 = __webpack_require__(/*! @framework/type/csmvector */ \"./src/CubismSdk/Framework/src/type/csmvector.ts\");\r\nvar cubismdebug_1 = __webpack_require__(/*! @framework/utils/cubismdebug */ \"./src/CubismSdk/Framework/src/utils/cubismdebug.ts\");\r\nvar LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ \"./src/Live2D/lappdefine.ts\"));\r\nvar lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ \"./src/Live2D/lappdelegate.ts\");\r\nvar lapppal_1 = __webpack_require__(/*! ./lapppal */ \"./src/Live2D/lapppal.ts\");\r\nvar lappwavfilehandler_1 = __webpack_require__(/*! ./lappwavfilehandler */ \"./src/Live2D/lappwavfilehandler.ts\");\r\nvar LoadStep;\r\n(function (LoadStep) {\r\n    LoadStep[LoadStep[\"LoadAssets\"] = 0] = \"LoadAssets\";\r\n    LoadStep[LoadStep[\"LoadModel\"] = 1] = \"LoadModel\";\r\n    LoadStep[LoadStep[\"WaitLoadModel\"] = 2] = \"WaitLoadModel\";\r\n    LoadStep[LoadStep[\"LoadExpression\"] = 3] = \"LoadExpression\";\r\n    LoadStep[LoadStep[\"WaitLoadExpression\"] = 4] = \"WaitLoadExpression\";\r\n    LoadStep[LoadStep[\"LoadPhysics\"] = 5] = \"LoadPhysics\";\r\n    LoadStep[LoadStep[\"WaitLoadPhysics\"] = 6] = \"WaitLoadPhysics\";\r\n    LoadStep[LoadStep[\"LoadPose\"] = 7] = \"LoadPose\";\r\n    LoadStep[LoadStep[\"WaitLoadPose\"] = 8] = \"WaitLoadPose\";\r\n    LoadStep[LoadStep[\"SetupEyeBlink\"] = 9] = \"SetupEyeBlink\";\r\n    LoadStep[LoadStep[\"SetupBreath\"] = 10] = \"SetupBreath\";\r\n    LoadStep[LoadStep[\"LoadUserData\"] = 11] = \"LoadUserData\";\r\n    LoadStep[LoadStep[\"WaitLoadUserData\"] = 12] = \"WaitLoadUserData\";\r\n    LoadStep[LoadStep[\"SetupEyeBlinkIds\"] = 13] = \"SetupEyeBlinkIds\";\r\n    LoadStep[LoadStep[\"SetupLipSyncIds\"] = 14] = \"SetupLipSyncIds\";\r\n    LoadStep[LoadStep[\"SetupLayout\"] = 15] = \"SetupLayout\";\r\n    LoadStep[LoadStep[\"LoadMotion\"] = 16] = \"LoadMotion\";\r\n    LoadStep[LoadStep[\"WaitLoadMotion\"] = 17] = \"WaitLoadMotion\";\r\n    LoadStep[LoadStep[\"CompleteInitialize\"] = 18] = \"CompleteInitialize\";\r\n    LoadStep[LoadStep[\"CompleteSetupModel\"] = 19] = \"CompleteSetupModel\";\r\n    LoadStep[LoadStep[\"LoadTexture\"] = 20] = \"LoadTexture\";\r\n    LoadStep[LoadStep[\"WaitLoadTexture\"] = 21] = \"WaitLoadTexture\";\r\n    LoadStep[LoadStep[\"CompleteSetup\"] = 22] = \"CompleteSetup\";\r\n})(LoadStep || (LoadStep = {}));\r\nvar LAppModel = (function (_super) {\r\n    __extends(LAppModel, _super);\r\n    function LAppModel() {\r\n        var _this = _super.call(this) || this;\r\n        _this._modelSetting = null;\r\n        _this._modelHomeDir = null;\r\n        _this._userTimeSeconds = 0.0;\r\n        _this._eyeBlinkIds = new csmvector_1.csmVector();\r\n        _this._lipSyncIds = new csmvector_1.csmVector();\r\n        _this._motions = new csmmap_1.csmMap();\r\n        _this._expressions = new csmmap_1.csmMap();\r\n        _this._hitArea = new csmvector_1.csmVector();\r\n        _this._userArea = new csmvector_1.csmVector();\r\n        _this._idParamAngleX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleX);\r\n        _this._idParamAngleY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleY);\r\n        _this._idParamAngleZ = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleZ);\r\n        _this._idParamEyeBallX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeBallX);\r\n        _this._idParamEyeBallY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeBallY);\r\n        _this._idParamBodyAngleX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBodyAngleX);\r\n        _this._state = LoadStep.LoadAssets;\r\n        _this._expressionCount = 0;\r\n        _this._textureCount = 0;\r\n        _this._motionCount = 0;\r\n        _this._allMotionCount = 0;\r\n        _this._wavFileHandler = new lappwavfilehandler_1.LAppWavFileHandler();\r\n        return _this;\r\n    }\r\n    LAppModel.prototype.loadAssets = function (dir, fileName) {\r\n        var _this = this;\r\n        this._modelHomeDir = dir;\r\n        fetch(\"\".concat(this._modelHomeDir).concat(fileName))\r\n            .then(function (response) { return response.arrayBuffer(); })\r\n            .then(function (arrayBuffer) {\r\n            var setting = new cubismmodelsettingjson_1.CubismModelSettingJson(arrayBuffer, arrayBuffer.byteLength);\r\n            _this._state = LoadStep.LoadModel;\r\n            _this.setupModel(setting);\r\n        });\r\n    };\r\n    LAppModel.prototype.setupModel = function (setting) {\r\n        var _this = this;\r\n        this._updating = true;\r\n        this._initialized = false;\r\n        this._modelSetting = setting;\r\n        if (this._modelSetting.getModelFileName() != '') {\r\n            var modelFileName = this._modelSetting.getModelFileName();\r\n            fetch(\"\".concat(this._modelHomeDir).concat(modelFileName))\r\n                .then(function (response) { return response.arrayBuffer(); })\r\n                .then(function (arrayBuffer) {\r\n                _this.loadModel(arrayBuffer);\r\n                _this._state = LoadStep.LoadExpression;\r\n                loadCubismExpression();\r\n            });\r\n            this._state = LoadStep.WaitLoadModel;\r\n        }\r\n        else {\r\n            lapppal_1.LAppPal.printMessage('Model data does not exist.');\r\n        }\r\n        var loadCubismExpression = function () {\r\n            if (_this._modelSetting.getExpressionCount() > 0) {\r\n                var count_1 = _this._modelSetting.getExpressionCount();\r\n                var _loop_1 = function (i) {\r\n                    var expressionName = _this._modelSetting.getExpressionName(i);\r\n                    var expressionFileName = _this._modelSetting.getExpressionFileName(i);\r\n                    fetch(\"\".concat(_this._modelHomeDir).concat(expressionFileName))\r\n                        .then(function (response) { return response.arrayBuffer(); })\r\n                        .then(function (arrayBuffer) {\r\n                        var motion = _this.loadExpression(arrayBuffer, arrayBuffer.byteLength, expressionName);\r\n                        if (_this._expressions.getValue(expressionName) != null) {\r\n                            acubismmotion_1.ACubismMotion.delete(_this._expressions.getValue(expressionName));\r\n                            _this._expressions.setValue(expressionName, null);\r\n                        }\r\n                        _this._expressions.setValue(expressionName, motion);\r\n                        _this._expressionCount++;\r\n                        if (_this._expressionCount >= count_1) {\r\n                            _this._state = LoadStep.LoadPhysics;\r\n                            loadCubismPhysics();\r\n                        }\r\n                    });\r\n                };\r\n                for (var i = 0; i < count_1; i++) {\r\n                    _loop_1(i);\r\n                }\r\n                _this._state = LoadStep.WaitLoadExpression;\r\n            }\r\n            else {\r\n                _this._state = LoadStep.LoadPhysics;\r\n                loadCubismPhysics();\r\n            }\r\n        };\r\n        var loadCubismPhysics = function () {\r\n            if (_this._modelSetting.getPhysicsFileName() != '') {\r\n                var physicsFileName = _this._modelSetting.getPhysicsFileName();\r\n                fetch(\"\".concat(_this._modelHomeDir).concat(physicsFileName))\r\n                    .then(function (response) { return response.arrayBuffer(); })\r\n                    .then(function (arrayBuffer) {\r\n                    _this.loadPhysics(arrayBuffer, arrayBuffer.byteLength);\r\n                    _this._state = LoadStep.LoadPose;\r\n                    loadCubismPose();\r\n                });\r\n                _this._state = LoadStep.WaitLoadPhysics;\r\n            }\r\n            else {\r\n                _this._state = LoadStep.LoadPose;\r\n                loadCubismPose();\r\n            }\r\n        };\r\n        var loadCubismPose = function () {\r\n            if (_this._modelSetting.getPoseFileName() != '') {\r\n                var poseFileName = _this._modelSetting.getPoseFileName();\r\n                fetch(\"\".concat(_this._modelHomeDir).concat(poseFileName))\r\n                    .then(function (response) { return response.arrayBuffer(); })\r\n                    .then(function (arrayBuffer) {\r\n                    _this.loadPose(arrayBuffer, arrayBuffer.byteLength);\r\n                    _this._state = LoadStep.SetupEyeBlink;\r\n                    setupEyeBlink();\r\n                });\r\n                _this._state = LoadStep.WaitLoadPose;\r\n            }\r\n            else {\r\n                _this._state = LoadStep.SetupEyeBlink;\r\n                setupEyeBlink();\r\n            }\r\n        };\r\n        var setupEyeBlink = function () {\r\n            if (_this._modelSetting.getEyeBlinkParameterCount() > 0) {\r\n                _this._eyeBlink = cubismeyeblink_1.CubismEyeBlink.create(_this._modelSetting);\r\n                _this._state = LoadStep.SetupBreath;\r\n            }\r\n            setupBreath();\r\n        };\r\n        var setupBreath = function () {\r\n            _this._breath = cubismbreath_1.CubismBreath.create();\r\n            var breathParameters = new csmvector_1.csmVector();\r\n            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleX, 28.0, 2.0, 6.5345, 1));\r\n            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleY, 0.0, 8.0, 3.5345, 0.5));\r\n            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleZ, 0.0, 10.0, 5.5345, 0.5));\r\n            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamBodyAngleX, 0.0, 4.0, 15.5345, 0.5));\r\n            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBreath), 0.5, 0.5, 3.2345, 1));\r\n            _this._breath.setParameters(breathParameters);\r\n            _this._state = LoadStep.LoadUserData;\r\n            loadUserData();\r\n        };\r\n        var loadUserData = function () {\r\n            if (_this._modelSetting.getUserDataFile() != '') {\r\n                var userDataFile = _this._modelSetting.getUserDataFile();\r\n                fetch(\"\".concat(_this._modelHomeDir).concat(userDataFile))\r\n                    .then(function (response) { return response.arrayBuffer(); })\r\n                    .then(function (arrayBuffer) {\r\n                    _this.loadUserData(arrayBuffer, arrayBuffer.byteLength);\r\n                    _this._state = LoadStep.SetupEyeBlinkIds;\r\n                    setupEyeBlinkIds();\r\n                });\r\n                _this._state = LoadStep.WaitLoadUserData;\r\n            }\r\n            else {\r\n                _this._state = LoadStep.SetupEyeBlinkIds;\r\n                setupEyeBlinkIds();\r\n            }\r\n        };\r\n        var setupEyeBlinkIds = function () {\r\n            var eyeBlinkIdCount = _this._modelSetting.getEyeBlinkParameterCount();\r\n            for (var i = 0; i < eyeBlinkIdCount; ++i) {\r\n                _this._eyeBlinkIds.pushBack(_this._modelSetting.getEyeBlinkParameterId(i));\r\n            }\r\n            _this._state = LoadStep.SetupLipSyncIds;\r\n            setupLipSyncIds();\r\n        };\r\n        var setupLipSyncIds = function () {\r\n            var lipSyncIdCount = _this._modelSetting.getLipSyncParameterCount();\r\n            for (var i = 0; i < lipSyncIdCount; ++i) {\r\n                _this._lipSyncIds.pushBack(_this._modelSetting.getLipSyncParameterId(i));\r\n            }\r\n            _this._state = LoadStep.SetupLayout;\r\n            setupLayout();\r\n        };\r\n        var setupLayout = function () {\r\n            var layout = new csmmap_1.csmMap();\r\n            _this._modelSetting.getLayoutMap(layout);\r\n            _this._modelMatrix.setupFromLayout(layout);\r\n            _this._state = LoadStep.LoadMotion;\r\n            loadCubismMotion();\r\n        };\r\n        var loadCubismMotion = function () {\r\n            _this._state = LoadStep.WaitLoadMotion;\r\n            _this._model.saveParameters();\r\n            _this._allMotionCount = 0;\r\n            _this._motionCount = 0;\r\n            var group = [];\r\n            var motionGroupCount = _this._modelSetting.getMotionGroupCount();\r\n            for (var i = 0; i < motionGroupCount; i++) {\r\n                group[i] = _this._modelSetting.getMotionGroupName(i);\r\n                _this._allMotionCount += _this._modelSetting.getMotionCount(group[i]);\r\n            }\r\n            for (var i = 0; i < motionGroupCount; i++) {\r\n                _this.preLoadMotionGroup(group[i]);\r\n            }\r\n            if (motionGroupCount == 0) {\r\n                _this._state = LoadStep.LoadTexture;\r\n                _this._motionManager.stopAllMotions();\r\n                _this._updating = false;\r\n                _this._initialized = true;\r\n                _this.createRenderer();\r\n                _this.setupTextures();\r\n                _this.getRenderer().startUp(lappdelegate_1.gl);\r\n            }\r\n        };\r\n    };\r\n    LAppModel.prototype.setupTextures = function () {\r\n        var _this = this;\r\n        var usePremultiply = true;\r\n        if (this._state == LoadStep.LoadTexture) {\r\n            var textureCount_1 = this._modelSetting.getTextureCount();\r\n            var _loop_2 = function (modelTextureNumber) {\r\n                if (this_1._modelSetting.getTextureFileName(modelTextureNumber) == '') {\r\n                    console.log('getTextureFileName null');\r\n                    return \"continue\";\r\n                }\r\n                var texturePath = this_1._modelSetting.getTextureFileName(modelTextureNumber);\r\n                texturePath = this_1._modelHomeDir + texturePath;\r\n                var onLoad = function (textureInfo) {\r\n                    _this.getRenderer().bindTexture(modelTextureNumber, textureInfo.id);\r\n                    _this._textureCount++;\r\n                    if (_this._textureCount >= textureCount_1) {\r\n                        _this._state = LoadStep.CompleteSetup;\r\n                    }\r\n                };\r\n                lappdelegate_1.LAppDelegate.getInstance()\r\n                    .getTextureManager()\r\n                    .createTextureFromPngFile(texturePath, usePremultiply, onLoad);\r\n                this_1.getRenderer().setIsPremultipliedAlpha(usePremultiply);\r\n            };\r\n            var this_1 = this;\r\n            for (var modelTextureNumber = 0; modelTextureNumber < textureCount_1; modelTextureNumber++) {\r\n                _loop_2(modelTextureNumber);\r\n            }\r\n            this._state = LoadStep.WaitLoadTexture;\r\n        }\r\n    };\r\n    LAppModel.prototype.reloadRenderer = function () {\r\n        this.deleteRenderer();\r\n        this.createRenderer();\r\n        this.setupTextures();\r\n    };\r\n    LAppModel.prototype.update = function () {\r\n        if (this._state != LoadStep.CompleteSetup)\r\n            return;\r\n        var deltaTimeSeconds = lapppal_1.LAppPal.getDeltaTime();\r\n        this._userTimeSeconds += deltaTimeSeconds;\r\n        this._dragManager.update(deltaTimeSeconds);\r\n        this._dragX = this._dragManager.getX();\r\n        this._dragY = this._dragManager.getY();\r\n        var motionUpdated = false;\r\n        this._model.loadParameters();\r\n        if (this._motionManager.isFinished()) {\r\n            this.startRandomMotion(LAppDefine.MotionGroupIdle, LAppDefine.PriorityIdle);\r\n        }\r\n        else {\r\n            motionUpdated = this._motionManager.updateMotion(this._model, deltaTimeSeconds);\r\n        }\r\n        this._model.saveParameters();\r\n        if (!motionUpdated) {\r\n            if (this._eyeBlink != null) {\r\n                this._eyeBlink.updateParameters(this._model, deltaTimeSeconds);\r\n            }\r\n        }\r\n        if (this._expressionManager != null) {\r\n            this._expressionManager.updateMotion(this._model, deltaTimeSeconds);\r\n        }\r\n        this._model.addParameterValueById(this._idParamAngleX, this._dragX * 30);\r\n        this._model.addParameterValueById(this._idParamAngleY, this._dragY * 30);\r\n        this._model.addParameterValueById(this._idParamAngleZ, this._dragX * this._dragY * -30);\r\n        this._model.addParameterValueById(this._idParamBodyAngleX, this._dragX * 10);\r\n        this._model.addParameterValueById(this._idParamEyeBallX, this._dragX);\r\n        this._model.addParameterValueById(this._idParamEyeBallY, this._dragY);\r\n        if (this._breath != null) {\r\n            this._breath.updateParameters(this._model, deltaTimeSeconds);\r\n        }\r\n        if (this._physics != null) {\r\n            this._physics.evaluate(this._model, deltaTimeSeconds);\r\n        }\r\n        if (this._lipsync) {\r\n            var value = 0.0;\r\n            this._wavFileHandler.update(deltaTimeSeconds);\r\n            value = this._wavFileHandler.getRms();\r\n            for (var i = 0; i < this._lipSyncIds.getSize(); ++i) {\r\n                this._model.addParameterValueById(this._lipSyncIds.at(i), value, 0.8);\r\n            }\r\n        }\r\n        if (this._pose != null) {\r\n            this._pose.updateParameters(this._model, deltaTimeSeconds);\r\n        }\r\n        this._model.update();\r\n    };\r\n    LAppModel.prototype.startMotion = function (group, no, priority, onFinishedMotionHandler) {\r\n        var _this = this;\r\n        if (priority == LAppDefine.PriorityForce) {\r\n            this._motionManager.setReservePriority(priority);\r\n        }\r\n        else if (!this._motionManager.reserveMotion(priority)) {\r\n            if (this._debugMode) {\r\n                lapppal_1.LAppPal.printMessage(\"[APP]can't start motion.\");\r\n            }\r\n            return cubismmotionqueuemanager_1.InvalidMotionQueueEntryHandleValue;\r\n        }\r\n        var motionFileName = this._modelSetting.getMotionFileName(group, no);\r\n        var name = \"\".concat(group, \"_\").concat(no);\r\n        var motion = this._motions.getValue(name);\r\n        var autoDelete = false;\r\n        if (motion == null) {\r\n            fetch(\"\".concat(this._modelHomeDir).concat(motionFileName))\r\n                .then(function (response) { return response.arrayBuffer(); })\r\n                .then(function (arrayBuffer) {\r\n                motion = _this.loadMotion(arrayBuffer, arrayBuffer.byteLength, null, onFinishedMotionHandler);\r\n                var fadeTime = _this._modelSetting.getMotionFadeInTimeValue(group, no);\r\n                if (fadeTime >= 0.0) {\r\n                    motion.setFadeInTime(fadeTime);\r\n                }\r\n                fadeTime = _this._modelSetting.getMotionFadeOutTimeValue(group, no);\r\n                if (fadeTime >= 0.0) {\r\n                    motion.setFadeOutTime(fadeTime);\r\n                }\r\n                motion.setEffectIds(_this._eyeBlinkIds, _this._lipSyncIds);\r\n                autoDelete = true;\r\n            });\r\n        }\r\n        else {\r\n            motion.setFinishedMotionHandler(onFinishedMotionHandler);\r\n        }\r\n        var voice = this._modelSetting.getMotionSoundFileName(group, no);\r\n        if (voice.localeCompare('') != 0) {\r\n            var path = voice;\r\n            path = this._modelHomeDir + path;\r\n            this._wavFileHandler.start(path);\r\n        }\r\n        if (this._debugMode) {\r\n            lapppal_1.LAppPal.printMessage(\"[APP]start motion: [\".concat(group, \"_\").concat(no));\r\n        }\r\n        return this._motionManager.startMotionPriority(motion, autoDelete, priority);\r\n    };\r\n    LAppModel.prototype.startRandomMotion = function (group, priority, onFinishedMotionHandler) {\r\n        if (this._modelSetting.getMotionCount(group) == 0) {\r\n            return cubismmotionqueuemanager_1.InvalidMotionQueueEntryHandleValue;\r\n        }\r\n        var no = Math.floor(Math.random() * this._modelSetting.getMotionCount(group));\r\n        return this.startMotion(group, no, priority, onFinishedMotionHandler);\r\n    };\r\n    LAppModel.prototype.setExpression = function (expressionId) {\r\n        var motion = this._expressions.getValue(expressionId);\r\n        if (this._debugMode) {\r\n            lapppal_1.LAppPal.printMessage(\"[APP]expression: [\".concat(expressionId, \"]\"));\r\n        }\r\n        if (motion != null) {\r\n            this._expressionManager.startMotionPriority(motion, false, LAppDefine.PriorityForce);\r\n        }\r\n        else {\r\n            if (this._debugMode) {\r\n                lapppal_1.LAppPal.printMessage(\"[APP]expression[\".concat(expressionId, \"] is null\"));\r\n            }\r\n        }\r\n    };\r\n    LAppModel.prototype.setRandomExpression = function () {\r\n        if (this._expressions.getSize() == 0) {\r\n            return;\r\n        }\r\n        var no = Math.floor(Math.random() * this._expressions.getSize());\r\n        for (var i = 0; i < this._expressions.getSize(); i++) {\r\n            if (i == no) {\r\n                var name_1 = this._expressions._keyValues[i].first;\r\n                this.setExpression(name_1);\r\n                return;\r\n            }\r\n        }\r\n    };\r\n    LAppModel.prototype.motionEventFired = function (eventValue) {\r\n        (0, cubismdebug_1.CubismLogInfo)('{0} is fired on LAppModel!!', eventValue.s);\r\n    };\r\n    LAppModel.prototype.hitTest = function (hitArenaName, x, y) {\r\n        if (this._opacity < 1) {\r\n            return false;\r\n        }\r\n        var count = this._modelSetting.getHitAreasCount();\r\n        for (var i = 0; i < count; i++) {\r\n            if (this._modelSetting.getHitAreaName(i) == hitArenaName) {\r\n                var drawId = this._modelSetting.getHitAreaId(i);\r\n                return this.isHit(drawId, x, y);\r\n            }\r\n        }\r\n        return false;\r\n    };\r\n    LAppModel.prototype.preLoadMotionGroup = function (group) {\r\n        var _this = this;\r\n        var _loop_3 = function (i) {\r\n            var motionFileName = this_2._modelSetting.getMotionFileName(group, i);\r\n            var name_2 = \"\".concat(group, \"_\").concat(i);\r\n            if (this_2._debugMode) {\r\n                lapppal_1.LAppPal.printMessage(\"[APP]load motion: \".concat(motionFileName, \" => [\").concat(name_2, \"]\"));\r\n            }\r\n            fetch(\"\".concat(this_2._modelHomeDir).concat(motionFileName))\r\n                .then(function (response) { return response.arrayBuffer(); })\r\n                .then(function (arrayBuffer) {\r\n                var tmpMotion = _this.loadMotion(arrayBuffer, arrayBuffer.byteLength, name_2);\r\n                var fadeTime = _this._modelSetting.getMotionFadeInTimeValue(group, i);\r\n                if (fadeTime >= 0.0) {\r\n                    tmpMotion.setFadeInTime(fadeTime);\r\n                }\r\n                fadeTime = _this._modelSetting.getMotionFadeOutTimeValue(group, i);\r\n                if (fadeTime >= 0.0) {\r\n                    tmpMotion.setFadeOutTime(fadeTime);\r\n                }\r\n                tmpMotion.setEffectIds(_this._eyeBlinkIds, _this._lipSyncIds);\r\n                if (_this._motions.getValue(name_2) != null) {\r\n                    acubismmotion_1.ACubismMotion.delete(_this._motions.getValue(name_2));\r\n                }\r\n                _this._motions.setValue(name_2, tmpMotion);\r\n                _this._motionCount++;\r\n                if (_this._motionCount >= _this._allMotionCount) {\r\n                    _this._state = LoadStep.LoadTexture;\r\n                    _this._motionManager.stopAllMotions();\r\n                    _this._updating = false;\r\n                    _this._initialized = true;\r\n                    _this.createRenderer();\r\n                    _this.setupTextures();\r\n                    _this.getRenderer().startUp(lappdelegate_1.gl);\r\n                }\r\n            });\r\n        };\r\n        var this_2 = this;\r\n        for (var i = 0; i < this._modelSetting.getMotionCount(group); i++) {\r\n            _loop_3(i);\r\n        }\r\n    };\r\n    LAppModel.prototype.releaseMotions = function () {\r\n        this._motions.clear();\r\n    };\r\n    LAppModel.prototype.releaseExpressions = function () {\r\n        this._expressions.clear();\r\n    };\r\n    LAppModel.prototype.doDraw = function () {\r\n        if (this._model == null)\r\n            return;\r\n        var viewport = [0, 0, lappdelegate_1.canvas.width, lappdelegate_1.canvas.height];\r\n        this.getRenderer().setRenderState(lappdelegate_1.frameBuffer, viewport);\r\n        this.getRenderer().drawModel();\r\n    };\r\n    LAppModel.prototype.draw = function (matrix) {\r\n        if (this._model == null) {\r\n            return;\r\n        }\r\n        if (this._state == LoadStep.CompleteSetup) {\r\n            matrix.multiplyByMatrix(this._modelMatrix);\r\n            this.getRenderer().setMvpMatrix(matrix);\r\n            this.doDraw();\r\n        }\r\n    };\r\n    return LAppModel;\r\n}(cubismusermodel_1.CubismUserModel));\r\nexports.LAppModel = LAppModel;\r\n\n\n//# sourceURL=webpack://magicalmirai2022/./src/Live2D/lappmodel.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "5e2e1f3b24f1fd8ef6f5"; }
/******/ }();
/******/ 
/******/ }
);