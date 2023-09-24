import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id: 1, todo: 'Buy Laptop', completed: false},
    {id: 2, todo: 'Master Redux', completed: false},
    {id: 3, todo: 'Watering Plants', completed: true},
];

// export const operationsReducer=(state=initialState, action)=>{
//     switch(action.type){
//         case ADD_TODO:
//             return [...state, action.payload];
//         case DELETE_ALL:
//             return [];
//         default: return state;
//     }
// }

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        //state.value += 1
        const {id,todo,completed}=action.payload;        
        state.push({id,todo,completed});
      },
      deleteAll: (state) => {
        state.length=0;
      },
      removeTodo:(state,action)=>{
        const filteredTodos = state.filter((todo)=>todo.id!==action.payload);
        state.length=0;       
        state.push(...filteredTodos);
      },
      handleEditSubmit:(state,action)=>{
        const{id,todo,completed} = action.payload;
              state.map((item)=>{
                if(item.id===id){
                    item.id =id;
                    item.todo =todo;
                    item.completed =completed;
                }
            })
        },
      handleCheckbox:(state,action)=>{
        state.map((item)=>{
                if(item.id===action.payload){
                    item.completed = !item.completed;
                }
            })
      },
    },
  })
  