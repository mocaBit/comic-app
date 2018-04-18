import React, { Component } from 'react';
import Search from './search/Search';
import CharacterList from './characterList/CharacterList';

class Home extends Component {
    render() {
        return(
            <div className="row-fluid Home">
                <Search/>
                <CharacterList/>
            </div>
        )
    }
}

export default Home;