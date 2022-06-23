var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Boat = /** @class */ (function () {
    function Boat() {
        // @testDecorator
        // @logError("😯😯😯😯😯😯")
        // pilot() {
        //   console.log("swish") // swish
        // }
        this.color = "red";
    }
    __decorate([
        testDecorator
    ], Boat.prototype, "color");
    return Boat;
}());
function testDecorator(target, key) {
    // 类的原型对象
    console.log(target); // { pilot: [Function (anonymous)] }
    // 类方法名称
    console.log(key); // pilot
}
function logError(errMsg) {
    return function (target, key, desc) {
        console.log(errMsg);
        console.log(target);
        console.log(desc);
    };
}
var boat = new Boat();
boat.color;
