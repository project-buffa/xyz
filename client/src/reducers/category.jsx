import { LOAD_CATEGORY } from '../constants/ActionTypes'

const initialState = {
    loadcategory: []
}

const category = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_CATEGORY:
            return {
                loadcategory: action.list
            }
        default:
            return state
    }
}

export default category