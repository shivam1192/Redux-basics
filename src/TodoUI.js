import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Data from './question.json';
import {AddAction} from './store/action/ActionCreater'
const TodoUI = () => {

    const [quest,setquest] = useState(false)
    const tasks = useSelector(state => state.task)
    const dispatch = useDispatch()
    
    const addTask = (event) => {
        event.preventDefault()
        setquest(true)
        return dispatch(AddAction(event.target.task.value))
    }
    return ( 
        <div> {
        !quest?
        <> <form onSubmit={addTask}>
        <select name="task">    
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        </select>
        <button type="submit">Add Task</button>
    </form></>:
        <><div>
        
    </div></>}
           
            
        </div>
     );
}
 
export default TodoUI;