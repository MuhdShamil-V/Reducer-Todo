import React, { useReducer, useState } from 'react';


function todoReducer(state, action) {
  switch (action.type) {
    case 'addTodo':
      return [...state, { list: action.payload.todo, id: Date.now() }];
    case 'dltTodo':
      return state.filter((to) => to.id !== action.payload.id);
    default:
      return state;
  }
}

function Todo() {
  
  const [todos, dispatch] = useReducer(todoReducer, []);

  const [todo, setTodo] = useState('');

  const addTodo = () => {
    dispatch({ type: 'addTodo', payload: { todo } });
    setTodo('');
  };

  const dltTodo = (id) => {
    dispatch({ type: 'dltTodo', payload: { id } });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type='text'
        value={todo}
        placeholder='Add Todo'
        onChange={(event) => setTodo(event.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todoo) => (
          <li key={todoo.id}>
            {todoo.list}
            <button onClick={() => dltTodo(todoo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
