import faker from "@faker-js/faker";
import {Mappable} from "./Map";

export class User implements Mappable{
    name: string;  // 用户信息
    location: {
        // 纬度
        lat: number;
        // 经度
        lng: number;
    };
    markerContent(): string {
        return `用户名为：${this.name}`
    }

    // 构造器
    constructor() {
        // 创建随即用户名
        this.name = faker.name.firstName();
        // 随机经纬度
        this.location = {
            lat: parseInt(faker.address.latitude()),
            lng: parseInt(faker.address.longitude()),
        }
    }
}