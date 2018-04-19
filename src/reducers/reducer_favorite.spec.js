import favoriteReducers  from './reducer_favorite';

describe('>>>R E D U C E R --- Test favoriteReducers',()=>{

    it('+++ reducer for ADD_FAVORITES', () => {
        let state = [];
        const favorite = {name: 'comic#1', resourceURI: 'http://comic.com/1234'};
        state = favoriteReducers(state,{type:"ADD_FAVORITES", favorite});
        expect(state.length).toEqual(1);
    });

    it('+++ reducer for DELETE_FAVORITES', () => {
        let state = [{name: 'comic#1', resourceURI: 'http://comic.com/1234'}];
        state = favoriteReducers(state,{type:"DELETE_FAVORITES", resourceUri: 'http://comic.com/1234'});
        expect(state.length).toEqual(0);
    });

    it('+++ reducer for DELETE_FAVORITES', () => {
        let state = [{name: 'comic#1', resourceURI: 'http://comic.com/1234'}];
        state = favoriteReducers(state,{type:"DELETE_ALL_FAVORITES"});
        expect(state.length).toEqual(0);
    });
    
    it('+++ reducer for ADD_RANDOM_FAVORITE default', () => {
        //Generar estado con valores aleatoreos
        let characters = []
        for(let i = 0; i < 5; i++){
            let character = {name: 'character'+i, comics: {items:[]}};
            for(let j = 0; j < 3; j++){
                const comic = {name: `comic ${i}_${j}`, resourceURI: `http://comic.com/${i}_${j}`};
                character.comics.items.push(comic);
            }
            characters.push(character);
        }
        //Disparar acción
        const state = favoriteReducers([],{type:"ADD_RANDOM_FAVORITES", characters});
        expect(state.length).toEqual(3);
    });
    
    it('+++ reducer for ADD_RANDOM_FAVORITE with existing favorites no repeat', () => {
        //Generar estado con valores aleatoreos
        let characters = []
        for(let i = 0; i < 5; i++){
            let character = {name: 'character'+i, comics: {items:[]}};
            for(let j = 0; j < 3; j++){
                const comic = {name: `comic ${i}_${j}`, resourceURI: `http://comic.com/${i}_${j}`};
                character.comics.items.push(comic);
            }
            characters.push(character);
        }
        let state = [{name: 'comic', resourceURI: 'http://comic.com/00'}];
        //Disparar acción
        state = favoriteReducers(state,{type:"ADD_RANDOM_FAVORITES", characters});
        expect(state.length).toEqual(4);
    });

    it('+++ reducer for ADD_RANDOM_FAVORITE without comics', () => {
        //Generar estado con valores aleatoreos
        let characters = []
        for(let i = 0; i < 5; i++){
            characters.push({name: 'character'+i, comics: {items:[]}});
        }
        //Disparar acción
        const state = favoriteReducers([],{type:"ADD_RANDOM_FAVORITES", characters});
        expect(state.length).toEqual(0);
    });
    
    it('+++ reducer for ADD_RANDOM_FAVORITE with less of 3 comics', () => {
        //Generar estado con valores aleatoreos
        let characters = []
        let character = {name: 'character', comics: {items:[]}};
        for(let j = 0; j < 2; j++){
            const comic = {name: `comic ${j}`, resourceURI: `http://comic.com/${j}`};
            character.comics.items.push(comic);
        }
        characters.push(character);
        let state = [];
        //Disparar acción
        state = favoriteReducers(state,{type:"ADD_RANDOM_FAVORITES", characters});
        expect(state.length).toEqual(2);
    });
    
    it('+++ reducer for ADD_RANDOM_FAVORITE without repeat comics', () => {
        //Generar estado con valores aleatoreos
        let characters = []
        let character = {name: 'character', comics: {items:[]}};
        for(let j = 0; j < 2; j++){
            const comic = {name: `comic ${j}`, resourceURI: `http://comic.com/${j}`};
            character.comics.items.push(comic);
        }
        characters.push(character);
        let state = [];
        //Disparar acción
        state = favoriteReducers(state,{type:"ADD_RANDOM_FAVORITES", characters});
        expect(state.length).toEqual(2);
    });   
});