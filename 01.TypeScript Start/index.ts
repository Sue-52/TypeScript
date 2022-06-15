import axios from "axios";

// 定义获取数据的类型接口
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get("https://jsonplaceholder.typicode.com/todos/1")
.then((res)=> {
    // console.log(res.data)
    // 因为是动态语言无法进行实时检测类型
    // 那么使用 ts 定义接口来规范书写
    const todo = res.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(title, id,completed);

});

function logTodo(title:string,id:number,completed:boolean){
    console.log(`
    任务的ID是: ${id},
    任务的名称是: ${title},
    任务是否完成: ${completed}
  `)
}