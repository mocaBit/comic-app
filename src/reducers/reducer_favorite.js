import { SET_FAVORITES, 
         ADD_FAVORITES, 
         DELETE_FAVORITES,
         DELETE_ALL_FAVORITES } from '../constants';

const removeById = (state = [], resourceUri) => {
    const favorites = state.filter(favorite => favorite.resourceURI !== resourceUri);
    return favorites;
}

export default (state = [], action) => {
    let favorites;
    switch(action.type) {
        case SET_FAVORITES:
            favorites = [...action.favorites];
            return favorites;
        case ADD_FAVORITES:
            favorites = [...state, action.favorite];
            return favorites;
        case DELETE_FAVORITES:
            favorites = removeById(state, action.resourceUri);
            return favorites;
        case DELETE_ALL_FAVORITES:
            favorites = [];
            return favorites;
        default:
            return state;
    }
}