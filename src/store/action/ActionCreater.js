import React from 'react';
const { ADD_FIELD } = require("./ActionType");

export const AddAction = (task) => {
    return ({
        type: ADD_FIELD,
        payload : task
    })
}
