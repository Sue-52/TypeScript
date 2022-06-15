// 数值类型
let num: number = 10;
// 字符串类型
let str: string = "string";
// 布尔类型
let bool: boolean = true;

// 内置对象
let date: Date = new Date();

// 数组
// 字符串数组
let strArr: string[] = ["red", "green", "blue"];
// 数值数组
let numArr: number[] = [1, 2, 3, 4, 5];
// 布尔数组
let boolArr: boolean[] = [true, true, false];
// 字面量对象
let point: {
    x:number;
    y:number
};

// 自定义类
class Car {}
let car: Car = new Car();

// 函数类型定义
let logNumber: (n: number) => void;
logNumber = (n: number): void => {
    console.log(n);
}
logNumber(10);

// undefined 和 null 可以作为类型使用
let nothing: undefined = undefined;
let nothingMuch: null = null;

// 联合类型
let a: string | number | boolean = "123";
// 字面量类型
let b: "a" | "b" | "c" = "a";

type Size = "large" | "medium" | "small";
let pizzaSize: Size = "medium";
function selectPizza (size: Size) {
    pizzaSize = size;
}
selectPizza("small");

// 数组添加类型
const carMakers1: string[] = ["宝马", "比亚迪"];
const carMakers2: string[][] = [["宝马", "比亚迪"]];
const importDates: (string | Date)[] = [new Date(), "2022-06-10"];

// 因为定义了数组类型ts自动推断并提示该类型方法
carMakers1.map((value, index, array) => {
    value.toLocaleUpperCase();
})

// 元组约束数组位置类型
const employee: [string, number] = ["123",123];
// employee[0] = 100;
const employees: [number,string][] =[[1,"forrest"]];

// 接口: 用于复杂数据类型
interface Person {
    name: string;
    age: number;
    isMarry?: boolean;
    summary?(): string;
}

function printPerson(person:Person) {
    console.log(person);
}