import {createStore} from 'redux'
import AddReducer from './reducer/AddReducer'

export const store = createStore(AddReducer)
