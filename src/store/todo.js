import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const useTodoStore = create(
  persist(
    (set, get) => ({
      //data
      todos: [],
      todo: {},

      //function
      //전체 목록 조회
      fetchTodos: async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        set({todos: res.data});
      },
      //특정 todo 조회
      fetchTodo: async (id) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        set({todo: res.data});
      }
    }),
    {
      name: 'todo-storage', // 로컬 스토리지에 저장될 키 이름
    }
  )
);

export default useTodoStore;