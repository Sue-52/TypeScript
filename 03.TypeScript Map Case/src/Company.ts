import faker from "@faker-js/faker";
import {Mappable} from "./Map";

export class Company implements Mappable{
    companyName: string;   // 公司名
    companyPhrase: string; // 公司口号
    location: {
        // 纬度
        lat: number;
        // 经度
        lng: number;
    };

    markerContent(): string {
        return `
      <h2>公司名称: ${this.companyName}</h2>
      <h4>公司口号: ${this.companyPhrase}</h4>
    `;
    }

    constructor() {
        this.companyName = faker.company.companyName();
        this.companyPhrase = faker.company.catchPhrase();
        // 随机经纬度
        this.location = {
            lat: parseInt(faker.address.latitude()),
            lng: parseInt(faker.address.longitude()),
        }
    }
}