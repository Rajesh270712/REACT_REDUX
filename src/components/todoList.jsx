import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, toggleStatus } from "../Redux/action";

export const TodoList = () => {
  const { todos } = useSelector((state) => state);

  const dispatch = useDispatch();
  console.log(todos);

  return (
    <div>
      <center>
        <table>
          <thead>
            <tr>
              <th>Todo </th>
              <th> Status </th>
              <th>Toggle Status </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>
                  <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
                </td>
                <td>{todo.status ? "Complete" : "Incomplete"}</td>
                <td>
                  <button onClick={() => dispatch(toggleStatus(todo.id))}>
                    Toggle Status
                  </button>
                </td>
                <td>
                  <button onClick={()=>dispatch( deleteTodo(todo.id) )  } >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};
