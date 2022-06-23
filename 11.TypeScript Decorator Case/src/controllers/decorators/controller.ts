// 创建 controller 装饰器，
// 在 controller 装饰器中遍历构造函数原型对象，
// 将原型对象中的方法作为请求处理函数，
// 请求处理函数中的元数据作为请求路径，
// 创建并导出路由对象，通过路由对象注册路由。
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";


export function controller(routePrefix: string) {
  return function (constructor: Function) {
    // 获取路由对象实例
    const router = AppRouter.getInstance();
    for (let key in constructor.prototype) {
      const path = Reflect.getMetadata(MetadataKeys.path, constructor.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, constructor.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.middleware, constructor.prototype, key) || [];
      const handler = constructor.prototype[key];
      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, handler);
      }
    }
  };
}

