"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
// 创建 controller 装饰器，
// 在 controller 装饰器中遍历构造函数原型对象，
// 将原型对象中的方法作为请求处理函数，
// 请求处理函数中的元数据作为请求路径，
// 创建并导出路由对象，通过路由对象注册路由。
var AppRouter_1 = require("../../AppRouter");
var MetadataKeys_1 = require("./MetadataKeys");
function controller(routePrefix) {
    return function (constructor) {
        // 获取路由对象实例
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in constructor.prototype) {
            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, constructor.prototype, key);
            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, constructor.prototype, key);
            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, constructor.prototype, key) || [];
            var handler = constructor.prototype[key];
            if (path) {
                router[method].apply(router, __spreadArray(__spreadArray(["".concat(routePrefix).concat(path)], middlewares, false), [handler], false));
            }
        }
    };
}
exports.controller = controller;
