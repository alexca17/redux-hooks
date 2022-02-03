import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addTodoAction } from '../redux/actions';

const AddTodo = () => {
  const [todo, setTodo] = useState("")
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)


  const addTodo = () => {
      let newTodo = {
          id: todos.lenght,
          name: todo,
          complete: false
      };
      console.log('name ',newTodo.name)

      dispatch(addTodoAction(newTodo))
      setTodo("")

  }

    return (
  <div>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <button onClick={() => addTodo()}> Add Action </button>
  </div>);
};

export default AddTodo;
