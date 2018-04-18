import React from 'react';
import { shallow } from 'enzyme';
import ConnectedSearch, {Search} from './Search';
import configureStore from 'redux-mock-store';

describe('>>>S E A R CH --- Passing the {store} directly',()=>{
    const initialState = {search: {isSearching: true, query: 'name'}};
    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedSearch store={store} />);
    })

    it('+++ check Props', () => {
       expect(container.prop('search')).toEqual(initialState.search);
    });
});

describe('>>>S E A R CH --- Render COMPONENT',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Search/>)
        
    })

    it('+++ render input search', () => {
       expect(wrapper.find('input').exists()).toEqual(true);
    }); 
});