import React from 'react';
import { shallow } from 'enzyme';
import ConnectedCharacterList, { CharacterList } from './CharacterList';
import configureStore from 'redux-mock-store';

describe('>>>L I S T --- Passing the {store} directly',()=>{
    const characters = [].push({name: 'A-BOM', id: 101112});
    const initialState = {search: {isSearching: true, query: 'name'}, characters};
    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedCharacterList store={store} />);
    })

    it('+++ check Props search', () => {
       expect(container.prop('search')).toEqual(initialState.search);
    });

    it('+++ check Props characters', () => {
       expect(container.prop('characters')).toEqual(characters);
    });
});