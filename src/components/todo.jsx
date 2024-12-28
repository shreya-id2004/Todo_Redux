import { useSelector } from "react-redux"
import AddForm from "./AddForm.jsx"
import {useDispatch} from "react-redux"
import { deleteTodo} from "../features/todo/todoSlice";
import { marksAsDone } from "../features/todo/todoSlice";

export default function Todo(){
    const todos =  useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const clickHandler = (id) =>{
        console.log("clicked" , id);
        dispatch(deleteTodo(id));
    }
    const marksAction =(id) =>{
        console.log("clicked",id);
        dispatch(marksAsDone(id));
        
    }

    return(
        <div>
            <AddForm/>
            <h1>Todo List App</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.isDone? 'line-through' : 'none' }}>{todo.task}
                    <button onClick={() => clickHandler(todo.id)}>Delete</button>
                    <button onClick={()=> marksAction(todo.id )}>Done</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}