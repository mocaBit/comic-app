import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import searchReducer from './reducer_search';

describe('>>>R E D U C E R --- Test searchReducers',()=>{
    it('+++ reducer for SET_SEARCH', () => {
        let state = { search:null };
        const search = {isSearching: true, query: 'name'};
        state = searchReducer(state,{type:"SET_SEARCH", search})
        expect(state).toEqual(search);
    });
});