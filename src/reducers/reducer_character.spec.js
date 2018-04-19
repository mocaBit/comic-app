import characterReducers from './reducer_character';

describe('>>>R E D U C E R --- Test characterReducers',()=>{

    it('+++ reducer for SET_CHARACTER', () => {
        let state = {characters:[]};
        const character = {name: 'A-BOM', id: 101112}
        const characterList = [].push(character);
        state = characterReducers(state,{type:"SET_CHARACTER", characters: characterList});
        expect(state).toEqual(characterList);
    });
});