import { SET_CHARACTER } from '../constants';

export default (state = [], action) => {
    switch(action.type) {
        case SET_CHARACTER:
            const { characters } = action
            return characters;
        default:
            return state;
    }
}