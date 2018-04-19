import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import CharacterDetail from './CharacterDetail';
import configureStore from 'redux-mock-store';

describe('>>>D E T A I L --- Render COMPONENT',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<CharacterDetail params={{id:1}}/>);  
    })

    *it('+++ render comeback button', () => {
        expect(wrapper.find('.comeback').exists()).toEqual(true);
     }); 
});