import { createSlice ,nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos : [{id:"abc",task:"dome-task",isDone:false}],
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state , action)=>{
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone : false
            }
            state.todos.push(newTodo); //direct mutation
        },
        deleteTodo: (state , action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        marksAsDone: (state , action)=>{
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: true }; // Return a new object with updated isDone
                }
                return todo; // Return the unmodified todo
            })
        },
    },
});

export const {addTodo , deleteTodo , marksAsDone} = todoSlice.actions;
export default todoSlice.reducer;

//action creators : functions that create action objects
//Toolkit lets you write simpler immutable update logic using mutating syntax