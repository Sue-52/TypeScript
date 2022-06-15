import {NumberCollection} from "./NumberCollection";

// 定义接口
// interface Sortable {
//     length: number;
//     compare(leftIndex: number, rightIndex: number): boolean;
//     swap(leftIndex: number, rightIndex: number): void;
// }

// 因为继承了父类数据，this指向子类
// 因为父类没有该方法所以要定义抽象类解决报错
export abstract class Sorter {
    // 接受需要排序的数组
    // constructor(public collection: Sortable) {}
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;
    // 创建排序方法
    sort(): void {
        const { length } = this;
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if(this.compare(j, j+1)){
                   this.swap(j,j+1);
                }
            }
        }
    }
}