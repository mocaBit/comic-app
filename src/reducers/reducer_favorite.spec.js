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
});