class Boat {
  // @testDecorator
  // @logError("π―π―π―π―π―π―")
  // pilot() {
  //   console.log("swish") // swish
  // }
  @testDecorator
  color: string = "red";
}

function testDecorator(target: any, key: string) {
  // η±»ηεεε―Ήθ±‘
  console.log(target); // { pilot: [Function (anonymous)] }
  // η±»ζΉζ³εη§°
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