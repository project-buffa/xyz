import { SHOW_CATEGORY } from '../constants/ActionTypes'

const initialState = {
    dresscategory : [
        { name : 'OUTER' },
        { name : 'TOPS' },
        { name : 'BOTTOMS' },
        { name : 'ACCESSORIES'}
    ]
}

const category = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_CATEGORY:
            return {
                text: action.text   
            }
        default:
            return state
    }
}

export default category