import { SET_CHARACTER,
         SET_SEARCH } from '../constants';

export function setCharacter(characters) {
    return {
        type: SET_CHARACTER,
        characters
    }
} 
export function setSearch(search) {
    return {
        type: SET_SEARCH,
        search
    }
}  