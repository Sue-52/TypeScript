// console.log("Hello");
import { User } from "./models/User";

const user = new User({ name: "zs", age: 18 });
// console.log(user.get("name"));
// console.log(user.get("age"));
user.set({ name: "ls", age: 22 });
console.log(user);