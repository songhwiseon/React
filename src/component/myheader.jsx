import { useState } from "react";

export default function MyHeader({id, point}) {

   const [searchWord, setSearchWord] = useState('');

   const onWordChange = (e) => {
      setSearchWord(e.target.value);
   }

   const onSearch = () => {
      alert(searchWord+' 로 검색!');
   }



   return(
      <header className="header">
         <div>
            <span>검색어 : {searchWord}</span>
            <input onChange={onWordChange} placeholder="검색어를 입력하세요"/>
            <button onClick={onSearch}>검색</button>
         </div>

         <div>
            <span>{id}</span>
            <span>포인트 : {point}</span>
         </div>
        
      </header>
   )
}