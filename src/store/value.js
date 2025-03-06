import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const useStore = create(
  persist(
    (set, get) => ({
      //data
      search: '노트북',

      //function
      setSearch: (word) => set({search: word}),
    }),
    {
      name: 'value-storage', // 로컬 스토리지에 저장될 키 이름
    }
  )
);

export default useStore;
