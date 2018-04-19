import { SET_CHARACTER,
         GET_CHARACTER,
         SET_SEARCH,
         SET_FAVORITES,
         ADD_FAVORITES,
         ADD_RANDOM_FAVORITES,
         DELETE_FAVORITES,
         DELETE_ALL_FAVORITES } from '../constants';

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
export function setFavorites(favorites) {
    return {
        type: SET_FAVORITES,
        favorites
    }
}
export function addRandomFavorite(characters) {
    return {
        type: ADD_RANDOM_FAVORITES,
        characters
    }
}
export function getCharacter(character) {
    return {
        type: GET_CHARACTER,
        character
    }
} 
export function addFavorites(favorite) {
    return {
        type: ADD_FAVORITES,
        favorite
    }
}
export function deleteAllFavorites() {
    return {
        type: DELETE_ALL_FAVORITES
    }
}
export function deleteFavorites(resourceUri) {
    return {
        type: DELETE_FAVORITES,
        resourceUri
    }
}