import { combineReducers } from 'redux';
import search from './reducer_search';
import characters from './reducer_character';
import favorites from './reducer_favorite';

export default combineReducers({
    search,
    characters,
    favorites
});