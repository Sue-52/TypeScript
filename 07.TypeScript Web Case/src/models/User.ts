interface UserProps {
    name?: string,
    age?: number,
}

export class User {
    constructor(private data: UserProps) { }

    // 获取数据
    get(propName: string): string | number {
        return this.data[propName];
    }

    // 修改数据
    set(update: UserProps) {
        console.log(update);
        this.data = { ...this.data, ...update };
    }
}