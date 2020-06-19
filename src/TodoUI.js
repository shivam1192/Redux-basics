import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {AddAction} from './store/action/ActionCreater'
const TodoUI = () => {
    const tasks = useSelector(state => state.task)
    const dispatch = useDispatch()
    const addTask = (event) => {
        event.preventDefault()
        return dispatch(AddAction(event.target.task.value))
    }
    return ( 
        <div>
            <form onSubmit={addTask}>
                <input type="text" placeholder="add your task" name="task"/>
                <button type="submit">Add Task</button>
            </form>
            <div>
                {tasks.map((task)=>{
                    return(
                    <div>{task}</div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default TodoUI;