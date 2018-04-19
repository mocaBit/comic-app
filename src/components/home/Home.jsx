import React, { Component } from 'react';
import Search from './search/Search';
import CharacterList from './characterList/CharacterList';
import FavoriteCount from '../shared/favoriteCount/FavoriteCount';

class Home extends Component {
    render() {
        return(
            <div className="row-fluid Home">
                <Search/>
                <CharacterList/>
                <FavoriteCount />
            </div>
        )
    }
}

export default Home;