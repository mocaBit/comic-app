import { setCharacter, setSearch, addRandomFavorite } from './index';

describe('>>>A C T I O N --- Test calculatorActions',()=>{
    it('+++ actionCreator setSearch', () => {
        const search = {isSearching: true, query: 'name'};
        const action = setSearch(search);
        expect(action).toEqual({type:'SET_SEARCH',  search});
    });

    it('+++ actionCreator setCharacter', () => {
        const characters = [];
        const action = setCharacter(characters);
        expect(action).toEqual({type:'SET_CHARACTER',  characters});
    });

    it('+++ actionCreator addRandomFavorite', () => {
        const characters = [];
        const action = addRandomFavorite(characters);
        expect(action).toEqual({type:'ADD_RANDOM_FAVORITES',  characters});
    });
});