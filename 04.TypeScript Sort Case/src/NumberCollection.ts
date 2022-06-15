import {Sorter} from "./Sorter";

// 通过继承简化排序类使用方法
export class NumberCollection extends  Sorter{
    constructor(public data: number[]) {
        super();
    }
    get length(): number {
        return this.data.length;
    }
    // 声明比较方法
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    // 声明交换方法
    swap(leftIndex: number, rightIndex: number): void {
        let leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}