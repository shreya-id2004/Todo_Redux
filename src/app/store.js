import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice.js';

export const store = configureStore({
    reducer: todoReducer,
    
})

// store -> todo: id,task,isDone
//Actions: add a todo , mark as done,delete a todo
//{type:"add_todo",payload:"write code extra information"}
//