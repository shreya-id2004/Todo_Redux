import './App.css'
import Todo from'./components/todo.jsx';
import { Provider } from 'react-redux'
import {store} from "./app/store.js"

function App() {
  
  return (
    <>
      <Provider store={store}>
        <Todo/>
      </Provider>
    </>
  )
}

export default App

//provider component : makes Redux store available to any nested components that need to access the Redux store
// store : the Redux store that contains the state of the application
//Triggering a state change
//useSelector : hook that allows components to access the state of the Redux store
//useDispatch : hook that allows components to dispatch actions to the Redux store //triggerig a state change
