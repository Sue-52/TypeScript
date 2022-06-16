import React from "react";

function EventObject() {
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  const dragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    // event.target: 返回触发事件的元素
    // event.currentTarget: 返回绑定事件的元素
    console.log(event.target);
    console.log(event.currentTarget);
  };
  return (
    <>
      <button onClick={clickHandler}>button</button>
      <input type="text" onChange={changeHandler} />
      <div draggable onDragStart={dragStartHandler}>
        drag event
      </div>
    </>
  );
}

export default EventObject;