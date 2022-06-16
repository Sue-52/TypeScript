import { useState } from "react";

const users = [
  { name: "张三", age: 20 },
  { name: "李四", age: 30 },
];

function Search() {
    const [name,setName] = useState<string>("");
    const [user, setUser] = useState<{ name: string; age: number } | undefined>();
    const searchHandler = () => {
        const user = users.find(user => user.name === name);
        setUser(user);
    }
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={searchHandler}>搜索</button>
            {user && JSON.stringify(user)}
        </div>
    )
}

export default Search;