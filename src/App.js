import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { todoSlice } from "./redux/todoapp/reducers/todoSlice";

function App() {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

// getting todos state for conditional rendering
  const todos = useSelector((globalStore)=>globalStore.todos);

  // update form visibility state
  const [editFormVisibility, setEditFormVisibility]=useState(false);

  // editTodo state
  const [editTodo, setEditTodo]=useState('');

  // this function will trigger when someone clicks the edit icon
  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  // back button click
  // const cancelUpdate=()=>{
  //   setEditFormVisibility(false);
  // }

  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP USING REACT-REDUX-TOOLKIT</h1>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
       setEditFormVisibility={setEditFormVisibility}/>
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {todos.length > 1&&(
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(todoSlice.actions.deleteAll())}>DELETE ALL</button>
      )}
    </div>
  );
}

export default App;
