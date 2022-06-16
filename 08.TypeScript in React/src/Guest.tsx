import React, { useState } from "react";

function Guest() {
    const [name,setName] = useState<string>("");
    const [guests, setGuests] = useState<string[]>([]);

    return ( 
        <>
        {/* 输入内容 */}
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={() => {
            setName("");
            setGuests([...guests, name]);
        }}>提交</button>
        <ul>
            {
                guests.map((guest) => <li key={guest}>{guest}</li>)
            }
        </ul>
        </>
     );
}

export default Guest;