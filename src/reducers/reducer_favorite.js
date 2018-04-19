import { SET_FAVORITES, 
         ADD_FAVORITES, 
         ADD_RANDOM_FAVORITES,
         DELETE_FAVORITES,
         DELETE_ALL_FAVORITES } from '../constants';

const removeById = (state = [], resourceUri) => {
    const favorites = state.filter(favorite => favorite.resourceURI !== resourceUri);
    return favorites;
}

const comicsFromCharacters = (state = [], characters) => {
    let comics = [];
    for(let character of characters){
        comics.push(...character.comics.items);
    }
    return comics;
}

const getRandomComics = (state = [], comics, amountComics) => {
    const initialFavorites = state.length;
    let favorites = state;
    
    //Si hay menos o igual comics de los solicitados (3) no genero numeros aleatoreos.
    if(comics.length <= amountComics){
        for(let comic of comics){
            favorites = addFavorite(favorites, comic);
        }
        return favorites;
    }
    
    while(comics.length > 0){
        //Genero un numero aleatoreo
        const randomNum = Math.floor(Math.random() * ((comics.length-1) - 0));
        //Agrego el favorito
        favorites = addFavorite(favorites, ...comics.splice(randomNum, 1));
        if(favorites.length === (initialFavorites + amountComics)){
            return favorites;
        }
    }
    return favorites;
}

const addFavorite = (state = [], comic) => {
    if(!state.some(item => item.resourceURI === comic.resourceURI)){
        return [...state, comic];
    }else{
        return state;
    }
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
        case ADD_RANDOM_FAVORITES:
            const comics = comicsFromCharacters(state, action.characters);
            favorites = getRandomComics(state, comics, 3);
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