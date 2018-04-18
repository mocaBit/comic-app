import React, { Component } from 'react';
import Search from './search/Search';

class Home extends Component {
    render() {
        return(
            <div className="row-fluid Home">
                <Search/>
            </div>
        )
    }
}

export default Home;