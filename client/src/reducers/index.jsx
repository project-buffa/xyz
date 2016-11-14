import { combineReducers } from 'redux'
import dress from './dress'
import category from './category'

const reducers = combineReducers({
    dress, category
})

export default reducers