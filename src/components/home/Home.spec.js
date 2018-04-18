import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Home from './Home';
import Search from './search/Search';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

describe('>>>H O M E --- Render COMPONENT',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Home />);    
    })

    it('+++ render component', () => {
        expect(wrapper.find('.Home')).toHaveLength(1);
    });
});