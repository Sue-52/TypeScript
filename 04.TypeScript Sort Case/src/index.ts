// 导入数值数组排序类
import { NumberCollection } from "./NumberCollection";
// 导入排序类
// import { Sorter } from "./Sorter";
import {CharacterCollection} from "./CharacterCollection";

// 使用数值数组排序类创建数值数组排序实例
let numbersCollection = new NumberCollection([5, 10, -3, 18]);
// 调用排序方法对数值数组进行排序
numbersCollection.sort();
// 输出排序结果
console.log(numbersCollection.data);

// 使用字符串排序类创建数值数组排序实例
let characterCollection = new CharacterCollection("dasfxzf");
// 调用排序方法对数值数组进行排序
characterCollection.sort();
// 输出排序结果
console.log(characterCollection.data);