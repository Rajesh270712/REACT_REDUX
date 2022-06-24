import { ADD_TODO, DELETE_TODO, TOGGLE_STATUS } from "./actionTypes";

const initState = {
  todos: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }
    case TOGGLE_STATUS: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, status: !todo.status } : todo
        ),
      };
    }
    case DELETE_TODO:{
        return{
            ...state,
            todos: state.todos.filter((todo)=>(
                todo.id!==payload ? todo : null
            ))
        }
    }
    default:
      return state;
  }
};
