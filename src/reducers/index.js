import { combineReducers } from 'redux';
import search from './reducer_search';
import characters from './reducer_character';

export default combineReducers({
    search,
    characters
});