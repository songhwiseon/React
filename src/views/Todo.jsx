import axios from 'axios';
import { useEffect, useState } from 'react';
import useTodoStore from '../store/todo';
export default function TodoView() {

   //https://jsonplaceholder.typicode.com/todos/1 요청

   
   //const {todos, todo, fetchTodos, fetchOneTodo} = useTodoStore();
   const todoStore = useTodoStore();

   const init = async ()=>{
    await todoStore.fetchTodos();
    await todoStore.fetchTodo(1);       
   }


    useEffect(() => {
      init();        
    }, []);



    return (
        <div>

            <h1>Todo 여러개</h1>
            <div>
               {todoStore.todos.map((element)=>TodoItem(element))}
            </div>

            <h1>TodoView</h1>
            <h2>유저아이디 : {todoStore.todo.userId}</h2>
            <h2>아이디 : {todoStore.todo.id}</h2>
            <h2>제목 : {todoStore.todo.title}</h2>
            <h2>수행여부 : {todoStore.todo.completed ? '완료' : '미완료'}</h2>
        </div>
    )
}


function TodoItem(element){
   return (
      <div>{element.id} : {element.title}</div>
   )
}
