"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 导入数值数组排序类
const NumberCollection_1 = require("./NumberCollection");
// 导入排序类
// import { Sorter } from "./Sorter";
const CharacterCollection_1 = require("./CharacterCollection");
// 使用数值数组排序类创建数值数组排序实例
let numbersCollection = new NumberCollection_1.NumberCollection([5, 10, -3, 18]);
// 调用排序方法对数值数组进行排序
numbersCollection.sort();
// 输出排序结果
console.log(numbersCollection.data);
// 使用字符串排序类创建数值数组排序实例
let characterCollection = new CharacterCollection_1.CharacterCollection("dasfxzf");
// 调用排序方法对数值数组进行排序
characterCollection.sort();
// 输出排序结果
console.log(characterCollection.data);
