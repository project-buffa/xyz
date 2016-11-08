import { SEARCH_DRESS } from '../constants/ActionTypes'

const initialState = {
    text: '',
    // dresscategory : ['OUTER', 'TOPS', 'BOTTOMS', 'ACCESSORIES'] 안되는 건가요?
    dresscategory : [
        { name : 'OUTER' },
        { name : 'TOPS' },
        { name : 'BOTTOMS' },
        { name : 'ACCESSORIES'}
    ]
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