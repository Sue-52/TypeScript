class ArrayOfNumbers {
    constructor(public collection: number[]){}
    get(index): number {
        return this.collection[index];
    }
}

class ArrayOfString {
    constructor(public collection: string[]){}
    get(index): string {
        return this.collection[index];
    }
}

// 使用泛型进行修改
class ArrayOfAnything<T> {
    constructor(public collection: T[]){}
    get(index): T {
        return this.collection[index];
    }
}

new ArrayOfAnything([1,2,3,4,5]);
new ArrayOfAnything(["a","b","c","d"]);