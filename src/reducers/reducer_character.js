import { SET_CHARACTER, GET_CHARACTER } from '../constants';

export default (state = [], action) => {
    switch(action.type) {
        case SET_CHARACTER:
            const { characters } = action;
            return characters;
        case GET_CHARACTER:
            return [];
        default:
            return state;
    }
}