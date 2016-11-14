import { LOAD_DRESS } from '../constants/ActionTypes'

const initialState = {
    loaddress : []
}

const dress = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_DRESS:
            return {
                loaddress: action.list
            }
        default:
            return state
    }
}

export default dress