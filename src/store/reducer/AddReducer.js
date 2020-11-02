import React from 'react';
import { ADD_FIELD } from '../action/ActionType';

const arrayField = {
    task : "easy"
}

const AddReducer = (state=arrayField,action) => {
        switch(action.type){
            case ADD_FIELD:
                return {
                    task: action.payload   
            }
            default : return state
        }
}
 
export default AddReducer;