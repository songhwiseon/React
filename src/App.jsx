import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/login";
import Register from "./views/register";
import "./res/css/style.css";
import Todo from "./views/Todo";  




export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            {/* Home */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/todo" element={<Todo />} />
        </Routes>
    </BrowserRouter>

  );
}

