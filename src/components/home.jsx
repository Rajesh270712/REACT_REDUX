import { TodoInput } from "./todoInput";
import { TodoList } from "./todoList";


function Home() {
  return (
    <div >
      <center><TodoInput/></center>
      <TodoList/>
    </div>
  );
}

export default Home;
