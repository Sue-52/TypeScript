class Boat {
  // @testDecorator
  // @logError("😯😯😯😯😯😯")
  // pilot() {
  //   console.log("swish") // swish
  // }
  @testDecorator
  color: string = "red";
}

function testDecorator(target: any, key: string) {
  // 类的原型对象
  console.log(target); // { pilot: [Function (anonymous)] }
  // 类方法名称
  console.log(key);    // pilot
}

function logError(errMsg: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    console.log(errMsg);
    console.log(target);
    console.log(desc);
  }
}

const boat = new Boat();
boat.color;