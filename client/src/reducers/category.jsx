import * as types from '../actions/ActionTypes';

const initialState = {
    categoryname: 'All'
};

export default function category(state = initialState, action) {

    switch(action.type) {
        case types.CATEGORY:
            return {
                categoryname: 'change'
            };
        default:
            return state;
    }
}