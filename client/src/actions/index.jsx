import { LOAD_CATEGORY, LOAD_DRESS } from '../constants/ActionTypes'

export const loadCategory = list => ({type: LOAD_CATEGORY, list});

export const loadDress = list => ({type: LOAD_DRESS, list});
