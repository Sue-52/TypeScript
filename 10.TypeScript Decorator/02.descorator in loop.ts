@classDecorator
class BoatTwo {
  @attributeDecorator
  color: string = "red";

  @getSetDecorator
  get formattedColor() {
    return `This Boats color is ${this.color}`;
  }

  @methodDecorator1
  @methodDecorator2
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator weight: number
  ) { }
}

function methodDecorator1(target: any, key: string, desc: PropertyDescriptor) {
  console.log("method1", key);
}
function methodDecorator2(target: any, key: string, desc: PropertyDescriptor) {
  console.log("method2", key);
}

function getSetDecorator(target: any, key: string, desc: PropertyDescriptor) {
  console.log("get set");
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log("parameter", index);
}

function attributeDecorator(target: any, key: string) {
  console.log("attribute", key);
}

function classDecorator(constructor: Function) {
  console.log("class");
}