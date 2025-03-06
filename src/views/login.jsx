import MyHeader from "../component/myheader";
import { useEffect, useState } from "react";
export default function Login() {

  
  useEffect(() => {
    // 로그인 페이지 입니다.
  }, []);
  
  const [name, setName] = useState("신짱구");

  const changeName = () => {
    setName('신짱아');
  }


  return (

    <div>
        <MyHeader id="송휘선" point="1000"/>

        <h1>Login</h1>

        <h2>이름 : {name}</h2>
        <button onClick={changeName}>이름 변경</button> 
        
    </div>

   
  );
}
