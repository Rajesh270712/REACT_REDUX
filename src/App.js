import Home from "./components/home";
import { Routes, Route } from "react-router-dom";
import Todo from "./components/todo";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/todo/:id" element={<Todo/>} ></Route>
        {/* <Home /> */}
      </Routes>
    </div>
  );
}

export default App;
