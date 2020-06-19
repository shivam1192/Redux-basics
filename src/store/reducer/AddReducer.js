import React from 'react';
import { ADD_FIELD } from '../action/ActionType';

const arrayField = {
    task : []
}

const AddReducer = (state=arrayField,action) => {
        switch(action.type){
            case ADD_FIELD:
                let copyTask = state.task.splice(0);
                copyTask.push(action.payload);
                // state.task.push(action.payload) 
                console.log(action.payload)
                return {
                    ...state,
                    task: copyTask

                    
            }
            default : return state
        }
}
 
export default AddReducer;