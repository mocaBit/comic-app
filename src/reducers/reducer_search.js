import { SET_SEARCH } from '../constants';

export default (state = [], action) => {
    switch(action.type) {
        case SET_SEARCH:
            const { search } = action
            return search;
        default:
            return state;
    }
}