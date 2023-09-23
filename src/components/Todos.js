import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { todoSlice } from '../redux/todoapp/reducers/todoSlice';

export const Todos = ({handleEditClick, editFormVisibility}) => {

    const todos = useSelector((globalStore)=>globalStore.todos);

    const dispatch=useDispatch();

    return todos.map((todo)=>(
      <div key={todo.id} className='todo-box'>
          <div className='content'>
              <input type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(todoSlice.actions.handleCheckbox(todo.id))}></input>
               <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                  {todo.todo}
              </p>
          </div>
          <div className='actions-box'>
          {editFormVisibility===false&&(
                <>
          <span onClick={()=>handleEditClick(todo)}><Icon icon={edit2}/></span>
            <span onClick={()=>dispatch(todoSlice.actions.removeTodo(todo.id))}><Icon icon={trash}/></span>
          </>)}
          </div>
      </div>
    ))
  }