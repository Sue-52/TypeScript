import {User} from "./User";
import {Company} from "./Company";
import {Map} from "./Map";

// 创建User用户实力
const user = new User();
console.log(user);

// 创建 Company 实力
const company = new Company();
console.log(company);

// 创建 Map 实例
const map = new Map("map");
map.addMarker(user);
map.addMarker(company);