import { SEARCH_DRESS } from '../constants/ActionTypes'

const initialState = {
    text: ''
}

const dress = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_DRESS:
            return {
                text: action.text
            }
        default:
            return state
    }
}

export default dress